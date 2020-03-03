import React, { useEffect } from "react";

interface CardProps {
    onSelect: (item: number) => void;
}

const Card : React.FC<CardProps> = (props: CardProps) => {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      props.onSelect(null);
    }, 5000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [props.onSelect]);

  return (<>
    {[1, 2, 3, 4].map(choice => (
        <button
        key={choice}
        data-testid={choice}
        onClick={() => props.onSelect(choice)}
        >
        {choice}
        </button>
    ))}
  </>);
  
}

export default Card;