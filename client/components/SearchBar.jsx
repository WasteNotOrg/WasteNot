import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

const SearchBar = () => (
  <Form inline>
    <Button type="submit">Submit</Button>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
  </Form>
);

export default SearchBar;
