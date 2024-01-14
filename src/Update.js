import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Update() {

    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        cim: '',
        datum: '',
        fo: '',
        iranyitoszam: '',
        nev: '',
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3030/foglalasok/${id}`)
        .then(res => setInputData(res.data))
        .catch(err =>  {
            console.log(err)
        });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3030/foglalasok/${id}`,inputData )
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/')
        })
        .catch(err => {
            console.log(err);
        });
    }


  return (
    <div className='d-flex w 100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
         <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor='id'>ID:</label>
                <input type="number" disabled name="id" className='form-control'  value={inputData.id}
                />                
            </div>
            <div>
                <label htmlFor='cim'>Cim:</label>
                <input type="text" name="cim" className='form-control'  value={inputData.cim}
                onChange={e => setInputData({...inputData, cim: e.target.value}) }/>                
            </div>
            <div>
                <label htmlFor='datum'>Datum:</label>
                <input type="date" name="datum" className='form-control'  value={inputData.datum}
                onChange={e => setInputData({...inputData, datum: e.target.value}) }/>                               
            </div>
            <div>
                <label htmlFor='fo'>Fo:</label>
                <input type="text" name="fo" className='form-control'  value={inputData.fo}
                onChange={e => setInputData({...inputData, fo: e.target.value}) }/>                
            </div>
            <div>
                <label htmlFor='iranyitoszam'>Iranyitoszam:</label>
                <input type="text" name="iranyitoszam" className='form-control' value={inputData.iranyitoszam}
                onChange={e => setInputData({...inputData, iranyitoszam: e.target.value}) }/>                
            </div>
            <div>
                <label htmlFor='nev'>Nev:</label>
                <input type="text" name="nev" className='form-control'  value={inputData.nev}
                onChange={e => setInputData({...inputData, nev: e.target.value}) }/>                
            </div><br />
            <button className='btn btn-info'>Frissit</button>
         </form>
    </div>
</div>
   
  )
}

export default Update
