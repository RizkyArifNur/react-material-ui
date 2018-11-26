import React from 'react';
import { Component } from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Card, CardContent, TextField, InputLabel, FormControl, Input, InputAdornment, IconButton, Button, Typography } from '@material-ui/core';

const styles = {
    card: {
        minWidth: 275,
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        width: '50%'
    },
    textField: {
        width: '98%',
        marginTop: '30px',
        left: '50%',
        transform: 'translate(-50%,0)'
    },
    title: {
        marginBottom: '12px'
    },
    submit: {
        width: '100%',
        marginTop: '20px'
    },
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#AAA'
    }

}
class LoginPage extends Component {
    state = {
        showPassword: false,
        'text-username': '',
        'text-password': ''
    }

    handleClickShowPassword = () => {
        this.setState(
            {
                showPassword: !this.state.showPassword
            }
        )
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = () => {
        alert("hai")
    }
    render() {
        const { classes, theme } = this.props
        return (
            <MuiThemeProvider theme={theme} >
                <div className={classes.root}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} variant="h6">Login Page Material Ui</Typography>
                            <Typography variant="subtitle2" color='textSecondary'  > Hello Dude!!</Typography>
                            <form onSubmit={this.handleSubmit}>
                                <TextField id="text-username" className={classes.textField} variant="standard"
                                    label="Username" value={this.state.username} onChange={this.handleChange} />
                                <FormControl className={classes.textField}>
                                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                    <Input id="text-password" type={this.state.showPassword ? "text" : "password"}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton onClick={this.handleClickShowPassword}>
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        } label="Password" variant="standard" value={this.state.password} onChange={this.handleChange} />
                                </FormControl>
                                <Button className={classes.submit} color="primary" variant="contained" type="submit">Login</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </MuiThemeProvider>

        )
    }
}
LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginPage)