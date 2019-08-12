import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from '../../styles/default.theme';
import i18n from '../../i18n';
import AnswerComponent  from './index.js';
import Answer from '../../models/answer';

storiesOf('Answer', module)
  .add('Empty Answer', () => (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <AnswerComponent item={new Answer()}/>
      </I18nextProvider>
    </ThemeProvider>
  ))
  .add('Pre Filled Answer', () => (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <AnswerComponent item={new Answer('wqrqwwqqr323sds', 'Extremely well', true)}/>
      </I18nextProvider>
    </ThemeProvider>
  ));
