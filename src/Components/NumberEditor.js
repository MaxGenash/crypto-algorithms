import _ from 'lodash';
import {findDOMNode} from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';

function isInvalidFloat(value, min = null, max = null) {
  if (value === null || value === undefined)
    return false;

  if (
    typeof value !== 'number' ||
    isNaN(value) ||
    !isFinite(value) ||
    typeof min === 'number' && value < min ||
    typeof max === 'number' && value > max
  ) {
    return true;
  }
}

class NumberEditor extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      value: Number.isNaN(Number.parseFloat(props.value)) ? '' : Number.parseFloat(props.value)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.state.value, nextProps.value)) {
      this.setState({
        value: Number.isNaN(Number.parseFloat(nextProps.value)) ? '' : Number.parseFloat(nextProps.value)
      })
    }
  }

  _onChangeHandler(e) {
    const target = e.target;
    const valueAsNumber = parseFloat(target.value); // Edge doesn't support "target.valueAsNumber"
    let nextVal;
    if (target.value === '' && target.validity.valid) // Invalid number set empty string and valid=false to event
      nextVal = null;
    else if (isInvalidFloat(valueAsNumber))
      nextVal = '';
    else
      nextVal = valueAsNumber;

    this.setState({value: nextVal});
    this.props.onChange(nextVal);
  }

  render() {
    return (
      <input
        step="any"
        {..._.omit(this.props, 'value')}
        value={this.state.value}
        type="number"
        ref="input"
        onChange={this._onChangeHandler.bind(this)}
      />
    );
  }
}

export default NumberEditor;
