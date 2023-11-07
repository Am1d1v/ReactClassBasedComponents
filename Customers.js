import { useState } from "react";
import Customer from "./Customer";
import styles from "./Customers.module.css";

const DUMMY_CUSTOMERS = [
  { id: "c1", name: "CustomerName1" },
  { id: "c2", name: "CustomerName2" },
  { id: "c3", name: "CustomerName3" },
];

const Customers = () => {
  const [showCustomers, setShowCustomers] = useState(true);

  const toggleCustomersHandler = () => {
    setShowCustomers((currentState) => !currentState);
  };

  const customersList = (
    <ul>
      {DUMMY_CUSTOMERS.map((customer, index) => (
        <Customer key={index} name={customer.name} />
      ))}
    </ul>
  );

  return (
    <div className={styles.customers}>
      <button onClick={toggleCustomersHandler}>
        {showCustomers ? "Спрятать" : "Показать"} Заказчиков
      </button>
      {showCustomers && customersList}
    </div>
  );
};

export default Customers;
