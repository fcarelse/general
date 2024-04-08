@echo off
set temp_file=__temp-RemovePrefix__.bat
dir /b [*.* |sed "s/^\[[- _a-zA-Z]*\][ _]*\(.*\)/ren \"\0\" \"\1\"/">%temp_file%
call %temp_file%
del %temp_file%

