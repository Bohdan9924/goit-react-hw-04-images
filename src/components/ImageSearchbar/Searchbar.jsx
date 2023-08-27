import PropTypes from 'prop-types';
import { Component } from 'react';

import { BsSearch } from 'react-icons/bs';

import { Header, Form, Button, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChangeInput = e => {
    this.setState({ search: e.target.value });
  };
  
  handleSubmitInput = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmitInput}>
          <Input
            type="text"
            placeholder="Search images"
            value={this.state.search}
            onChange={this.handleChangeInput}
          />

          <Button type="submit">
            <span style={{ fontSize: '10px', color: '#19131b' }}>
              <BsSearch style={{ fill: '#260033', marginRight: '3px' }} />
              Search
            </span>
          </Button>
        </Form>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

