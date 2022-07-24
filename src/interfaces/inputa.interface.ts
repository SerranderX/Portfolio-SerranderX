import React from "react"

export interface InputProps {
    type: string
    value: string
    labelText: string
    name: string
    handleValue: React.Dispatch<React.SetStateAction<string>>
    cols?: number
    rows?: number
}