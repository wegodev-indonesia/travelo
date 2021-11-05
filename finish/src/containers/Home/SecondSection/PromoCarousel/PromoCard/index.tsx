import Image from 'next/image'

import Button from 'components/Button'

const PromoCard = () => {
  return (
    <article className="bg-white shadow-lg rounded-xl overflow-hidden w-[500px] h-[312px] flex">
      <figure className="relative w-[212px] h-full]">
        <Image
          src="/assets/home/borobudur.png"
          alt="Borobudur"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </figure>

      <div className="flex-1 flex flex-col justify-center p-4">
        <p className="text-heading-4 text-gray-100 font-label font-bold">
          Borobudur, Yogyakarta
        </p>
        <p className="text-heading-4 text-gray-70 mb-4">Indonesia</p>

        <div className="flex gap-1">
          <p className="text-heading-5 text-gray-70 line-through">
            Rp. 7.700.000
          </p>
          <p className="text-heading-5 text-red-100 font-bold">10%</p>
        </div>

        <p className="text-[16px] font-bold text-gray-100 mb-4">
          Rp. 6.930.000
        </p>

        <p className="text-heading-5 text-gray-70 mb-4">
          Untuk 2 Orang, tiket pesawat, Tempat penginapan 5 malam, tour guide,
          mak...
        </p>

        <p className="text-heading-5 text-gray-50 mb-4">
          Berangkat: 27-11-2020 10:00
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

export default PromoCard
