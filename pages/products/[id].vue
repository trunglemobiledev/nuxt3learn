<template>
  <div>
    <p class="text-2xl indigo">{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>
      {{ product.description }}
    </p>
    <p>
      {{ product.id }}
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// load chi tiet san pham
const { data: product } = useFetch(uri, { key: id });

// Cái này để lấy layout khác default
definePageMeta({
  layout: "products",
});
</script>

<style scoped>
</style>