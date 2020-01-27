import React from "react";
import styles from "./styles";
import Transition from "react-transition-group/Transition";
import Radium from "radium";
import { Link } from "react-router-dom";

const navBar = props => {
  return (
    <div>
      <Transition in={props.showNav} timeout={0} style={styles.linksContainer}>
        {state => (
          <div
            style={Object.assign(
              {
                transform:
                  state === "entered" ? "translateX(0%)" : "translateX(-100%)"
              },
              styles.navContainer
            )}
          >
            {" "}
            {props.items.map(item => (
              <Link key={item.id} style={styles.link} to={item.route}>
                <p style={styles.linkText}> {item.name} </p>
              </Link>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
};
export default Radium(navBar);
