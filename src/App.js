import React from 'react';
import "./App.css"
import './remScale'
import router from "./router"
import { BrowserRouter, Route, Switch } from "react-router-dom"

class App extends React.Component {
  constructor() {
    super()

  }
  renderComponent(r,p) {
    return <r.component {...p}  children={r.children} />
    // 判断哪些路由需要登录
    // if(r.needlogin){
    // //    判断有没有登录信息
    //     if(localStorage.getItem('userinfo')){
    //         return <r.component/>
    //     }else{
    //         return <Redirect to="/login"/>
    //     }
    // }else{
    //     return <r.component />
    // }

  }
  render() {

    return (
      <BrowserRouter>

        <Switch>

          {
            router.map((item, index) => {
              return <Route key={index} path={item.path} render={(props)=>(this.renderComponent(item,props))}></Route>
            })
          }
          
        </Switch>

      </BrowserRouter>
    )
  }

}

export default App;
