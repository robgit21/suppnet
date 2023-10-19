import React from "react";
import { ytvideoModel } from "../../../Interfaces";
import { Link } from "react-router-dom";

interface Props {
  ytVideoItem: ytvideoModel;
}

function YtVideoCard(props: Props) {
  return (
    <div>
      <div style={cardBackground} className="card mb-3">
        <div
          className="row no-gutters"
          style={{ paddingTop: "0px", paddingBottom: "0px" }}
        >
          <div className="col-md-4">
            <Link to={`YtVideoDetails/${props.ytVideoItem.id}`}>
              <img
                style={imageItemStyle}
                src={props.ytVideoItem.thumbnailImage}
                className="card-img"
                alt={props.ytVideoItem.channelName}
              />
            </Link>
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{ paddingTop: "0px", paddingBottom: "0px" }}
            >
              <h5 className="card-title" style={channelSectionFont}>
                Channel: {props.ytVideoItem.channelName}
              </h5>
              <hr style={{ marginTop: "0px", marginBottom: "3px" }} />
              <p className="card-text" style={videoTitleSectionFont}>
                {props.ytVideoItem.videoTitle}
              </p>
              <p
                className="card-text"
                style={{ paddingTop: "0px", paddingBottom: "5px" }}
              >
                <div style={{ fontSize: "20px", color: "#d4a602" }}>
                  Credits: &nbsp;
                  {props.ytVideoItem.creditsToPay}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YtVideoCard;

const channelSectionFont = {
  color: "white",
  paddingTop: "5px",
};

const videoTitleSectionFont = {
  color: "white",
  fontSize: "14px",
};

const imageItemStyle = {
  borderRadius: "20px",
  padding: "10px",
};

const cardBackground = {
  background:
    "linear-gradient(35deg, rgba(2,0,36,1) 0%, rgba(226,0,255,1) 100%)",
  maxWidth: "540px;",
};
