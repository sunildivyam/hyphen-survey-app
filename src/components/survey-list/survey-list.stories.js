import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import SurveyListComponent  from './index.js';

storiesOf('SurveyList', module)
  .add('Empty Survey List', () => (
    <I18nextProvider i18n={i18n}>
      <SurveyListComponent />
    </I18nextProvider>
  ));