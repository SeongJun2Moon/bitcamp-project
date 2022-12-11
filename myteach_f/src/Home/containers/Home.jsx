// 외부 라이브러리
import { Route, Routes } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

// 내부 모듈
import { Test, Access } from "../";
import { Navb, Footer } from "../../common/";
import { Records } from "../../main";

const Home = () => {
  return (
    <>
      <Navb />
      <Routes>
        <Route path="/" element={<Access />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/records" element={<Records />}></Route>
        <Route path="/*" element={<h1>없는 페이지에유</h1>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
