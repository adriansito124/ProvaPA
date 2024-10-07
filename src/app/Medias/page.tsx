"use client"
import { useState } from "react";

interface HandleProps {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
}

const GeneralFunction: React.FC = () => {

    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [numero3, setNumero3] = useState<string>("")
    const [numero4, setNumero4] = useState<string>("")
    const [numero5, setNumero5] = useState<string>("")

    const [respDiv, setRespDiv] = useState<number | undefined>()

    const [pass, setPass] = useState<boolean>()

    const erro = "Digite corretamente"

    var resp 


    const handleAll = ({a,b,c,d,e} : HandleProps) => {
        const n1 = parseFloat(a)
        const n2 = parseFloat(b)
        const n3 = parseFloat(c)
        const n4 = parseFloat(d)
        const n5 = parseFloat(e)

        if (!isNaN(n1) && !isNaN(n2)) {
            setRespDiv((n1 + n2 + n3 + n4 + n5) / 5)
            resp = ((n1 + n2 + n3 + n4 + n5) / 5)

            if (resp >= 7) {
                setPass(true)
            }
            else{
                setPass(false)
            }

        }
        else{
            setRespDiv(undefined)
            setPass(false)
        }
    }

    const style =
    {
        main: "min-h-screen w-full bg-branco flex-col flex justify-center items-center text-branco",
        red: "text-red-600",
        green: "text-green-600",
    }

    return(
        <>
            <main className={style.main}>
                <div className="bg-areia m-5 p-7 flex-col flex border rounded-2xl gap-5 ">   
                    <div className="flex-row flex gap-5 justify-center flex-wrap">
                        <div>
                            <input className="max-w-36 px-2 text-black border rounded-lg" type="text" placeholder="Nota 1" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
                        </div>
                        <div>
                            <input className="max-w-36 px-2 text-black border rounded-lg" type="text" placeholder="Nota 2" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex-row flex gap-5 justify-center flex-wrap">
                        <div>
                            <input className="max-w-36 px-2 text-black border rounded-lg" type="text" placeholder="Nota 3" value={numero3} onChange={(e) => setNumero3(e.target.value)}/>
                        </div>
                        <div>
                            <input className="max-w-36 px-2 text-black border rounded-lg" type="text" placeholder="Nota 4" value={numero4} onChange={(e) => setNumero4(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex-row flex gap-10 justify-center flex-wrap">
                        <div>
                            <input className="max-w-36 px-2  text-black border rounded-lg" type="text" placeholder="Nota 5" value={numero5} onChange={(e) => setNumero5(e.target.value)}/>
                        </div>
                    </div>
                    
                    
                    <div className="flex justify-center">
                        <button className=" text-diarreia bg-creme p-1 px-2 border rounded-lg border-diarreia" onClick={() => handleAll({a: numero1, b: numero2, c: numero3, d: numero4, e: numero5})}>MÉDIA</button>
                    </div>

                    <div className="flex-col flex items-center gap-2">
                        <p className="text-center min-w-16  p-1 text-black border bg-branco rounded-lg" >{!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(2) : erro}</p>
                    </div>

                    <h2 className="text-center min-w-16  p-1 text-black border bg-branco rounded-lg">{pass ? "PASSOU" : "NÃO PASSOU"}</h2>

                </div>
            </main>
        </>
    )
}

export default GeneralFunction;