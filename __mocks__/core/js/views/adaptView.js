const BackboneMock = require('backbone');
export default jest.fn().mockImplementation(() => {
  return Object.assign(Object.create(BackboneMock.prototype), {
    preRender: jest.fn(),
    postRender: jest.fn(),
    render: jest.fn(),
    changed: jest.fn(),
    updateViewProperties: jest.fn(),
    setReadyStatus: jest.fn()
  });
});
