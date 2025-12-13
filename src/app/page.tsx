"use client";

import React from "react";
import { Fundo } from "./components/fundo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-sans overflow-x-hidden">
      <Fundo />

      {/* CONTAINER PRINCIPAL */}
      <main className="relative z-10 w-full flex flex-col items-center">

        {/* HEADER */}
        <header className="w-full px-6 py-6 flex justify-between items-center bg-[#ffffff]">
          <div className="flex items-end gap-1">
            <Link href="#"><img src="/logo.png" alt="Logo" className="h-10" /></Link>
          </div>

          <nav className="flex gap-6 text-sm font-medium text-[#2F2465]">
            <Link href="#">Fotos</Link>
            <Link href="#">Cartão Postal</Link>
            <Link href="#">Etiquetas</Link>
            <Link href="#">Figs do zip</Link>
            <Link href="#">Nosso jogo</Link>
            <Link href="#">Fonte</Link>
          </nav>
        </header>

        {/* BANNER COM VÍDEO */}
        <section className="w-full">
          <div className="overflow-hidden shadow-lg rounded-b-3xl">
            <video
              src="/turma.mp4"
              muted
              loop
              controls
              className="w-full object-cover h-[400px]"  // ajuste de altura
            />
          </div>
        </section>


        {/* QUEM SOMOS */}
        <section className="w-full max-w-6xl px-6 mt-20">
          <h2 className="text-3xl font-bold text-[#EA6310] mb-8">
            Quem somos?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-[#EA6310] rounded-xl p-6">
              <p className="text-[#2F2465] text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="border-2 border-[#EA6310] rounded-xl p-6">
              <p className="text-[#2F2465] text-lg">
                Ut enim ad minim veniam, quis nostrud exercitation. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
          </div>
        </section>

        {/* SESSÃO INFERIOR COM CURVA */}
        <section className="w-full mt-24">
          {/* CURVA SUPERIOR */}
          <svg
            viewBox="0 0 1440 120"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,96L1440,0L1440,320L0,320Z"
              fill="#2F2465"
            />
          </svg>

          {/* CONTEÚDO */}
          <div className="bg-[#2F2465] w-full px-8 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
              
              <p className="text-base md:text-lg">
                Saiba mais sobre nós!
              </p>

              <div className="flex items-center gap-6">
                <a href="https://www.instagram.com/ifrn.infoweb.2022?igsh=NzdyZmt6YmR4eTdw&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src="/instagram.svg" className="h-6 md:h-7" />
                </a>
                <a href="https://www.tiktok.com/@infowebifcnat?_r=1&_t=ZS-92ArRYslrkr" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <img src="/tiktok.svg" className="h-6 md:h-7" />
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
