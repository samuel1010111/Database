import  { useState, useMemo } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};

const App = () => {
  const [inputText, setInputText] = useState('');

  const isPalindromeResult = useMemo(() => isPalindrome(inputText), [inputText]);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="formInput">
              <Form.Label>Enter a word, number, or phrase:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </Form.Group>
          </Form>

          {inputText && (
            <Alert variant={isPalindromeResult ? 'success' : 'danger'}>
              {isPalindromeResult
                ? `${inputText} is a palindrome! 🎉`
                : `${inputText} is not a palindrome. 😞`}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
