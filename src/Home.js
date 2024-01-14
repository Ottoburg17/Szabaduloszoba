import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import escapeImage from './assets/escape.jpg';

function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:3030/foglalasok')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='container' style={{ backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '10px' }}>  
          <h2 style={{ color: '#008000' }}>Szabadulószoba Németh Ottó</h2>
        <img src={escapeImage} alt='Escape'style={{ float: 'right', width: '300px', height: 'auto'}} ></img>
        
        <Link to="create" className='btn btn-success my-3'>Új foglalás felvétele +</Link>
        <table className='table'>
             <thead>
                <tr>
                    <th>ID</th>
                    <th>Cim</th>
                    <th>Datum</th>
                    <th>Fo</th>
                    <th>Iranyitoszam</th>
                    <th>Nev</th>
                </tr>
             </thead>
             <tbody>
                {data.map((d,i)=> (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.cim}</td>
                        <td>{d.datum}</td>
                        <td>{d.fo}</td>
                        <td>{d.iranyitoszam}</td>
                        <td>{d.nev}</td>
                        <td>
                            <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Frissít</Link>
                            <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Törlés</button>
        
                        </td>
                    </tr>
                ))}
             </tbody>
        </table>
      
    </div>
  )

  function handleDelete(id) {
    const confirm = window.confirm("Szeretné törölni?");
    if(confirm) {
       axios.delete('http://localhost:3030/foglalasok/'+id)
       .then(res => {
          alert("Record Deleted");
          navigate('/')
        })
    }
  }
}

export default Home
