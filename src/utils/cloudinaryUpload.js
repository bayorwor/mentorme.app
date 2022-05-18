import axios from "axios";

const url = "https://api.Cloudinary.com/v1_1/mentorme/image/upload";

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ziwaxebv");

  return axios
    .post(url, formData)
    .then((res) => {
      console.log(res.data.secure_url);
      return res.data.secure_url;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default uploadImage;
