'use client';
import Image from 'next/image';
import { svgs } from '@/assets';
import { Language } from './Languages';
import { ArrowButton } from './ArrowButton';
import { RoundButton } from './RoundButton';
import { useState } from 'react';

const linksData = [
  { label: 'HOME', width: 'w-[75px]', widthForAnim: 'w-[85px]' },
  { label: 'RACING', width: 'w-[88px]', widthForAnim: 'w-[98px]' },
  { label: 'COLEZZIONI', width: 'w-[120px]', widthForAnim: 'w-[130px]' },
  { label: 'UNIVERSE', width: 'w-[103px]', widthForAnim: 'w-[113px]' },
  { label: 'CORPORATE', width: 'w-[122px]', widthForAnim: 'w-[132px]' },
];

const externalLinksData = [
  { label: 'FERRARI PUROSANGUE' },
  { label: '812 GTS' },
  { label: '296 GTB' },
  { label: '296 GTS' },
  { label: 'SF90 stradale' },
  { label: 'SF90 spider' },
  { label: 'F8 TRIBUTO' },
  { label: 'F8 SPIDER' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('HOME');

  return (
    <div className="flex h-16 justify-between px-12  py-7 items-center absolute w-full z-50 ">
      <p
        className="text-[#FCFCFC] font-bold cursor-pointer"
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        MENU
      </p>
      <Image src={svgs.FerrariLogo} alt="" />
      <Language />

      {
        <div
          className={`${
            menuOpen ? 'opacity-100' : 'opacity-0'
          } left-4 top-16 absolute bg-[#2B2B2B] p-12 flex transition-all ease-in rounded`}
        >
          <div className="flex flex-col gap-8 w-[200px] py-6">
            {linksData.map((link) => (
              <ArrowButton
                key={link.label}
                label={link.label}
                variant="white"
                width={link.width}
                widthForAnim={link.widthForAnim}
                onClick={() => {
                  setSelectedOption(link.label);
                }}
                selected={selectedOption === link.label}
              />
            ))}
          </div>
          <div>
            <div className="w-[1px] h-full bg-[#FCFCFC]" />
          </div>

          <div className="flex flex-col gap-3 p-8">
            {externalLinksData.map((externalLinks) => (
              <p
                className="font-bold text-base text-[#FCFCFC]"
                key={externalLinks.label}
              >
                {externalLinks.label}
              </p>
            ))}
          </div>

          <RoundButton onClick={() => setMenuOpen(false)} />
        </div>
      }
    </div>
  );
}
