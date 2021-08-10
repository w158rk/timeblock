@ECHO OFF

SET CLASSPATH=.\bin;%CLASSPATH%
SET ROOT_DIR=%CD%
SET SRC_DIR=%ROOT_DIR%\timeblock
SET GRAMMAR_FILE=%SRC_DIR%\grammar\TimeBlock.g4
SET FRONT_DIR=%ROOT_DIR%\static
SET TEMPLATE_DIR=%SRC_DIR%\templates

@ECHO ON

@REM java -jar %ROOT_DIR%/bin/antlr-4.9.2-complete.jar -Dlanguage=Python3 -visitor -no-listener %GRAMMAR_FILE%
@REM cd %FRONT_DIR% && npm install && npm run build
cd %ROOT_DIR%
rd /s /q %SRC_DIR%\templates
mklink /j %TEMPLATE_DIR% %FRONT_DIR%\build
