import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,
  actions: {
    newQuestionFormShow() {
      this.set('newQuestionForm', true);
    },
    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
        answer: this.get('answer')
      };
      this.set('newQuestionForm', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
