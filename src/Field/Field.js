import React from 'react';

class Field extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.props.onChange}
          placeholder={this.props.name}
        />
      </div>
    );
  }
}

Field.displayName = 'ChloroformField';

export default Field;
