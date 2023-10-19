import React from "react";
import { YtVideoList } from "../Components/Page/YtVideoItems";

function Home() {
  return (
    <div>
      <div className="container p-2">
        <YtVideoList />
      </div>
    </div>
  );
}

export default Home;
