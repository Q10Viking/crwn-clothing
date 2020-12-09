import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './pages/shoppage/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
class App extends React.Component {

  unsubscribeFromAuth = null
  constructor(){
    super();
    this.state={}
  }

  componentDidMount(){
    // 订阅观察用户登录状态变化
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      console.log("监控用户认证状态",user)
      if(user){
        console.log("获取到用户")
        const userRef = await createUserProfileDocument(user);
        console.log("等待结束")
      }
        // if(user){
        //   console.log("sign out2");
        //  const userRef = await createUserProfileDocument(user);
        //  userRef.onSnapshop(snapshop => {
        //   console.log("sign out3");
        //    this.props.setCurrentUser({
        //       id: user.uid,
        //        ...snapshop
        //    })
        //  })
        // }else{
        //   this.props.setCurrentUser(user)
        // }
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
          <Route path="/signin" render={
              ()=>this.props.currentUser ? 
                  <Redirect to="/" component={HomePage}/>
                  :
                  <SignInAndSignUp/>} />
        </Switch>
      </div>
    );   
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
