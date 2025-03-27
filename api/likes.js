import fs from "fs/promises"; // Use Promises for async handling

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { id, type } = req.body; // id for videos, type to differentiate image/video
    if (!id || !type) {
      return res.status(400).json({ message: "Invalid request" });
    }

    // Determine file path based on type
    const filePath =
      type === "image"
        ? "./src/Components/Data.js"
        : "./src/Components/VideosData.js";

    // Read file
    const fileContent = await fs.readFile(filePath, "utf8");
    const match = fileContent.match(/export const Data = (\[.*\])/s);

    if (match) {
      return res.status(500).json({ message: "Data not found" });
    }

    let data = JSON.parse(match[1]); // Convert string to array

   

    // Find and update likes
    const itemIndex = data.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found" });
    }

    data[itemIndex].likes += 1;

    // Write updated data back
    const newFileContent = `export const Data = ${JSON.stringify(data, null, 2)};`;
    await fs.writeFile(filePath, newFileContent, "utf8");

    return res.json({ message: "Like updated", likes: data[itemIndex].likes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}
