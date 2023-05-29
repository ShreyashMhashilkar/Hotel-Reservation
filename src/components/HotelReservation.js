import { data } from "../hoteldata";
import DisplayHotel from './DisplayHotel';
import FilterHotel from './FilterHotel';
import { useState } from 'react';
import Pagination from './Pagination';

function HotelReservation() {

  const [allData, setData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const fullName = item.Name.__cdata;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = allData.slice(firstPostIndex, lastPostIndex);


  // Filter for rating
  const ratingFilter = (rating) => {
    const filteredData = data.filter((item) => {

      if (item.Rating == rating) {
        return item;
      }
    });
    console.log("datarating")
    console.log(filteredData)
    setData(filteredData);
  };

  // get rating value from json data to display in dropdown
  const ratingData = () => {
    return [...new Set(data.map((item) => item.Rating))];
  };

  // Filter for board basis
  const boardBasisFilter = (board) => {
    const filteredData = data.filter((item) => {

      if (item.BoardBasis.__cdata === board) {
        return item;
      }
    });

    setData(filteredData);
  };

  // getting board basis value from json data to display in dropdown
  const boardBasisData = () => {
    return [...new Set(data.map((item) => item.BoardBasis.__cdata))];
  };

  // Filter for property type
  const propertyTypeFilter = (board) => {
    const filteredData = data.filter((item) => {

      if (item.Property_type === board) {
        return item;
      }
    });

    setData(filteredData);
  };

  // getting property type value from json data to display in dropdown
  const propertyTypeData = () => {
    return [...new Set(data.map((item) => item.Property_type))];
  };

  // Filter for rate type
  const rateTypeFilter = (rate) => {
    const filteredData = data.filter((item) => {

      if (item.rate_type === rate) {
        return item;
      }
    });

    setData(filteredData);
  };

  // getting rate type value from json data to display in dropdown

  const rateTypeData = () => {
    return [...new Set(data.map((item) => item.rate_type))];
  };

  return (
    <div className="container">
      <h1 style={{ color: "red" }}>1312 Hotels found in DISNEYLAND PARIS,FR </h1>
      <p style={{ color: " #000099" }}>For friday 18th november,2022 for 2 nights</p>
      <div className="row">
        <div className="col-sm-3">
          <FilterHotel
            onNameFilter={handleFilterName}
            boards={boardBasisData()}
            onBoardFilter={boardBasisFilter}
            ratings={ratingData()}
            onRatingFilter={ratingFilter}
            propertys={propertyTypeData()}
            onPropertyFilter={propertyTypeFilter}
            rates={rateTypeData()}
            onRateFilter={rateTypeFilter}

          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {currentPosts.map((item) => (
              <DisplayHotel item={item} key={item.id} />
            ))}
          </div>
          <br />
          <Pagination
            totalPosts={allData.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>

      </div>
    </div>
  );
}

export default HotelReservation;
