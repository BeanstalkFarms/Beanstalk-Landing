import { loadSnapshot } from './snapshot';

const SPACE    = `beanstalkdao.eth`;
const PROPOSAL = `0xe47741c4bfa4ac97ad23bbec0db8b9a5f2efc3e1737b309476d90611698193f4`

test('returns data', () => {
  return loadSnapshot(SPACE, PROPOSAL).then(result => {
    expect(result).toBeDefined();
  });
});