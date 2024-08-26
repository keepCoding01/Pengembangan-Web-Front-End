import React from "react";

class AskMe extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      name: "",
      question: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name.length === 0 || this.state.question.length === 0) {
      return;
    }
    const newQuestion = {
      name: this.state.name,
      question: this.state.question,
      time: Date.now(),
    };
    this.setState((state) => ({
      questions: state.questions.concat(newQuestion),
      name: "",
      question: "",
    }));
  }

  render() {
    let allQuestions = this.state.questions.map((item) => {
      let date = new Date(item.time).toLocaleString();
      return (
        <li className="list-group-item" key={item.time}>
          <span className="badge bg-info text-dark">{date}</span>
          <span className="p-2">
            {" "}
            {item.name}: {item.question}
          </span>
        </li>
      );
    });
    return (
      <div className="container bg-light">
        <div className="row">
          <div className="col-lg-12 p-5">
            <h1 className="display-6 mb-4">Ask Me</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Your Name" name="name" onChange={this.handleChange} value={this.state.name} />
              </div>
              <div className="input-group mb-3">
                <textarea className="form-control" placeholder="Your Question" name="question" onChange={this.handleChange} value={this.state.question}></textarea>
              </div>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </form>
            <ul className="list-group list-group-flash mt-4">{allQuestions}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AskMe;
