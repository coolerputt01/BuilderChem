<template>
    <NavBar />
  <section class="contact-section">
    <div class="container">
      <h1 class="page-title">We Look Forward to Working With You!</h1>

      <div class="contact-grid">
        <!-- Contact Form -->
        <div class="contact-form">
          <h2>Send Us a Message</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="form.name" placeholder="Enter your full name" required />
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" placeholder="Write your message..." required></textarea>
            </div>

            <button type="submit" class="btn primary full-btn">Send Message</button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <strong>Office Address:</strong><br />
              Rufus Lane Laniyan Estate,Ikorodu Road, Lagos, Nigeria
            </li>
            <li>
              <strong>Email:</strong><br />
              <a href="builderchem@gmail.com">builderchem@gmail.com</a>
            </li>
            <li>
              <strong>Telephone:</strong><br />
              <a href="tel:+2348000000000">+234 800 000 0000</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import { ref } from "vue"
import Footer from '~/components/Footer.vue';
import NavBar from '~/components/NavBar.vue';

const form = ref({
  name: "",
  email: "",
  message: ""
})

const handleSubmit = () => {
  alert(`Thank you, ${form.value.name}. Your message has been sent!`)
  form.value = { name: "", email: "", message: "" }
}
</script>

<style scoped>
.contact-section {
  padding: 4rem 1rem;
}

.page-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--accent);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.contact-form,
.contact-info {
  background: #fff;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  width: 100%;
  box-sizing: border-box;
}

.contact-form h2,
.contact-info h2 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: var(--text);
}

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--muted);
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: var(--radius);
  font-size: 1rem;
  box-sizing: border-box;
  transition: border 0.2s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent-2);
}

textarea {
  resize: vertical;
  min-height: 140px;
}

.full-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
}

/* Contact Info */
.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-info li {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: var(--text);
  line-height: 1.5;
}

.contact-info a {
  color: var(--accent-2);
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
