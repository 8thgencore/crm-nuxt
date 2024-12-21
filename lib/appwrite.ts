import { APPWRITE_URL, APPWRITE_PROJECT_ID } from "@/app.constants";
import { Client, Account, Databases } from "appwrite";

export const appwrite = new Client();

appwrite.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT_ID);

export { ID } from "appwrite";
export const account = new Account(appwrite);
export const databases = new Databases(appwrite);
export const storage = new Storage();
