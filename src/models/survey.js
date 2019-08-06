import Utils from '../utils/utils';

export default class Survey {
  constructor(id, title, description, active, questions, authorId) {     
    this.id = id || Utils.createUUID();
    this.title = title || '';
    this.description = description || '';    
    this.active = active || false;
    this.questions = questions || [];
    this.authorId = authorId || Utils.createUUID(); // This should refer to the actual Logged in User ID.
  }
}
