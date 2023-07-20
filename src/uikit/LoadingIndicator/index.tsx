import { ActivityIndicator } from "react-native"
import { Colors } from "../../shared/lib/theme/colors"
import { LoadingIndicatorProps } from "./interface"

export const LoadingIndicator = ({ color = Colors.blue, size = 'small' }: LoadingIndicatorProps) => {
    return (
        <ActivityIndicator size={size} color={color} />
    )
}