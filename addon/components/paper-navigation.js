import Ember from 'ember';
import layout from 'ember-paper-navigation/templates/components/paper-navigation';
import { ParentMixin } from 'ember-composability-tools';

const { Component, computed } = Ember;

export default Component.extend(ParentMixin, {
  layout,

  backstack: computed(function(){
    return ['home'];
  }),

  currentScreen: computed.alias('backstack.lastObject'),

  registeredScreens: computed.mapBy('childComponents', 'name'),

  registerChild(childComponent) {
    if (!childComponent.get('name')) {
      throw new Error('`paper-navigation.screen` is missing a `name`. This is required.');
    }
   return this._super(childComponent);
  }

});
