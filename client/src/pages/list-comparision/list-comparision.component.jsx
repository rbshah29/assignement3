/*
    Author: Utsavkumar Jayantibhai Italiya - ut437158@dal.ca (B00935447)
*/
import React from "react";
import "./list-comparision.styles.scss";
import { useSelector } from "react-redux";

const ListComparision = () => {
    const carsList = useSelector((state) => state.carCompare.cars);
    const compareCar = useSelector((state) => state.carCompare.compareCars);
    const cars = carsList.filter(
        (item) => item.vin === compareCar[0] || item.vin === compareCar[1]
    );
    const properties = Array.from(
      new Set(cars.flatMap(car => [...Object.keys(car)]))
    );
    return (
      <div className="table-div">
      <table className="car-table">
        <thead>
          <tr>
            <th></th>
            {cars.map(car => (
              <th key={car.Model}>{car.Model}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property}>
              <td>{property}</td>
              {cars.map(car => (
                <td key={car.Model + property}>
                  {property === "Image" ? (
                    <img className="car-image" src={car[property][0]} alt={`${car.Model} ${property}`} />
                  ) : (
                    car[property]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
  
export default ListComparision;
