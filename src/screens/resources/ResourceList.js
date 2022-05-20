// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Spin, Typography } from "antd";
// import { apiKey } from "../../constants/apKey";
// import YouTube from "react-youtube";

// function ResourceList(props) {
//   // const query = props.match.params.query;
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const opts = {
//     height: "390",
//     width: "640",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };

//   function _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }

//   // useEffect(() => {
//   //   const fetchData = () => {
//   //     setLoading(true);
//   //     axios({
//   //       method: "GET",
//   //       url: "https://www.googleapis.com/youtube/v3/search",
//   //       params: {
//   //         part: "snippet",
//   //         maxResults: "20",
//   //         key: apiKey,
//   //         // q: "traversy media",
//   //       },
//   //     })
//   //       .then((res) => {
//   //         setPosts(res.data.items);
//   //       })
//   //       .catch((error) => {
//   //         console.log(error);
//   //       });
//   //     setLoading(false);
//   //   };

//   //   fetchData();
//   // }, []);

//   if (loading) {
//     return (
//       <div>
//         <Spin />
//       </div>
//     );
//   }

//   return (
//     <Card>
//       <Typography.Title level={2} className="title">
//         Our List of Resources
//       </Typography.Title>
//       {/* <video src="https://www.youtube.com/watch?v=Os49oPTfzuU"></video> */}

//       <YouTube videoId="Os49oPTfzuU" opts={opts} onReady={_onReady} />
//     </Card>
//   );
// }
// export default ResourceList;
