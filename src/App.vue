<template>
  <div id="app">
    <nav class="bg-pink-300">
      <ul class="flex justify-around">
        <li class="text-xl">home</li>
        <li>products</li>
        <li>special offers</li>
        <li>about</li>

      </ul>
    </nav>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style src="./assets/tailwind.css" />
