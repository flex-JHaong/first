import React from "react"
import './hot.css'

class Hot extends React.Component {
    constructor() {
        super()
        this.state = {
            updateTime:"",   //热歌榜日期  updateTime
            coverImg:"",    //最上面的图片
            name:'',
            songs:[]
        }
    }
    componentDidMount(){
        let url=this.props.match.params.id?this.$api.songdetail+'?id='+this.props.match.params.id:this.$api.toplist;
        this.$axios.get(url)
        .then(res=>{
            console.log(res);
            let date=new Date(res.data.playlist.updateTime);
            let month=Number(date.getMonth()+1)>9?Number(date.getMonth()+1):'0'+Number(date.getMonth()+1)
            let day=date.getDate()>9?date.getDate():'0'+date.getDate();
            this.setState({
                coverImg:res.data.playlist.coverImgUrl,
                name:res.data.playlist.name,
                songs:res.data.playlist.tracks,
                updateTime:`${month}月${day}日`

            },()=>{
                console.log(this.state.songs)
            })
        })
    }
   
    render() {
        let picitem;
        let backbtn;
        if(this.props.match.params.id){
            picitem=(
              <div className="banner">
                  <img src={this.state.coverImg} />
                  <p>{this.state.name}</p>
              </div>
            )
        }else{
            
            backbtn=(<div className="banner">
                <img src={this.state.coverImg}/>
                <span>更新日期:{this.state.updateTime}</span>
            </div>)
        }
        
        return (<div>
            <div className="mask" style={{background:'url('+this.state.coverImg+')'}}>
                   {picitem}
                   
                   {backbtn}
               </div>
               <ul id="songs_list">
                   {
                      
                    this.state.songs.map((item,index)=>{
                        let num = index>8?index+1:"0"+Number(index+1);
                        return(
                            
                             <li key={item.id}>
                             
                             <span>{num}</span>
                                <div>
                                    <p>
                                        {item.name}
                                    </p>
                                    <em>
                                        <img src={require("../../assets/image/sqicon.jpg")}></img>
                                        {
                                            item.ar.map((k,ind) => {
                                                {/* console.log(item.song.artists) */}
                                                let sep=item.ar.length>1 && ind !=item.ar.length-1?<i>/</i>:""
                                               
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
export default Hot;