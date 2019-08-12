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
  .add('Survey List with 1 Survey', () => (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>      
        <SurveyListComponent items={[sampleSurveys[0]]}/>
      </I18nextProvider>
    </ThemeProvider>
  ));

  const sampleSurveys = [
    {
      "id": "as8a7as7s787saa8sa8s7",
      "title": "Survey 1",
      "description": "",
      "active": true,
      "questions": [
        {
          "id": "as8a7as7s78fdfd3238s7",
          "title": "Question 1",
          "descritpion": "Question description",
          "name": "MCQ",
          "exclusive": true,
          "answers": [
            {
              "id": "as8a7as7s787saqaawerr8s7",
              "title": "Answer 1",
              "correctAnswer": false
            },
            {
              "id": "as8a7as7s787saawerr8s7",
              "title": "Answer 1",
              "correctAnswer": true
            }
          ]
        }
      ]
    },
    {
      "id": "as8a7aswera8sa8s7",
      "title": "Survey 2",
      "description": "",
      "active": true,
      "questions": [
        {
          "id": "as8a7awsfdfd3238s7",
          "title": "Question 1",
          "descritpion": "Question description",
          "name": "MCQ",
          "exclusive": true,
          "answers": [
            {
              "id": "as8a7oiu87saawerr8s7",
              "title": "Answer 1",
              "correctAnswer": false
            },
            {
              "id": "as8a7apoq7saawerr8s7",
              "title": "Answer 1",
              "correctAnswer": true
            }
          ]
        },
        {
          "id": "as8a7awjk238s7",
          "title": "Question 2",
          "descritpion": "Question description",
          "name": "MCQ",
          "exclusive": false,
          "answers": [
            {
              "id": "as8a7oetyhaawerr8s7",
              "title": "Answer 1",
              "correctAnswer": true
            },
            {
              "id": "as8a7ap87hjawerr8s7",
              "title": "Answer 1",
              "correctAnswer": true
            }
          ]
        }
      ]
    }
  ];
  