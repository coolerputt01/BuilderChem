<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import Footer from '~/components/Footer.vue'
import NavBar from '~/components/NavBar.vue'

const route = useRoute()

const products = {
  "Bitumen Impregnated Fibreboards": {
    title: "Bitumen Impregnated Fibreboards",
    description: "Bitumen Impregnated Fibreboards is used as a general purpose expansion joint filler in concrete slab and wall construction, and as a protection board for waterproofing membranes",
    image:"https://i.ibb.co/3Y4Sbdyt/IMG-20250909-WA0201-1.jpg"
  },
  "BuilderCrete WP600": {
    title: "BuilderCrete WP600",
    description: "BuilderCrete WP600 is a single component polymer for cement based waterproofing. BUILDERCRETE WP600 is formulated to be mixed with cement on site or simply brush applied over concrete or masonry surfaces to provide an effective waterproof membrane.",
    image:"https://i.ibb.co/39v9zRQ6/IMG-20250909-WA0211-1.jpg"
  },
  "BuilderSeal 2K": {
    title: "BuilderSeal 2K",
    description: "Cement waterproofing is a key solution to combat water damage, ensuring your home's integrity and durability. The right cement, combined with waterproofing agents added during construction, is crucial. Compromising on these early-stage measures can result in expensive fixes later, as waterproofing is essential for safeguarding your home’s structure.",
    image:"https://i.ibb.co/Fb4yKzGW/IMG-20250909-WA0215-1.jpg"
  },
  "BuilderHard 500": {
    title: "BuilderHard 500",
    description: "BuilderHard 500 Concrete hardeners and densifiers are used to prevent floors from wearing out prematurely. These products protect, preserve, and strengthen concrete flooring through a uniform curing and sealing process.",
    image:"https://i.ibb.co/d44knsDD/IMG-20250909-WA0217-1.jpg"
  },
  "BuilderBond": {
    title: "BuilderBond",
    description: "BuilderBond is a bonding agent that helps the different concrete layers to behave like a single unit, thus increasing the strength and performance of the structure. The bonding agent is applied over the existing surface of the concrete so that the new layer of fresh concrete successfully adheres to the old layer.",
    image:"https://i.ibb.co/Q3LbRyGG/IMG-20250910-WA0100-1.jpg"
  },
  "BuilderSeal Plugger 101": {
    title: "BuilderSeal Plugger 101",
    description: "BUILDERSEAL PLUGGER 101 IS A FAST SETTING REPAIR MORTARS FOR RAPID REPAIRS TO STOP WATER FLOWING THROUGH FLOORS, CONCRETE FLOORS, WALLS AND OTHER BUILDING STRUCTURES.",
    image:"https://i.ibb.co/g2rSGHR/IMG-20250910-WA0101-1.jpg"
  }
}

const selectedProduct = ref(products[route.query.item] || null)

// 👇 Watch for query changes
watch(
  () => route.query.item,
  (newItem) => {
    selectedProduct.value = products[newItem] || null
  }
)
</script>


<template>
  <NavBar />
  <div class="container" v-if="selectedProduct">
    <div class="hero">
      <div class="overlay"></div>
      <div class="hero-text">
        <h2>{{ selectedProduct.title }}</h2>
        <p>Get better results With Us</p>
      </div>
    </div>

    <div class="content container">
      <div class="text-block">
        <h3>{{ selectedProduct.title }} In Nigeria</h3>
        <p>{{ selectedProduct.description }}</p>
      </div>

      <!-- 👇 Right-hand image block -->
      <div class="logo-block">
        <img :src="selectedProduct.image" :alt="selectedProduct.title" />
      </div>
    </div>
  </div>

  <div v-else>
    <h2>Our Products</h2>
    <p>Please select a product from the menu.</p>
  </div>
  <Footer />
</template>

<style>
/* Existing styles remain */

.logo-block {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-block img {
  width: 100%;
  max-width: 380px; /* bigger but not overwhelming */
  border-radius: var(--radius);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  object-fit: cover;
}
</style>
