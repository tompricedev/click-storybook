<template>
	<v-card my-5>
		<v-card-title>
			User Guide
		</v-card-title>
		<v-card-text :userguide="userguide">
			<p v-if="userguide.type == 'text'">{{ userguide.content }}</p>
			<marquee v-else>It's not text man</marquee>
		</v-card-text>
		<slot></slot>
	</v-card>
</template>

<script>
export default {
	inject: ['userguide'],
}
</script>