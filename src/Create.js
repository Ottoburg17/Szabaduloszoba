import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Create() {
    const [inputData, setInputData] = useState({
        cim: '',
        datum: '',
        fo: '',
        iranyitoszam: '',
        nev: '',
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/foglalasok',inputData )
        .then(res => {
            alert("Data Posted Successfully!")
            navigate('/')
        })
        .catch(error => {
            alert(`Error: ${error.message}`);
        });
    }

  return (
    <div className='d-flex w 100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
             <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor='cim'>Cim:</label>
                    <input type="text" name="cim" className='form-control'  
                    onChange={e => setInputData({...inputData, cim: e.target.value}) }/>                
                </div>
                <div>
                    <label htmlFor='datum'>Datum:</label>
                    <input type="date" name="datum" className='form-control'  
                    onChange={e => setInputData({...inputData, datum: e.target.value}) }/>                               
                </div>
                <div>
                    <label htmlFor='fo'>Fo:</label>
                    <input type="text" name="fo" className='form-control'  
                    onChange={e => setInputData({...inputData, fo: e.target.value}) }/>                
                </div>
                <div>
                    <label htmlFor='iranyitoszam'>Iranyitoszam:</label>
                    <input type="text" name="iranyitoszam" className='form-control'  
                    onChange={e => setInputData({...inputData, iranyitoszam: e.target.value}) }/>                
                </div>
                <div>
                    <label htmlFor='nev'>Nev:</label>
                    <input type="text" name="nev" className='form-control'  
                    onChange={e => setInputData({...inputData, nev: e.target.value}) }/>                
                </div><br />
                <button className='btn btn-info'>Hozzáad</button>
             </form>
        </div>
    </div>
  )
}

export default Create
