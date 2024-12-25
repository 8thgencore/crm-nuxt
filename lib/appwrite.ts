import { APPWRITE_URL, APPWRITE_PROJECT_ID } from "@/app.constants";
import { Client, Account, Databases, Storage } from "appwrite";

export const appwrite = new Client();

appwrite.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT_ID);

export { ID } from "appwrite";
export const account = new Account(appwrite);
export const DB = new Databases(appwrite);
export const storage = new Storage(appwrite);
