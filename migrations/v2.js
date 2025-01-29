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

describe('adapt-contrib-text - v2.0.0 to v2.0.1', async () => {
  whereFromPlugin('adapt-contrib-text - from v2.0.0 to v2.0.1', { name: 'adapt-contrib-text', version: '<2.0.1'});
  let course;
  whereContent('adapt-contrib-text - where missing _globals ariaRegion', async content => {
    course = content.find(({ _type }) => _type === 'course');
    return !hasKey(course?._globals?._components?._text, 'ariaRegion');
  });
  mutateContent('adapt-contrib-text - add _globals ariaRegion', async () => {
    setObjectPathValue(course, '_globals._components._text.ariaRegion', '');
    return true;
  });
  checkContent('adapt-contrib-text - check _globals ariaRegion added', async () => {
    const isValid = hasKey(course._globals._components._text, 'ariaRegion');
    if (!isValid) throw new Error('_globals ariaRegion not added');
    return true;
  });
  updatePlugin('adapt-contrib-text - update to v2.0.1', {name: 'adapt-contrib-text', version: '2.0.1', framework: '>=2.0.0'})
});