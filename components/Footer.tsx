import i18next from 'i18next';
import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <h1>Current Language: {t('Current Language')}</h1>

      <h1>Button Change: {t('Button Change')}</h1>
      <button onClick={() => i18next.changeLanguage('en')}>en</button>
      <button onClick={() => i18next.changeLanguage('de')}>de</button>
    </footer>
  );
};
