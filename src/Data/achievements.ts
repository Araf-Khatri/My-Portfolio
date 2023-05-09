interface Achievements {
  id: number;
  description: string;
  link?: string;
}

const achievementsData: Achievements[] = [
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem facilis vitae, labore fuga at quod consectetur perferendis repellat dolores ipsa architecto, sapiente velit molestiae ratione dolorem a ea voluptates!",
    link: "https://google.com/",
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima vero temporibus quibusdam saepe esse, ab explicabo quis ullam iste",
    link: "https://google.com/",
  },
  {
    id: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima vero temporibus quibusdam saepe esse, ab explicabo quis ullam iste",
    link: "https://google.com/",
  },
];

export default achievementsData;
