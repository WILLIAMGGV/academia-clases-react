import React, { useState, useEffect } from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";
import logo from "../img/logo.png";
import { Button, Drawer, Radio, Space } from "antd";
import useSound from "use-sound";

import nivel1 from "../img/nivel1.jpg";
import nivel2 from "../img/nivel2.jpg";
import nivel3 from "../img/nivel3.gif";

//IMPORTAR SONIDOS
import popoff from "../sound/pop-up-off.mp3";
import popon from "../sound/pop-up-on.mp3";
import like from "../sound/rising-pops.mp3";
import bite from "../sound/bite.mp3";
import menuopen from "../sound/menu-open.mp3";
import bienvenido from "../sound/clases/bienvenido.mp3";
import { initInputCounters } from "flowbite";

function FormsFirebase() {
  const [open, setOpen] = useState(false);
  const [estadohome, setEstadohome] = useState(true);
  const [placement, setPlacement] = useState("bottom");

  //SONIDOS
  const [activar] = useSound(popon);
  const [desactivar] = useSound(popoff);
  const [megusta] = useSound(like);
  const [comenta] = useSound(bite);
  const [principal] = useSound(menuopen);
  const [iniciob, { stop }] = useSound(bienvenido, {
    autoplay: true,
  });

  const handleStop = () => {
    stop();
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

          <button onClick={() => iniciob()}>Click me!</button>
          <button onClick={() => handleStop()}>inicio</button>

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
        </div>
      </div>
      <div className=" flex flex-row flex-wrap p-4">
        <div
          onClick={activar}
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
          onClick={activar}
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
          onClick={activar}
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
      {displayName && <h5>welcome : {displayName}</h5>}
      <img src={`${photoURL}`} width="100px" height="100px" />

      <form className="form">
        <h3 className="title">Login</h3>

        <button onClick={(e) => handleGoogle(e)} className="button">
          Google
        </button>
      </form>

      <button onClick={() => handleLogout()} className="button">
        Logout
      </button>

      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
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
              onClick={principal}
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
                class="w-[48px] h-[48px] pl-2  text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                />
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
