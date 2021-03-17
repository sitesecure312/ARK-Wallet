module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {
			screens: {
				'max': '1360px',
				 'xs': '420px'
			},
			colors: {
				blue: {
					light: '#85D7FF',
					DEFAULT: '#1FB6FF',
					dark: '#009EEB',
				},
				green: {
					darkest: '#04626E',
					dark: '#029383',
					normal:'#65B7AE',
					DEFAULT: '#B1D3CF',
					light: '#EAEDEC',
					lightest: '#F0F3F4',
				},
				gray: {
					darkest: '#0C0D0D',
					dark: '#1F2121',
					normal:'#2F3333',
					DEFAULT: '#5A5D60',
					light: '#B6BEBE',
					lightest: '#C7C9CD',
				},
				'error-color':'#C93A3A',
				'icon-dark':"FBC457",
				'link-simple':'#029383',
				'link-hover':'046E62',
				'link-press':'65B7AE'
			},
			spacing: {
				'23/100': '23%',
				'46/100': '46%',
				'31/100': '31%',
				'15/100': '14%',
				'30/100': '35%',
				'55/100': '51%',
				'50': '50px',
				'1200' : '1200px'
			},
			fontFamily: {
				'inter-bold': ['Inter-Bold'],
				'inter-regular': ['Inter-Regular'],
				'inter-extra': ['Inter-ExtraBold'],
				'inter-semi': ['Inter-SemiBold'],
			},
			fontSize: {
				sm: ['14px', '24px'],
				base: ['16px', '28px'],
				lg: ['18px', '32px'],
				xl: ['24px', '36px'],
			}
		},
		
	},
	variants: {},
	plugins: [],
};
