import "./App.css";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import data from "./data";

function App() {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setOpen(true);
    setSelectedItem(item);
  };

  const handleClose = () => setOpen(false);

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
              <CardActionArea onClick={() => handleOpen(item)}>
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box className='modal-container'>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              {selectedItem.name}
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              {selectedItem.description}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;
