import Signup from "./components/signup/Signup";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme/theme";
import { useUserContext } from "./components/userContext";
import { HomePage } from "./components/newsPage/HomePage";
import Login from "./components/login/Login";
import Auth from "./components/auth/Auth";
import { fetchnewsData } from "./api/api";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Blog } from "./components/newsPage/blog/Blog";
// import NewsFooter from "./components/newsPage/footer/NewsFooter";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage dataSource={fetchnewsData} />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
