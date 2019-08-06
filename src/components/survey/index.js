import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';

export default withTranslation()(
  class SurveyComponent extends Component {
    constructor(props) {
      super(props);
      this.t = props.t;
    }
    
    render() {
      return(
        <header> Survey
           <p> {this.t('components.surveyComponent.title')} </p>
        </header>       
      );
    }
  }
)