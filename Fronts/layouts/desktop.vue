<script lang="ts" setup>
// Sua lógica existente
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        
        <div class="flex space-x-4">
          <button 
            @click="navigateTo('loginseguro')"
            class="px-6 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-200/50 flex items-center"
          >
             Login Seguro 
          </button>

          <button 
            @click="navigateTo('login')"
            class="px-6 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-200/50 flex items-center"
          >
             Login Razoavel
          </button>
          
          <button 
            @click="navigateTo('loginfraco')"
            class="px-6 py-2 rounded-lg font-medium text-gray-800 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-200/50 flex items-center"
          >
             Login Ruim
          </button>
        </div>
      </div>
    </header>
    <main class="flex-grow pt-20">
      <NuxtPage />
    </main>
  </div>
</template>