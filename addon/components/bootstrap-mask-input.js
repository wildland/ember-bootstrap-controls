import Ember from 'ember';
import layout from '../templates/components/bootstrap-mask-input';
import InputableMixin from '../mixins/components/inputable';
import computedActionKey from '../utils/computed-action-key';

const { guidFor } = Ember;

export default Ember.Component.extend(InputableMixin, {
  layout: layout,
  tagName: '',
  classNames: '',
  value: null,
  readonly: null,
  type: null,
  srOnly: null,
  tabindex: 0,
  required: false,

  mask: null,
  placeholderChar: '_',
  placeholder: '',
  keepCharPositions: true,

  guid: Ember.computed.readOnly('_guid'),
  _guid: null,

  keyPress: computedActionKey('key-press'),
  keyUp: computedActionKey('key-up'),
  keyDown: computedActionKey('key-down'),
  focusOut: null,

  inputGuid: Ember.computed('guid', function() {
    return `input-${this.get('guid')}`;
  }),

  hasValue: Ember.computed('value', function() {
    const value = this.get('value');
    return value ? true : false;
  }),

  init() {
    this._super(...arguments);
    const guid = guidFor(this);
    this.set('_guid', guid);
  },

  actions: {
    keyPress: function() {
      this.sendAction('key-press', ...arguments);
    },

    keyUp: function() {
      this.sendAction('key-up', ...arguments);
    },

    keyDown: function() {
      this.sendAction('key-down', ...arguments);
    },
  }
});
