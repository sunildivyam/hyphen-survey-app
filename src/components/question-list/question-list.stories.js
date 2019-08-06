import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import QuestionListComponent  from './index.js';

storiesOf('QuestionList', module)
  .add('Empty Question List', () => (
    <I18nextProvider i18n={i18n}>
      <QuestionListComponent />
    </I18nextProvider>
  ));   