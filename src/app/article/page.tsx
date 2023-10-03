import dynamic from 'next/dynamic';

const Article = dynamic(
    () => import('@/lib/components/mainComponents/Article'),
);

const ArticlePage = () => {
    return <Article />;
};

export default ArticlePage;
