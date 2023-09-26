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









      return (

            <div >
                  {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
                        :
                        <div>
                              {donation.length > 0 && <button>Delete All</button>}

                              <div className="grid grid-cols-1 md:grid-cols-2  gap-5 ">
                                    {donation.map(card => <DonationCard key={card.id} card={card}></DonationCard>)}
                              </div>

                        </div>}


            </div>
      );
};

export default Donation;