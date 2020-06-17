import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModMakeAndModel from "./Modules/ModMakeAndModel";
import ModBrands from "./Modules/ModBrands";
import ModBodyType from "./Modules/ModBodyType";

export default {
  title: "Homepage Modules/Search",
};


/***** 01. Make & Model *****/

export const MakeAndModel = () => ({
  name: "MakeAndModel",
  components: {
    StoryBlock,
    ModMakeAndModel,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModMakeAndModel />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<div data-advanced-search="main" class="o-search o-search--home">

	<em class="search-block__title">Quick Search:</em>

	<form method="get" action="/search_page.php">

		<input type="hidden" id="search-instance" value="{{ instance }}">
		<input type='hidden' value='0' name='budgetswitch'>
		{% if sort %}<input type="hidden" name="sort" value="{{ sort }}">{% endif %}

		


		<fieldset class="fieldset fieldset--search">
			<div class="fieldset__wrapper">
				{% for key, field in fields if field.position == "main"%}
					<div class="form-group form-group--{{ key }}">
						<select name="{{ key }}" id="{{ key }}" data-search-field="main" data-search-filters="{{ field.filters|keys|join(",") }}">
							<option value="{% if values[key] != "" %}{{ values[key] }}{% endif %}">{{ field.display }}</option>
						</select>
					</div>
				{% endfor %}
			</div>
		</fieldset>



		<fieldset class="fieldset fieldset--price">
			<div class="fieldset__wrapper">

				{% if "budgetmin" in fields|keys %}
				<div class="budget-toggle">
					<div class="budget-toggle__wrapper">

						{% if settings['display_budget_toggle'] == '1' %}

						<div class="price">Price</div>
						<div class="budgetswitch">
							<input type="checkbox" class="a-toggle" name="budgetswitch" id="budgetswitch" data-search-field value="1"{% if budget_toggled %} checked {% endif %}>
							<label for="budgetswitch" data-checked="Monthly Price" data-unchecked="Total Price"></label>
						</div>
						<div class="finance">Finance</div>
					</div>

					{% else %}
						<input type="hidden" name="budgetswitch" data-search-field value="{% if settings.default_budget_type %}1{% endif %}">
					{% endif %}

				</div>
				{% endif %}

				{% for key, field in fields if field.position == "section1" %}
					<div class="form-group form-group--{{ key }}">
						<select name="{{ key }}" id="{{ key }}" data-search-field="aside" data-search-filters="{{ field.filters|keys|join(",") }}">
							<option value="{% if values[key] != "" %}{{ values[key] }}{% endif %}">{{ field.display }}</option>
						</select>
					</div>
				{% endfor %}

			</div>
		</fieldset>


		<fieldset class="fieldset fieldset--button">
			<div class="fieldset__wrapper">

				{% if "budgetmin" in fields|keys %}
				<!-- Button Group -->
				<div class="button-group button-group--search">
					{% if settings.resetButton == "0" %}
					<button type="button" class="a-btn reset-button" data-search-reset>Reset</button>
					{% endif %}
					<button type="submit" class="a-btn search-button" onclick="ga('send', 'event', 'Submit', 'Click', 'HP_Quick_Search_Menu_Search');">Search</button>
				</div>
				<!-- // Button Group -->
				{% endif %}

				{% if "budgetmin" not in fields|keys %}
				<!-- Button Group -->
				<div class="button-group button-group--search">
					{% if settings.resetButton == "0" %}
					<button type="button" class="a-btn reset-button" data-search-reset>Reset</button>
					{% endif %}
					<button type="submit" class="a-btn search-button" onclick="ga('send', 'event', 'Submit', 'Click', 'HP_Quick_Search_Menu_Search');">Search</button>
				</div>
				<!-- // Button Group -->
				{% endif %}

			</div>
		</fieldset>



	</form>
</div>
		
<script src="/assets/js/themev2/search.min.js?v={{ cache_buster }}" defer></script>`
				},
				{
					tab: "LESS",
					code: `.search-horizontal-double {
	//background: @secondary-colour;
	padding: 30px 0;

	@media @tablet {
		padding: 20px 0;
	}

	.flex {
		margin-right: -50px;
		margin-bottom: -50px;
		width: auto;
	}
}

.search-type {
	margin-right: 50px;
	margin-bottom: 50px;
	@media @mobile {
		flex: 1 1 100%;
	}

	&__heading {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 24px;
		font-weight: @heading-weight;
		font-family: @heading-font;
		color: @heading-colour;
		text-transform: none;

		// &:after {
		//   content: '';
		//   height: 2px;
		//   width: 100%;
		//   background: fade(black,15%);
		// }

		i {
			margin-right: 3px;
			font-size: 70%;
			color: @accent-colour;
			// hide
			display: none;
		}

		span {
			flex: 0 0 auto;
			margin-right: 20px;
		}
	}

	&--full-width {
		flex: 1 1 5000px;
		margin-right: 50px;
	}

	&--half-width {
		flex: 1 1 500px;
		margin-right: 50px;
	}

	&--small-width {
		flex: 1 1 250px;
	}

	&--wide-width {
		flex: 2 2 750px;
	}
}

// Blocks Modifiers

.search-type--horizontal-search {
	form {
		display: flex;
		flex-wrap: wrap;
		margin-right: -20px;
		margin-bottom: -20px;

		select,
		input[type="submit"] {
			flex: 1 1 195px;
			min-width: auto;
			margin-right: 20px !important;
			margin-bottom: 20px !important;
			height: 38px;
			line-height: 38px;
		}

		input[type="submit"] {
			flex: 1 1 150px;
		}
	}
}

.search-type--type-search {
	ul {
		list-style: none;
		display: flex !important;
		flex-wrap: wrap;
		margin: 5px;

		li {
			width: calc(~'100% / 6');
			padding: 5px;
			box-sizing: border-box;

			@media @tablet {
				width: calc(~'100% / 3');
			}
			@media @mobile {
				width: calc(~'100% / 2');
			}

			a {
				display: block;
				text-align: center;
				color: @primary-colour;
				font-size: 14px;
				font-weight: 600;

				img {
					margin-bottom: 10px;
					transform: translateY(0px);
					transition: @transition;
				}

				&:hover {
					color: @accent-colour;

					img {
						transform: translateY(-5px);
					}
				}
			}
		}
	}
}

.search-type--brand-search {

	.brands {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		a {
			flex: 0 0 48px;
			height: 48px;
			display: flex;
			.aligncenter;

			img {
				max-height: 32px;
				max-width: 32px;
				transform: translateY(0px);
				transition: @transition;
			}

			&:hover {

				img {
					transform: translateY(-5px);
				}
			}
		}
	}
}`
				}
			],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
      module: 3,
    };
  },
  // created() {
  //   axios
  //     .get(
  //       "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/clickcomponents-uwksb/service/getModules/incoming_webhook/webhook0"
  //     )
  //     .then((response) => {        
        
	// 			this.items = response.data[0].modules[this.module].items
  //       console.log(this.items, this.module);
  //     });
  // },
});

/***** 02. Brands *****/

export const Brands = () => ({
  name: "Brands",
  components: {
    StoryBlock,
    ModBrands,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModBrands />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "LESS",
					code: `.row-block.brands {
		padding: 20px 0;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		background: white;
		
		.brand-logos {
			text-align: center;
			a{
				display: inline-block;
				img {
					width: 30px;
					height: 30px;
					margin: 0 10px;
					transition: all 0.2s ease-in-out;
				}
				&:hover{
					img{
						transform: translateY(-5px);
					}
				}
			}
		}
	}`
				}
			],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
      module: 4,
    };
  },
});

/***** 03. Body type *****/

export const BodyType = () => ({
  name: "BodyType",
  components: {
    StoryBlock,
    ModBodyType,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModBodyType />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "LESS",
					code: `.vehicle-type {
	.row {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		li.twocol {
			flex: 0 1 calc(100% / 6 - 20px);
			margin: 10px;
			text-align: center;
			@media @tablet {
				flex: 0 1 calc(100% / 3 - 20px);
			}
			@media @mobile {
				flex: 0 1 calc(100% / 2 - 30px);
			} 
			a:hover,
			a:focus {
				color: @accent-colour;
			}
			img {
				max-width: 150px;
			}
		}
	}
}`
				}
			],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
      module: 5,
    };
  },
});