import Slack, { handleInputRef, GetUsers } from '../Slack';

describe('Slack', () => {
  it('should render', () => {
    const instance = Slack();

    expect(instance).toBeTruthy();
  });
});

describe('handleInputRef', () => {
  it('should handle ref', () => {
    const result = handleInputRef({ value: null }, { createSlackInvite: { status: true } });

    expect(result).toEqual({ value: '' });
  });
});

describe('GetUsers', () => {
  it('should render', () => {
    const instance = GetUsers();

    expect(instance).toBeTruthy();
  });
});
