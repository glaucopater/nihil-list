export const dataset1 = [
  {
    id: 1,
    title: "name 1",
  },
  {
    id: 2,
    title: "name 2",
  },
  {
    id: 3,
    title: "name 3",
  },
];

export const renderer1 = () => {
  return ["title"];
};

export const dataset2 = [
  { name: "Name 1", description: "Description 1" },
  { name: "Name 2", description: "Description 2", link: "google.com" },
  { name: "Name 3", description: "Description 3" },
];

export const renderer2 = () => {
  return ["name", "description", "link"];
};


export const renderer3 = () => {
  return ["a", "b", "c", "link"];
};
