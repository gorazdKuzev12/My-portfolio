import React from "react";

interface BlogPost2Props {
  onHide: () => void;
}

const BlogPost2 = ({ onHide }: BlogPost2Props) => {
  return (
    <div>
      2 <button onClick={onHide}>Close</button>
    </div>
  );
};

export default BlogPost2;
