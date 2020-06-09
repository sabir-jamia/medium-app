import React from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import useArticle from '../../hooks/use-article';
import useMutateFavorite from '../../hooks/use-mutate-favorite';
import useMutateFollow from '../../hooks/use-mutate-follow';
import useMutateArticle from '../../hooks/use-mutate-article';
import { useRequireLoggedin } from '../../hooks/use-require-loggedin';
import {
   useCreateComment,
   useDeleteComment,
} from '../../hooks/use-mutate-comment';

import Article from './article';

function ArticlePage() {
   const history = useHistory();
   const { slug } = useParams();
   const { data: article, status, error } = useArticle(slug);
   const [mutateFavorite] = useMutateFavorite();
   const [mutateFollow] = useMutateFollow(slug);
   const [mutateArticle] = useMutateArticle();
   const [createComment] = useCreateComment();
   const [deleteComment] = useDeleteComment();
   const loggedinOnly = useRequireLoggedin();
   const { state } = useLocation();
   const referrer = state?.referrer ?? '/';

   const handleFavorite = () => {
      return loggedinOnly(
         () => Promise.resolve(''),
         () => mutateFavorite({ slug, favorited: article.favorited })
      );
   };

   const handleFollow = () => {
      const mutationArgs = {
         username: article.author.username,
         following: article.author.following,
      };
      return loggedinOnly(
         () => Promise.resolve(''),
         () => mutateFollow(mutationArgs)
      );
   };

   const handleEdit = () => {
      history.push({ pathname: `/article/edit/${slug}`, state: { referrer } });
      return Promise.resolve('');
   };

   const handleDelete = () => {
      return mutateArticle(
         { slug },
         {
            onSuccess: () => {
               history.push(referrer);
            },
         }
      );
   };

   const handleCreateComment = comment =>
      createComment({ slug, comment: { body: comment } }).then(() => {
         console.log('succesfull');
      });

   const handleDeleteComment = commentId =>
      deleteComment({ slug, commentId }).then(() => {
         console.log('succesfull');
      });

   return status == 'loading' ? (
      <span>Loading article...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <Article
         article={article}
         handleFavorite={handleFavorite}
         handleDelete={handleDelete}
         handleEdit={handleEdit}
         handleFollow={handleFollow}
         handleCreateComment={handleCreateComment}
         handleDeleteComment={handleDeleteComment}
      />
   );
}

export default ArticlePage;
