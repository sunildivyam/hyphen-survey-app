import Utils from '../utils';
import Answer from './answer';

export default class Question {
  constructor(id, title, description, name, exclusive, answers) {     
    this.id = id || Utils.createUUID();
    this.title = title || '';
    this.description = description || '';
    this.name = name || 'MCQ';
    this.exclusive = exclusive || false;
    this.answers = answers || [new Answer()];
  }
}
