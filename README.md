### Market Takip Sistemi

Backend'teki Proje ile birlikte çalıştırılmalı

Backend Java WsApplication class'ı çalıştırıldıktan sonra cmd komutuyla girilebilen komut satırı ekranından frontend klasörüne gelinir.

Komut satırında bir üst klasördeki api dosyasında db.json bulunur

## `npx json-server --watch db.json`

komutu ile 3000 numaralı portta JSON database'i çalıştırılır.

Başka bir komut satırında frontend klasörüne gelinip

## `npm start`

komutuyla yeni atanan port'ta React projesi açılır.

Frontend sayfaları arasında gezinmek için frontend/src klasöründeki index.js dosyasında belirtilen şekillerde düzenlemeler yapılır.
