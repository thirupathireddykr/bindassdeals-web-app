import React from "react";
import { useNavigate } from "react-router-dom";
import ItemForm from "../IteamForm";
import ItemList from "../ItemList";
import "./index.css";

const Home = () => {
  const history = useNavigate();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      history.push("/login");
    }
  }, [history]);

  const [items, setItems] = React.useState([
    { id: 1, name: "Item 1", category: "Category A", date: "2024-06-01" },
    { id: 2, name: "Item 2", category: "Category B", date: "2024-06-02" },
    { id: 3, name: "Item 3", category: "Category A", date: "2024-06-03" },
  ]);

  const [filter, setFilter] = React.useState("");
  const [sortKey, setSortKey] = React.useState("name");
  const [sortOrder, setSortOrder] = React.useState("asc");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (sortKey) => {
    setSortKey(sortKey);
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const filteredItems = items
    .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      } else {
        return a[sortKey] < b[sortKey] ? 1 : -1;
      }
    });

  return (
    <div className="home-container">
      <h1>Items</h1>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={handleFilterChange}
      />
      <ItemForm onAddItem={handleAddItem} />
      <ItemList
        items={filteredItems}
        onSortChange={handleSortChange}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

export default Home;
