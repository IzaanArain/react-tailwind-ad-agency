import { TEAM_MEMBERS } from "../../../constants";

const Team = () => {
  return (
    <section id="team" className="container mx-auto px-8 py-20">
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Team
      </h2>
      <div className="flex flex-wrap">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.name}
            className="mb-12 flex w-full flex-col items-center md:w-1/2 lg:w-1/3"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mb-4 size-48 rounded-full"
            />
            <h3 className="font-semibold tracking-tighter lg:text-4xl">
              {member.name}
            </h3>
            <p className="italic lg:text-lg">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
