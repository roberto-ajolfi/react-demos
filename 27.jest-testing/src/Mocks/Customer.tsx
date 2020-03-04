import React, { useState, useEffect } from "react";

interface CustomerProps {
    id: string;
}

const Customer : React.FC<CustomerProps> = (props: CustomerProps) => {
  const [customer, setCustomer] = useState(null);

  async function fetchCustomerData(id: string) {
    const response = await fetch("/" + id);
    setCustomer(await response.json());
  }

  useEffect(() => {
    fetchCustomerData(props.id);
  }, [props.id]);

  if (!customer) {
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
      <summary>{customer.name}</summary>
      <strong>{customer.openOrders}</strong> order(s) open
      <br />
      Ship to: {customer.address}
    </details>
  );
}

export default Customer;