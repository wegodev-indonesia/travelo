import Image from 'next/image'

const CategoryCard = () => {
  return (
    <article className="flex flex-col w-[182px]">
      <figure className="relative w-full h-[179px] rounded-xl overflow-hidden mb-5">
        <Image
          src="/assets/home/bromo.png"
          alt="Borobudur"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </figure>

      <p className="text-heading-3 text-gray-100 font-bold">Gunung</p>
    </article>
  )
}

export default CategoryCard
