const renderWithReact = require('./utils/loader');

exports.handler = async event => {
   const { content: articleContent } = JSON.parse(event.body);
   const content = await renderWithReact(articleContent);

   return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: content,
   };
};
