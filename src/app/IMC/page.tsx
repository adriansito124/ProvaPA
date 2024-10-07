"use client"
import { Handlee } from "next/font/google"
import React, { useState } from "react"

const Maths: React.FC = () => {
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [respDiv, setRespDiv] = useState<number | undefined>(0)

    const [imc, setImc] = useState<number>()

    var resp

    const msgError = "Digite um número válido"

    const handleDiv = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)
        if(!isNaN(n1) && !isNaN(n2) && n2 != 0){
            setRespDiv(n1 / (n2*n2))
            resp = n1 / (n2*n2)

            if (resp <= 18.5) {
                setImc(1)
            }else if (resp < 25) {
                setImc(2)
            }else if (resp < 30) {
                setImc(3)
            }else if (resp < 35) {
                setImc(4)
            }else if (resp < 40) {
                setImc(5)
            }else{
                setImc(6)
            }
        }
        else{
            setRespDiv(undefined)
        }
    }

    const style =
    {
        main: "min-h-screen w-full bg-branco flex-col flex justify-center items-center text-white"
    }

     return (
    <>
        <main className={style.main}>
            <div className="bg-areia m-5  max-w-96 p-7 flex-col flex border rounded-2xl gap-5">
                <div className="flex-row flex gap-7 justify-around flex-wrap">
                    <div className="flex-col flex items-center gap-2">
                        <p className="text-branco font-medium text-xl" >Peso</p>
                        <input className="max-w-36 px-2 text-black border rounded-lg" id="n1" type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
                    </div>
                    <div className="flex-col flex items-center gap-2">
                        <p className="text-branco font-medium text-xl" >Altura</p>
                        <input className="max-w-36 px-2 text-black border rounded-lg" id="n2" type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                    </div>
                </div>

                <div className="flex-row flex gap-7 justify-around w-full flex-wrap">
                    <div className="flex-col flex items-center gap-2">
                        <button className=" text-diarreia bg-creme p-1 px-2 border rounded-lg border-diarreia" onClick={handleDiv}>CALCULAR</button>
                        <h2 className="text-center min-w-16  p-1 text-black border bg-branco rounded-lg">{!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(2) : msgError}</h2>
                        <h2 className="text-center min-w-16  p-1 text-black border bg-branco rounded-lg">{imc == 1 ? "Abaixo do normal" : imc == 2 ? "Normal" : imc == 3 ? "Sobrepeso" : imc == 4 ? "Obesidade grau 1" : imc == 5 ? "Obesidade grau 2" : "Obesidade grau 3"}</h2>
                    </div>
                </div>
            </div>
        </main>
    </>
    )

}

export default Maths