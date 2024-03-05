import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { ApprovalCard } from './components/ApprovalCard';
import { CommentRow } from './components/CommentRow';
function App() {
  return (
    <>
      <ApprovalCard >
        <CommentRow />
      </ApprovalCard>
      <ApprovalCard >
        <CommentRow />
      </ApprovalCard>
      <ApprovalCard >
        <CommentRow />
      </ApprovalCard>
    </>
  )
}

export default App
