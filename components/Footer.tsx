import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <p>{t('Current Language')}</p>
    </footer>
  );
};
