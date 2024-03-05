import {
    CardMeta,
    CardHeader,
    CardDescription,
    Image,
  } from 'semantic-ui-react'



export const CommentRow = () => {

    return (
        <>
        <Image
          floated='right'
          size='mini'
          src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg'
        />
        <CardHeader>Steve Sanders</CardHeader>
        <CardMeta>Friends of Elliot</CardMeta>
        <CardDescription>
          Steve wants to add you to the group <strong>best friends</strong>
        </CardDescription>
      </>  
    );
};