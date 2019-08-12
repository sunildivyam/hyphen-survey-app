import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from '../../styles/default.theme';
import { GlobalStyles } from '../../styles/global-styles';
import i18n from '../../i18n';
import QuestionFormComponent  from './index.js';
import Question from '../../models/question';



storiesOf('Question Form', module)
  .add('Add Question', () => (
    <ThemeProvider theme={defaultTheme}>       
      <I18nextProvider i18n={i18n}>
        <GlobalStyles />
        <QuestionFormComponent item={new Question()}/>
      </I18nextProvider>
    </ThemeProvider>
  ))
  .add('Add Question with four answers', () => (
    <ThemeProvider theme={defaultTheme}>       
      <I18nextProvider i18n={i18n}>
        <GlobalStyles />
        <QuestionFormComponent item={sampleQuestion}/>
      </I18nextProvider>
    </ThemeProvider>
  ));
  
const sampleQuestion = {
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