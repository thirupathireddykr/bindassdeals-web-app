import React from 'react';
import './index.css';

const ItemList = ({ items, onSortChange, onUpdateItem, onDeleteItem }) => {
  const handleUpdate = (item) => {
    const newName = prompt('Enter new name', item.name);
    const newCategory = prompt('Enter new category', item.category);
    const newDate = prompt('Enter new date', item.date);
    if (newName && newCategory && newDate) {
      onUpdateItem({ ...item, name: newName, category: newCategory, date: newDate });
    }
  };

  return (
    <table className="item-list">
      <thead>
        <tr>
          <th onClick={() => onSortChange('name')}>Name</th>
          <th onClick={() => onSortChange('category')}>Category</th>
          <th onClick={() => onSortChange('date')}>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.date}</td>
            <td>
              <button onClick={() => handleUpdate(item)}>Edit</button>
              <button onClick={() => onDeleteItem(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
