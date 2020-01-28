var backImage = require ('../../Assets/images/backgroundImage01.jpg')
const styles= {
    divContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },

    headerContainer: {
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
        color: 'white',
        backgroundImage: `url(${backImage}) `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },

    titleHeaderContainer: {
        display: 'flex',
        flex: 2,       
    },

    textHeaderContainer: {
        display: 'flex',
        flex: 1,
        fontWeight: 'bold',
    },

    contentContainer: {
        display: 'flex',
        flex: 8,
        backgroundColor: 'transparent',
    },

    summaryContainer: {
        flex: 1,
        display: 'flex',
        margin: 10,
    }
}

export default styles;