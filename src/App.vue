<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="relative container mx-auto p-6 bg-pink-300">
      <!-- Flex container -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="pt-2">
          <img src="./assets/img/logo.svg" alt="">
        </div>
        <!-- Menue items -->
        <div class="hidden md:flex space-x-12">
          <a href="#" class="hover:text-brightRed">home</a>
          <a href="#" class="hover:text-brightRed">products</a>
          <a href="#" class="hover:text-brightRed">special offers</a>
          <a href="#" class="hover:text-brightRed">about</a>
        </div>
      </div>
    </nav>
    <Slider />
  </div>
</template>

<script>
import './assets/tailwind.css'
import Slider from './components/Slider'


export default {
  name: 'App',
  components: {
    Slider
  },
  
}
</script>

<style src="./assets/tailwind.css" />
