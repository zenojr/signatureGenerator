@ECHO OFF
ECHO Instalador de Assinatura Corfio
ECHO "  _____ ____  _____  ______ _____ ____  "
ECHO " / ____/ __ \|  __ \|  ____|_   _/ __ \ "
ECHO "| |   | |  | | |__| | |__    | || |  | |"
ECHO "| |   | |  | |  _  /|  __|   | || |  | |"
ECHO "| |___| |__| | | \ \| |     _| || |__| |"
ECHO " \_____\____/|_|  \_\_|    |_____\____/ "
ECHO ===========
PAUSE
ECHO =========== 
xcopy "Assinatura.htm" "%USERPROFILE%\AppData\Roaming\Microsoft\Signatures" 
xcopy "Assinatura.htm" "%USERPROFILE%\AppData\Roaming\Microsoft\Assinaturas"
xcopy "Assinatura.htm" "%USERPROFILE%\Application Data\Microsoft\Signatures"
xcopy "Assinatura.htm" "%USERPROFILE%\Application Data\Microsoft\Assinaturas"



echo Assinatura instalada com sucesso
pause