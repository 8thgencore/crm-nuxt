/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPWRITE_URL: string
  readonly VITE_APPWRITE_PROJECT_ID: string
  readonly VITE_APPWRITE_DATABASE_ID: string
  readonly VITE_APPWRITE_STORAGE_ID: string
  readonly VITE_APPWRITE_COLLECTION_DEALS: string
  readonly VITE_APPWRITE_COLLECTION_CUSTOMERS: string
  readonly VITE_APPWRITE_COLLECTION_COMMENTS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
