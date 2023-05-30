import { useWindowDimensions } from "react-native";
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { BlurMask, Canvas, Rect } from "@shopify/react-native-skia";
import React from "react";
import { THEME } from "../../styles/theme";
import { useEffect } from 'react';

const STATUS = ['transparent', THEME.COLORS.BRAND_LIGHT, THEME.COLORS.DANGER_LIGHT];

type Props = {
    status: number;
}

export function OverlayFeeback({status}:Props){
    const color = STATUS[status]
    const {height, width} = useWindowDimensions();
    
    const opacity = useSharedValue(0)

    const styleAnimated = useAnimatedStyle(()=>{
        return{
            opacity: opacity.value
        }
    })

    useEffect(()=>{
        opacity.value = withSequence(
            withTiming(1, {duration: 400, easing: Easing.bounce}),
            withTiming(0)
        )
    },[status])

    return(
        <Animated.View style={[{height: height*1.5 ,width, position: 'absolute'}, styleAnimated]}>
            <Canvas style={{ flex:1}}>

                <Rect 
                    x={0}
                    y={0}
                    width={width}
                    height={height*1.5}
                    color={color}
                >
                    <BlurMask blur={800} style={"inner"}/>
                </Rect>
            </Canvas>

        </Animated.View>
    )
}