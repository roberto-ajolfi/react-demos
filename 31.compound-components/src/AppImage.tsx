import React from 'react';
import './App.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import { ImageGalleryData } from './Components/ImageGallery/ImageGalleryData';
import ImageGalleryWithContext from './Components/ImageGallery/ImageGalleryWithContext';
//import ImageGalleryNoCompound from './Components/ImageGallery/ImageGalleryNoCompound';

// Realizzare un semplice componente ImageGallery che permetta di:

// - avere una lista di anteprime foto
// - selezionare una foto da una lista di anteprime (e mostrarla ingrandita)
// - evidenziare la foto correntemente selezionata nella lista
// - mostrare una barra di status (indicefotocorrente / #foto_totali)
// - Passeremo al componente (tramite props) un array di oggetti foto

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
        {/* <ImageGalleryNoCompound items={galleryData}></ImageGalleryNoCompound> */}

        {/* <ImageGallery items={galleryData}></ImageGallery> */}

        {/* <ImageGallery items={galleryData}>
          <ImageGallery.Picture />
          <ImageGallery.PreviewListStatus />
          <ImageGallery.PreviewList />
        </ImageGallery> */}

        {/* <ImageGallery items={galleryData}>
          <ImageGallery.PreviewListStatus />
          <ImageGallery.PreviewList />
          <ImageGallery.Picture />
        </ImageGallery> */}

        {/* non va ...
        <ImageGallery items={galleryData}>
          <div>
            <ImageGallery.Picture />
          </div>
          <ImageGallery.PreviewListStatus />
          <ImageGallery.PreviewList />
        </ImageGallery> */}

        {/* <ImageGalleryWithContext items={galleryData}>
          <ImageGalleryWithContext.Picture />
          <ImageGalleryWithContext.PreviewListStatus />
          <ImageGalleryWithContext.PreviewList />
        </ImageGalleryWithContext> */}

        <ImageGalleryWithContext items={galleryData}>
          <div style={{ border: "2px solid red", margin: "10px 0" }}>
            <ImageGalleryWithContext.PreviewListStatus />
          </div>
          <ImageGalleryWithContext.Picture />
          <ImageGalleryWithContext.PreviewList />
        </ImageGalleryWithContext>
      </header>
    </div>
  );
}

export default App;
