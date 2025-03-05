type Props = {
  imageUrl: string
  caption: string
}

export default function ImageCard({ imageUrl, caption }: Props) {
  return (
    <figure className="mx-auto w-full max-w-[500px] overflow-hidden rounded-[20px] border-4 border-slate-200 bg-main font-base shadow-shadow dark:border-slate-800 sm:w-[80%]">
      <img className="aspect-square w-full object-cover" src={imageUrl} alt="image" />
      {/* <figcaption className="border-t-2 text-mtext border-slate-200 p-4 dark:border-slate-800">
        {caption}
      </figcaption> */}
    </figure>
  )
}
