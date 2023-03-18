# devops-staz
TECH STACK 
        MYSQL DATABASE
        NODE.JS(+express.js) BACKEND
        REACT FRONTEND

Napisana została prosta aplikacja z użyciem powyższych technologii.
SERVER.JS jest naszym RESTAPI gdzie jest napisana prosta metoda "get" wysyłająca zapytanie do bazy danych i zwracająca jej dane.
Wynikiem są dane z bazy na localhoscie:5001
Następnie z naszego RESTAPI wysyłane są dane na frontend gdzie z użyciem useState i useEffect są one pobrane , a nastepnie dzięki mapowaniu poprzez dane z naszego requesta są wyswietlone w divach.
Docker compose został napisany z użyciem dockerfilów, które budują nam image do docker-composa.
Zostały stworzone 2 kontenery front i backend, w których zostały celowo po exposowane porty oraz pododawane porty , aby kontenery mogły się łączyć ze sobą, dane do bazy danych zostały ukryte z użyciem .env. Poza tym zostały zbridgowane networki co ułatwiło łączność między kontenerami.
Po utworzeniu projektu i uruchomieniu docker-compose wynikiem są 2 działające kontenery.

1 REACT NPM start
2 server.js NPM RUN DEV
Dla dockera
3. docker-compose up
