<script setup>
import { ref, onMounted } from "vue"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../../utils/firebase.js" // your firebase.js setup
import Footer from '~/components/Footer.vue';
import NavBar from '~/components/NavBar.vue';

const posts = ref([])
const loading = ref(true)

onMounted(async () => {
  const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"))
  const snapshot = await getDocs(q)
  posts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  loading.value = false
})
</script>

<template>
  <section class="blog-section">
    <NavBar />
    <div class="container">
      <h1 class="page-title">Our Blog</h1>

      <div v-if="loading" class="loading">Loading...</div>

      <div v-else>
        <div v-if="posts.length === 0" class="no-posts">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No posts"
            class="no-posts-img"
          />
          <h2>No Posts Available</h2>
          <p>We’re working on some amazing content. Please check back soon!</p>
        </div>

        <div v-else class="blog-grid">
          <NuxtLink
            v-for="post in posts"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="blog-card"
          >
            <img :src="post.image" alt="" class="blog-img" />
            <div class="blog-content">
              <h2>{{ post.title }}</h2>
              <p>{{ post.content.slice(0, 120) }}...</p>
              <span class="blog-date">
                {{ new Date(post.createdAt.seconds * 1000).toLocaleDateString() }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.blog-section {
  padding: 4rem 1rem;
}

.page-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
}

.loading {
  text-align: center;
  font-size: 1.1rem;
  color: var(--muted);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.blog-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s;
  text-decoration: none;
  color: var(--text);
}

.blog-card:hover {
  transform: translateY(-4px);
}

.blog-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.blog-content {
  padding: 1rem;
}

.blog-content h2 {
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
}

.blog-content p {
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 0.6rem;
}

.blog-date {
  font-size: 0.8rem;
  color: var(--accent-2);
  font-weight: 600;
}

/* === No Posts Styling === */
.no-posts {
  text-align: center;
  padding: 4rem 2rem;
  background: #fafafa;
  border-radius: var(--radius);
  box-shadow: inset 0 0 12px rgba(0,0,0,0.05);
}

.no-posts-img {
  width: 120px;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.no-posts h2 {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: var(--accent);
}

.no-posts p {
  color: var(--muted);
  font-size: 1rem;
}
</style>
