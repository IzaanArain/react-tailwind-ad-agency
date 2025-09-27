import { figuresMockData } from "../../../constants";
import { capitalizeFirstLetter } from "../../../utils";

interface IProject {
  year: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
  figures: {
    investment: string;
    duration: string;
    outcome: string;
  };
}

interface IProjectProps {
  project: IProject | null | undefined;
}

const Project = ({ project }: IProjectProps) => {
  const title = project?.title || "";
  const imageUrl = project?.imageUrl || "";
  const year = project?.year || "";
  const desc = project?.description || "";
  const details = project?.details || "";
  const figures = project?.figures || figuresMockData;

  return (
    <div
      key={title}
      className="flex flex-col items-center md:flex-row-reverse md:items-start"
    >
      <div className="w-full p-8 md:w-1/2">
        <img src={imageUrl} alt={title} className="w-full rounded-3xl" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="mb-2 text-lg text-emerald-950">{year}</h2>
        <h3 className="mb-2 text-2xl font-semibold text-emerald-950">
          {title}
        </h3>
        <p className="mb-2 text-3xl text-emerald-950 lg:text-4xl">{desc}</p>
        <p className="mb-2 text-lg text-emerald-950 lg:text-2xl text-justify">
          {details}
        </p>
        <table className="min-w-full text-lg lg:text-xl">
          <tbody>
            {Object.entries(figures).map(([key, value]) => (
              <tr>
                <td className="px-6 py-4 font-medium text-emerald-950">
                  {capitalizeFirstLetter(key)}
                </td>
                <td className="px-6 py-4 text-emerald-950">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Project;
