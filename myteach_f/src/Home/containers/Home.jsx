
// 외부 라이브러리
import {Route, Routes} from "react-router-dom"

// 내부 모듈
import {Test, Access} from '../'

const Home = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Access/>}></Route>    
        </Routes>               
        </>
    )
}

export default Home;