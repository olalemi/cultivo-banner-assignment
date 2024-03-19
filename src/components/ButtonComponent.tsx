import { Box, Button } from "@chakra-ui/react";
type props = {
  buttonText: string;
  buttonColor: string;
  buttonBackgroundColor: string;
};
const ButtonComponent = ({
  buttonText,
  buttonColor,
  buttonBackgroundColor,
}: props) => {
  return (
    <Box>
      <Button
        type="submit"
        fontSize={{ base: "16px", md: "18px" }}
        width={{ base: "279px" }}
        style={{
          backgroundColor: buttonBackgroundColor,
          color: buttonColor,
          borderRadius: "8px",
          height: "56px",
          padding: "10px",
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default ButtonComponent;
