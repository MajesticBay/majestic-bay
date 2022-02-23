import { Btn } from './Btn';

export const Story = () => {
  return (
    <div className="story">
      <p>
        We are excellent experts.{" "}
        <span className="story--blue">
          Web design, UX research, app design, branding and logos, highly loaded
          backend, lightweight and responsive frontend
        </span>{" "}
        — we all know how to do it at the highest level.
      </p>
      <br />
      <p>
        And most importantly —{" "}
        <span className="story--blue">
          we do not forget to solve the client's problem in the most optimal
        </span>{" "}
        and effective way.
      </p>
      <Btn className={"story__btn"} dark={false} />
    </div>
  );
};
