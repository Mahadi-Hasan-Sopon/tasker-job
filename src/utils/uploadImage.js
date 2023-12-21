const uploadImage = async (image) => {
  try {
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`,
      {
        method: "POST",
        body: image,
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export default uploadImage;
