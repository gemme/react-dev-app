  import { ApprovalCard } from '../components/ApprovalCard';
  import {CommentRow} from '../components/CommentRow';
  import { useState } from 'react';
import { useEffect } from 'react';

export const InboxMessages = () => {
  const [posts,setPosts] = useState([])

    useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/posts",{method: 'GET',headers: {
        'Content-Type': 'application/json'
      }})
      .then(
        async (response) => {
          const data = await response.json();
          setPosts(data);
        }
      )

    },[])

    return (
        <>
        {posts.map((post) => {
          return (
          <ApprovalCard>
          <CommentRow name={post.userId} meta={post.tittle} description={post.body} />
           </ApprovalCard>)
        })
        }
       {/* <ApprovalCard>
      <CommentRow name={"Carlos Estrada"} meta={"06/03/2024"} description={"Descripcion muy larga de cosas"} liftin={(argumento) =>{console.log(argumento)}}/>
       </ApprovalCard>
       <ApprovalCard>
      <CommentRow name={"Fernando Bacquerie"} meta={"06/03/2024"} description={"Descripcion muy larga de cosas"}/>
       </ApprovalCard>
       <ApprovalCard>
      <CommentRow name={"Juan Manuel"} meta={"06/03/2024"} description={"Descripcion muy larga de cosas"}/>
       </ApprovalCard> */}
  </>
    )
}