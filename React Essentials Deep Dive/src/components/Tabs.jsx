export default function Tabs({ children, buttons, ButtonsContainer }) {
  // <></> is the wrapper element which is used to warp all code in one single thing as we cannot more than one value from a return statement. It does warpping without adding any extra component to the code
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
