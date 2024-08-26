import { FiBookmark, FiThumbsUp } from "react-icons/fi";
import { FaBookmark, FaThumbsUp } from "react-icons/fa";
import React from "react";

class CatalogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.item[0],
      author: this.props.item[1],
      publisher: this.props.item[2],
      year: this.props.item[3],
      bookmark: Math.random() > 0.8,
      likes: Math.floor(Math.random() * 11),
      liked: false,
    };
    this.check_bookmark = this.check_bookmark.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
  }

  check_bookmark() {
    this.setState((state) => {
      return { bookmark: !state.bookmark };
    });
  }

  toggleLike() {
    this.setState((state) => {
      return {
        liked: !state.liked,
        likes: state.liked ? state.likes - 1 : state.likes + 1,
      };
    });
  }

  render() {
    return (
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title title">{this.state.title}</h5>
          <p className="card-text author">{this.state.author}</p>
          <p className="card-text text-muted publisher">
            {this.state.publisher}
            <small className="year">{this.state.year}</small>
          </p>
        </div>
        <div className="card-footer text-muted d-flex">
          <p className="me-3" onClick={this.toggleLike} style={{ cursor: "pointer" }}>
            {this.state.liked ? <FaThumbsUp /> : <FiThumbsUp />} {this.state.likes} like(s)
          </p>
          <p className="flex-grow-1 text-start">{this.state.bookmark ? "Bookmark!" : ""}</p>
          <p className="text-end" onClick={this.check_bookmark} style={{ cursor: "pointer" }}>
            {this.state.bookmark ? <FaBookmark /> : <FiBookmark />}
          </p>
        </div>
      </div>
    );
  }
}

export default CatalogItem;
