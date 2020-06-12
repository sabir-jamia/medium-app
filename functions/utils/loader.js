const React = require('react');
const babel = require('@babel/core');
const { renderToStaticMarkup } = require('react-dom/server');
const mdx = require('@mdx-js/mdx');
const { MDXProvider, mdx: createElement } = require('@mdx-js/react');
require('@babel/preset-react');

const transform = code =>
   babel.transformSync(code, {
      presets: ['@babel/preset-react'],
   }).code;

module.exports = async mdxCode => {
   const jsx = await mdx(mdxCode, { skipExport: true });
   return jsx;
   const code = transform(jsx);
   const scope = { mdx: createElement };

   const fn = new Function(
      'React',
      ...Object.keys(scope),
      `${code}; return React.createElement(MDXContent)`
   );

   const element = fn(React, ...Object.values(scope));

   const elementWithProvider = React.createElement(MDXProvider, {}, element);

   return renderToStaticMarkup(elementWithProvider);
};
