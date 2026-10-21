const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

// On macOS (especially Intel Iris Graphics on macOS Sequoia / external high-refresh displays),
// Electron 27's GPU helper process has a known WindowServer compositing bug that causes continuous
// GPU draw loops, heating the 28W Intel package and triggering max fan speeds.
// Disabling hardware acceleration on macOS shifts 2D UI rendering to CPU Skia (<0.5% CPU),
// allowing the Intel Iris GPU to drop to 0.2W and keeping the machine cool and fans silent.
if (process.platform === 'darwin') {
  app.disableHardwareAcceleration();
}

// Ensure framerate does not exceed 60 FPS even on 144Hz/165Hz gaming monitors
app.commandLine.appendSwitch('limit-fps', '60');

function createWindow() {
  const isDev = !app.isPackaged && process.env.NODE_ENV !== 'production';
  const isDarwin = process.platform === 'darwin';
  const iconPath = isDarwin
    ? path.join(__dirname, '../build/icon.png')
    : path.join(__dirname, '../build/icon.ico');

  if (isDarwin && app.dock) {
    try {
      app.dock.setIcon(iconPath);
    } catch {
      // ignore if icon missing
    }
  }

  const mainWindow = new BrowserWindow({
    width: 1480,
    height: 940,
    minWidth: 1120,
    minHeight: 720,
    icon: iconPath,
    backgroundColor: '#020617',
    ...(isDarwin
      ? {
          titleBarStyle: 'hiddenInset',
          trafficLightPosition: { x: 16, y: 16 },
        }
      : {
          autoHideMenuBar: true,
        }),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      backgroundThrottling: true,
    },
  });

  if (isDev && process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else if (isDev) {
    mainWindow.loadURL('http://localhost:5175');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://eur-lex.europa.eu') || url.startsWith('https://www.boe.es') || url.startsWith('https://data.europa.eu')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
