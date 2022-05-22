import { Component } from "react";
import CarouselContainer from './CarouselContainer';
import BottomContainer from './BottomContainer';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import PractitionerList from '../components/Practitioner/PractitionerList.js';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            value: 'login'
        }
    }
    handleChange = (e, value) => {
        this.setState({
            value
        });
    }

    render(){
        return(
            <div style={{ display: 'flex', flex: '1 1 auto'}} >
                <div style={{ flex: 1}}>
                    <div style={{ display: 'flex', height: '100%', flexDirection: 'column'}}>
                        <div style={{ flex: '1 1 auto', position: 'relative'}}>
                            <CarouselContainer />
                        </div>
                        <div style={{ maxHeight: '400px'}}>
                            <PractitionerList filter={false} />
                        </div>
                    </div>

                </div>
                <Box style={{ width: '400px', padding: '20px'}} sx={{ boxShadow: 3 }}>
                    <Box sx={{ width: '100%', typography: 'body1'}}>
                        <TabContext value={this.state.value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={this.handleChange}>
                                    <Tab label="Login" value="login" />
                                    <Tab label="Sign Up" value="signup" />
                                </TabList>
                            </Box>
                            <TabPanel value="login">
                                <Login />
                            </TabPanel>
                            <TabPanel value="signup">
                                <SignUp />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Box>
            </div>
        )
        
    }
}