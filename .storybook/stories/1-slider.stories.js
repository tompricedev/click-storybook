import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import StoryBlock from "./Components/StoryBlock";
import ModSearchBlock from "./Modules/ModSearchBlock";

export default {
  title: "Homepage Modules/Hero Unit",
};

export const UXSearchBlock = () => ({
  name: "UXSearchBlock",
  components: {
    StoryBlock,	
    ModSearchBlock,
  },
	template: `
		<StoryBlock :items="items">
			<ModSearchBlock />
		</StoryBlock>
	`,
	data() {
    return {
			items: [
				{ 
					tab: "HTML",
					code: `<!-- Homepage Slider -->
<div class="row-block hero-unit lazy-background">

	<div class="hero-unit-block">
		<div class="hero-unit-block__title">Welcome to {v2_NAME}</div>
		<div class="hero-unit-block__text">Family-run business established in 2007</div>

		<div class="search-block">
			{LOAD_SEARCH_HOME}
		</div>
	</div>

</div>
<!-- // Homepage Slider -->` 
				},
				{
					tab: "LESS",
					code: `.row-block.hero-unit {
	position: relative;
	.flex-display(@display: flex);
	.align-items(@align: center);
	.justify-content(@justify: center);
	padding: 0;

	&.visible {
		background: url('@{dealer-img}/theme/hero-unit__bg{CACHE_BUSTER}.jpg') center center no-repeat!important;
		background-size: cover !important;

		@media @mobile {
			background: url('@{dealer-img}/theme/hero-unit__bg--mobile{CACHE_BUSTER}.jpg') center center no-repeat!important;
			background-size: cover !important;
		}
	}

	@media @mobile {
	}

	.container {
		margin: 0 auto;
		overflow: visible;
		position: relative;
	}
}


.hero-unit-block {
	margin: 120px 20px;
	padding: 40px;
	width: calc(~'100% - 80px');
	max-width: 900px;
	background: fade(@primary-colour,90%);
	box-sizing: border-box;
	z-index: 2;

	@media @tablet {
		margin: 80px 20px;
		padding: 30px;
		width: calc(~'100% - 60px');
	}

	@media @mobile {
		padding: 20px;
		margin: 20px;
		width: calc(~'100% - 40px');
	}

	&__title {
		display: block;
		margin: 0 0 10px 0;
		color: white;
		font-family: @heading-font;
		font-size: 32px;
		line-height: 1.2;
		font-weight: 700;
		text-align: center;

		@media @tablet {
			font-size: 24px;
		}
		@media @mobile {
			font-size: 22px;
			margin-bottom: 30px;
		}
	}

	&__text {
		margin: 0 0 30px 0;
		color: @accent-colour;
		font-size: 20px;
		line-height: 1.2;
		text-align: center;

		@media @mobile {
			display: none;
		}
	}
}


.search-block {

	&__title {
		display: block;
		margin-bottom: 12px;
		color: white;
		font-size: 18px;

		@media @mobile {
			display: none;
		}
	}

}


.o-search.o-search--home {

	.search-block__title {
		color: white;
	}

	form {
		.flex-display();

		@media @mobile {
			.flex-direction(@direction: column);
		}
	}

	fieldset {
		width: auto;
		border: none;
		padding: 0;
		margin: 0;
	}

	.fieldset {
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: auto);
		margin-right: 20px;

		@media @mobile {
			margin-right: 0;
		}
	}

	.fieldset__wrapper {
		.flex-display();
		padding: 0;
		margin-right: -20px;
		margin-bottom: -10px;
		border: none;
	}

	.form-group {
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: calc(~'100% - 20px'));
		width: auto;
		margin-right: 20px;
		margin-bottom: 10px;
	}

	.button-group {
		width: 100%;

		@media @mobile {
			margin-right: 20px;
			margin-bottom: 10px;
		}

		a, button, input[type=submit] {
			width: 100%;

			&:hover {
				background: white;
				color: @primary-colour !important;
			}
		}
	}

	// search fieldset

	.fieldset--search {
		.flex-basis(@width: 480px);

		@media @mobile {
			.flex-basis(@width: auto);
		}

		.fieldset__wrapper {
			@media @mobile {
				.flex-direction(@direction: column);
			}
		}

		.form-group {
			.flex-basis(@width: calc(~'100% / 2 - 20px'));
			@media @mobile {
				.flex-basis(@width: calc(~'100% - 20px'));
			}
		}
	}

	// price fieldset

	.fieldset--price {
		.flex-basis(@width: 190px);
		position: relative;

		@media @mobile {
			.flex-basis(@width: auto);
		} 

		.fieldset__wrapper {
			@media @mobile {
				.flex-direction(@direction: column);
				margin-top: 15px;
			}
		}

		.form-group {
			&--budgetmin {
				display: none;
			}
		}
	}

	// button fieldset

	.fieldset--button {
		.flex-basis(@width: 120px);
		
		@media @mobile {
			.flex-basis(@width: auto);
			
		}

		.fieldset__wrapper {
			@media @mobile {
				margin-top: 10px;
			}
		}
	}

	.budget-toggle {
		position: absolute;
		bottom: 100%;
		left: 50%;
		margin-bottom: 10px;
		transform: translateX(-50%);

		@media @mobile {
			position: relative;
		}

		.finance, .price {
			color: white;
		}
	}

	.a-toggle+label {
		background: @accent-colour;

		&:before {
			background-color: @primary-colour;
		}
	}
}`
				},
				{ 
					tab: "JS", 
					code: "" 
				},
			]     
    };
	},
	provide: function() {
		return {
			items: this.items
		}
	}
});
