import { Image, ScrollView, Text, View } from "react-native";
import { styled } from "styled-components";
import { Colors } from "../../shared/lib/theme/colors";

export const StyledView = styled(ScrollView)({
    backgroundColor: Colors.darkGray2,
})

export const StyledTitle = styled(Text)({
    color: Colors.white,
    fontSize: '20px',
    paddingHorizontal: '10px',
    paddingTop: '10px'
})

export const StyledAuthor = styled(Text)({
    color: Colors.white,
    fontWeight: '800',
    marginTop: '10px',
    textAlign: 'right',
    textDecoration: 'underline',
    textDecorationColor: Colors.white,
    paddingHorizontal: '10px'
})

export const StyledImage = styled(Image)`
    width: 100%;
    height: 200px;
    marginVertical: 10px;
`