<script setup>
const route = useRoute();
const searchParams = route.query; // querryString คือค่าที่ส่งไปยังหน้านั้นๆ
</script>

<template>
  <div>
    <h1>Blog Info {{ searchParams.search }}</h1>
  </div>
</template>
