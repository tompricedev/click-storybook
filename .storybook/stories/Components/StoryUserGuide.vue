<template>
	<v-card my-5>
		<v-card-title>
			User Guide
		</v-card-title>
		<v-card-text :userguide="userguide">
			<p>{{ userguide.content }}</p>			
		</v-card-text>
		<slot></slot>
	</v-card>
</template>

<script>
export default {}
</script>