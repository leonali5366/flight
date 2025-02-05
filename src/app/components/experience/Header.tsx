"use client";

export default function Header() {
  return (
    <div>
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Zoom Animation */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-zoom"
          style={{ backgroundImage: `url('/images/privateDining.jpeg')` }}
        ></div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]"></div>

        {/* Content */}
        <div className="relative z-[2] flex flex-col items-center gap-10 text-center">
          <h1 className="text-6xl font-garamond-display">
            L&apos;expérience ultime en jet privé
          </h1>
          <p className="font-light tracking-[0.3em] text-sm opacity-90">
            UN VOYAGE EFFICACE ET FLUIDE AVEC UN SERVICE À BORD <br />{" "}
            PARFAITEMENT ADAPTÉ À VOUS ET À VOS INVITÉS.
          </p>
          <button className="px-4 py-2 rounded-full bg-red-700 transition-colors duration-300 ease-in-out hover:bg-red-800 w-fit uppercase text-white text-[.6rem] tracking-widest">
            LES SERVICES À BORD EMBLÉMATIQUES DE VISTAJET
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-zoom {
          animation: zoom 25s infinite; /* 6.5s for zoom in and 6.5s for zoom out */
        }
      `}</style>
    </div>
  );
}
