import React, { useState } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

const UserForm = props => {
    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');

    function nextStep() {
        setStep(step + 1)
    }

    function prevStep() {
        setStep(step - 1)
    }

    const handleChange = input => e => {
        switch (input) {
            case 'firstName':
                setFirstName(e.target.value)
                break;
            case 'lastName':
                setLastName(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'occupation':
                setOccupation(e.target.value)
                break;
            case 'city':
                setCity(e.target.value)
                break;
            case 'bio':
                setBio(e.target.value)
                break;
            default:
                break;
        }
    }

    const values = { firstName, lastName, email, occupation, city, bio };
    switch (step) {
        case 1:
            return (
                <FormUserDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <FormPersonalDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 3:
            return (
                <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                />
            )
        case 4:
            return <Success />
        default:
            return null;
    }
}

export default UserForm


// export class UserForm extends Component {

//     state = {
//         step: 1,
//         firstName: '',
//         lastName: '',
//         email: '',
//         occupation: '',
//         city: '',
//         bio: '',
//     }

//     //Proceed to the next step
//     nextStep = () => {
//         const { step } = this.state;
//         this.setState({
//             step: step + 1
//         })
//     }

//     //Go to previous step
//     prevStep = () => {
//         const { step } = this.state;
//         this.setState({
//             step: step - 1
//         })
//     }

//     // Handle fields change
//     handleChange = input => e => {
//         this.setState({
//             [input]: e.target.value
//         })
//     }

//     render() {
//         const { step } = this.state;
//         const { firstName, lastName, email, occupation, city, bio}  = this.state
//         const values = { firstName, lastName, email, occupation, city, bio };
//         switch(step) {
//             case 1:
//                 return (
//                     <FormUserDetails 
//                         nextStep={this.nextStep}
//                         handleChange={this.handleChange}
//                         values={values}
//                     />
//                 )
//             case 2:
//                 return (
//                     <FormPersonalDetails
//                         nextStep={this.nextStep}
//                         prevStep={this.prevStep}
//                         handleChange={this.handleChange}
//                         values={values}
//                     />
//                 )
//             case 3:
//                 return (
//                     <Confirm
//                         nextStep={this.nextStep}
//                         prevStep={this.prevStep}
//                         values={values}
//                     />
//                 )
//             case 4:
//                 return <Success />
//             default:
//                 return null;
//         }
//     }
// }