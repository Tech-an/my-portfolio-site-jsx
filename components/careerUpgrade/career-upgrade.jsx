import styles from "./career-upgrade.module.css";
import Image from "next/image";
import sample from "../../public/KJ.jpg";

export default function CareerUpgrade() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span style={{ "--i": 1 }}>
          <Image src={sample} alt="" width={200} />
        </span>
        <span style={{ "--i": 2 }}>
          <Image src={sample} alt="" width={200} />
        </span>
        <span style={{ "--i": 3 }}>
          <Image src={sample} alt="" width={200} />
        </span>
        <span style={{ "--i": 4 }}>
          <Image src={sample} alt="" width={200} />
        </span>
        <span style={{ "--i": 5 }}>
          <Image src={sample} alt="" width={200} />
        </span>
        <span style={{ "--i": 6 }}>
          <Image src={sample} alt="" width={200} />
        </span>
        <span style={{ "--i": 7 }}>
          <Image src={sample} alt="" width={200} />
        </span>
        <span style={{ "--i": 8 }}>
          <Image src={sample} alt="" width={200} />
        </span>
      </div>
    </div>
  );
}
