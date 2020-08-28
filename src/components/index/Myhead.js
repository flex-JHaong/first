import React from "react"
import { withRouter } from 'react-router-dom'
import "./myhead.css"
class Myhead extends React.Component {
    constructor() {
        super()
       
    }
   

   
    render() {
        
        return (<div>
            <header>
                <p>优音乐</p>
                <div>
                    下载APP
                </div>
            </header>
            <nav>
                <ul>
                    <li onClick={()=>(this.props.history.push('/recommend'))}>推荐</li>
                    <li onClick={()=>(this.props.history.push('/hot'))}>热歌榜</li>
                    <li onClick={()=>(this.props.history.push('/search'))}>搜索</li>
                </ul>
            </nav>
        </div>)
    }

}
export default withRouter(Myhead);