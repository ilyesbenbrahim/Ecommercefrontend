import Topbar from "../topbare/Topbar";
import NavBar from "../NavBar";
import Feature from "../features/Feature";
import "./Tarifsdelivraison.css"
import { useTranslation } from 'react-i18next';

const Tarifsdelivraison = () => {
  const { t } = useTranslation();
  {t('hero:DiscovertheStyle')}

  const data = [
    { code: '01', wilaya: t('Tarifsdelivraison:Adrar'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '02', wilaya: t('Tarifsdelivraison:Chlef'), tarif: `800 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hour')} ${t('Tarifsdelivraison:to')} 48` },
    { code: '03', wilaya: t('Tarifsdelivraison:Laghouat'), tarif: `1000 ${t('Tarifsdelivraison:dzd')}`, delai: `48 ${t('Tarifsdelivraison:hour')} ${t('Tarifsdelivraison:to')} 96 ${t('Tarifsdelivraison:hour')}` },
    { code: '04', wilaya: t('Tarifsdelivraison:OumElbouaghi'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '05', wilaya: t('Tarifsdelivraison:Batna'), tarif: `800 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '06', wilaya: t('Tarifsdelivraison:Bejaia'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '07', wilaya: t('Tarifsdelivraison:Biskra'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `48 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 96 ${t('Tarifsdelivraison:hours')}` },
    { code: '08', wilaya: t('Tarifsdelivraison:Bechar'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '09', wilaya: t('Tarifsdelivraison:Blida'), tarif: `600 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '10', wilaya: t('Tarifsdelivraison:Bouira'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '11', wilaya: t('Tarifsdelivraison:Tamanrasset'), tarif: `1500 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '12', wilaya: t('Tarifsdelivraison:Tebessa'), tarif: `800 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '13', wilaya: t('Tarifsdelivraison:Tlemcen'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '14', wilaya: t('Tarifsdelivraison:Tiaret'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '15', wilaya: t('Tarifsdelivraison:TiziOuzou'), tarif: `600 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '16', wilaya: t('Tarifsdelivraison:Alger'), tarif: `500 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '17', wilaya: t('Tarifsdelivraison:Djelfa'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '18', wilaya: t('Tarifsdelivraison:Jijel'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '19', wilaya: t('Tarifsdelivraison:Setif'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '20', wilaya: t('Tarifsdelivraison:Saida'), tarif: `800 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '21', wilaya: t('Tarifsdelivraison:Skikda'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '22', wilaya: t('Tarifsdelivraison:SidiBelAbbes'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '23', wilaya: t('Tarifsdelivraison:Annaba'), tarif: `600 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '24', wilaya: t('Tarifsdelivraison:Guelma'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '25', wilaya: t('Tarifsdelivraison:Constantine'), tarif: `600 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '26', wilaya: t('Tarifsdelivraison:Medea'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '27', wilaya: t('Tarifsdelivraison:Mostaganem'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '28', wilaya: t('Tarifsdelivraison:MSila'), tarif: `800 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '29', wilaya: t('Tarifsdelivraison:Mascara'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '30', wilaya: t('Tarifsdelivraison:Ouargla'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '31', wilaya: t('Tarifsdelivraison:Oran'), tarif: `600 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '32', wilaya: t('Tarifsdelivraison:ElBayadh'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `48 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 96 ${t('Tarifsdelivraison:hours')}` },
    { code: '33', wilaya: t('Tarifsdelivraison:Illizi'), tarif: `1500 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '34', wilaya: t('Tarifsdelivraison:BordjBouArreridj'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '35', wilaya: t('Tarifsdelivraison:Boumerdes'), tarif: `600 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '36', wilaya: t('Tarifsdelivraison:ElTarf'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '37', wilaya: t('Tarifsdelivraison:Tindouf'), tarif: `1500 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '38', wilaya: t('Tarifsdelivraison:Tissemsilt'), tarif: `800 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '39', wilaya: t('Tarifsdelivraison:ElOued'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `48 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 96 ${t('Tarifsdelivraison:hours')}` },
    { code: '40', wilaya: t('Tarifsdelivraison:Khenchela'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '41', wilaya: t('Tarifsdelivraison:SoukAhras'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '42', wilaya: t('Tarifsdelivraison:Tipaza'), tarif: `600 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '43', wilaya: t('Tarifsdelivraison:Mila'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '44', wilaya: t('Tarifsdelivraison:AinDefla'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '45', wilaya: t('Tarifsdelivraison:Naama'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '46', wilaya: t('Tarifsdelivraison:AinTemouchent'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '47', wilaya: t('Tarifsdelivraison:Ghardaia'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '48', wilaya: t('Tarifsdelivraison:Relizane'), tarif: `700 ${t('Tarifsdelivraison:dzd')}`, delai: `24 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 48 ${t('Tarifsdelivraison:hours')}` },
    { code: '49', wilaya: t('Tarifsdelivraison:Timimoun'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '50', wilaya: t('Tarifsdelivraison:BordjBadjiMokhtar'), tarif: `1500 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '51', wilaya: t('Tarifsdelivraison:OuledDjellal'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `48 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 96 ${t('Tarifsdelivraison:hours')}` },
    { code: '52', wilaya: t('Tarifsdelivraison:BeniAbbes'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '53', wilaya: t('Tarifsdelivraison:InSalah'), tarif: `1500 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '54', wilaya: t('Tarifsdelivraison:InGuezzam'), tarif: `1500 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '55', wilaya: t('Tarifsdelivraison:Touggourt'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '56', wilaya: t('Tarifsdelivraison:Djanet'), tarif: `1500 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` },
    { code: '57', wilaya: t('Tarifsdelivraison:ElMGhair'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `48 ${t('Tarifsdelivraison:hours')} ${t('Tarifsdelivraison:to')} 96 ${t('Tarifsdelivraison:hours')}` },
    { code: '58', wilaya: t('Tarifsdelivraison:ElMeniaa'), tarif: `900 ${t('Tarifsdelivraison:dzd')}`, delai: `4 ${t('Tarifsdelivraison:to')} 7 ${t('Tarifsdelivraison:days')}` }
];

 
  return (
    <div>
         <Topbar></Topbar>
      <NavBar></NavBar>
      <table>
        <thead>
          <tr>
            <th>{t('Tarifsdelivraison:code')}</th>
            <th>{t('Tarifsdelivraison:wilaya')}</th>
            <th>{t('Tarifsdelivraison:tarif')}</th>
            <th>{t('Tarifsdelivraison:deliveryTime')}</th>
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
