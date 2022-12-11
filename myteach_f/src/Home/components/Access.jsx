//외부라이브러리
import { useNavigate, Outlet } from "react-router-dom";
import { InputGroup, Form, Button } from "react-bootstrap";

//내부모듈

//css
import "../css/input.css";

const Access = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="input">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="소환사 이름"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button
            onClick={() => {
              navigate("/records");
            }}
            variant="outline-secondary"
            id="button-addon2"
          >
            Button
          </Button>
        </InputGroup>
      </div>
    </>
  );
};

export default Access;
