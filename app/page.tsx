import { poppins, roboto } from "./fonts";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className={`${roboto.variable} font-roboto text-4xl text-center`}>
        Title Of The Page
      </h1>
      <h2 className={`${poppins.variable} font-poppins text-xl`}>
        Heading of page
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        incidunt ipsam, aliquam eius illo ex provident sit placeat iure. Dolores
        tempore atque minus id aliquam libero vel qui officiis ad.
      </p>
    </main>
  );
}
