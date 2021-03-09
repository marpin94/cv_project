import React, { useState } from 'react'

const EducationComplete = (props) => {
    return(
    <div className='card'>
        <div className='card-body'>
            <h3>Education</h3>
            <p>School: {props.school}</p>
            <p>Degree: {props.degree}</p>
        </div>
        <button className='btn' onClick={props.handleClickAlt}>Edit</button>
    </div>
    )}

export const Education = () => {
    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [save, setSave] = useState(false)

    const handleChangeSchool = (e) => {
        setSchool(e.target.value)
    }

    const handleChangeDegree = (e) => {
        setDegree(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setSave(!save)
    }

    const handleClickAlt = () => {
        setSave(false)
    }

    if(save===false) {return (
        <div className='mt-3'>
            <h3>Education</h3>
            
            <form className='card' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">School</label>
                <input 
                type="text" 
                className="form-control" 
                id="formGroupExampleInput" 
                placeholder="..." 
                value = {school}
                onChange={handleChangeSchool}/>
            </div>

            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Degree</label>
                <input 
                type="text" 
                className="form-control" 
                id="formGroupExampleInput2" 
                placeholder="..." 
                value={degree}
                onChange={handleChangeDegree}/>
            </div>
            <button className='btn'>Save</button>
            </form>
        </div>
        )}{return(
                <EducationComplete school={school} degree={degree} handleClickAlt={handleClickAlt} setSave={setSave} />
            )
        }
    
}
