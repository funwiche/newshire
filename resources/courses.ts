import programs from "./programs.json";
export default ["undergraduate", "postgraduate", "research"]
  .map((deg) =>
    programs
      .filter((el: any) => el.degree[deg])
      .map(({ name, faculty, program, qualification, duration }: any) => ({
        name: `${name}: ${program[deg]}`,
        faculty,
        degree: qualification[deg],
        duration: duration[deg],
        year: "2024 - 2025",
        mode: "Full-time",
      }))
  )
  .flat()
  .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
