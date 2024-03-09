import { CardContent, Button, Card } from "semantic-ui-react";
import PropTypes from "prop-types";
import { useState } from "react";

export const ApprovalCard = (props) => {
  const [approve, setApprove] = useState(undefined);

  const isNotApprovedOrRejected = approve === undefined;
  const approveContent = () => {
    setApprove(true);
  };
  const rejectContent = () => {
    setApprove(false);
  };

  return isNotApprovedOrRejected ? (
    <Card>
      <CardContent>{props.children}</CardContent>
      <CardContent extra>
        <div className="ui two buttons">
          <Button onClick={approveContent} basic color="green">
            Approve
          </Button>
          <Button onClick={rejectContent} basic color="red">
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
  ) : approve ? (
    props.children
  ) : null;
};

ApprovalCard.propTypes = {
  children: PropTypes.node.isRequired,
};
