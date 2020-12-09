import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shoppage/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
class App extends React.Component {

  unsubscribeFromAuth = null


  componentDidMount(){
    // 订阅观察用户登录状态变化
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
        if(user){
         const userRef = await createUserProfileDocument(user);
         userRef.onSnapshop(snapshop => {
           this.props.setCurrentUser({
             currentUser: {
               id: user.uid,
               ...snapshop
             }
           })
         })
        }else{
          this.props.setCurrentUser({
            currentUser:null
          })
        }
    })
}

  componentWillUnmount(){
      //  取消订阅观察变化
      this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );   
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
