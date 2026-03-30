import {
  TextField,
  Select,
  MenuItem,
  Slider,
  Paper,
  Typography,
  InputAdornment,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function AssetForm() {
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(5);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, description, category, price, priority });
    setName("");
    setDescription("");
    setCategory("");
    setPrice("");
    setPriority(5);
  };

  return (
    <Paper elevation={4} sx={{ p: 3, maxWidth: 400 }}>
      <Stack component="form" onSubmit={handleSubmit} spacing={2}>
        <Typography variant="h6">Register Asset</Typography>

        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <TextField
          label="Description"
          variant="filled"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
          label="Category"
        >
          <MenuItem value="">
            <em>Select category</em>
          </MenuItem>
          <MenuItem value="hardware">Hardware</MenuItem>
          <MenuItem value="software">Software</MenuItem>
          <MenuItem value="network">Network</MenuItem>
        </Select>

        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <Stack spacing={1}>
          <Typography>Priority</Typography>
          <Slider
            value={priority}
            onChange={(_, v) => setPriority(v as number)}
            min={1}
            max={10}
            marks
            valueLabelDisplay="auto"
          />
        </Stack>

        <Button type="submit" variant="contained" fullWidth>
          Register Asset
        </Button>
      </Stack>
    </Paper>
  );
}
