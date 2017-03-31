import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),

  firstName: DS.attr('string'),
  suffix: DS.attr('string'),
  lastName: DS.attr('string'),

  fullName: Ember.computed('firstName', 'suffix', 'lastName', function(){
    return `${this.get('firstName')} ${this.get('suffix') ? this.get('suffix') + '' : ''} ${this.get('lastName')}`
  })
});
