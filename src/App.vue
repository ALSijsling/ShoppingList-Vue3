<script setup>

</script>

<template>
  <div>
    <router-link to="/">Home </router-link>
    <router-link to="/create" class="ml-4">Add product </router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>