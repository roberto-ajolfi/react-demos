import React from 'react';
import './App.css';
import { ImageGalleryData } from './Components/ImageGallery/ImageGalleryData';
import ImageGalleryNoCompound from './Components/ImageGallery/ImageGalleryNoCompound';

const galleryData: ImageGalleryData[] = [
    {
      src: "https://picsum.photos/id/1/200",
      alt: "Testo foto 1"
    },
    {
      src: "https://picsum.photos/id/10/200",
      alt: "Testo foto 2"
    },
    {
      src: "https://picsum.photos/id/1016/200",
      alt: "Testo foto 3"
    },
    {
      src: "https://picsum.photos/id/1021/200",
      alt: "Testo foto 4"
    }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageGalleryNoCompound items={galleryData}></ImageGalleryNoCompound>
      </header>
    </div>
  );
}

export default App;
