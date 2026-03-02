<script setup>
const { locale } = useLocale()

const langMap = { en: 'en-US', es: 'es-ES' }

useHead({
  htmlAttrs: { lang: computed(() => langMap[locale.value]) },
  title: "Tike — Event Planning & Management",
  meta: [
    {
      name: "description",
      content:
        "Tike is your all-in-one event management platform. Online ticket sales, event software, art fair services, and custom event apps.",
    },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  bodyAttrs: {
    class: 'font-body'
  }
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
