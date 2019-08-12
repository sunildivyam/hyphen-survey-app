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
        <QuestionComponent item={exlusiveQuestion}/>
      </I18nextProvider>
    </ThemeProvider>
  ))
  .add('Non Exclusive Question', () => (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <QuestionComponent item={nonExlusiveQuestion}/>
      </I18nextProvider>
    </ThemeProvider>
  ));

const exlusiveQuestion = {
  "id": "as8a7awsfdfd3238s7",
  "title": "Question 1",
  "descritpion": "Question description",
  "name": "MCQ",
  "exclusive": true,
  "answers": [
    {
      "id": "as8a7oiu87saawerr8s7",
      "title": "true",
      "correctAnswer": false
    },
    {
      "id": "as8a7apoq7saawerr8s7",
      "title": "false",
      "correctAnswer": true
    }
  ]
};
const nonExlusiveQuestion = {
  "id": "as8a7awjk238s7",
  "title": "Question 1",
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
};