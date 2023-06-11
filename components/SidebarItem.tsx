import Link from "next/link"
import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge"

interface ISidebarItemProps {
  label: string
  active?: boolean
  href: string
  Icon: IconType
}

const SidebarItem: React.FC<ISidebarItemProps> = ({
  label,
  active,
  href,
  Icon
}) => {
  return (
    <Link
      href={href}
      className={twMerge(`
        flex
        flex-row
        gap-x-3
        h-auto
        item-center
        text-md
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1
      `, active && "text-white")}
    >
      <Icon size={26} />
      <p className="truncate w-full" >{label}</p>
    </Link>
  )
};

export default SidebarItem;