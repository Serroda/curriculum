<template>
  <div class="h-100% w-100% flex flex-col items-center">
    <div class="flex">
      <div>
        <h2>CURRICULUM VITAE</h2>
        <h1>JESÚS CÁRCELES CLEMENTE</h1>
        <p>Full-stack developer</p>
        <h2 class="dark-color mb-5px">01010110 01110101 01100101</h2>
        <h2 class="dark-color mt-5px">00101110 01001110 01000101 01010100</h2>
      </div>
      <div></div>
    </div>

  </div>
</template>

<script lang="ts" setup>

enum linkAddress {
  github = 'https://github.com/Serroda/',
  linkedin = 'https://es.linkedin.com/in/jes%C3%BAs-c%C3%A1rceles-119108234'
}

const technologies = [{
  name: "Vue",
  image: "vue.png",
  link: "https://vuejs.org/"
},
{
  name: "Vite",
  image: "vite.png",
  link: "https://vitejs.dev/"
},
{
  name: "Nuxt",
  image: "nuxt.png",
  link: "https://nuxt.com/"
},
{
  name: "JavaScript",
  image: "javascript.png",
  link: "https://developer.mozilla.org/es/docs/Web/JavaScript"
},
{
  name: "CSS",
  image: "css.png",
  link: "https://developer.mozilla.org/es/docs/Web/CSS"
},
{
  name: "Figma",
  image: "figma.png",
  link: "https://www.figma.com/"
},
{
  name: "C#",
  image: "csharp.png",
  link: "https://learn.microsoft.com/es-es/dotnet/csharp/"
},
{
  name: "SQL",
  image: "sql.png",
  link: "https://es.wikipedia.org/wiki/SQL"
},
{
  name: "Capacitor",
  image: "capacitor.png",
  link: "https://capacitorjs.com/"
},
{
  name: "Entity Framework",
  image: "entity-framework.png",
  link: "https://learn.microsoft.com/en-us/ef/"
},
{
  name: ".NET",
  image: "net.png",
  link: "https://dotnet.microsoft.com/es-es/learn/dotnet/what-is-dotnet"
},
{
  name: "TypeScript",
  image: "typescript.png",
  link: "https://www.typescriptlang.org/"
}]

function openLink(link: linkAddress) {
  window.open(link, "_blank")
}

const intersectionObserver = useIntersectionObserver();

onMounted(() => {
  intersectionObserver.setObserver("observing")
})
</script>