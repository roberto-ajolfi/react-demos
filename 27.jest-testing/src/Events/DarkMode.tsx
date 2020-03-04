import React, { useState } from "react";

interface DarkModeProps {
    onChange: (state: boolean) => void;
}

const DarkMode : React.FC<DarkModeProps> = (props: DarkModeProps) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      onClick={() => {
        setDarkMode(previousState => !previousState);
        props.onChange(!darkMode);
      }}
      data-testid="darkmode"
    >
      {darkMode === true ? "DarkMode off" : "DarkMode on"}
    </button>
  );
}

export default DarkMode;