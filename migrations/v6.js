import {
  describe,
  whereContent,
  whereFromPlugin,
  mutateContent,
  checkContent,
  updatePlugin,
  getCourse,
  testStopWhere,
  testSuccessWhere
} from 'adapt-migrations';
import _ from 'lodash';

/**
 * correct v1 schemas - legacy schema correct in v2.0.1
 */
describe('adapt-contrib-text - v4.2.0 to v6.1.3', async () => {
  let course;
  const incorrectAriaRegionPath = '_globals._text.ariaRegion';
  const ariaRegionPath = '_globals._components._text.ariaRegion';

  whereFromPlugin('adapt-contrib-text - from v4.2.0 to v6.1.3', { name: 'adapt-contrib-text', version: '>= 4.2.0 <6.1.3' });

  whereContent('adapt-contrib-text - where missing correct _globals ariaRegion', async () => {
    course = getCourse();
    return !_.has(course, ariaRegionPath);
  });

  mutateContent('adapt-contrib-text - update _globals ariaRegion', async () => {
    if (!_.has(course, ariaRegionPath)) _.set(course, ariaRegionPath, _.get(course, incorrectAriaRegionPath) || '');
    _.unset(course, incorrectAriaRegionPath);
    return true;
  });

  checkContent('adapt-contrib-text - check _globals ariaRegion updated', async () => {
    const isValid = !_.has(course, incorrectAriaRegionPath) && _.has(course, ariaRegionPath);
    if (!isValid) throw new Error(`${ariaRegionPath} not added`);
    return true;
  });

  updatePlugin('adapt-contrib-text - update to v6.1.3', { name: 'adapt-contrib-text', version: '6.1.3', framework: '>=5.19.1' });

  testSuccessWhere('correct version with empty correct course globals', {
    fromPlugins: [{ name: 'adapt-contrib-text', version: '6.1.2' }],
    content: [
      { _type: 'course', _globals: { _components: { _text: {} } } }
    ]
  });

  testSuccessWhere('correct version with incorrect course globals', {
    fromPlugins: [{ name: 'adapt-contrib-text', version: '6.1.2' }],
    content: [
      { _type: 'course', _globals: { _text: { ariaRegion: 'Incorrect course globals' } } }
    ]
  });

  testSuccessWhere('correct version with empty incorrect course globals', {
    fromPlugins: [{ name: 'adapt-contrib-text', version: '6.1.2' }],
    content: [
      { _type: 'course', _globals: { _text: {} } }
    ]
  });

  testStopWhere('correct version with correct course globals', {
    fromPlugins: [{ name: 'adapt-contrib-text', version: '6.1.2' }],
    content: [
      { _type: 'course', _globals: { _components: { _text: { ariaRegion: '' } } } }
    ]
  });

  testStopWhere('incorrect version', {
    fromPlugins: [{ name: 'adapt-contrib-text', version: '6.1.3' }]
  });
});
