<template>
  <div class="header-banner">
    <img src="https://bdxio.fr/_ipx/s_139x50/images/logo_blue_header.webp" alt="BDX I/O" class="logo" />
  </div>

  <div class="container">

    <div v-if="loading && posts.length === 0" class="loading">
      Chargement des posts...
    </div>

    <div v-if="posts.length > 0" class="posts-container">
      <div v-for="post in posts" :key="post.uri" class="post">
        <div class="post-header">
          <div class="avatar">{{ getInitial(post.author) }}</div>
          <div class="post-author">
            <div class="author-name">
              {{ post.author.displayName || post.author.handle }}
            </div>
            <div class="author-handle">@{{ post.author.handle }}</div>
          </div>
          <div class="post-date">{{ formatDate(post.indexedAt) }}</div>
        </div>
        <div class="post-content">{{ post.record.text }}</div>
      </div>
    </div>

    <div v-if="!loading && posts.length === 0 && !error" class="no-posts">
      Aucun post trouvé pour #bdxio
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const posts = ref([])
const loading = ref(false)
const error = ref('')
let refreshInterval = null

const fetchPosts = async () => {
  loading.value = true
  error.value = ''

  try {
    const response = await $fetch('/api/bluesky/search', {
      params: {
        hashtag: 'bdxio',
        limit: 40
      }
    })

    posts.value = response.posts?.length ? response.posts : []
  } catch (err) {
    console.error('Erreur:', err)
    error.value = err.data?.message || 'Erreur lors de la récupération des posts'
  } finally {
    loading.value = false
  }
}

const getInitial = (author) => {
  return author.displayName
    ? author.displayName[0].toUpperCase()
    : author.handle[0].toUpperCase()
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  fetchPosts()
  refreshInterval = setInterval(fetchPosts, 10000)
})

onUnmounted(() => {
  clearInterval(refreshInterval)
})
</script>

<style scoped>
/* === Header Banner === */
.header-banner {
  background-color: #242457;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.logo {
  height: 50px;
  width: auto;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  font-family: "Merriweather", Arial, serif;
  color: #1a1a1a;
}

/* === States === */
.loading, .error, .no-posts {
  text-align: center;
  padding: 20px;
  font-size: 14px;
}

.error {
  background: rgba(239, 68, 68, 0.95);
  color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(239, 68, 68, 0.3);
}

.no-posts {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  color: #666;
}

/* === Full-width Responsive Grid === */
.posts-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 280px));
  gap: 16px;
  width: 100%;
  justify-content: space-evenly;
}

/* === Post Card (Fixed Width) === */
.post {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 18px;
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  word-wrap: break-word;
  font-size: 14px;
  line-height: 1.5;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 280px;
}

.post:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* === Post Header === */
.post-header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 15px;
  flex-shrink: 0;
}

.post-author {
  flex: 1 1 auto;
  min-width: 0;
}

.author-name {
  font-weight: 600;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.author-handle {
  color: #666;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post-date {
  color: #999;
  font-size: 12px;
  white-space: nowrap;
}

/* === Post Content === */
.post-content {
  color: #2a2a2a;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 6px;
}

/* === Mobile Responsive === */
@media (max-width: 600px) {
  .posts-container {
    grid-template-columns: 1fr;
    justify-content: stretch;
  }

  .post {
    width: 100%;
  }
}
</style>