import { Link } from "react-router-dom";


const DesCard = ({ descriptionCard }) => {
      const { title, category, text_button_bg, description, picture, price } = descriptionCard;
      return (
            <div>
                  <div className="relative w-5/6 mx-auto ">
                        <div className="relative  bg-white bg-clip-border text-gray-700">
                              <img
                                    src={picture}
                                    alt="image"
                                    className="h-[700px] w-full object-cover rounded-lg mt-[105px]"
                              />
                        </div>
                        <div>
                              <div className="relative bottom-[120px]  inset-x-0 ">
                                    <div className="bg-black bg-opacity-50 h-[120px] rounded-lg rounded-t-none p-4 ">
                                          <Link to="/Donation">
                                                <button className="btn relative left-4 top-5 border-none text-white text-sm" style={{ backgroundColor: text_button_bg }}>
                                                      Donate
                                                      <small className="text-sm">${price}</small>
                                                </button>
                                          </Link>
                                    </div>
                              </div>

                        </div>
                        <div>
                              <h1 className="text-[40px] font-bold">{title}</h1>
                              <p className="mt-10 text-[16px]">{description}</p>
                        </div>

                  </div>
            </div>
      );
};

export default DesCard;