import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import AdminForm from "./Components/AdminForm";

export default {
  title: "Admin",
};

/***** 01. UXUI Search Block *****/

export const Form = () => ({
  name: "Form",
  components: {
    AdminForm
  },
  template: `
		<AdminForm />
	`,
});