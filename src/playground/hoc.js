
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info section: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponet) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private section. Please do not share</p>}
            <WrappedComponet {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponet) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponet {...props} /> : <p>Please authenticate first to see this message.</p>  }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='Hello World'/>, document.getElementById('App'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='Hello World' />, document.getElementById('App'));