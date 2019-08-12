import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Field, EditButton, RemoveButton, ButtonPanel, AnswerSection } from './answer.style';

export default withTranslation()(
  class AnswerComponent extends Component {
    constructor(props) {
      super(props);
      this.t = props.t;
      this.state = {
        isEditMode: false
      }      
    }

    handleFocus = (e) => {
      e.preventDefault();
      this.setState({isEditMode: true});
    }
    handleBlur = (e) => {
      e.preventDefault();
      this.setState({isEditMode: false});
    }

    handleChange = (e) => {
      e.preventDefault();
      typeof this.props.onChange === 'function' && this.props.onChange(this.props.item.id, e.target.value);
    }

    handleEditClick = (e) => {
      e.preventDefault();
      const inputEl = document.getElementById(this.props.item.id);
      inputEl && inputEl.focus();
    }
    
    handleRemoveAnswer = (e) => {
      e.preventDefault();
      typeof this.props.onRemove === 'function' && this.props.onRemove(this.props.item.id);
    }
    render() {
      return (
        this.props.item && <AnswerSection>
          <Field type="text" 
          placeholder={this.t('components.answerComponent.placeholder')}
          id={this.props.item.id}
          defaultValue={this.props.item.title}
          isEditMode={this.state.isEditMode}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}/>
          {!this.state.isEditMode && <ButtonPanel>
            <EditButton onClick={this.handleEditClick}>&#9998;</EditButton>
            <RemoveButton onClick={this.handleRemoveAnswer}>&#215;</RemoveButton>
          </ButtonPanel>}
        </AnswerSection>
      )
    }
  }
)