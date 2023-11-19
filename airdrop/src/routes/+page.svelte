<script lang="ts">
  import "../app.css";

  import CheckEligibility from "$lib/components/CheckEligibility.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Gradients from "$lib/components/Gradients.svelte";
  import Hero from "$lib/components/Hero.svelte";
</script>

<main
  class="w-full grow relative h-full
    flex flex-col items-center justify-center gap-y-10
    overflow-hidden"
>
  <Hero />

  <CheckEligibility />

  <Gradients />
</main>

<Footer />

<style>
  main {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #131313 100%);
  }

  main::before {
    @apply absolute content-[''] top-0 left-0 right-0 bottom-0;
    border-bottom: 1px solid #2f2c27;
    border-right: 1px solid #2f2c27;
    background-image: url("/bg-cell.svg");
    background-repeat: repeat;
    z-index: -1;
  }
</style>
