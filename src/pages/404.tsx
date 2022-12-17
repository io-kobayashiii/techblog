import ApiRequests from '@/utils/ApiClient';

export default function Custom404() {
  return <h1 className="text-24">Not found.</h1>;
}

export const getStaticProps = async () => {
  const categories = await ApiRequests.categories();
  return {
    props: {
      layout: '404',
      categories: categories.contents,
    },
  };
};
