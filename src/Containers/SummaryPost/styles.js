import theme1 from "../../Themes/themes";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    height: theme1.metrics.postSize,
    margin: 5,   
    backgroundColor:'#212121',
    width: "100%",
    color: "white",
    borderRadius: 10,
    ':hover': {
      backgroundColor:'#424242',

    }
  },

  postContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: 5,
  },
  titleTextContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  titleDataContainer: {
    display: "flex",
    padding:  10,
    flex: 1,
    flexDirection: 'column',
  },
  dateContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  personajesContainer: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
  },

  contentContainer:  {
    flex: 7,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 10,
  },

  textH3: {
    padding: 0,
    margin: 0,
  }
};

export default styles;
