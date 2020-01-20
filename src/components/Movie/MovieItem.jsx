import React, { Component } from 'react';
import MovieItemStyle from '../../css/MovieItem.module.scss'
class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <div className={MovieItemStyle.container}>
            <img src={this.props.images.small} alt="" className={MovieItemStyle.img}/>
            <h4>电影名称：{this.props.title}</h4>
            <h4>上映年份：{this.props.year}</h4>
            <h4>电影类型：{this.props.genres.join(",")}</h4>
        </div>;
    }
}

export default MovieItem;