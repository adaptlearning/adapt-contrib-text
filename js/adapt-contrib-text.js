import Adapt from 'core/js/adapt';
import TextView from './TextView';
import ComponentModel from 'core/js/models/ComponentModel';

export default Adapt.register('text', {
  model: class TextModel extends ComponentModel {},
  view: TextView
});
