import React from 'react';
import axios from 'axios';
import Contributors from './Contributors';
import mockUsers from './mockUsers';

class ContributorsVM extends React.Component {
  static createViewModel() {
    return React.memo(Contributors);
  }

  static formatContributors(data) {
    return data
      .map((user) => ({
        avatar: user.avatar_url,
        url: user.html_url,
        username: user.login,
      }))
      .sort((a, b) => {
        const prev = a.username.toUpperCase();
        const current = b.username.toUpperCase();

        if (prev < current) return -1;
        if (prev > current) return 1;

        return 0;
      });
  }

  constructor(props) {
    super(props);

    this.Component = ContributorsVM.createViewModel();
    this.contributors = 'https://api.github.com/repos/FCCColumbus/fcc-columbus/contributors';
    this.state = {
      contributors: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchContributors();
  }

  async fetchContributors() {
    if (window.APP.contributors) {
      return this.setState({
        isLoading: false,
        contributors: window.APP.contributors,
      });
    }

    const { data } =
      process.env.NODE_ENV !== 'production' ? mockUsers : await axios.get(this.contributors);

    window.APP.contributors = ContributorsVM.formatContributors(data);

    return this.setState({
      isLoading: false,
      contributors: window.APP.contributors,
    });
  }

  render() {
    return (
      <this.Component isLoading={this.state.isLoading} contributors={this.state.contributors} />
    );
  }
}

export default ContributorsVM;
