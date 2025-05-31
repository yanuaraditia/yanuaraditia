---
title: Dynamic Properties deprecated di PHP 8.2? Mimpi buruk?
description: Di PHP versi 8.2 terdapat update yang dianggap para developer php seperti gw kaget, yap dynamic property menjadi deprecated by default, Lho kok bisa?
image: /images/blog/dynamic-prop.png
date: 2022-11-28
---

25 November 2021, yap beberapa hari sebelum artikel ini dibuat versi baru dari PHP (Hypertext Preprocessor) baru saja dirilis yaitu ke 8.1.0, duh padahal existing project masih pake 7.3, 7.4 😒. Yaaa begitulah teknologi, kalo ngga susah payah buat update ya bakal ketinggalan, but eits ngga ada kata terlambat guys, masih ada waktu buaat belajar. Buat yang masih pake php 7.x atau dibawahnya apa aja sih yang baru di versi 8 dan 8.1?? Berikut aku jelasin sedikit dari sudut pandang seorang developer PHP 😂

### Named Arguments

Pemain lama php pasti sering dong ngalamin ketika ingin mengisi dua argument dalam function yang ngga berurutan, misal mau isi argumen #1 dan #3 tapi harus mengisi #2 padahal udah ada tuh default value nya. Nah di versi php 8 keatas, hal itu udah diatasi dengan cara tinggal panggil aja named variable yang perlu di isi buat gambaran aku kasih deh sample php 7 nih dibawah

```php
htmlspecialchars($string, ENT_COMPAT | ENT_HTML401, 'UTF-8', false);
```

Penasaran di php8? Nih

```php
htmlspecialchars($string, double_encode: false);
```

Udah kebaca?, di sample diatas kita cuma pengin ngisi argument pertama karena wajib tuh ngga dan ngga ada default value, terus argumen #2 dan #3 mau kita biarin dia pake argumen asli, nah daripada mengisi ulang data default ke argumen yang sama, di php 8 bisa dilompati dengan cara memanggil nama variabel diikuti titik dua lalu value, mudah kan hehe.

### PHPDoc Attributes

Yang bekerja dengan tim pasti perlu dan sering deh buat menulis dokumentasi method atau function dengan php, tapi pernah ngga sih bosen dan ribet banget kalo pake html tag dan simbol bintang (\*) setiap kali mau buat dokumentasi, di versi baru bisa pake metadata yang lebih terstruktur, tapi seperti biasa metode lama tetep bisa kamu pake kok

```php
class PostsController
{
#[Route("/api/posts/{id}", methods: ["GET"])]
public function get($id) { /_ ... _/ }
}
```

### Constructor property promotion

Nah ini yang menurutku revolusioner buat developer php veteran, ketika develop sebuah class atau service pasti sering tuh buat property terus buat mengisikan value kita harus nambah action di bagian \_construct agak belibet kan? Harus deklarasi parameter, set argument construct, terus nambah action.... Nah gimana kalo cuma set argument aja udah cukup? Yap di versi 8 ada fitur namanya constructor property promotion, jadiii semua argument yang dibentuk menyerupai property didalam argument construct akan dinaikkan posisinya menjadi property, atau dalam kata lain argument itu bisa diakses sebagai property, buat gambaran bisa lihat deh, yang dibawah ini versi lama dan bawahnya lagi versi baru

```php
class Point {
  public float $x;
  public float $y;
  public float $z;

  public function __construct(
    float $x = 0.0,
    float $y = 0.0,
    float $z = 0.0
  ) {
    $this->x = $x;
    $this->y = $y;
    $this->z = $z;
  }
}
```

```php
class Point {
  public function __construct(
    public float $x = 0.0,
    public float $y = 0.0,
    public float $z = 0.0,
  ) {}
}
```

### Union types

Tipe bawang, aneh ya wkwkw tapi pasti developer bahasa seperti javascript udah sering tau jenis tipe data ini, singkatnya sebuah variabel kita bisa berikan akses tipe data bermacam-macam dan akan throw ketika tipe data diluar yang di set di inputkan. Contoh kasusnya adalah gini, kita mau set property private $number hanya bisa float atau int, nah di php 7.4 kita tinggal buat aja private float $number terus ketika number itu kita set maka diberi validasi is_float atau is_int bukan?? Atau malah di versi dibawah 7.4 kita perlu effort lebih dengan melakukan pengecekan dua kali, di versi ini ngga perlu lagi begindang, cukup waktu deklarasi property tanpa banyak cingcong 🤣

```php
class Number {
  public function __construct(
    private int|float $number
  ) {}
}

new Number('NaN'); // Akan error ketika diisi string, karena $number cuma menerima int dan float
```

### Match expression

Pengguna switch expression pasti sering mengalami deh kalau value string dan value numeric karena bentuknya aja yang mirip cuma beda di pembungkus lolos case condition? Misal 1 dan '1' akan dianggap sama oleh case ya karena memang kelemahan switch itu 😢. Di match expression hal ini berhasil diatasi, jadi hanya value yang memiliki tipe data dan kondisi yang sama persis yang akan lolos case condition

```php
echo match (1) {
  '1' => "Oh no!",
  1 => "This is what I expected",
};
//> Jadi bisa aja kita buat ekspresi yang berbeda untuk beneran integer sama beneran string yang menyamar
```
