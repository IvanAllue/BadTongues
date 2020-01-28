import React, { Component } from "react";
import SummaryPost from "../SummaryPost";
import styles from "./styles";

export default class PostList extends Component {
  state = {
    parts: Math.floor(window.innerWidth / 250),
    listPosts: [...this.props.posts],
    maxWidth: window.innerWidth / Math.floor(window.innerWidth / 250)
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.setState({
      parts: Math.floor(window.innerWidth / 250),
      maxWidth: window.innerWidth / Math.floor(window.innerWidth / 250)
    });
  }
  renderListPosts = listPost =>
    listPost.map((list, index) => (
      <div key={index} style={styles.list}>
        {list.map((post, index) => {
          if (list.length !== this.state.parts) {
            return (
              <SummaryPost
                key={index}
                post={post}
                maxWidth={this.state.maxWidth - 10}                
              />
            );
          }
          return (
            <SummaryPost
              key={index}
              post={post}
              maxWidth={this.state.maxWidth}
            />
          );
        })}
      </div>
    ));

  getListPosts(postsState) {
    let posts = [...postsState];
    console.log("posts", posts);

    let { parts } = this.state;
    console.log(parts);

    let postsSlice = [];
    while (posts.length > parts) {
      postsSlice.push(posts.splice(0, parts));
    }
    if (posts.length > 0) {
      postsSlice.push(posts);
    }

    return postsSlice;
  }

  render() {
    return (
      <div style={styles.listContainer}>
        {" "}
        {this.renderListPosts(this.getListPosts(this.state.listPosts))}{" "}
      </div>
    );
  }
}
