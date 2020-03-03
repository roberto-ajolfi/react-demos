import React, { useState, useEffect } from "react";

interface UserProps {
    id: string;
}

const User : React.FC<UserProps> = (props: UserProps) => {
  const [user, setUser] = useState(null);

  async function fetchUserData(id: string) {
    const response = await fetch("/" + id);
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return (
        <details>
            <summary>
                Loading...
            </summary>
        </details>
    );
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  );
}

export default User;