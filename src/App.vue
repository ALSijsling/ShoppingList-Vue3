<script setup>

</script>

<template>
  <div>
    <router-link to="/">Home </router-link>
    <router-link to="/create">Create </router-link>
    <router-link to="/edit">Edit</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>