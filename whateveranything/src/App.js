import React from 'react'
//Making a to do list using search 
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      list: [],
      input: ''

    }
  }

//
    handleInput = (e) => {

      this.setState ({ input: e.target.value })

  }
    handleSubmit = (e) => {
      const {list, input} = this.state;
      let newInput = parseInt(input);
      if(isNaN(newInput) === false)
      {newInput = newInput + list.length +1;
     
        list.push(newInput)
        
   
        this.setState({list,input: '' });
      }
      else {
        this.setState({input: '' });
    
      }
    }

  render() {
console.log(this.state);
const { list } = this.state
   
    return (
      <>
      <input type='text' onChange={this.handleInput} value={this.state.input}/> <button onClick={this.handleSubmit}>Submit</button>
     <ol> 

      { list.map((e, i)=> {
         return  <li> {e} </li>
      }) 

      }

     </ol>
      </>
    );
  }
}

export default App;