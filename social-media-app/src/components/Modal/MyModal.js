import React from "react";

import Modal from 'react-bootstrap/Modal'
import FacebookData from "../UI/FacebookData";
import TwitterData from "../UI/TwitterData";
import InstagramData from "../UI/InstagramData";
import YoutubeData from "../UI/YoutubeData";

import './Modal.css'


function MyModal(props) {

  const currentData = (socialData) => {
    switch (socialData) {
      case "facebook":
        return <FacebookData />
      case "twitter":
        return <TwitterData />
      case "instagram":
        return <InstagramData />
      case "youtube":
        return <YoutubeData />
      default:
        return <div>No Data</div>
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        {currentData(props.socialType)}
      </Modal.Body>

    </Modal>
  );
}

export default MyModal;