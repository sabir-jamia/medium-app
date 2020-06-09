/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import {
   Flex,
   Box,
   Label,
   Input,
   Textarea,
   Button,
} from '@theme-ui/components';
import { useState } from 'react';
import { useDraftArticle } from '../context/draft-article';
import useCreateArticle from '../hooks/use-create-article';
import { useHistory, useLocation } from 'react-router-dom';
import Portal from './portal';

function PublishDialog({ onClose }) {
   const { current: article } = useDraftArticle();
   const [title, setTitle] = useState(article.title);
   const [description, setDescription] = useState(article.description);
   const [tags, setTags] = useState(article.tagList?.join(','));
   const [mutate] = useCreateArticle();
   const history = useHistory();
   const { state } = useLocation();

   const handleSubmit = event => {
      event.preventDefault();
      const redirectUrl = state?.referrer ?? '/';

      mutate({
         slug: article.slug,
         title,
         description,
         body: article.body,
         tagList: tags?.split(',').map(tag => tag.trim()),
      }).then(() => {
         history.push(redirectUrl);
         onClose();
         console.log('SUCCESSFULL');
      });
   };

   return (
      <Portal>
         <Box
            sx={{
               position: 'fixed',
               top: 0,
               left: 0,
               bottom: 0,
               right: 0,
               zIndex: 900,
               backgroundColor: 'background',
               width: '100%',
            }}
         >
            <Flex
               sx={{
                  alignItems: 'center',
                  flexDirection: 'column',
                  padding: '80px 5px',
                  margin: 'auto',
                  maxWidth: '650px',
               }}
            >
               <span
                  sx={{ alignSelf: 'flex-end', ursor: 'pointer' }}
                  className='material-icons'
                  onClick={onClose}
               >
                  close
               </span>
               <form sx={{ width: '80%' }} onSubmit={handleSubmit}>
                  <Label htmlFor='article-title'>Article Title</Label>
                  <Input
                     id='article-title'
                     name='article-title'
                     mb={3}
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                  />
                  <Label htmlFor='article-desc'>Article Description</Label>
                  <Input
                     id='article-desc'
                     name='article-desc'
                     mb={3}
                     value={description}
                     onChange={e => setDescription(e.target.value)}
                  />
                  <Label htmlFor='article-tags'>Article Tags</Label>
                  <Textarea
                     id='article-tags'
                     name='article-tags'
                     mb={3}
                     rows={6}
                     placeholder='Add tags'
                     value={tags}
                     onChange={e => setTags(e.target.value)}
                  />
                  <Button type='submit'>Publish</Button>
               </form>
            </Flex>
         </Box>
      </Portal>
   );
}

export default PublishDialog;
