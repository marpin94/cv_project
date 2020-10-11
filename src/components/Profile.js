import React from 'react'

export const Profile = () => {
    return (
        <div>
            <h3>General Info</h3>
        <form className='card'>
        <div class="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="..." />
        </div>

        <div class="form-group">
            <label for="formGroupExampleInput2">Email</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="..." />
        </div>

        <div class="form-group">
            <label for="formGroupExampleInput3">Phone</label>
            <input type="number" class="form-control" id="formGroupExampleInput3" placeholder="..." />
        </div>

        </form>
        </div>
    )
}
