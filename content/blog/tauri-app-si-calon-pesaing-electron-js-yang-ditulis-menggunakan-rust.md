---
title: Tauri si calon pesaing Electron yang ditulis menggunakan Rust
image: /images/blog/tauri.png
description: Siapa sih yang tidak tau electron.js? Framework development multi-platform desktop buat sejuta umat baik Linux, Mac, ataupun Windows? Kini ada saingannya lho yaitu tauri js
date: 2022-12-6
---

Ngobrolin tentang cross-platform desktop apps kita ngga bisa lepas dari nama-nama populer seperti electron.js maupun meteor.js. Electron adalah framework yang paling disukai untuk saat ini dengan total stars di github sejumlah +100k dan kita sama-sama tau kalau electron.js dikelola dan dikembangkan oleh github sebagai main contributornya. Tapi sebelum tauri hadir, electron banyak dikeluhkan karena mereka menggunakan chromium sebagai renderer aplikasi mereka ke desktop yang kita sama-sama tau kalo chrome itu rakus memory. Lalu gimana caranya buat mengatasi itu? Ada sebetulnya, yaa native code hehe ngga deng becanda. Adakah solusi lain?

Ada dong, yap namanya Tauri si pendatang baru yang dibuat menggunakan Rust sebagai compilernya, berbeda dengan electron yang menggunakan v8 sebagai engine serta chromium sebagai renderer, tauri menggunakan rust sebagai jantung dan menciptakan TAO dan WRY sebagai alat untuk berkomunikasi. Soo dibanding javascript tentu rust diunggulkan karena jauh lebih dekat dengan mesin yakan? Dari beberapa sumber sih menyebutkan kalau tauri unggul jauh dalam manajemen memori dan bundle size daripada electron, contohnya di sumber ini : https://www.levminer.com/blog/tauri-vs-electron, serta of course proses startup time tauri lebih cepat daripada electron. Oke sedikit intermezzonya, sekarang mari mengarah ke instalasinya

### Development Experience

Untuk instalasi lebih lengkap bisa kunjungi https://tauri.app, tapi yang jelas untuk tahap awal mereka mendukung kok untuk framework populer kaya

- NextJS
- SvelteKit
- Vite
- _framework lain_

### Apakah perlu migrate?

Buat temen-temen yang udah coba atau produce produk menggunakan electron.js apakah perlu buat migrate ke tauri? Jawabanku jelas iya, tapi dengan catatan yaitu

- Tauri menggunakan Rust di beberapa kondisi, hanya basic memang tapi rust adalah bahasa tingkat tinggi yang tidak semua orang bisa memahami pengunaannya
- Sponsorship tauri masih sedikit dibanding electron yang sudah lebih dulu ada, maka yaa butuh waktu buat develop ke arah yang mendekati fitur electron
- Belum ada showcase company yang menggunakan tauri untuk salah satu teknologi mereka
