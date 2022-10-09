import Navbar from "./Navbar";
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </article>
      </div>
    </div>
  );
}
