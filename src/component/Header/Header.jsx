import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";


const sxStyle = {
  flex: "1",
  color: "gold",
  fontWeight: "bold",
  cursor: "pointer",
  fontFamily: "monserraten",
};
const Header = () => {
  const navigate = useNavigate();
  const { currency, setcurrency } = CryptoState();
 
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#fff",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="transparent">
          <Container>
            <Toolbar>
              <Typography
                sx={sxStyle}
                onClick={() => navigate("/")}
                variant="h6"
              >
                Crypto Hunter
              </Typography>
              <Select
                variant="outlined"
                style={{ width: 100, height: 40, marginRight: 15 }}
                value={currency}
                onChange={(e) => {
                  setcurrency(e.target.value);
                }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header;
