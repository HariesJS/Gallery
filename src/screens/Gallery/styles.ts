import { ScrollView } from "react-native"
import { styled } from "styled-components"
import { Colors } from "../../shared/lib/theme/colors"

export const StyledView = styled(ScrollView).attrs({
    contentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})({
    backgroundColor: Colors.darkGray2
})