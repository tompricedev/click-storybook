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
export default {
	data() {
		return {
			userguide: {
				content: `User guide will go here. We need to create user guides for each module & add them to the individual component's data.`
			}
		}
	}
}
</script>