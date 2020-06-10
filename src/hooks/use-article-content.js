const { useQuery } = require('react-query');

export function useArticleContent(slug) {
   const getContent = (key, { slug }) =>
      fetch('/api/get-article', {
         body: JSON.stringify({ slug }),
         method: 'POST',
      }).then(response => response.text());

   return useQuery(['article-content', { slug }], getContent);
}
