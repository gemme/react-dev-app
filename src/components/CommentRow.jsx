import {
    CardMeta,
    CardHeader,
    CardDescription,
    Image,
  } from 'semantic-ui-react'
import { useState } from 'react';



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