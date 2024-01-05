// App.js
import  { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

const App = () => {
  const [inputArray, setInputArray] = useState('');
  const [sortedArray, setSortedArray] = useState([]);

  const handleSort = () => {
    const arrayToSort = inputArray.split(',').map((item) => parseInt(item.trim()));
    const sorted = quickSort(arrayToSort);
    setSortedArray(sorted);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="formArrayInput">
              <Form.Label>Enter an array (comma-separated):</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., 5, 2, 8, 1"
                value={inputArray}
                onChange={(e) => setInputArray(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSort}>
              Sort
            </Button>
          </Form>

          {sortedArray.length > 0 && (
            <div className="result-container">
              <h3>Sorted Array:</h3>
              <p>{sortedArray.join(', ')}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
