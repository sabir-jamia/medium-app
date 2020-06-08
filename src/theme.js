import prism from '@theme-ui/prism/presets/theme-ui';

export default {
   fonts: {
      body: 'system-ui, sans-serif',
      heading: '"Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
   },
   buttons: {
      primary: {
         color: 'background',
         bg: 'primary',
         fontWeight: 'bold',
      },
      secondary: {
         variant: 'buttons.primary',
         color: 'background',
         bg: 'secondary',
      },
      black: {
         fontWeight: 'bold',
         color: 'background',
         bg: 'text',
         '&:hover, &:focus': {
            bg: 'primary',
         },
      },
      icon: {
         padding: 16,
         cursor: 'pointer',
         border: '1px solid',
         borderColor: 'primary',
         '&:hover, &:focus': {
            bg: 'highlight',
         },
         '&:disabled': {
            cursor: 'no-drop',
            color: '#ccc',
         },
      },
   },
   text: {
      heading: {
         fontFamily: 'heading',
         fontWeight: 'heading',
         lineHeight: 'heading',
      },
      display: {
         variant: 'text.heading',
         fontSize: [5, 6],
         fontWeight: 'display',
         letterSpacing: '-0.03em',
         mt: 3,
      },
      caps: {
         textTransform: 'uppercase',
         letterSpacing: '0.2em',
      },
   },
   badges: {
      primary: {
         color: 'background',
      },
      highlight: {
         color: 'text',
         bg: 'highlight',
      },
      accent: {
         color: 'background',
         bg: 'accent',
      },
      outline: {
         color: 'primary',
         bg: 'transparent',
         boxShadow: 'inset 0 0 0 1px',
      },
      circle: {
         height: 16,
         minWidth: 16,
         lineHeight: '16px',
         textAlign: 'center',
         borderRadius: 9999,
      },
   },
   cards: {
      primary: {
         padding: 2,
         borderRadius: 4,
         boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
      },
   },
   links: {
      button: {
         display: 'inline-block',
         textDecoration: 'none',
         fontWeight: 'bold',
         fontSize: 2,
         p: 3,
         color: 'background',
         bg: 'text',
         borderRadius: 6,
         '&:hover, &:focus': {
            color: 'background',
            bg: 'primary',
         },
      },
      nav: {
         display: 'block',
         width: '100%',
         px: 2,
         py: 2,
         color: 'inherit',
         textDecoration: 'none',
         fontSize: 1,
         fontWeight: 'bold',
         bg: 'transparent',
         transitionProperty: 'background-color',
         transitionTimingFunction: 'ease-out',
         transitionDuration: '.2s',
         borderRadius: 2,
         '&:hover': {
            bg: 'highlight',
         },
         '&.active': {
            color: 'primary',
            bg: 'highlight',
         },
      },
   },
   ////////////////////////////necessary///////
   colors: {
      text: '#000000',
      background: '#ffffff',
      primary: '#3333ee',
      secondary: '#111199',
      muted: '#f6f6f6',
      highlight: '#efeffe', // '#ffffcc',
      gray: '#777777',
      accent: '#660099',
      darken: 'rgba(0, 0, 0, .25)',
      modes: {
         dark: {
            text: '#ffffff',
            background: '#060606',
            primary: '#33ccff',
            secondary: '#ee00ff',
            muted: '#191919',
            highlight: '#29112c',
            gray: '#999999',
            accent: '#cc00ff',
         },
      },
   },
   images: {
      avatar: {
         width: 32,
         height: 32,
      },
      big: {
         width: 100,
         height: 100,
      },
   },
   forms: {
      label: {
         fontSize: 1,
         fontWeight: 'bold',
      },
      input: {
         borderColor: 'gray',
         '&:focus': {
            borderColor: 'primary',
            boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
            outline: 'none',
         },
      },
      textarea: {
         borderColor: 'gray',
         '&:focus': {
            borderColor: 'primary',
            boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
            outline: 'none',
         },
      },
   },
   styles: {
      hr: {
         color: 'rgba(0,0,0,0.3)',
      },
      pre: {
         fontFamily: 'monospace',
         fontSize: 1,
         p: 3,
         color: 'text',
         bg: 'muted',
         overflow: 'auto',
         code: {
            color: 'inherit',
         },
         variant: 'prism',
         bold: {
            fontWeight: 'bold',
         },
      },
      navlink: {
         display: 'inline-block',
         fontWeight: 'bold',
         color: 'inherit',
         textDecoration: 'none',
         ':hover,:focus': {
            color: 'primary',
         },
      },
   },
   prism: {
      ...prism,
      '.bold': {
         fontWeight: 'bold',
      },
      '.bold.punctuation': {
         display: 'none',
      },
      '.title': {
         display: 'inline-block',
         fontWeight: 'bold',
         fontSize: '20px',
         margin: '20px 0 10px 0',
      },
      '.title.punctuation': {
         display: 'none',
      },
      '.list': {
         paddingLeft: '10px',
         fontSize: '20px',
         lineHeight: '10px',
      },
      '.list.punctuation': {
         display: 'none',
      },
      '.hr': {
         display: 'block',
         textAlign: 'center',
         borderBottom: '2px solid #ddd',
      },
      '.hr.punctuation': {
         display: 'none',
      },
      '.blockquote': {
         display: 'inline-block',
         borderLeft: '2px solid #ddd',
         paddingLeft: '10px',
         color: '#aaa',
         fontStyle: 'italic',
      },
      '.blockquote.punctuation': {
         display: 'none',
      },
      '.blockquote.punctuation + *': {
         borderLeft: '2px solid #ddd',
         pl: 3,
      },
      '.code': {
         fontFamily: 'monospace',
         bg: '#eee',
         p: '3px',
      },
      '.code.punctuation': {
         display: 'none',
      },
   },
};

{
   /* <span
{...attributes}
css={css`
font-weight: ${leaf.bold && 'bold'};
font-style: ${leaf.italic && 'italic'};
text-decoration: ${leaf.underlined && 'underline'}; */
}
