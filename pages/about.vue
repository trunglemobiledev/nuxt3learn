<template>
  <div>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
      provident fugit dolorum tenetur, corrupti vitae dolorem odit at sunt
      doloremque cumque debitis distinctio sed libero. Explicabo magnam placeat
      fugit!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
      provident fugit dolorum tenetur, corrupti vitae dolorem odit at sunt
      doloremque cumque debitis distinctio sed libero. Explicabo magnam placeat
      fugit!
    </p>
    <div>{{ data }}</div>
  </div>
</template>
  
<script setup>
const { data } = await useFetch("/api/ninja?name=mario", {
  method: "post",
  body: {
    age: 30,
  },
});
</script>

  <style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>