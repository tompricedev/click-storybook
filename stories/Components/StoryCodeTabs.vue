<template>
	<section>
		<ul class="tabs-nav">
			<li>HTML</li>
			<li>LESS</li>
			<li>JS</li>
		</ul>
		<div class="tabs-content">
			<div class="tabs-content--item">
				HTML
			</div>
			<div class="tabs-content--item">
				LESS
			</div>
			<div class="tabs-content--item">
				JS
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "story-code-tabs",
};
</script>

<style lang="less">
	.tabs-nav {
		list-style: none;
		display: flex;
		justify-content: flex-start;
		margin: 15px 0;
		padding: 0;

		li {
			margin: 0 15px 0 0;
			text-align: left;
		}
	}
</style>