import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";
// I need AppLayout to Structure my Components 
 /**
     * Designing High Level Components
     * 
     * Header
     *  .Logo
     *  .NavItems(on RightSide)
     *  -cart
     * 
     * Body
     *  .SearchBar
     *  .RestrauntList
     *    .ResturantCard
     *      .Image
     *      .Name
     *      .Rating 
     *      .Cusines
     * 
     * Footer
     *  .Copyright 
     *  .Link to social media
     */
 const App = ()=>{
    return(
        <div className="App">
           <Header />
           <Body />
           <Footer />
        </div>
    )
};
export default App;
