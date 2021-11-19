PASTABOS PO VERTINIMO:
Funkcionalumas:
+ Page'inimas būtų visai pravertęs. (pataisyta)

Kodas:
+ Routes /..., dabar yra hardcod'inti, būtų geriau juos perkelti į routes.js failiuką ir tuo pačiu reus'inti, nes yra naudojami ne vienoje vietoje (pataisyta).
Visur kartojasi šitas, būtų gerai apjungti.
+ Struktūra, būtų gerai atskirti page componentus, nuo paprastų  (pataisyta).
+ Part žodis prie komponentų nieko neduoda, tad galima nenaudoti (pataisyta).
+ Komentarai dažniausiai nereikalingi kode, juo labiau lietuviški (pataisyta).
+ https://jsonplaceholder.typicode.com yra hardcode, reiktų perkelti į config'ą (pataisyta).
+ setAll -> būtų geriau setDataAll (pataisyta).
- onClick={()=> window.open(work.butUrl, "_blank")}, gera praktika nenaudoti inline funkcijų return'e.
+ Yra komentuoto kodo (pataisyta).
+ dataOne, reiktų geresnio pavadinimo (pataisyta).
- handleSubmit funkcija atrodo per didelė, reiktų paskaidyti.
+ setUserID, handleChangeTitle, setTitle ir t.t būtų galima apjungit į vieną metodą ir naudoti event.target.name bei value, tada ir state būtų saugojamas
objektas (pataisyta).
