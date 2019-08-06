import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import {GlobalStyles} from './styles/global-styles';
import { defaultTheme } from './styles/default.theme';
import SurveysListComponent from './components/survey-list';
import i18n from './i18n';
import dataService from './services/data-service';
import {SURVEYLIST_LOADED} from './constants/actionTypes';



const mapStateToProps = state => {  
  return {
    surveyListLoaded: state.surveyList.surveyListLoaded,
    surveys: state.surveyList.surveys
  }};

const mapDispatchToProps = dispatch => ({
  onSurveyListLoaded: (payload) =>
    dispatch({ type: SURVEYLIST_LOADED, payload})
});


class App extends Component {
  componentDidMount() {
    dataService.getSurveyList()
    .then(surveys => this.props.onSurveyListLoaded(surveys));
  }
  render() {    
    return (
      <div className="surveysapp">
        <I18nextProvider i18n={i18n}>
          <GlobalStyles />
          <ThemeProvider theme={defaultTheme}>
          {this.props.surveys && <SurveysListComponent items={this.props.surveys}/>}
          </ThemeProvider>
        </I18nextProvider>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);