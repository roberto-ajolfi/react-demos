import React, { useState } from "react";

interface ToggleProps {
    onChange: (state: boolean) => void;
}

const Toggle : React.FC<ToggleProps> = (props: ToggleProps) => {
  const [state, setState] = useState(false);

  return (
    <button
      onClick={() => {
        setState(previousState => !previousState);
        props.onChange(!state);
      }}
      data-testid="toggle"
    >
      {state === true ? "Turn off" : "Turn on"}
    </button>
  );
}

export default Toggle;