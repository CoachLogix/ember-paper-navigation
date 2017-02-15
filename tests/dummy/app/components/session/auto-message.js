import Ember from 'ember';
//import AutoMessageMixin from '../../../../mixins/auto-message';

const { Component, computed } = Ember;

export default Ember.Component.extend({
  tagName: '',

  recipientTypes: [
    { name: 'Coach' },
    { name: 'Coachee' },
    { name: 'Admins' },
    { name: 'All attendees' }
  ],

  messageTypes: [{
    name: 'Scheduling Confirmation',
    description: 'Sent when scheduled',
    type: 'session-scheduling-confirmation'
  }, {
    name: 'Upcoming Reminder',
    description: 'Sent before the session',
    type: 'session-reminder',
    delivery: 'before'
  }, {
    name: 'Past Due Notice',
    description: 'Sent when not complete by scheduled date',
    type: 'session-past-due-notice',
    delivery: 'after'
  }, {
    name: 'Follow up',
    description: 'Sent after completed',
    type: 'session-followup',
    delivery: 'after'
  }],

  reminder: computed.equal('selectedMessageType', 'session-reminder'),
  pastDueNotice: computed.equal('selectedMessageType', 'session-past-due-notice'),
  followup: computed.equal('selectedMessageType', 'session-followup'),
  schedulingConfrimation: computed.equal('selectedMessageType', 'session-scheduling-confirmation')
});
