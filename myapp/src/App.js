import Signup from "./components/signup/Signup";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme/theme";
import { useUserContext } from "./components/userContext";
import { HomePage } from "./components/newsPage/HomePage";
import Login from "./components/login/Login";
import Auth from "./components/auth/Auth";
import { fetchnewsData } from "./api/api";
function App() {
  const { loading, error, user } = useUserContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        {error && <p>{error}</p>}
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>{user ? <HomePage dataSource={fetchnewsData} /> : <Auth />}</>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
