import React from "react";
//Styles
import { Form, Content, Button } from './SearchBar.styles';
//Images
import SearchIcon from '../../images/icons8-search.svg';

function SearchBar() {
    return (
        <Form>
            <Content>
                <img src={SearchIcon} alt=''></img>
                <input 
                    type='text'
                    placeholder='Search products, brands and categories'
                />
            </Content>
            <Button type='button'>search</Button>
        </Form>
    );
}

export default SearchBar;