import React, {PropTypes, Component} from "react"
import AppBar from 'material-ui/lib/app-bar';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import RaisedButton from 'material-ui/lib/raised-button';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

export default class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => {  	
  	this.setState({open: !this.state.open})
  };

    render() {
      
        return (
            <div>
                <AppBar
                  title="React playlist Viewer"
                  onLeftIconButtonTouchTap={this.handleToggle} />		

		        <LeftNav 
		          open={this.state.open} 
		          docked={false} 
				  open={this.state.open}
				  onRequestChange={this.handleToggle}>
		        	<AppBar 
		        	  title="AppBar"		        	
		        	  iconElementLeft={
		        		<IconButton onTouchTap={this.handleToggle}>
		        			<NavigationClose />
		        		</IconButton>} />		
		          <MenuItem>Menu Item</MenuItem>
		          <MenuItem>Menu Item 2</MenuItem>
		        </LeftNav>
            </div>
        )

    }
}
