import { describe , whereContent, whereFromPlugin, whereToPlugin, mutateContent, checkContent, updatePlugin } from 'adapt-migrations';

function getTextComponents(content) {
  return content.filter(({ _component }) => _component === 'text');
}

function hasKey(object, key) {
  if (!object) return false;
  return Object.hasOwn(object, key);
}

/**
 * framework version not specified in release, so has been omitted
 */
describe('adapt-contrib-text - v1.0.0 to v1.1.0', async () => {
  whereFromPlugin('adapt-contrib-text - from v1.0.0 to v1.1.0', { name: 'adapt-contrib-text', version: '<1.1.0'});
  let components;
  whereContent('adapt-contrib-text - where missing instruction', async content => {
    components = getTextComponents(content).filter(component => !hasKey(component, 'instruction'));
    return Boolean(components.length);
  });
  mutateContent('adapt-contrib-text - add instruction', async () => {
    components.forEach(component => component.instruction = '');
    return true;
  });
  checkContent('adapt-contrib-text - check instruction added', async () => {
    const isValid = components.every(component => hasKey(component, 'instruction'));
    if (!isValid) throw new Error('instruction not added');
    return true;
  });
  updatePlugin('adapt-contrib-text - update to v1.1.0', {name: 'adapt-contrib-text', version: '1.1.0'})
});

/**
 * v1.1.4 - _supportedLayout addition is an editorOnly attribute which cannot be migrated
 */