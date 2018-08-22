import React from 'react';
import './Form.css';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);

    this.state = {shouldSubmit: false};

    // We want to be sure that children is always an array
    // so that we don't have to do manual length checks
    // each time we want to iterate through it.
    let children = this.props.children;
    if (children && !children.length) children = [children];

    // Initialize the state using the name props of the children.
    // NOTE: if a child isn't a Form as provided by the
    // react-redux-chloroform library, or if the child doesn't
    // have a name property, its value will not be submitted
    // to the actionCreator that is attached to the form.
    this.state.formData = children.reduce((agg, child) => {
      if (child.type.displayName === 'ChloroformField' && child.name)
        agg[child.name] = '';
      return agg;
    }, {});

    // Inject props into the Field components that are passed as children
    // of the Form so that those Fields can appropriately interact
    // with the Form's state
    this.ChloroformFields = React.Children.map(
      children,
      child =>
        child.type.displayName === 'ChloroformField'
          ? React.cloneElement(child, {
              onChange: e =>
                this.handleChange(child.props.name, e.target.value),
            })
          : child,
    );
  }

  submit(e) {
    e.preventDefault();
    this.setState({...this.state, shouldSubmit: true});
  }

  componentDidUpdate() {
    if (this.state.shouldSubmit) {
      this.props.dispatch(this.props.action(this.state.formData));
      this.resetForm();
    }
  }

  resetForm() {
    const formData = {};
    for (let key in this.state.formData) formData[key] = '';
    this.setState({shouldSubmit: false, formData});
  }

  // When an input is changed, will update the state.formData to
  // reflect the new value of the input.
  handleChange(stateProp, newValue) {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [stateProp]: newValue,
      },
    });
  }

  render() {
    const {className, submitButtonText} = this.props;

    return (
      <form className={className}>
        <div>
          {this.ChloroformFields}
          <button onClick={this.submit}>
            {submitButtonText ? submitButtonText : 'Submit'}
          </button>
        </div>
      </form>
    );
  }
}

export default FormComponent;
