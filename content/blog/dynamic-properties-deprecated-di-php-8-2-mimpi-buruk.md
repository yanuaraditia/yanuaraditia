---
title: Dynamic Properties deprecated di PHP 8.2? Mimpi buruk?
description: Di PHP versi 8.2 terdapat update yang dianggap para developer php seperti gw kaget, yap dynamic property menjadi deprecated by default, Lho kok bisa?
image: /images/blog/dynamic-prop.png
date: 2022-11-28
---

## Update

Seperti biasa setelah melakukan upgrade minor dari php 8.0 ke 8.1, php group kembali memberikan rilis informasi bahwa mereka sedang mengerjakan update php 8.2 yang nantinya akan memberikan update antara lain sebagai berikut (yang aku notice terbesar ya)

- Class `readonly`
- Union type baru `true` dan `false`
- Dukungan redaksi nilai Parameter Sensitif
- Extensi `Random` baru
- MySQLi: New `mysqli_execute_query` function and `mysqli::execute_query method`
- Fungsi `openssl_cipher_key_length` yang diperbarui
- Pengaturan permission untuk `error_log_mode`
- OpenSSL: Fungsi baru `openssl_cipher_key_length`
- Dukungan `const` untuk trait
- Dynamic Property Deprecations
- _etc. Selengkapnya bisa dibaca [di sini](https://php.watch/versions/8.2)_

## Big Notes

Namun dari perubahan diatas, ada perubahan yang paling menonjol menurut gw berdasarkan pengalaman gw dalam develop sebuah software (backend) menggunakan php, yaitu **Dynamic Property** yang menjadi deprecated di versi baru ini, asumsinya kita tidak bisa lagi declare sebuah variabel yang berisi `class` lalu write property langsung, kaya dibawah ini deh

```php
$var = new Member();
$var->name = "Yanuar";
```

Kalau masih maksa buat pake dynamic prop di php 8.2 bakal munculin output kaya dibawah ini, by default loh ya!

```shell
Deprecated: Creation of dynamic property Member::$name is deprecated in ... on line ...
```

Hal di atas berlaku juga untuk constructor milik class itu sendiri loh ya, kaya gini

```php
class Member {
    public function __construct() {
        $this->name = 'test';
    }
}

new Member();
```

```shell
Deprecated: Creation of dynamic property Member::$name is deprecated in ... on line ...
```

## Solutions

Ngeri kan? Bayangin seorang devOps atau kamu ngga sengaja upgrade pake package manager dari php 8.1 ke 8.2, apa ngga ambruk struktur kodinganmu tuh hahaha. Tapi tunggu sebentar, ada sesuatu yang mungkin bisa buat kamu agak bernafas lebih panjang, yaitu `#[AllowDynamicProperties]` yap allow dynamic properties, mungkin php core engineer ngga bakal semudah itu buat hilangin dynamic property dari semua sisi karena yaa udah mendarah daging ke developer PHP di dunia? mungkin? Cara aplikasinya simpel kok, tinggal declare / write line tersebut diatas pembuatan class kaya dibawah deh

```php
 #[AllowDynamicProperties]
class Member {
    public function __construct() {
        $this->name = 'test';
    }
}
new Member();
```

Voila, bisa kaan? Ada cara lain sebetulnya yaitu menggunakan sesuatu yang belum mungkin deprecated yaitu `stdClass`, gimana caranya? Extend aja classnya pake stdClass, that's it. Buat artikel lebih lengkap bisa cek [disini nih](https://php.watch/versions/8.2/dynamic-properties-deprecated). Soo ya, makin kesini php makin banyak perubahan, hopefully bakal bersaing bahasa program lain yang lebih muda dan baru. Sekian dulu post gue kali ini, thanks ☕️
