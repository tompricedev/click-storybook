export default {
	name: 'story-preview-block',
	data() {
		return {
			style: {
				width: 'calc(100% / 2 - 40px)',
				margin: '0 20px',
			}
		}
	},
	template: `
		<div :style="style">
			<slot></slot>
		</div>
	`,
}