import React, { useState } from "react";
import Blog from "./components/Blog";
import ReadMore from "./components/ReadMore";
const index = () => {
  const [isRead, setIsRead] = useState(true);
  return (
    <div>
      {isRead ? <Blog isRead={isRead} setIsRead={setIsRead} /> : <ReadMore />}
    </div>
  );
};

export default index;
