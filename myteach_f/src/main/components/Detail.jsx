//외부 라이브러리
import { Table } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

//내부모듈

//css

const Detail = () => {
  // useState
  let [content, setContent] = useState(0);

  // useSelector
  let state = useSelector((state) => state);

  const Content = () => {
    if (content == 0) {
      return (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>소환사</th>
                <th>승/패</th>
                <th>KDA</th>
              </tr>
            </thead>
            <tbody>
              {state.users.map((a, i) => (
                <tr>
                  <td>{state.users[i].넘버}</td>
                  <td>{state.users[i].이름}</td>
                  <td>{state.users[i].승패}</td>
                  <td>{state.users[i].KDA}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      );
    } else if (content == 1) {
      return <div>교전능력분석</div>;
    } else if (content == 2) {
      return <div>시야장악분석</div>;
    } else {
      return <div>플레이장면분석</div>;
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setContent(0)}>전적</button>
        <button onClick={() => setContent(1)}>교전능력분석</button>
        <button onClick={() => setContent(2)}>시야장악분석</button>
        <button onClick={() => setContent(3)}>플레이장면분석</button>
      </div>
      <Content />
    </>
  );
};

export default Detail;
