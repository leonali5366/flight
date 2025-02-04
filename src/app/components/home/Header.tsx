export default function Header() {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        autoPlay
        muted
        loop
      >
        <source src="/video/header-home.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-1]"></div>
      <div className="flex flex-col gap-5 text-center mt-36">
        <h1 className="text-6xl font-garamond-display">
          Voyager en privé en toute <br /> simplicité
        </h1>
        <p className="font-light tracking-[0.3em] text-sm">
          LA PREMIÈRE ET UNIQUE COMPAGNIE MONDIALE D&apos;AVIATION PRIVÉE
        </p>
        <div className="flex items-center justify-center gap-5">
          <button className="w-36 rounded-full border py-2 text-xs font-medium opacity-90">
            PLANIFIER UN VOL
          </button>
          <button className="w-36 rounded-full border py-2 text-xs font-medium opacity-90">
            ABONNEMENTS
          </button>
        </div>
      </div>
    </div>
  );
}
