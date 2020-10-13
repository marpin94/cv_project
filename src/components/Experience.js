import React, {useState} from 'react'

const ExperienceComplete = (props) => {
    return(
    <div className='card'>
        <div className='card-body'>
            <h3>Experience</h3>
            <p>Company: {props.company}</p>
            <p>Title: {props.title}</p>
        </div>
        <button className='btn btn-primary btn-lg btn-block' onClick={props.handleClickAlt}>Edit</button>
    </div>
    )}

export const Experience = () => {
    const [company, setCompany] = useState('')
    const [title, setTitle] = useState('')
    const [save, setSave] = useState(false)

    const handleChangeCompany = (e) => {
        setCompany(e.target.value)
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
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
            <h3>Experience</h3>
            
            <form className='card' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Company</label>
                <input 
                type="text" 
                className="form-control" 
                id="formGroupExampleInput" 
                placeholder="..." 
                value = {company}
                onChange={handleChangeCompany}/>
            </div>

            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Title</label>
                <input 
                type="text" 
                className="form-control" 
                id="formGroupExampleInput2" 
                placeholder="..." 
                value={title}
                onChange={handleChangeTitle}/>
            </div>
            <button className='btn btn-primary btn-lg'>Save</button>
            </form>
        </div>
        )}{return(
                <ExperienceComplete company={company} title={title} handleClickAlt={handleClickAlt} setSave={setSave} />
            )
        }
    
}

