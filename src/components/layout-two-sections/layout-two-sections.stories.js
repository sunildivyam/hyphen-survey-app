import React from 'react';
import {storiesOf} from '@storybook/react';
import LayoutTwoSections from './index';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from '../../styles/default.theme';


storiesOf('LayoutTwoSections', module)
.add('Layout with Sample Content', () => (    
    <ThemeProvider theme={defaultTheme}>
        <LayoutTwoSections leftChildren={(<div>Left Section Content</div>)} rightChildren={(<div>Right Section Content</div>)}/>
    </ThemeProvider>
));