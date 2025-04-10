<script lang="ts" setup>
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 md:hidden">
      <div class="flex">
        <button 
          @click="navigateTo('loginseguro')"
          class="flex-1 py-4 px-2 text-center font-medium text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 flex flex-col items-center justify-center"
        >
          <span class="text-xl">👍</span>
          <span class="text-sm mt-1">Login Seguro</span>
        </button>
        
        <button 
          @click="navigateTo('login')"
          class="flex-1 py-4 px-2 text-center font-medium text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 flex flex-col items-center justify-center"
        >
          <span class="text-xl">👍</span>
          <span class="text-sm mt-1">Login Razoavel</span>
        </button>

        <button 
          @click="navigateTo('loginfraco')"
          class="flex-1 py-4 px-2 text-center font-medium text-gray-800 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 flex flex-col items-center justify-center"
        >
          <span class="text-xl">👎</span>
          <span class="text-sm mt-1">Login Ruim</span>
        </button>
      </div>
    </div>
    <main class="pb-20 md:pb-0">
      <NuxtPage />
    </main>
  </div>
</template>