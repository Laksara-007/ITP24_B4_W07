import { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const BillingSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    // if (e.key === 'Enter') {
    //   handleSearch();
    // }
  };

  return (
    <TextField      
      variant="outlined"
      label="Search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={handleKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" className="h-40">
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        sx: { width: '200px', height: '40px' } 
      }}
    />
  );
};

export default BillingSearch;
