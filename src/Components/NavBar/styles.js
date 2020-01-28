import theme1 from '../../Themes/themes'
const styles = {
  navContainer: {
    width: "80vw",
    backgroundColor: theme1.colors.backgroundColorBlack,
    position: "absolute",
    opacity: 0.97,
    top: theme1.metrics.headerHeight,
    bottom: 0,
    color: "white",
    alignItems: "center",
    transition: "all 0.3s",
    overflow: 'auto',
    margin:0,
    padding: 0,
    "@media (min-Width: 550px)": {
        width: "40vw",
    },
    "@media (min-Width: 750px)": {
        width: "30vw",
    },
    "@media (min-Width: 1000px)": {
        width: "20vw",
    },
    "@media (min-Width: 1500px)": {
      width: "15vw",
  }
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  link: {
    flex: 1,
    display: 'flex',
    textDecoration: 'none',
    color: theme1.colors.goldText,
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  linkText: {
    textAlign: "center",
    padding: 0,
  }
};

export default styles;
