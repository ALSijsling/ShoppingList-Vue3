<script setup>
  import {ref} from 'vue'

  let id = 0

  const groceries = ref([
    {id: id++, name: "Brood", price: 1.00},
    {id: id++, name: "Broccoli", price: 0.99},
    {id: id++, name: "Krettebollen", price: 1.20},
    {id: id++, name: "Noten", price: 2.99}
  ])
</script>

<template>
  <table>
    <thead class="border-b-2 border-slate-900 border-solid">
      <tr class="font-bold">
        <td class="px-4 py-2">Product</td>
        <td class="px-4 py-2">Price</td>
        <td class="px-4 py-2">Number</td>
        <td class="px-4 py-2">Subtotal</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in groceries" :key="groceries.id">
        <td class="px-4 py-2">{{ product.name }}</td>
        <td class="px-4 py-2">{{ product.price }}</td>
        <td><input id="number" type="number" value="0" min="0" class="border border-slate-500 border-solid rounded-md pl-2"></td>
        <td class="px-4 py-2">0</td>
      </tr>
      <tr class="border-t border-slate-900 border-solid">
        <td class="px-4 py-2 font-bold" colspan="3">Total</td>
        <td class="px-4 py-2">0</td>
      </tr>
    </tbody>
  </table>
</template>
