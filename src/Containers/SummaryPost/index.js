import React, { Component } from "react";
import styles from "./styles";
import Radium from "radium";

class SummaryPost extends Component {
  state = {
    onFocus: false
  };

  renderTitle({ post }) {
    return (
      <div style={styles.postContainer}>
        <div style={styles.titleTextContainer}>
          <h2>{post.title}</h2>
        </div>
        <div style={styles.titleDataContainer}>
          <div style={styles.dateContainer}>{Date.now()}</div>
          {(post.personajes !== null && typeof post.personajes !== 'undefined') && <div style={styles.personajesContainer}>{post.personajes.toString()}</div>}
        </div>
      </div>
    );
  }
  renderContent({ post }) {
    return (
      <div style={styles.postContainer}>
        <div style={styles.titleTextContainer}>
          <h3 style={styles.textH3}>{post.title}</h3>
        </div>
        <div style={styles.contentContainer}>{post.content}</div>
      </div>
    );
  }

  render() {
    return (
      <div
        style={Object.assign(styles.container, {
          maxWidth: this.props.maxWidth
        })}
        onMouseEnter={() => {
          this.setState({ onFocus: true });
        }}
        onMouseLeave={() => {
          this.setState({ onFocus: false });
        }}
      >
          {!this.state.onFocus
            ? this.renderTitle(this.props)
            : this.renderContent(this.props)}
      </div>
    );
  }
}

export default Radium(SummaryPost);
