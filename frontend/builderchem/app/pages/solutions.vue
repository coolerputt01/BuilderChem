<script>
import Footer from '~/components/Footer.vue';
import NavBar from '~/components/NavBar.vue';
</script>
<template>
    <NavBar />
<section class="just-one-call">
    <!-- Hero Banner -->
    <div class="hero">
      <div class="overlay"></div>
      <div class="hero-text">
        <h1>Just One Call Away</h1>
        <p>Get better results With Us</p>
      </div>
    </div>

    <!-- Solutions Section -->
    <div class="solutions container">
      <!-- First Solution -->
      <div class="solution-block">
        <div class="text-content">
          <h3>Our Solutions</h3>
          <p>
            <strong>BuilderChem</strong><br />
            We have technical expertise and wide experience in **chemical-based waterproofing
            solutions** for industries, households, swimming pools, dams, and more.  
            We handle all kinds of waterproofing – internal & external, injection grouting, crystalline systems,
            and advanced chemical membrane applications.
          </p>
          <p>
            Our expertise extends to epoxy floor coatings, sealant applications, and industrial chemical flooring
            systems. We also provide specialized chemical solutions for concrete repairs, surface hardening, and
            protective coatings.
          </p>
          <p>
            In addition, we supply construction-grade chemicals including white cement, wall putty, marine plywood
            protectives, and anti-termite (organic chemical) treatments for wood & concrete durability.
          </p>
        </div>
        <div class="image-content">
          <img
            src="data:image/jpeg;base64,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"
            alt="Chemical Solutions"
          />
        </div>
      </div>

      <!-- Second Solution -->
      <div class="solution-block reverse">
        <div class="image-content">
          <img
            src="https://brookconcrete.com/wp-content/uploads/2020/05/Bituminous_paints.jpg"
            alt="Construction Chemicals"
          />
        </div>
        <div class="text-content">
          <h3>Our Solutions</h3>
          <p>
            At <strong>BuilderChem</strong>, we supply advanced **chemical solutions for construction**:
            tile adhesives, natural stone systems, glass tile bonding, epoxy resin systems for industrial floors,
            supermarkets, car showrooms, and hotels.  
            We also provide polyurea coatings for containers, bund walls, silos, biogas plants, and sewerage works.
          </p>
          <p>
            Our range includes decorative flooring chemicals, corrosion-resistant coatings, food-safe coatings,
            vapour-permeable layers, and conductive/structured chemical coatings for specialized industries.
          </p>
          <p>
            With our expertise, we also deliver high-performance chemicals for bridges, car parks, balconies,
            potable water containers, wastewater plants, and cement-based products like ready-mix concrete
            additives, impregnators, sealers, and bonding resins.  
            <strong>Our competency in construction waterproofing chemicals is your problem solved.</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<style>
/* Hero Section */
.hero {
  position: relative;
  height: 70vh;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqsvSwvLJBibzx1MtTGPVEr9CW0Xt4IQ4bPFJVi5MqhOgjSxen9mvZmuMFL90OwdbJSs&usqp=CAU") center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
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
  z-index: 1;
}
.hero-text h1 {
  font-size: clamp(2.2rem, 5vw, 3rem);
  margin-bottom: 0.5rem;
}
.hero-text p {
  font-size: 1.2rem;
  font-weight: 500;
}

/* Solutions Section */
.solutions {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
}
.solution-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 4rem;
}
.solution-block.reverse {
  grid-template-columns: 1fr 1fr;
}
.solution-block.reverse .text-content {
  order: 2;
}
.solution-block.reverse .image-content {
  order: 1;
}

.text-content h3 {
  font-size: clamp(1.6rem, 3vw, 2rem);
  margin-bottom: 1rem;
  font-weight: 700;
  color: #222;
}
.text-content p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
  font-size: 1.05rem;
  color: #444;
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
  .solution-block,
  .solution-block.reverse {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .solution-block.reverse .text-content,
  .solution-block.reverse .image-content {
    order: unset;
  }
}
</style>