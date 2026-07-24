@echo off
set "OUTPUT=%~1"
if "%OUTPUT%"=="" set "OUTPUT=usecode.uco"

"..\..\Tools\ucc.exe" -o "%OUTPUT%" main.es
