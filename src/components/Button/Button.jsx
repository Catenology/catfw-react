// components/Button/Button.jsx
import * as React from 'react';

const Button = props => (<input
  type={props.type}
  value={props.value}
  appearance={props.appearance}
  className={`btn btn-${props.appearance || 'default'} ${props.size || 'sm'} ${props.inverse ? 'inverse' : ''} ${props.fw ? 'fw' : ''}`}
/>);

Button.defaultProps = {
  type: 'button',
  value: 'OK',
  appearance: 'default',
  size: 'sm',
  inverse: false,
  fw: false,
};

Button.propTypes = {
  type: React.PropTypes.string,
  value: React.PropTypes.string,
  appearance: React.PropTypes.string,
  size: React.PropTypes.string,
  inverse: React.PropTypes.boolean,
  fw: React.PropTypes.boolean,
};

export default Button;
