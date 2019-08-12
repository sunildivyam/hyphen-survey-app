import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles, ModalStyles} from './styles/global-styles';
import { defaultTheme } from './styles/default.theme';
import i18n from './i18n';

import dataService from './services/data-service';
import {surveyListLoaded, surveySelected, toggleQuestionForm, saveQuestion} from './constants/actions';
import Question from './models/question';

import LayoutTwoSections from './components/layout-two-sections';
import SurveysListComponent from './components/survey-list';
import SurveysComponent from './components/survey';
import QuestionFormComponent from './components/question-form';



const mapStateToProps = state => {   
  return {    
    surveys: state.surveyList.surveys,
    selectedSurvey: state.surveyList.selectedSurvey,
    isModalOpen: state.surveyList.isModalOpen,
    selectedQuestion: state.surveyList.selectedQuestion
  }};

const mapDispatchToProps = dispatch => ({
  onSurveyListLoaded: surveys => surveyListLoaded(surveys)(dispatch),
  onSurveySelected: selectedSurvey => surveySelected(selectedSurvey)(dispatch),
  onModalOpen: (question, sectionId) => toggleQuestionForm(true, question, sectionId)(dispatch),
  onModalClose: (question) => toggleQuestionForm(false, question)(dispatch),
  onQuestionSaved: (question) => saveQuestion(question)(dispatch),
});

class App extends Component {  
  
  handleAddQuestion = () => {
    const question = new Question();
    this.props.onModalOpen(question, this.props.selectedSurvey.id);
  }
  handleEditQuestion = (question) => {    
    this.props.onModalOpen(question, this.props.selectedSurvey.id);
  }
  handleCloseFormClick = (question) => {    
    this.props.onModalClose(question);
  }
  handleSaveQuestion = (question) => {    
    this.props.onModalClose(question);
    let datFn = dataService.addQuestion;
    if (this.props.selectedSurvey.questions.find((q) => q.id === question.id)) {
      datFn = dataService.editQuestion;
    }    
    datFn(question, this.props.selectedSurvey).then(survey => {
      this.props.onQuestionSaved(question);
    });    
  }
  componentDidMount() {
    dataService.getSurveyList()
    .then(surveys => {
      this.props.onSurveyListLoaded(surveys);
      if (surveys.length > 0) {        
        this.props.onSurveySelected(surveys[0]);
      }
    });
  }

  render() {    
    return (
      <div className="surveysapp">
        <I18nextProvider i18n={i18n}>
          <GlobalStyles />
          <ThemeProvider theme={defaultTheme}>
            <>
            <LayoutTwoSections
              title="Custom Survey Questions"
              leftChildren={this.props.surveys && 
              <SurveysListComponent 
                items={this.props.surveys} 
                onChange={this.props.onSurveySelected}
                selected={this.props.selectedSurvey}/>}
              rightChildren={
              <SurveysComponent 
                item={this.props.selectedSurvey} 
                onAddQuestion={this.handleAddQuestion}
                onEditQuestion={this.handleEditQuestion}/>}
            />            
            <Modal
                isOpen={this.props.isModalOpen}
                appElement={document.getElementsByTagName('body')[0]}
                style={ModalStyles}
                contentLabel="">
              <QuestionFormComponent 
                item={this.props.selectedQuestion} 
                onSave={this.handleSaveQuestion}
                onCancel={this.handleCloseFormClick}/>
            </Modal>
            </>
          </ThemeProvider>
        </I18nextProvider>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
