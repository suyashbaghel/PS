import React from 'react'
import Report from './Report';
import ComponentToPrint from './ComponentToPrint';

class Demo2 extends React.Component {
    state = { 
        data:{
            id:"u11",
            name:"Name1",
            hotel:"Hotel1"
        }
     }
    render() { 
        return ( 
            <Report data={this.state.data}/>
         );
    }
}
 
export default Demo2;