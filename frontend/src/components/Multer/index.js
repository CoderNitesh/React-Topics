import React,{useState} from 'react'

const MulterFileUpload = () => {
    const [fileData, setFileData] = useState()

    const handleChange = (e) => {
        // console.log('multer', e.target.files[0])
        setFileData(e.target.files[0])
    }

    const data = new FormData();
    data.append('image', fileData)

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const responce = await fetch('http://localhost:5000/single', {
            method: 'POST',
            body: data
        });

        console.log('responce: ', responce)
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-container'>
                <label>Upload Photo</label>
                <input type='file' name='image' onChange={handleChange} />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}

export default MulterFileUpload
