import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TestComp from './TestComp';

export default {
	title: 'Results Pages',
}

export const IntroText = () => ({
	template: `<p>This story will contain generic information about modules in this section. Access the individual modules, their previews & their code from within the nested stories below.</p>`
});