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



- Descargo el archivo .zip que me dan para el ejercicio.

<div style="height: 5px;"></div>

- Lo muevo a mi carpeta de trabajo.

<div style="height: 5px;"></div>

- Y lo descomprimo usando unzip, acordarse que la contrasena siempre va a ser 
    "hackthebox": 
    ![Test Relative Image](./imagen.png)

<div style="height: 5px;"></div>

- Entro a la carpeta y ejecuto el script que hay y me pide escribir una contrasena y 
    me dice que no soy un real fantasma dando a entender que la contrasena no es correcta:
```js
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge]
└─# cd rev_spookypass
                                                                        
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge/rev_spookypass]
└─# ls
pass
                                                                
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge/rev_spookypass]
└─# ./pass  
Welcome to the SPOOKIEST party of the year.
Before we let you in, you'll need to give us the password: h
You're not a real ghost; clear off!
```


<div style="height: 5px;"></div>

- Ejecuto ltrace para ver a que compra la contraseña que puse:
```js
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge/rev_spookypass]
└─# ltrace ./pass
puts("Welcome to the \033[1;3mSPOOKIEST\033["...Welcome to the SPOOKIEST party of the year.
)                                                                                 = 54
printf("Before we let you in, you'll nee"...)                                                                                     = 59
fgets(Before we let you in, you'll need to give us the password: hola
"hola\n", 128, 0x7f4d7b9538e0)                                                                                              = 0x7fff1d5edcb0
strchr("hola\n" '\n')                                                                                                            = "\n"
strcmp("hola" "s3cr3t_p455_f0r_gh05t5_4nd_gh0ul"...)                                                                             = -11
puts("You're not a real ghost; clear o"...You're not a real ghost; clear off!
)                                                                                       = 36
+++ exited (status 0) +++
```


<div style="height: 5px;"></div>

- Ejecuto nuevamente y pongo la contrasena correcta y me dice nuevamente contrasena 
    erronea:
```js
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge/rev_spookypass]
└─# ./pass       
Welcome to the SPOOKIEST party of the year.
Before we let you in, you'll need to give us the password: s3cr3t_p455_f0r_gh05t5_4nd_gh0ul
You're not a real ghost; clear off!
```

<div style="height: 5px;"></div>

- Le aplico una strings para ver el codigo y veo que por alguna razon se le escapaba 
    un "5" a la contrasena:
```js
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge/rev_spookypass]
└─# strings pass                     
/lib64/ld-linux-x86-64.so.2
fgets
stdin
puts
__stack_chk_fail
__libc_start_main
__cxa_finalize
strchr
printf
strcmp
libc.so.6
GLIBC_2.4
GLIBC_2.2.5
GLIBC_2.34
_ITM_deregisterTMCloneTable
__gmon_start__
_ITM_registerTMCloneTable
PTE1
u3UH
Welcome to the 
[1;3mSPOOKIEST
[0m party of the year.
Before we let you in, you'll need to give us the password: 
s3cr3t_p455_f0r_gh05t5_4nd_gh0ul5
Welcome inside!
You're not a real ghost; clear off!
;*3$"
GCC: (GNU) 14.2.1 20240805
GCC: (GNU) 14.2.1 20240910
main.c
_DYNAMIC
__GNU_EH_FRAME_HDR
_GLOBAL_OFFSET_TABLE_
__libc_start_main@GLIBC_2.34
_ITM_deregisterTMCloneTable
puts@GLIBC_2.2.5
stdin@GLIBC_2.2.5
_edata
_fini
__stack_chk_fail@GLIBC_2.4
strchr@GLIBC_2.2.5
printf@GLIBC_2.2.5
parts
fgets@GLIBC_2.2.5
__data_start
strcmp@GLIBC_2.2.5
__gmon_start__
__dso_handle
_IO_stdin_used
_end
__bss_start
main
__TMC_END__
_ITM_registerTMCloneTable
__cxa_finalize@GLIBC_2.2.5
_init
.symtab
.strtab
.shstrtab
.interp
.note.gnu.property
.note.gnu.build-id
.note.ABI-tag
.gnu.hash
.dynsym
.dynstr
.gnu.version
.gnu.version_r
.rela.dyn
.rela.plt
.init
.text
.fini
.rodata
.eh_frame_hdr
.eh_frame
.init_array
.fini_array
.dynamic
.got
.got.plt
.data
.bss
.comment
```

<div style="height: 5px;"></div>

- Ejecuto nuevamente y pongo la contrasena correcta y me da la flag:
```js
┌──(root㉿kali)-[/home/joaquin/HTB/Challenge/rev_spookypass]
└─# ./pass       
Welcome to the SPOOKIEST party of the year.
Before we let you in, you'll need to give us the password: s3cr3t_p455_f0r_gh05t5_4nd_gh0ul5
Welcome inside!
HTB{un0bfu5c4t3d_5tr1ng5}
```