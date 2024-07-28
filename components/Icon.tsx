import { cn } from "@/lib/utils";

export default function Icon({icon, variant="rounded", filled, white=false, className}:{icon: string, variant?: string, filled?: boolean, white?: boolean, className?: string}){
    return <span className={cn(`${filled ? 'filled' : ""} material-symbols-${variant} icon ${white && 'icon-white'}`, className)}>
        {icon}
    </span>
}