import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

const SearchBar = () => (
  <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="button">Submit</Button>
  </Form>
);

export default SearchBar;
