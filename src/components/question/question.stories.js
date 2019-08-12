import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from '../../styles/default.theme';
import i18n from '../../i18n';
import QuestionComponent  from './index.js';

storiesOf('Question', module)
  .add('Exclusive Question', () => (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <QuestionComponent item={exlusiveQuestion} index={1}/>
      </I18nextProvider>
    </ThemeProvider>
  ))
  .add('Non Exclusive Question', () => (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <QuestionComponent item={nonExlusiveQuestion} index={1}/>
      </I18nextProvider>
    </ThemeProvider>
  ));

const exlusiveQuestion = {
  "id": "9ccf0ac5-7572-4956-86ac-5b4ab125ae16",
  "title": "How well do our products meet your needs?",
  "description": "",
  "name": "MCQ",
  "exclusive": true,
  "answers": [
    {
      "id": "cd50d22d-9bb4-4d0a-8fca-bd9c57a52134",
      "title": "Extremely well",
      "correctAnswer": false
    },
    {
      "id": "d873c103-16ff-4807-84bb-cfaf692f5dd5",
      "title": "Not so well",
      "correctAnswer": false
    },
    {
      "id": "bf90c525-4f1b-48ff-8a73-9d8e79968529",
      "title": "Very well",
      "correctAnswer": false
    },
    {
      "id": "79f902e4-9bf2-4218-8bd2-820d4c25ccbd",
      "title": "Somewhat well",
      "correctAnswer": false
    }
  ]
};
const nonExlusiveQuestion = {
  "id": "as8a7as7s78fdfd3238s7",
  "title": "Which of the following words would you use to describe our products? Select all that apply.",
  "descritpion": "Question description",
  "name": "MCQ",
  "exclusive": false,
  "answers": [
    {
      "id": "as8a7as7s787saqaawerr8s7",
      "title": "Reliable",
      "correctAnswer": false
    },
    {
      "id": "as8a7as7s787saawerr8s7",
      "title": "High Quality",
      "correctAnswer": true
    },
    {
      "id": "f793967d-ada4-45c0-8465-43353c0247ab",
      "title": "Useful",
      "correctAnswer": false
    },
    {
      "id": "acc36a36-e83d-42d0-8bd7-f0d4c419adea",
      "title": "Impractical",
      "correctAnswer": false
    },
    {
      "id": "70a4bc73-0062-4828-84f6-f115f3e9bba7",
      "title": "Ineffective",
      "correctAnswer": false
    }
  ]
};