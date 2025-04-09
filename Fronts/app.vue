<script lang="ts" setup>

const { isMobile } = useDevice();
const layout = isMobile ? 'mobile' : 'desktop';
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <NuxtLayout :name="layout">
       <NuxtPage />
    </NuxtLayout>
  </div>
</template>