<template>
  <div id="app">
    <nav>
      <ul>
        <li class="bg-pink-300">home</li>
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

