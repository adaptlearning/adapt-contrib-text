import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Text from '../templates/text';

let container = null;
beforeEach(() => {
  jest.clearAllMocks();
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Header', () => {
  it('renders the header with title', () => {
    const props = { displayTitle: 'Hello World' };
    act(() => {
      render(<Text {...props} />, container);
    });
    expect(container.textContent).toBe('hi  ');
  });
});

// it('renders with or without a name', () => {
//   act(() => {
//     render(<Text displayTitle='Test' />, container);
//   });
//   expect(container.textContent).toBe('hi  ');

  // act(() => {
  //   render(<Text displayName='Jenny' />, container);
  // });
  // expect(container.textContent).toBe('hi Jenny');

  // act(() => {
  //   render(<Text name='Margaret' />, container);
  // });
  // expect(container.textContent).toBe('hi ');
// });
