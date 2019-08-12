import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import {ListSection, Header, List, ListItem, Answer, RadioButton, Checkbox, QuestionHead, EditButton} from './question.style';

export default withTranslation()(
  class QuestionComponent extends Component {
    constructor(props) {
      super(props);
      this.t = props.t;
      this.state = {
        selectedAnswer: '',
        selectedAnswers: []        
      }      
    }
    
    handleChange = e => {
      const val = e.target.name;
      const checked = e.target.checked;

      this.setState((prevState) => {
        const newState = {...prevState};
        if (this.props.item.exclusive) {
          newState.selectedAnswer = val;
        } else {
          if (checked) {
            !newState.selectedAnswers.includes(val) && newState.selectedAnswers.push(val);
          } else {
            newState.selectedAnswers.includes(val) && newState.selectedAnswers.splice(newState.selectedAnswers.indexOf(val), 1);
          }
        }        
        return newState;
      });
    }

    handleEditClick = e => {
      typeof this.props.onEdit === 'function' && this.props.onEdit(this.props.item);
    }
    
    render() {
      return(
        <ListSection>
          <Header>
            <EditButton onClick={this.handleEditClick}>&#9998;</EditButton>
            <QuestionHead>{`${this.t('components.questionComponent.title')} ${this.props.index}: `}</QuestionHead> 
            {this.props.item.title}
          </Header>
          <Header>{this.t('components.questionComponent.answer')}</Header>
          <List>
              {
                this.props.item.answers.map((item) => {
                return (<ListItem key={item.id}>
                  <Answer item={item}>
                    {
                      this.props.item.exclusive && 
                      <label>                      
                        <RadioButton name={item.id} checked={this.state.selectedAnswer === item.id} onChange={this.handleChange}/>
                        {item.title}
                      </label>                    
                    }
                    {
                      !this.props.item.exclusive && 
                      <label>   
                        <Checkbox name={item.id} defaultValue={false} onChange={this.handleChange}/>
                        {item.title}
                      </label>                    
                    }
                  </Answer>
                </ListItem>);
              })
              }            
          </List>
        </ListSection>    
      );
    }
  }
)