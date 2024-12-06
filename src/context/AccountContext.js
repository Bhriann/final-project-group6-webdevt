import React, { createContext, useContext, useState } from 'react';

const AccountContext = createContext();

export const useAccounts = () => useContext(AccountContext);

export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([
    { name: 'John Doe', email: 'john@example.com', password: '123456', role: 'customer' },
    { name: 'Jane Smith', email: 'jane@example.com', password: 'password', role: 'concierge' },
    { name: 'Admin User', email: 'admin@example.com', password: 'adminpass', role: 'admin' },
  ]);

  const addAccount = (account) => {
    setAccounts((prevAccounts) => [...prevAccounts, account]);
  };

  return (
    <AccountContext.Provider value={{ accounts, addAccount }}>
      {children}
    </AccountContext.Provider>
  );
};
