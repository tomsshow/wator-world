import React from 'react';
import ReactDOM from 'react-dom';
import shark from '../shark';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<shark />, div);
});