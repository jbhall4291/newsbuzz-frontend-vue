<template>
    <div class="grid grid-cols-[48px,680px] ">
        <p></p>
        <div class="p-2">
            <p>Comment as *current user in state*</p>
            <form @submit.prevent="handleSubmitComment">
                <textarea rows="5" placeholder="What are your thoughts?" class="border-black border-2 rounded-md p-2 w-full"
                    v-model="commentText"></textarea>
                <button class="" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>
   
<script setup>
import { ref } from 'vue';
import { postComment } from '../utils/api';
import { useAppStore } from '../stores/appStore'

const appStore  = useAppStore()

const commentText = ref(null);



const handleSubmitComment = () => {
    postComment(21, commentText.value, appStore.loggedInUser);
};
</script>