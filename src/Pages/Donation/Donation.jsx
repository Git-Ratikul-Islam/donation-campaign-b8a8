import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";

const Donation = () => {
      const [card, setCard] = useState({});
      const { id } = useParams();
      const cards = useLoaderData();
      useEffect(() => {
            console.log("id, phones");
            const findCard = cards?.find((card) => card.id === id);
            setCard(findCard);


      }, [id, cards]);





      return (
            <div>
                  <DonationCard card={card}></DonationCard>


            </div>
      );
};

export default Donation;