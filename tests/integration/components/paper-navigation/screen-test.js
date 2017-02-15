import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-navigation/screen', 'Integration | Component | paper navigation/screen', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-navigation/screen}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-navigation/screen}}
      template block text
    {{/paper-navigation/screen}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
