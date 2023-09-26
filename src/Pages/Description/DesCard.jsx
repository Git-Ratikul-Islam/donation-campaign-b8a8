

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
                              <button className="btn  border-none text-white text-sm relative bottom-20 left-8" style={{ backgroundColor: text_button_bg }}>
                                    Donate

                                    <small className="text-sm">${price}</small>

                              </button>
                        </div>
                        <div>
                              <h1>{title}</h1>
                              <p>{description}</p>
                        </div>

                  </div>
            </div>
      );
};

export default DesCard;