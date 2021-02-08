import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = ({uid}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    // console.log(e.target.files[0]);
    const types = ["image/png", "image/jpg", "image/jpeg"];
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setError("Please Upload Images only {png,jpg,jpeg}");
      setFile(null);
    }
  };

  return (
    <form>
      <label htmlFor="uploadfile">
        <input
          id="uploadfile"
          name="uploadfile"
          onChange={changeHandler}
          type="file"
        />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && < ProgressBar uid={uid} file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
