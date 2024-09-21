import React from "react";
import ricardo from "../../../assets/ricardo.PNG";
import alyne from "../../../assets/alyne.PNG";
import mauricio from "../../../assets/mauricio.PNG";
import jorge from "../../../assets/jorge.PNG";
import nicolas from "../../../assets/nicolas.PNG";

export const Team = () => {
  const teamMembers = [
    {
      name: "Ricardo Maguiña",
      role: "Developer",
      image: ricardo,
      id: "u202121858",
      tags: ["Backend", "Frontend", "IoT", "Software Development"],
    },
    {
      name: "Alyne Regalado",
      role: "Developer",
      image: alyne,
      id: "u20201A976",
      tags: ["Backend", "Software Development", "IoT"],
    },
    {
      name: "Mauricio Salas",
      role: "Developer",
      image: mauricio,
      id: "u20201A976",
      tags: ["Backend", "Software Development", "IoT"],
    },
    {
      name: "Jorge Ponce",
      role: "Developer",
      image: jorge,
      id: "u202120471",
      tags: ["Frontend", "Software Development"],
    },
    {
      name: "Nicolas Haro",
      role: "Developer",
      image: nicolas,
      id: "U201910045",
      tags: ["Frontend", "Backend", "IoT"],
    },
  ];

  return (
    <div id="team" className="container mx-auto py-12 px-4 md:px-0">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Nuestro Equipo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow hover:shadow-xl rounded-xl overflow-hidden border-2"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-contain object-center p-3"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <h4 className="text-l font-semibold mt-4">Contacto</h4>
              <p className="text-gray-600">
                Correo:{" "}
                <a
                  className="text-[#055de5] font-semibold"
                  href={`mailto:${member.id
                    .split(" ")[0]
                    .toLowerCase()}@upc.edu.pe`}
                >
                  {member.id.split(" ")[0].toLowerCase()}@upc.edu.pe
                </a>
              </p>
              <h4 className="text-sm font-semibold mt-4 mb-2">Tags</h4>
              <div className="flex flex-wrap">
                {member.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
