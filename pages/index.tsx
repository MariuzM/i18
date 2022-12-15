import type { GetServerSideProps, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';

export default function Home() {
  // const { t } = useTranslation();
  return (
    <>
      {/* <p>{t('Current Language')}</p> */}
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale || 'en')),
    },
  };
};
