import React, {Component} from 'react';
import {withTranslation}   from 'react-i18next';
import QuestionComponent from '../question';

import {ListSection, Header, List, ListItem, NoData, AddButton} from './survey.style';

export default withTranslation()(class SurveyComponent extends Component {
  constructor(props) {
    super(props);    
    this.t = props.t;
  }
  
  render() {
    return(
      <ListSection>
        <Header>{((this.props.item && this.props.item.title) || this.t('components.surveyComponent.title'))}</Header>
        <List>
          {this.props.item && this.props.item.questions && this.props.item.questions.length &&
          <>
          <ListItem>
            {
              this.props.item.questions.map((item, index) => {
                return (<QuestionComponent 
                  index={index + 1} 
                  item={item} 
                  key={item.id}
                  onEdit={this.props.onEditQuestion}/>);
              })
            }
          </ListItem>
          <ListItem right>
            <AddButton onClick={this.props.onAddQuestion}>&#43;</AddButton>
          </ListItem>
          </>
          }
          {
            (!this.props.item || !this.props.item.questions || !this.props.item.questions.length) &&
            <NoData>{this.t('components.surveyComponent.nodata')}</NoData>
          }
        </List>
      </ListSection>
    );
  }
}
)
