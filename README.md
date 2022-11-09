# 11ty-basic-template

Eleventy based web page template for static sites, it includes css, js, bundle and minify capabilities, as well as the image plugin for automatic resize of images

## Getting Started

## Getting Started

### 1. Clone or download this Repository

```
git clone https://github.com/11ty/eleventy-base-blog.git my-web-site-name
```

or download .zip and uncompress locally

### 2. Navigate to the directory

```
cd my-web-site-name
```

### 3. Install dependencies

```
npm install
```

### 4. Run Eleventy

```
npx @11ty/eleventy
```

Or build and host locally for local development

```
npx @11ty/eleventy --serve
```

Or use the scripts configured in package.json

```
npm start
```

to start the dev environment with eleventy serving the files

```
npm run start-dev
```

to start the dev environment with eleventy serving the files and the local backend script from Netlify CMS (windows only?)

```
npm run cms
```

starts the local backend script from Netlify CMS

### 6. Change and configure the template

The idea of this template is to ease out the start of a project by including a js and css bundler and minify workflow, as well as the Netlify CMS for content management, but you can add, bend, twist, combine, remove or change any of the behavior. 

Be aware of this useful resources:

- [11ty docs](https://www.11ty.dev/docs/)
- [11ty templates](https://www.11ty.dev/docs/templates/)
- [Netlify cms configuration](https://www.netlifycms.org/docs/configuration-options/) (in config.yml)
- [Netlify cms Widgets](https://www.netlifycms.org/docs/widgets/) (what you can use in the CMS ui)
