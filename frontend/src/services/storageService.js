export const getAllChats = () => {
  const savedChats = localStorage.getItem("allChats");
  return savedChats ? JSON.parse(savedChats) : [];
};

export const saveAllChats = (chats) => {
  localStorage.setItem("allChats", JSON.stringify(chats));
};

// export const getAllChats = async () => {
//   try {
//     const response = await fetch("http://localhost:8000/getChats");
//     const data = await response.json();
//     return data.map(item => item.chat) || [];
//   } catch (error) {
//     console.error("Failed to fetch chats", error);
//     return [];
//   }
// };

// export const saveAllChats = async (chats) => {
//   try {
//     await fetch("http://localhost:8000/saveChats", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ chats }),
//     });
//   } catch (error) {
//     console.error("Failed to save chats", error);
//   }
// };