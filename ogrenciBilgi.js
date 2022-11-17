var ad = prompt("Adınızı Giriniz : ");
var ogrno = prompt("Öğrenci Numaranız : ");
var cinsiyet = prompt("Cinsiyetiniz : ")
var ders = prompt("Ders Adı : ");
var not1 = prompt("1. notunuz : ");
var not2 = prompt("2. notunuz : ");
var ortalama = Number (not1) + Number (not2) / 2;

console.log(ogrno + " numaralı " + ad +"(" + cinsiyet + ")" +" isimli öğrencinin " + ders + " dersinden aldığı ortalama " + ortalama);