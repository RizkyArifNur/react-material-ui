import { createMuiTheme } from '@material-ui/core/styles';
const color = {
    primaryLight: '#64c1ff',
    primaryMain: '#0091ea',
    primaryDark: '#0064b7',
    primaryContrastText: '#fff',
    primaryTextSecondary: '#ddd',
    lightGray: '#ddd',

}

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                light: color.primaryLight,
                main: color.primaryMain,
                dark: color.primaryDark,
                contrastText: color.primaryContrastText,
                textSecondary: color.primaryTextSecondary

            }
        },
        overrides: {
            MuiInput: {
                underline: {
                    '&:hover:not($disabled):not($focused):not($error):before': {
                        borderBottom: `2px solid ${color.primaryMain}`,
                        height: 1,
                    },
                    '&:after': {
                        borderBottom: `2px solid ${color.primaryMain}`
                    },
                    '&:before': {
                        borderBottom: `1px solid ${color.lightGray}`
                    }
                }
            }

        }
    }
)

class MainTheme {
    static get color() {
        return color;
    }

    static get theme() {
        return theme
    }
}


export default MainTheme