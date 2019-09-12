import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, CircularProgress } from "@material-ui/core";
import BookItem from "../components/BookItem";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AddBookForm from "../components/AddBookForm";

const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
      author {
        id
        name
      }
    }
  }
`;

const styles = {
  bookPage: {},
  bookGrid: {
    display: "grid"
  }
};

type AuthorProps = {
  name: string;
  id: string;
};

type BookItemProps = {
  id: string;
  name: string;
  author: AuthorProps;
  genre: string;
};

type BooksProps = {
  data: {
    books: Array<BookItemProps>;
  };
  classes: {
    bookGrid: string;
  };
};

const Books: React.FC<BooksProps> = ({ classes }) => {
  const { loading, data } = useQuery(getBooksQuery);
  console.log({ data, loading });
  return loading ? (
    <CircularProgress />
  ) : (
    <div>
      <Grid container>
        <Grid item container spacing={2} xs={8}>
          {data.books.map((book: any) => (
            <Grid item sm={2}>
              <BookItem {...book} />
            </Grid>
          ))}
        </Grid>
        <Grid xs={4} item>
          <AddBookForm />
        </Grid>
      </Grid>
    </div>
  );
};

Books.defaultProps = {
  data: {
    books: []
  }
};

export default withStyles(styles)(Books);
