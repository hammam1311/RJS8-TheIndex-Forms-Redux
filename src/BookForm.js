import React, { Component } from "react";
import { connect } from "react-redux";
import { postBook, resetErrors } from "./redux/actions/index";


class BookForm extends Component {
  state = {
    title: "",
    color: "",
    authors: [this.props.author.id],
  }

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  submitBook = event => {
    event.preventDefault();
    this.props.postBook(this.state, this.props.closeModal);
  };

  textChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    let colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "black",
      "white",
      "gray"
    ].map(color => <option value={color}>{color}</option>)

    const { errors } = this.props;
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitBook}>
          {!!errors.length && (
            <div className="alert alert-danger" role="alert">
              {errors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.textChangeHandler} />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Color</span>
            </div>
            <select className="form-control" name="color" value={this.state.color} onChange={this.textChangeHandler}>{colors}</select>
          </div>

          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errorsState.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postBook: (newBook, closeModal) =>
      dispatch(postBook(newBook, closeModal)),
    resetErrors: () => dispatch(resetErrors())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BookForm);

