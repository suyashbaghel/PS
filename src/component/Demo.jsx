import React from 'react'
import axios from 'axios'
//import Pagination2 from './Pagination2'
import Pagination3 from './Pagination3'

class Demo extends React.Component {
    state = {
        data:'',
        flag:false,
      }

    display = (event) => {
        console.log("Hello")
        let base_url = `https://jsonplaceholder.typicode.com/comments`
        axios.get(base_url).
        then((response) => {
            console.dir(response.data)
            this.setState({data  : response.data, flag : true})
        }).
        catch((error) => console.log(error))
    }

    render() { 
        if (this.state.flag){
             return (
            <Pagination3 data={this.state.data} />
             );
        }
        return (
            <button id="button" onClick={this.display}>
                Click me
            </button>
          );
    }
}
 
export default Demo;