import {
  describe,
  whereContent,
  whereFromPlugin,
  mutateContent,
  checkContent,
  updatePlugin,
  getCourse
} from 'adapt-migrations';
import _ from 'lodash';

describe('adapt-contrib-text - to v2.0.1', async () => {
  let course;
  const ariaRegionPath = '_globals._components._text.ariaRegion';
  whereFromPlugin('adapt-contrib-text - from <v2.0.1', { name: 'adapt-contrib-text', version: '<2.0.1' });
  whereContent('adapt-contrib-text - where missing _globals ariaRegion', async () => {
    course = getCourse();
    return !_.has(course, ariaRegionPath);
  });
  mutateContent('adapt-contrib-text - add _globals ariaRegion', async () => {
    _.set(course, ariaRegionPath, '');
    return true;
  });
  checkContent('adapt-contrib-text - check _globals ariaRegion added', async () => {
    const isValid = _.has(course, ariaRegionPath);
    if (!isValid) throw new Error(`${ariaRegionPath} not added`);
    return true;
  });
  updatePlugin('adapt-contrib-text - update to v2.0.1', { name: 'adapt-contrib-text', version: '2.0.1', framework: '>=2.0.0' });
});