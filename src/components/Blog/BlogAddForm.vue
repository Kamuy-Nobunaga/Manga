<template>
    <div class="blog-form">
        <h2 @click="toggleAdding">Add post</h2>
        <form @submit.prevent="handleSubmit" class="blog-form-content" v-if="isAdding">
            <label for="title">Manga title
                <input 
                name="title"
                id="title"
                type="text"
                placeholder="title..."
                v-model="newPost.mangaTitle"
                >
            </label>
            <label for="c-title">Comment title
                <input 
                name="c-title"
                id="c-title"
                type="text"
                placeholder="comment title..."
                v-model="newPost.commentTitile"
                >
            </label>
            
            <label>Content
                <textarea
                name="content"
                cols="70"
                rows="5"
                placeholder="ehh..."
                v-model="newPost.content"
                ></textarea>
            </label>
            
            <label for="tags">Tags
                <input 
                name="tags"
                id="tags"
                type="text"
                placeholder="add tag..."
                v-model="newPost.tags"
                >
            </label>
            

            <button>Add post</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useMangaStore } from '../../stores/MangaStore';


export default {
    setup() {
        const mangaStore = useMangaStore()
        const newPost = ref({
            mangaTitle: '',
            commentTitle: '',
            content: '', 
            tags: [], 
        })
        const isAdding = ref(false)
        const toggleAdding = () => {
            console.log(isAdding.value);
            isAdding.value = !isAdding.value
        }
        const handleSubmit = () => {
            if (newPost.value.mangaTitle) {
                mangaStore.addPost(newPost.value)
            }
            newPost.value = ({
                mangaTitle: '',
                commentTitle: '',
                content: '', 
                tags: [], 
            })
            mangaStore.getPosts()
            isAdding.value = false
        }
        
        return { newPost, handleSubmit, isAdding, toggleAdding }
    }
}
</script>

<style>

</style>