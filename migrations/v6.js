import { describe , whereContent, whereFromPlugin, whereToPlugin, mutateContent, checkContent, updatePlugin } from 'adapt-migrations';

function hasKey(object, key) {
  if (!object) return false;
  return Object.hasOwn(object, key);
}

/**
 * correct v1 schemas - legacy schema correct in v2.0.1
 */
describe('adapt-contrib-text - v4.2.0 to v6.1.3', async () => {
  whereFromPlugin('adapt-contrib-text - from v4.2.0 to v6.1.3', { name: 'adapt-contrib-text', version: '<6.1.3'});
  let course;
  whereContent('adapt-contrib-text - where incorrect _globals ariaRegion nesting', async content => {
    course = content.find(({ _type }) => _type === 'course');
    return hasKey(course?._globals, '_text');
  });
  mutateContent('adapt-contrib-text - update _globals ariaRegion', async () => {
    if (!course._globals) course._globals = {};
    if (!course._globals._components) course._globals._components = {};
    if (!course._globals._components._text) course._globals._components._text = {};
    course._globals._components._text.ariaRegion = course?._globals?._text?.ariaRegion ?? '';
    delete course._globals._text;
    return true;
  });
  checkContent('adapt-contrib-text - check _globals ariaRegion updated', async () => {
    const isValid = !hasKey(course._globals, '_text') && hasKey(course._globals._components._text, 'ariaRegion');
    if (!isValid) throw new Error('_globals ariaRegion not updated');
    return true;
  });
  updatePlugin('adapt-contrib-text - update to v6.1.3', {name: 'adapt-contrib-text', version: '6.1.3', framework: '>=5.19.1'})
});