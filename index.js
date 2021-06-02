import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
        author="Sam" 
        timeAgo="today at 5:45am" 
        content="nice blog post" 
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail
      author="Alex"
      timeAgo="today at 4:00am"
      content="i like the subject"
      avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
      author="Jane" 
      timeAgo="yesterday at 8am" 
      content="i like the writing" 
      avatar={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
