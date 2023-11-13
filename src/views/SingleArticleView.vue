<template>
    <div v-if="article">
        <div class="flex  bg-gray-800 justify-center">
            <div class="flex flex-col w-9/12 bg-gray-300">
                <div class="flex justify-between px-40 text-[#5f6161] bg-[#030303]">
                    <div class="flex ">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="green"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                <line x1="12" y1="19" x2="12" y2="5"></line>
                                <polyline points="5 12 12 5 19 12"></polyline>
                            </svg>


                        </button>
                        <p>{{ article.votes }}</p>
                        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="red"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="5 12 12 19 19 12"></polyline>
                            </svg>
                        </button>
                    </div>
                    <p class="">{{ article.title }}</p>
                    <p>X Close</p>
                </div>
                <div class="flex bg-blue-400 px-28 py-8">
                    <div v-if="article" :article="article" class=" justify-center flex  w-[800px] lg:w-[740px] ">
                        <div class=" bg-white  rounded-md grid grid-cols-[48px,680px]">
                            <div class="col-span-1  rounded-l-md flex flex-col items-center justify-start p-2">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="green"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24"
                                        height="24">
                                        <line x1="12" y1="19" x2="12" y2="5"></line>
                                        <polyline points="5 12 12 5 19 12"></polyline>
                                    </svg>
                                </button>
                                {{ article.votes }}
                                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="red"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24"
                                        height="24">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <polyline points="5 12 12 19 19 12"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <div class="col-span-1 col-start-2 p-2 ">
                                <p class="text-sm text-gray-400">Posted by {{ article.author }} {{
                                    convertTimeAndDate(article.created_at) }}</p>
                                <p class="font-medium text-lg mb-2">{{ article.title }}</p>
                                <img class="w-2/3 m-auto" :src="article.article_img_url" />
                                <p class="mt-2">{{ article.body }}</p>
                                <p>{{ article.comment_count }} Comments</p>
                            </div>
                            <div class="flex flex-col">
                                <CommentAdder />
                                <Comments :articleId="article.article_id" />
                            </div>
                        </div>
                    </div>
                    <p class="bg-black text-white" v-else>Loading Article...</p>
                    <div class=" text-black  ml-3 w-[310px] lg:flex flex-col gap-4 hidden">
                        <div class="flex flex-col gap-4 bg-white p-4 border-[#cccccc] border-[1px] rounded-md">
                            <p>subreddit name and icon</p>
                            <p>subreddit description</p>
                            <hr />
                            <button class="bg-blue-300 text-white rounded-xl">Join</button>
                        </div>
                        <div class="bg-white p-4 border-[#cccccc] border-[1px] rounded-md">PLACEHOLDER subreddit rules</div>
                        <div class="bg-white p-4 border-[#cccccc] border-[1px] rounded-md">PLACEHOLDER subreddit moderators
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>article loading</div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { getArticleById } from '../utils/api';
import { convertTimeAndDate } from '../utils/helper_functions';
import CommentAdder from '../components/CommentAdder.vue';
import Comments from '../components/Comments.vue';

const props = defineProps(['articleId']); 
const article = ref(null);

onMounted(async () => {
  try {
    article.value = await getArticleById(props.articleId);
  } catch (error) {
    console.error('Error fetching article details:', error);
  }
});
</script>