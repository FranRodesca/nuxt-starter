<script setup>
const props = defineProps({
  title: String,
  description: String,
  items: Array,
});
</script>

<template>
  <div id="services" class="scroll-mt-8">
    <h2
      class="text-3xl font-bold text-center text-black sm:text-4xl font-heading"
      v-if="title"
    >
      {{ title }}
    </h2>
    <p
      class="max-w-3xl mx-auto mt-4 text-lg text-center text-zinc-600"
      v-if="description"
    >
      {{ description }}
    </p>
    <div class="grid gap-8 mt-10 mb-20 sm:grid-cols-2">
      <div
        v-for="item of items"
        class="p-8 border-2 border-primary-200 rounded-lg bg-primary-50 sm:p-10"
      >
        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary-100">
          <Icon v-if="item.icon" :name="item.icon" class="text-primary-600" size="28" />
        </div>
        <h3 class="text-xl font-semibold text-black font-heading" v-if="item.title">
          {{ item.title }}
        </h3>
        <p class="mt-2 leading-relaxed text-zinc-600" v-if="item.description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
