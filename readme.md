# electron study demo

```
pnpm i
pnpm run dev

```

## 生成 icon.icns

通过 iconutil 生成 icns

1. 准备 logo 图 1024 \* 1024 的两倍图，png 格式
2. 生成从 16 到 1024 的图片

```
sips -z 16 16     icon.png --out icons.iconset/icon_16x16.png
sips -z 32 32     icon.png --out icons.iconset/icon_16x16@2x.png
sips -z 32 32     icon.png --out icons.iconset/icon_32x32.png
sips -z 64 64     icon.png --out icons.iconset/icon_32x32@2x.png
sips -z 64 64     icon.png --out icons.iconset/icon_64x64.png
sips -z 128 128   icon.png --out icons.iconset/icon_64x64@2x.png
sips -z 128 128   icon.png --out icons.iconset/icon_128x128.png
sips -z 256 256   icon.png --out icons.iconset/icon_128x128@2x.png
sips -z 256 256   icon.png --out icons.iconset/icon_256x256.png
sips -z 512 512   icon.png --out icons.iconset/icon_256x256@2x.png
sips -z 512 512   icon.png --out icons.iconset/icon_512x512.png
sips -z 1024 1024   icon.png --out icons.iconset/icon_512x512@2x.png
sips -z 1024 1024   icon.png --out icons.iconset/icon_1024x1024.png
sips -z 2048 2048   icon.png --out icons.iconset/icon_1024x1024@2x.png
```

3. 生成 icon.icns

```
iconutil -c icns icons.iconset -o icon.icns
```
