import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import SurveyComponent  from './index.js';

storiesOf('Survey', module)
  .add('Empty Survey', () => (
    <I18nextProvider i18n={i18n}>
      <SurveyComponent />
    </I18nextProvider>
  ));   