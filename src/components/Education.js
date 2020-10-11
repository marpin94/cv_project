import React from 'react'

export const Education = () => {
    return (
        <div>
            <h3>Education</h3>
            
            <form className='card'>
            <div class="form-group">
                <label for="formGroupExampleInput">School</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="..." />
            </div>

            <div class="form-group">
                <label for="formGroupExampleInput2">Degree</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="..." />
             </div>
            </form>
        </div>
    )
}
