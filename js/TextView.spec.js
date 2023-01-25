import TextView from './TextView';

describe('TextView', () => {
  let child;

  beforeEach(() => {
    child = new TextView();
    child.model = {
      get: jest.fn().mockReturnValue({
        body: 'This is the body text',
        instruction: 'This is the instruction text',
        displayTitle: 'This is the title'
      })
    };
  });

  it('should call the setupInview and getInviewElementSelector on postRender', () => {
    jest.spyOn(child, 'setupInview');
    jest.spyOn(child, 'getInviewElementSelector');
    child.postRender();
    expect(child.setupInview).toHaveBeenCalled();
    expect(child.getInviewElementSelector).toHaveBeenCalled();
  });
});
