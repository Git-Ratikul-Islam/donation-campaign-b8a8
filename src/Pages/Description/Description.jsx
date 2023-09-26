
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DesCard from './DesCard';


const Description = () => {


      const [descriptionCard, setDescriptionCard] = useState({});
      const { id } = useParams();


      const description = useLoaderData();

      useEffect(() => {
            const findDes = description?.find((descriptionCard) => descriptionCard.id === id);

            setDescriptionCard(findDes);

      }, [id, description]);
      console.log(descriptionCard);


      return (
            <div>
                  <DesCard key={descriptionCard.id} descriptionCard={descriptionCard}></DesCard>
            </div>
      );
};

export default Description;