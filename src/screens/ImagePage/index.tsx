import { RouteProp, useRoute } from "@react-navigation/native"
import { RootStackParamList } from "../../Navigator/interface"
import { RootStackEnum } from "../../shared/config/routes"
import { StyledTitle, StyledAuthor, StyledView, StyledImage } from "./styles"

export const ImagePage = () => {
    const route = useRoute<RouteProp<RootStackParamList, RootStackEnum.IMAGE_PAGE>>().params

    return (
        <StyledView>
            <StyledTitle>{route?.name}</StyledTitle>
            <StyledImage source={{ uri: route?.uri }} />
            <StyledAuthor>{route?.user}</StyledAuthor>
        </StyledView>
    )
}