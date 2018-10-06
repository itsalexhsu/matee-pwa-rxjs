export interface Entry {
  _id: string
  _rev: string
  title: string
  status: "saved" | "draft" | "archived" | "deleted"
  forDevelopment: boolean
  createdAt: number
  modifiedAt: number
  imageLinks: {
    thumbnail: string
    image: string
  }
}
