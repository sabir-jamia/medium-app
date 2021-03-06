const React = require('react');
const babel = require('@babel/core');
const { renderToStaticMarkup } = require('react-dom/server');
const mdx = require('@mdx-js/mdx');
const { mdx: createElement } = require('@mdx-js/react');
const jsxTransformer = require('@babel/plugin-transform-react-jsx');

const transform = code =>
   babel.transformSync(code, {
      plugins: [jsxTransformer],
   }).code;

module.exports = async mdxCode => {
   const jsx = await mdx(mdxCode, { skipExport: true });
   const code = transform(jsx);

   const scope = { mdx: createElement };

   const fn = new Function(
      'React',
      ...Object.keys(scope),
      `${code}; return React.createElement(MDXContent)`
   );

   const element = fn(React, ...Object.values(scope));

   return renderToStaticMarkup(element);
};
