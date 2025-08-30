import alice from "../assets/team/alice.jpg";
import michael from "../assets/team/michael.jpg";
import sarah from "../assets/team/sarah.jpg";
import david from "../assets/team/david.jpg";

function Team() {
  const members = [
    { 
      name: "Alice Johnson", 
      role: "CEO", 
      img: alice,
      bio: "Visionary leader with 10+ years of experience in business growth." 
    },
    { 
      name: "Michael Lee", 
      role: "CTO", 
      img: michael,
      bio: "Technology strategist passionate about building scalable systems." 
    },
    { 
      name: "Sarah Kim", 
      role: "Lead Developer", 
      img: sarah,
      bio: "Expert full-stack developer focused on creating innovative solutions." 
    },
    { 
      name: "David Smith", 
      role: "UX Designer", 
      img: david,
      bio: "Creative designer dedicated to delivering seamless user experiences." 
    },
  ];

  return (
    <section id="team" className="py-20 px-4 bg-[#424243]">
      <div className="mx-auto max-w-[1280px] text-center">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold mb-11 text-[#1FA5AE] tracking-tight">
          Our Team
        </h1>
        <div className="grid md:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img
                src={m.img}
                alt={m.name}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold text-white">{m.name}</h3>
              <p className="text-gray-300 mb-2">{m.role}</p>
              <p className="text-gray-400 text-sm max-w-[220px]">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
