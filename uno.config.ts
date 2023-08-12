import { defineConfig, presetAttributify, presetWind } from "unocss";

export default defineConfig({
	presets: [presetAttributify(), presetWind()],
	theme: {
		colors: {
			"brand-dark": "#08070C",
			"brand-light": "#F9F9F6",
			"brand-fuchsia": "#C33CAA",
			"brand-red": "#A80202",
			"brand-orange": "#D54011",
			"brand-green": "#71756F",
			"brand-gray": "#E0D7BC",
		},
	},
});
