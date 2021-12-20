import React from "react";

export type TimerProps = {
    key: React.Key
    duration: number
    isPlaying?: boolean
    onComplete: () => void
}