import components from 'core/js/components';
import TextView from './TextView';
import TextModel from './TextModel';

export default components.register('text', {
  model: TextModel,
  view: TextView
});
