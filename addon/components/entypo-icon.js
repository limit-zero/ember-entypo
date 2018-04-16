import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/entypo-icon';

const EntypoComponent = Component.extend({
  layout,
  tagName: 'span',
  classNames: ['entypo'],
  classNameBindings: ['iconClass'],

  iconClass: computed('name', function() {
    return `icon-${this.get('name')}`;
  }),
});

EntypoComponent.reopenClass({
  positionalParams: ['name'],
});

export default EntypoComponent;
