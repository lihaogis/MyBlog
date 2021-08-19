@ECHO OFF
@setlocal enableextensions
@cd /d "%~dp0"
SET PGPATH=D:\"Program Files"\PostgreSQL\10\bin\pg_dump
SET SVPATH=D:\backup\
SET PRJDB=Blog
SET DBUSR=postgres
set PGPASSWORD=meitu001
SET DBROLE=postgres
FOR /F "TOKENS=1,2,3 DELIMS=/ " %%i IN ('DATE /T') DO SET d=%%i-%%j-%%k
FOR /F "TOKENS=1,2,3 DELIMS=: " %%i IN ('TIME /T') DO SET t=%%i%%j%%k
SET DBDUMP=%PRJDB%_%d%_%t%.backup
@ECHO OFF
%PGPATH% -h localhost -p 5432 -U %DBUSR% --role %DBROLE% -w -F c -b -v -f %SVPATH%%DBDUMP% %PRJDB% 
echo Backup Taken Complete %SVPATH%%DBDUMP%
exit
pause