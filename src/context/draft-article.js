import React, { useRef, useContext } from 'react';

const DraftArticleContext = React.createContext();

function DraftArticleProvider({ children }) {
   const article = useRef({
      slug: '',
      title: '',
      description: '',
      body: '',
      tagList: [],
   });

   return (
      <DraftArticleContext.Provider value={article}>
         {children}
      </DraftArticleContext.Provider>
   );
}

function useDraftArticle() {
   return useContext(DraftArticleContext);
}

export { DraftArticleProvider, useDraftArticle };
