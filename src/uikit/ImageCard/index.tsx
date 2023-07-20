import { Dimensions, View } from "react-native"
import { StyledView, StyledAuthor, StyledImage, StyledTitle, StyledLoadingView } from "./styles"
import { ImageCardProps } from "./interface"
import { useState } from "react"
import { LoadingIndicator } from "../LoadingIndicator"

export const ImageCard = ({ name, url, user, onPress }: ImageCardProps) => {
    const [loading, setLoading] = useState(true)

    return (
        <StyledView onPress={onPress}>
            <StyledTitle>{name}</StyledTitle>
            <StyledAuthor>{user}</StyledAuthor>
            <StyledImage source={{ uri: url }} onLoad={() => setLoading(false)} />
            <StyledLoadingView>
                {loading ? <LoadingIndicator /> : null}
            </StyledLoadingView>
        </StyledView>
    )
}