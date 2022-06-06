import { useEffect, useState } from "react";
import { Container,Row,Col, Card } from "react-bootstrap";
import kontenbase from "./config/api";

function App() {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    const { data, error } = await kontenbase.service('Todos').find()

    if(error){
      return alert(error.message)
    }

    setTodos(data)
  }

  useEffect(()=>{
    getTodos()
  },[])

  return (
    <Container>
      <Row>
        {todos?.map((todo,idx) =>(
        <Col lg={3} sm={6} key={idx}>
          <Card className="my-2">
            <Card.Body>
              <input 
                type="checkbox" 
                className="me-2" 
                checked={todo.isDone == true && true} 
                id={`checkbox-${idx}`} 
              />
              <label htmlFor={`checkbox-${idx}`}><b>{todo.title}</b></label>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
