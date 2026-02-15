<template>
    <div class="tree">
        <a v-for="link in links" :key="link.text" :href="link.url" target="_blank" rel="noopener noreferrer" class="btn">
            {{ link.text }}
        </a>
    </div>
</template>

<script setup>
const links = [
  { text: 'Sign Our Petition!', url: 'https://www.pauseai-us.org/petition/' },
  { text: 'Events', url: 'https://luma.com/user/pauseainyc' },
  { text: 'Instagram', url: 'https://www.instagram.com/pauseainyc' },
  { text: 'X (Twitter)', url: 'https://x.com/PauseAINYC' },
  { text: 'Facebook Group', url: 'https://www.facebook.com/groups/pauseainyc/' },
  { text: 'Join Us!', url: 'https://pauseai.nyc/qr0' },
]
</script>

<style scoped>
.tree {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
    margin: 20px auto;
}
.btn {
    padding: 12px;
}

</style>