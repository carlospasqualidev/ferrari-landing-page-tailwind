import { Language } from '@/components/Languages';

const linksData = [
  {
    label: 'LEGAL',
  },
  {
    label: 'PRIVACY POLICY',
  },
  {
    label: 'COOKIE POLICY',
  },
  {
    label: 'INVIA LA TUA RICHIESTA PRIVACY',
  },
  {
    label: 'ACESSIBILITÁ',
  },
  {
    label: 'CONTRATTI',
  },
  {
    label: 'MEDIA CENTRE',
  },
  {
    label: 'CARRER',
  },
  {
    label: 'CORPORATE ITA',
  },
  {
    label: 'CORPORATE ENG',
  },
  {
    label: 'RESPONSIBLE DISCLOSURE',
  },
];

export function Footer() {
  return (
    <div className="h-[365px] bg-[#2B2B2B] p-20 flex flex-col gap-6 max-md:h-fit max-md:p-6">
      <p className="text-[#999999] text-base text-center ">
        Ferrari N.V. - Società capogruppo - Società di diritto olandese con
        official seat ad Amsterdam, Paesi Bassi e indirizzo in via Abetone
        Inferiore n. 4, I-41053 Maranello (MO), Italia, iscrizione al Registro
        del Commercio olandese n. 64060977
      </p>
      <p className="text-[#999999] text-base text-center">
        Ferrari S.p.A. - Società di diritto italiano con sede legale in via
        Emilia Est n. 1163, Modena, Italia, numero del Registro Imprese di
        Modena, P. IVA e codice fiscale 00159560366 e capitale sociale di Euro
        20.260.000
      </p>
      <p className="text-[#999999] text-base text-center">
        Copyright 2023 - Development by{' '}
        <a
          href="https://carlospasqualidev.vercel.app"
          className="hover:text-[#FCFCFC] transition-all "
        >
          Carlos Pasquali
        </a>{' '}
        & Design by{' '}
        <a
          href="https://www.behance.net/lauraventurinim"
          className="hover:text-[#FCFCFC] transition-all "
        >
          Laura Venturini Minotto
        </a>
      </p>

      <div className="flex justify-center items-center gap-4 max-md:grid max-md:grid-cols-2">
        {linksData.map((link) => (
          <p
            key={link.label}
            className="text-[#FCFCFC] text-[10px] text-center font-bold hover:scale-105 cursor-pointer transition-all ease-in"
          >
            {link.label}
          </p>
        ))}
        <div className="ml-14 max-md:hidden">
          <Language />
        </div>
      </div>
      <div className="hidden w-full justify-center max-md:flex ">
        <Language />
      </div>
    </div>
  );
}
