import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
}

export const Menu:React.FC<IMenu> = ({op1, op2, op3}) => {

    const style =
    {
        p: "bg-creme px-2 py-1 min-w-32 text-diarreia cursor-pointer font-semibold hover:scale-105 transition duration-150 ease-in-out",
        nav: "bg-areia gap-3 p-3 font-robFont text-large flex flex-row justify-around align-center  w-full flex-wrap text-center" 
    }
    return(
        <nav className={style.nav}>
          <Link href={ROUTES.home} className={style.p}>{op1}</Link>
          <Link  href={ROUTES.imc} className={style.p}>{op2}</Link>   
          <Link  href={ROUTES.medias} className={style.p}>{op3}</Link>
        </nav>
    )
}