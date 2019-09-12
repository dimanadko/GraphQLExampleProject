import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import {
  Grid,
  CircularProgress,
  Paper,
  InputLabel,
  Input,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {string} from "prop-types";

const styles = {
  formControl: {
    width: "70%"
  }
};

type AddBookFormProps = {
  classes: {
    formControl: string;
  };
};

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const AddBookForm: React.FC<AddBookFormProps> = ({ classes }) => {
  const [bookName, setBook] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const { loading, data } = useQuery(getAuthorsQuery);

  return (
    <Paper square>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-bookName">BookName</InputLabel>
        <Input
          disabled={loading}
          id="component-bookName"
          value={bookName}
          onChange={setBook}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-genre">Genre</InputLabel>
        <Input
          disabled={loading}
          id="component-genre"
          value={genre}
          onChange={setGenre}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-author">Author</InputLabel>
        <Select
          disabled={loading}
          value={author}
          onChange={setAuthor}
          inputProps={{
            name: "author",
            id: "component-author"
          }}
        >
          {data.authors.map((author: { name: string; id: ID }) => (
            <MenuItem value={author.id}>{author.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
};

export default withStyles(styles)(AddBookForm);
