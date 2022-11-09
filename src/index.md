---
layout: base.njk
title: Home
testImage:
  img: /src/assets/img/test-img.png
  alt: Mech render
---

# Hello World!

This is base template for static websites with the power of [Eleventy!](https://www.11ty.dev/docs/watch-serve/#watch-javascript-dependencies)

Made by IsmaLB, with the idea of having an 11ty template that is not directly coupled to blog structure or theme.\
But it also includes awesome features such as filters for minifying you css and javascript, this within a structure that allows the development code to live in multiple files (.js / .css) and the using a .njk file to bundle everything and minify if required.

## Features

- basic template, nothing added
- src folder to keep root clean
- minify and bundle css and javascript files workflow
- you can create you own layouts, you web page is not required to be a blog
- netlify CMS added
- netlify CMS [local git repository](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository)

{% image testImage.img, testImage.alt, "(min-width: 30em) 50vw, 100vw" %}

<details>
<summary>
Folder structure
</summary>
<pre>
project-folder/
├─ node_modules/        npm stuff
├─ public/              output folder
│  ├─ assets/
│  ├─ index.html
│  
├─ src/                 folder for 11ty magic 
│  │  
│  ├─ assets/           folder that will contain your assets
│  │  ├─ _css/          development css code, changes here trigger a build
│  │  ├─ _js/           development javascript code, changes here trigger a build
│  │  ├─ img/           folder to save images loaded from cms that will be used in the Image() pugging*
│  │  ├─ main.js.njk    template that bundles\minifies the javascript files
│  │  ├─ style.css.njk  template that bundles\minifies the css files
│  │  
│  ├─ _data/            .json files included here can provide data to any template
│  │  
│  ├─ _includes/        put reusable templates here (footer.njk , header.njk, etc)
│  │  │
│  │  ├─ layouts/       extend base layout to create different templates (.njk) 
│  │  ├─ base.njk       contains the base html for all pages
│  │  
│  ├─ index.md          file that contains this web page content (change you yours and add more!)
│  
├─ .eleventy.js         eleventy config file, changes the input and output folders, include filters to minify js/css files
├─ .gitignore           your common git ignore file :)
├─ package.json         npm config run start (development with reload), run build (production build)
</pre>
</details>

\* note: [Image](https://www.11ty.dev/docs/plugins/image/) 11ty plugging is configured, but for sure needs to be adapted for the specific use case, based on the sizes of your images, if they are set using the CMS or not. Please take care of this based on your media needs.
