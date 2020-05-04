import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TestComp from './TestComp';

export default {
	title: 'Homepage Modules',
}

export const IntroText = () => ({
	template: `<p>This story will contain generic information about the homepage. Access the individual modules from within the nested stories below.</p>`
});