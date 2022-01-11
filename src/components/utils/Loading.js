import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div style= { { minHeight: '100vh' } } className="d-flex flex-row justify-content-center align-items-center w-100">
        <img style={{ height: '20vh' }} src="https://www.swissfilms.ch/build/images/loading.gif" alt="" />
      </div>
    );
  }
}
