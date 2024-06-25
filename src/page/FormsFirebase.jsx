import React, { useState, useEffect } from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";
import logo from "../img/logo.png";
import { Button, Drawer, Radio, Space } from "antd";
import useSound from "use-sound";
import Reproducir from "../audios/reproducir";
import ReactPlayer from "react-player/youtube";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

import nivel1 from "../img/nivel1.jpg";
import nivel2 from "../img/nivel2.jpg";
import nivel3 from "../img/nivel3.gif";
import clase191 from "../img/clase19-1.jpg";
import clase192 from "../img/clase19-2.jpg";

//IMPORTAR SONIDOS
import popoff from "../sound/pop-up-off.mp3";
import popon from "../sound/pop-up-on.mp3";
import like from "../sound/rising-pops.mp3";
import bite from "../sound/bite.mp3";
import menuopen from "../sound/menu-open.mp3";
import bienvenido from "../sound/clases/bienvenido.mp3";

import audio1 from "../sound/clases/nivel1.mp3";
import audio2 from "../sound/clases/nivel2.mp3";
import audio3 from "../sound/clases/nivel3.mp3";

function FormsFirebase() {
  const [open, setOpen] = useState(false);
  const [estadohome, setEstadohome] = useState(true);
  const [placement, setPlacement] = useState("bottom");
  const [numpage, setNumpage] = useState(0);
  const [Page, setPage] = useState(0);
  const [numtema, setNumtema] = useState(0);
  const [opcion, setOpcion] = useState(0);

  //SONIDOS
  const [activar] = useSound(popon);
  const [desactivar] = useSound(popoff);
  const [megusta] = useSound(like);
  const [comenta] = useSound(bite);
  const [principal] = useSound(menuopen);
  /*const [iniciob] = useSound(bienvenido, {
    autoplay: true,
  });*/

  const [sounds, setSounds] = useState(bienvenido);
  const [ruta, setRuta] = useState("");

  const tracks = [
    {
      url: "https://lotoactivo.webcindario.com/clases/clase19-1.mp3",
      title: "El Espiritu - Parte 1",
      tags: ["house"],
    },
    {
      url: "https://lotoactivo.webcindario.com/clases/clase19-2.mp3",
      title: "El Espiritu - Parte 2",
      tags: ["house"],
    },
    {
      url: "https://lotoactivo.webcindario.com/clases/clase19-3.mp3",
      title: "El Espiritu - Parte 3",
      tags: ["house"],
    },
    {
      url: "https://lotoactivo.webcindario.com/clases/clase19-4.mp3",
      title: "El Espiritu - Parte 4",
      tags: ["house"],
    },
    {
      url: "https://lotoactivo.webcindario.com/clases/clase19-5.mp3",
      title: "El Espiritu - Parte 5",
      tags: ["house"],
    },
    {
      url: "https://lotoactivo.webcindario.com/clases/clase19-6.mp3",
      title: "El Espiritu - Parte 6",
      tags: ["house"],
    },
  ];

  const handlePlay = (ruta) => {
    if (ruta == "audio1") {
      setSounds(audio1);
    }
    if (ruta == "audio2") {
      setSounds(audio2);
    }
    if (ruta == "audio3") {
      setSounds(audio3);
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const auth = useAuth();
  const { displayName } = auth.user;
  const photoURL = auth.user.photoURL;
  console.log(auth.user.photoURL);

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };
  const handleLogout = () => {
    auth.logout();
  };

  const buttonRef = React.createRef();

  return (
    <div className=" h-screen bg-sky-900">
      <div className="container w-screen">
        <div className=" p-2 h-28 w-full flex place-content-between items-center">
          <div className="m-0 flex flex-wrap flex-col place-content-around">
            <img
              className="pt-2 mt-[-10px]"
              src={logo}
              width="100px"
              height="100%"
              alt="logo"
            />
            <p className="p-1"></p>
            <p className=" mt-[-20px] text-lg">Academia de Lideres</p>
          </div>
          <Reproducir audio={sounds} />

          {displayName == undefined ? (
            <button
              type="button"
              onClick={(e) => handleGoogle(e)}
              class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              Entrar
            </button>
          ) : (
            <div className="flex">
              <div className="p-2">
                <div className="flex flex-col items-end gap-4 ">
                  <img
                    className="w-10 h-10  rounded-full border-2 border-blue-500"
                    src={`${photoURL}`}
                    alt=""
                  />
                  <div className="font-medium text-white mt-[-10px]">
                    <div className="text-white text-right text-sm">
                      {displayName && <> {displayName} </>}
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          )}
        </div>
      </div>
      <br />
      {/*HOME PAGE*/}
      {Page == 0 ? (
        <>
          <div className=" text-white text-2xl" align="center">
            C.C Un Nuevo Remanente
          </div>
          <div className=" flex flex-row flex-wrap p-4">
            <div
              onClick={() => {
                if (numpage == 1) {
                  setPage(1);
                } else {
                  setNumpage(1);

                  handlePlay("audio1");
                }
              }}
              className="mb-2 w-full hover:border-4 hover:cursor-pointer hover:border-white hover:bg-blue-500 flex flex-row place-content-between border-2 border-gray-400 rounded-md bg-blue-950"
            >
              <img
                className="w-36 h-36 rounded-l-md border-blue-500"
                src={`${nivel1}`}
                alt=""
              />
              <div className="p-4">
                <div className=" text-xl font-bold text-white">Nivel 1</div>
                <div className=" text-sm text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                if (numpage == 2) {
                  setPage(1);
                } else {
                  setNumpage(2);

                  handlePlay("audio2");
                }
              }}
              className="mb-2 w-full hover:border-4 hover:cursor-pointer hover:border-white hover:bg-blue-500 flex flex-row place-content-between border-2 border-gray-400 rounded-md bg-blue-950"
            >
              <img
                className="w-36 h-36 rounded-l-md border-blue-500"
                src={`${nivel2}`}
                alt=""
              />
              <div className="p-4">
                <div className=" text-xl font-bold text-white">Nivel 2</div>
                <div className=" text-sm text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                if (numpage == 3) {
                  setPage(3);
                } else {
                  setNumpage(3);
                  handlePlay("audio3");
                }
              }}
              className="mb-2 w-full hover:border-4 hover:cursor-pointer hover:border-white hover:bg-blue-500 flex flex-row place-content-between border-2 border-gray-400 rounded-md bg-blue-950"
            >
              <img
                className="w-36 h-36 rounded-l-md border-blue-500"
                src={`${nivel3}`}
                alt=""
              />
              <div className="p-4">
                <div className=" text-xl font-bold text-white">Nivel 3</div>
                <div className=" text-sm text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {/*NIVEL*/}
      {Page == 3 ? (
        <>
          <div className=" text-white text-2xl font-bold" align="center">
            NIVEL 3
          </div>
          <div className=" flex flex-row flex-wrap p-4">
            <div
              onClick={() => {
                if (numtema == 119) {
                  setPage(119);
                } else {
                  setNumtema(119);
                  handlePlay("audio2");
                }
              }}
              className="mb-2 w-full hover:border-4 hover:cursor-pointer hover:border-white hover:bg-blue-500 flex flex-row place-content-between border-2 border-gray-400 rounded-md bg-blue-950"
            >
              {numtema == 119 ? (
                <div className=" flex items-center justify-center w-55 h-15   bg-black border-r-4 shadow-black  text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className=" text-2xl font-bold">19</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              ) : (
                <div className=" flex items-center justify-center w-55 h-15  rounded-md bg-blue-500  text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className=" text-2xl font-bold">19</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              )}

              <div className="p-4">
                <div className=" text-xl font-bold text-white">
                  EL ESP&Iacute;RITU
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                if (numtema == 20) {
                  setPage(20);
                } else {
                  setNumtema(20);
                  handlePlay("audio2");
                }
              }}
              className="mb-2 w-full hover:border-4 hover:cursor-pointer hover:border-white hover:bg-blue-500 flex flex-row place-content-between border-2 border-gray-400 rounded-md bg-blue-950"
            >
              {numtema == 20 ? (
                <div className=" flex items-center justify-center w-55 h-15  bg-black border-r-4 shadow-black  text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className=" text-2xl font-bold">20</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              ) : (
                <div className=" flex items-center justify-center w-55 h-15  rounded-md bg-blue-500  text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className=" text-2xl font-bold">20</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              )}

              <div className="p-4">
                <div className=" text-xl font-bold text-white">EL ALMA</div>
              </div>
            </div>
            <div
              onClick={() => {
                if (numtema == 21) {
                  setPage(21);
                } else {
                  setNumtema(21);
                  handlePlay("audio1");
                }
              }}
              className="mb-2 w-full hover:border-4 hover:cursor-pointer hover:border-white hover:bg-blue-500 flex flex-row place-content-between border-2 border-gray-400 rounded-md bg-blue-950"
            >
              {numtema == 21 ? (
                <div className=" flex items-center justify-center w-55 h-15  bg-black border-r-4 shadow-black  text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className=" text-2xl font-bold">21</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              ) : (
                <div className=" flex items-center justify-center w-55 h-15  rounded-md bg-blue-500  text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className=" text-2xl font-bold">21</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              )}

              <div className="p-4">
                <div className=" text-xl font-bold text-white">EL CUERPO</div>
              </div>
            </div>
            <div
              onClick={() => {
                if (numtema == 22) {
                  setPage(22);
                } else {
                  setNumtema(22);
                  handlePlay("audio3");
                }
              }}
              className="mb-2 w-full hover:border-4 hover:cursor-pointer hover:border-white hover:bg-blue-500 flex flex-row place-content-between border-2 border-gray-400 rounded-md bg-blue-950"
            >
              {numtema == 22 ? (
                <div className=" flex items-center justify-center w-55 h-15  bg-black border-r-4 shadow-black  text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className=" text-2xl font-bold">22</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              ) : (
                <div className=" flex items-center justify-center w-55 h-15  rounded-md bg-blue-500  text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className=" text-2xl font-bold">22</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              )}

              <div className="p-4">
                <div className=" text-xl font-bold text-white">LA MENTE</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {/*CONTENIDO*/}
      {Page == 119 ? (
        <>
          <div className=" text-white text-2xl font-bold" align="center">
            EL ESPIRIT&Uacute;
          </div>
          <br />
          <div className="grid grid-cols-3 gap-4 pl-2">
            <button
              onClick={() => {
                setOpcion(1);
              }}
              type="button"
              class="text-black   place-content-center bg-[#fff] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#000000]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
            >
              <div className="flex  flex-col items-center justify-center place-content-between">
                <div className="flex items-center justify-center">
                  <svg
                    class="w-[48px] h-[48px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>VIDEO</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setOpcion(2);
              }}
              class="text-black   place-content-center bg-[#fff] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#000000]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
            >
              <div className="flex items-center justify-center  flex-col">
                <div>
                  <svg
                    class="w-[48px] h-[48px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>CONTENIDO</div>
              </div>
            </button>

            <button
              onClick={() => {
                setOpcion(3);
              }}
              type="button"
              class="text-black   place-content-center bg-[#fff] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#000000]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
            >
              <div className="flex items-center justify-center  flex-col">
                <div>
                  <svg
                    class="w-[48px] h-[48px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>REPRODUCIR</div>
              </div>
            </button>
          </div>
          {opcion == 1 ? (
            <div className="bg-white p-2 m-2 rounded-md border-2">
              <ReactPlayer url="https://youtu.be/lWFdPibp1VQ" width="100%" />
            </div>
          ) : (
            <></>
          )}

          {opcion == 2 ? (
            <div className="bg-white p-2 m-2 rounded-md border-2">
              <p>
                Desde el principio, nos dio espiritu, por ello la importancia de
                lo irreprensible que debe estar el cuerpo para Dios. El Espiritu
                murio cuando Adan peco, por ello es que del postrer, Adan Jesus
                necesitamos que nos de vida espiritual. Adan fue destituido por
                la gloria de Dios
              </p>
              <br />
              <p className=" text-center font-bold">
                ALIMENTO DE VIDA (ESPIRITU)
              </p>
              <p className="pt-4">
                <span className="font-bold">Genesis 1: 26-27</span> "Entonces
                Dijo Dios: hagamos al hombre a nuestra imagen, conforme a
                Nuestra semejanza; y señoree en los peces del mar; en las aves
                de los cielos, en las bestias, en toda la tierra, y en todo
                animal que se arrastra sobre la tierra. y creo Dios al hombre a
                su imagen, a imagen de Dios lo creo; varon y hembra los creo."
              </p>
              <p className="pt-4">
                Cuando el señor hizo su creacion, declaro que de la tierra
                salieran animales y plantas pero en el caso del hombre su cuerpo
                vuelve a la tierra, pero su espiritu vuelve a Dios, porque de
                Dios fue que salio, el fue quien Dios ese aliento de Vida.
              </p>
              <p className="pt-4">
                <span className=" font-bold">Genesis 2:16-17</span> "Y mando
                Jehova Dios al hombre, diciendo: de todo arbol del huerto podras
                comer; mas del arbol de la ciencia del bien y del mal no
                comeras; porque el dia que de el comieres ciertamente moriras."
              </p>
              <p className=" pt-4">
                La desobediencia trajo consigo todos los pecados, atraves de
                este robo nacio el primer pecado, porque ellos tomaron lo que no
                les correspondia. Desde ese momento muere la relacion con Dios,
                por cuanto todos pecaron y estan destituidos de la gloria de
                Dios.
              </p>
              <p className=" pt-4">
                <span className=" font-bold">Mateo 8:22</span> "Jesus le dijo:
                Sigueme; deja que los muertos entierren a su muertos."
              </p>
              <br />
              <div align="center">
                <img
                  className="text-center border-2 rounded-md border-blue-700"
                  src={clase191}
                  width="80%"
                  alt="Meteo 8:22"
                />
              </div>

              <p className="pt-4">
                Hay algo que denomina al hombre, y son los sentimientos, eso fue
                lo primero que a este hombre le dominaba aunque tenia
                pensamiento y voluntad.
              </p>
              <p className="pt-4">
                Por ello es bien importante que el hombre se de cuenta de la
                persona del espiritu, notemos lo que dice{" "}
                <span className=" font-bold">Juan 4:24</span> "Dios es espiritu;
                y los que le adoran en espiritu y en verdad es necesario que le
                adoren."
              </p>

              <p className="pt-4">
                Desde el momento que nos decidimos de recibir a Jesus, tenemos
                un espiritu (Juan 3:6).
              </p>
              <ol start="1">
                <li>
                  - antes bien el hombre, tenia raciocinio ahora con el espiritu
                  se tiene discernimiento.
                </li>
                <li>
                  - El primero que cree rapido a la palabra de Dios, es el
                  espiritu y el Alma muchas veces dice lo contrario.
                </li>
                <li>- El Alma razona, el espiritu discierne y Cree</li>
                <li>
                  - hay gente que le da mucho lugar a las cosas del espiritu,
                  pero hay otros que no.
                </li>
              </ol>
              <p className="pt-4 text-center">
                <span className="font-bold ">REPITA: SOY ESPIRITU</span>
              </p>
              <p className="pt-4">
                <span className=" font-bold">Efesios 2:1-2</span> "El Os Dio
                vida a vosotros, cuando estabais muerto en vuestros delitos y
                pecados, en los cuales anduvistes en otro tiempo, siguiendo la
                corriente de este mundo, conforme al principe de la potesta del
                aire, el espiritu que ahora opera en los hijos de la
                desobediencia."
              </p>
              <p className="pt-4">
                Que importante es reconocer lo que eramos en otro tiempo, dice
                la palabra que andabamos en delitos y pecado, por lo tanto hay
                que orar, para que el principe de las potestades del aire, se
                aparta de la gente, quienes son hijos de desobediencia, para que
                las personas lleguen a ser obidientes, de otra forma a ser
                obediente va a permitir que otros tambien lo sean contigo.
              </p>
              <p className="pt-4">
                Antes nos dejabamos influenciar segun la carne; cuando nace el
                espiritu, el alma se ve en dos jefes y tiene que escoger uno.
              </p>
              <br />
              <div align="center">
                <img
                  className="text-center border-2 rounded-md border-blue-700"
                  src={clase192}
                  width="80%"
                  alt="Dos Jefes"
                />
              </div>
              <p className="pt-4">
                <span className=" font-bold">Efesios 2:3</span> "Entre los
                cuales tambien todos nosotros vivimos en otro tiempo en los
                deseos de nuestra carne, haciendo la voluntad de la carne y de
                los pensamientos, y eramos por naturaleza hijos de ira, lo mismo
                que los demas."
              </p>
              <p className="pt-4">
                Notemos bien que el espiritu murio. cuando andabamos en deseo de
                la carne, y cristo lo resucito, el espiritu tiene relacion con
                Dios, y nacio y se le da varios nombres:
              </p>
              <p className="pt-4">- Hombre Nuevo (Colosenses 3:9-10)</p>
              <p className="pt-2">- Vuestra Mente (Efesios 4:22-24)</p>
              <p className="pt-4">
                El que se une con Jesucristo, un espiritu con el, el espiritu
                santo, nos trae la fortaleza, hay que estar fortaleciendo el
                espiritu continuamente; asi como lo refleja la palabra en{" "}
                <span className=" font-bold">2 Corintios 4:16</span> Por lo
                tanto no desmayemos; antes aunque este en nuestro hombre
                exterior se va degastando, el interior no obstante se renueva de
                dia en dia.
              </p>
              <p className="pt-4">
                Aqui vemos claramente, la figura de un hombre exterior y uno
                interior, el espiritu dia a dia se renueva, aunque la carne
                quiera desmayar muchas veces. Hago esta pregunta, Cuando debemos
                ser renovados? pues nuestro hombre interior debe ser renovado
                dia a dia. Por ello que el señor hace algo en nosotros.
              </p>
              <p className="pt-4">
                La falta de compromiso en un serio problema para estar en un
                solo espiritu. Por lo tanto, voy a citar un ejemplo de lo que
                sucede con la cultura china, judia y arabe, ellos respetan sus
                compromisos, mas que lo que han nacido de nuevo, cuando se
                casan, es entre ellos, porque se han criado como una raza con
                compromiso. muchas veces no hallamos fidelidad entre los
                hermanos y eso que hemos nacido del espiritu, pero realmente hay
                que seguir renovando.
              </p>
              <p className="pt-4">
                <span className="font-bold">Corintios 2:14-15</span> "Pero el
                hombre natural no percibe las cosas que son del espiritu de
                Dios, porque para el son locura y no las puede entender, porque
                se han de discernir espiritualmente. En cambio el espiritual
                juzga todas las cosas; pero el no es juzgado de nadie"
              </p>
              <p className="pt-4">
                El hombre no percibe las cosas del espiritu, y el espiritual
                juzga todas las cosas, pero nadie lo juzga a el, el apostol
                pablo decia: ni yo me juzgo.
              </p>
              <p className="pt-4">
                El Alma tiene que obedecer al espiritu, el espiritu esta
                dispuesto a todo, la carne es debil al espiritu le gusta todo lo
                que es de Dios, asi que hermanos (a) tu espiritu siempre esta
                dispuesto.
              </p>
              <p className="pt-4">
                Al Espiritu, le gusta Ayunar, Orar, Sembrar, a la carne no le
                agrada hacer nada de esto, el que practica dominio propio en las
                cosas que tiene derecho, entonces, tendra dominio propio en las
                cosas que no tiene derecho.
              </p>
              <p className="pt-4">
                <span className="font-bold">Mateo 26:4-1</span> "Velad, y Orad,
                para que no entreis en tentacion; el espiritu a la verdad esta
                dispuesto, pero la carne es debil."
              </p>
            </div>
          ) : (
            <></>
          )}

          {opcion == 3 ? (
            <div className="bg-white p-2 m-2 rounded-md border-2">
              <Player
                trackList={tracks}
                includeTags={false}
                includeSearch={false}
                showPlaylist={true}
                sortTracks={false}
                autoPlayNextTrack={true}
              />
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      <button onClick={() => handleLogout()} className="button">
        Logout
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Drawer
        title="2 Comentarios"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div class="flex items-start gap-2.5">
          <img class="w-8 h-8 rounded-full" src={photoURL} alt="Jese image" />
          <div class="flex flex-col gap-1 w-full max-w-[320px]">
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
              <span class="text-sm font-semibold text-gray-900 dark:text-white">
                {displayName}
              </span>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
            <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <p class="text-sm font-normal text-gray-900 dark:text-white">
                Este tema es interesante debemos realizar todos estos pasos
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-start gap-2.5">
          <img class="w-8 h-8 rounded-full" src={photoURL} alt="Jese image" />
          <div class="flex flex-col gap-1 w-full max-w-[320px]">
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
              <span class="text-sm font-semibold text-gray-900 dark:text-white">
                {displayName}
              </span>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                13:49
              </span>
            </div>
            <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <p class="text-sm font-normal text-gray-900 dark:text-white">
                Mientras mas pasa el tiempo los comentarios permanecen al igual
                que su palabra.
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-start gap-2.5">
          <img class="w-8 h-8 rounded-full" src={photoURL} alt="Jese image" />
          <div class="flex flex-col gap-1 w-full max-w-[320px]">
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
              <span class="text-sm font-semibold text-gray-900 dark:text-white">
                {displayName}
              </span>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                15:55
              </span>
            </div>
            <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <p class="text-sm font-normal text-gray-900 dark:text-white">
                Hermana videl, debes leer en San Juan 3:16 de tal manera amo
                Dios al mundo que dio su hijo unigenito para que todo aquel que
                en el crea no se pierda mas tenga vida eterna.
              </p>
            </div>
          </div>
        </div>
      </Drawer>

      {open == true ? (
        <div></div>
      ) : (
        <div className="footer bg-slate-800 flex flex-wrap items-center p-2 justify-around text-white">
          <div className="">
            <button
              onClick={() => {
                setPage(0);
                principal();
              }}
              type="button"
              class=" w-full bg-cyan-800 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                class="w-[48px] h-[48px] pl-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sr-only">Icon description</span>
            </button>
          </div>
          <div className="">
            <button
              type="button"
              onClick={() => {
                showDrawer();
                comenta();
              }}
              class=" w-full bg-cyan-800 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                class="w-[48px] h-[48px] pl-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sr-only">Icon description</span>
            </button>
          </div>
          <div className="">
            <button
              onClick={megusta}
              type="button"
              class=" w-full bg-cyan-800 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                class="w-[48px] h-[48px] pl-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
              </svg>

              <span class="sr-only">Icon description</span>
            </button>
          </div>
          <div className="">
            <button
              type="button"
              class=" w-full bg-cyan-800 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                class="w-[48px] h-[48px] text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.502 7.046h-2.5v-.928a2.122 2.122 0 0 0-1.199-1.954 1.827 1.827 0 0 0-1.984.311L3.71 8.965a2.2 2.2 0 0 0 0 3.24L8.82 16.7a1.829 1.829 0 0 0 1.985.31 2.121 2.121 0 0 0 1.199-1.959v-.928h1a2.025 2.025 0 0 1 1.999 2.047V19a1 1 0 0 0 1.275.961 6.59 6.59 0 0 0 4.662-7.22 6.593 6.593 0 0 0-6.437-5.695Z" />
              </svg>

              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormsFirebase;
