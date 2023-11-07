import styles from "./Customer.module.css";

const Customer = (props) => {

  const {name} = props;

  return <li className={styles.customer}>{name}</li>;
};

export default Customer;
