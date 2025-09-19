<script setup>
import { ref , onMounted, onUnmounted } from 'vue'
import { useHead } from '#imports'
import NavBar from "../components/NavBar.vue"
import Footer from "../components/Footer.vue"

/* SEO meta + JSON-LD structured data */
useHead({
  title: 'BuilderChem — Industrial & Construction Chemicals',
  meta: [
    { name: 'description', content: 'BuilderChem supplies top-quality industrial and construction chemicals — epoxy resins, waterproofing agents, adhesives and custom formulations. Trusted by builders and industries.' },
    { name: 'keywords', content: 'BuilderChem, construction chemicals, epoxy, waterproofing, adhesives, industrial chemicals' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
    { property: 'og:title', content: 'BuilderChem — Industrial & Construction Chemicals' },
    { property: 'og:description', content: 'High-quality chemicals for builders & industries. Explore epoxy resins, waterproofing agents and adhesives.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://i.ibb.co/60bp24Nb/builderchem.png' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://your-domain.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BuilderChem",
        "url": "https://your-domain.com",
        "logo": "https://your-domain.com/images/logo-black.svg",
        "sameAs": [],
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+1234567890",
          "contactType": "customer service",
          "areaServed": "NG"
        }]
      })
    }
  ]
})

const slides = ref([
  {
    id: 1,
    title: "BuilderChem",
    text: "Nigeria’s No.1 supplier of industrial & construction chemicals.",
    img: "https://img.freepik.com/free-photo/environmental-pollution-industry-exterior-daylight_23-2149057687.jpg",
    link: null,
  },
  {
    id: 2,
    title: "Quality Products",
    text: "Paint | Impregnated Boards | Adhesives — ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-CbbpboedntMoX17o6_1czsMUbBx3_eMX1xYLU4w-Q8nvZFdK0RMcYYYDjLiNcVfRoA&usqp=CAU",
    link: "/products",
  },
  {
    id: 3,
    title: "Bitumen Impregnated Fibreboards",
    text: "See more products",
    img: "https://source.unsplash.com/1600x900/?building,materials",
    link: "/products",
  },
  {
    id: 4,
    title: "Experienced Chemists",
    text: "Best in the industry",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTya47fjxpTWIoEk9o45x5e3OXFJPOxVc1pg&s",
    link: null,
  },
  {
    id: 5,
    title: "Work in Progress",
    text: "Click here to chat with us — we are online",
    img: "data:image/jpeg;base64,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",
    link: "#contact",
  },
  {
    id: 6,
    title: "We plan | We execute | We deliver",
    text: "Telephone contacts",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWralQCiSXka2KDLVHdcNKH_d_tEL08L27DCkJ48lu2aM-ihxOYxbP9ei7l-cWe3i9cU&usqp=CAU",
    link: "tel:+2347065729824",
  },
])
const current = ref(0)
let timer

function nextSlide() {
  current.value = (current.value + 1) % slides.value.length
}
function prevSlide() {
  current.value = (current.value - 1 + slides.value.length) % slides.value.length
}

const products = ref([
  {
    id: 1,
    title: 'Bitumen-impregnated board',
    img: 'https://i.ibb.co/3Y4Sbdyt/IMG-20250909-WA0201-1.jpg',
    desc: 'Bitumen Impregnated Fibreboards is used as a general purpose expansion joint filler in concrete slab and wall construction, and as a protection boards for waterproofing membranes.'
  },
  {
    id: 2,
    title: 'BuilderCrete WP600',
    img: 'https://i.ibb.co/39v9zRQ6/IMG-20250909-WA0211-1.jpg',
    desc: 'BuilderCrete WP600 is a single component polymer for cement based waterproofing. BuilderCrete WP600 is formulated to be mixed with cement on site or simply brush applied over concrete or masonry surfaces to provide an effective waterproof membrane.'
  },
  {
    id: 3,
    title: 'BuilderSeal 2K',
    img: 'https://i.ibb.co/Fb4yKzGW/IMG-20250909-WA0215-1.jpg',
    desc: "Cement, waterproofing is a key solution to combat water damage, ensuring your home's integrity and durability. The right cement, combined with waterproofing agents added during construction, ids crucial. Compromising on these early-stage measures can result in expensive fixes late, as waterproofing is essential for safeguarding your home's structures."
  }
])

onMounted(() => {
  timer = setInterval(nextSlide, 6000) // auto play
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="page-root">
  <NavBar />
    <!-- Hero -->
    <main>
      <section class="hero-slider">
    <div
      v-for="(s, index) in slides"
      :key="s.id"
      class="slide"
      :class="{ active: index === current }"
      :style="{ backgroundImage: `url(${s.img})` }"
    >
      <div class="overlay"></div>
      <div class="slide-text container">
        <h1>{{ s.title }}</h1>
        <p>
          {{ s.text }}
          <a v-if="s.link" :href="s.link" class="see-more">See more</a>
        </p>
      </div>
    </div>

    <!-- controls -->
    <button class="nav prev" @click="prevSlide">‹</button>
    <button class="nav next" @click="nextSlide">›</button>

    <!-- counter -->
    <div class="counter">{{ current + 1 }} / {{ slides.length }}</div>
  </section>


  <section class="intro-section">
  <div class="container">
    <h2>
      BuilderChem, construction waterproofing chemicals, and Building materials supplier in Nigeria.
    </h2>
    <p>
      We market and install system construction waterproofing materials for the national and international markets. 
      With the slogan <strong>“Providing solutions“</strong>, our product range has wide coverage with over 4,000 qualitative 
      high-quality construction waterproofing products worldwide for the most diverse of applications.
    </p>
    <a href="/products" class="cta-btn">To order our products click here</a>
  </div>
</section>
<section class="waterproofing-page">
    <div class="container">
      <h1>Waterproofing Materials in Nigeria</h1>
      <p>
        Are you looking for a product solution for structural waterproofing or for structural restoration? 
        No problem, with us it is proven.
      </p>
    </div>

    <div class="content">
      <div class="text-content">
        <p>
          We supply mineral-based waterproofing materials as well as those based on bitumen.
          Other products, which we offer as we strive towards optimum product solutions for
          structural waterproofing and restoration, are waterproof sheet membranes, waterproof tapes,
          waterproof materials for day joints, epoxy resins,
        </p>

        <p>
          PU injection resins, liquid waterproof membranes, mortars and restoration plasters,
          rapid cement, smoothing compounds, repair mortars, anchoring grouts, concrete replacement mortars,
          products for protecting facades, expansion joint sealants, floor coatings, primers, plaster primers,
          concrete additives, mortar additives as well as colored plasters.
        </p>
      </div>

      <div class="image-content">
        <img
          src="https://brookconcrete.com/wp-content/uploads/2020/05/waterproof-tapes-market-400x225-1-150x150.jpg"
          alt="Waterproofing Materials"
        />
      </div>
    </div>
  </section>
  <section class="building-materials">
    <div class="container">
      <!-- Image Left -->
      <div class="image-content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuxq5D0vsP_iKwQiq6O-p_RgtptAIcLGhPg&s"
          alt="Building Materials"
        />
      </div>

      <!-- Text Right -->
      <div class="text-content">
        <h2>Building Materials Supplier</h2>
        <p>
          Are you looking for the optimum product solution for the installation of tiles, natural stone,
          or screeds? We also offer a comprehensive product range here, with tile adhesives,
          natural stone adhesives, grouts, and screeds as well as special screeds.
        </p>
        <p>
          In addition, you can choose compatible waterproof systems, bonding slurries, emulsions,
          additives, special adhesives, poured resins, bonding resins, injection resins, primers,
          smoothing compounds, leveling compounds, waterproof tapes, elastic joint sealants,
          impact sound deadening systems and de-coupling systems.
        </p>
      </div>
    </div>
  </section>
  <section class="services">
    <div class="container">
      <!-- Text Left -->
      <div class="text-content">
        <h3>Services</h3>
        <h2>Our Products and Solutions</h2>
        <p>
          We have technical expertise and wide experience in waterproofing jobs in industries, households,
          swimming pool, dams, etc. All kinds of waterproofing — both internal & external, injection grouting,
          crystalline, membrane application, etc are undertaken.
        </p>
        <p>
          We also undertake floor hardener application, epoxy floor installations and sealant applications.
          All kinds of industrial flooring and concrete repairs works are undertaken.
        </p>
        <p>
          We also supply white cement, wall putty, marine plywood, anti termite (organic) treatment for wood & concrete.
        </p>
      </div>

      <!-- Image Right -->
      <div class="image-content">
        <img
          src="https://brookconcrete.com/wp-content/uploads/2020/05/Concrete_Sealer_on_Concrete.jpg"
          alt="Our Services"
        />
      </div>
    </div>
  </section>

<section class="advice-page">
    <div class="container">
      <div class="text-content">
        <h2>NEED EXPERT ADVICE? TALK TO US NOW</h2>
        <p>
          Phone: <a href="tel:+2347065729824" class="phone">+234 706 572 9824</a>
        </p>
        <a href="tel:+2347065729824" class="cta-btn">Call Us</a>
      </div>

      <div class="image-content">
        <img
          src="data:image/jpeg;base64,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"
          alt="Expert Advice"
        />
      </div>
    </div>
  </section>

      <!-- Products (3 cards) -->
      <section id="products" class="products container" aria-labelledby="products-title">
        <h2 id="products-title" style="font-size: 2em;">Our Products</h2>
        <div class="product-cards">
          <div v-for="p in products" :key="p.id" class="product-card" role="article">
            <div class="media">
              <img :src="p.img" :alt="p.title + ' product image'" loading="lazy" />
            </div>
            <div class="product-body">
              <h3>{{ p.title }}</h3>
              <p class="muted">{{ p.desc }}</p>
            </div>
          </div>
        </div>

        <div class="center" style="margin-top: 2em;">
          <a class="btn primary large" href="/products">View All Products</a>
        </div>
      </section>
      <section class="brook-page">
    <div class="container">
      <!-- Text Left -->
      <div class="text-content">
        <h1>BROOK CONCRETE TECHNOLOGIES</h1>

        <p>
          Basement waterproofing, retrospective horizontal barrier membranes, renovation of salt-laden substrates, garage renovation,
          crack repair for walls and floors, waterproofing day joints with injection tubes, water bar or water stop expanding strips or
          elastomer expanding strips, PVC water stop.
        </p>

        <p>
          Our solution also includes waterproofing sewerage works or potable water containers, balcony renovation, facade impregnation,
          waterproofing joints and details with waterproof tapes, tile installation on heated and unheated cement-based screeds,
          calcium sulphate based screeds, asphalt screeds, magnesite and xylolite screeds, concrete, chipboard and floorboards,
          render, plaster, plasterboard.
        </p>

        <p>
          We are expert in MR plasterboard, existing tiled finishes, metal and stainless steel, in bathrooms, on balconies and terraces,
          in showers and swimming pools, fountains and swimming pool tanks, saunas, seawater pools, kitchens and cold stores, from
          large format tiles, agglomerate stone, glass tiles and mosaics, cotto, natural stone, jointless epoxy resin systems for use in
          workshops, supermarkets, department stores, accessible roadways in logistics halls, car showrooms, hotel foyers.
        </p>

        <p>
          In the manufacturing industry, polyurea coatings for containers, bund walls, accessible silos, Biogas plants, sewerage works,
          for pipework construction, the energy industry, as corrosion protection and stray current isolation, decorative flooring systems,
          water pollution control systems, water vapour permeable coatings, conductive coatings, structured coatings, car park deck coatings,
          elastic coatings.
        </p>

        <p>
          Coatings which will not taint food, emissions-free coatings, concrete sealers, concrete impregnators, road and trackway systems,
          concrete repair to bridges, multi-storey car parks, balconies, drinking water containers, sewers and sewerage plants, products for
          the cement using industry, ready-mix concrete, concrete units, concrete slabs – our competency in construction waterproofing is
          your problem solved.
        </p>
      </div>

      <!-- Image Right -->
      <div class="image-content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxGg5TaUCuzTsMzkkCWz_IRz6VPN0F7_-ig&s"
          alt="Brook Concrete Technologies"
        />
      </div>
    </div>
  </section>
  <Footer />
</main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
/* --- Variables --- */

* {
  transition: all 0.2s ease !important;
  font-family: "Urbanist", sans-serif !important;
}
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

/* Basic page layout */
.page-root { background: var(--bg); color: var(--text); font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }

/* Container */
.container { max-width: var(--container); margin: 0 auto; padding: 2rem; }



.hero-slider {
  position: relative;
  width: 100%;
  height: 85vh; /* leaves small space for next section */
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.8s ease;
}
.slide.active {
  opacity: 1;
  z-index: 1;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.slide-text {
  position: absolute;
  bottom: 18%;
  left: 8%;
  color: #fff;
  max-width: 650px;
}
.slide-text h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 0.5rem;
}
.slide-text p {
  font-size: 1.1rem;
}
.slide-text .see-more {
  margin-left: 0.5rem;
  color: #00c6ff;
  text-decoration: underline;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  font-size: 2rem;
  padding: 0.4rem 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
}
.nav.prev {
  left: 1rem;
}
.nav.next {
  right: 1rem;
}

.counter {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 8px;
  font-size: 0.9rem;
}
.advice-page {
  padding: 5rem 1rem;
  background: #fff;
}

.advice-page .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.text-content h2 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #222;
  margin-bottom: 1rem;
}

.text-content p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #444;
}

.phone {
  color: #0077ff;
  font-weight: bold;
  text-decoration: none;
}

.cta-btn {
  display: inline-block;
  padding: 0.9rem 2rem;
  background: #0077ff;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease;
}
.cta-btn:hover {
  background: #005fcc;
}

.image-content img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* responsive */
@media (max-width: 768px) {
  .advice-page .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .image-content {
    order: -1; /* show image on top for mobile */
  }
}

/* Services */
.services { background:linear-gradient(180deg, rgba(0,0,0,0.02), transparent 40%); padding:3rem 0; }
.services-grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:1.25rem; }
.service-card { background:#fff; padding:1.25rem; border-radius:12px; box-shadow:0 8px 24px rgba(0,0,0,0.04); text-align:center; }
.icon-wrap { width:56px; height:56px; margin:0 auto 0.8rem; display:flex; align-items:center; justify-content:center; background:#111; color:#fff; border-radius:12px; }

/* Products */
.product-cards { display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; margin-top:1rem; }
.product-card { background:#fff; border-radius:12px; overflow:hidden; display:flex; flex-direction:column;box-shadow:0 12px 30px rgba(0,0,0,0.05); transition: transform .22s ease, box-shadow .22s ease; }
.product-card:hover { transform: translateY(-6px); box-shadow:0 18px 46px rgba(0,0,0,0.08); }
.product-card .media img { width:100%; height:220px; object-fit:cover; display:block; }
.product-body { padding:1rem 1.25rem 1.25rem 1.25rem; display:flex; flex-direction:column; gap:0.8rem; }
.product-body h3 { margin:0; }
.product-body .muted { color:var(--muted); font-size:0.95rem; }

.services {
  padding: 5rem 1rem;
  background: #f9f9f9; /* light contrast background */
}

.services .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
}

.text-content h3 {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #0077ff;
  margin-bottom: 0.5rem;
}

.text-content h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #222;
}

.text-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 1.2rem;
}

.image-content img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 900px) {
  .services .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .image-content {
    margin-top: 2rem;
  }
}


.intro-section {
  padding: 5rem 1rem;
  text-align: center;
  background: #f8f9fa; /* light contrast from hero */
}

.intro-section .container {
  max-width: 900px;
  margin: 0 auto;
}

.intro-section h2 {
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #222;
}

.intro-section p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #444;
}

.cta-btn {
  display: inline-block;
  padding: 0.9rem 2rem;
  background: var(--accent);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease;
}
.cta-btn:hover {
  background: rgb(126, 126, 126);
}

.gradient-bg {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6); /* blue → purple */
    padding: 2rem;
    border-radius: 1rem;
    color: white;
    text-align: center;
  }

  .gradient-bg h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .gradient-bg .muted {
    color: #e5e7eb;
    margin-bottom: 1rem;
  }

/* WhatsApp float */
.whatsapp-float { position:fixed; right:18px; bottom:18px; width:56px; height:56px; border-radius:50%; background:#25D366; color:#fff; display:flex; align-items:center; justify-content:center; box-shadow:0 8px 26px rgba(0,0,0,0.18); text-decoration:none; font-size:1.2rem; }

.waterproofing-page {
  padding: 4rem 1rem;
  background: #f9f9f9;
}

.waterproofing-page .container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
}

.waterproofing-page h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #222;
  margin-bottom: 1rem;
}

.waterproofing-page p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 1.2rem;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content {
  font-size: 1rem;
  color: #333;
}

.image-content img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 900px) {
  .content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .image-content {
    order: -1; /* show image first on small screens */
  }
}
.brook-page {
  padding: 4rem 1rem;
  background: #fdfdfd;
}

.brook-page .container {
  display: grid;
  grid-template-columns: 2fr 1fr; /* More space for text */
  gap: 2.5rem;
  max-width: 1300px;
  margin: 0 auto;
  align-items: start;
}

.text-content h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5rem;
}

.text-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  color: #444;
  text-align: justify;
}

.image-content img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 1024px) {
  .brook-page .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .image-content {
    order: -1; /* Image above text on mobile */
  }
  .text-content p {
    text-align: left;
  }
}
/* Utility */
.center { text-align:center; }
.building-materials {
  padding: 4rem 1rem;
  background: #fff;
}

.building-materials .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.image-content img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.text-content {
  text-align: left;
}

.text-content h2 {
  font-size: clamp(1.8rem, 3vw, 2.3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #222;
}

.text-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 1.2rem;
}

/* Responsive */
@media (max-width: 900px) {
  .building-materials .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .text-content {
    text-align: center;
  }
  .image-content {
    order: -1; /* Show image first on mobile */
  }
}

/* Responsive */
@media (max-width: 1100px) {
  .hero-inner { grid-template-columns: 1fr 420px; }
  .about-grid { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-inner { flex-direction:column; align-items:flex-start; }
}
@media (max-width: 720px) {
  .hero-inner { grid-template-columns: 1fr; }
  .header-inner { flex-direction:row; gap:0.5rem; }
  .main-nav { display:none; } /* for compact header */
  .product-cards { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
  .chat-panel { width:92vw; bottom:18px; right:4%; left:4%; }
}
/* Responsive refinements */

/* --- Medium screens (tablet) --- */
@media (max-width: 1100px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-copy {
    order: 2;
  }
  .hero-media {
    order: 1;
  }
  .hero-features {
    justify-content: center;
    flex-wrap: wrap;
  }

  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .about-image img {
    margin: 0 auto;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
}

/* --- Small screens (mobile) --- */
@media (max-width: 720px) {
  /* Header */
  .header-inner {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .main-nav {
    display: none; /* hide full nav */
  }
  .header-actions {
    margin-left: auto;
  }

  /* Hero */
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
  .hero-ctas {
    justify-content: center;
  }
  .hero-features {
    flex-direction: column;
    gap: 0.5rem;
  }

  /* About */
  .about-grid {
    grid-template-columns: 1fr;
  }

  /* Services */
  .services-grid {
    grid-template-columns: 1fr;
  }

  /* Products */
  .product-cards {
    grid-template-columns: 1fr;
  }

  /* Contact form */
  .form-row {
    flex-direction: column;
  }

  /* CTA */
  .cta-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Footer */
  .footer-grid {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  .footer-col {
    min-width: auto;
  }

  /* Chat panel */
  .chat-panel {
    width: 92vw;
    left: 4%;
    right: 4%;
  }
}

</style>
