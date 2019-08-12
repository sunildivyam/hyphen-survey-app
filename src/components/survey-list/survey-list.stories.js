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
        <SurveyListComponent/>
      </I18nextProvider>
    </ThemeProvider>
  ))
  .add('Survey List with 2 Surveys', () => (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>      
        <SurveyListComponent items={sampleSurveys}/>
      </I18nextProvider>
    </ThemeProvider>
  ));

  const sampleSurveys = [
    {
      "id": "as8a7as7s787saa8sa8s7",
      "title": "Customer Satisfaction Survey",
      "description": "",
      "active": true,
      "questions": []
    },
    {
      "id": "as8a7aswera8sa8s7",
      "title": "Wellness Survey",
      "description": "",
      "active": true,
      "questions": []
    }
  ];
  