
// import { useLoaderData } from "react-router-dom";
// import Cards from "../../Components/Cards/Cards";
// // import './Nav.css';
// import './Home.css';


// const Home = () => {
//       const cards = useLoaderData();
//       // console.log(cards);



//       return (
//             <>
//                   <div className="">
//                         <div className="text-center h-[600px] nav ">
//                               <div className="pt-44">
//                                     <h2 className="text-[48px] font-bold text-center">I Grow By Helping People In Need</h2>
//                                     <div className="join mt-[40px] ">
//                                           <div>
//                                                 <div >
//                                                       <input className="input input-bordered join-item md:w-[470px] " placeholder="Search" />
//                                                 </div>
//                                           </div>
//                                           <div className="indicator ">
//                                                 <button className="btn join-item bg-[#FF444A] text-white hover:bg-[#79C23F]">Search</button>
//                                           </div>
//                                     </div>
//                               </div>
//                         </div>




//                   </div>
//                   <Cards cards={cards}></Cards>
//             </>

//       );
// };

// export default Home;
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import './Home.css';

const Home = () => {
      const allCards = useLoaderData();
      const [searchText, setSearchText] = useState('');
      const [filteredCards, setFilteredCards] = useState(allCards);
      console.log(allCards);

      // Function created to filter cards based on the search text
      const handleSearch = () => {
            const filtered = allCards.filter(card =>
                  card.category.toLowerCase().includes(searchText.toLowerCase())

            );
            setFilteredCards(filtered);
            // console.log(filtered, searchText, allCards);
      };

      return (
            <>
                  <div className="">
                        <div className="text-center h-[600px] nav ">
                              <div className="pt-44">
                                    <h2 className="text-[48px] font-bold text-center">I Grow By Helping People In Need</h2>
                                    <div className="join mt-[40px] ">
                                          <div>
                                                <div>
                                                      <input
                                                            className="input input-bordered join-item md:w-[470px]"
                                                            placeholder="Search"
                                                            value={searchText}
                                                            onChange={(e) => setSearchText(e.target.value)}
                                                      />
                                                </div>
                                          </div>
                                          <div className="indicator">
                                                <button
                                                      className="btn join-item bg-[#FF444A] text-white hover:bg-[#79C23F]"
                                                      onClick={handleSearch}
                                                >
                                                      Search
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Cards cards={filteredCards}></Cards>
            </>
      );
};

export default Home;
