<template>
	<div class="linktree">
		<a v-for="(link,i) in links" :key="`linktreeLink${i}`" class="linktree-link" :href="link.url" target="_blank" rel="noopener noreferrer">
			{{ link.text }}
		</a>
	</div>
</template>

<script setup>
const links = [
	{ text: 'Sign our petition!', url: 'https://www.pauseai-us.org/petition/' },
	{ text: 'RSVP to our events!', url: 'https://luma.com/user/pauseainyc' },
	{ text: 'Join us!', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfatJka_oNOHB9t55OkhVKOYmqUAnqEqPdqBj9V6lrkTkZ2_g/viewform' },
]
</script>

<style scoped>
.linktree {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
.linktree-link {
	font-weight: bold;
	padding: 4px 8px;
	margin: 0 auto 0 0;
}
</style>