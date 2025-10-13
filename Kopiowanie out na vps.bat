@echo off

REM Skrypt do automatycznego wdrożenia builda Next.js (z katalogu 'out') na serwer przez SSH/SCP.

REM UWAGA: Skrypt wymaga zainstalowanego i dostępnego w PATH klienta SSH i SCP,
REM np. PuTTY/Plink/PSCP, lub używania standardowego klienta OpenSSH w Windows 10/11.

REM === DANE DOSTĘPOWE I ŚCIEŻKI ===
set SERVER_USER=rafal
set SERVER_IP=188.68.242.226
set SERVER_PORT=2222

REM LOKALNA ŚCIEŻKA: katalog wynikowy builda Next.js
set LOCAL_BUILD_PATH=out

REM ZDALNA ŚCIEŻKA: katalog docelowy na serwerze
set REMOTE_BUILD_PATH=/var/www/rafalsprengel.com/out

echo.
echo === START WDROZENIA NEXT.JS ===
echo.
echo Uzytkownik: %SERVER_USER%@%SERVER_IP%
echo Zdalna sciezka docelowa: %REMOTE_BUILD_PATH%
echo Lokalny katalog zrodlowy: %LOCAL_BUILD_PATH%
echo.

REM ----------------------------------------------------
REM KROK 1: Czyszczenie katalogu docelowego na serwerze
REM ----------------------------------------------------
echo ----------------------------------------------------
echo === Czyszczenie i przygotowanie katalogu na serwerze...
echo ----------------------------------------------------
ssh -p %SERVER_PORT% %SERVER_USER%@%SERVER_IP% "sudo rm -rf %REMOTE_BUILD_PATH% && sudo mkdir -p %REMOTE_BUILD_PATH% && sudo chown -R %SERVER_USER%:%SERVER_USER% %REMOTE_BUILD_PATH%"

IF ERRORLEVEL 1 (
    echo.
    echo [BLAD] Nie udalo sie polaczyc z serwerem lub wykonac operacji czyszczenia.
    echo Upewnij sie, ze klucze SSH/haslo dzialaja poprawnie i katalogi istnieja.
    pause
    exit /b 1
)

REM ----------------------------------------------------
REM KROK 2: Wysylanie nowego builda (zawartosci katalogu 'out')
REM ----------------------------------------------------
echo.
echo ----------------------------------------------------
echo === Wysylanie nowej zawartosci %LOCAL_BUILD_PATH% na serwer...
echo ----------------------------------------------------
scp -P %SERVER_PORT% -r "%LOCAL_BUILD_PATH%/*" %SERVER_USER%@%SERVER_IP%:%REMOTE_BUILD_PATH%/

IF ERRORLEVEL 1 (
    echo.
    echo [BLAD] Nie udalo sie wyslac plikow przez SCP.
    echo.
    pause
    exit /b 1
)

echo.
echo ====================================================
echo === WDROZENIE NEXT.JS ZAKONCZONE POMYSLNIE!
echo ====================================================
echo.
pause
