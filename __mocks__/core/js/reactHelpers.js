import React from 'react';
import Header from 'core/templates/header';

export const templates = {
  header: jest.fn((props) => {
    return <Header {...props} />;
  })
};

export const prefixClasses = jest.fn((classNamePrefixes, classNames) => {
  return classNames.map(className => `${classNamePrefixes}-${className}`).join(" ");
});

export const compile = jest.fn((template, props) => {
  return template;
});
