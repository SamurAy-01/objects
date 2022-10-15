// dict, json
let user1 = {
    "ad": "ali",
    "soyad": "samur",
    "yas": 16,
    "adres": {
        "sehir": "adana",
        "ilce": "cukurova"  
    },
    "hobiler": ["sinema", "fitness", "futbol"]
}


let user2 = {
    "ad": "talha",
    "soyad": "demirtuğ",
    "yas": 15,
    "adres": {
        "sehir": "antalya",
    },
    "hobiler": ["barlar", "gece klubu", "gece hayatı"]
}

let sonuc;
sonuc = user1.ad;      // veya
sonuc = user1["soyad"];
sonuc = user1.hobiler;
sonuc = user1.adres.sehir;
sonuc = user1.yas;


let users = [
    user1,
    user2
]
sonuc = users [1].hobiler;

let urunler = [
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000,
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000,
    }
]
sonuc = urunler[1]
console.log(sonuc);
