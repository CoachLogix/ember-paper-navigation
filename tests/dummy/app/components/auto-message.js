import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({

  provider: 'email',

  timeUnits: ['minutes', 'hours', 'days', 'weeks'],

  deliveryTime: computed(function() {
    return {
      unit: "hour",
      value: 1
    };
  }),

  emailProvider: computed.equal('provider', 'email'),
  smsProvider: computed.equal('provider', 'sms'),

  asyncFilesMock: [0,1,2,3,4,5,6]
});
