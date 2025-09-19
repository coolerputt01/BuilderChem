<template>
    <section class="whatsapp-section">
    <div class="container">
      <h2>💬 Chat Us Live on WhatsApp</h2>
      <p>Need quick support or product inquiries? Our team is always online to assist you.</p>
      <a
        href="https://wa.me/2347065729824?text=Hello%20BuilderChem,%20I%20need%20assistance."
        target="_blank"
        class="whatsapp-btn"
      >
        Chat Now
      </a>
    </div>
  </section>

    <!-- Footer -->
    <footer class="site-footer" role="contentinfo">
      <div class="container footer-grid">
        <div class="footer-col">
          <h4 style="font-size: 2.3em;">BuilderChem</h4>
          <p class="muted">Quality chemicals & trusted service.</p>
          <p> <strong>Address:</strong> Rufus Lanre Laniyan Estate Ikorodu Road Lagos Nigeria.</p>
          <p><strong>Email:</strong> builderchem@gmail.com<br><strong>Phone:</strong> +234 706 572 9824</p>
        </div>

        <div class="footer-col">
      <h4>Quick Links</h4>
      <ul class="footer-links">
        <li><a href="/services">Services</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
    </div>


        <div class="footer-col">
          <h4>Follow</h4>
          <div class="socials">
            <a href="https://web.facebook.com/profile.php?id=100066927077867&locale=tl_PH#" target="_blank" aria-label="Facebook">
              <img src="/facebook-svgrepo-com.svg" alt="Facebook Link" width="36" height="36">
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <small>© 2025 BuilderChem. All rights reserved </small>
      </div>
    </footer>
</template>

<style>
.whatsapp-section {
  padding: 4rem 1rem;
  text-align: center;
  background: #e9f8f0; /* soft green background */
  border-top: 3px solid #25d366; /* WhatsApp green */
}

.whatsapp-section .container {
  max-width: 800px;
  margin: 0 auto;
}

.whatsapp-section h2 {
  font-size: clamp(1.8rem, 3vw, 2.3rem);
  margin-bottom: 1rem;
  color: #075e54;
  font-weight: 700;
}

.whatsapp-section p {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2rem;
}

.whatsapp-btn {
  display: inline-block;
  padding: 0.9rem 2rem;
  background: #25d366;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease;
}
.whatsapp-btn:hover {
  background: #1ebe5c;
  transform: scale(1.05);
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .cta-inner {
    flex-direction: column;
    text-align: center;
  }

  .cta-inner h2 {
    font-size: 1.5rem;
  }

  .cta-inner p {
    font-size: 0.95rem;
  }

  .cta-inner .btn {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .cta {
    padding: 1.5rem;
  }

  .cta-inner h2 {
    font-size: 1.3rem;
  }

  .cta-inner p {
    font-size: 0.9rem;
  }
}



/* Contact form */
.contact-form { max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:1rem; }
.form-row { display:flex; gap:1rem; }
.contact-form input, .contact-form textarea { padding:0.8rem; border-radius:8px; border:1px solid #ddd; width:100%; }

/* Footer */
.site-footer { background:#111; color:#fff; padding:2.5rem 0; margin-top:2rem; }
.footer-grid {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 6rem;
    flex-wrap: wrap; /* responsive stacking */
    margin-bottom: 2rem;
  }
.footer-col {
  flex: 2;
  min-width: 300px;
}
.footer-col h4 { margin-bottom:0.8rem; }
.footer-col ul { list-style:none; padding:0; margin:0; }
.footer-col a { color: #ddd; text-decoration:none; }
.footer-bottom { text-align:center; margin-top:1rem; color:#bbb; }
.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links li {
    margin: 0.5rem 0;
  }

  .footer-links a {
    color: #f3f4f6;
    text-decoration: none;
    transition: color 0.3s;
  }

  .footer-links a:hover {
    color: #E9211F; /* hover blue */
  }
</style>