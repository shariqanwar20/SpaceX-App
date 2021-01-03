import React from "react";
import { Button } from "react-bootstrap";
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
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      {console.log(id)}
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
        <Button variant="outline-success links-buttons">
          <a
            href={
              data?.launch?.links?.article_link !== null
                ? data?.launch?.links?.article_link
                : undefined
            }
            target="_blank"
            rel="noreferrer"
          >
            Article
          </a>
        </Button>{" "}
        <Button variant="outline-success links-buttons">
          <a
            href={
              data?.launch?.links?.video_link !== null
                ? data?.launch?.links?.video_link
                : undefined
            }
            target="_blank"
            rel="noreferrer"
          >
            Video
          </a>
        </Button>
        <Button variant="outline-success links-buttons">
          <a
            href={
              data?.launch?.links?.wikipedia !== null
                ? data?.launch?.links?.wikipedia
                : undefined
            }
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia
          </a>
        </Button>
      </div>
    </div>
  );
};
