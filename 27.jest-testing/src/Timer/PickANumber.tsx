import React, { useEffect } from "react";

interface PickANumberProps {
    onSelect: (item: number) => void;
}

const PickANumber : React.FC<PickANumberProps> = (props: PickANumberProps) => {
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

export default PickANumber;