import { Routes, Route } from 'react-router-dom';
import NewBook from './NewBook';
import PhotoBookHome from './PhotoBookHome';

const PhotoBook = () => {

  return (
    <>
        <Routes>
          <Route path="/" element={<PhotoBookHome/>} />
          <Route path="/newbook" element={<NewBook/>} />
        </Routes>
    </>
    
  );
}

export default PhotoBook;
