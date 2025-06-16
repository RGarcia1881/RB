type Props = {
  fadeOut: boolean;
};

function Splash({ fadeOut }: Props) {
  return (
    <div
      className={`h-screen flex items-center justify-center bg-black text-white flex-col gap-4 fade-in ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      <h1 className="text-3xl font-abel">RAÚL BAUTISTA</h1>
      <div className="h-[2px] bg-white grow-bar" />
      <img
        src="/RBW.png"
        alt="Logo de Raúl Bautista"
        className="w-20 h-20 object-contain mt-4 fade-in"
      />
    </div>
  );
}

export default Splash;
