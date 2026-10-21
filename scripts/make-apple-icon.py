#!/usr/bin/env python3
import os
import sys
import subprocess
import numpy as np
from PIL import Image

def make_apple_squircle_mask(size=1024, pad=24, n=4.6):
    """
    Generates a mathematically exact Apple continuous curvature squircle mask
    with 4x supersampling for flawless anti-aliasing.
    """
    scale = 4
    s = size * scale
    p = pad * scale
    a = (s - 2 * p) / 2.0
    b = a
    cx = s / 2.0
    cy = s / 2.0
    
    y, x = np.ogrid[:s, :s]
    # Superellipse distance
    dist = (np.abs((x - cx) / a) ** n) + (np.abs((y - cy) / b) ** n)
    # Anti-aliased ramp around boundary
    ramp_width = 3.0
    mask_high = np.clip((1.0 - dist) * (a / ramp_width) + 0.5, 0.0, 1.0)
    mask_high = (mask_high * 255).astype(np.uint8)
    
    img_mask = Image.fromarray(mask_high, mode='L')
    filter_method = getattr(getattr(Image, 'Resampling', None), 'LANCZOS', getattr(Image, 'LANCZOS', Image.ANTIALIAS))
    return img_mask.resize((size, size), filter_method)

def process_icon(input_image_path, output_png_path='build/icon.png'):
    print(f"Cargando imagen base: {input_image_path}")
    raw_img = Image.open(input_image_path).convert('RGB')
    filter_method = getattr(getattr(Image, 'Resampling', None), 'LANCZOS', getattr(Image, 'LANCZOS', Image.ANTIALIAS))
    
    # Ensure 1024x1024
    if raw_img.size != (1024, 1024):
        raw_img = raw_img.resize((1024, 1024), filter_method)
    
    # 1. Create Apple squircle with transparent corners
    mask = make_apple_squircle_mask(size=1024, pad=28, n=4.6)
    
    rgba_img = raw_img.convert('RGBA')
    rgba_img.putalpha(mask)
    
    # Save 1024x1024 PNG with true transparent background
    os.makedirs(os.path.dirname(output_png_path), exist_ok=True)
    rgba_img.save(output_png_path, format='PNG')
    rgba_img.save('public/app-icon.png', format='PNG')
    print(f"PNG transparente guardado en: {output_png_path} y public/app-icon.png")
    
    # 2. Generate Windows ICO with transparency
    ico_sizes = [(256, 256), (128, 128), (64, 64), (48, 48), (32, 32), (16, 16)]
    rgba_img.save('build/icon.ico', format='ICO', sizes=ico_sizes)
    print("Windows build/icon.ico generado")
    
    # 3. Generate macOS ICNS via Apple's official iconutil
    iconset_dir = 'build/icon.iconset'
    os.makedirs(iconset_dir, exist_ok=True)
    icns_specs = [
        (16, 'icon_16x16.png'),
        (32, 'icon_16x16@2x.png'),
        (32, 'icon_32x32.png'),
        (64, 'icon_32x32@2x.png'),
        (128, 'icon_128x128.png'),
        (256, 'icon_128x128@2x.png'),
        (256, 'icon_256x256.png'),
        (512, 'icon_256x256@2x.png'),
        (512, 'icon_512x512.png'),
        (1024, 'icon_512x512@2x.png'),
    ]
    for size, fname in icns_specs:
        resized = rgba_img.resize((size, size), filter_method)
        resized.save(os.path.join(iconset_dir, fname))
    
    subprocess.run(['iconutil', '-c', 'icns', iconset_dir, '-o', 'build/icon.icns'], check=True)
    subprocess.run(['rm', '-rf', iconset_dir], check=True)
    print("macOS build/icon.icns generado con éxito")

if __name__ == '__main__':
    src = sys.argv[1] if len(sys.argv) > 1 else 'build/icon.png'
    process_icon(src)
