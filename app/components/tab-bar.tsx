import Button from "./button";
import {
  HomeIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export default function TabBar() {
  return (
    <div className="fixed bottom-0 flex w-full py-1 border-t-2 justify-evenly">
      <Button Icon={<MagnifyingGlassIcon />} text="Search" match></Button>
      <Button Icon={<HomeIcon />} text="Home"></Button>
      <Button Icon={<InformationCircleIcon />} text="About"></Button>
    </div>
  );
}
