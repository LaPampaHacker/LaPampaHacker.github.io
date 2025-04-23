---
title: "Tecnicas de REcopilacion de Informacion"
summary: "Te comparto una guía visual y práctica donde vamos a aprender a recopilar informacion de personas conm OSINT"
date: "2025-04-22"
draft: false
tags:
- Herramientas

---

### Introduccion

En el ámbito de la ciberseguridad, la capacidad de recolectar información de manera eficaz es clave para evaluar riesgos, detectar amenazas y fortalecer la defensa digital. En esta entrada, te presento una guía visual y práctica enfocada en técnicas OSINT (Open Source Intelligence) para la recopilación de información sobre personas. A lo largo de esta guía, aprenderás cómo identificar, extraer y analizar datos disponibles públicamente, utilizando herramientas y metodologías accesibles pero potentes. El objetivo es que adquieras habilidades aplicables tanto en investigaciones de ciberinteligencia como en ejercicios de red team o auditorías de seguridad.

<div style="height: 10px;"></div>

### Google dorks

Google no es solo una herramienta para buscar recetas o noticias. Cuando se usa con precisión, puede convertirse en una poderosa fuente de inteligencia. En esta guía visual y práctica, aprenderás a utilizar Google Dorks, una técnica basada en operadores avanzados de búsqueda, que permite descubrir información sensible expuesta en internet. Estos operadores son clave en investigaciones OSINT, auditorías de seguridad y análisis de superficie de ataque.

<div style="height: 5px;"></div>

A continuación, te comparto una tabla con los operadores más utilizados, su función y ejemplos concretos:
<h3>Operadores Google Dorks más útiles</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Operador</th>
      <th>Descripción</th>
      <th>Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>site:</code></td>
      <td>Limita los resultados a un dominio específico.</td>
      <td><code>site:linkedin.com "analista de ciberseguridad"</code></td>
    </tr>
    <tr>
      <td><code>intext:</code></td>
      <td>Busca palabras clave dentro del contenido del sitio web.</td>
      <td><code>intext:"contraseña predeterminada"</code></td>
    </tr>
    <tr>
      <td><code>intitle:</code></td>
      <td>Busca palabras clave en el título de las páginas.</td>
      <td><code>intitle:"index of" confidential</code></td>
    </tr>
    <tr>
      <td><code>filetype:</code></td>
      <td>Filtra resultados por tipo de archivo.</td>
      <td><code>filetype:pdf "plan de seguridad"</code></td>
    </tr>
    <tr>
      <td><code>inurl:</code></td>
      <td>Busca una palabra específica en la URL.</td>
      <td><code>inurl:admin login</code></td>
    </tr>
    <tr>
      <td><code>cache:</code></td>
      <td>Muestra la versión en caché de una página.</td>
      <td><code>cache:example.com</code></td>
    </tr>
    <tr>
      <td><code>"palabra"</code></td>
      <td>Realiza una búsqueda exacta de la palabra o frase entre comillas.</td>
      <td><code>"usuario: admin"</code></td>
    </tr>
    <tr>
      <td><code>OR</code></td>
      <td>Busca resultados que incluyan una palabra u otra.</td>
      <td><code>contraseña OR clave</code></td>
    </tr>
    <tr>
      <td><code>-palabra</code></td>
      <td>Excluye términos específicos de los resultados.</td>
      <td><code>login -facebook</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Funciona como comodín para sustituir una o varias palabras.</td>
      <td><code>"archivo * confidencial"</code></td>
    </tr>
  </tbody>
</table>


<div style="height: 10px;"></div>

## Ademas hay otras herramientas como sherlock

Sherlock es una herramienta de código abierto utilizada en investigaciones OSINT para buscar nombres de usuario en múltiples plataformas en línea. Su objetivo principal es detectar la presencia de un perfil específico en redes sociales, foros y otros servicios web, lo que permite trazar una huella digital de una persona.

Esta herramienta es especialmente útil para analistas de ciberseguridad, investigadores y profesionales de inteligencia que necesitan realizar búsquedas masivas y automatizadas sin acceder directamente a las cuentas o contraseñas.

<div style="height: 5px;"></div>

1. Búsqueda básica de un nombre de usuario:
```bash
sherlock juanperez
```

2. Búsqueda de múltiples usuarios:
```bash
sherlock juanperez mariagomez hacker_anon
```

3. Guardar resultados en un archivo de texto:
```bash
sherlock juanperez --output juanperez_resultados.txt
```

4. Usar proxy para ocultar IP:
```bash
sherlock juanperez --proxy "socks5://127.0.0.1:9050"
```

5. Buscar en un conjunto limitado de sitios:
```bash
sherlock juanperez --site facebook twitter instagram
```

6. Ejecutar con múltiples hilos para mayor velocidad:
```bash
sherlock juanperez --timeout 10 --print-found
```

<div style="height: 10px;"></div>

## Ademas otra mas potente pero mas lenta es Maigret

Maigret es una herramienta OSINT de código abierto similar a Sherlock, diseñada para buscar perfiles de usuario en más de 2.500 sitios web y servicios en línea, incluyendo redes sociales, plataformas de desarrollo, foros y más. Su objetivo es identificar la presencia digital de una persona a partir de su nombre de usuario o alias.

Desarrollada en Python, Maigret se destaca por ofrecer mayor cobertura que Sherlock, resultados más estructurados y un sistema de informes más detallado, lo que la convierte en una opción potente para investigadores y analistas de ciberinteligencia.

<div style="height: 5px;"></div>

1. Búsqueda básica:
```bash
maigret juanperez
```

2. Exportar resultados en PDF
```bash
maigret juanperez --pdf
```

3. Usar con proxies
```bash
maigret juanperez --proxy socks5://127.0.0.1:9050
```

4. Limitar la búsqueda a sitios relevantes
```bash
maigret juanperez -s facebook twitter instagram
```

5. Exportar en múltiples formatos
```bash
maigret juanperez --json --csv --html
```

<div style="height: 10px;"></div>

## Ademas otra para numeros de telefono es el bot de telegram @TrueCaller_Z_Bot

El Bot de Truecaller es una herramienta automatizada diseñada para identificar información asociada a números telefónicos desconocidos. Al enviar un número al bot, el usuario recibe de forma instantánea datos clave como el nombre del titular, el operador de telefonía y la región geográfica asociada al número.

Esta solución es ideal para:

Detectar llamadas no deseadas o spam.

Verificar la identidad de contactos desconocidos.

Aumentar la seguridad en las comunicaciones.

Características principales:

Consulta rápida y en tiempo real.

Interfaz sencilla a través de Telegram.

Respuestas automatizadas y precisas.

Funcionalidad gratuita y sin complicaciones.

Es una herramienta útil tanto para uso personal como profesional, especialmente en contextos donde la validación de contactos es fundamental.

Link: https://t.me/true_caller

¿Alguna vez te has preguntado quién está detrás de un número desconocido? Ahora, con nuestro Bot de Truecaller, ¡puedes descubrirlo fácilmente! Solo tienes que enviar un número de teléfono al bot y recibirás al instante información como:

📛 Nombre

📞 Operador

🌍 Región

Es rápido, seguro y muy fácil de usar. Ya sea que enfrentes llamadas spam o simplemente tengas curiosidad, ¡nuestro bot te cubre las espaldas!


<div style="height: 10px;"></div>

## Para corroborar filtraciones de datos podes usar

https://intelx.io/ : Motores de búsqueda OSINT para correos, leaks, números, IPs, etc.

https://haveibeenpwned.com/ : Verifica si un correo electrónico ha estado involucrado en filtraciones de datos.





