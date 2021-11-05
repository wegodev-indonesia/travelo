import Image from 'next/image'

const Rating = () => {
  return (
    <div className="flex gap-1 align-center">
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Image
            key={index}
            src="/assets/icons/yellow-star.svg"
            height="20"
            width="20"
          />
        )
      })}
    </div>
  )
}

export default Rating
