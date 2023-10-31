import React from "react";

const APIDocumentation = () => {
  let dataUrl;

  if (process.env.NODE_ENV === "development") {
    // url local
    dataUrl = "http://localhost:5000/api/docs";
  } else {
    // url production
    dataUrl = process.env.REACT_APP_API_URL + "/api/docs";
  }

  return (
    <div className="docs-container">
      <iframe
        className="frame min-vh-100"
        title="Swagger Documentation"
        src={dataUrl}
        width="100%"
      />
    </div>
  );
};

export default APIDocumentation;
