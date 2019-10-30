import React, { Component } from 'react'
import moment from 'moment'
import Typography from '@material-ui/core/Typography'
import { TextField, Paper, Button, Grid, Select, MenuItem, withStyles } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const styles = {
        root: {      
            padding: 20,
            backgroundColor: '#F0F0F0'
        }
  };

class Form extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { 
            name: '', 
            role: 'na', 
            date: moment().format("YYYY-MM-DD") 
        };
    }

    handleSubmit = (event: any) => {
        alert('Submitted: on ' + this.state.date + " " +
            this.state.name + ' is a ' + this.state.role);
        event.preventDefault();
    }

    /* handleChange = (event: any) => {
        this.setState({ value: event.target.value });
    } */

    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        const { classes } = this.props

        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant='h4' align='center'>Regular Form</Typography>
                    </Grid>
                    <Grid item xs={3}>&nbsp;</Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.root}>
                            <Grid item xs={12}>
                                <TextField name='name' label='Name' value={this.state.name} 
                                    onChange={this.handleChange} margin='normal' />
                            </Grid>
                            <Grid item xs={12}>&nbsp;</Grid>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                <Select
                                    autoWidth={false}
                                    labelId="demo-simple-select-label"
                                    name="role"
                                    value={this.state.role}
                                    onChange={this.handleChange}>
                                        <MenuItem value={'na'}>-- Select a Role --</MenuItem>
                                        <MenuItem value={'admin'}>Administrator</MenuItem>
                                        <MenuItem value={'user'}>Regular User</MenuItem>
                                        <MenuItem value={'guest'}>Guest User</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>&nbsp;</Grid>
                            <Grid item xs={12}>
                                <Button type='submit' color='primary' 
                                    variant='outlined' startIcon={<SaveAltIcon />}>Submit</Button>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>&nbsp;</Grid>
                </Grid>
            </form>
        )
    }
}

export default withStyles(styles)(Form)