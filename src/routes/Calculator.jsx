import { Button } from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";

export const Calculator = () => {
  const navigate = useNavigate();
  let params = useParams();

  return (
    <>
      Index: {params.id}
      username: {params.username}
      <div>
        <input type="text" value="0" />
      </div>
      <div>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>+</Button>
      </div>
      <div>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </div>
      <div>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>*</Button>
      </div>
      <div>
        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>
        <Button>/</Button>
      </div>
      <Button onClick={() => navigate("/page-3")}>
        redirect to InboxMessages
      </Button>
    </>
  );
};
