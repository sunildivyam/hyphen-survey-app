import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';
import SurveyComponent from '../survey';

const ListSection = styled.section`
  background-color: ${props => props.theme.colors.primary};
`;

const Header = styled.header`
  font-size: ${props => props.theme.size.lg}px;
`;

const List = styled.ul`
  listStyle: none;
  margin: ${props => props.theme.spacing.sm}px;
`;

const ListItem = styled.li`  
  padding: ${props => props.theme.spacing.sm}px;  
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