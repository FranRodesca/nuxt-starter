<script setup>
const { locale, data, toggleLocale } = useLocale()

const menuitems = computed(() => [
  {
    title: data.value.nav.services,
    url: "#services",
  },
  {
    title: data.value.nav.contact,
    url: "#contact",
  },
])
</script>

<template>
  <Container>
    <header class="flex flex-row flex-wrap items-center justify-between my-4 gap-x-6 gap-y-4">
      <div class="flex items-center justify-between">
        <a href="/" class="flex items-center gap-2 text-2xl font-bold text-black font-heading">
          <span class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500">
            <img src="/icon_web_white.svg" alt="Tike" class="w-5 h-5" />
          </span>
          <span class="hidden sm:inline">Tike</span>
        </a>
      </div>
      <nav class="flex items-center gap-4">
        <ul class="flex flex-row gap-3 text-sm">
          <li v-for="item of menuitems">
            <a :href="item.url" class="flex px-3 py-2 text-gray-600 border rounded-sm hover:text-gray-800">
              {{ item.title }}
            </a>
          </li>
        </ul>
        <button
          @click="toggleLocale"
          class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary-700 border border-primary-300 rounded-sm hover:bg-primary-50 transition-colors"
          :aria-label="locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'"
        >
          <span>{{ locale === 'en' ? 'ES' : 'EN' }}</span>
        </button>
      </nav>
    </header>
  </Container>
</template>
