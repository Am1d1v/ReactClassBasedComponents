import { Component } from "react";
import styles from "./Customer.module.css";


// Class Based Component
class Customer extends Component{

  render(){

    const name = this.props.name
    return(
    <li className={styles.customer}>{name}</li>
    );
  }
}

// Function Component
// const Customer = (props) => {

//   const {name} = props;

//   return <li className={styles.customer}>{name}</li>;
// };

export default Customer;
