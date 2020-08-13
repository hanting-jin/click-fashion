import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Homepage/homepage';
import ShopPage from './pages/Shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFormAuth = null;
  
  componentDidMount(){
    // subscribeFormAuth.
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth){

       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot( snapShot =>{
         this.setState({
           currentUser : {
             id: snapShot.id,
             ...snapShot.data()
           }
          })
          console.log(this.state)
       });
     }

     this.setState({currentUser:userAuth})
    });  
  }

componentWillUnmont(){
  // unsubscribeFormAuth.
  this.unsubscribeFormAuth();
}

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
