
// import Axios from "axios";
// import Footer from "./Footer";

//css
// import "../../assets/css/Dashboard.css";

//background image
//import bfImg from '../../assets/img/bg.png'


  //array of blood unit availbility
//   const [bloodTable, setbloodTable] = useState([]);

  //useEffect call
//   useEffect(() => {
//     Axios.get("http://localhost:3001/home", (req, res) => {}).then(
//       (response) => {
//         //console.log(response.data);
//         setbloodTable(response.data);
//       }
//     );
//   });
const Dashboard = () => {
console.log("helloo");
  return (
    <div className="dashboard">
      
      <img src="../img/Blood_Donation.jpg"></img>
        <p>Donating blood has benefits for your emotional and physical health. According to a report by the Mental Health Foundation, helping others can: Research has found further evidence of the health benefits that come specifically from donating blood. In order to give blood, you’re required to undergo a health screening.
        </p>
    </div>
  );
};

export default Dashboard;