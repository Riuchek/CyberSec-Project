<script lang="ts" setup>

const { isMobile } = useDevice();
const layout = isMobile ? 'mobile' : 'desktop';
</script>

<template>
  <div>
    <NuxtLayout :name="layout" />
  </div>
</template>