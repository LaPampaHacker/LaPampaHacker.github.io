---
title: "HackTheBox - Challenge Sekur Julius"
summary: "Vamos a ver el paso a paso detallado de como ir resolviendo el challenge:"
date: "2025-04-05"
draft: false
tags:
- Tutorial
- HackTheBox
- Challenge
- Crypto
---

### Paso a paso:

- Descargo y descomprimo el archivo, la contrasena como siempre es "hackthebox".

<div style="height: 5px;"></div>

- Hago un cat del .txt:
```bash
❯ cat output.txt
───────┬──────────────────────────────────────────────────────────────────────────────────
       │ File: output.txt
───────┼──────────────────────────────────────────────────────────────────────────────────
   1   │ JRYPBZR0GB0UNPXGUROBB0GJBGUBHFNAQGJRAGLSBHE!0GUVF0VF0N0CEBBS0BS0PBAPRCG0GB0CEBIR0
       │ LBH0GUNG0GUR0PNRFNE0PVCURE0VF0VAFRPHER0AB0ZNGGRE0UBJ0ZNAL0GVZRF0LBH0NCCYL
       │ 0VG.0GUR0FRPHEVGL0BS0N0GUBHFNAQ0QVFGVAPG0FUVSGF0VF0RIRAGHNYYL0GUR0FNZR0NF0GUNG0BS
       │ 0N0FVATYR0FUVSG.0RABHTU0ZHZOYVAT,0GNXR0LBHE0SYNT0NAQ0RAWBL0GUR0ERFG0BS0GU
       │ R0PBAGRFG.0ZNXR0FHER0LBH0JENC0GUR0SBYYBJVAT0GRKG0JVGU0GUR0UGO0SYNT0SBEZNG0GURRSSR
       │ PGVIRXRLFCNPRBSPNRFNEQRCRAQFBAGURFVMRBSGURNYCUNORG.
───────┴──────────────────────────────────────────────────────────────────────────────────
```

<div style="height: 5px;"></div>

- Cambio los 0 por espacios:
```js
❯ cat output.txt | tr '0' ' '
JRYPBZR GB UNPXGUROBB GJBGUBHFNAQGJRAGLSBHE! GUVF VF N CEBBS BS PBAPRCG GB CEBIR LBH GUNG
GUR PNRFNE PVCURE VF VAFRPHER AB ZNGGRE UBJ ZNAL GVZRF LBH NCCYL VG. GUR FRPHEVGL BS N
GUBHFNAQ QVFGVAPG FUVSGF VF RIRAGHNYYL GUR FNZR NF GUNG BS N FVATYR FUVSG. RABHTU ZHZOYVAT,
GNXR LBHE SYNT NAQ RAWBL GUR ERFG BS GUR PBAGRFG. ZNXRFHER LBH JENC GUR SBYYBJVAT GRKG JVGU
GUR UGO SYNT SBEZNG GURRSSRPGVIRXRLFCNPRBSPNRFNEQRCRAQFBAGURFVMRBSGURNYCUNORG.%
```

<div style="height: 5px;"></div>

- Veo que "GUR" se repite asique le cambio de color para verlo mejor:
```js
❯ cat output.txt | tr '0' ' ' | grep "GUR" --color
JRYPBZR GB UNPXGUROBB GJBGUBHFNAQGJRAGLSBHE! GUVF VF N CEBBS BS PBAPRCG GB CEBIR LBH GUNG
GUR PNRFNE PVCURE VF VAFRPHER AB ZNGGRE UBJ ZNAL GVZRF LBH NCCYL VG. GUR FRPHEVGL BS N
GUBHFNAQ QVFGVAPG FUVSGF VF RIRAGHNYYL GUR FNZR NF GUNG BS N FVATYR FUVSG. RABHTU ZHZOYVAT,
GNXR LBHE SYNT NAQ RAWBL GUR ERFG BS GUR PBAGRFG. ZNXRFHER LBH JENC GUR SBYYBJVAT GRKG JVGU
GUR UGO SYNT SBEZNG GURRSSRPGVIRXRLFCNPRBSPNRFNEQRCRAQFBAGURFVMRBSGURNYCUNORG.
```

<div style="height: 5px;"></div>

- Parece ser un cifrado cesar entonces veo eso y muestro cual seria el proceso para llegar:
```bash
❯ echo "Hola que tal" | tr '[H-ZA-Gh-za-g]' '[K-ZA-Jk-za-j]'
Krod txh wdo
❯ echo "Hola que tal" | tr '[H-ZA-Gh-za-g]' '[K-ZA-Jk-za-j]' | tr '[a-z]' '[A-Z]'
KROD TXH WDO
❯ echo "Hola que tal" | tr '[H-ZA-Gh-za-g]' '[K-ZA-Jk-za-j]' | tr '[a-z]' '[A-Z]' | tr ' ' '0'
KROD0TXH0WDO
```
    
<div style="height: 5px;"></div>

- Y lo pruebo con el .txt y ahi esta la flag:
```js
❯ cat output.txt | tr '0' ' ' | tr '[G-ZA-F]' '[T-ZA-S]'
WELCOME TO HACKTHEBOO TWOTHOUSANDTWENTYFOUR! THIS IS A PROOF OF CONCEPT TO PROVE YOU THAT
THE CAESAR CIPHER IS INSECURE NO MATTER HOW MANY TIMES YOU APPLY IT. THE SECURITY OF A
THOUSAND DISTINCT SHIFTS IS EVENTUALLY THE SAME AS THAT OF A SINGLE SHIFT. ENOUGH MUMBLING,
TAKE YOUR FLAG AND ENJOY THE REST OF THE CONTEST. MAKE SURE YOU WRAP THE FOLLOWING TEXT
WITH THE HTB FLAG FORMAT THEEFFECTIVEKEYSPACEOFCAESARDEPENDSONTHESIZEOFTHEALPHABET.%
```

<div style="height: 5px;"></div>

- Escribo la flag en el formato corresponfiente:
```bash
HTB{THEEFFECTIVEKEYSPACEOFCAESARDEPENDSONTHESIZEOFTHEALPHABET}
```