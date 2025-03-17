import Button from "./ui/Button"; // Adjust the path as needed
import { FaPlus, FaArrowRight, FaTrash } from "react-icons/fa"; // Import icons from react-icons

const ExamplePage = () => {
    const handleButtonClick = (message: string) => {
        alert(message);
    };

    return (
        <div >
            <h1>Button Component Examples</h1>
            
            {/* Simple Button */}
            <Button
                variant="primary"
                size="md"
                text="Submit"
                startIcon={<FaArrowRight/>}
                endIcon={<FaTrash/>}
                fullWidth={true}
                onClick={() => handleButtonClick("Primary button clicked!")}
            />

            <br /><br />

            {/* Button with Start Icon */}
            <Button
                variant="secondary"
                size="lg"
                text="Add Item"
                startIcon={<FaPlus />}
                fullWidth={true}
                onClick={() => handleButtonClick("Add Item button clicked!")}
            />

        </div>
    );
};

export default ExamplePage;
