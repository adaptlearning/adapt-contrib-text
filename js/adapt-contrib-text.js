import Adapt from 'core/js/adapt';
import TextView from './textView';
import TextModel from './textModel';

export default Adapt.register('text', {
  model: TextModel,
  view: TextView
});
