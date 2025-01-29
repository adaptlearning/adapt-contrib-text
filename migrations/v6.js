import { describe , whereContent, whereFromPlugin, whereToPlugin, mutateContent, checkContent, updatePlugin } from 'adapt-migrations';

function hasKey(object, key) {
  if (!object) return false;
  return Object.hasOwn(object, key);
}

function setObjectPathValue(object, path, value, force = false) {
  if (!object) return;
  const paths = path.split('.');
  const key = paths.pop();
  const target = paths.reduce((o, p) => {
    if (!hasKey(o, p)) o[p] = {};
    return o?.[p];
  }, object);
  if (!force && hasKey(target, key)) return;
  target[key] = value;
}

/**
 * correct v1 schemas - legacy schema correct in v2.0.1
 */
describe('adapt-contrib-text - v4.2.0 to v6.1.3', async () => {
  whereFromPlugin('adapt-contrib-text - from v4.2.0 to v6.1.3', { name: 'adapt-contrib-text', version: '<6.1.3'});
  let course;
  mutateContent('adapt-contrib-text - update _globals ariaRegion', async content => {
    course = content.find(({ _type }) => _type === 'course');
    setObjectPathValue(course, '_globals._components._text.ariaRegion', '');
    delete course?._globals?._text;
    return true;
  });
  checkContent('adapt-contrib-text - check _globals ariaRegion updated', async () => {
    const isValid = !hasKey(course._globals, '_text') && hasKey(course._globals._components._text, 'ariaRegion');
    if (!isValid) throw new Error('_globals ariaRegion not updated');
    return true;
  });
  updatePlugin('adapt-contrib-text - update to v6.1.3', {name: 'adapt-contrib-text', version: '6.1.3', framework: '>=5.19.1'})
});