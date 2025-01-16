import { TextField, Button, Typography, Box, useMediaQuery } from "@mui/material";
import gg from "../assets/gg.jpg";

const SignUp = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isLargeScreen ? "row" : "column",
        minHeight: "100vh",
        minWidth: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Form Section */}
      <Box
        sx={{
          width: isLargeScreen ? "35vw" : "100vw",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            padding: "2rem",
            borderRadius: "8px",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Lanka Bill- <br /> Business Management System
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              marginBottom: "2rem",
              fontWeight: "bold",
              color: " #4B4FCF ",
              fontSize: "25px",
            }}
          >
            Hello there, Welcome Back
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ marginBottom: '3rem',  color: '#FFFF', fontSize: '20px' }}
          >
            Log in to your system
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Email Address"
              variant="filled"
              InputProps={{ style: { backgroundColor: "#333", color: "#fff" } }}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                marginBottom: "1rem",
                borderRadius: "8px",
                "& .MuiFilledInput-root": {
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#333",
                    borderColor: "#0000FF",
                    borderWidth: "2px",
                    borderStyle: "solid",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="filled"
              InputProps={{ style: { backgroundColor: "#333", color: "#fff" } }}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                marginBottom: "2rem",
                borderRadius: "8px",
                "& .MuiFilledInput-root": {
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#333",
                    borderColor: "#0000FF",
                    borderWidth: "2px",
                    borderStyle: "solid",
                  },
                },
              }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#5A5FCF",
                "&:hover": { backgroundColor: "#4B4FCF" },
                padding: "0.75rem",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              SIGN UP
            </Button>
          </form>
          <Typography
            variant="body2"
            sx={{
              marginTop: "2rem",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Version 5.21
          </Typography>
        </Box>
      </Box>

      {/* Image Section */}
      {isLargeScreen && (
        <Box
          sx={{
            width: "65vw",
            height: "100vh",
            backgroundImage: `url(${gg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </Box>
  );
};

export default SignUp;