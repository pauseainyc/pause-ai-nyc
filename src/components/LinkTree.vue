<template>
	<div class="linktree">
		<a v-for="(link,i) in links" :key="`linktreeLink${i}`" class="linktree-link" :href="link.url" target="_blank" rel="noopener noreferrer">
			<svg>
				<use :href="`/icons/${link.svg}.svg`"></use>
			</svg>
			{{ link.text }}
		</a>
	</div>
</template>

<script setup>
const links = [
	{ text: 'RSVP to our next meeting!', url: 'https://luma.com/4k2jfibs', svg: 'calendar-days' },
	{ text: 'Sign our petition!', url: 'https://www.pauseai-us.org/petition/', svg: 'signature' },
	{ text: 'Register with PauseAI US!', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfatJka_oNOHB9t55OkhVKOYmqUAnqEqPdqBj9V6lrkTkZ2_g/viewform', svg: 'flag-usa' },
]
</script>

<style scoped lang="scss">
.linktree {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
.linktree-link {
	display: flex;
	gap: 8px;
	font-weight: bold;
	padding: 4px 8px;
	margin: 0 auto 0 0;
	align-items: center;
	svg {
		width: 24px;
		height: 24px;
	}
}
</style>