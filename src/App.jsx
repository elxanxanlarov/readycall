import { Route, Routes, useLocation } from "react-router-dom";
import LoginForm from "./Components/Auth/LoginForm/LoginForm";
import RegisterForm from "./Components/Auth/RegisterForm/RegisterForm";
import Header from "./Components/Layout/Header/Header";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <ConditionalHeader/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Routes>
    </>
  );
};

const ConditionalHeader = () => {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/register'];
  const showHeader = !hideHeaderRoutes.includes(location.pathname);
  return showHeader ? <Header /> : null;
};
export default App;
