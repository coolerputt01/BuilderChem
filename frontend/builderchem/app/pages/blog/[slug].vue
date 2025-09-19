<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import { collection, query, where, getDocs, limit } from "firebase/firestore"
import { db } from "../../utils/firebase.js"

const route = useRoute()
const post = ref(null)

onMounted(async () => {
  const q = query(
    collection(db, "blogs"),
    where("slug", "==", route.params.slug),
    limit(1)
  )
  const snapshot = await getDocs(q)
  if (!snapshot.empty) {
    post.value = snapshot.docs[0].data()
  }
})
</script>

<template>
  <section class="post-section">
    <div class="container">
      <div v-if="!post">Loading...</div>
      <div v-else class="post">
        <h1>{{ post.title }}</h1>
        <img :src="post.image" alt="" class="post-img" />
        <p class="post-date">
          {{ new Date(post.createdAt.seconds * 1000).toLocaleDateString() }}
        </p>
        <div class="post-body">
          {{ post.content }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.post-section {
  padding: 4rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.post h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--accent);
}

.post-img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: var(--radius);
  margin-bottom: 1rem;
}

.post-date {
  font-size: 0.85rem;
  color: var(--muted);
  margin-bottom: 1.5rem;
}

.post-body {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text);
  white-space: pre-line;
}
</style>
