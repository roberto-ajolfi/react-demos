
import React, { useState, useEffect, PureComponent } from 'react';

export function Movie(p: { title: string, releaseDate: string, memo: boolean }) {
    console.log(`${p.memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);
    return (
      <div>
        <div>Movie title: {p.title}</div>
        <div>Release date: {p.releaseDate}</div>
      </div>
    );
  }
  
  export const MemoizedMovie = React.memo(Movie);

  export class PureMovie extends PureComponent<{title: string, releaseDate: string}, {}> {
    render() {
      console.log("<PureMovie> rendered");
      return(
        <div>
          <div>Movie title: {this.props.title}</div>
          <div>Release date: {this.props.releaseDate}</div>
        </div>
      );
    }
  }
  
  export class MovieC extends Component<{title: string, releaseDate: string}, {}> {
    render() {
      console.log("<MovieC> rendered");
      return(
        <div>
          <div>Movie title: {this.props.title}</div>
          <div>Release date: {this.props.releaseDate}</div>
        </div>
      );
    }
  }
  
  export function Movies() {
    const [, setToggle] = useState(true);
    useEffect(() => {
      const id = setInterval(() => {
        setToggle(toggle => !toggle);
      }, 3000);
      return () => clearInterval(id);
    }, []);
    return (
      <>
        <MemoizedMovie title="Heat" releaseDate="December 15, 1995" memo={true} />
        <Movie title="Heat" releaseDate="December 15, 1995" memo={false} />
        <PureMovie title="Heat" releaseDate="December 15, 1995" />
		<MovieC title="Heat" releaseDate="December 15, 1995" />
      </>
    );
  }