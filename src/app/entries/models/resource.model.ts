export class Resource {
  _id?: string
  _attachments: any
  _rev?: string
  createdAt: number
  type: 'photo'
  status: 'draft' | 'saved' | 'archived'
  meta: any
}

export class ImageForm {
  caption: string
  locationName: string
}

export class LocationRequest {
  query?: string
  location: string
  radius: number
}

export class AttachmentOptions {
  id: string
  type: string
}

export class Coord {
  latitude: string
  longitude: string
}