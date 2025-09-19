<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showProducts = ref(false)
const isDesktop = ref(false)

const checkScreen = () => {
  isDesktop.value = window.innerWidth >= 1024
  if (isDesktop.value) showProducts.value = false
}

const toggleProducts = () => {
  if (!isDesktop.value) showProducts.value = !showProducts.value
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen)
})
</script>
<template>
    <header class="site-header" role="banner">
      <div class="container header-inner">
        <div class="logo" aria-hidden="true">
          <!-- inline SVG logo fallback -->
          <img style="mix-blend-mode: multiply;" src="https://i.ibb.co/60bp24Nb/builderchem.png" alt="BuilderChem logo"/>
        </div>

        <nav class="main-nav" aria-label="Main navigation">
          <NuxtLink to="/" >Home</NuxtLink>
          <NuxtLink to="/aboutus">About Us</NuxtLink>
          <NuxtLink to="/solutions">Our Services</NuxtLink>
          <div 
          class="dropdown"
          @mouseenter="isDesktop && (showProducts = true)" 
          @mouseleave="isDesktop && (showProducts = false)"
        >
          <a 
            href="javascript:void(0);" 
            @click="toggleProducts"
          >
            Our Products
          </a>

          <div v-if="showProducts" class="dropdown-menu">
            <NuxtLink :to="{ path: '/products', query: { item: 'Bitumen Impregnated Fibreboards' }}">Bitumen-impregnated Fibreboards</NuxtLink>
            <NuxtLink :to="{ path: '/products', query: { item: 'BuilderCrete WP600' }}">BuilderCrete WP600</NuxtLink>
            <NuxtLink :to="{ path: '/products', query: { item: 'BuilderSeal 2K' }}">BuilderSeal 2K</NuxtLink>
            <NuxtLink :to="{ path: '/products', query: { item: 'BuilderHard 500' }}">BuilderHard 500 Concrete Hardeners</NuxtLink>
            <NuxtLink :to="{ path: '/products', query: { item: 'BuilderBond' }}">BuilderBond</NuxtLink>
            <NuxtLink :to="{ path: '/products', query: { item: 'BuilderSeal Plugger 101' }}">BuilderSeal Plugger 101</NuxtLink>
          </div>
        </div>
          <NuxtLink to="/contactus">Contact Us</NuxtLink>
          <NuxtLink to="/blog">Blogs</NuxtLink>
          <a prevent="scrollToId('email')">Web Email</a>
        </nav>

        <div class="header-actions">
          <button class="btn primary" style="padding: 1em" aria-controls="live-chat">
            <span style="margin-left: 0.2em;min-width: 5vw;text-align: center;">Live Chat</span>
          </button>
        </div>
      </div>
    </header>
</template>
<style>
:root{
  --bg: #ffffff;
  --text: #111111;
  --muted: #666666;
  --accent: #111111; /* black accent */
  --accent-2: #E9211F; /* red accent */
  --white: #ffffff;
  --radius: 12px;
  --container: 1200px;
}
/* Header */
.site-header { position: sticky; top: 0; z-index: 90; background: rgba(255,255,255,0.92); backdrop-filter: blur(4px); border-bottom: 1px solid #eee; }
.header-inner { display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:0.5rem 0; }
.logo img { height:40px; }
.main-nav { display:flex; gap:1rem; align-items:center; }
.dropdown {
  position: relative;
}

/* Dropdown menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--white);
  border: 1px solid #eee;
  border-radius: var(--radius);
  min-width: 200px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  z-index: 99;
}

.dropdown-menu a {
  padding: 0.6rem 1.2rem;
  color: var(--text);
  font-weight: 500;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background: rgba(0,0,0,0.05);
  color: var(--accent-2);
}
.main-nav a { color:var(--text); text-decoration:none; font-weight:600; padding:0.4rem 0.6rem; border-radius:6px; }
.main-nav a:hover { color:var(--accent-2); background: rgba(0,0,0,0.03); }

.header-actions { display:flex; gap:0.6rem; align-items:center; }
.btn { display:inline-flex; align-items:center; gap:0.6rem;padding:0.6rem 0.9rem; cursor:pointer; font-weight:600; border:1px solid transparent; text-decoration:none;}
.btn.primary { background:var(--accent); color:#fff; border-color:var(--accent); }
.btn.ghost { background:transparent; color:var(--text); border:1px solid #ddd; }
.btn.outline { background:transparent; color:var(--text); border:2px solid #111; }
</style>