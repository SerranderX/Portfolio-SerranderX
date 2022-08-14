import React from "react"

export interface InputProps {
    type: string
    value: string
    labelText: string
    name: string
    handleValue?: (event: any) => void
    cols?: number
    rows?: number
}