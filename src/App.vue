<script>

export default {
  el: '#app',
  methods: {
    handleClickHidden : function () {
      let btn = this.$el.querySelector("#menu");
      btn.classList.add("hidden");
    },
    handleClickShow : function () {
      let btn = this.$el.querySelector("#menu");
      btn.classList.remove("hidden");
    }
  }
};

</script>

<template>
  <div class="p-5 md:w-5/6 md:mt-10">
    <header class="flex justify-between items-center">
      <div  class="w-12 md:w-16">
        <a href="./">
          <img src="src/assets/images/logo.svg" alt="logo">
        </a>
      </div>

      <div>
        <div @click="handleClickShow" class="menu md:hidden block cursor-pointer">
          <img src="src/assets/images/icon-menu.svg" alt="icono menu">
        </div>
 
        <div class="bg-white h-screen fixed hidden top-0 right-0 w-8/12 shadow-menu md:shadow-none md:hidden" id="menu">

          <div @click="handleClickHidden" class="flex justify-end py-8 px-6 cursor-pointer">
            <img src="src/assets/images/icon-menu-close.svg" alt="icono cerrar">
          </div>
          
          <nav class="flex flex-col items-start mt-32 h-full text-center px-7 gap-6 text-normal">
            <a class="inline-block hover:text-red_soft" href="./">Home</a>
            <a class="inline-block hover:text-red_soft" href="#">New</a>
            <a class="inline-block hover:text-red_soft" href="#">Popular</a>
            <a class="inline-block hover:text-red_soft" href="#">Treding</a>
            <a class="inline-block hover:text-red_soft" href="#">Categories</a>
          </nav>
        </div>

      </div>

      <nav class="hidden md:block">
        <a class="inline-block mr-10 hover:text-red_soft" href="./">Home</a>
        <a class="inline-block mr-10 hover:text-red_soft" href="#">New</a>
        <a class="inline-block mr-10 hover:text-red_soft" href="#">Popular</a>
        <a class="inline-block mr-10 hover:text-red_soft" href="#">Treding</a>
        <a class="inline-block hover:text-red_soft" href="#">Categories</a>
      </nav>
    </header>

    <main class="md:grid md:grid-cols-3 gap-8">
      <article class="md:col-span-2">

        <div class="mt-8">
          <picture>
            <source media="(max-width: 645px)" srcset="src/assets/images/image-web-3-mobile.jpg">
            <img src="src/assets/images/image-web-3-desktop.jpg" alt="imagen main">
          </picture>
        </div>

        <section class="md:flex md:gap-10 md:mb-10">
          <h1 class="text-5xl md:text-6xl font-extrabold leading-extra-title mt-8 mb-5 text-blue_very_dark md:basis-1/2 ">The Bright Future of Web 3.0?</h1>
  
          <div class="md:mt-8 md:basis-1/2">
            <p  class="text-blue_grayish_dark">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
  
            <a 
              href="#"
              class="px-10 md:px-14 py-4 block bg-red_soft mt-8 text-white tracking-widest uppercase text-base w-max hover:bg-blue_very_dark"
            >Read More</a>
          </div>
        </section>
        
      </article>

      <article class="mt-14 md:mt-8 bg-blue_very_dark text-blue_grayish p-5 md:p-8 md:mb-10">
        <h2 class="text-2xl md:text-4xl font-bold text-orange_soft mb-8 md:mb-5">New</h2>

        <section class="border-b border-blue_grayish_dark">
          <a 
            href="#" 
            class="font-extrabold mb-3 block text-xl hover:text-orange_soft md:text-1/5xl"
          >Hydrogen VS Electric Cars</a>
          <p class="text-blue_grayish text-base mb-7 md:text-normal">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </section>

        <section class="border-b border-blue_grayish_dark mt-7">
          <a 
            href="#"
            class="font-extrabold mb-3 block text-xl hover:text-orange_soft md:text-1/5xl"
          >The Downsides of AI Artistry</a>
          <p class="text-blue_grayish text-base mb-7 md:text-normal">What are the possible adverse effects of on-demand AI image generation?</p>
        </section>

        <section class="mt-7">
          <a 
            href="#"
            class="font-extrabold mb-3 block text-xl hover:text-orange_soft md:text-1/5xl"
          >Is VC Funding Drying Up?</a>
          <p class="text-blue_grayish text-base mb-2 md:text-normal">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </section>
        
      </article>

      <article class="mt-14 md:mt-0 md:col-span-3 md:flex md:gap-5 mb-10 md:mb-16">

        <seciton class="flex gap-5 items-center mb-5 md:mb-0 md:basis-1/3 xl:flex-row sm:flex-col">
          <div class="basis-2/5 h-full w-full">
            <img class="h-full" src="src/assets/images/image-retro-pcs.jpg" alt="imagen retro PCs">
          </div>

          <div class="basis-3/5">
            <p class="text-4xl font-bold text-blue_grayish">01</p>

            <a href="#" class="font-extrabold text-blue_very_dark text-xl hover:text-red_soft cursor-pointer">Reviving Retro PCs</a>
            <p class="text-base mt-2 text-blue_grayish_dark">What happens when old PCs are given modern upgrades?</p>
          </div>

        </seciton>

        <seciton class="flex gap-5 items-center mb-5 md:mb-0 md:basis-1/3 xl:flex-row sm:flex-col">
          <div class="basis-2/5 h-full w-full">
            <img class="h-full" src="src/assets/images/image-top-laptops.jpg" alt="imagen top laptops">
          </div>

          <div class="basis-3/5">
            <p class="text-4xl font-bold text-blue_grayish">02</p>

            <a href="#" class="font-extrabold text-blue_very_dark text-xl hover:text-red_soft cursor-pointer">Top 10 Laptops of 2022</a>
            <p class="text-base mt-2 text-blue_grayish_dark">Our best picks for varius needs and budgets.</p>
          </div>

        </seciton>

        <seciton class="flex gap-5 items-center md:basis-1/3 xl:flex-row sm:flex-col">
          <div class="basis-2/5 h-full w-full">
            <img class="h-full" src="src/assets/images/image-gaming-growth.jpg" alt="imagen gaming">
          </div>

          <div class="basis-3/5">
            <p class="text-4xl font-bold text-blue_grayish">03</p>

            <a href="#" class="font-extrabold text-blue_very_dark text-xl hover:text-red_soft cursor-pointer">The Growth of Gaming</a>
            <p class="text-base mt-2 text-blue_grayish_dark">How the pandemich has sparked fresh opportunities.</p>
          </div>

        </seciton>

      </article>
      
    </main>
  </div>
</template>
