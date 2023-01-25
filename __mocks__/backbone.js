export default {
  View: jest.fn().mockImplementation(() => {
    return {
      listenTo: jest.fn(),
      set: jest.fn(),
      render: jest.fn(),
      preRender: jest.fn(),
      postRender: jest.fn(),
      setupOnScreenHandler: jest.fn(),
      addChildren: jest.fn(),
      toggleVisibility: jest.fn(),
      toggleHidden: jest.fn(),
      onIsCompleteChange: jest.fn(),
      changed: jest.fn(),
      updateViewProperties: jest.fn()
    };
  })
};
