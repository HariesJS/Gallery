import { Colors } from "../../shared/lib/theme/colors";

export interface LoadingIndicatorProps {
    color?: Colors
    size?: Size
}

type Size = 'small' | 'large'