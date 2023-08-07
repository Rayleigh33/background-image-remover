import React,{useState} from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);

  const handleChange = () => {
      const APIkey = 'v3K91DmodK24oaWHcEJMwdoz';
  const url = 'https://api.remove.bg/v1.0/removebg';

  const formData = new FormData();

  formData.append('image_file',image,image.name);
  formData.append("size","auto");

  fetch(url,{
    method: 'POST',
    headers: {
      'X-API-Key': APIkey,
    },
    body: formData
  }).then((res) => res.blob()).then((blob) => {
    const reader = new FileReader();
    reader.onloadend = () => setBgRemove(reader.result);
    reader.readAsDataURL(blob);
  }).catch((error) => console.error(error));

  }
  
  return (
    <>
    <div className="heading">
        <h1>Remove Background Image</h1>
    </div>

    <div className='design'>
    
      <div class="input-div">
       <input className="input" name="file" type="file" onChange={(e) => setImage(e.target.files[0])} />
       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
      </div>
    </div>

    <div className='design'>
    <button onClick={handleChange}>Remove</button>
    </div>
    

    <div className='image'>
      {
        bgRemove && <img src={bgRemove} alt='removed background' />
      }
    </div>
    </>
   
  );
}

export default App;
