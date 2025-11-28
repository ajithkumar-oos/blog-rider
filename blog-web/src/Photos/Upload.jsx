import React, { useState } from 'react';
import "../Photos/Upload.css";
import gg from "../../public/Images/five.jpeg"

function Upload() {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div>
<img src={gg} alt="" className="src-upload" />
      <div className='box '>
        <form>
          
          {/* Circular Upload */}
          <div className="circle-upload t">
            {preview ? (
              <img src={preview} alt="preview" className="preview-img" />
            ) : (
              <span className="upload-text">UPLOAD</span>
            )}
            <input 
              type="file" 
              className="file-input-circle" 
              onChange={handleFileChange} 
            />
          </div>

          <br /><br />

          <label className='text-light'>BLOG-TITLE</label>
          <input className='ms-2 form-control ' type="text" /> <br /><br />

          <label className='text-light'>DESCRIPTION</label>
          <input className='dep ms-2 form-control' type="text" placeholder='write as much you wish..' /><br />
          <button className='mt-4 btn btn-success'>UPLOAD</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Upload;
