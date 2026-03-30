import { Grid, Paper, Typography, Stack } from "@mui/material";

const metrics = [
  { title: "Users", value: 1200 },
  { title: "Sessions", value: 340 },
  { title: "Revenue", value: "$12k" },
  { title: "Errors", value: 23 },
];

export default function Dashboard() {
  return (
    <Grid container spacing={2}>
      {metrics.map((m) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={m.title}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Stack spacing={1} alignItems="center">
              <Typography variant="h6">{m.title}</Typography>
              <Typography variant="h4">{m.value}</Typography>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
