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
    algorithms: ["Merge Sort", "Insertion Sort"],
    selectedAlgo: "Merge Sort",
    speed: 100,
    numItems: 100,
    isSorting: false
  }

  shuffleRef = React.createRef();
  sortRef = React.createRef();

  setAlgo = (e) => {
    this.setState({selectedAlgo: e.target.value});
  }

  setSpeed = (e, value) => {
    this.setState({speed: value});
  }

  setNumItems = (e, value) => {
    this.setState({numItems: value});
  }

  toggleSorting = () => {
    this.setState({isSorting: !this.state.isSorting});
  }

  render() {
    return (
        <>
        <Card raised={true} className="card">
          <CardContent>
            <Typography>Algorithm</Typography>
            <FormControl className="dropdown" disabled={this.state.isSorting}>
              <Select value={this.state.selectedAlgo} onChange={this.setAlgo}>
                  {this.state.algorithms.map((a) => <MenuItem value={a} key={a}>{a}</MenuItem>)}
              </Select>
            </FormControl>
            <Typography>Speed</Typography>
            <Slider value={this.state.speed} onChange={this.setSpeed} min={1} valueLabelDisplay="auto"/>
            <Typography>Items</Typography>
            <Slider value={this.state.numItems} onChange={this.setNumItems} disabled={this.state.isSorting} min={5} valueLabelDisplay="auto"/>
          </CardContent>
          <CardActions className="actions">
            <div className="buttons">
              { this.state.isSorting
                ? <Button color="secondary" ref={this.sortRef}>Stop</Button>
                : <Button color="primary" ref={this.sortRef}>Sort</Button>
              }
              <Button color="primary" ref={this.shuffleRef} disabled={this.state.isSorting}>Shuffle</Button>
            </div>
          </CardActions>
        </Card>
        <Canvas 
          selectedAlgo={this.state.selectedAlgo}
          speed={this.state.speed}
          numItems={this.state.numItems}
          shuffleRef={this.shuffleRef}
          sortRef={this.sortRef}
          toggleSorting={this.toggleSorting}/>
        </>
    );
  }
}

export default App;
