import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
// Create the context
export const FinanceContext = createContext();

// Create a provider component
export const FinanceProvider = ({ children }) => {
  const [Currency, setCurrency] = useState("USD")
  const [transactions, setTransactions] = useState([]);

  return (
    <FinanceContext.Provider value={{ Currency, setCurrency, transactions, setTransactions }}>
      {children}
    </FinanceContext.Provider>
  );
};

FinanceProvider.propTypes = {
  children: PropTypes.node.isRequired,
}