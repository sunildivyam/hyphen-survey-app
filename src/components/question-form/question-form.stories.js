import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from '../../styles/default.theme';
import { GlobalStyles } from '../../styles/global-styles';
import i18n from '../../i18n';
import QuestionFormComponent  from './index.js';
import Question from '../../models/question';
import Answer from '../../models/answer';


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
  
const sampleQuestion = new Question();
sampleQuestion.answers.push(new Answer());
sampleQuestion.answers.push(new Answer());
sampleQuestion.answers.push(new Answer());