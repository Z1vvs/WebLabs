import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import AssetForm from "./components/AssetForm";
import { Container, Stack, Box } from "@mui/material";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navigation />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Stack spacing={4}>
          <Dashboard />
          <AssetForm />
        </Stack>
      </Container>
    </Box>
  );
}
