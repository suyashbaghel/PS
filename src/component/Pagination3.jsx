import React from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import TestData from './TestData'
import "../Pagination3Style.css";
    
class Pagination2 extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 10,
            currentPage: 0
        }

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

    componentDidMount(){
        this.getData();
    }

    getData() {
        
            
            var data = this.props.data;
				
            var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                orgtableData :this.props.data,
                tableData:slice
            })
    }

    render() {
        
        return (
            <div className="table" >
                <TestData data={this.state.tableData}/>
                  

                 <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

            </div>
        )
    }
}

export default Pagination2