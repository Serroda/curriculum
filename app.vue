<template>
  <div class="h-100% w-100% flex flex-col items-center">

    <div class="flex init-margin max-w-1100px flex-wrap hero-container">
      <div class="hero-text">
        <h2>CURRICULUM VITAE</h2>
        <h1>JESÚS CÁRCELES CLEMENTE</h1>
        <p>Full-stack developer</p>
        <h2 class="digits mb-5px">{{ animationStringVue.stringAnimated.value }}</h2>
        <h2 class="digits mt-5px">{{ animationStringNet.stringAnimated.value }}</h2>
      </div>
      <div>
        <ProfilePicture />
        <ColorButton />
      </div>
    </div>

    <div class="flex w-100% max-w-1100px mt-80px">
      <Divider class="media-screen" text="DESCRIPCIÓN" />
    </div>

    <div class="w-100% flex flex-wrap mt-80px">
      <Bubbles />
      <div class="description-container">
        <div class="flex justify-between items-end w-100%">
          <h3 class="mb-0">HOLA</h3>
          <Matrix :dots="24" :columns="6" />
        </div>
        <p>Soy desarrollador de aplicaciones web con 5 años de experiencia, me encanta ambos mundos tanto el Frontend como
          el
          Backend</p>
        <h3 class="mt-40px">INTERESES</h3>
        <div class="flex flex-wrap gap-10px">
          <Tag v-for="interest in interests" :text="interest" />
        </div>
        <h3 class="mt-40px">IDIOMAS</h3>
        <ul>
          <li>Español nativo</li>
          <li>Inglés: nivel básico de conversación y nivel intermedio en escritura y comprensión lectora</li>
        </ul>
      </div>
    </div>

    <div class="max-w-1100px mt-80px ml-30px mr-30px">
      <h3 class="mb-40px">TECNOLOGÍAS CON LAS QUE TRABAJO</h3>
      <TechGrid :technologies="technologies" @clickItem="openLink" />
    </div>

    <section class="w-100% mt-80px pt-100px flex flex-col items-center">
      <div class="flex w-100% align-items mb-40px">
        <div class="section-title mt-22px">
          <Divider class="invert-color" />
        </div>
        <h2 class="invert-color ml-16px m-0">EXPERIENCIA</h2>
      </div>

      <div class="max-w-1100px mb-100px ml-30px mr-30px">
        <ExpGrid />
      </div>
    </section>

    <footer class="max-w-1100px mt-40px ml-30px mr-30px">
      <h3 class="mb-40px">CONTACTO Y LINKS</h3>
      <div class="flex justify-between items-start mb-80px flex-wrap gap-26px">
        <div class="flex gap-26px ">
          <Box animation class="cursor-pointer" @click="openLink(links.github)">
            <template #content>
              <div class="ml-20px mr-20px mt-10px mb-10px">
                <label>GITHUB</label>
              </div>
            </template>
          </Box>

          <Box animation class="cursor-pointer" @click="openLink(links.linkedin)">
            <template #content>
              <div class="ml-20px mr-20px mt-10px mb-10px">
                <label>LINKEDIN</label>
              </div>
            </template>
          </Box>
        </div>

        <div>
          <Matrix :dots="60" :columns="15" />
        </div>
      </div>
    </footer>

  </div>
</template>

<script lang="ts" setup>
const intersectionObserver = useIntersectionObserver();
const animationStringVue = useStringAnimation()
const animationStringNet = useStringAnimation()

animationStringVue.init("01010110 01110101 01100101", 40, 50)
animationStringNet.init("01001110 01000101 01010100", 65, 50)

useHead({
  htmlAttrs: {
    lang: 'es'
  },
  link: [{
    rel: 'icon',
    href: '/curriculum/images/logo.svg'
  }],
  meta: [{
    "name": "theme-color",
    "content": "#0D0D0D"
  }]
})

useSeoMeta({
  title: 'Jesús Cárceles',
  description: 'Hola, soy desarrollador de aplicaciones web',
  ogTitle: 'Jesús Cárceles',
  ogDescription: 'Hola, soy desarrollador de aplicaciones web',
  ogImage: 'https://serroda.github.io/curriculum/images/logo.svg',
  ogUrl: 'https://serroda.github.io/curriculum/',
  twitterTitle: 'Jesús Cárceles',
  twitterDescription: 'Hola, soy desarrollador de aplicaciones web',
  twitterImage: 'https://serroda.github.io/curriculum/images/logo.svg',
  twitterCard: 'summary'
})

enum links {
  github = 'https://github.com/Serroda/',
  linkedin = 'https://es.linkedin.com/in/jes%C3%BAs-c%C3%A1rceles-119108234'
}

const interests = ["EXPERIENCIA DE USUARIO (UX)", "EXPERIENCIA DE DESARROLLADOR (DX)", "ANIMACIÓN", "DISEÑO", "CREACIÓN DE SERVICIOS"]

function createURL(img: string) {
  return new URL('./images/' + img, import.meta.url).href
}

const technologies = [{
  name: "VUE",
  image: createURL("vue.png"),
  link: "https://vuejs.org/"
},
{
  name: "VITE",
  image: createURL("vite.png"),
  link: "https://vitejs.dev/"
},
{
  name: "NUXT",
  image: createURL("nuxt.png"),
  link: "https://nuxt.com/"
},
{
  name: "JAVASCRIPT",
  image: createURL("javascript.png"),
  link: "https://developer.mozilla.org/es/docs/Web/JavaScript"
},
{
  name: "CSS",
  image: createURL("css.png"),
  link: "https://developer.mozilla.org/es/docs/Web/CSS"
},
{
  name: "FIGMA",
  image: createURL("figma.png"),
  link: "https://www.figma.com/"
},
{
  name: "C#",
  image: createURL("csharp.png"),
  link: "https://learn.microsoft.com/es-es/dotnet/csharp/"
},
{
  name: "SQL",
  image: createURL("sql.png"),
  link: "https://es.wikipedia.org/wiki/SQL"
},
{
  name: "CAPACITOR",
  image: createURL("capacitor.png"),
  link: "https://capacitorjs.com/"
},
{
  name: "ENTITY FR.",
  image: createURL("entity.png"),
  link: "https://learn.microsoft.com/en-us/ef/"
},
{
  name: ".NET",
  image: createURL("net.png"),
  link: "https://dotnet.microsoft.com/es-es/learn/dotnet/what-is-dotnet"
},
{
  name: "TYPESCRIPT",
  image: createURL("typescript.png"),
  link: "https://www.typescriptlang.org/"
}]


function openLink(link: string) {
  window.open(link, "_blank")
}



onMounted(() => {
  intersectionObserver.setObserver("observing")
  animationStringNet.animate()
  animationStringVue.animate()
})
</script>