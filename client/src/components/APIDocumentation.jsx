import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const APIDocumentation = () => {
  return (
    <div>
      <SwaggerUI
        url="/swagger.json"
      />
    </div>
  );
};

export default APIDocumentation;
