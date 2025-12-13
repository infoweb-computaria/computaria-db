'use client'
import * as React from "react"
import Image from "next/image"


export function Fundo() {

  return (
    <div className="w-full h-full absolute bg-[#FFFDF1] top-0 left-0 right-0 z-0 overflow-hidden">
        <Image src="/fundo-laranja-top.svg" alt="fundo laranja top" width={500} height={300} className="absolute top-[-40px] left-[-20px]"/>

        <Image src="/fundo-azul-right.svg" alt="fundo azul direita" width={500} height={400} className="absolute top-[800px] right-[-21px]"/>
        
        <Image src="/fundo-laranja-left.svg" alt="fundo laranja baixo" width={500} height={500} className="absolute top-[1700px] left-[-5px]"/>
      </div>
  )
}