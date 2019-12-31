## Simple form using React and Material UI libraries.
The goal of this app is to learn new libaries such as material UI and how it can help improve everyday code such as creating forms.  This App was originally created with Classes but after the app is up and runnning I went back and refactorered the code to utilize functional components and hooks to improve code readibility.

## Challenges
One major challenge when writing and refactoring this app for react hooks was in the handleChange function. With using a local state object we are able to pass in the form type as an argument to this function and thereby setting state for multiple state variables with one function.  But since, I had deconstructed the state using react hooks to separate variables and 'useState' hook, I decided to use a switch statement that takes in the form type as well and use the setState method to update the state when the condition matches. It is a little more code after refactoring for this particular function but overall, it reduces the complexity as there is no more need to explicitly write 'this' in the code.


``` javascript
     handleChange = input => e => {
         this.setState({
             [input]: e.target.value
         })
     }
```

``` javascript
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
```
