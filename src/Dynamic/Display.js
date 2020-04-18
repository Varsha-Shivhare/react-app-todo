import React from 'react';

export class Display extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select id="dropdown" onChange={this.handleChange}>
          <option value="Rhea">Rhea</option>
          <option value="Swirly">Swirly</option>
          <option value="Tanisha">Tanisha</option>
        </select>
      </div>
    );
  }
}

export default Display;