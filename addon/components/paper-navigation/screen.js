import Ember from 'ember';
import layout from 'ember-paper-navigation/templates/components/paper-navigation/screen';
import { ChildMixin } from 'ember-composability-tools';

const { Component, computed } = Ember;

export default Ember.Component.extend(ChildMixin, {
  layout,

  active: computed('name', 'parentComponent.currentScreen', function() {
    return this.get('name') === this.get('parentComponent.currentScreen');
  })
});
