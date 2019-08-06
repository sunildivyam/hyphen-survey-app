import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import QuestionComponent  from './index.js';

storiesOf('Question', module)
  .add('Empty Question', () => (
    <I18nextProvider i18n={i18n}>
      <QuestionComponent />
    </I18nextProvider>
  ));