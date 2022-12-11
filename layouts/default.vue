<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products/abc">abc</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Product</NuxtLink>
          </li>
        </ul>
        <!-- link thuong -->
        <!-- <a href="/about">link</a> -->
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <!-- Cái này làm thẻ lồng -->
      <slot />
    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Product</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script setup>
</script>

<style scoped>
.router-link-exact-active {
  color: rgb(22, 77, 54);
}
</style>