import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';

export default withTranslation()(
  class QuestionListComponent extends Component {
    constructor(props) {
      super(props);
      this.t = props.t;
    }
    
    render() {
      return(
        <header> The List of Questions
           <p> {this.t('components.questionListComponent.title')} </p>
        </header>       
      );
    }
  }
)