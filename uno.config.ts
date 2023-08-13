import {
  defineConfig,
  presetAttributify,
  presetWind,
  presetWebFonts
} from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetWind(), presetWebFonts({
		provider: 'fontshare',
		fonts: {
			sans: 'Clash Display'
		}
	})],
  theme: {
    colors: {
      'mars-dark': '#08070C',
      'mars-light': '#F9F9F6',
      'mars-fuchsia': '#C33CAA',
      'mars-red': '#A80202',
      'mars-orange': '#D54011',
      'mars-green': '#71756F',
      'mars-gray': '#E0D7BC'
    }
  },
})
