MySQL database
Node.js (+Express.js) backend v18.14.2
React frontend v18.2.0
Opis:

Została napisana prosta aplikacja  z wykorzystaniem powyższych technologii. Server.js pełni rolę REST API, w którym zdefiniowana jest metoda "get", pobierająca dane z bazy danych i zwracająca je jako odpowiedź na zapytanie. Dane z bazy są dostępne lokalnie na porcie 5001. Następnie dane te są przekazywane na frontend, gdzie z wykorzystaniem hooków useState i useEffect są pobierane i wyświetlane za pomocą mapowania.

Docker Compose został skonfigurowany z wykorzystaniem plików Dockerfile, które tworzą obrazy dla kontenerów front i backend. Kontenery są narażone na porty oraz zostały odpowiednio skonfigurowane, aby mogły się ze sobą łączyć. Dane bazy są ukryte w pliku .env. Sieci zostały zmostkowane, co ułatwiło komunikację między kontenerami. Po uruchomieniu docker-compose aplikacja działa na dwóch kontenerach.

Do działania aplikacji wykorzystano własną bazę danych postawioną na platformie Azure. Wystarczy zmienić zmienne w pliku .env na własne dane bazy i podmienić connection query w React na własne kolumny.

Instrukcja uruchomienia:

Uruchomić serwer Node.js poleceniem "npm start server.js"
Uruchomić tryb developerski poleceniem "npm run dev"
Wejść na localhost/3000
Dla Docker'a uruchomić komendę "docker-compose up". Aplikacja będzie dostępna na porcie 3000, tj. localhost/3000.
