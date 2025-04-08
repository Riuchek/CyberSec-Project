<template>
    <div class="form-container">
      <h1>Formulário Simples</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input 
            type="text" 
            id="nome" 
            v-model="formData.nome" 
            required
          >
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            required
          >
        </div>
  
        <button type="submit">Enviar</button>
      </form>
  
      <div v-if="message" class="message">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const formData = ref({
    nome: '',
    email: ''
  })
  
  const message = ref('')
  
  async function submitForm() {
    try {
      const response = await $fetch('http://localhost:8080/api/dados', {
        method: 'POST',
        body: JSON.stringify(formData.value),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      message.value = 'Dados enviados com sucesso!'
      formData.value = { nome: '', email: '' } 
    } catch (error) {
      message.value = 'Erro ao enviar: ' + (error as Error).message
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .message {
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
  }
  </style>