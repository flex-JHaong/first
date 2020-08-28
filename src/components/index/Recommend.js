import React from "react"
import AwesomeSwiper from 'react-awesome-swiper';
import "./Recommend.css"
const config = {
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li',
        hideOnClick: true,
        clickable: true,
    },
    on: {
        slideChange: function () {
            // console.log(this.activeIndex);
        },
    },
};
class Recommend extends React.Component {
    constructor() {
        super()
        this.state = {
            bannerarr: [],
            songarr: [],
            songlist: []
        }
    }
    swiperRef = null
    goNext = () => {//use `this.swiperRef.swiper` to get the instance of Swiper
        this.swiperRef.swiper.slideNext();
    }
    componentDidMount() {
        this.$axios.get(this.$api.bannerUrl)
            .then(res => {
                // console.log(res)
                this.setState({
                    bannerarr: res.data.banners
                })

            })
        this.$axios.get(this.$api.songUrl)
            .then(res => {
                // console.log(res)
                this.setState({
                    songarr: res.data.result
                })
            })
        this.$axios.get(this.$api.newsong)
            .then(res => {
                // console.log(res)
                this.setState({
                    songlist: res.data.result
                })
            })
    }
    href(url){
        // console.log(this.props.history)
        this.props.history.push("/songlist/"+url)
    }
    render() {

        return (<div>
            <AwesomeSwiper ref={ref => (this.swiperRef = ref)} config={config} className="your-classname">
                <div className="swiper-wrapper">
                    {
                        this.state.bannerarr.map((item, index) => {
                            return <div className="swiper-slide" key={index}><img src={item.imageUrl}></img></div>
                        })
                    }


                </div>
                {/* <!--左箭头--> */}
                <div className="swiper-button-prev"></div>
                {/* <!--右箭头--> */}
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
            </AwesomeSwiper>
            <div className="title">
                <span></span>
                <p>推荐歌单</p>
            </div>
            <ul className="songone">
                {
                    this.state.songarr.map((item, index) => {
                        return (
                            <li key={index} onClick={this.href.bind(this,item.id)}>
                                <img src={item.picUrl}></img>
                                <p>{item.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="title">
                <span></span>
                <p>最新音乐</p>
            </div>
            <ul className="newsong">
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
                                            item.song.artists.map((k,ind) => {
                                                {/* console.log(item.song.artists) */}
                                                let sep=item.song.artists.length>1 && ind !=item.song.artists.length-1?<i>/</i>:""
                                               
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
export default Recommend;