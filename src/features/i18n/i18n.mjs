import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ru,en } from '.';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
	.init({
	
   interpolation: {
			escapeValue: false,
		},
		lng: ['en', 'ru'],
	resources: {
		en: {
			translation:en,
		},
		ru: {
			translation:ru,
		}
	}
  });

export default i18n;
