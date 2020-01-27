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
    "@media (min-Width: 550px)": {
        width: "40vw",
    },
    "@media (min-Width: 750px)": {
        width: "30vw",
    },
    "@media (min-Width: 1000px)": {
        width: "20vw",
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
    color: 'white',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },

  linkText: {
    textAlign: "center",
    padding: 0,
  }
};

export default styles;
