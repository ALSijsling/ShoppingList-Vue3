<script setup>
  import {ref} from "vue"
  import GroceriesTable from "./../../components/GroceriesTable.vue";
  
  let id = 0

  const groceries = ref([
    {id: id++, name: "Brood", price: 1.00, cost: ""},
    {id: id++, name: "Broccoli", price: 0.99, cost: ""},
    {id: id++, name: "Krettebollen", price: 1.20, cost: ""},
    {id: id++, name: "Noten", price: 2.99, cost: ""}
  ])
</script>

<template>
  <GroceriesTable :groceries="groceries" />
</template>