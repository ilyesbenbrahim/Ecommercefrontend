import Topbar from "../topbare/Topbar";
import NavBar from "../NavBar";
import Feature from "../features/Feature";
import "./Tarifsdelivraison.css"
const Tarifsdelivraison = () => {
  const data = [
    { code: "01", wilaya: "Adrar", tarif: "900", delai: "4 à 7 jours" },
    { code: "02", wilaya: "Chlef", tarif: "800", delai: "24h à 48h" },
    { code: "03", wilaya: "Laghouat", tarif: "1000", delai: "48h à 96 h" },
    { code: "04", wilaya: "Oum El Bouaghi", tarif: "900", delai: "24h à 48h" },
    { code: "05", wilaya: "Batna", tarif: "800", delai: "24h à 48h" },
    { code: "06", wilaya: "Bejaia", tarif: "700", delai: "24h à 48h" },
    { code: "07", wilaya: "Biskra", tarif: "900", delai: "48h à 96 h" },
    { code: "08", wilaya: "Bechar", tarif: "900", delai: "4 à 7 jours" },
  ];

  return (
    <div>
         <Topbar></Topbar>
      <NavBar></NavBar>
      <table>
        <thead>
          <tr>
            <th>Code Wilaya</th>
            <th>Wilaya</th>
            <th>Tarif</th>
            <th>Délais de livraison</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.wilaya}</td>
              <td>{item.tarif}</td>
              <td>{item.delai}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Feature></Feature>

    </div>
  );
};

export default Tarifsdelivraison;
