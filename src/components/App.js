import React from 'react';
import Canvas from './Canvas.js'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Slider from '@material-ui/core/Slider';
import './App.css'

class App extends React.Component {
  render() {
    return (
        <>
        <Card raised={true} className="card">
          <CardContent>
            <Typography>Algorithm</Typography>
            <FormControl className="dropdown">
              <Select value="Merge Sort">
                  <MenuItem value="Merge Sort">Merge Sort</MenuItem>
                  <MenuItem value="Quick Sort">Quick Sort</MenuItem>
              </Select>
            </FormControl>
            <Typography>Speed</Typography>
            <Slider value={0} type="speed" valueLabelDisplay="auto"/>
            <Typography>Elements</Typography>
            <Slider value={0} type="elements" valueLabelDisplay="auto"/>
          </CardContent>
          <CardActions className="buttons">
            <Button color="primary" text="sort">Sort</Button>
            <Button color="secondary" text="shuffle">Shuffle</Button>
          </CardActions>
        </Card>
        <Canvas/>
        </>
    );
  }
}

export default App;
