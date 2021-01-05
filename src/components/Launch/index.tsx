import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useLaunchProfileQuery } from "../../generated/graphql";

type Props = {
  id: string;
};
export const Launch: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useLaunchProfileQuery({
    variables: {
      id: id,
    },
  });
  const articleLink = data?.launch?.links?.article_link;
  const videoLink = data?.launch?.links?.video_link;
  const wikipediaLink = data?.launch?.links?.wikipedia;
  if (loading) {
    return (
      <div>
        <Spinner animation="border" variant="success" />
      </div>
    );
  } else if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h4 className="launchObj-heading">
        {data?.launch?.mission_name}({data?.launch?.launch_year})
      </h4>
      <br />
      <div>{data?.launch?.details}</div>
      <br />
      <span>Status: </span>
      <span className={data?.launch?.launch_success ? "success" : "failure"}>
        {data?.launch?.launch_success ? "Success" : "Failure"}
      </span>
      <br />
      <br />
      <div className="links-buttons-container">
        <a
          href={articleLink !== null ? articleLink : ""}
          target="_blank"
          rel="noreferrer"
          className="links-buttons"
        >
          <Button variant="outline-success link-button">Article</Button>
        </a>{" "}
        <a
          href={videoLink !== null ? videoLink : ""}
          target="_blank"
          rel="noreferrer"
          className="links-buttons"
        >
          <Button variant="outline-success link-button">Video</Button>
        </a>{" "}
        <a
          href={wikipediaLink !== null ? wikipediaLink : ""}
          target="_blank"
          rel="noreferrer"
          className="links-buttons"
        >
          <Button variant="outline-success link-button">Wikipedia</Button>
        </a>{" "}
      </div>
    </div>
  );
};
