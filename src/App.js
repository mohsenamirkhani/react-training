import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput/UserInput';
import ListOfOutputs from './components/ListOfOutputs/ListOfOutputs';
import DeleteContext from './context/delete-context';

class App extends Component {

  state = {
    users: [
      { name: 'mohsen', age: 27 },
      { name: 'mehdi', age: 37 },
    ],
    input: '',
    counter: 0
  }

  //this is alternative way for <DeleteContext.Provider>
  //and it can be used in other parts of the app
  static contextType = DeleteContext;

  constructor(props) {
    super(props);
    /************** First Step Of Component Creation ***************/
    //Do: initiate app state and basic initializations
    //Don't: Cause Side-Effects
    console.log("[App.js]: constructor", "[Creation]: 1st Step");
  }

  static getDerivedStateFromProps(props, state) {
    /************** 2nd Step Of Component Creation ****************/
    /************** 1nd Step Of Component Update ****************/
    //important: can't be used if "the state" is not initiated
    //Do: change "the state" based on the props changes
    //Don't: Cause Side-Effects
    console.log("[App.js]: getDerivdStateFromProps", "[Creation]: 2st Step")
    console.log("[App.js]: getDerivdStateFromProps", "[Update]: 1st Step")
    return state;
  }

  shouldComponentUpdate(props, state) {
    /*************** 2nd Step Of Component Update **************/
    //Important: we can use this state to optimize the app performance
    //Do: return true if the update should continue and false if it shouldn't
    //Don't: Cause Side-Effects
    console.log("[App.js]: shouldComponentUpdate", "[Update]: 2st Step")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    /************ 5th Step Of Component Update ***********/
    //Do: Last-minute DOM ops.
    //Don't: Cause Side-Effect
    console.log("[App.js]: getSnapshotBeforeUpdate", "[Update]: 5st Step")
    return { info: 'informations like page state' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /*********** 6th Step Of Component Update ************/
    //Importatn: signiture can take no arguments if "getSnapshotBeforeUpdate"
    //           returns null
    //Do: Cause-Side-Effects [ be aware of infinite loop for http calls ]
    //Don't: Update State
    console.log("[App.js]: componentDidUpdate", "[Update]: 6st Step")
  }

  componentDidMount() {
    /************** 5th Step Of Component Creation ****************/
    //Do: Cause Side-Effects (like http requests)
    //Don't: Update State (trigger re-render)
    console.log("[App.js]: componentDidMount", "[Creation]: 5st Step");


    //the below code is howw to use contextType insted of <DeleteContex.Provider>
    //this.context.deleteHandler = this.deleteUser;
    console.log("context: ", this.context)
  }

  componentWillUnmount() {
    //Important: This lifecycle happens just before the component Destroy
    console.log("[App.js]: componentWillUnmount", "Component Will Destroys")
  }

  inputChange = (event) => {
    const inputValue = event.target.value;
    this.setState((prevState, props) => {
      return {
        input: inputValue,
        counter: prevState.counter + 1
      }
    })
  }

  addUser = () => {
    if (this.state.input !== '') {
      if (!this.state.users.find(u => u.name === this.state.input)) {
        const user = { name: this.state.input, age: 27 }
        const customUsers = this.state.users.slice();
        customUsers.push(user);
        this.setState({
          users: customUsers
        });
      } else {
        confirm('repetetivve name!!')
      }
    }
  }

  deleteUser = (name) => {
    const customUsers = this.state.users.slice();
    customUsers.splice(customUsers.indexOf(customUsers.find(u => u.name === name)), 1);
    this.setState({
      users: customUsers
    })
  }

  render() {
    /****************** 3th Step in Component Creation and Component Update ******************/
    /****************** Now For 4th step of Component Creation its ****** 
     ****************** time for the child components to be rendered ****/
    console.log("[App.js]: render", "[Creation]: 3st Step")
    return (
      <div className="App">
        <UserInput addUser={this.addUser} inputChange={(event) => this.inputChange(event)} />
        <DeleteContext.Provider value={{ deleteHandler: this.deleteUser }}>
          <ListOfOutputs users={this.state.users} />
        </DeleteContext.Provider>

      </div>
    );
  }
}

export default App;
