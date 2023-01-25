const AdaptViewMock = require('./adaptView');
export default jest.fn().mockImplementation(() => {
  return Object.assign(AdaptViewMock, {
    attributes: jest.fn(),
    className: jest.fn(),
    renderState: jest.fn(),
    setupInviewCompletion: jest.fn(),
    removeInviewListener: jest.fn(),
    onInview: jest.fn(),
    postRender: jest.fn(),
    remove: jest.fn(),
    setReadyStatus: jest.fn()
  });
});
