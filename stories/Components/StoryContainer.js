export default {
	name: 'story-container',
	data() {
		return {
			style: {
				display: 'flex',
				flexWrap: 'no-wrap',
				padding: 20
			}
		}
	},
	template: `
		<section :style="style">
			<slot></slot>
		</section>
	`,
}