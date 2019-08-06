import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider} from 'styled-components';
import {defaultTheme} from '../../styles/default.theme';
import i18n from '../../i18n';
import SurveyListComponent  from './index.js';

storiesOf('SurveyList', module)
  .add('Empty Survey List', () => (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>      
        <SurveyListComponent items={[]}/>
      </I18nextProvider>
    </ThemeProvider>
  ));