import { templates } from 'core/js/reactHelpers';

export default function(view, model) {
  return <div className="component__inner text__inner">
    {templates.component(view, model)}
  </div>;
}
