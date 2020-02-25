import React from 'react';

export default function withHeaderAndFooter<T>(Component: React.ComponentType<T>) {
    return (props: T) => (
      <>
        <header className="App-header">
        === HEADER (HOC) ===
        </header>
        <div className="App-body">
          <Component {...props} />
        </div>
        <footer className="App-footer">
        ---- FOOTER (HOC) ----
        </footer>
      </>);
  }