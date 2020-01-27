import theme1 from '../../Themes/themes'

const styles = {
    headerContainer: {
        width: '100%',
        backgroundColor: theme1.colors.backgroundColorBlack,
        position: 'sticky',
        top: 0,
        left: 0,
        height: theme1.metrics.headerHeight,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        display: 'flex',
        flex: 2,
        justifyContent: 'center',
    },
    titleContainer: {
        display: 'flex',
        flex: 8,
        color: 'white'
    },
    button: {
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white'
    }
}

export default styles;