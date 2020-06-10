const axios = require('axios');
const renderWithReact = require('./utils/loader');

exports.handler = async event => {
   const { slug } = JSON.parse(event.body);

   const { data } = await axios({
      url: `${process.env.API_URL}/articles/${slug}`,
   });

   const content = await renderWithReact(data.article.body);

   return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: content,
   };
};
