import { StyledView } from "./styles"
import { ImageCard } from "../../uikit/ImageCard"
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from "react-native";
import { LoadingIndicator } from "../../uikit/LoadingIndicator";
import { RootState } from "../../redux/store/store";
import { useNavigation } from "@react-navigation/native";
import { RootStackEnum } from "../../shared/config/routes";
import { RootStackParamList } from "../../Navigator/interface";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ItemTypes } from "./interface";
import { getGalleryDataThunk } from "../../redux/actions/getGalleryDataThunk";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    RootStackEnum.GALLERY
>;

export const Gallery = () => {
    const dispatch = useDispatch()
    const gallery = useSelector((state: RootState) => state.galleryAPI.gallery);
    const navigation = useNavigation<HomeScreenNavigationProp>()
    
    useEffect(() => {
        dispatch(getGalleryDataThunk())
    }, [dispatch])

    const handleOpenImage = (uri: string, user: string, name: string) => () => {
        navigation.navigate(RootStackEnum.IMAGE_PAGE, {
            uri,
            user,
            name,
        })
    }

    const renderItem = useCallback(
        ({ item }: ItemTypes) => (
            <ImageCard
                onPress={handleOpenImage(item.links.download, item.user.name, item.alt_description)}
                url={item.links.download}
                name={item.alt_description}
                user={item.user.name}
            />
        ),
        [],
    )

    return (
        <StyledView>
            {gallery ? (
            <FlatList
                scrollEnabled={false}
                data={gallery}
                keyExtractor={i => i.id}
                renderItem={renderItem}
            />
            ) : <LoadingIndicator size='large' />}
        </StyledView>
    )
}