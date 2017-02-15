import Ember from 'ember';

export default Ember.Component.extend({
  recipientTypes: [
    { name: 'Coach' },
    { name: 'Coachee' },
    { name: 'Admins' },
    { name: 'All attendees' }
  ],

  messageTypes: [{
    name: 'Upcoming Reminder',
    description: 'Sent before the form is due',
    type: 'form-reminder',
    delivery: 'before'
  }, {
    name: 'Past Due Notice',
    description: 'Sent when not complete by due date',
    type: 'form-past-due-notice',
    delivery: 'after'
  }]

});
