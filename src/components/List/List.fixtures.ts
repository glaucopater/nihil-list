export const dataset1 = [
  {
    id: 1,
    title: "Title 1",
  },
  {
    id: 2,
    title: "Title 2",
  },
  {
    id: 3,
    title: "Title 3",
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

export const rendererBigDataser = () => {
  return ["balance", "name", "company", "email", "phone"];
};
