import React from 'react';
import { Form, Button } from 'react-bootstrap';

const RegisterForm = () => {
  const hello = 0;
  return (
    <div id="formCont">
      <Form>
        <Form.Group id="formGridCheckbox">
          <Form.Check inline type="checkbox" label="Meat" />
          <Form.Check inline type="checkbox" label="Perishable" />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check inline type="checkbox" label="Eggs" />
          <Form.Check inline type="checkbox" label="Perishable" />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check inline type="checkbox" label="Dairy" />
          <Form.Check inline type="checkbox" label="Perishable" />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check inline type="checkbox" label="Vegetables" />
          <Form.Check inline type="checkbox" label="Perishable" />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check inline type="checkbox" label="Fruit" />
          <Form.Check inline type="checkbox" label="Perishable" />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check inline type="checkbox" label="Prepared Meals" />
          <Form.Check inline type="checkbox" label="Perishable" />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check inline type="checkbox" label="Baked Goods" />
          <Form.Check inline type="checkbox" label="Perishable" />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check inline type="checkbox" label="Frozen Food" />
          <Form.Check inline type="checkbox" label="Perishable" />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check inline type="checkbox" label="Other" />
          <Form.Check inline type="checkbox" label="Perishable" />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check inline type="checkbox" label="Dryed Goods" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;