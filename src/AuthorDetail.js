import React, { Component } from "react";
import Modal from "react-responsive-modal";
// Components
import BookTable from "./BookTable";
import Loading from "./Loading";
import BookForm from "./BookForm"

import { connect } from "react-redux";

import { fetchAuthorDetail } from "./redux/actions";

class AuthorDetail extends Component {
  state = {
    open: false
  };

  openModal = () => this.setState({ open: true });

  closeModal = () => this.setState({ open: false });

  componentDidMount() {
    this.props.getAuthor(this.props.match.params.authorID);
  }

  render() {
    const { open } = this.state;
    if (this.props.loading) {
      return <Loading />;
    } else {
      const { author } = this.props;
      const authorName = `${author.first_name} ${author.last_name}`;
      return (
        <div className="author">
          <div>
            <h3>{authorName}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={authorName}
            />
          </div>
          <BookTable books={author.books} />
          <Modal open={open} onClose={this.closeModal} center>
            <BookForm author={author} closeModal={this.closeModal} />
          </Modal>
          <div className="btn btn-secondary" onClick={this.openModal}>
            Add Book
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    author: state.authorState.author,
    loading: state.authorState.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthor: authorID => dispatch(fetchAuthorDetail(authorID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetail);