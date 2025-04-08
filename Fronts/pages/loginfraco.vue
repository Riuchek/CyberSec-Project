<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-800">Login fraco</h1>
          <p class="mt-2 text-gray-600">Sem nenhuma segurança</p>
        </div>
  
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="login" class="block text-sm font-medium text-gray-700">Login</label>
            <input 
              type="text" 
              id="login" 
              v-model="formData.login" 
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="login"
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
              placeholder="senha fraca"
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
  
      <div v-if="results.length" class="mt-6 p-4 bg-gray-100 rounded-md">
        <h2 class="text-lg font-bold text-gray-700">Resultado:</h2>
        <pre class="mt-2 p-2 bg-gray-200 rounded text-sm text-gray-700">{{ results }}</pre>
      </div>

      <div v-if="message" class="mt-6 text-sm" :class="{ 'text-red-600': message.includes('Erro'), 'text-green-600': message.includes('sucesso') }">
        {{ message }}
      </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

  interface Resposta {
    message: string
    data: any[]
  }

  const formData = ref({
    login: '',
    senha: ''
  })
  const message = ref('')
  const results = ref<Resposta[]>([])
  

  async function submitForm() {
  try {
    const response:Resposta = await $fetch('/api/vulneravel', {
      method: 'POST',
      body: JSON.stringify(formData.value),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    message.value = response.message || 'Dados enviados com sucesso!'
    results.value = response.data || []
    formData.value = { login: '', senha: '' } 
  } catch (error) {
    message.value = 'Erro ao enviar: ' + (error as Error).message
    results.value = []
  }
  }
  </script>
  