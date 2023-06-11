"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa"

interface IListItemProps {
  image: string
  name: string
  href: string
}

const ListItem: React.FC<IListItemProps> = ({
  image, name, href
}) => {
  const router = useRouter()

  const onCLick = () => {
    // Ad authetication before push
    router.push(href)
  }

  return (
    <button
      className="
        relative
        group
        flex
        items-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-100/10
        hover:bg-neutral-100/20
        pr-4
      "  
    >
      <div className="
        relative
        min-h-[64px]
        min-w-[64px]
      ">
        <Image
          className="object-cover"
          fill
          src={image}
          alt="Image"
        />
      </div>
      <p className="font-medium truncate py-5">
        {name}
      </p>
      <div className="
        absolute
        transition
        opacity-0
        rounded-full
        flex
        items-center
        justify-center
        bg-green-500
        drop-shadow-md
        right-5
        group-hover:opacity-100
        hover:scale-110
        p-3
      ">
        <FaPlay className="text-black"/>
      </div>
    </button>
  )
};

export default ListItem;
