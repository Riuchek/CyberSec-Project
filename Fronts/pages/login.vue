<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Login Razoavel</h1>
        <p class="mt-2 text-gray-600">Somente segurança no backend</p>
      </div>
      
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label for="login" class="block text-sm font-medium text-gray-700">login</label>
          <input 
            type="text" 
            id="login" 
            v-model="formData.login" 
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Digite seu login"
          >
        </div>
  
        <div>
          <label for="senha" class="block text-sm font-medium text-gray-700">Senha</label>
          <input 
            type="text" 
            id="senha" 
            v-model="formData.senha" 
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="senha forte"
          >
        </div>
  
        <div>
          <button 
            type="submit" 
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
            Enviar
          </button>
        </div>
      </form>
  
      <div 
        v-if="message" 
        class="mt-6 p-4 rounded-md"
        :class="{
          'bg-green-50 text-green-800': message.includes('sucesso'),
          'bg-red-50 text-red-800': message.includes('Erro')
        }"
      >
        <p class="text-sm">{{ message }}</p>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  const formData = ref({
    login: '',
    senha: ''
  })
  const loading = ref(false)
  const message = ref('')
  
  async function submitForm() {
    try {
      loading.value = true
      const response = await $fetch('http://localhost:8080/api/dados', {
        method: 'POST',
        body: JSON.stringify(formData.value),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      message.value = 'Dados enviados com sucesso!'
      formData.value = { login: '', senha: '' } 
    } catch (error) {
      message.value = 'Erro ao enviar: ' + (error as Error).message
    }
    finally {
      loading.value = false
    }
  }
  </script>
  
  