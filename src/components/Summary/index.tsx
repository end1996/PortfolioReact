import { Education } from "./sections/Education";
import { Experiencie } from "./sections/Experiencie";

type SummaryProps = {
  themeName: string;
};

export function Summary({ themeName }: SummaryProps) {
  return (
    <div className="container">
      <div className="position-relative d-flex text-center my-5">
        <h2 id="behind-text" className="text-132 fw-bold w-100 mb-0 opacity-1">
          CURRICULUM
        </h2>
        <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
          Perfil Profesional
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
        </p>
      </div>
      <div className="row gx-5 text-start">
        <Education themeName={themeName} />
        <Experiencie themeName={themeName} />
      </div>
    </div>
  );
}
