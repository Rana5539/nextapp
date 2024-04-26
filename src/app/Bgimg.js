
import Image from "next/image";

export default function AppBgImg() {
  return <Image 
    src={'/spider.jpg'}
    loading = 'lazy'
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
      zIndex: -1,
     
    }}
  />
}