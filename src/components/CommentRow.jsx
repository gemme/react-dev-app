import {
<<<<<<< HEAD
    CardMeta,
    CardHeader,
    CardDescription,
    Image,
  } from 'semantic-ui-react'
import { useState } from 'react';
=======
  CardMeta,
  CardHeader,
  CardDescription,
  Image,
} from "semantic-ui-react";
import PropTypes from "prop-types";
>>>>>>> 52297cb15da7ccb3919795d53476128ebcfad91e

export const CommentRow = (props) => {
  return (
    <>
      <Image
        floated="right"
        size="mini"
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
      />
      <CardHeader>{props.name}</CardHeader>
      <CardMeta>{props.meta}</CardMeta>
      <CardDescription>{props.description}</CardDescription>
    </>
  );
};

// Typescript -> ES6

<<<<<<< HEAD
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
=======
CommentRow.propTypes = {
  name: PropTypes.string,
  meta: PropTypes.string,
  description: PropTypes.string,
};
>>>>>>> 52297cb15da7ccb3919795d53476128ebcfad91e
