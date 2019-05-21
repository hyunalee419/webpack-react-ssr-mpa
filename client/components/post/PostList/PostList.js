import React from 'react';
import PropTypes from 'prop-types';

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

PostList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired
};

export default PostList;
