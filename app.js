import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

export default class App extends Component { 

  render() {
    return (
      <div className="surveysapp">
        <I18nextProvider i18n={i18n}>
            <p>Hello Hyphen</p>
        </I18nextProvider>
      </div>
    );
  }
}