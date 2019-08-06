import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';

export default withTranslation()(
  class QuestionFormComponent extends Component {
    constructor(props) {
      super(props);
      this.t = props.t;
    }
    
    render() {
      return(
        <header> Question Form
           <p> {this.t('components.questionFormComponent.title')} </p>
        </header>       
      );
    }
  }
)