import { Link } from "react-router-dom";

const Card = ({ card }) => {
      const { picture, title, category, category_bg, card_bg, text_button_bg, id } = card || {};
      const handleCardClicked = () => {

            const addedCardArray = [];
            const cardItems = JSON.parse(localStorage.getItem('cards'));

            if (!cardItems) {
                  addedCardArray.push(card);
                  localStorage.setItem('cards', JSON.stringify(addedCardArray));


            }
            else {

                  const isExist = cardItems.find(card => card.id === id);

                  if (!isExist) {
                        addedCardArray.push(...cardItems, card);
                        localStorage.setItem('cards', JSON.stringify(addedCardArray));


                  }
                  else {
                        console.log("already added");
                  }


            }




            // localStorage.setItem('test', JSON.stringify([{ name: "kudds" }, { name: "kuddus" }]));
      };

      return (

            <Link to="/Donation" >
                  <div onClick={handleCardClicked} className="card bg-base-100 shadow-xl w-[312px] h-[295px]" style={{ backgroundColor: card_bg }}>
                        <figure><img src={picture} className="h-[194px] w-[312px] object-cover" alt="" /></figure>

                        <div className="flex ml-5 mt-4 ">
                              <p className="text-[14px]  py-0 px-[10px] rounded-md font-bold" style={{ backgroundColor: category_bg, color: text_button_bg }}>{category} </p>

                        </div>
                        <p style={{ color: text_button_bg }} className="text-[20px] flex items-start ml-5 font-bold">{title}</p>
                  </div>
            </Link >

      );
};

export default Card;