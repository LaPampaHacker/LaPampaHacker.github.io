---
title: "HackTheBox - Challenge Alphascii Clashing"
summary: "Vamos a ver el paso a paso detallado de como ir resolviendo el challenge:"
date: "2025-04-07"
draft: false
tags:
- Tutorial
- HackTheBox
- Challenge
- Crypto
---

### Paso a paso:


- Entro a la web usando nestat en la terminal:
    ![Test Relative Image](./imagen.png)

<div style="height: 5px;"></div>

- Descargo y descomprimo el archivo, la contrasena como siempre es "hackthebox".

<div style="height: 5px;"></div>

- Veo el código de server.py.

<div style="height: 5px;"></div>

- Y encuentro a usuario logeados:
    ![Test Relative Image](./imagen2.png)
    
<div style="height: 5px;"></div>

- Veo q puedo logearme yo con {"option": "login"}:
    ![Test Relative Image](./imagen3.png)

<div style="height: 5px;"></div>

- Ademas veo que puedo crear usuarios:
    ![Test Relative Image](./imagen4.png)

<div style="height: 5px;"></div>

- Y puedo ver que puedo acceder a la flag:
    ![Test Relative Image](./imagen5.png)

<div style="height: 5px;"></div>

- Lo que veo también es que hay una colisión de hashes.

<div style="height: 5px;"></div>

- Por lo que busco hashes que tengan colisión:
    ![Test Relative Image](./imagen6.png)

<div style="height: 5px;"></div>

- Y compruebo que tiene los mismo hashes:
    ![Test Relative Image](./imagen7.png)

<div style="height: 5px;"></div>

- Los registro a ambos:
    ![Test Relative Image](./imagen8.png)
    ![Test Relative Image](./imagen9.png)

<div style="height: 5px;"></div>

- Y al entrar con el ultimo y haber una colisión de hashes me devuelve la flags:
    ![Test Relative Image](./imagen10.png)