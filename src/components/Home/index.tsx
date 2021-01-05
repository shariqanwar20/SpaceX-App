import React from "react";
import Typical from "react-typical";

export const Home = () => {
  return (
    <>
      <div className="spaceX-background">
        <Typical
          steps={["Welcome To SpaceX", 2000, "Ticket To MARS! 😂", 1000]}
          loop={Infinity}
          wrapper="p"
        />
        <div className="description">
          <span>
            <strong>SpaceX </strong>
          </span>
          <span>A company where innovators meet!</span>
        </div>
      </div>
    </>
  );
};
