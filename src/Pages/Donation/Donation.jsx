import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DonationCard from "./DonationCard";
import { key } from "localforage";


const Donation = () => {
      // const [card, setCard] = useState({});
      // const { id } = useParams();
      // const cards = useLoaderData();
      // useEffect(() => {
      //       console.log("id, phones");
      //       const findCard = cards?.find((card) => card.id === id);
      //       setCard(findCard);


      // }, [id, cards]);

      const [donation, setDonations] = useState([]);
      const [noFound, setNoFound] = useState("");
      const [isShow, setIsShow] = useState(false);

      useEffect(() => {
            const cardItems = JSON.parse(localStorage.getItem('cards'));
            if (cardItems) {
                  setDonations(cardItems);
            }
            else {
                  setNoFound("NO data found");
            }
      }, []);
      console.log(donation);
      console.log(isShow);









      return (

            <div >
                  {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
                        :
                        <div>


                              <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-[100px]">
                                    {isShow ? donation.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                                          :
                                          donation.slice(0, 4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)

                                    }
                              </div>
                              <div >
                                    <button onClick={() => setIsShow(!isShow)} className="btn block mx-auto bg-[#009444] text-white hover:text-black mt-10">See all</button>
                              </div>

                        </div>}


            </div>
      );
};

export default Donation;