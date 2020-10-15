import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {createStructuredSelector} from 'reselect'

import './App.css';

import HomePage from './pages/Homepage/homepage';
import ShopPage from './pages/Shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import CheckoutPage from './pages/Checkout/checkout';


// redux
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors'


class App extends React.Component {


  unsubscribeFormAuth = null;
  
  componentDidMount(){

    const {setCurrentUser} = this.props;

    // subscribeFormAuth.
    /* this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth){

       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot( snapShot =>{
         setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
          })
       });
     }

     setCurrentUser(userAuth);
    });   */
  }

componentWillUnmont(){
  // unsubscribeFormAuth.
  this.unsubscribeFormAuth();
}

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
