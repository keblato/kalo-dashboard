import { Button, Input } from "@/components";
import { ButtonsTypes } from "@/constants";

function HomePage() {
  return (
    <div>
      <h1>Landing page, login and sign up option here</h1>

      <div className="w-1/4 mx-auto mt-8">
        <Input
          id="inputExample"
          name="inputExample"
          placeholder="Hola soy un imput"
        ></Input>
        <div className="flex flex-col items-center justify-center">
          <div className="p-2"></div>

          <Button title="Empresa" buttonType={ButtonsTypes.primary}></Button>
          <div className="p-2"></div>
          <Button
            title="Sin experiencia"
            buttonType={ButtonsTypes.secondary}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
