<script setup>
  import {ref, computed} from "vue"
  
  const props = defineProps(["groceries"])
  const groceries = ref(props.groceries)

  const grandTotal = computed(() => {
    return groceries.value.reduce((acc, item) => (acc = acc + item.amount * item.price), 0);
  });
</script>

<template>
    <table>
        <thead class="border-b-2 border-slate-900 border-solid">
        <tr class="font-bold">
            <td class="px-4 py-2">Product</td>
            <td class="px-4 py-2">Price</td>
            <td class="px-4 py-2">Amount</td>
            <td class="px-4 py-2">Subtotal</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in groceries" :key="groceries.id">
            <td class="px-4 py-2">{{ product.name }}</td>
            <td class="px-4 py-2">&euro; {{ product.price.toFixed(2) }}</td>
            <td><input v-model="product.amount" type="number" value="0" min="0" class="border border-slate-500 border-solid rounded-md pl-2"></td>
            <td class="px-4 py-2">&euro; {{ (product.price * product.amount).toFixed(2) }}</td>
        </tr>
        <tr class="border-t border-slate-900 border-solid">
            <td class="px-4 py-2 font-bold" colspan="3">Total</td>
            <td class="px-4 py-2">&euro; {{ grandTotal.toFixed(2) }}</td>
        </tr>
        </tbody>
    </table>
</template>