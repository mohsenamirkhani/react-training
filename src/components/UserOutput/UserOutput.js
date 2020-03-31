import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';
import DeleteContext from '../../context/delete-context';
import './UserOutput.css';

const userOutput = (props) => {
    let inputElement = useRef(null);

    //this is the alternative way to <DeleteContext.Consumer> 
    //and can be used in other parts of the app
    let deleteContext = useContext(DeleteContext);

    useEffect(() => {
        console.log('[UserOutput]: user Effect For user change');
        // inputElement.current.click();
        console.log(deleteContext);
    }, [props.user])

    useEffect(() => {
        console.log('[UserOutput]: user Effect For The First Time "componentDidMount"');
        return () => {
            console.log('[UserOutput]: For Destory User ==>', props.user)
        }
    }, []);

    return (
        <Aux>
            <p>{props.user.name}</p>
            <p>{props.user.age}</p>
            <DeleteContext.Consumer>
                {(context) => <button
                    className="delete-btn"
                    ref={inputElement}
                    onClick={() => context.deleteHandler(props.user.name)}>delete
            </button>}
            </DeleteContext.Consumer>
        </Aux>
    );
}

userOutput.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }),
    deleteUser: PropTypes.func
}

export default withClass(userOutput, 'user-output');