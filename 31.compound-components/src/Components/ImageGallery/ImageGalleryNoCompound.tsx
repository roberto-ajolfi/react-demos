import React, { Component } from "react";
import { ImageGalleryData } from './ImageGalleryData';

interface IImageGalleryProps
{
    items: ImageGalleryData[]
}

// Prima implementazione componente ImageGallery senza l'uso del pattern Compound Component
export default class ImageGalleryNoCompound extends Component<IImageGalleryProps> {
    // Stato del componente: inizialmente la slide seleziona è la prima nell'array di foto
    state = {
        current: 0
    };

    // Funzione per memorizzare la foto selezionata al click su una delle anteprime
    clickPreviewHandler = (index: number) => () => {
        this.setState({ current: index });
    };

    render() {
        const { items } = this.props;
        const { current } = this.state;
        const currentItem = items[current];

        return (
        <div className="ImageGallery">
            <div className="Picture">
                <img src={`${currentItem.src}`} alt={currentItem.alt} />
            </div>
            <div className="PreviewListStatus">
            {current + 1} / {items.length}
            </div>
            <div className="PreviewList">
            {items.map(({ src, alt }, i) => (
                <div
                className={`PreviewList__item ${
                    current === i ? "is-active" : ""
                }`}
                key={alt}
                onClick={this.clickPreviewHandler(i)}
                >
                <img src={`${src}`} alt={alt} />
                </div>
            ))}
            </div>
        </div>
        );
    }
}