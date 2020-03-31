import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import withClass from '../../hoc/withClass';
import Aux from '../../hoc/Aux';
import './UserInput.css';

const userInput = (props) => {

    useEffect(() => {
        console.log('[ userInput ]: componentDidMount')
    }, []);

    return (
        <Aux>
            <input className="input" onChange={props.inputChange} />
            <button className="add-btn" onClick={props.addUser}>add</button>
        </Aux>
    );
}

userInput.propTypes = {
    inputChange: PropTypes.func,
    addUser: PropTypes.func
}

export default withClass(userInput, 'user-input');