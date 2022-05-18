import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spin } from "antd";
import { apiKey } from "../../constants/apKey";
import YouTube from "react-youtube";

function ResourceList(props) {
  // const query = props.match.params.query;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          part: "snippet",
          maxResults: "20",
          key: apiKey,
          // q: "traversy media",
        },
      })
        .then((res) => {
          setPosts(res.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <YouTube videoId={post.id.videoId} />
      ))}
    </div>
  );
}
export default ResourceList;
