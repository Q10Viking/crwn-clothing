import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shoppage/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    // 订阅观察用户登录状态变化
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({currentUser:user})
        console.log(user);
    })
}

  componentWillUnmount(){
      //  取消订阅观察变化
      this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );   
  }
}

export default App;
