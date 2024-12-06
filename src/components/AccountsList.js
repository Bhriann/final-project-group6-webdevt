import React from 'react';

const AccountList = ({ accounts }) => {
  return (
    <div>
      <h2>Registered Accounts</h2>
      {accounts.length > 0 ? (
        <ul>
          {accounts.map((account, index) => (
            <li key={index}>
              <strong>Name:</strong> {account.name} | <strong>Email:</strong> {account.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No accounts registered yet.</p>
      )}
    </div>
  );
};

export default AccountList;
