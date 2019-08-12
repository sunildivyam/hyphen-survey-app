import { createGlobalStyle  } from 'styled-components';

export const GlobalStyles = createGlobalStyle` 
    html, body {
        margin: 0px;
        padding: 0px;

        * {
            box-sizing: border-box;
        }
        button:focus {
            outline: none;
        }
    }
`
export const ModalStyles = {
    content: {
        minWidth: '500px',
        top: '5%',
        left: '15%',
        right: '15%',
        bottom: '5%',
        margin: '0px auto',
        padding: '0px',
        border: 'none'
    },
    overlay: {
      overflowY: 'auto',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};