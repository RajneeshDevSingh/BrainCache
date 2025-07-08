import Cards from "./Cards";
import CreateContent from "./CreateContent";

const MainSection = ({
  boxState,
  updateBoxState,
}: {
  boxState: boolean;
  updateBoxState: (state: boolean) => void;
}) => {
  return (
    <div className="mt-24">
      <div className={`flex justify-center items-center -ml-[70%] ${boxState == true ? "block" : "hidden"}`}>
        <CreateContent boxState={boxState} updateBoxState={updateBoxState} />
      </div>
      <div className={` ${boxState == false ? "block" : "hidden"}`}>
        <Cards />
      </div>
    </div>
  );
};

export default MainSection;
