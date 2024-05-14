import React from "react";

interface BlogPost1Props {
  onHide: () => void;
}

const BlogPost1 = ({ onHide }: BlogPost1Props) => {
  return (
    <div>
      index1 <button onClick={onHide}>Close</button>
    </div>
  );
};

export default BlogPost1;
