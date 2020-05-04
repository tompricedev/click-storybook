import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TestComp from './TestComp';

export default {
	title: 'Details Pages',
	component: TestComp,
}

export const Test1 = () => ({
	components: { TestComp },
	template: `<test-comp>Test 1</test-comp>`
});