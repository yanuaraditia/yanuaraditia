---
title: Sudah sejauh mana belajar PHP? Udah tau versi 8???
description: PHP 8, inovasi revolusioner si pak tua yang tak mau kalah sama yang lebih muda
image: /images/blog/php-8.png
date: 2021-12-18
---

25 November 2021, yap beberapa hari sebelum artikel ini dibuat versi baru dari PHP (Hypertext Preprocessor) baru saja dirilis yaitu ke 8.1.0, duh padahal existing project masih pake 7.3, 7.4 😒. Yaaa begitulah teknologi, kalo ngga susah payah buat update ya bakal ketinggalan, but eits ngga ada kata terlambat guys, masih ada waktu buaat belajar. Buat yang masih pake php 7.x atau dibawahnya apa aja sih yang baru di versi 8 dan 8.1?? Berikut aku jelasin sedikit dari sudut pandang seorang developer PHP 😂

## Named Arguments

Pemain lama php pasti sering dong ngalamin ketika ingin mengisi dua argument dalam function yang ngga berurutan, misal mau isi argumen #1 dan #3 tapi harus mengisi #2 padahal udah ada tuh default value nya. Nah di versi php 8 keatas, hal itu udah diatasi dengan cara tinggal panggil aja named variable yang perlu di isi buat gambaran aku kasih deh sample php 7 nih dibawah

```php
htmlspecialchars($string, ENT_COMPAT | ENT_HTML401, 'UTF-8', false);
```

Penasaran di php8? Nih

```php
htmlspecialchars($string, double_encode: false);
```

Udah kebaca?, di sample diatas kita cuma pengin ngisi argument pertama karena wajib tuh ngga dan ngga ada default value, terus argumen #2 dan #3 mau kita biarin dia pake argumen asli, nah daripada mengisi ulang data default ke argumen yang sama, di php 8 bisa dilompati dengan cara memanggil nama variabel diikuti titik dua lalu value, mudah kan hehe.

## PHPDoc Attributes

Yang bekerja dengan tim pasti perlu dan sering deh buat menulis dokumentasi method atau function dengan php, tapi pernah ngga sih bosen dan ribet banget kalo pake html tag dan simbol bintang (\*) setiap kali mau buat dokumentasi, di versi baru bisa pake metadata yang lebih terstruktur, tapi seperti biasa metode lama tetep bisa kamu pake kok

```php
class PostsController
{
    #[Route("/api/posts/{id}", methods: ["GET"])]
    public function get($id) { /* ... */ }
}
```

## Constructor property promotion

Nah ini yang menurutku revolusioner buat developer php veteran, ketika develop sebuah class atau service pasti sering tuh buat property terus buat mengisikan value kita harus nambah action di bagian `_construct` agak belibet kan? Harus deklarasi parameter, set argument construct, terus nambah action.... Nah gimana kalo cuma set argument aja udah cukup? Yap di versi 8 ada fitur namanya constructor property promotion, jadiii semua argument yang dibentuk menyerupai property didalam argument construct akan dinaikkan posisinya menjadi property, atau dalam kata lain argument itu bisa diakses sebagai property, buat gambaran bisa lihat deh, yang dibawah ini versi lama dan bawahnya lagi versi baru

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

## Union types

Tipe bawang, aneh ya wkwkw tapi pasti developer bahasa seperti javascript udah sering tau jenis tipe data ini, singkatnya sebuah variabel kita bisa berikan akses tipe data bermacam-macam dan akan throw ketika tipe data diluar yang di set di inputkan. Contoh kasusnya adalah gini, kita mau set property private `$number` hanya bisa _float_ atau _int_, nah di php 7.4 kita tinggal buat aja `private float $number` terus ketika number itu kita set maka diberi validasi `is_float` atau `is_int` bukan?? Atau malah di versi dibawah 7.4 kita perlu effort lebih dengan melakukan pengecekan dua kali, di versi ini ngga perlu lagi begindang, cukup waktu deklarasi property tanpa banyak cingcong 🤣

```php
class Number {
  public function __construct(
    private int|float $number
  ) {}
}

new Number('NaN'); // Akan error ketika diisi string, karena $number cuma menerima int dan float
```

## Match expression

Pengguna switch expression pasti sering mengalami deh kalau value string dan value numeric karena bentuknya aja yang mirip cuma beda di pembungkus lolos case condition? Misal `1` dan `'1'` akan dianggap sama oleh case ya karena memang kelemahan switch itu 😢. Di match expression hal ini berhasil diatasi, jadi hanya value yang memiliki tipe data dan kondisi yang sama persis yang akan lolos case condition

```php
echo match (1) {
  '1' => "Oh no!",
  1 => "This is what I expected",
};
//> Jadi bisa aja kita buat ekspresi yang berbeda untuk beneran integer sama beneran string yang menyamar
```

## Nullsafe operator

Ngga mau kalah sama flutter dong 😂, yaa bener di php 8 daripada harus mengecek satu per satu, nglakuin perulangan buat ngecek setiap element kaya dibawah ini

```php
$country =  null;

if ($session !== null) {
  $user = $session->user;

  if ($user !== null) {
    $address = $user->getAddress();

    if ($address !== null) {
      $country = $address->country;
    }
  }
}
```

Dipersingkat jadi mirip seperti di bahasa pemrograman yang udah nerapin duluan kaya gini, ngirit source code banget sumpah dah hahaha

```php
$country = $session?->user?->getAddress()?->country;
```

## Enumerations

Ini gokil sih, di php 8.1 ada kawan baru namanya enum cukup banget membantu buat mengecek kecocokan daripada harus pake instance class, nggak mudeng?? Nih perbangingannya

```php
class Status
{
    const DRAFT = 'draft';
    const PUBLISHED = 'published';
    const ARCHIVED = 'archived';
}
function acceptStatus(string $status) {...}
```

```php
enum Status
{
    case Draft;
    case Published;
    case Archived;
}
function acceptStatus(Status $status) {...}
```

## Readonly Properties

```php
class BlogData
{
    public readonly Status $status;

    public function __construct(Status $status)
    {
        $this->status = $status;
    }
}
```

Yap kadang atau sering, ngga sengaja override property yang niatnya ngga bisa di apa-apain, bikin kesel kan?? Untung di versi 8.1 property bisa dijadikan readonly atau singkatnya property itu ngga bisa lagi dimodifikasi setelah di assign oleh constructor 👌

## Pure Intersection Types

Setelah sebelumnya ada union types di versi 8 diperkenalkan, di 8.1 ada yang baru namanya Pure Intersection Types, apa sih? Ya dimana sebuah argument harus merupakan sebuah instance dari lebih dari satu constraints dalam satu waktu. Misalnya `$value` harus merupakan bagian dari `Iterator` dan `Countable` , ngga boleh salah satu aja. Di versi 8 kebawah kita harus set dulu salah satu constraints baru kita cek dengan expression setelahnya, tapi cukup memakan waktu nah sekarang udah ngga lagi cukup gabungkan 2 constraints pake simbol`&`

```php
function count_and_iterate(Iterator&Countable $value) {
    foreach ($value as $val) {
        echo $val;
    }

    count($value);
}
```

## Itu aja sih kalo dariku

Sebenernya ada banyak yang baru kaya **Final class constants** dan masih banyak lagi, cuma ngetiknya dah cape 😂😂😂😂. Ini bukti kalo komunitas PHP masih eksis dan mau bersaing dengan bahasa pemrograman lain utamanya web yang udah makin bejibun. Kalo penasaran bisa kunjungi dua link berikut ya...\
\
<https://www.php.net/releases/8.0/en.php>

<https://www.php.net/releases/8.1/en.php>

Sekian dulu ya sob catatan gabut kali ini, sampai jumpa dan tetep belajar! FYI gw lagi nyobain NuxtJs 3, ada yang sama? Boleh sharing lewat telegram 👍🍵
