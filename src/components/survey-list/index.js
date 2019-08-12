import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import { ListSection, List, ListItem, NoData } from './survey-list.style';


export default withTranslation()(
  class SurveyListComponent extends Component {
    constructor(props) {
      super(props);
      this.t = props.t;      
    }

    handleChange = (e) => {
      const selectedId = e.currentTarget.dataset.id;      
      
      if (this.props.items && this.props.items.length) {
        const selectedItem = this.props.items.find(item => item.id === selectedId);        
        typeof this.props.onChange === 'function' && this.props.onChange(selectedItem);
      }      
    }

    render() {
      return (
        <ListSection>
          {/* <Header>{this.t('components.surveyListComponent.title')}</Header> */}
          <List>
            { this.props.items && this.props.items.length && this.props.items.map((item) => {
                return (
                  <ListItem onClick={this.handleChange} key={item.id} data-id={item.id} selected={ this.props.selected && item.id === this.props.selected.id}>
                    <span>{item.title}</span>
                  </ListItem>
                );
              })
            }
            {
              (!this.props.items || !this.props.items.length) &&
              <NoData>{this.t('components.surveyListComponent.nodata')}</NoData>
            }
          </List>          
        </ListSection>
      );
    }
  }
)