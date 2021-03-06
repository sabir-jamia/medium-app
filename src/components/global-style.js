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
         `}
         styles={t => ({
            pre: {
               fontFamily: 'monospace',
               fontSize: 12,
               padding: 8,
               color: t.colors.text,
               background: t.colors.muted,
               overflow: 'auto',
               code: {
                  color: 'inherit',
               },
               bold: {
                  fontWeight: 'bold',
               },
            },
         })}
      ></Global>
   );
}

export default GlobalStyle;
