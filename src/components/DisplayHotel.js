const DisplayHotel = ({ item }) => {
    console.log(item)
    return (
        <div >



            <div class="card flex-row flex-wrap">
                <div class="card-header border-2 ">
                    <img src={item.ThumbImages.__cdata} alt="" />
                </div>
                <div class="card-block px-2">
                    <h4 class="card-title">{item.Name.__cdata}</h4>

                    <p className="card-text board">Board Basis: {item.BoardBasis.__cdata}</p>
                    <p className="card-text property">Property Type: {item.Property_type}</p>
                    <p class="card-text price" >Price: {item.Price}</p>
                </div>

            </div>


        </div>

    );
};

export default DisplayHotel;