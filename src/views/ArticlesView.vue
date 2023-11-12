<template>
  <div>
    <div v-if="articles">
      <div class="bg-gray-300 flex justify-center">
        <ol class="gap-1 w-full lg:w-1/2 flex flex-col justify-center items-center mt-1">
          <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
        </ol>
      </div>
    </div>

    <p v-else class="bg-black text-white">Loading...</p>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getArticles } from '../utils/api';
import ArticleCard from '../components/ArticleCard.vue';

export default {
  components: {
    ArticleCard,
  },
  setup() {
    const articles = ref([]);

    onMounted(async () => {
      try {
        articles.value = await getArticles();
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    });

    return {
      articles,
    };
  },
};
</script>
