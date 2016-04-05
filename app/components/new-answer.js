import Ember from 'ember';

export default Ember.Component.extend({
  addAnswerForm: false,
  actions: {
    showAddAnswerForm() {
      this.set('addAnswerForm', true);
    },
    saveAnswer() {
    var params = {
      question: this.get('question'),
      author: this.get('author'),
      content: this.get('content')
    };
    this.sendAction('saveAnswer', params);
    this.set('addAnswerForm', false);
  }
}
});
