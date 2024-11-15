import Button from "./button";
import {
  HomeIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export default function TabBar() {
  return (
    <div className="fixed bottom-0 flex w-96 py-1 border-t-2 justify-evenly bg-white">
      <Button Icon={<HomeIcon />} text="Home" path="/"></Button>
      <Button
        Icon={<MagnifyingGlassIcon />}
        text="Search"
        path="/search"
      ></Button>
      <Button
        Icon={<InformationCircleIcon />}
        text="About"
        path="/about"
      ></Button>
    </div>
  );
}
