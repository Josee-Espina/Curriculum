import img from "../images/Curriculum.png";

export function Project({ URLcontent, title, desc, codeURL, video }) {
  const imgs = [img];

  return (
    <div className=" relative  flex rounded-2xl m-4 bg-base-200 pt-2 pb-4 flex-col items-center ">
      <div className="w-full bg-base-100 pt-2 rounded-2xl">
        {video ? (
          <div className="aspect-video bg-base-100 w-full p-0 flex-1 ">
            <iframe
              className="w-full h-full"
              src={URLcontent}
              allow="fullscreen;"
            ></iframe>
          </div>
        ) : (
          <div className=" flex justify-center  ">
            <img
              src={imgs[URLcontent]}
              className=" blur-[2px] w-md grow object-contain "
            />
          </div>
        )}

        <p className="text-center mt-2 font-bold text-xl mb-2">{title}</p>
      </div>
      <div className="flex flex-col w-full max-w-md  px-4 mt-1">
        <p className="font-bold text-center text-lg ">Descripcion</p>
        <p className="text-center">{desc}</p>
        <p className="text-right text-green-500 mt-5 underline   ">
          <a
            href={codeURL}
            target="_Blank"
            className="absolute bottom-2 right-2"
          >
            CODIGO FUENTE
          </a>
        </p>
      </div>
    </div>
  );
}
