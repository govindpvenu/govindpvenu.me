import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "invisor",
    companyName: "Invisor Global Education Pvt Ltd",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C560BAQE9yHT2Ir5QQw/company-logo_200_200/company-logo_200_200/0/1630650949837?e=1762387200&v=beta&t=tpCHQbDLFwy3WkCAzLakM7nGUY8lpVXtQ72CKL9wx6U",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Associate - Full Stack Developer",
        employmentPeriod: {
          start: "08.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: ``,
        skills: [
          "Next.js",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "Express.js",
          "PostgreSQL",
          "Git",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  //   {
  //     id: "freelance",
  //     companyName: "Freelance",
  //     positions: [
  //       {
  //         id: "f0becfba-057d-40db-b252-739e1654faa1",
  //         title: "Full-stack Developer",
  //         employmentPeriod: {
  //           start: "2018",
  //           end: "2020",
  //         },
  //         employmentType: "Part-time",
  //         description: `- Built an order management website with real-time delivery tracking.
  // - Developed an e-commerce site for bird's nest products.
  // - Created a map to display monitoring station data.
  // - Designed a customizable WordPress landing page.`,
  //         icon: "code",
  //         skills: [
  //           "Laravel",
  //           "React",
  //           "Express.js",
  //           "Socket.IO",
  //           "MongoDB",
  //           "Firebase",
  //           "WordPress",
  //           "Docker",
  //           "NGINX",
  //         ],
  //       },
  //       {
  //         id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
  //         title: "Graphic & UI/UX Designer",
  //         employmentPeriod: {
  //           start: "2018",
  //           end: "2019",
  //         },
  //         employmentType: "Part-time",
  //         description: "Designed logos, posters, ads, and UI.",
  //         icon: "design",
  //         skills: [
  //           "Creativity",
  //           "UI/UX Design",
  //           "Graphic Design",
  //           "Sketch",
  //           "Adobe Photoshop",
  //           "Adobe Illustrator",
  //         ],
  //       },
  //     ],
  //   },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Mar Elias Higher Secondary School",
        employmentPeriod: {
          start: "06.2021",
          end: "03.2023",
        },
        icon: "education",
        description: ``,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Sobhana English Medium High School",
        employmentPeriod: {
          start: "06.2020",
          end: "03.2021",
        },
        icon: "education",
        description: ``,
        skills: [],
      },
    ],
  },
];
