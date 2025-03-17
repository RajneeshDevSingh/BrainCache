import Button from "./ui/Button"; // Adjust the path as needed
import { FaPlus } from "react-icons/fa"; // Import icons from react-icons
import { RiShareFill } from "react-icons/ri";


const Navbar = ({ updateBoxState }: { updateBoxState: (state: boolean) => void }) => {
  return (
    <div className="flex justify-between items-center my-4 mx-4">
        <div className="text-2xl font-semibold"><h1>All Notes</h1></div>
        <div className="flex justify-center gap-2 ">
        <Button
                variant="primary"
                size="md"
                text="Share Brain"
                startIcon={<RiShareFill/>}
                fullWidth={true}
            />
            <Button
                variant="secondary"
                size="lg"
                text="Add Content"
                startIcon={<FaPlus />}
                fullWidth={true}
                onClick={() => updateBoxState(true)}
            />
        </div>
    </div>
  )
}

export default Navbar