import React, { useState } from 'react';
import './index.css';

const ItemForm = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), name, category, date };
    onAddItem(newItem);
    setName('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
