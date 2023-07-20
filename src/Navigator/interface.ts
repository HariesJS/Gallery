import { RootStackEnum } from "../shared/config/routes";

export type RootStackParamList = {
    [RootStackEnum.GALLERY]: undefined
    [RootStackEnum.IMAGE_PAGE]: {
        uri: string
        name: string
        user: string
    }
};