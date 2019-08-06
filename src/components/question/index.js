import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';

export default withTranslation()(
  class QuestionComponent extends Component {
    constructor(props) {
      super(props);
      this.t = props.t;
    }
    
    render() {
      return(
        <header> Question
           <p> {this.t('components.questionComponent.title')} </p>
        </header>       
      );
    }
  }
)