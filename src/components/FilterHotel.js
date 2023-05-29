import { useState } from "react";

const FilterHotel = ({ onNameFilter, boards, onBoardFilter, ratings, onRatingFilter, propertys, onPropertyFilter, rates, onRateFilter }) => {
    const [filters, setFilters] = useState({
        name: "",
        rating: "",
        board: "",
        property: "",
        rate: ""
    });


    const handleInput = (field) => (event) => {
        const { value } = event.target;

        setFilters({
            ...filters,
            [field]: value,
        });

        switch (field) {
            case "name":
                onNameFilter(value);
                break;
            case "rating":
                onRatingFilter(value);
                break;
            case "board":
                onBoardFilter(value);
                break;
            case "property":
                onPropertyFilter(value);
                break;
            case "rate":
                onRateFilter(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="row my-5">
            <div className="col-sm-12 my-2" >
                <input
                    type="text"
                    placeholder="SEARCH HOTELS"
                    className="form-control"
                    id="name"
                    value={filters.name}
                    onChange={handleInput("name")}
                    style={{ backgroundColor: "#cce6ff" }}
                />
            </div>
            <hr />
            <div class="card w-100" >
                <div class="card-body" >
                    <h5 class="card-title">Rating</h5>
                    <div className="col-sm-12 my-2">
                        <select style={{ color: "#0000b3" }}
                            className="form-control"
                            id="rating"
                            onChange={handleInput("rating")}>
                            <option value="" >SELECT</option>
                            {ratings.map((rating) => (
                                <option value={rating} key={rating}>
                                    {rating}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <br />
            <hr />

            <div class="card w-100" >
                <div class="card-body">
                    <h5 class="card-title" >Board Basis</h5>
                    <div className="col-sm-12 my-2">

                        <select style={{ color: "#0000b3" }}
                            className="form-control"
                            id="board"
                            onChange={handleInput("board")}>
                            <option value="">Select</option>
                            {boards.map((board) => (
                                <option value={board} key={board}>
                                    {board}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <hr />
            <div class="card w-100" >
                <div class="card-body" >
                    <h5 class="card-title">Property Type</h5>
                    <div className="col-sm-12 my-2">
                        <select style={{ color: "#0000b3" }}
                            className="form-control"
                            id="property"
                            onChange={handleInput("property")}>
                            <option value="">Select</option>
                            {propertys.map((property) => (
                                <option value={property} key={property}>
                                    {property}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <hr />
            <div class="card w-100" >
                <div class="card-body" >
                    <h5 class="card-title">Rate Type</h5>
                    <div className="col-sm-12 my-2">
                        <select style={{ color: "#0000b3" }}
                            className="form-control"
                            id="rate"
                            onChange={handleInput("rate")}>
                            <option value="">Select</option>
                            {rates.map((rate) => (
                                <option value={rate} key={rate}>
                                    {rate}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>
            </div>

            <br />
            <br />

            <br />
            <hr />

        </div>
    );
};

export default FilterHotel;