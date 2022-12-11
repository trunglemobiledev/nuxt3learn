<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
      </nav>
    </header>
    <!-- Cái này làm thẻ lồng -->
    <div class="container mx-auto p-4">
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
  color: rgb(224, 221, 30);
}
</style>