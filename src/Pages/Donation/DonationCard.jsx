import { Link } from "react-router-dom";


const DonationCard = ({ card }) => {
      const { picture, title, category, category_bg, card_bg, text_button_bg, price } = card || {};
      return (

            <div className="w-5/6 mx-auto">
                  <div className="card card-side bg-base-10 shadow-xl w-[648px]" style={{ backgroundColor: card_bg }}>
                        <figure><img className="h-[220px] w-[220px]" src={picture} alt="Movie" /></figure>
                        <div className="card-body">

                              <div className="flex ">
                                    <p className="text-[14px] py-0 px-[10px] rounded-md font-semibold flex-grow-0" style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</p>
                              </div>


                              <p className="font-bold text-[24px]" >{title}</p>
                              <p className="mb-3 font-semibold text-[16px] " style={{ color: text_button_bg }}>{price} $</p>
                              <Link to="/Details"> <div className="flex">
                                    <p className="text-[14px] text-white py-2 px-[9px]  rounded font-bold flex-grow-0" style={{ backgroundColor: text_button_bg }}>View Details</p>
                              </div>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default DonationCard;