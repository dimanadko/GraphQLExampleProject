import React from "react";
import { withStyles } from "@material-ui/styles";
import {
  Card,
  CardActionArea,
  Link,
  CardContent,
  Typography
} from "@material-ui/core";

type AuthorProps = {
  name: string;
  id: string;
};

type BookItemProps = {
  id: string;
  name: string;
  author: AuthorProps;
  genre: string;
  classes: {
    bookCard: string;
    cardAction: string;
  };
};

const styles = {
  bookCard: {
    width: "100%",
    height: "100%"
  },
  cardAction: {
    height: "100%"
  }
};

const BookItem: React.FC<BookItemProps> = ({
  id,
  name,
  author,
  genre,
  classes
}) => {
  return (
    <Card className={classes.bookCard}>
      <CardActionArea className={classes.cardAction}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {genre}
          </Typography>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              alert(`I'm a button.${id}`);
            }}
          >
            {author.name}
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(BookItem);
