var a = 1;
var b = 1;
var c = 1;
var z = 0;
var x = 1;
var yus = 0;
var irf = [];
var sayi = [];
var carpan = [];
var buyuk = [];
var has = [];
var olar = [];
var cer = 0;
var o = 0;
var isthipo;
var maxkenar;
var kokucgen;
var button;

function draw() {
  noCanvas();
  createP("Merhabalar Tam Kenarları Tam Sayı Olan Üçgen Simülatörine Hoş Geldiniz!!!");
  createP("Sadece Kök Üçgenlerin mi Bulunmasını İstersiniz? \n 1-Evet \n 2-Hayır \n Lütfen Birini Yalnızca Rakam Olarak Seçiniz: \n");
  kokucgen1 = createInput();
  kokucgen = int(kokucgen1);
  createP("--Lütfen Bir Kenarın Maximum Ne Kadar Olmasını İstediğinizi Giriniz: ");
  maxkenar1 = createInput();
  maxkenar = int(maxkenar1);
  createP("Bir hipotenus icin istenen ucgen sayisini giriniz: ");
  isthipo1 = createInput();
  isthipo = int(isthipo1);
  isthipo1.changed(yazdir);
}

function yazdir(){
  isthipo = isthipo1.value();
  maxkenar = maxkenar1.value();
  kokucgen = kokucgen1.value();
  createP("Sayılarınız Şunlardır:");
  var yam = isthipo;
  for (a = 3; a < maxkenar+1; a = a + 2){
    if (a%3 == 0){
      continue;
    }
    if (o > yam-1){
      olar.push(o);
    }
    o = 0;
    akif = 0;
    for (b = 4; b < a; b = b + 1){
      for (c = 3; c < b; c = c + 2){
        if (b%2 == c%2){
          continue;
        }
        z = 0;
        if (kokucgen == ("1")){
          if (c*c + b*b == a*a){
            ser = Math.floor(c/2) + 1;
            for (x = 2; x < ser; x = x + 1){
              if (a%x == 0 && b%x == 0 && c%x == 0){
                z = 1;
              }
              if (x == ser - 1 && z == 0){
                o = o + 1;
                if (o > yam - 1 && akif == 0){
                  akif = 0;
                  a = String(a);
                  b = String(b);
                  c = String(c);
                  irf.push(c+" "+b+" "+a);
                  a = int(a);
                  b = int(b);
                  c = int(c);
                  buyuk.push(a);
                  sayi.push(a);
                }
              }
            }
          }
        }
        else if (kokucgen == "2"){
          if (c*c + b*b == a*a){
            createP(c,b,a);
          }
        }
        else{
          n = 1;
          while (n == 1){
            createP("İLK SORUYA UYGUN BİR CEVAP VERMEDİĞİNİZ İÇİN SONSUZ DÖNGÜ :D");
          }
        }
      }
    }
  }
  olar.splice(0,1);
}
