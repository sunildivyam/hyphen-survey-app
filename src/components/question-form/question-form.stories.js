import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import QuestionFormComponent  from './index.js';

storiesOf('QuestionForm', module)
  .add('New Question Form', () => (
    <I18nextProvider i18n={i18n}>
      <QuestionFormComponent />
    </I18nextProvider>
  ));   