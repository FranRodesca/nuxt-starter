<script setup>
const { data } = useLocale()
</script>

<template>
  <footer class="my-20">
    <p class="text-sm text-center text-zinc-600">
      {{ data.footer.copyright }} &copy; {{ new Date().getFullYear() }} Tike. {{ data.footer.poweredBy }} <a href="https://www.netlify.com/" class="underline">Netlify</a>.
    </p>
  </footer>
</template>
