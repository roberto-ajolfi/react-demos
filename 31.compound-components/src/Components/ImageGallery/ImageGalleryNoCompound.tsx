import React, { Component } from "react";
import { ImageGalleryData } from './ImageGalleryData';

interface IImageGalleryProps
{
    items: ImageGalleryData[]
}

// Prima implementazione componente ImageGallery senza l'uso del pattern Compound Component
//
// Il componente creato soddisfa tutti i requisiti iniziali. Ma se dovessero cambiare nel tempo?
// In una prima ipotesi, per poter implementare queste nuove funzionalità, ci occorre predisporre 
// nuove proprietà in entrata e cambiare di conseguenza le logiche del componente.
//
// Poca flessibilità del componente nell’uso e nella possibilità di estenderlo.
// 
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