import React from 'react'
import '../TestDataStyle.css';
class TestData extends React.Component {
    state = {  }
    render() { 
        return (
            <table id="paginationtable">
                     <thead>
                         <th>Id</th>
                         <th>Name</th>
                         <th>Email</th>
                         <th>Body</th>

                     </thead>
                     <tbody>
                        {
                          this.props.data.map((tdata, i) => (
                                <tr>
                                    <td>{tdata.id}</td>
                                    <td>{tdata.name}</td>
                                    <td>{tdata.email}</td>
                                    <td>{tdata.body}</td>
                                </tr>
                            
                          ))
                        }

                     </tbody>
                    
                 </table>  
          );
    }
}
 
export default TestData