import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const surveys = [
    {
      id: 1,
      name: "Survey 1",
      description: "This is the first survey",
      created_at: "2021-08-01T00:00:00.000Z",
      updated_at: "2021-08-01T00:00:00.000Z",
      valid_until: "2021-08-01T00:00:00.000Z",
    },
  ];
  return (
    <main className={styles.main}>
      <div className={inter.className}>
        <p>Available surveys:</p>
        <ul>
          {surveys.map((survey) => (
            <li key={survey.id}>
              <Link href={`/survey/${survey.id}`}>{survey.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
