import React, { Component } from 'react';
import UserOutput from '../UserOutput/UserOutput'

class ListOfOutputs extends Component {

  componentDidMount() {
    console.log('[ ListOfOutputs ]: componentDidMount')
  }

  render() {
    return this.props.users.map((e, index) => {
      return <UserOutput user={e} key={e.name} />
    })
  }
}

export default ListOfOutputs;