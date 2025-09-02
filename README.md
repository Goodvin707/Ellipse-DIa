# Ellipse-DIa [EN]
Project technological stack:
+ [mxGraph](https://github.com/jgraph/mxgraph?tab=readme-ov-file) library
+ Node.js (server)
+ Native HTML, JS, CSS (client)

## Installation guide
For the correct operation of the program, you will need:
1. Install the programs "MySql Server 8.0", "MySql Workbench" and "Node.js" on your computer.
2. Copy to your computer in any place data from the disk "PRG". Note: preferably not on the C drive, so that in case of reinstalling Windows data will not be lost.
3. Open the program "MySql Server" and configure it.
	3.1. When configuring the connection, set the port to 3306, and the username and password to root.
4. Open the MySql Workbench program and select server > data import in the toolbar. 
	4.1. Select import from self-contained file and choose the path to the database file located in PRG\Database.
	4.2. New schema and enter hotel. Then start import.
5. After importing the database, open the console and write "cd <project directory>".
6. Then write "npm install" and wait for the packages to be installed.
7. Then write "node index.js".
8. If the console displays "Application listening on port 3333", the server is running and you can proceed with the work

# Ellipse-DIa [RU]
Для корректной работы программы вам потребуется:

1. Установить на ваш компьютер программы «MySql Server 8.0», «MySql Workbench» и «Node.js».
2. Копируем на ваш компьютер в любое место данные с диска «PRG». Примечание: желательно не на диск C, что бы в случае переустановки Windows данные не были утеряны.
3. Открываем программу «MySql Server» и настраиваем ее.
	3.1. При настройке соединения порт устанвливаем 3306, username и password - root.
4. Открываем программу «MySql Workbench» и в строке инструментов выбираем server > data import. 
	4.1. Выбираем import from self-contained file и выбираем путь файла БД, который лежит в PRG\Database.
	4.2. New schema и вводим hotel. Затем start import.
5. После импорта базы данных открывам консоль и пишем "cd <директория проекта>".
6. Затем пишем "npm install" и ждем пока установятся пакеты.
7. Затем пишем "node index.js".
8. Если в консоль вывелось сообщение "Application listening on port 3333", то сервер запущен и можно переходить к работе с программой.

Рекомендуемые требования к аппаратному и программному обеспечению сервера для корректной работоспособности системы являются:
    	- процессор: Pentium II 600МГц и выше;
    	- процессор: Pentium III и выше с частотой 1.8 ГГц;
    	- объем оперативной памяти: 512 Мбайт и выше;
    	- свободное место на жестком диске 100 Гбайт и выше;
    	- операционная система Windows;
    	- манипулятор «мышь»;
    	- PC IBM совместимая клавиатура любой модификации;
    	- видеокарта 128 Мб;
    	- VGA монитор с минимальным разрешением 1366x768;
    	- CD-ROM 10х;
    	- СУБД MySQL Workbench и база данных;
    	- Node.js.
    	
Рекомендуемые требования к аппаратному и программному обеспечению клиента для корректной работоспособности системы являются:
    	- процессор: Pentium III и выше с частотой 1.8 ГГц;
    	- объем оперативной памяти: 512 Мбайт и выше;
    	- операционная система Windows;
    	- манипулятор «мышь»;
    	- PC IBM совместимая клавиатура любой модификации;
    	- видеокарта 128 Мб;
    	- VGA монитор с минимальным разрешением 1366x768;
    	- CD-ROM 10х;
    	- браузер для просмотра веб-страниц.
