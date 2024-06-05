import ParentComponent from "./components/ParentComponent";
import { poppins, roboto } from "./fonts";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className={`${roboto.variable} font-roboto text-4xl text-center`}>
        Title Of The Page
      </h1>
      <ParentComponent />
    </main>
  );
}
