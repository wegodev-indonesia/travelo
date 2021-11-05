import Image from 'next/image'

import Button from 'components/Button'

const PackageCard = () => {
  return (
    <article className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden w-[393px]">
      <figure className="relative w-full h-[268px]">
        <Image
          src="/assets/home/cliff.png"
          alt="Borobudur"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </figure>

      <div className="flex flex-col p-4">
        <div className="flex items-center mb-4">
          <Image src="/assets/icons/yellow-star.svg" height="20" width="20" />

          <p className="text-heading-5 text-gray-70 ml-1">4.6 (1.242 Review)</p>
        </div>

        <p className="text-heading-3 text-gray-100 font-label font-bold">
          Colloseum, Roma
        </p>
        <p className="text-heading-4 text-gray-70 mb-4">Italia</p>

        <p className="text-heading-3 text-gray-100 font-bold mb-4">
          Rp. 20.000.000
        </p>

        <p className="text-heading-5 text-gray-70 mb-4">
          Untuk 1 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan
          siang, makan malam, transportasi travel
        </p>

        <div className="flex justify-between gap-3">
          <Button fullWidth outlined>
            Lihat detail
          </Button>
          <Button fullWidth>Pesan</Button>
        </div>
      </div>
    </article>
  )
}

export default PackageCard
