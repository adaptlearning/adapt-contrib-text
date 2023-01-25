import React from 'react';
import Text from '../templates/text';
import { act } from 'react-dom/test-utils';
import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals';
import { unmountComponentAtNode, render } from 'react-dom';

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

describe('Rendering a text component', () => {
  it('should render the text components body', () => {
    const body = 'test body text';
    const props = {
      body
    };
    act(() => {
      render(<Text {...props} />, container);
    });
    expect(container.textContent).toBe(body);
  });

  it('should render the text components instructions', () => {
    const instruction = 'test instructions';
    const props = {
      instruction
    };
    act(() => {
      render(<Text {...props} />, container);
    });
    expect(container.textContent).toBe(instruction);
  });

  it('should render the text components mobile instructions', () => {
    const mobileInstruction = 'mobileInstruction';
    const props = {
      mobileInstruction
    };
    act(() => {
      render(<Text {...props} />, container);
    });
    expect(container.textContent).toBe(mobileInstruction);
  });

  it('should not render any text when there is no body text, display title or sized instruction set', () => {
    const _id = 'text component';
    const props = {
      _id
    };
    act(() => {
      render(<Text {...props} />, container);
    });
    expect(container.textContent).toBe('');
  });
});
