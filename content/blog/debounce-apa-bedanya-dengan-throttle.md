---
title: Debounce – Apa bedanya dengan throttle?
description: Debounce berarti menunda eksekusi function yang berulang-ulang sampai ada kondisi idle dalam rentang waktu yang ditentukan.
image: /images/blog/debounce.png
date: 2023-06-10
---

Sebagai seorang web developer baik back-end atau front-end pasti sedikit banyak kalian pernah denger istilah Throttle kan? Yaa gampangnya throttle dipake buat membatasi jumlah hit dari sebuah endpoint atau aplikasi oleh satu user / client dalam kurun waktu tertentu, contohnya kita pengen membatasi endpoint api/user cuma bisa diakses 60 kali dalam satu menit maka disini kita bisa pake teknologi throttle. Lalu apa itu debounce?

### Debounce

Debounce artinya memantulkan kalo diartiin pake google translate, but secara singkat ada benarnya. Debounce berasal dari konsep elektronik seperti remote tv dimana remote baru akan mengirimkan singnal ketika kamu benar-benar selesai menekan tombol, konsepnya mirip seperti itu.

### Kapan harus pakai debounce?

Oke let me explain, sebagai seorang developer front-end yang baik, alangkah lebih baiknya adalah menjaga keharmonisan antara developer FE dan BE ya ngga sih? Salah satunya adalah ini, contoh implementasinya adalah kita mau membuat sebuah input dimana fungsinya untuk mencari data list kecamatan berdasarkan keyword yang diinput oleh user, so what should we do? Aku kasih contoh kasus deh

#### Contoh Kasus

Sebuah input field memiliki minimum 3 karakter panjang text dengan harapan sistem akan melakukan hit ke api ketika user menyelesaikan mengetik dengan delay 100ms dari input terakhir, soo gimana caranya pake javascript? Gini caranya
