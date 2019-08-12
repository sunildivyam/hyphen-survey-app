import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Form, Field, FormGroup, Label, Button, AddButton, Checkbox, Header, FormError } from './question-form.style';
import Answer from '../../models/answer';
import AnswerComponent from '../answer';

export default withTranslation()(
  class QuestionFormComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        item: JSON.parse(JSON.stringify(props.item)),
        errors: []
      }
      this.t = props.t;
    }

    validate = question => {
      const errors = [];
      if (!question.title.trim()) {
        errors.push(this.t('components.questionFormComponent.errors.title'));
      }
      
      question.answers.map((ans, i) => {
        if (!ans.title.trim()) {
          errors.push(`Answer ${i+1} ${this.t('components.questionFormComponent.errors.answer')}`);
        }
      });
      
      if (question.answers.length < 2) {
        errors.push(this.t('components.questionFormComponent.errors.minAnswers'));
      }

      if (question.answers.length > 5) {
        errors.push(this.t('components.questionFormComponent.errors.maxAnswers'));
      }

      return errors;
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const errors = this.validate(this.state.item);
      if (errors.length === 0 && typeof this.props.onSave === 'function') {
        this.props.onSave(this.state.item);
      } else {
        this.setState({errors: errors})
      }
    }

    handleAddAnswerClick = (e) => {
      e.preventDefault();
      this.setState((prevState) => {
        const newState = {...prevState};
        newState.item.answers.push(new Answer());
        return newState;
      })
    }

    handleChange = (e) => {
      e.preventDefault();
      const val = e.target.value;
      const name = e.target.name;
      
      const checked = e.target.checked;
      this.setState((prevState) => {
        const newState = {...prevState};
        if (name === 'exclusive') {
          newState.item.exclusive = checked;
        } else {
          newState.item.title = val;
        }       
        
        return newState;
      })
    }

    handleAnswerChange = (id, title) => {
      const index = this.state.item.answers.findIndex(ans => ans.id === id);
      if (index >= 0) {
        this.setState((prevState) => {
          const newState = {...prevState};
          newState.item.answers[index].title = title;
          return newState;
        })
      }
    }

    handleRemoveAnswer = (id) => {
      const index = this.state.item.answers.findIndex(ans => ans.id === id);
      if (index >= 0) {
        this.setState((prevState) => {
          const newState = {...prevState};
          newState.item.answers.splice(index, 1);
          return newState;
        })
      }
    }
    
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Header>{this.t('components.questionFormComponent.title')}</Header>
          { (this.state.errors.length > 0) && <FormGroup>
               {this.state.errors.map((err, index) => (
                 <FormError key={index}>* {err}</FormError>
               ))}
             </FormGroup>
          }
          <FormGroup>
            <Label>{this.t('components.questionFormComponent.question.label')}*</Label>
            <Field name="title" type="text" 
              onChange={this.handleChange}
              defaultValue={this.state.item.title}
              placeholder={this.t('components.questionFormComponent.question.placeholder')} />
          </FormGroup>
          <FormGroup>
            <label>   
              <Checkbox checked={this.state.item.exclusive} name="exclusive" defaultValue="exclusive" onChange={this.handleChange}/>
              {this.t('components.questionFormComponent.question.exclusive')}
            </label>   
          </FormGroup>
          <FormGroup group>
            <Label>{this.t('components.questionFormComponent.answers')}</Label>
          </FormGroup>
          {
            this.state.item.answers.map((ans) => (
              <FormGroup group key={ans.id}>
                <AnswerComponent item={ans} onChange={this.handleAnswerChange} onRemove={this.handleRemoveAnswer}/>
              </FormGroup>
            ))
          }
          <FormGroup right> 
            <AddButton disabled={this.state.item.answers.length === 5} onClick={this.handleAddAnswerClick}>&#43;</AddButton>
          </FormGroup>
          <FormGroup right> 
            <Button type="submit" mode={'primary'}>{this.t('components.questionFormComponent.saveFormLabel')}</Button>
            <Button onClick={this.props.onCancel} type="button" mode={'primary'}>{this.t('components.questionFormComponent.cancelFormLabel')}</Button>
          </FormGroup>
        </Form>
      )
    }
  }
)