import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionFormShow() {
      this.set('editQuestionForm', true);
    },
    editQuestionFormHide() {
      this.set('editQuestionForm', false);
    },
    updateQuestion(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('updateQuestion', question, params);
      this.set('editQuestionForm', false);
    }
  }
});
