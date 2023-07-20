import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import { styled } from "styled-components"
import { Colors } from "../../shared/lib/theme/colors"

const { width } = Dimensions.get('window')

export const StyledView = styled(TouchableOpacity).attrs({
    activeOpacity: 0.8
})({
    backgroundColor: 'white',
    margin: '10px',
    borderRadius: '10px',
})

export const StyledTitle = styled(Text)({
    fontSize: '18px',
    fontWeight: '600',
    paddingHorizontal: '5px'
})

export const StyledAuthor = styled(Text)({
    paddingHorizontal: '5px',
    fontSize: '20px',
    color: Colors.blue,
    fontWeight: '700',
    textAlign: 'right'
})

export const StyledImage = styled(Image)`
    width: 100%;
    height: 150px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const StyledLoadingView = styled(View)`
    position: absolute;
    top: 55%;
    left: 48%;
`