import styles from "./page.module.css";
import Table from "../components/Table";
import getCountries from "./actions/getCountries";

export default async function Page() {
  const countries = await getCountries();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GeoInfo</h1>
      <Table countryList={countries}/>
    </div>
  );
}
