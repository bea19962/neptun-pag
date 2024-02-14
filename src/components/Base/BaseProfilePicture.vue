<template>
 <img :src="src" :alt="altText" class="profile-picture" />
</template>

<script setup>

defineProps({
 src: String,
 altText: String
})
</script>

<style scoped>
.profile-picture {
 width: 200px;
 height: 200px;
 border-radius: 50%;
 object-fit: cover;
}
</style>
