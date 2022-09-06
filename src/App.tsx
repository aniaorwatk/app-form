import React from "react";
import Form from "./component/Form/Form";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Section from "./component/Section/Section";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
      <Form />
      <Section/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
