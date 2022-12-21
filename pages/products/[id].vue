<template>
  <div>
    <Head>
      <Title> Nuxt Dojo | {{ product.title }} </Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = `https://fakestoreapi.com/products/${id}`;

// load chi tiet san pham
const { data: product } = useFetch(uri, { key: id });

// Trả lỗi khi khong tim thấy sản phẩm
// if (!product.value) {
//   throw createError({
//     statusCode: 404,
//     statusMessage: 'Product not found',
//     fatal: true
//   })
// }

// Cái này để lấy layout khác default
definePageMeta({
  layout: "products",
});
</script>

<style scoped>
</style>