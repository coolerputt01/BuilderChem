<script>
import Footer from '~/components/Footer.vue';
import NavBar from '~/components/NavBar.vue';
</script>
<template>
    <NavBar />
    <main>
        <section class="choice-section">
    <!-- Background Hero -->
    <div class="hero">
      <div class="overlay"></div>
      <div class="hero-text">
        <h2>We Want to be Your First Choice</h2>
        <p>Get better results With Us</p>
      </div>
    </div>

    <!-- Content -->
    <div class="content container">
      <div class="text-block">
        <h3>BuilderChem</h3>
        <p>
          BuilderChem has been in the chemical business for well over ten years. 
          After such a long time, we know what’s important and where we’re headed.
        </p>
        <p>
          Our aim is clearly defined: We want to be your first choice because you value our service: 
          the certainty regarding price and quality, the just-in-time precision, and our deep product know-how.
        </p>
        <p>
          We want to be your holistic partner for procurement, logistics, and chemical product development. 
          We want to remain your first choice because you value our way of cooperation: the integrity, 
          the reliability, the appreciation, and the partnership.
        </p>
        <p>
          Our mission is to provide all-round solutions to our customers, suppliers, and employees 
          through a sphere in which everyone feels valued. We are focused on guaranteeing structural 
          integrity by providing preventive and renovative solutions to structural degradation 
          through the use of stable, internationally certified, environmentally friendly chemical 
          materials and technological innovations to protect your new and old buildings/structures 
          from deterioration and performance loss.
        </p>
      </div>

      <div class="logo-block">
        <img src="https://i.ibb.co/m53LQ0YQ/Builderchem.png" alt="BuilderChem Logo" />
      </div>
    </div>
  </section>
  <Footer />
    </main>
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

.choice-section {
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Hero background */
.hero {
  position: relative;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqsvSwvLJBibzx1MtTGPVEr9CW0Xt4IQ4bPFJVi5MqhOgjSxen9mvZmuMFL90OwdbJSs&usqp=CAU") center/cover no-repeat;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

.hero-text {
  position: relative;
  color: #fff;
  z-index: 2;
  max-width: 800px;
  padding: 0 1rem;
}

.hero-text h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.hero-text p {
  font-size: 1.2rem;
}

/* Content section */
.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
  align-items: center;
}

.text-block h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #222;
}

.text-block p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 1.2rem;
}

.logo-block img {
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  display: block;
}

/* Responsive */
@media (max-width: 900px) {
  .hero {
    height: 50vh;
  }
  .content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .logo-block {
    margin-top: 2rem;
  }
}
</style>