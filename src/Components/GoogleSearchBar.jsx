import { useState}  from 'react';

const GoogleSearchBar = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const [searchHistory, setSearchHistory] = useState([]);
 const [filteredSearchHistory, setFilteredSearchHistory] = useState([]);

 const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if(event.target.value === ''){
      setFilteredSearchHistory([]);
    } else {
      setFilteredSearchHistory(searchHistory.filter(search => search.toLowerCase().includes(event.target.value.toLowerCase())));
    }
 }; 

 const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setSearchHistory([...searchHistory, searchTerm]);
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
      window.open(searchUrl, '_blank');
      setSearchTerm('');
      setFilteredSearchHistory([]);
    }
 };

 const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
 };

 return (
  <div className="autocomplete-search-box">
    <input 
      type="text" 
      className="search-box" 
      placeholder="Google Search"
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      value={searchTerm}
    />
    <ul className="search-result">
      {filteredSearchHistory.map((search, index) => (
        <li key={index}>{search}</li>
      ))}
    </ul>
  </div>
 );
};

export default GoogleSearchBar;