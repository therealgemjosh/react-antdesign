import React,{useState}  from 'react';
import {Button,DatePicker,message,Alert} from 'antd';
import './App.css';
import {Footer} from './footer.js';





function App() {
const [date,setDate]= useState(null);
	const handleChange = value=>{
		
		message.info(`Selected Date: ${value?value.format('YYYY-MM-DD'):'NONE'}`);
		setDate(value);
	}


  return (
    <div className="App">
	<div className="Header">
	  <h2>Simple Mobile UI Design</h2>
	  </div>

	  <div className="Appcontent">
		<div style={{width: "400px",margin:'100px, auto'}}>
	  		<DatePicker onChange={handleChange} style={{margin:'5px 0px'}}/>
	  <Alert message="Selected date:" description={date?date.format('YYYY-MM-DD'):'NONE'} style={{marginBottom:'5px',width:'90%'}}/>

	  	</div>


		  <Button type="primary"
	  		onClick={()=> handleChange}
	  >Submit</Button>
	  </div>

	  <Footer/>
    </div>
  );
}

export default App;
