export default class GiphyAppUtils {
  static getMappedData = data => {
    return data.map(ele => {
      return {
        _id: ele.id,
        images: ele.images
      };
    });
  };
}
