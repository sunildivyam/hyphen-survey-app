import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';
import SurveyComponent from '../survey';

const ListSection = styled.section`
  background-color: ${props => props.theme.color.secondary.lighter};
`;

const Header = styled.header(props => props.theme.styles.header);

const List = styled.ul`
  list-style: none;
  margin: ${props => props.theme.spacing.sm};
`;

const ListItem = styled.li`  
  padding: ${props => props.theme.spacing.sm};  
`;

export default withTranslation()(
  class SurveyListComponent extends Component {
    constructor(props) {
      super(props);
      this.t = props.t;
    }
    
    render() {
      return(
        <ListSection>
          <Header>{this.t('components.surveyListComponent.title')}</Header>
          <List>
            <ListItem>
              {
                this.props.items.map((item) => {
                  return (<SurveyComponent item={item} key={item.id}></SurveyComponent>);
                })
              }
            </ListItem>
          </List>
        </ListSection>    
      );
    }
  }
)