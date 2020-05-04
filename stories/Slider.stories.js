import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import StoryContainer from './Components/StoryContainer';
import StoryPreviewBlock from './Components/StoryPreviewBlock';
import StoryCodeBlock from './Components/StoryCodeBlock';
import StoryCodeTabs from './Components/StoryCodeTabs';

import ModSearchBlock from './Modules/ModSearchBlock';



export default {
	title: 'Homepage Modules/Slider',
	component: StoryContainer,
}

export const SearchBlock = () => ({
	name: 'SearchBlock',
	components: { StoryContainer, StoryPreviewBlock, StoryCodeBlock, ModSearchBlock, StoryCodeTabs },
	template: `
		<story-container>
			<story-preview-block>
				<h3>Preview:</h3>
				<ModSearchBlock />
			</story-preview-block>
			<story-code-block>
			<h3>Code:</h3>
				<StoryCodeTabs />
			</story-code-block>
		</story-container>
	`,
});

export const SubtleText = () => ({
	name: 'Subtle Text',
	components: { StoryContainer, StoryPreviewBlock, StoryCodeBlock },
	template: `
		<story-container>
			<story-preview-block>
				<search-block></search-block>
			</story-preview-block>
			<story-code-block>
				<p>Hello</p>
			</story-code-block>
		</story-container>
	`,
});

export const PopUp = () => ({
	name: 'Pop Up',
	components: { StoryContainer, StoryPreviewBlock, StoryCodeBlock },
	template: `
		<story-container>
			<story-preview-block>
				<p>Hello</p>
			</story-preview-block>
			<story-code-block>
				<p>Hello</p>
			</story-code-block>
		</story-container>
	`,
});