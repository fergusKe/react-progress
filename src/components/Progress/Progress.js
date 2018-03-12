import React, { Component } from 'react';

class Progress extends Component {
  state = {
    count: 0,
    target: 0
  }

  componentDidUpdate() {
    const { count, target } = this.state;
    if (count !== target) {
      const diff = target - count > 0 ? 1 : -1;
      if (diff === 0) {
        setTimeout(() => {
          this.setState({
            count: target
          });
        });
      } else {
        setTimeout(() => {
          this.setState({
            count: count + diff
          });
        });
      }
    }
  }

  toggle = () => {
    this.setState({
      target: this.state.target === 0 ? 100 : 0
    });
  }

  render() {
    const { count, target } = this.state;

    return (
      <div className="container mt-5">
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: `${String(target)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            {`${String(count)}%`}
          </div>
        </div>
        <button type="button" className="mt-2 btn btn-primary" onClick={this.toggle}>toggle</button>
      </div>
    );
  }
}

export default Progress;
