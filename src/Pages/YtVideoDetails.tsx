import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetVideoItemByIdQuery } from "../Apis/ytVideoItemApi";
import { useNavigate } from "react-router-dom";

function YtVideoDetails() {
  const [isChecked, setIsChecked] = useState(true); // Zustandsvariable für den Checkbox-Wert
  const { ytvideoId } = useParams();
  const { data, isLoading } = useGetVideoItemByIdQuery(ytvideoId);
  const navigate = useNavigate();

  // Event-Handler, um den Wert der Checkbox zu ändern
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Ändert den Wert der Checkbox auf das Gegenteil des aktuellen Werts
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div style={container}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Video Title</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputEmail3"
            value={data.result.videoTitle}
          />
        </div>
      </div>

      <div style={paddingItem}></div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Video Link</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputPassword3"
            value={data.result.youTubeVideoLink}
          />
        </div>
      </div>

      <div style={paddingItem}></div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Thumbnail Link</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputPassword3"
            value={data.result.thumbnailImage}
          />
        </div>
      </div>

      <div style={paddingItem}></div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Credits to pay</label>
        <div className="col-sm-10">
          <input
            type="number"
            min="1"
            className="form-control"
            id="inputPassword3"
            value={data.result.creditsToPay}
          />
        </div>
      </div>

      <div style={paddingItem}></div>

      <div className="form-group row">
        <div className="col-sm-2"></div>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
              checked={data.result.isShort}
            />
            <label className="form-check-label">Video is a Short</label>
          </div>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-2"></div>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              onClick={handleCheckboxChange}
              className="form-check-input"
              type="checkbox"
              checked={data.result.isVisible}
              id="gridCheck1"
            />
            <label className="form-check-label">Video is active</label>
          </div>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-10">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default YtVideoDetails;

const container = {
  marginTop: "20px",
  marginRight: "20px",
  marginLeft: "20px",
};

const paddingItem = {
  marginTop: "10px",
};
