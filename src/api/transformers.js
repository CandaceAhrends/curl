const getMetadata = (fileName) => {
  const [type, path] = fileName.split("--");
  return {
    type,
    path,
    name: fileName,
    description: `${type} ${path}`,
  };
};

export const transformers = {
  list: (response) => {
    return response.list.map((item) => {
      return getMetadata(item);
    });
  },
};
