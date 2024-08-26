import React, { Fragment } from "react";

class Main extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <section className="row">
            <div className="col-12">
              <input className="form-control form-control-lg" type="text" placeholder="Search" id="keyword" name="search" />
            </div>
            <div className="col-12 mt-3">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="filter" id="filter_name" checked />
                <label className="form-check-label" for="filter_name">
                  Title
                </label>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Main;
