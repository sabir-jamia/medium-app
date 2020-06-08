import React from 'react';
import { useParams } from 'react-router-dom';
import useArticle from '../../hooks/use-article';
import ArticleEditor from '../../components/article-editor';

function EditArticle() {
   const { slug } = useParams();
   const { data: article, status, error } = useArticle(slug);

   if (status === 'loading') {
      return <span>Loading...</span>;
   }

   if (status === 'error') {
      return <span>Error: {error.message}</span>;
   }

   return <ArticleEditor article={article} />;
}

export default EditArticle;
