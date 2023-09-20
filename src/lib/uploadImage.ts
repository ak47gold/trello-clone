import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if(!file) return;

    const fileUploaded = await storage.createFile(
        "6506375168e9c9f6fc88",
        ID.unique(),
        file
    )

    console.log(fileUploaded)

    return fileUploaded
}

export default uploadImage;