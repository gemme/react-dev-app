import {
  CardMeta,
  CardHeader,
  CardDescription,
  Image,
} from "semantic-ui-react";
import PropTypes from "prop-types";

// Typescript -> ES6

export const CommentRow = (props) => {
    if (props.liftin)
      props.liftin("Consola")
    return (
        <>
        <Image
          floated='right'
          size='mini'
          src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg'
        />
        <CardHeader>{props.name}</CardHeader>
        <CardMeta>{props.meta}</CardMeta>
        <CardDescription>
          {props.description}
        </CardDescription>
      </>  
    );
};
CommentRow.propTypes = {
  name: PropTypes.string,
  meta: PropTypes.string,
  description: PropTypes.string,
};
