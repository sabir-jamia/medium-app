import { css, Global } from '@emotion/core';

function GlobalStyle() {
   return (
      <Global
         styles={css`
            html,
            body {
               height: 100%;
               margin: 0;
               padding: 0;
               font-size: 1rem;
               line-height: 1.4;
               font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                  'Helvetica Neue', sans-serif;
            }
            *,
            *::after,
            *::before {
               box-sizing: border-box;
               margin: 0;
            }
            .padding {
               padding: 0 calc((100vw - 650px - 10rem) / 2);
            }
            .content-container {
               display: flex;
               justify-content: center;
               width: 100%;
            }
            .content-width {
               max-width: 680px;
               width: 100%;
            }
            a {
               color: #000;
               text-decoration: none;
               cursor: pointer;
            }
         `}
      ></Global>
   );
}

export default GlobalStyle;
