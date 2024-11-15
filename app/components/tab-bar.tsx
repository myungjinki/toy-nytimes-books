import Button from "./button";
import { HomeIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

export default function TabBar() {
  return (
    <div className="fixed bottom-0 flex py-1 bg-white border-t-2 w-96 justify-evenly">
      <Button Icon={<HomeIcon />} text="Home" path="/"></Button>
      <Button
        Icon={<InformationCircleIcon />}
        text="About"
        path="/about"
      ></Button>
    </div>
  );
}
