import React from 'react';
import { templates } from 'core/js/reactHelpers';

export default function Text(props) {
  return (
    <div className="component__inner text__inner">
      <templates.header {...props} />
    </div>
  );
}
