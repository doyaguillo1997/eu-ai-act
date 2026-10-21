import Cocoa

let iconPath = "build/icon.png"

guard let image = NSImage(contentsOfFile: iconPath) else {
    print("Error: no se encontró \(iconPath)")
    exit(1)
}

let fm = FileManager.default
let releaseUrl = URL(fileURLWithPath: "release")

if let contents = try? fm.contentsOfDirectory(at: releaseUrl, includingPropertiesForKeys: nil) {
    for file in contents where file.pathExtension.lowercased() == "dmg" {
        let success = NSWorkspace.shared.setIcon(image, forFile: file.path, options: [])
        if success {
            print("Icono personalizado asignado correctamente a \(file.lastPathComponent)")
        } else {
            print("Aviso: no se pudo asignar icono a \(file.lastPathComponent)")
        }
    }
}
