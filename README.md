# Opendata euskadi proxy

http://opendata.euskadi.eus webgunean euskadiko hainbat datu ireki eskeintzen dira, baina JSON formatuan dauden datuak eskuratu nahi direnean, fitxategia ez dago balizko formatu batean.

![Ez da balizko JSON formatua](/src/images/error.png)

Honek datu hoietan oinarrituta dauden aplikazio berriak sortzeko orduan arazo bat suposatzen du.

Hau dela eta aplikazio honen helburua, balizko JSON fitxategira daraman esteka lortzen laguntzea da.

## Instalazioa

Zure ordenagailuan instalatzeko, momentuko [Node.js](https://nodejs.org) bertsio berriena edo gutxienez 9.4.0-duna eduki behar da.

Terminalaren bitartez `npm install` komandoa exekutatuko dugu dependentziak deskargatzeko.

Gero martxan jartzeko `npm start`exekutatu eta nabigatzaile batean http://localhost:3000 helbidean zabalduko zaigu web aplikazioa.

![Aplikazioaren irudia](src/images/localhost.png)

## Erabilera

http://opendata.euskadi.eus webgunetik `geojson` edo `json` formatuan dagoen fitxategiaren esteka bat bilatu eta aplikazio honetan sartu.

![Opendata webgunea](src/images/opendata.png)

Segituan balizko formatua duen fitxategi bat agertuko da. Fitxategi horren esteka erabili dezakegu garatuko dugun aplikazioetan erabiltzeko.

![jasotako json datuak](src/images/json-firefox.png)

## Oharra

Aplikazio hau [heroku](https://www.heroku.com/) plataformara igotzeko asmoa daukat laister jarriko dut esteka bat eskuragarri.

Ordurarte ondo izan 👋 😊
