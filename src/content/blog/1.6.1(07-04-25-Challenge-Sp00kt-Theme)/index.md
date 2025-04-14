---
title: "HackTheBox - Challenge Sp00kt Theme"
summary: "Vamos a ver el paso a paso detallado de como ir resolviendo el challenge:"
date: "2025-04-07"
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

- Entro al archivo y empiezo a mirar y pido un tree para ver ordenadamente todo lo q contiene el directorio:
    ![Test Relative Image](./imagen.png)

<div style="height: 5px;"></div>

- Le pido que me muestre todo pero sin los .svgz y sin las carpetas:
    ![Test Relative Image](./imagen2.png)

<div style="height: 5px;"></div>

- Y le pido abrir lo con batcat:
    ![Test Relative Image](./imagen3.png)

<div style="height: 5px;"></div>

- Al revisar todo encuentro un echo:
    ![Test Relative Image](./imagen4.png)

<div style="height: 5px;"></div>

- Lo ejecuto y descubro la flag:
    ![Test Relative Image](./imagen5.png)