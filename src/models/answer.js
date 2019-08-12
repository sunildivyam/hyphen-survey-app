import Utils from '../utils';

export default class Answer {
  constructor(id, title, correctAnswer) { 
    this.id = id || Utils.createUUID();
    this.title = title || '';
    this.correctAnswer = this.correctAnswer || false;
  }
}
