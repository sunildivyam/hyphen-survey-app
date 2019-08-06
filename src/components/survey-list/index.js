import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';


const Paragraph = styled.p`
  color: ${props => props.theme.primaryColor};
`;

export default withTranslation()(
  class SurveyListComponent extends Component {
    constructor(props) {
      super(props);
      this.t = props.t;
    }
    
    render() {
      return(
        <header> The List of Surveys
           <Paragraph> {this.t('components.surveyListComponent.title')} </Paragraph>
        </header>       
      );
    }
  }
)