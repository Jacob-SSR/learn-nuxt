export default defineEventHandler((event) => {
  return {
    customers: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
      { id: 3, name: "John Smith" },
    ],
  };
});
