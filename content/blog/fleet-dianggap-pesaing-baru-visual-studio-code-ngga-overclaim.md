---
title: Fleet dianggap pesaing baru Visual Studio Code? Ngga Overclaim?
description: Setelah closed preview berubah menjadi public preview, seberapa bagus sih Fleet IDE yang digadang-gadang bakal menjadi pesaing Visual Studio Code, emang mampu?
image: /images/blog/fleet.png
date: 2022-11-29
---

Siapa tidak mengenal JetBrains? Perusahaan software yang sudah melanglang buana di dunia IDE, banyak yang sudah mereka buat seperti PHPStorm, IntellIj, WebStorm, RubyMine, GoLand, dan Android Studio yap gak salah denger meskipun Google adalah pemilik Android namun untuk urusan IDE mereka mempercayakan teknologinya ke JetBrains lho, dan sampe sekarang belum ada IDE android yang official dibuat full oleh google sendiri lho.

Bahkan nih guys, Kotlin lang di design dan dikembangkan oleh mereka juga yaa secara ngga langsung mereka adalah big tech company right? Okelah kita terlalu melebar bahas JetBrains, gimana tentang Fleet? Yaap dominasi Vscode sebagai code editor gratis sejuta umat mungkin butuh waktu buat menjadi pesaing mereka, apalagi semenjak GitHub diakuisisi oleh Microsoft sontak salah satu pesaing mereka yaitu Atom telah disuntik mati oleh mereka.

Yang tersisa hanya apa? Sublime? NPP? VIM? OMG terlalu minim plugin, memang sih simpel but yaa tak se powerful vscode. Lalu apa itu Fleet? Seperti perusahaan besar pada umumnya, JetBrains sebagai induk tentu ingin semua lini bisnis IDE bisa mereka libas, salah satunya adalah Polygot side. Apa itu polygot? Gampangnya sih sebuah IDE yang bisa buat modifikasi dan menjalankan tools coding dalam satu aplikasi yang sama, berbeda dengan IDE Jetbrains sebelumnya yang hanya terfokus pada satu bahasa program, polygot menjangkau itu semua.

Kemunculan Fleet dimulai pada 29 November 2021 dari https://blog.jetbrains.com/blog/2021/11/29/welcome-to-fleet/ yang menjelaskan mereka akan merilis sebuah IDE dengan kemampuan untuk terintegrasi dengan seluruh layanan JetBrains, dan bagusnya IDE ini dikabarkan akan Gratis sampai artikel ini dibuat soo ya banyak yang penasaran dong terkait IDE ini, apalagi layanan jetbrains dikenal mahal bahkan bisa terhitung jutaan rupiah hanya untuk satu IDE.

Hal ini sontak memberikan angin segar bagi pencari alternatif vscode, apalagi di Fleet ada fitur Smart Mode yang memungkinkan untuk menghidupkan fitur indexing seperti IDE JetBrains yang lain secara Out Of The Box tanpa perlu install extension apapun. So yaah itulah sedikit gambaran tentang JetBrains. Sekarang apakah IDE itu sebagus yang diceritakan? Hopefully ya but wait...

### Cara Install

1. Buka halaman fleet ke https://www.jetbrains.com/fleet/ dan klik download
2. Kamu akan dialihkan ke halaman download JetBrains Toolbox
3. Download Aplikasinya dan install

### First Impression

By default Fleet hanya terlihat sebagai sebuah code editor biasa seperti Sublime Text malahan, ngga ada fitur spesial seperti aplikasi vscode, lihatlah dibawah ini

![fleet](/images/blog/fleet-preview.png)

Biasa aja kan? Tapi eh tapi, perhatiin bagian toolbar kanan atas, ada icon flash kaya gledek?

![smart mode](/images/blog/fleet-smart-mode.png)

Mereka akan melakukan sync indexing semua baris code termasuk node modules untuk memberikan suggestions dan mapping ketika melakukan develop sebuah project, untuk pengembangan awal hanya beberapa bahasa program yang didukung oleh fleet, namun kedepannya bakal banyak lagi yang disupport, tertarik? Baca overall review gw dulu

### Overall Review

- Tools dan UI tidak se familiar IDE JetBrains pada umunya
- Perlu waktu sedikit lama untuk menyesuaikan dari VSCode
- Proses instalasi yang ribet, ngga bisa direct ke aplikasinya. Perlu pake toolbox

Segitu aja sih pengalaman awal menggunakan Fleet sebagai JetBrains user dan VsCode user juga, menurut gw banyak yang perlu di improve buat saat ini masih belum bisa gw rekomendasiin kalau lu mau beralih. Oiya Fleet tersedia buat semua os ya

- Linux
- Windows
- MacOS

Happy code night ☕️
