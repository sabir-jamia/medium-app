/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import {
   Flex,
   Box,
   Textarea,
   Button,
   IconButton,
   Avatar,
   Text,
} from '@theme-ui/components';
import { useState, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useComment } from '../../hooks/use-comment';
import { getFormattedDate } from '../../utils/format-date';

function ArticleComment({ onCreate, onDelete }) {
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
         <Box as='form' sx={{ width: '50%' }} mb={3} onSubmit={handleSubmit}>
            <Box>
               <Textarea
                  rows={4}
                  placeholder='Write a comment...'
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  sx={{
                     borderBottom: 0,
                     borderBottomRightRadius: 0,
                     borderBottomLeftRadius: 0,
                  }}
               />
            </Box>
            <Flex
               sx={{
                  justifyContent: 'space-between',
                  borderColor: 'gray',
                  borderWidth: '1px',
                  borderBottomLeftRadius: '4px',
                  borderBottomRightRadius: '4px',
                  bg: 'gray',
                  p: 2,
               }}
            >
               <Avatar />
               <Button type='submit'>Post Comment</Button>
            </Flex>
         </Box>
         {status == 'loading' ? (
            <span>Loading comments...</span>
         ) : status == 'error' ? (
            <span>Error: {error.message}</span>
         ) : (
            <CommentBox comments={data} onDelete={onDelete} />
         )}
      </Fragment>
   );
}

function CommentBox({ comments, onDelete }) {
   return comments.map(comment => (
      <Box
         key={comment.id}
         sx={{ border: '1px solid gray', borderRadius: '4px', width: '50%' }}
         mb={3}
      >
         <p sx={{ p: 3 }}>{comment.body}</p>
         <Flex sx={{ justifyContent: 'space-between', bg: 'gray', p: 2 }}>
            <Flex>
               <Avatar src={comment.author.image} />
               <Link to={`/profiles/${comment.author.username}`} sx={{ ml: 2 }}>
                  {comment.author.username}
               </Link>
               <Text as='p' ml={2}>
                  {getFormattedDate(comment.updatedAt)}
               </Text>
            </Flex>
            <IconButton
               sx={{ border: 'none' }}
               onClick={() => onDelete(comment.id)}
            >
               <span className='material-icons'>delete</span>
            </IconButton>
         </Flex>
      </Box>
   ));
}

export default ArticleComment;
