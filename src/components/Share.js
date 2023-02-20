import React from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

function Share(props) {
  return (
    <div>
      <TwitterShareButton url={props.url} title={props.title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
        {" "}
      <FacebookShareButton url={props.url} quote={props.title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      {" "}
      <TelegramShareButton url={props.url} title={props.title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      {" "}
      <WhatsappShareButton url={props.url} title={props.title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      {" "}
      <LinkedinShareButton
        url={props.url}
        title={props.title}
        summary={props.description}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}

export default Share;
