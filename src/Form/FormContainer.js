import FormComponent from "./FormComponent";
import { connect } from "react-redux";

const mapPropsToState = state => ({});
const mapDispatchToState = dispatch => ({ dispatch });

const FormContainer = connect(
  mapPropsToState,
  mapDispatchToState
)(FormComponent);

export default FormContainer;
