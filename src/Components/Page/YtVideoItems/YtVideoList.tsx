import React, { useEffect, useState } from "react";
import { ytvideoModel } from "../../../Interfaces";
import YtVideoCard from "./YtVideoCard";
import { useGetVideoItemsQuery } from "../../../Apis/ytVideoItemApi";
import { useDispatch } from "react-redux";
import { setYTVideoItem } from "../../../Storage/Redux/ytVideoItemSlice";
import { UUID } from "crypto";

function YtVideoList() {
  //const [ytVideos, setYtVideos] = useState<ytvideoModel[]>([]);

  const dispatch = useDispatch();
  const { data, isLoading } = useGetVideoItemsQuery(null);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setYTVideoItem(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data.result.length === 0) {
    return <div>Keine Datensätze vorhanden</div>;
  }

  return (
    <div className="container row">
      {data.result.length > 0 &&
        data.result.map((ytVideoItem: ytvideoModel, index: UUID) => (
          <YtVideoCard ytVideoItem={ytVideoItem} key={index} />
        ))}
    </div>
  );
}

export default YtVideoList;
