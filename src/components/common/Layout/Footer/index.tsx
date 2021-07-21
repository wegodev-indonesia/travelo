import React from 'react'
import Image from 'next/image'

import Container from 'components/common/Container'

import traveloLogo from 'public/assets/travelo-logo-footer.png'

const Footer = () => {
  return (
    <footer className="shadow-2xl">
      <Container size="lg">
        <div className="flex bg-white p-16">
          <figure>
            <Image
              src={traveloLogo}
              alt="Travelo Logo"
              placeholder="blur"
              height="98"
              width="136"
            />
          </figure>

          <div className="flex flex-1 justify-between ml-[106px]">
            <div className="flex flex-col">
              <h2 className="text-gray-100 font-label font-bold text-heading-3 mb-4">Info</h2>
              <a href="/" className="text-heading-4 text-gray-50 mb-3">Tentang kami</a>
              <a href="/" className="text-heading-4 text-gray-50 mb-3">Testimonial</a>
              <a href="/" className="text-heading-4 text-gray-50 mb-3">Kontak</a>
            </div>
            <div className="flex flex-col">
              <h2 className="text-gray-100 font-label font-bold text-heading-3 mb-4">Perusahaan</h2>
              <a href="/" className="text-heading-4 text-gray-50 mb-3">Syarat & Ketentuan</a>
              <a href="/" className="text-heading-4 text-gray-50 mb-3">Kebijakan privasi</a>
              <a href="/" className="text-heading-4 text-gray-50 mb-3">Blog</a>
              <a href="/" className="text-heading-4 text-gray-50 mb-3">Bantuan pelayanan</a>
            </div>
            <div className="flex flex-col">
              <h2 className="text-gray-100 font-label font-bold text-heading-3 mb-4">Kontak</h2>
              <p className="text-heading-4 text-gray-50 mb-3">Jl. Dago No. 1A</p>
              <p className="text-heading-4 text-gray-50 mb-3">Bandung, Jawa Barat</p>
              <p className="text-heading-4 text-gray-50 mb-3">Indonesia</p>
              <p className="text-heading-4 text-gray-50 mb-3">(022)8080808</p>
              <p className="text-heading-4 text-gray-50 mb-3">contact@email.d</p>
            </div>
          </div>

        </div>
      </Container>

      <div className="bg-blue-100 p-3">
        <p className="text-heading-5 text-white font-bold text-center">
          Copyright 2020 Nama Brand. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;