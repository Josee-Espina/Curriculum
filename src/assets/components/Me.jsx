import JoseImage from "../images/Jose.png";

export function Me() {
  return (
    <div
      className="flex items-center flex-col bg-base-300 active:bg-base-300/50"
      id="Start"
    >
      <img
        src={JoseImage}
        alt=""
        className="select-none object-contain w-30 mask-radial-from-60% mask-radial-to-70% mask-radial-at-center pt-5"
      />
      <p className="text-3xl select-none max-[600px]:text-lg font-mono flex flex-col text-center mb-3 mt-2">
        Jose Espina <span className="font-bold ">Ingeniero de Sistemas</span>
      </p>
    </div>
  );
}
