import React from 'react';
import Canvas from './Canvas.js'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import '../css/App.css'

class App extends React.Component {
  state = {
    algorithms: ["Merge Sort", "Quick Sort", "Heap Sort", "Insertion Sort", "Bubble Sort"],
    selectedAlgo: "Merge Sort",
    speed: 100,
    numItems: 100
  }

  setAlgo = (e) => {
    this.setState({selectedAlgo: e.target.value});
  }

  setSpeed = (e, value) => {
    this.setState({speed: value});
  }

  setNumItems = (e, value) => {
    this.setState({numItems: value});
  }

  render() {
    return (
        <>
        <Card raised={true} className="card">
          <CardContent>
            <Typography>Algorithm</Typography>
            <FormControl className="dropdown">
              <Select value={this.state.selectedAlgo} onChange={this.setAlgo}>
                  {this.state.algorithms.map((a) => <MenuItem value={a} key={a}>{a}</MenuItem>)}
              </Select>
            </FormControl>
            <Typography>Speed</Typography>
            <Slider value={this.state.speed} onChange={this.setSpeed} min={1} valueLabelDisplay="auto"/>
            <Typography>Items</Typography>
            <Slider value={this.state.numItems} onChange={this.setNumItems} min={5} valueLabelDisplay="auto"/>
          </CardContent>
          <CardActions className="actions">
            <div className="buttons">
              <Button color="primary" text="sort">Sort</Button>
              <Button color="primary" text="shuffle">Shuffle</Button>
            </div>
          </CardActions>
        </Card>
        <Canvas 
          selectedAlgo={this.state.selectedAlgo}
          speed={this.state.speed}
          numItems={this.state.numItems}/>
        </>
    );
  }
}

export default App;
