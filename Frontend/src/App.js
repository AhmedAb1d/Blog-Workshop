import "./App.css";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import data from "./data";

function App() {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (value) => {
    setValue(value);
    setFilteredData(
      data.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  };


  return (
    <div className='App'>
      <h1>Blog Workshop</h1>
      <h2>By Inceptum</h2>
      <Input
        id='standard-adornment-amount'
        endAdornment={<SearchIcon />}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <p>this is the output the search bar: {value} </p>
      <div className='cards'>
        {filteredData.map((item) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={item.id}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='150'
                  image={item.image}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {item.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
