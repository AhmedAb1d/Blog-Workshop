import "./App.css";
import Input from "@mui/material/Input";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";


function App() {
  const [value, setValue] = useState("");

  return (
    <div className='App'>
      <h1>Blog Workshop</h1>
      <h2>By Inceptum</h2>
      <Input
            id="standard-adornment-amount"
            endAdornment={<SearchIcon/>}
            onChange={(event) => setValue(event.target.value)}
          />
      <p>this is the output the search bar: {value} </p>

    </div>
  );
}

export default App;
