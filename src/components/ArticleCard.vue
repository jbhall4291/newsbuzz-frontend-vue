<template>
  <li>
    <RouterLink :to="'/articles/' + article.article_id"
      class="bg-white border-[#cccccc] hover:border-[#8a8a8b] border-[1px] rounded-md grid grid-cols-[40px,800px] lg:grid-cols-[40px,600px]">
      <div class="col-span-1 bg-[#f8f9fa] rounded-l-md flex flex-col items-center justify-start p-2">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>


        </button>
        {{ article.votes }}
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="5 12 12 19 19 12"></polyline>
          </svg>
        </button>
      </div>

      <div class="col-span-1 col-start-2 ">
        <h1 class="p-1.5"><b>{{ article.topic }}</b> · Posted by {{ article.author }} {{ convertTimeAndDate(article.created_at) }}</h1>
        <h2 class="p-1.5">{{ article.title }}</h2>
        <img class="m-auto" :src="article.article_img_url" />

        <p class="p-1.5">{{ article.comment_count }} Comments</p>


      </div>
    </RouterLink>
  </li>
</template>
  
  
<script>
import { convertTimeAndDate } from '../utils/helper_functions';

export default {
  props: {
    article: Object,
  },
  methods: {
    convertTimeAndDate,
  },
};
</script>
  