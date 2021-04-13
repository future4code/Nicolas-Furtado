import React from "react";
import Lottie from "react-lottie";

const Animation = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={props.height}
        width={props.width}
      />
  );
};

export default Animation;
