import Ember from 'ember';
import layout from '../../templates/components/modal/modal-body';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {};

export default Ember.Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  tagName: '',

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
