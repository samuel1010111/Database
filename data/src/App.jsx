// App.js
import  { useState } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (inputValue.trim() !== '') {
      setStack([...stack, inputValue]);
      setInputValue('');
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="stack-container">
            <h3>Stack</h3>
            <ListGroup>
              {stack.map((item, index) => (
                <ListGroup.Item key={index}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>

          <div className="buttons-container">
            <Button variant="success" onClick={handlePush}>
              Push
            </Button>
            <Button variant="danger" onClick={handlePop}>
              Pop
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
