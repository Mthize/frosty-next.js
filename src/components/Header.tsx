import { FizziLogo } from "@/components/FizziLogo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FizziLogo className="coursor-pointer z-10 h-20 text-sky-800" />
    </header>
  );
}
