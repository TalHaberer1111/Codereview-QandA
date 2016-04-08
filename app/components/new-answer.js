import Ember from 'ember';

export default Ember.Component.extend({
  addAnswerForm: false,
  actions: {
    showAddAnswerForm() {
      this.set('addAnswerForm', true);
    },
    saveAnswer() {
    var params = {
      author: this.get('author'),
      content: this.get('content')
    };
    this.set('addAnswerForm', false);
    this.sendAction('saveAnswer', params);
  }
}
});
