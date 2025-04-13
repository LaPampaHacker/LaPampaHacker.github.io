---
title: "HackTheBox - Machine Cap"
summary: "Vamos a ver el paso a paso detallado de como ir resolviendo la maquina:"
date: "2025-03-29"
draft: false
tags:
- Tutorial
- HackTheBox
- Machines
---

### Paso a paso:

<div style="height: 5px;"></div>

- Luego de conectar nuestra VPN y encender la maquina. Vamos a realizar un ping 
    hacia la direccion ip de la maquin atacada para poder corroborar que tenemos
    conexión:
![Test Relative Image](./imagen.png)

<div style="height: 5px;"></div>

- Como el TTL es 63 podríamos decir que es una maquina Linux ya que:
![Test Relative Image](./imagen2.png)

<div style="height: 5px;"></div>

- Hago dos análisis de puertos para ver que puertos estan abiertos. El primero 
    es algo mas sigiloso solamente para ver cuales estan abiertos y el segundo es
    mas agresivo para ver las versiones:
![Test Relative Image](./imagen3.png)
![Test Relative Image](./imagen4.png)

<div style="height: 5px;"></div>

- Hago un análisis de la web:
![Test Relative Image](./imagen5.png)
![Test Relative Image](./imagen6.png)

<div style="height: 5px;"></div>

- Entramos a la ip a través de Firefox y seguramente nos entre a /data/o pero 
    por las dudas revisamos y sino ponemos 0 en data en la url:
![Test Relative Image](./imagen7.png)

<div style="height: 5px;"></div>

- Descargamos el reporte.

<div style="height: 5px;"></div>

- En la terminal lo movemos a la dirección donde estamos trabajando:
![Test Relative Image](./imagen8.png)

<div style="height: 5px;"></div>

- Lo abrimos:
![Test Relative Image](./imagen9.png)

<div style="height: 5px;"></div>

- Observamos que hay un usuario y contraseña:
![Test Relative Image](./imagen10.png)

<div style="height: 5px;"></div>

- Hago un ftp para establecer una conexion con el servidor a traves del usuario 
    que descubrimos y la contrasena:
![Test Relative Image](./imagen11.png)

<div style="height: 5px;"></div>

- Descargo el user.txt:
![Test Relative Image](./imagen12.png)

<div style="height: 5px;"></div>

- Dentro del Archivo encontramos en hash del user:
![Test Relative Image](./imagen13.png)

<div style="height: 5px;"></div>

- Ahora ingreso por ssh al dispositivo:
![Test Relative Image](./imagen14.png)

<div style="height: 5px;"></div>

- Busco linpeas.sh para encontrar un exploit que me permita escalar privilegios:
![Test Relative Image](./imagen15.png)

<div style="height: 5px;"></div>

- Descargo:
![Test Relative Image](./imagen16.png)

<div style="height: 5px;"></div>

- Lo pego en mi terminal:
![Test Relative Image](./imagen17.png)

<div style="height: 5px;"></div>

- Envio por curl una copia del archivo:
![Test Relative Image](./imagen18.png)

<div style="height: 5px;"></div>

- Despues lo ejecuto remotamente:
![Test Relative Image](./imagen19.png)

<div style="height: 5px;"></div>

- Espero a que se active correctamente:
![Test Relative Image](./imagen20.png)

<div style="height: 5px;"></div>

- Ejecuto un python3:
![Test Relative Image](./imagen21.png)

<div style="height: 5px;"></div>

- Ejecuto:
![Test Relative Image](./imagen22.png)

<div style="height: 5px;"></div>

- Ejecuto:
![Test Relative Image](./imagen23.png)

<div style="height: 5px;"></div>

- Y finalmente:
![Test Relative Image](./imagen24.png)














