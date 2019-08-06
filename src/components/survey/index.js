import React, {Component} from 'react';
import styled from 'styled-components';

import { withTranslation } from 'react-i18next';

const Title = styled.section`
  color: green;
`;
export default withTranslation()(
  class SurveyComponent extends Component {
    constructor(props) {
      super(props);
      this.t = props.t;
    }
        
    render() {
      return(
        <Title>
          {this.props.item.title}
        </Title>      
      );
    }
  }
)