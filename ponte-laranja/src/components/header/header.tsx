import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { verificarAuth } from "@/pages/utils/estaAutenticado";
import { logout } from "@/pages/api/autenticacao";
import { Router, useRouter } from "next/router";


export const Header = () => {
  const [abertofechado, setabertofechado] = useState<boolean>(false);
  const [estaAutenticado, set_estaAutenticado] = useState(false);
  const router = useRouter()
  useEffect(() => {
    set_estaAutenticado(verificarAuth());
  }, []);
  const estaAutenticado = true;

  const AbrirBarraLateral = () => {
    setabertofechado(!abertofechado);
  };

    const fecharBarraLateral = () => {
    setabertofechado(false);
  };

  return (
    <header className={styles.cabecalho}>
      <img src="/svg/logo_banner.svg" alt="" />
      <nav className={styles.navegacao}>
        <ul>
          <Link href={"/historico_item"} className={styles.link}>
            <li className={`texto_layout`}>Histórico</li>
          </Link>
          <Link href={"/contato"} className={styles.link}>
            <li className={`texto_layout`}>Contato</li>
          </Link>
          <Link href={"/sobrenos"} className={styles.link}>
            <li className={`texto_layout`}>Sobre nós</li>
          </Link>
        </ul>
      </nav>
      {estaAutenticado && ( <Link href={"/login"} className={styles.login} id={styles.login_}>Login</Link>)}
      {!estaAutenticado && (
        <>
          <button
            className={styles.menuButton}
            onClick={AbrirBarraLateral}
          >
            ☰
          </button>

          {abertofechado && (
            <div className={styles.overlay} onClick={fecharBarraLateral}></div>
          )}

          <aside
            className={
              abertofechado ? styles.barraLateralOpen : styles.barraLateral
            }
            onClick={AbrirBarraLateral}
          >
            <div className={styles.div}>

              

              <img src="imgs/imgUser.svg" alt="usuario" />
              <h3>Usuario</h3>
              <hr />
              <nav className={styles.navegacao}>
                <Link href={"/home"} id={styles.links}>
                  Home
                </Link>
                <Link href={"/cadastroitem"} id={styles.links}>
                  Cadastro de Item
                </Link>
                <Link href={"/cadastrounidade"} id={styles.links}>
                  Cadastro de Unidade
                </Link>
                <Link href={"/historico_item"} id={styles.links}>
                  Histórico
                </Link>
                <button id={styles.links} className={styles.logout} onClick={() => {
                  logout()
                  router.push("/login")
                }

                }>Logout</button>
                {/* <Link href={""} id={styles.links} className={styles.logout}>Logout</Link> */}
                {/* {estaAutenticado && (<Link href={""} id={styles.links} className={styles.logout}>Logout</Link>)} */}
                {/* {!estaAutenticado && (<Link href={"/login"} id={styles.links} className={styles.logout}>Login</Link>)} */}
              </nav>
            </div>
          </aside>
        </>
      )}

    </header>


  );
}; 
