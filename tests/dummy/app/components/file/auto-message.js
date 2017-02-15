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
    description: 'Sent before the file is due',
    type: 'file-reminder',
    delivery: 'before'
  }, {
    name: 'Past Due Notice',
    description: 'Sent when not complete by due date',
    type: 'file-past-due-notice',
    delivery: 'after'
  }]
});
