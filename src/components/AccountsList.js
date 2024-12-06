import React, { useState } from 'react';

const AccountsList = ({ accounts, setAccounts }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedAccount, setEditedAccount] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
  });

  const handleEditClick = (account) => {
    setIsEditing(account.email); // Set which account is being edited
    setEditedAccount({
      name: account.name,
      email: account.email,
      role: account.role,
      password: account.password,
    });
  };

  const handleSaveClick = (email) => {
    // Update the accounts array with the new values
    const updatedAccounts = accounts.map((account) =>
      account.email === email ? editedAccount : account
    );
    setAccounts(updatedAccounts);
    setIsEditing(null); // Close the edit form
  };

  const handleDeleteClick = (email) => {
    // Delete the account
    const updatedAccounts = accounts.filter((account) => account.email !== email);
    setAccounts(updatedAccounts);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAccount((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Registered Accounts</h2>
      {accounts.length > 0 ? (
        <ul>
          {accounts.map((account, index) => (
            <li key={index}>
              {isEditing === account.email ? (
                // Edit Form
                <div>
                  <input
                    type="text"
                    name="name"
                    value={editedAccount.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    value={editedAccount.email}
                    onChange={handleInputChange}
                    disabled
                  />
                  <select
                    name="role"
                    value={editedAccount.role}
                    onChange={handleInputChange}
                  >
                    <option value="customer">Customer</option>
                    <option value="concierge">Concierge</option>
                  </select>
                  <input
                    type="text"
                    name="password"
                    value={editedAccount.password}
                    onChange={handleInputChange}
                  />
                  <button onClick={() => handleSaveClick(account.email)}>Save</button>
                  <button onClick={() => setIsEditing(null)}>Cancel</button>
                </div>
              ) : (
                // Display Account Info
                <div>
                  <strong>Name:</strong> {account.name} | <strong>Email:</strong> {account.email} |{' '}
                  <strong>Role:</strong> {account.role} | <strong>Password:</strong> {account.password}
                  <div>
                    {/* Edit button only for non-admin roles */}
                    {account.role !== 'admin' && (
                      <button onClick={() => handleEditClick(account)}>Edit</button>
                    )}
                    {/* Delete button only for non-admin roles */}
                    {account.role !== 'admin' && (
                      <button onClick={() => handleDeleteClick(account.email)}>Delete</button>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No accounts registered yet.</p>
      )}
    </div>
  );
};

export default AccountsList;
