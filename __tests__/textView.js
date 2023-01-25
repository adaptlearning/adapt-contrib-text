import TextView from '../js/TextView';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';

describe('TextView', () => {
  let textView;

  beforeEach(() => {
    textView = new TextView();
    textView.model = {
      get: jest.fn().mockReturnValue({
        body: 'This is the body text',
        instruction: 'This is the instruction text',
        displayTitle: 'This is the title'
      }),
      set: jest.fn()
    };
  });

  it('should call the setReadyStatus, setupInview and getInviewElementSelector on postRender and should set isReady on the model to true', () => {
    jest.spyOn(textView, 'setReadyStatus');
    jest.spyOn(textView, 'setupInview');
    jest.spyOn(textView, 'getInviewElementSelector');
    textView.postRender();
    expect(textView.setReadyStatus).toHaveBeenCalled();
    expect(textView.setupInview).toHaveBeenCalled();
    expect(textView.getInviewElementSelector).toHaveBeenCalled();
    expect(textView.model.set).toHaveBeenCalledWith('_isReady', true);
  });

  it('should call setCompletionStatus when getInviewElementSelector returns null', () => {
    textView.model.get.mockReturnValue(null);
    jest.spyOn(textView, 'setCompletionStatus');
    jest.spyOn(textView, 'setupInviewCompletion');
    textView.setupInview();
    expect(textView.setCompletionStatus).toHaveBeenCalled();
    expect(textView.setupInviewCompletion).not.toHaveBeenCalled();
  });

  it('should call setupInviewCompletion when getInviewElementSelector returns a selector', () => {
    jest.spyOn(textView, 'setupInviewCompletion');
    jest.spyOn(textView, 'setCompletionStatus');
    textView.setupInview();
    expect(textView.setupInviewCompletion).toHaveBeenCalledWith('.component__body');
    expect(textView.setCompletionStatus).not.toHaveBeenCalled();
  });

  describe('getInviewElementSelector', () => {
    beforeEach(() => {
      textView.model = {
        get: jest.fn()
      };
    });

    it('should return the selector for the body element when body exists', () => {
      textView.model.get.mockReturnValue('This is the body text');
      expect(textView.getInviewElementSelector()).toEqual('.component__body');
    });

    it('should return the selector for the instruction element when body does not exist and instruction exists', () => {
      textView.model.get
        .mockReturnValueOnce(null)
        .mockReturnValueOnce('This is the instruction text');
      expect(textView.getInviewElementSelector()).toEqual('.component__instruction');
    });

    it('should return the selector for the title element when body and instruction do not exist and title exists', () => {
      textView.model.get
        .mockReturnValueOnce(null)
        .mockReturnValueOnce(null)
        .mockReturnValueOnce('This is the title');
      expect(textView.getInviewElementSelector()).toEqual('.component__title');
    });

    it('should return null when body, instruction and title do not exist', () => {
      textView.model.get
        .mockReturnValueOnce(null)
        .mockReturnValueOnce(null)
        .mockReturnValueOnce(null);
      expect(textView.getInviewElementSelector()).toEqual(null);
    });
  });
});
