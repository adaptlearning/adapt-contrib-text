import { templates } from 'core/js/reactHelpers';

export default function(model, view) {
  return <div className="component__inner text__inner">
    {templates.component(model, view)}
  </div>;
}
