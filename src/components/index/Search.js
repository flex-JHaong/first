import React from "react"
import "./search.css"
class Search extends React.Component {
    constructor() {
        super()
       this.state={
        name:"",
        tagarr:[],
        songlist:[]
      }
    }
    fn(e){
        this.setState({
            name:e.target.value
        })
        if(e.target.value.length>0){
         this.refs.tagul.style.display="none"
        }else{
            this.refs.tagul.style.display="flex"
            this.refs.songul.style.display="none"
        }
    }
    keydown(e){
        if(e.keyCode===13){
            this.$axios.get(this.$api.search+'?keywords='+this.state.name)
            .then(res=>{
                console.log(res)
                this.setState({
                    songlist:res.data.result.songs
                })
            })
            this.refs.songul.style.display="block"
        }
    }
    block(val){
        this.setState({
            name:val
        })
        if(val.length>0){
            this.refs.tagul.style.display="none"
            this.refs.songul.style.display="none"
           }else{
               this.refs.tagul.style.display="flex"
               this.refs.songul.style.display="none"
           }

    }
    componentDidMount(){
        this.$axios.get(this.$api.searchhot)
        .then(res=>{
            console.log(res)
            this.setState({
                tagarr:res.data.result.hots
            })
        })
    }
    render() {
        
        return (<div>
            <div className="inpbox">
            <input  value={this.state.name}  type="text"  onChange={this.fn.bind(this)} onKeyDown={this.keydown.bind(this)} placeholder="请输入关键词"></input>
            </div>
            
            <ul id='tagul' ref="tagul">
                {
                    this.state.tagarr.map((item,index)=>{
                        return (
                            <li onClick={this.block.bind(this,item.first)} key={index}>{item.first}</li>
                        )
                    })
                }
            </ul>
            <ul className="newsong" ref="songul">
                {
                    this.state.songlist.map((item) => {
                        return (
                            <li key={item.id}>
                                <div>
                                    <p>
                                        {item.name}
                                    </p>
                                    <em>
                                        <img src={require("../../assets/image/sqicon.jpg")}></img>
                                        {
                                            item.artists.map((k,ind) => {
                                                {/* console.log(item.song.artists) */}
                                                let sep=item.artists.length>1 && ind !=item.artists.length-1?<i>/</i>:""
                                               
                                                    return (<strong key={k.id}>{k.name}{sep}</strong>)
                                                
                                                



                                            })
                                            
                                        }
                                        { <strong>-{item.name}</strong> }
                                    </em>

                                </div>

                            </li>
                        )
                    })
                }
            </ul>
        </div>)
    }

}
export default Search;