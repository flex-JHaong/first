import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Myhead from "./index/Myhead"


class Index extends React.Component {
    constructor() {
        super()
        
    }
    
    render() {

        return (<div>
            <Myhead></Myhead>
            <main>
                <Switch>
                    {/* <Route path="/index/recommend" component={Recommend}></Route>
                    <Route path="/index/hot" component={Hot}></Route>
                    <Route path="/index/search" component={Search}></Route>
                    <Redirect to="/index/recommend"></Redirect> */}
                    {
                      this.props.children.map((item,index)=>{
                          if(item.path==="*"){
                            return (<Redirect key={index} path={item.path} to={item.redirect}></Redirect>)
                          }else{
                            return (<Route key={index} path={item.path} component={item.component}></Route>)
                          }
                      })
                    }
                </Switch>
            </main>

        </div>)
    }

}
export default Index;