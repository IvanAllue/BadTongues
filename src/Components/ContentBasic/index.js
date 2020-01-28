import React from "react";
import styles from "./styles";
import PostList from "../../Containers/PostList";
const posts = [
  {
    id: 0,
    title: "qqq",
    content:
      "Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña "
  },
  {
    id: 1,
    title: "qaz",
    content:
      "Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña ",
      personajes: ["qqq", "qaz"]
  },
  {
    id: 2,
    title: "qqq",
    content:
      "Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña "
  },
  {
    id: 3,
    title: "qaz",
    content:
      "Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña ",
      personajes: ["qqq", "qaz"]
  },
  {
    id: 4,
    title: "qqq",
    content:
      "Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña "
  },
  {
    id: 5,
    title: "qaz",
    content:
      "Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña ",
      personajes: ["qqq", "qaz"]
  },
  {
    id: 5,
    title: "qaz",
    content:
      "Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña Güiña ",
      personajes: ["qqq", "qaz"]
  }
];

const renderHeader = (title, content) => {
  return (
    <div style={styles.headerContainer}>
      <div style={styles.titleHeaderContainer}>
        <h1>{title}</h1>
      </div>
      <div style={styles.textHeaderContainer}>
        <p> {content} </p>
      </div>
    </div>
  );
};



const contentBasic = props => {
  return (
    <div style={styles.divContainer}>
      <div style={styles.headerContainer}>
        {props.mode === "welcome"
          ? renderHeader("Bienvenid@", "Lista de post")
          : renderHeader("Personajes", "¿De quien quieres saber?")}
      </div>
      <div style={styles.contentContainer}>
        {props.mode === "welcome" ? <PostList posts={posts} /> : null}
      </div>
    </div>
  );
};

export default contentBasic;
