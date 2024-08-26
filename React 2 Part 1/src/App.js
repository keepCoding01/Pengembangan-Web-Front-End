import { Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import Main from "./page/Main";
import About from "./page/About";
import Layout from "./layout/Layout";
import GuestBook from "./page/GuestBook";
import FAQ from "./page/FAQ";
import AskMe from "./page/AskMe";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="guest-book" element={<GuestBook />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="ask-me" element={<AskMe />} />
          </Route>
        </Routes>
      </Fragment>
    );
  }
}

export default App;
