import React, { Component } from 'react';
import { Spin, Alert } from 'antd';
import Axios from 'axios'
import MovieItem from './MovieItem.jsx'

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            page: parseInt(this.props.match.params.page) || 1,
            pageCount: 10, //每页多少条数据
            total: 0, //当前页面下有多少条数据
            isLoading: true,
            movieType: this.props.match.params.type
        }
    }
    componentDidMount() {
        this.axiosRequest()
    }
    render() {
        return <div style={{ display: "flex", flexWrap: "wrap" }}>
            {this.renderList()}
            {this.state.movieList&&this.state.movieList.map((item, i) => {
                return <MovieItem {...item} key={i}></MovieItem>
            })}
        </div>

    }
    componentDidUpdate(prevProps,prevState){
        if(this.props!==prevProps){
            this.setState({
                isLoading:true,
                movieList:[]
            })
            this.axiosRequest()
        }
    }
    renderList() {
        if (this.state.isLoading) {
            return <div style={{ flexGrow: 1 }}>
                <Spin tip="Loading...">
                    <Alert
                        message="正在请求电影列表"
                        description="精彩内容，马上呈现"
                        type="info"
                    />
                </Spin>
            </div>
        } else {
            return;
        }
    }
    axiosRequest() {
        let params=this.props.match.params
        setTimeout(() => {
            let data = require(`./${params.type}${params.page}.json`)
            this.setState({
                isLoading: false,
                movieList: data.subjects
            })
            console.log(data.subjects);
        }, 1000)
        // const start = (params.page - 1) * this.state.pageCount
        // const url = `/v2/movie/${params.type}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageCount}`
        // Axios.get(url)
        //     .then(response => {
        //         console.log(response);
        //         this.setState({
        //             isLoading:false,
        //             movieList:response.data.subjects
        //         })
        //     })
    }

}

export default MovieList