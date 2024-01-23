echo %%1=%1 %%2=%2 %%3=%3
if _%1_==__ goto end
if not exist %1\. goto end
:doit
move %1\*.* .
:end