const url = "https://jsonplaceholder.typicode.com/photos";

export const PhotoAPI = {
  get: async (albumId: string) => {
    const response = await fetch(`${url}?albumId=${albumId}`);
    const photos = await response.json();
    return photos;
  },
  getAll: async () => {
    const response = await fetch(url);
    const photos = await response.json();
    return photos;
  },
};
