# devops-staz
TECH STACK 
MYSQL DATABASE
NODE.JS(+express.js) BACKEND v18.14.2 
REACT FRONTEND 18.2.0

Napisana została prosta aplikacja z użyciem powyższych technologii.
SERVER.JS jest naszym RESTAPI gdzie jest napisana prosta metoda "get" wysyłająca zapytanie do bazy danych i zwracająca jej dane.
Wynikiem są dane z bazy na localhoscie:5001
Następnie z naszego RESTAPI wysyłane są dane na frontend gdzie z użyciem useState i useEffect są one pobrane , a nastepnie dzięki mapowaniu poprzez dane z naszego requesta są wyswietlone w divach.
Docker compose został napisany z użyciem dockerfilów, które budują nam image do docker-composa.
Zostały stworzone 2 kontenery front i backend, w których zostały celowo po exposowane porty oraz pododawane porty , aby kontenery mogły się łączyć ze sobą, dane do bazy danych zostały ukryte z użyciem .env. Poza tym zostały zbridgowane networki co ułatwiło łączność między kontenerami.
Po utworzeniu projektu i uruchomieniu docker-compose wynikiem są 2 działające kontenery.
Wykorzystana została własna baza danych postawiona na azure. Wystarczy zadeklarować  w .env zmienne do swojej bazy oraz podmienić connection query na query do swojej bazy oraz w reakcie podmienic w mapowaniu na swoje kolumny.

REACT  NPM start
server.js NPM RUN DEV
Go to localhost/3000
Dla dockera
docker-compose up
po composie aplikacja bedzie dostepna na porcie 3000 czyli localhost/3000
