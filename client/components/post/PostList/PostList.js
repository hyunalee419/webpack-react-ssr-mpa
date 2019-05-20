import React from 'react';

const PostList = ({ data }) => {
  const items = data && data.map((item) => (
    <li key={item.id}>{item.id}: {item.title}</li>
  ));
  return (
    <ul className="post-list">
      {items}
    </ul>
  );
};

export default PostList;
