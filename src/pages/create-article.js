import React from 'react';
import ArticleEditor from '../components/article-editor';

function CreateArticlePage() {
   const article = {
      title: '## Article Title',
      description: 'Article Description\n',
      body: 'Write **something** in markdown',
   };

   return <ArticleEditor article={article} />;
}

export default CreateArticlePage;
