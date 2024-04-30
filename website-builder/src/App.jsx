import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Footer from "./components/Footer";
// import Register from "./components/Register.css";
// import "./components/Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FaHome } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="app-container">
      <Register></Register>
        <div className="content">
        <Header></Header>
        
        {/* <div className="app-container"> */}
        {/* <Register></Register> */}
        <Footer></Footer>
      </div>
      </div>
    </>
  );
}

export default App;

// function App() {
//   // State to track authentication status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Function to handle scroll event
//   const handleScroll = () => {
//     // Logic to check if the user is not logged in and scrolled
//     if (!isLoggedIn && window.scrollY > 100) {
//       // Display the sign-up page or perform any other action
//       console.log("User scrolled without logging in");
//       // You can set state here to show the sign-up page
//     }
//   };

//   // Attach scroll event listener when component mounts
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isLoggedIn]); // Re-run effect when isLoggedIn state changes

//   return (
//     <>
//       <Header />
//       {/* Conditionally render the sign-up page or main content */}
//       {isLoggedIn ? (
//         // Main content of your application when the user is logged in
//         // <div>Main Content</div>
//         <Content></Content>
//       ) : (
//         // Sign-up page when the user is not logged in
//         <Register />
//       )}
//       <Footer />
//     </>
//   );
// }

// export default App;

// function App() {
//   return (
//     <>
//       <Header></Header>
//       <Register></Register>
//       <Footer></Footer>
//     </>
//   );
// }

// export default App;
