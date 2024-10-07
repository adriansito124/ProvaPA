import type { Metadata } from "next";
import react  from "@/assets/react.png";
import tailwind  from "@/assets/tailwind.png";
import jquery  from "@/assets/jquery.png";
import next  from "@/assets/next.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Teste Next.ts",
  description: "Aprendizagem técnica Bosch",
}; 

export default function Home() {

  const style =
    {
        main: "min-h-screen w-full bg-branco flex justify-center items-center flex flex-col scroll-smooth",
        tela: "flex w-full flex-row justify-around items-center flex-wrap mt-16",
        card: "w-full max-w-96 min-w-56 m-5 mt-3 bg-azul border-black border-2",
        imagem: "max-h-60 max-w-64",
        conteudo: "w-4/5 flex flex-col items-center flex-wrap gap-44 mt-44 mb-32",
        parte: "w-full flex flex-col items-center flex-wrap gap-12 text-center"
    }

  return (
   <>
      <main className={style.main}>
        <div className={style.tela}>
          <div className={style.card}>
            <div className="flex flex-col items-center justify-center p-6 w-full text-branco">
              <h2 className="text-3xl font-bold">React</h2>
            </div>

            <div className="bg-branco p-5 flex justify-center flex-col text-center gap-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim felis at nisi facilisis, dictum.</p>
              <a className="bg-azul p-1 text-branco text-lg hover:scale-105 transition duration-150 ease-in-out " href="#react">Read More</a>
            </div>
          </div>

          <div className={style.card}>
            <div className="flex flex-col items-center justify-center p-6 w-full text-branco">
              <h2 className="text-3xl font-bold">Tail Wind</h2>
            </div>
            
            <div className="bg-branco p-5 flex justify-center flex-col text-center gap-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim felis at nisi facilisis, dictum.</p>
              <a className="bg-azul p-1 text-branco text-lg hover:scale-105 transition duration-150 ease-in-out " href="#tailwind">Read More</a>
            </div>
          </div>

          <div className={style.card}>
            <div className="flex flex-col items-center justify-center p-6 w-full text-branco">
              <h2 className="text-3xl font-bold">Next</h2>
            </div>
            
            <div className="bg-branco p-5 flex justify-center flex-col text-center gap-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim felis at nisi facilisis, dictum.</p>
              <a className="bg-azul p-1 text-branco text-lg hover:scale-105 transition duration-150 ease-in-out " href="#next">Read More</a>
            </div>
          </div>

          <div className={style.card}>
            <div className="flex flex-col items-center justify-center p-6 w-full text-white">
              <h2 className="text-3xl font-bold">JQuery</h2>
            </div>
            
            <div className="bg-branco p-5 flex justify-center flex-col text-center gap-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim felis at nisi facilisis, dictum.</p>
              <a className="bg-azul p-1 text-branco text-lg hover:scale-105 transition duration-150 ease-in-out " href="#jquery">Read More</a>
            </div>
          </div>

        </div>

        <div className={style.conteudo}>

        <div id="react" className="w-full h-0.5 bg-azul"></div>

          <div className={style.parte}>
            <h2 className="text-5xl font-bold text-black">React</h2>
            <Image className={style.imagem} src={react} alt="REACT"></Image>
            <p className="text-black">React é uma biblioteca JavaScript de código aberto utilizada para construir interfaces de usuário interativas e reativas. Ela foi desenvolvida pelo Facebook e é amplamente utilizada para desenvolver aplicações web modernas e single-page applications (SPA).</p>
          </div>

          <div id="tailwind" className="w-full h-0.5 bg-azul"></div>

          <div className={style.parte} >
            <h2 className="text-5xl font-bold text-black">Tail Wind</h2>
            <Image className={style.imagem} src={tailwind} alt="TAILWIND"></Image>
            <p className="text-black">React é uma biblioteca JavaScript de código aberto utilizada para construir interfaces de usuário interativas e reativas. Ela foi desenvolvida pelo Facebook e é amplamente utilizada para desenvolver aplicações web modernas e single-page applications (SPA).</p>
          </div>

          <div id="next" className="w-full h-0.5 bg-azul"></div>

          <div className={style.parte}>
            <h2 className="text-5xl font-bold text-black">Next</h2>
            <Image className={style.imagem} src={next} alt="NEXT"></Image>
            <p className="text-black">React é uma biblioteca JavaScript de código aberto utilizada para construir interfaces de usuário interativas e reativas. Ela foi desenvolvida pelo Facebook e é amplamente utilizada para desenvolver aplicações web modernas e single-page applications (SPA).</p>
          </div>

          <div id="jquery" className="w-full h-0.5 bg-azul"></div>

          <div className={style.parte} >
            <h2 className="text-5xl font-bold text-black">JQuery</h2>
            <Image className={style.imagem} src={jquery} alt="JQUERY"></Image>
            <p className="text-black">React é uma biblioteca JavaScript de código aberto utilizada para construir interfaces de usuário interativas e reativas. Ela foi desenvolvida pelo Facebook e é amplamente utilizada para desenvolver aplicações web modernas e single-page applications (SPA).</p>
          </div>

          <div className="w-full h-0.5 bg-azul"></div>

        </div>

      </main>
   </>
  );
} 