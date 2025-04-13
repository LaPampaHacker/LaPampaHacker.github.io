---
title: "HackTheBox - Challenge SpookyPass"
summary: "Vamos a ver el paso a paso detallado de como ir resolviendo el challenge:"
date: "2025-03-30"
draft: false
tags:
- Tutorial
- HackTheBox
- Challenge
- Reversing
---
### Paso a paso:



- Descargo el archivo .zip que me dan para el ejercicio



- Lo muevo a mi carpeta de trabajo



- Y lo descomprimo usando unzip, acordarse que la contrasena siempre va a ser 
"hackthebox": ![Test Relative Image](./imagen.png)



- Entro a la carpeta y ejecuto el script que hay y me pide escribir una contrasena y 
me dice que no soy un real fantasma dando a entender que la contrasena no es 
correcta:
![Test Relative Image](./imagen2.png)


```js
Ejecuto ltrace para ver a que compra la contraseña que puse:
```
![Test Relative Image](./imagen3.png)


```js
Ejecuto nuevamente y pongo la contrasena correcta y me dice nuevamente contrasena 
erronea:
```
![Test Relative Image](./imagen4.png)


```js
Le aplicxo una strings para ver elcodigo y veo que por alguna razon se le escapaba 
un "5" a la contrasena:
```
![Test Relative Image](./imagen5.png)


```js
Ejecuto nuevamente y pongo la contrasena correcta y me da la flag:
```
![Test Relative Image](./imagen6.png)