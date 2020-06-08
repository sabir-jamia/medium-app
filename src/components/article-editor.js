/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Box } from '@theme-ui/components';
import { useState, useEffect } from 'react';

import MDEditor from './md-editor';
import { useDraftArticle } from '../context/draft-article';

function ArticleEditor({ article }) {
   const draftedArticleRef = useDraftArticle();
   const state = useState([
      {
         children: [{ text: article.title }],
      },
      {
         children: [{ text: article.description }],
      },
      {
         children: [{ text: article.body }],
      },
   ]);
   const [value] = state;

   useEffect(() => {
      if (value.length === 0) {
         return;
      }

      const [titleNode, descriptionNode, ...body] = value;
      const bodyText = body.map(node =>
         node.children.reduce((acc, n) => acc + n.text, '')
      );

      draftedArticleRef.current = {
         ...article,
         title: titleNode.children[0].text,
         description: descriptionNode.children[0].text,
         body: bodyText.join('\n'),
      };
   }, [value]);

   return (
      <Box sx={{ width: '100%' }}>
         <MDEditor state={state} />
      </Box>
   );
}

export default ArticleEditor;
