<template>
    <div class="bg-[#2e2f30] flex justify-center">
        <div v-if="article" :article="article" class=" w-2/3  justify-center  ">
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
            <div class="bg-gray-300 justify-center flex p-4">
                <div class="w-2/3 bg-white border-gray-700 border-[1px] rounded-md grid grid-cols-[60px,1fr]">



                    <div class="col-span-1 bg-gray-200 rounded-l-md flex flex-col items-center justify-start p-2">
                        
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="green"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                <line x1="12" y1="19" x2="12" y2="5"></line>
                                <polyline points="5 12 12 5 19 12"></polyline>
                            </svg>


                        </button>
                        {{ article.votes }}
                        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="red"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="5 12 12 19 19 12"></polyline>
                            </svg>
                        </button>
                    </div>

                    <div class="col-span-1 col-start-2 p-2 "> 
                        <h1><b>{{ article.topic }}</b> · Posted by {{ article.author }} {{
                            convertTimeAndDate(article.created_at) }}</h1>
                        <h2>{{ article.title }}</h2>
                        <img class="w-2/3" :src="article.article_img_url" />
                        <p>{{ article.body }}</p>
                        <p>{{ article.comment_count }} Comments</p>
                        <p>bring in comment adder component here</p>
                        <p>render out comments here</P>
                    </div>
                </div>


            </div>



        </div>
        <p v-else>Loading...</p>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { getArticleById } from '../utils/api';
import { convertTimeAndDate } from '../utils/helper_functions';



export default {

    props: {
        articleId: {
            type: String,
            required: true,
        },

    },
    methods: {
        convertTimeAndDate,
    },
    setup(props) {
        const article = ref(null);

        onMounted(async () => {
            try {
                article.value = await getArticleById(props.articleId);
            } catch (error) {
                console.error('Error fetching article details:', error);
            }
        });

        return {
            article,
        };
    },
};
</script>
  