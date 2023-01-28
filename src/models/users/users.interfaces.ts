import { Dayjs } from "dayjs"

export interface UserElastic {
  id?: string
  email: string
  username: string
}

export interface UserI extends UserElastic {
  profilePicture: string
  description?: string
  customURL?: string
  gameLibrary?: Array<string>
  isDeveloper: boolean
  gamesCreated?: Array<string>
  thirdParty: Array<string>
  updateDate: Dayjs
  createdDate: Dayjs
}

export interface UserCreateRequest{
  id?: string
  email: string
  username: string
  thirdParty: Array<string>
  updateDate: Dayjs
  createdDate: Dayjs
}
