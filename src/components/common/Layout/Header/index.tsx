import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import Container from 'components/common/Container';

import traveloLogo from 'public/assets/travelo-logo.png'
import searchIcon from 'public/assets/icons/search-icon.svg'

const Header = () => {
  return (
    <header className="h-[85px] bg-white shadow-lg p-4">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex">
            <Image
              src={traveloLogo}
              alt="Travelo Logo"
              placeholder="blur"
              height="48"
              width="182"
            />

            <form className="flex items-center ml-8">
              <input className="border border-gray-50 px-4 py-3 rounded-l-md text-sm text-gray-50" type="text" placeholder="Kategori    | Lokasi" />
              <button className="flex justify-center items-center bg-blue-100 border border-blue-100 text-white text-sm rounded-r-md h-[46px] w-[46px]" type="submit">
                <Image src={searchIcon} height="24" width="24" />
              </button>
            </form>
          </div>

          <div className="flex">
            <ul className="flex items-center gap-5">
              <li className="text-heading-4 text-gray-70 font-label font-bold">
                <Link href="/">
                  <a>Beranda</a>
                </Link>
              </li>
              <li className="text-heading-4 text-gray-70 font-label font-bold">Kontak</li>
              <li className="text-heading-4 text-gray-70 font-label font-bold">Paket</li>
              <li className="text-heading-4 text-gray-70 font-label font-bold">Testimonial</li>
            </ul>

            <button className="bg-blue-100 text-white p-3 w-[190px] text-heading-4 font-label font-bold rounded-md ml-5">
              Masuk
            </button>
          </div>

        </nav>
      </Container>
    </header>
  );
};

export default Header;