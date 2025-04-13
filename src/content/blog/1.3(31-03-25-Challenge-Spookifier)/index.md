---
title: "HackTheBox - Challenge Spookifier"
summary: "Vamos a ver el paso a paso detallado de como ir resolviendo el challenge:"
date: "2025-04-01"
draft: false
tags:
- Tutorial
- HackTheBox
- Challenge
- Web
---
### Paso a paso:


- Enciendo el entorno virtual y entro a la direccion que me proporcionan: 
    ![Test Relative Image](./imagen.png)

<div style="height: 5px;"></div>

- Descargo el archivo .zip que me dan para el ejercicio.

<div style="height: 5px;"></div>

- Lo muevo a mi carpeta de trabajo.

<div style="height: 5px;"></div>

- Y lo descomprimo usando unzip, acordarse que la contrasena siempre va a ser 
    "hackthebox": 
    ![Test Relative Image](./imagen2.png)

<div style="height: 5px;"></div>

- Entro al archivo y empiezo a mirar:
![Test Relative Image](./imagen3.png)

<div style="height: 5px;"></div>

- En dockerfile veo que me dice que la flag esta en el directorio /flag.txt:
![Test Relative Image](./imagen4.png)

<div style="height: 5px;"></div>

- Además veo que usa python y una distro de python que es mako.

<div style="height: 5px;"></div>

- Busco PayloadsAllTheThings, que es un directorio de payloads.

<div style="height: 5px;"></div>

- Entro a Server Side Template Injection y busco una versión mas vieja para 
    que este mas ordenado.

<div style="height: 5px;"></div>

- Empiezo a probar payloads y descubro que:
    ${self.module.runtime.util.os.system("id")}

<div style="height: 5px;"></div>

- Pareciera funcionar y le cambio por :
    ${self.module.runtime.util.os.popen('id').read()}

<div style="height: 5px;"></div>

- Como en dockerfile decia que la flag estaba en el directorio /flag le hago un cat:
    ${self.module.runtime.util.os.popen('cat /flag.txt').read()}

<div style="height: 5px;"></div>

- Y descubro la flag:
![Test Relative Image](./imagen5.png)