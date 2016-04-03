import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,
  actions: {
    newQuestionFormShow() {
      this.set('newQuestionForm', true);
    },
    newQuestionFormHide() {
      this.set('newQuestionForm', false);
    },
    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('saveQuestion', params);
      this.set('newQuestionForm', false);
      // this.set('content').val("");
      // this.set('author').val("");
      // this.set('notes').val("");
    }
  }
});
