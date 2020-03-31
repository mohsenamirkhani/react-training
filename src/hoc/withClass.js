import React from 'react';
const withClass = (ComponentWrapper, className) => {
    return (props) => (
        <div className={className}>
            <ComponentWrapper {...props} />
        </div>
    );
}

export default withClass;