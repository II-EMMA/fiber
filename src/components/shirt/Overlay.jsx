import { Logo } from "@pmndrs/branding";
import {
  AiOutlineHighlight,
  AiOutlineShopping,
  AiFillCamera,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { useSnapshot } from "valtio";
import { state } from "./store";

export default function Overlay() {
  const snap = useSnapshot(state);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Header is interactive */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-10 pointer-events-auto">
        <Logo width="40" height="40" />
        <AiOutlineShopping size="3em" />
      </header>

      {snap.intro ? <Intro /> : <Customizer />}
    </div>
  );
}

function Intro() {
  return (
    <section className="absolute inset-0 flex flex-col justify-center items-center">
      <div className="mt-[15vh] ml-[5vw] pointer-events-auto">
        <h1 className="font-black italic text-[16vw] leading-[17.5vh] tracking-[-6px] font-nunito w-[30%]">
          LET'S DO IT.
        </h1>
      </div>
      <div className="md:self-end self-center md:text-start text-center pointer-events-auto">
        <p className="w-[350px] mb-12 leading-6 mx-2">
          Create your unique and exclusive shirt with our brand-new 3D
          customization tool. <strong>Unleash your imagination</strong> and
          define your own style.
        </p>
        <button
          className="md:mx-0 mx-auto bg-black text-white font-bold uppercase flex items-center gap-4 px-6 py-3 rounded transition-all duration-300 hover:scale-110"
          onClick={() => (state.intro = false)}
        >
          CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
        </button>
      </div>
    </section>
  );
}

function Customizer() {
  const snap = useSnapshot(state);
  function DownloadButton() {
  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "shirt.png";
    link.href = dataURL;
    link.click();
  };

  return (
    <section className="absolute inset-0 flex flex-col justify-end items-center pb-6">
      {/* Color options */}
      <div
        className="
    absolute flex gap-3
    flex-col top-1/2 right-10 -translate-y-1/2
    md:flex-row md:bottom-10 md:top-auto md:right-auto md:translate-y-0
  "
      >
        {snap.colors.map((color) => (
          <div
            key={color}
            className="w-8 h-8 rounded-full border-2 border-white cursor-pointer transition-transform duration-300 hover:scale-125 pointer-events-auto"
            style={{ background: color }}
            onClick={() => (state.selectedColor = color)}
          />
        ))}
      </div>

      {/* Decals */}
      <div className="absolute sm:left-12 left-6 bottom-10 flex gap-5 pointer-events-auto">
        {snap.decals.map((decal) => (
          <div
            key={decal}
            className="cursor-pointer"
            onClick={() => (state.selectedDecal = decal)}
          >
            <img
              src={`/${decal}_thumb.png`}
              alt="brand"
              className="w-6  hover:scale-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        className="absolute bottom-8 sm:right-10 right-6 px-6 py-3 rounded font-bold uppercase flex items-center gap-3 text-white transition-transform duration-300 hover:scale-110 pointer-events-auto"
        style={{ background: snap.selectedColor }}
        onClick={handleDownload}
      >
        DOWNLOAD <AiFillCamera size="1.3em" />
      </button>

      <button
        className="absolute top-10 right-10 px-6 py-3 rounded font-bold uppercase flex items-center gap-3 text-white transition-transform duration-300 hover:scale-110 pointer-events-auto"
        style={{ background: snap.selectedColor }}
        onClick={() => (state.intro = true)}
      >
        GO BACK <AiOutlineArrowLeft size="1.3em" />
      </button>
    </section>
  );
}
