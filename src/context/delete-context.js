import React from 'react';

const deleteContext = React.createContext({
    deleteHandler: () => {}
});

export default deleteContext;