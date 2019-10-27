import { MainContainer } from '../MainContainer';

describe('MainContainer', () => {
  it('should render', () => {
    const instance = new MainContainer({ children: '' });

    expect(instance.render()).toBeTruthy();
  });
});
