import Card from "./Card";


const Cards = ({ cards }) => {
      console.log(cards);
      return (
            <div className="text-3xl mt-[100px] card">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 gap-x-10 ">
                        {cards?.map(card => <Card key={card.id} card={card}></Card>)}
                  </div>

            </div>
      );
};

export default Cards;