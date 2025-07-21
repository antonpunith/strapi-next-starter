import { Heading, PageSections, SectionsContainer } from '@/components';
import { NavList } from '@/components/ui/NavList';
import { getGraphqlData } from '@/lib/graphql';
import { fetchGraphql } from '@/lib/strapi/fetchGraphql';
import { GET_BLOG_ARTICLES } from '@/lib/strapi/queries/blog';
import { GET_GLOBAL_SEO } from '@/lib/strapi/queries/global';


export async function generateMetadata() {
  const [pageData, global] = await Promise.all([
    fetchGraphql(GET_BLOG_ARTICLES),
    getGraphqlData(GET_GLOBAL_SEO),
  ]);
  const pageSeo = pageData?.blog?.seo;
  const globalSeo = global?.global?.defaultSeo;
  return {
    title: pageSeo?.metaTitle || globalSeo?.metaTitle || 'Blog',
    description: pageSeo.metaDescription || globalSeo?.metaDescription || 'Blog',
  };
}

export default async function BlogPage() {
  const data = await fetchGraphql(GET_BLOG_ARTICLES);
  const blogData = data?.blog;
  const articles = data?.articles || [];
  return (
    <>
      <Heading>{blogData?.title || 'Blog'}</Heading>
      <PageSections sections={blogData?.pageSections} />
      {articles && articles.length > 0 && (
        <SectionsContainer>
          <NavList items={articles} />
        </SectionsContainer>
      )}

    </>
  );
}
