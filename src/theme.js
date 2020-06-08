import prism from '@theme-ui/prism/presets/theme-ui';

export default {
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
         deep: {
            text: 'hsl(210, 50%, 96%)',
            background: 'hsl(230, 25%, 18%)',
            primary: 'hsl(260, 100%, 80%)',
            secondary: 'hsl(290, 100%, 80%)',
            highlight: 'hsl(260, 20%, 40%)',
            accent: 'hsl(290, 100%, 80%)',
            muted: 'hsla(230, 20%, 0%, 20%)',
            gray: 'hsl(210, 50%, 60%)',
         },
         swiss: {
            text: 'hsl(10, 20%, 20%)',
            background: 'hsl(10, 10%, 98%)',
            primary: 'hsl(10, 80%, 50%)',
            secondary: 'hsl(10, 60%, 50%)',
            highlight: 'hsl(10, 40%, 90%)',
            accent: 'hsl(250, 60%, 30%)',
            muted: 'hsl(10, 20%, 94%)',
            gray: 'hsl(10, 20%, 50%)',
         },
      },
   },
   fonts: {
      body: 'system-ui, sans-serif',
      heading: '"Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
   },
   fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
   fontWeights: {
      body: 400,
      heading: 800,
      bold: 700,
      display: 800,
   },
   lineHeights: {
      body: 1.5,
      heading: 1.25,
   },
   sizes: {
      sidebar: 256,
      container: 1024,
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
   layout: {
      container: {
         p: 3,
         // maxWidth: 1024
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
   styles: {
      root: {
         margin: 0,
         fontFamily: 'body',
         lineHeight: 'body',
         fontWeight: 'body',
      },
      hr: {
         color: 'muted',
      },
      img: {
         maxWidth: '100%',
         height: 'auto',
      },
      h1: {
         variant: 'text.display',
      },
      h2: {
         variant: 'text.heading',
         fontSize: 5,
      },
      h3: {
         variant: 'text.heading',
         fontSize: 4,
      },
      h4: {
         variant: 'text.heading',
         fontSize: 3,
      },
      h5: {
         variant: 'text.heading',
         fontSize: 2,
      },
      h6: {
         variant: 'text.heading',
         fontSize: 1,
      },
      a: {
         color: 'primary',
         '&:hover': {
            color: 'secondary',
         },
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
      },
      code: {
         fontFamily: 'monospace',
         fontSize: 1,
      },
      inlineCode: {
         fontFamily: 'monospace',
         color: 'secondary',
         bg: 'muted',
      },
      table: {
         width: '100%',
         my: 4,
         borderCollapse: 'separate',
         borderSpacing: 0,
         [['th', 'td']]: {
            textAlign: 'left',
            py: '4px',
            pr: '4px',
            pl: 0,
            borderColor: 'muted',
            borderBottomStyle: 'solid',
         },
      },
      th: {
         verticalAlign: 'bottom',
         borderBottomWidth: '2px',
      },
      td: {
         verticalAlign: 'top',
         borderBottomWidth: '1px',
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
