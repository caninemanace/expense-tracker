function Searchbar({ searchTerm, setSearchTerm }) {
    function handleChange(e) {
      setSearchTerm(e.target.value);
    }
  
    return (
      <div>
        <input
          type="text"
          placeholder="Live Search Filter 🔍"
          value={searchTerm}
          onChange={handleChange}
          className="searchbar"
        />
      </div>
    );
  }
  
  export default Searchbar;
  