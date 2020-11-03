import React, { Component, createContext } from 'react'
import { ImageGalleryData } from './ImageGalleryData';

// STEP 1 - Creiamo il context
interface IGalleryContext {
    currentItem: ImageGalleryData;
    current: number;
    items: ImageGalleryData[];
    clickPreviewHandler: any;
    total: number;
}

const GalleryContext = createContext({} as IGalleryContext);
const { Provider, Consumer } = GalleryContext;

// STEP 3 - refactoring dei componenti figli x utilizzare il Context

// Componente Picture
// const Picture = (props: { src?: string, alt?: string }) => (    
//     <div className="Picture" key={props.alt}>
//         <img src={`${props.src}`} alt={props.alt} />
//     </div>
// );
// Picture.displayName = "Picture";

const Picture: React.FC = () => (  
    <Consumer>
        {(ctx: IGalleryContext) => (
            <div className="Picture" key={ctx.currentItem.alt}>
                <img src={`${ctx.currentItem.src}`} alt={ctx.currentItem.alt} />
            </div>
        )}
    </Consumer>  
    
);

// Componente PreviewList
// const PreviewList = (props: { items?: ImageGalleryData[], clickPreviewHandler?: any, current?: number }) => (
//     <div className="PreviewList">
//       {props.items?.map(({ src, alt }, i) => (
//         <div
//           className={`PreviewList__item ${props.current === i ? "is-active" : ""}`}
//           onClick={props.clickPreviewHandler(i)}
//           key={alt}
//         >
//           <img src={`${src}`} alt={alt} />
//         </div>
//       ))} 
//     </div>
// );
// PreviewList.displayName = "PreviewList";

const PreviewList: React.FC = () => (
    <Consumer>
        {(ctx: IGalleryContext) => (
            <div className="PreviewList">
                {ctx.items?.map(({ src, alt }, i) => (
                    <div
                    className={`PreviewList__item ${ctx.current === i ? "is-active" : ""}`}
                    onClick={ctx.clickPreviewHandler(i)}
                    key={alt}
                    >
                    <img src={`${src}`} alt={alt} />
                    </div>
                ))} 
            </div>
        )}
    </Consumer>
);

// Componente PreviewListStatus
// const PreviewListStatus = (props: { current?: number, total?: number }) => (
//     <div className="PreviewListStatus">
//       {(props.current ?? 0) + 1} / {props.total}
//     </div>
// );
// PreviewListStatus.displayName = "PreviewListStatus";

const PreviewListStatus: React.FC = () => (
    <Consumer>
      {(ctx: IGalleryContext) => (
        <div className="PreviewListStatus">
          {ctx.current + 1} / {ctx.total}
        </div>
      )}
    </Consumer>
  );

export default class ImageGalleryWithContext extends Component<{ items: ImageGalleryData[] }> {
    static Picture = Picture;
    static PreviewList = PreviewList;
    static PreviewListStatus = PreviewListStatus;

    state = {
      current: 0
    };

    clickPreviewHandler = (index: number) => () => {
      this.setState({ current: index });
    };

    // STEP 2 - Utilizziamo il componente Provider per impostare i dati "globali" 
    //          per il componente e i suoi figli
    //
    render() {
        const { children, items } = this.props;
        const { current } = this.state;
        const { clickPreviewHandler } = this;
 
        return (
        <Provider
            value={{
            currentItem: items[current],
            current,
            items,
            clickPreviewHandler,
            total: items.length
            } as IGalleryContext}
        >
            <div className="ImageGallery">{children}</div>
        </Provider>
        );
    }
}
