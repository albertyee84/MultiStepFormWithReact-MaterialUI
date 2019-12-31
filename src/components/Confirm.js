import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

const Confirm = props => {
    const cont = e => {
        e.preventDefault();
        props.nextStep();
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const { values: { firstName, lastName, email, occupation, city, bio } } = props;

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Confirm User Data" />
                <List>
                    <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                    />
                    <ListItem
                        primaryText="Last Name"
                        secondaryText={lastName}
                    />
                    <ListItem
                        primaryText="Email"
                        secondaryText={email}
                    />
                    <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                    />
                    <ListItem
                        primaryText="City"
                        secondaryText={city}
                    />
                    <ListItem
                        primaryText="Bio"
                        secondaryText={bio}
                    />
                </List>
                <RaisedButton
                    label="Confirm & Continue"
                    primary={true}
                    style={styles.button}
                    onClick={cont}
                />
                <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={back}
                />
            </React.Fragment>
        </MuiThemeProvider>
    );
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm


// export class Confirm extends Component {

//     continue = e => {
//         e.preventDefault();
//         //Process Form if we had a backend
//         this.props.nextStep();
//     }

//     back = e => {
//         e.preventDefault();
//         //Process Form if we had a backend
//         this.props.prevStep();
//     }
//     render() {
//         const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
//         return (
//             <MuiThemeProvider>
//                 <React.Fragment>
//                     <AppBar title="Confirm user Data" />
//                     <List>
//                         <ListItem 
//                             primaryText="First Name"
//                             secondaryText={ firstName }
//                             />
//                         <ListItem 
//                             primaryText="Last Name"
//                             secondaryText={lastName}
//                         />
//                         <ListItem 
//                             primaryText="Email"
//                             secondaryText={email}  
//                         />
//                         <ListItem 
//                             primaryText="Occupation"
//                             secondaryText={occupation}
//                         />
//                         <ListItem 
//                             primaryText="City"
//                             secondaryText={city}
//                         />
//                         <ListItem 
//                             primaryText="Bio"
//                             secondaryText={bio}
//                         />
//                     </List>
//                     <RaisedButton
//                         label="Confirm & Continue"
//                         primary={true}
//                         style={styles.button}
//                         onClick={this.continue}
//                     />
//                     <RaisedButton
//                         label="Back"
//                         primary={false}
//                         style={styles.button}
//                         onClick={this.back}
//                     />
//                 </React.Fragment>
//             </MuiThemeProvider>
//         );
//     }
// }