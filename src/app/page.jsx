"use client";

import Image from "next/image";
import ImgSite from "../../public/site.png";
import ImgSitee from "../../public/sitee.png";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import GoTopButton from "./scripts/goTop";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa os estilos do carrossel
import { FaCheck } from "react-icons/fa";
export default function Home() {

  return (
    <>
      <GoTopButton />

      <header className="w-full h-[10vh] bg-slate-200 flex gap-4 justify-between items-center p-4 md:p-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./suaimg"
            alt="logo empresa"
            className="h-8 md:h-12"
            crossOrigin="anonymous"
          />
        </div>

        {/* Links e Botões */}
        <div className="flex gap-4 items-center">
          <Link href="/" className="text-sm md:text-base">
            Sobre nós
          </Link>
          <Link href="/" className="text-sm md:text-base">
            Comprar
          </Link>

          <Button>
            <Link href="/SignIn" passHref className="text-sm md:text-base">
              Entrar
            </Link>
          </Button>
        </div>
      </header>

      <nav className="nav-pag-inital w-full md:h-[60vh] h-[45vh] bg-slate-200 text-center md:py-32 py-20 rounded-b-2xl">
        <h1 className="md:text-4xl text-3xl font-bold">Simplifique Seus Estudos</h1>
        <p className="text-muted-foreground text-center text-sm mt-2 m-2 nowrap">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos
          <span className="hidden md:inline">
            <br />
          </span>
          os meses um ebook novo de programação.
        </p>

        <div className="w-full h-10 mt-10 px-10">
          <div className="flex w-full max-w-xl items-center space-x-2 m-auto">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Assine agora</Button>
          </div>
          <p className="text-muted-foreground mt-4 text-xs underline">
            Comece a assinatura agora mesmo. Cancele quando quiser
          </p>
        </div>
      </nav>


      <h3 className="text-center mt-14 md:text-4xl text-3xl font-bold">Como funciona?</h3>

      <aside className="w-full h-[80vh] flex justify-center items-center mt-[-4%] p-6 md:p-10 signin-aside">

        <div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-between p-4 md:p-12">

          {/* Carrossel de imagens */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center mb-8 md:mb-0">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              dynamicHeight={true}
              className="w-full max-w-4xl m-auto"
            >
              <div className="flex aspect-square bg-background rounded-lg p-8">
                <Image src={ImgSite} alt="Logo Site" width={700} height={400} />
              </div>
              <div className="flex aspect-square bg-background rounded-lg p-8">
                <Image src={ImgSitee} alt="Logo Site" width={700} height={400} />
              </div>
            </Carousel>
          </div>

          {/* Texto explicativo */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full py-8 px-6 md:ml-12">
            <h1 className="text-center mt-10 text-xl md:text-2xl font-bold text-black">
              Aqui vai uma breve explicação
            </h1>

            <div className="flex flex-col space-y-6 mt-6 md:px-12 px-6">
              <div className="flex items-center space-x-3 mt-8 text-center">
                <span className="text-black text-lg">Assim</span>
                <FaCheck className="text-colorPadrao text-2xl" />
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <span className="text-black text-lg">Assim</span>
                <FaCheck className="text-colorPadrao text-2xl" />
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <span className="text-black text-lg">Assim</span>
                <FaCheck className="text-colorPadrao text-2xl" />
              </div>
            </div>
          </div>

        </div>
      </aside>




    </>
  );
}
