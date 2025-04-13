---
title: "HackTheBox - Machine Cap"
summary: "Vamos a ver el paso a paso detallado de como ir resolviendo la maquina:"
date: "Mar 03 2025"
draft: false
tags:
- Tutorial
- Astro
- Astro Sphere
---

Paso a paso:
```js
Luego de conectar nuestra VPN y encender la maquina. Vamos a realizar un ping 
hacia la direccion ip de la maquin atacada para poder corroborar que tenemos
conexión:
```
![Test Relative Image](./imagen.png)

```js
Como el TTL es 63 podríamos decir que es una maquina Linux ya que:
```
![Test Relative Image](./imagen2.png)

```js
Hago dos análisis de puertos para ver que puertos estan abiertos. El primero 
es algo mas sigiloso solamente para ver cuales estan abiertos y el segundo es
mas agresivo para ver las versiones:
```
![Test Relative Image](./imagen3.png)
![Test Relative Image](./imagen4.png)

```js
Hago un análisis de la web:
```
![Test Relative Image](./imagen5.png)
![Test Relative Image](./imagen6.png)

```js
Entramos a la ip a través de Firefox y seguramente nos entre a /data/o pero 
por las dudas revisamos y sino ponemos 0 en data en la url:
```
![Test Relative Image](./imagen7.png)

```js
Descargamos el reporte.
```

```js
En la terminal lo movemos a la dirección donde estamos trabajando:
```
![Test Relative Image](./imagen8.png)

```js
Lo abrimos:
```
![Test Relative Image](./imagen9.png)

```js
Observamos que hay un usuario y contraseña:
```
![Test Relative Image](./imagen10.png)

```js
Hago un ftp para establecer una conexion con el servidor a traves del usuario 
que descubrimos y la contrasena:
```
![Test Relative Image](./imagen11.png)

```js
Descargo el user.txt:
```
![Test Relative Image](./imagen12.png)

```js
Dentro del Archivo encontramos en hash del user:
```
![Test Relative Image](./imagen13.png)


```js
Ahora ingreso por ssh al dispositivo:
```
![Test Relative Image](./imagen14.png)

```js
Busco linpeas.sh para encontrar un exploit que me permita escalar privilegios:
```
![Test Relative Image](./imagen15.png)

```js
Descargo:
```
![Test Relative Image](./imagen16.png)

```js
Lo pego en mi terminal:
```
![Test Relative Image](./imagen17.png)

```js
Envio por curl una copia del archivo:
```
![Test Relative Image](./imagen18.png)

```js
Despues lo ejecuto remotamente:
```
![Test Relative Image](./imagen19.png)

```js
Espero a que se active correctamente:
```
![Test Relative Image](./imagen20.png)

```js
Ejecuto un python3:
```
![Test Relative Image](./imagen21.png)

```js
Ejecuto:
```
![Test Relative Image](./imagen22.png)

```js
Ejecuto:
```
![Test Relative Image](./imagen23.png)

```js
Y finalmente:
```
![Test Relative Image](./imagen24.png)













