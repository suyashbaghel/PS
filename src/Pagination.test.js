//const React =require("react");
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow,configure,mount } from 'enzyme'

import Demo from './component/Demo'
import Pagination2 from './component/Pagination2'
import Pagination3 from './component/Pagination3'
import './setupTests'
import TestData from './component/TestData'
import ReactPaginate from 'react-paginate'

configure({
    adapter:new Adapter()
});

describe('Testing Pagination component',function(){

    it('Testing whether Demo component which renders Pagination Component is marked or not',function(){
        try {
            const wrapper=shallow(<Demo/>)
        } catch (error) {
            fail
        }
    })

    it('Testing whether Pagination Component is marked or not',function(){
        try {
        const wrapper=shallow(<Pagination3 data={["Hello","Helloo","Hello","Hello","Hello"]}/>)
        } catch (error) {
            fail
        }
    })

    it('Testing whether the object is created or not' , function(){
        try {
            const wrapper = shallow(<Pagination3 data={[]}/>)
            let obj = wrapper.instance();
        } catch (error) {
            fail
        }
    })

    it('To count no of table tags' , function(){
        try {
            const wrapper = shallow(<TestData data={[]}/>)
            let len=wrapper.find('table').length;
            expect(len).toBe(1);
        } catch (error) {
            fail
        }
    })

    it('To count no of thead tags' , function(){
        try {
            const wrapper = shallow(<TestData data={[]}/>)
            let len=0;
            len=wrapper.find('thead').length;
            expect(len).toBe(1);
        } catch (error) {
            fail
        }
    })

    it('To count no of button tags' , function(){
        try {
            const wrapper1=shallow(<Demo/>)
            let len=wrapper1.find('button').length;
            expect(len).toBe(1);
        } catch (error) {
            fail
        }
    })


    it('To count no of tbody tags' , function(){
        try {
            const wrapper1=shallow(<Demo/>)
            let obj=wrapper1.instance()
            const wrapper2=shallow(<TestData data={[{id:1,name:"s",email:"s",body:"z"}]}/>)
            let len=wrapper2.find('tbody').length;
            expect(len).toBe(1);
        } catch (error) {
            fail
        }
    })

    it('To count no of td tags' , function(){
        try {
            const wrapper1=shallow(<Demo/>)
            let obj=wrapper1.instance()
            let data=[{id:1,name:"s",email:"s",body:"z"}]
            const wrapper2=shallow(<TestData data={data}/>)
            let len=wrapper2.find('td').length;
            expect(len).toBe(4);
        } catch (error) {
            fail
        }
    })

    it('To check if data is passed correctly to Pagination component' , function(){
        try {
            
            let data=[{id:1,name:"s",email:"s",body:"z"}]
            const wrapper2=shallow(<Pagination3 data={data}/>)
            let obj=wrapper2.instance()
            let tableData=obj.state.tableData
            expect(data).toEqual(tableData)
        } catch (error) {
            fail
        }
    })
    it('To check no of inactive buttons for this data' , function(){
        try {
            
            let data=[{id:1,name:"s",email:"s",body:"z"}]
            // expect(data).toEqual(expected)
            //expect(flag).toBe(true)
            const wrapper2=shallow(<Pagination3 data={data} />)
            let obj=wrapper2.instance()
            let len=wrapper2.find('.pagination').length;
            expect(len).toBe(0)
        } catch (error) {
            fail
        }
    })


    it('To test no of classes in React Paginate' , function(){
        try {
            
            let data=[{id:1,name:"s",email:"s",body:"z"}]
            const wrapper2=shallow(<ReactPaginate containerClassName={"pagination"}/>)
            let obj=wrapper2.instance()
            let len=wrapper2.find('.pagination').length;
            expect(len).toBe(1)
        } catch (error) {
            fail
        }
    })
   
    it('To check the no of pages for given data' , function(){
        try {
            
            let data=[{id:1,name:"s",email:"s",body:"z"}]
            const wrapper=shallow(<Pagination3 data={data}/>)
            let obj=wrapper.instance()
            let pageCount=obj.state.pageCount
            expect(pageCount).toEqual(1)
        } catch (error) {
            fail
        }
    })

    
})
