// Higer Order Component:
// Component that renders an other component via a function and passes props down

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is the info: {props.info}</p>
  </div>
);

const withAdminMessage = ( WrappedComponent ) => {
  return (props) => (
    <div>
      { props.admin && <p>This is provate info, dont share!</p> }
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = ( WrappedComponent ) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated
        ? <WrappedComponent {...props}/>
        : <p>Please authenticate...</p>
      }
    </div>
  );
};

// const AdminInfo = withAdminMessage(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="Here you got some dets..." />, document.getElementById('app'));
