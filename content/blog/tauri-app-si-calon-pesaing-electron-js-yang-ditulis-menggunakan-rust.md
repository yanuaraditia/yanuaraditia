---
title: 'Tauri: The Upcoming Electron Competitor Written in Rust'
image: /images/blog/tauri.png
description: "Who hasn't heard of electron.js? The go-to multi-platform desktop development framework for Linux, Mac, and Windows. Now, there's a new competitor: Tauri JS."
date: 2022-12-6
---

When talking about cross-platform desktop apps, we can't ignore popular names like electron.js and meteor.js. Electron is currently the most popular framework, with over 100k stars on GitHub, and we all know that electron.js is managed and developed by GitHub as the main contributor. However, before Tauri arrived, Electron was often criticized for using Chromium as its application renderer, which, as we know, is quite memory-hungry. So, how do we solve this? Well, you could use native code—just kidding. Is there another solution?

Yes, there is! It's called Tauri, a newcomer built using Rust as its compiler. Unlike Electron, which uses the V8 engine and Chromium as its renderer, Tauri uses Rust at its core and introduces TAO and WRY as tools for communication. So, compared to JavaScript, Rust is much closer to the machine, right? According to several sources, Tauri excels in memory management and bundle size compared to Electron. For example, see this source: https://www.levminer.com/blog/tauri-vs-electron. Of course, Tauri also has a faster startup time than Electron. Okay, that's enough intermezzo—let's move on to installation.

## Development Experience

For a more complete installation guide, visit https://tauri.app. But for starters, they already support popular frameworks like:

- [NextJS](https://nextjs.org/)
- [SvelteKit](https://kit.svelte.dev/)
- [Vite](https://vitejs.dev/)
- _other frameworks_

## Should You Migrate?

For those who have tried or produced products using electron.js, should you migrate to Tauri? My answer is yes, but with some notes:

- Tauri uses Rust in some cases. It's basic, but Rust is a high-level language that not everyone is familiar with.
- Tauri's sponsorship is still limited compared to Electron, which has been around longer, so it will take time to develop features that match Electron.
- There are not yet any showcase companies using Tauri as one of their technologies.

## References

- [Tauri](https://tauri.app/)
- [Electron.js](https://www.electronjs.org/)
- [Rust](https://www.rust-lang.org/)
- [TAO](https://github.com/tauri-apps/tao)
- [WRY](https://github.com/tauri-apps/wry)
- [NextJS](https://nextjs.org/)
- [SvelteKit](https://kit.svelte.dev/)
- [Vite](https://vitejs.dev/)
- [Tauri vs Electron Comparison](https://www.levminer.com/blog/tauri-vs-electron)
