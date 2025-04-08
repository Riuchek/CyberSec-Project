<script lang="ts" setup>

</script>

<template>
  <div>
    <HeaderDesktop />
    <button @click="navigateTo('login')">login bom</button>
    <button @click="navigateTo('loginseguro')">login ruim</button>
    <NuxtPage />
    <FooterDesktop />
  </div>
</template>