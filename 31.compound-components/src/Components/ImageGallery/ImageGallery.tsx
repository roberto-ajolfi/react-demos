import React, { Component } from 'react'
import { ImageGalleryData } from './ImageGalleryData';

// STEP 1 - componenti dedicati per ognuna delle parti della Gallery
//
// STEP 5: per poter usare Typescript con cloneElement, meglio rendere tutti i membri delle interfacce opzionali
//         (con relativa gestione dei possibili null nel codice)
//
// Componente Picture
const Picture = (props: { src?: string, alt?: string }) => (    
    <div className="Picture" key={props.alt}>
        <img src={`${props.src}`} alt={props.alt} />
    </div>
);
Picture.displayName = "Picture";

// Componente PreviewList
const PreviewList = (props: { items?: ImageGalleryData[], clickPreviewHandler?: any, current?: number }) => (
    <div className="PreviewList">
      {props.items?.map(({ src, alt }, i) => (
        <div
          className={`PreviewList__item ${props.current === i ? "is-active" : ""}`}
          onClick={props.clickPreviewHandler(i)}
          key={alt}
        >
          <img src={`${src}`} alt={alt} />
        </div>
      ))}
    </div>
);
PreviewList.displayName = "PreviewList";

// Componente PreviewListStatus
const PreviewListStatus = (props: { current?: number, total?: number }) => (
    <div className="PreviewListStatus">
      {(props.current ?? 0) + 1} / {props.total}
    </div>
);
PreviewListStatus.displayName = "PreviewListStatus";

// STEP 2 - ridefinire la classe ImageGallery, usando i nuovi componenti
//
// - una maggiore flessibilità in termini di gestione dei componenti figli
// - Il layout è ancora hardcoded, preimpostato
//
export default class ImageGallery extends Component<{ items: ImageGalleryData[] }> {
    state = {
      current: 0
    };

    clickPreviewHandler = (index: number) => () => {
      this.setState({ current: index });
    };

    // render() {
    //   const { items } = this.props;
    //   const { current } = this.state;
    //   const currentItem = items[current];
    //   return (
    //     <div className="ImageGallery">
    //       <Picture src={currentItem.src} alt={currentItem.alt} />
    //       <PreviewListStatus current={current + 1} total={items.length} />
    //       <PreviewList
    //         items={items}
    //         clickPreviewHandler={this.clickPreviewHandler}
    //         current={current}
    //       />
    //     </div>
    //   );
    // }

    // STEP 3 - Static properties
    //
    static Picture = Picture;
    static PreviewList = PreviewList;
    static PreviewListStatus = PreviewListStatus;

    // render() {
    //     const {children} = this.props
    //     return (<div className="ImageGallery">{children}</div>)
    // }

    // STEP 4 - Passaggio dati dal padre ai figli in un Compound Component
    //
    render() {
        const { children, items } = this.props;
        const { current } = this.state;
        const { clickPreviewHandler } = this;

        const _children = React.Children.map(children, (child: any) => {    //con Typescript tocca usare any ...
          let c;
          switch (child.type.displayName) {
            case "Picture":
              c = React.cloneElement(child, items[current]);
              break;
            case "PreviewList":
              c = React.cloneElement(child, {
                current,
                items,
                clickPreviewHandler
              });
              break;
            case "PreviewListStatus":
              c = React.cloneElement(child, {
                current,
                total: items.length
              });
              break;
            default:
              c = React.cloneElement(child);
          }
          return c;
        });
        return <div className="ImageGallery">{_children}</div>;
    }
}
