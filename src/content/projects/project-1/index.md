---
title: "Nmap"
summary: "Te comparto una guía visual y práctica con más de 100 comandos explicados de Nmap"
date: "2025-04-16"
draft: false
tags:
- Herramientas

demoUrl: https://nmap.org/
---
### Ideal para:

✅ Auditores de red
✅ Estudiantes de hacking ético
✅ Profesionales en ciberseguridad y SysAdmin
✅ Apasionados del escaneo de redes y la automatización en Linux

### Que encontrarás?

Encontrarás comandos clasificados por temáticas clave, incluyendo:

📡 Escaneos básicos, rangos y subredes
🕵️‍♂️ Tipos de escaneo (SYN, UDP, ACK, FIN, etc.)
🧠 Detección de sistemas, servicios y puertos
⚙️ Opciones avanzadas: velocidad, evasión y spoofing
🔐 Uso de scripts NSE para análisis, descubrimiento y vulnerabilidades
📋 Exportación en formatos profesionales y ejemplos reales

### Comandos de uso diario

Al final de la publicacion encontraras unos comando que son los que se usan para un reconocimiento inicial sobre alguna maquina o servivio.

<div style="height: 10px;"></div>

### Escaneos Básicos (1-10)

```js
1. nmap 192.168.1.1 — Realiza un escaneo rápido por defecto sobre la IP especificada.

2. nmap dominio.com — Escanea los puertos del dominio especificado para identificar servicios accesibles.

3. nmap 192.168.1.1 192.168.1.2- Escanea múltiples direcciones IP individuales.

4. nmap 192.168.1.1-10 — Escanea un rango de direcciones IP consecutivas.

5. nmap 192.168.1.0/24 — Escanea todos los hosts activos dentro de una subred completa.

6. nmap -v 192.168.1.1 — Ejecuta el escaneo mostrando información detallada en tiempo real.

7. nmap -vv — Muestra aún más detalle durante el escaneo (modo muy detallado).

8. nmap -T4 192 .168.1.1 — Realiza el escaneo con mayor velocidad, ideal para redes confiables.

9. nmap -T5 — Ejecuta un escaneo muy rápido pero fácilmente detectable por sistemas de seguridad.

1O. nmap -T1 — Ejecuta un escaneo muy lento y sigiloso para evadir detección.
```

<div style="height: 5px;"></div>

### Tipos de Escaneo (11—20)

```js
11. nmap -sS — Realiza un escaneo SYN (sigiloso), ideal para evitar detección por sistemas de seguridad.

12. nmap -sT — Ejecuta un escaneo TCP completo mediante conexión estándar (menos sigiloso).

13. nmap -sU — Escanea puertos UDP para detectar servicios no basados en TCP.

14. nmap -sN — Realiza un escaneo TCP NULL para evadir firewalls y detectar puertos abiertos.

15. nmap -sF — Ejecuta un escaneo FIN, útil para evadir ciertos filtros de red.

16. nmap -sX — Usa el escaneo Xmas, que envía paquetes con todas las flags activadas para detectar puertos abiertos.

17. nmap -sA — Envía paquetes ACK para identificar la presencia de firewalls o sistemas de filtrado.

18. nmap -sW — Escaneo basado en el análisis del campo Window TCP para detectar puertos abiertos.

19. nmap -sM — Realiza un escaneo Maimon, útil para evadir firewalls que bloquean escaneos tradicionales.

20. nmap -sZ — Ejecuta un escaneo SCTP COOKIE-ECHO para detectar servicios que utilizan SCTP (protocolo alternativo a TCP/UDP).
```

<div style="height: 5px;"></div>

### Reconocimiento y Deteccion (21—30)

```js
21. nmap -sV — Detecta versiones de los servicios que se ejecutan en los puertos abiertos.

22. nmap -sC — Ejecuta scripts predeterminados de Nmap para identificar vulnerabilidades y configuraciones comunes.

23. nmap -A — Ejecuta un análisis avanzado que incluye detección de SO, versiones, scripts y traceroute.

24. nmap -O — Detecta el sistema operativo del host objetivo.

25. nmap --osscan-guess — Intenta adivinar el sistema operativo cuando no puede determinarlo con certeza.

26. nmap --version-all — Realiza una detección de versiones exhaustiva sobre todos los servicios detectados.

27. nmap -Pn — Omite la detección de host (asume que todos están activos).

28. nmap -n — Omite la resolución DNS para acelerar el escaneo.

29. nmap --traceroute — Muestra la ruta de red hasta el objetivo (similar a traceroute).

30. nmap --reason — Muestra el motivo por el cual Nmap determina el estado de cada puerto.
```

<div style="height: 5px;"></div>

### Puertos y Servicios (31—40)

```js
31. nmap -p 80 — Escanea exclusivamente el puerto 80 (HTTP).

32. nmap -p 1-65535 — Escanea todos los puertos TCP del 1 al 65535.

33. nmap -p- — Equivalente a -p 1-65535; escanea todos los puertos TCP disponibles.

34. nmap -F — Realiza un escaneo rápido de los puertos más comunes.

35. nmap --top-ports 100 — Escanea los 100 puertos más comúnmente utilizados según estadísticas de Nmap.

36. nmap --port-ratio 0.01 — Escanea únicamente los puertos con una probabilidad de uso mayor o igual al 1%.

37. nmap -sV --version-light — Detecta versiones de servicios de forma rápida y con bajo consumo de recursos.

38. nmap --open — Muestra únicamente los puertos que están abiertos.

39. nmap -p 22,80,443 — Escanea específicamente los puertos 22 (SSH), 80 (HTTP) y 443 (HTTPS).

40. nmap -p T:80,U:63 — Escanea el puerto TCP 80 y el puerto UDP 63 de forma específica.
```

<div style="height: 5px;"></div>

### Opciones de Scripting NSE (41—60)

```js
41. nmap --script=default — Ejecuta los scripts predeterminados recomendados por Nmap.

42. nmap --script=ssl-heartbleed — Verifica si el objetivo es vulnerable al fallo Heartbleed.

43. nmap --script=auth — Ejecuta scripts relacionados con autenticación (fuerza bruta, acceso, etc.).

44. nmap --script=discovery — Ejecuta scripts diseñados para descubrir hosts, servicios y redes.

45. nmap --script=vuln — Ejecuta scripts de detección de vulnerabilidades conocidas.

46. nmap --script=http-enum — Enumeración de rutas y servicios web.

47. nmap --script=ftp-anon — Detecta si un servidor FTP permite acceso anónimo.

48. nmap --script=smb-os-discovery — Detecta el sistema operativo a través del protocolo SMB.

49. nmap --script-help=vuln — Muestra la descripción y detalles del script vuln.

50. nmap --script-updatedb — Actualiza la base de datos interna de scripts NSE.

51. nmap --script-trace — Muestra el tráfico generado por los scripts para su análisis.

52. nmap --script-args='user=admin,pass=1234' — Pasa argumentos personalizados a los scripts NSE.

53. nmap --script=http-title — Extrae el título HTML de páginas web encontradas. 

54. nmap --script=dns-brute — Realiza un ataque de fuerza bruta a subdominios DNS.

55. nmap --script=ssh-auth-methods — Enumera los métodos de autenticación disponibles por SSH.

56. nmap --script=ssl-cert — Obtiene y muestra detalles del certificado SSL del host. 

57. nmap --script smb-enum-shares — Enumera los recursos compartidos (shares) accesibles en un servidor SMB.

58. nmap --script smtp-commands — Enumera los comandos soportados por el servidor SMTP.

59. nmap --script telnet-ntlm-info — Extrae información NTLM de servidores Telnet, útil para auditorías de seguridad.

60. nmap --script snmp-info — Obtiene información del sistema a través del protocolo SNMP.
```

<div style="height: 5px;"></div>

### Opciones avanzadas (61—80)

```js
61. nmap --data-length 50 — Añade un relleno de 50 bytes a los paquetes para ocultar el tamaño real y dificultar la detección.

62. nmap --max-retries 2 — Limita el número máximo de reintentos de un paquete en caso de que no reciba respuesta.

63. nmap --host-timeout 1m — Establece un tiempo máximo de 1 minuto por host. Si el escaneo supera este límite, se detiene para ese host.

64. nmap --scan-delay 1s — Establece un retardo de 1 segundo entre cada paquete enviado para evitar detección.

65. nmap --max-rate 100 — Limita la cantidad de paquetes enviados por segundo a un máximo de 100.

66. nmap --min-rate 56 — Establece una velocidad mínima de 56 paquetes por segundo para el escaneo.

67. nmap --spoof-mac — Cambia la dirección MAC del dispositivo a una aleatoria para ocultar su identidad real.

68. nmap --badsum — Genera sumas de comprobación (checksums) inválidas, lo que puede confundir ciertos sistemas de detección.

69. nmap -f — Fragmenta los paquetes enviados para evadir sistemas de detección basados en la inspección de paquetes.

70. nmap --source-port 53 — Establece el puerto fuente del paquete a 53 (usado generalmente por DNS), para ocultar la verdadera fuente del escaneo.

71. nmap -D RND:10 — Realiza un escaneo con 10 "decoys" (dispositivos ficticios), ocultando la verdadera dirección IP al hacer que el tráfico provenga de múltiples fuentes falsas.

72. nmap -g 53 — Establece el número de puerto 53 para el escaneo.

73. nmap -S 192.168.1.100 — Utiliza una dirección IP específica, en este caso 192.168.1.100, como fuente del escaneo.

74. nmap -e eth0 — Selecciona la interfaz de red específica, como eth0, para realizar el escaneo.

75. nmap -6 — Realiza un escaneo sobre direcciones IPv6.

76. nmap --exclude 192.168.1.5 — Excluye una dirección IP específica del escaneo, útil para evitar hosts específicos.

77. nmap --exclude-file lista.txt — Excluye direcciones IP o rangos de una lista de un archivo .txt durante el escaneo.

78. nmap --packet-trace — Muestra un rastro de los paquetes enviados y recibidos durante el escaneo.

79. nmap -oN salida.txt — Guarda los resultados del escaneo en formato normal en un archivo de texto llamado salida.txt.

80. nmap -oX salida.xml — Guarda los resultados del escaneo en formato XML en un archivo llamado salida.xml.
```

<div style="height: 5px;"></div>

### Salidas, Reportes y Logs (81—90)

```js
81. nmap -oG salida.gnmap — Guarda los resultados del escaneo en un formato "grepable" que facilita su procesamiento mediante herramientas de búsqueda.

82. nmap -OA todo — Guarda los resultados del escaneo en todos los formatos posibles (normal, XML, Nmap Script Output).

83. nmap --append-output — Añade los resultados del escaneo al final de un archivo de salida existente, en lugar de sobrescribirlo.

84. nmap --webxml — Guarda los resultados del escaneo en un formato XML optimizado para su visualización en un entorno web.

85. nmap -v -v — Modo detallado con más información durante el escaneo (modo verbose).

86. nmap -d — Activa el modo debug, proporcionando información adicional para depurar el proceso de escaneo.

87. nmap --reason — Muestra las razones detrás de cada decisión tomada por Nmap durante el escaneo, como por qué un puerto se considera abierto o cerrado.

88. nmap --stats-every 10s — Muestra estadísticas del progreso del escaneo cada 10 segundos.

89. nmap --stylesheet hoja.xsl — Utiliza una hoja de estilo XSLT para personalizar la salida XML del escaneo.

90. nmap -oX - | xsltproc hoja.xsl - — Convierte la salida XML del escaneo en un archivo HTML utilizando una hoja de estilo XSLT.
```

<div style="height: 5px;"></div>

### Ejemplos Practicos (91—105)

```js
91. nmap -A -T4 192.168.1.1 — Realiza un escaneo agresivo y rápido en la dirección IP 192.168.1.1, activando detección de sistema operativo, versiones de servicios, scripts y traceroute.

92. nmap -sS -Pn -T3 10.0.0.1-50 — Realiza un escaneo SYN en el rango de IPs de 10.0.0.1 a 10.0.0.50, sin hacer ping a los hosts (-Pn) y con una velocidad moderada (-T3).

93. nmap -sU -p 53 192.168.1.1 — Realiza un escaneo del puerto 53 en la dirección IP 192.168.1.1, generalmente utilizado para servicios DNS a través de UDP.

94. nmap -sV -p 80,443 --script http-enum 192.168.1.1 — Escanea los puertos 80 (HTTP) y 443 (HTTPS) en la IP 192.168.1.1 e identifica las versiones de los servicios, además ejecuta el script http-enum para enumerar servicios web

95. nmap -p- -T5 192.168.1.1 — Realiza un escaneo completo de todos los puertos (-p-) en la IP 192.168.1.1 con un modo muy agresivo y rápido (-T5).

96. nmap -O --osscan-guess 192.168.1.1 — Realiza un escaneo para intentar adivinar el sistema operativo en la dirección IP 192.168.1.1.

97. nmap --script smb-os-discovery -p 445 192.168.1.5 — Ejecuta un script para descubrir información sobre el sistema operativo a través del puerto SMB (445) en 192.168.1.5.

98. nmap --top-ports 200 --open -iL ips.txt — Escanea los 200 puertos más comunes en las direcciones IP listadas en el archivo ips.txt, y muestra solo los puertos abiertos.

99. nmap -sC -sV -OA escaneo_red 192.168.1.0/24 — Realiza un escaneo de detección de servicios y versiones (-sV), con scripts por defecto (-sC), y guarda la salida en todos los formatos posibles (-OA), en el rango de IP 192.168.1.0/24.

100. nmap -IR -Pn -T4 --script=vuln 192.168.1.1 — Realiza un escaneo con un retardo entre los paquetes (-T4), deshabilita el ping a los hosts (-Pn), y ejecuta los scripts para buscar vulnerabilidades (--script=vuln).

101. nmap -sS --badsum 192.168.1.1 — Realiza un escaneo SYN (stealth) con una suma de comprobación inválida, lo que puede confundir los sistemas de detección.

102. nmap -sS --data-length 200 192.168.1.1 — Realiza un escaneo SYN con un relleno de datos de 200 bytes especificado para los paquetes enviados a la dirección 192.168.1.1, lo que puede ayudar a evadir detección.

103. nmap --script firewall-bypass -T4 192.168.1.1 — Ejecuta un escaneo con el script firewall-bypass para intentar evadir un firewall en la dirección IP 192.168.1.1, con una velocidad rápida (-T4).

104.nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn -oG allPorts 10.10.10.245 — Escanea todos los puertos de la IP 10.10.10.245, mostrando solo los puertos abiertos. Utiliza un escaneo SYN ("stealth"), con una velocidad mínima de 5000 paquetes por segundo. La salida es detallada y no se resuelven nombres DNS ni se realiza un ping previo a los hosts. Los resultados se guardan en formato "grepable" en el archivo allPorts

105. nmap -sCV -p21,22,80 -oN targeted 10.10.10.245 — Realiza un escaneo en los puertos 21 (FTP), 22 (SSH) y 80 (HTTP) de la dirección IP 10.10.10.245, ejecutando scripts para obtener información sobre los servicios y versiones. Los resultados se guardan en un archivo denominado targeted en formato legible.
```