/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import {
   Flex,
   Box,
   Textarea,
   Button,
   Avatar,
   Text,
} from '@theme-ui/components';
import { useState, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useComment } from '../../hooks/use-comment';
import { getFormattedDate } from '../../utils/format-date';
import IconButton from '../../components/icon-button';

function ArticleComment({ isMyArticle, onCreate, onDelete }) {
   const { slug } = useParams();
   const { status, data, error } = useComment(slug);
   const [comment, setComment] = useState('');

   const handleSubmit = e => {
      e.preventDefault();
      onCreate(comment);
      setComment('');
   };

   return (
      <Fragment>
         <Box
            as='form'
            sx={{
               border: t => `1px solid ${t.colors.muted}`,
               borderRadius: '4px',
               width: '50%',
            }}
            mb={3}
            onSubmit={handleSubmit}
         >
            <Textarea
               rows={3}
               placeholder='Write a comment...'
               value={comment}
               onChange={e => setComment(e.target.value)}
               sx={{ border: 'none' }}
            />
            <Flex sx={{ justifyContent: 'space-between', bg: 'muted', p: 2 }}>
               <Avatar />
               <Button
                  sx={{
                     p: 2,
                     width: 'auto',
                     bg: 'background',
                     color: 'primary',
                  }}
                  type='submit'
               >
                  <Text sx={{ fontSize: '14px', fontWeight: 'normal' }}>
                     Post Comment
                  </Text>
               </Button>
            </Flex>
         </Box>
         {status == 'loading' ? (
            <span>Loading comments...</span>
         ) : status == 'error' ? (
            <span>Error: {error.message}</span>
         ) : (
            <CommentBox
               comments={data}
               onDelete={onDelete}
               isMyArticle={isMyArticle}
            />
         )}
      </Fragment>
   );
}

function CommentBox({ comments, onDelete, isMyArticle }) {
   return comments.map(comment => (
      <Box
         key={comment.id}
         sx={{
            border: t => `1px solid ${t.colors.muted}`,
            borderRadius: '4px',
            width: '50%',
         }}
         mb={3}
      >
         <p sx={{ p: 3 }}>{comment.body}</p>
         <Flex sx={{ justifyContent: 'space-between', bg: 'muted', p: 2 }}>
            <Flex>
               <Avatar src={comment.author.image} />
               <Link
                  to={`/profiles/${comment.author.username}`}
                  sx={{ ml: 2, variant: 'styles.navlink' }}
               >
                  {comment.author.username}
               </Link>
               <Text as='p' ml={2}>
                  {getFormattedDate(comment.updatedAt)}
               </Text>
            </Flex>
            {isMyArticle && (
               <IconButton
                  icon='delete'
                  noBorder
                  onClick={() => onDelete(comment.id)}
               />
            )}
         </Flex>
      </Box>
   ));
}

export default ArticleComment;
