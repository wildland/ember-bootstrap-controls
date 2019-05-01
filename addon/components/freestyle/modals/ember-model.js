import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/modals/ember-model';
import { Promise } from 'rsvp';

export default Component.extend({
  layout,
  isBasicOpen: false,
  isAdvancedOpen: false,

  widget: {
    label: '',
    save: function() {
      return true;
    },
    get: function() {
      return false;
    }
  },

  slowWidget: {
    label: '',
    save: function() {
      const delay = 3000;

      return new Promise((resolve) => {
        setTimeout(() => { resolve(true); }, delay);
      });
    },
    get: function() {
      return false;
    }
  },

  actions: {
    toggleModal() {
      this.toggleProperty('isBasicOpen');
    },
    toggleAdvancedModal() {
      this.toggleProperty('isAdvancedOpen');
    },
    beforeSave() {
      return true;
    },
    afterSave() {
      window.alert(`Save successful`);
    },
    afterCancel() {
      window.alert(`Cancel successful`);
    }
  }
});
