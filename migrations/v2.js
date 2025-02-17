import { describe, whereContent, whereFromPlugin, mutateContent, checkContent, updatePlugin } from 'adapt-migrations';
import _ from 'lodash';

describe('adapt-contrib-text - v2.0.0 to v2.0.1', async () => {
  whereFromPlugin('adapt-contrib-text - from v2.0.0 to v2.0.1', { name: 'adapt-contrib-text', version: '<2.0.1' });
  let course;
  const ariaRegionPath = '_globals._components._text.ariaRegion';
  whereContent('adapt-contrib-text - where missing _globals ariaRegion', async content => {
    course = content.find(({ _type }) => _type === 'course');
    return !_.has(course, ariaRegionPath);
  });
  mutateContent('adapt-contrib-text - add _globals ariaRegion', async () => {
    _.set(course, ariaRegionPath, '');
    return true;
  });
  checkContent('adapt-contrib-text - check _globals ariaRegion added', async () => {
    const isValid = _.has(course, ariaRegionPath)
    if (!isValid) throw new Error(`${ariaRegionPath} not added`);
    return true;
  });
  updatePlugin('adapt-contrib-text - update to v2.0.1', { name: 'adapt-contrib-text', version: '2.0.1', framework: '>=2.0.0' });
});