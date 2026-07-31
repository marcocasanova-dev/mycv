import React from 'react'
import SelectionScreen from './selection_screen';
import MainPage from '../page/index';
import Console from '../console/index';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 1 }
    this.handleViewChange = this.handleViewChange.bind(this)
  }

  handleViewChange(current_view) {
    this.setState({ view: current_view });
  }

  render() {
    const renderView = () => {
      console.log(this.state.view);
      switch (this.state.view) {
        case 1:
          return <MainPage viewChange={this.handleViewChange} />;
        case 2:
          return <Console viewChange={this.handleViewChange} />;
        default:
          return <SelectionScreen viewChange={this.handleViewChange} />;
      }
    }
    return (
      <div>
        {renderView()}
      </div>
    );
  }
}

export default Main;
