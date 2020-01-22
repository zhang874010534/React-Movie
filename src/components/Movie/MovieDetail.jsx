import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import fetchJSONP from 'fetch-jsonp'
class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            isOk: "false",
            images: ""
        }
    }
    render() {
        return <div>
            <Button type="primary" onClick={this.goBack}>
                <Icon type="left" />
                Backward
          </Button>
            {this.flagRender()}
        </div>;
    }
    componentDidMount() {
        fetchJSONP('https://api.douban.com/v2/movie/subject/' + this.props.match.params.id + '?apikey=0df993c66c0c636e29ecbb5344252a4a')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    info: data,
                    images: data.images.large,
                    isOk: "true"
                })
            })
    }
    goBack = () => {
        this.props.history.goBack()
    }
    flagRender = () => {
        if (this.state.isOk) {
            return <div>
                <div style={{ textAlign: "center" }}>
                    <h1>{this.state.info.title}</h1>
                    <img src={this.state.images} alt="" />
                </div>
                <p style={{ textIndent: "2em", lineHeight: "30px" }}>{this.state.info.summary}</p>
            </div>
        } else {
            return <div></div>;
        }
    }
}

export default MovieDetail;