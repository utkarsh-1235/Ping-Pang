import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps{
    className?: string
    children: ReactNode
}

export const MaxWidthWrapper = ({
    className,
    children
}: MaxWidthWrapperProps) => {
    return (
        <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}

