<template>
    <div v-if="comments">
        <div v-for="comment in comments">
            <div class="grid grid-cols-[48px,680px] ">
                <img src="@/assets/images/generic_avatar.png" class="w-12 h-12" alt="avatar for {{ comment.author }}" />

                <div class="p-2">
                    <p>{{ comment.author }}
                        ·
                        {{ convertTimeAndDate(comment.created_at) }}
                    </p>
                    <p>{{ comment.body }}</p>
                    <p>{{ comment.votes }}</p>
                </div>
            </div>
        </div>

    </div>
</template>
      
      
<script setup>
import { ref, onMounted } from 'vue';
import { getArticleComments } from '../utils/api';
import { convertTimeAndDate } from '../utils/helper_functions';

const comments = ref(null);

const props = defineProps(['articleId']);

onMounted(async () => {
    try {
        comments.value = await getArticleComments(props.articleId);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
});

</script>