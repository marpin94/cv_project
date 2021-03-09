import React, { useState } from 'react'

const ProfileComplete = (props) => {
    return(
    <div className='card'>
        <h3 className='card-title'>{props.name}</h3>
        <div className='card-body'>
            <p>Email: {props.email}</p>
            <p>Phone: {props.profession}</p>
        </div>
        <button className='btn' onClick={props.handleClickAlt} >Edit</button>
    </div>
    )}

    

export const Profile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [profession, setProfession] = useState('')
    const [save, setSave] = useState(false)

    const handleChangeName = (e) =>{
        setName(e.target.value)
    }
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleChangeProf = (e) =>{
        setProfession(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setSave(!save)
    }

    const handleClickAlt = () => {
        setSave(false)
    }

    if(save===false) {return (
        <div>
            <h3>General Info</h3>
        <form className='card' >
        <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input type="text" 
            className="form-control" 
            id="formGroupExampleInput"  
            value= {name}
            onChange={handleChangeName} 
            placeholder="..." />
        </div>

        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Email</label>
            <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput2"   
            value={email}
            onChange={handleChangeEmail} 
            placeholder="..." />
        </div>

        <div className="form-group">
            <label htmlFor="formGroupExampleInput3">Profession</label>
            <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput3"   
            value= {profession}
            onChange={handleChangeProf} 
            placeholder="..." />
        </div>
        <button className='btn' onClick={handleSubmit}>Save</button>
        </form>
        </div>
    )}{return(
        <ProfileComplete name={name} email={email} profession={profession} handleClickAlt={handleClickAlt} setSave={setSave}/>
    )}
}
