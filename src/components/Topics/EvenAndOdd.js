import React, {Component} from 'react'


class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [], 
            userInput: ''
        }

    
    }

assignEvenAndOdds(){
    let userString = this.state.userInput
    let userArray =userString.split(',')
    let even=[]
    let odd=[]

    for(var i = 0; i < userArray.length; i++){
        if(userArray[i] %2 ===0){
            even.push(userArray[i]);
        }
        else if (userArray[i] %2 !==0){
            odd.push(userArray[i]);
        }
    }
        
    

    this.setState({
        evenArray: even,
        oddArray: odd
    })


    
}
    
    render (){
        return (
        <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine'onChange={(e) => {
            this.setState({userInput: e.target.value})
        }} />
        <button className='confirmationButton' onClick = {() =>this.assignEvenAndOdds() }>Split</button>
        <span className='resultsBox'>Even: {this.state.evenArray}</span>
        <span className='resultsBox'>Odd: {this.state.oddArray}</span>
        </div>
       )
        
    }


}

export default EvenAndOdd



// Create an onChange prop for the input element that updates the value of userInput on state.
// Create an onClick prop for the button element that calls a method on the class:
// This method should solve the toy problem.
// This method should update the value of evenArray and oddArray on state.
// Assign one span element to display the value of evenArray.
// Assign the other span element to display the value of oddArray.