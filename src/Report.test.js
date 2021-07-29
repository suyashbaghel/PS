import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow,configure,mount } from 'enzyme'

import Demo2 from './component/Demo2'
import Report from './component/Report'
import './setupTests'
import ComponentToPrint from './component/ComponentToPrint'
import ReactToPrint from 'react-to-print'

configure({
    adapter:new Adapter()
});

describe('Testing Pagination component',function(){

    it('Testing whether Demo2 component which renders Pagination Component is marked or not',function(){
        try {
            const wrapper=shallow(<Demo2/>)
        } catch (error) {
            fail
        }
    })

    it('Testing whether Report  is marked or not',function(){
        try {
            let data={
                id:"u11",
                name:"Name1",
                hotel:"Hotel1"
            }
            const wrapper=shallow(<Report data={data}/>)
        } catch (error) {
            fail
        }
    })

     it('Testing whether ComponentToPrint is marked or not',function(){
         try {
            let data={
            id:"u11",
            name:"Name1",
            hotel:"Hotel1"
            }
            const wrapper=shallow(<ComponentToPrint data={data}/>)
        } catch (error) {
            fail
        }
    })


    it('Testing whether ReactToPrint is marked or not',function(){
        try {
           let data={
           id:"u11",
           name:"Name1",
           hotel:"Hotel1"
            }
           const wrapper=shallow(<ReactToPrint />)
       } catch (error) {
           fail
       }
   })

   
    

})
