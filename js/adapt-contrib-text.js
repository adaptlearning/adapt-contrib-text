import Adapt from 'core/js/adapt';
import TextView from './TextView';
import TextModel from './TextModel';

export default Adapt.register('text', {
  model: TextModel,
  view: TextView
});
