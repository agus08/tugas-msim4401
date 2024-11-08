<template>
  <div class="flex flex-col items-center p-6">
    <h1 class="text-2xl font-bold mb-4">Looping Angka dari 1 hingga 50</h1>
    <ul class="grid grid-cols-5 gap-4">
      <li
        v-for="number in numbers"
        :key="number"
        class="bg-blue-500 text-white text-center p-4 rounded-lg shadow-md"
      >
        {{ number }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    // Membuat array angka dari 1 sampai 50
    const numbers = ref<number[]>(Array.from({ length: 50 }, (_, i) => i + 1));

    return {
      numbers,
    };
  },
});
</script>
