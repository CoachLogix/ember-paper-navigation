import Ember from 'ember';
import layout from 'ember-paper-navigation/templates/components/paper-navigation/container';

const { Component } = Ember;

export default Component.extend({
  layout,

  transitionEffect: null,

  linkTo(name) {
    this.transition(name, null);
  },

  goToScreen(name) {
    this.transition(name, 'toLeft');
  },

  transition(name, effect) {
    this.set('transitionEffect', effect);
    let screenExists = this.get('navigation.registeredScreens').includes(name);
    if (!screenExists) {
      throw `'paper-navigation' tried to transition to a screen called ${name} which is not defined. Did you forget to add it?'`;
    } else {
      let backstack = this.get('navigation.backstack');
      backstack.pushObject(name);
    }
  },

  goBack() {
    this.set('transitionEffect', 'toRight');
    let backstack = this.get('navigation.backstack');
    backstack.removeObject(backstack.get('lastObject'));
  }
});
