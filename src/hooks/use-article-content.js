const { useQuery } = require('react-query');

export function useArticleContent({ content, slug }) {
   const getContent = () =>
      fetch('/api/get-article', {
         body: JSON.stringify({ content }),
         method: 'POST',
      }).then(response => response.text());

   return useQuery(['article-content', { slug }], getContent);
}
