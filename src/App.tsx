import React, { useState } from "react";
import "./App.css";
import CopyButton from "./component/CopyButton";

function App() {
  const [data, setData] = useState({
    start: "",
    end: "",
    content: "",
  });
  const [copytext, setCopytext] = useState("");
  const [copyflag, setCopyflag] = useState(false);
  const handleClick = () => {
    setCopytext(data.start + " ~ " + data.end + " " + data.content);
    setCopyflag(true);
  };

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setCopyflag(false);
  };

  return (
    <div className="App">
      <div>
        <input
          type="date"
          onChange={handleChange}
          name="start"
          value={data.start}
        />{" "}
        ~{" "}
        <input
          type="date"
          onChange={handleChange}
          value={data.end}
          name="end"
        />
        <input
          type="text"
          onChange={handleChange}
          value={data.content}
          name="content"
        />
      </div>
      <div>
        HI!!!{" "}
        <CopyButton btnValue="Copy" copytext={copytext} onCopy={handleClick} />
      </div>
      <div>
        <textarea></textarea>
      </div>
    </div>
  );
}

export default App;
