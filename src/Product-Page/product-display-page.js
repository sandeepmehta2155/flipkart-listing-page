import { productDB } from "../productDB/productDB";
import Select from "react-select";
import { useState } from "react";

export const ProductDisplayPage = () => {
  const [genderFilters, setGenderFilters] = useState({
    men: false,
    women: false,
    boy: false,
    girl: false
  });

  const [sizeFilter, setSizeFilters] = useState({
    ssize: false,
    lsize: false,
    xlsize: false
  });

  const [brandFilters, setBrandFilter] = useState({
    urbano: false,
    cavenders: false,
    Cutecumber: false
  });
  const options = [
    { value: "HighToLow", label: "Price : High to Low" },
    { value: "LowToHigh", label: "Price : Low to High" }
  ];

  const [sorting, setSorting] = useState();
  return (
    <>
      <h1> Shirts And Clothings </h1>
      <small className="sortingSelectTag"> Sort by pricing :</small> <br />
      <Select
        name="sortingSelectBox"
        className="sortingSelectBox"
        options={options}
        onChange={(e) => {
          switch (e.value) {
            case "LowToHigh":
              setSorting("lowToHigh");
              break;
            case "HighToLow":
              setSorting("highToLow");
              break;
            default:
              setSorting("");
          }
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <small className="sortingSelectTag">Filters : </small>
      <br />
      <fieldset className="filterBox">
        {(genderFilters.men ||
          genderFilters.women ||
          genderFilters.boy ||
          genderFilters.girl ||
          sizeFilter.ssize ||
          sizeFilter.lsize ||
          sizeFilter.xlsize ||
          brandFilters.cavenders ||
          brandFilters.urbano ||
          brandFilters.Cutecumber) && (
          <small
            className="clearFilters"
            onClick={() => {
              setGenderFilters({
                men: false,
                women: false,
                boy: false,
                girl: false
              });
              setSizeFilters({
                ssize: false,
                lsize: false,
                xlsize: false
              });

              setBrandFilter({
                Cutecumber: false,
                urbano: false,
                cavenders: false
              });
            }}
          >
            {" "}
            <span>x</span> Clear all filters{" "}
          </small>
        )}
        <h3> Ideal for : </h3>
        {(genderFilters.men ||
          genderFilters.women ||
          genderFilters.boy ||
          genderFilters.girl) && (
          <small
            className="clearFilters"
            onClick={() =>
              setGenderFilters({
                men: false,
                women: false,
                boy: false,
                girl: false
              })
            }
          >
            {" "}
            <span>x</span> Clear filters{" "}
          </small>
        )}
        <br />
        {genderFilters.men ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setGenderFilters({
                men: false,
                women: false,
                boy: false,
                girl: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setGenderFilters({
                men: true,
                women: false,
                boy: false,
                girl: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        )}
        <span for="age1">Men</span>
        <br /> <br />
        {genderFilters.women ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setGenderFilters({
                men: false,
                women: false,
                boy: false,
                girl: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setGenderFilters({
                men: false,
                women: true,
                boy: false,
                girl: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        )}
        <span for="age2">Women</span>
        <br /> <br />
        {genderFilters.girl ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setGenderFilters({
                men: false,
                women: false,
                boy: false,
                girl: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setGenderFilters({
                men: false,
                women: false,
                boy: false,
                girl: true
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        )}
        <span for="age3">Girl</span>
        <br /> <br />
        {genderFilters.boy ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setGenderFilters({
                men: false,
                women: false,
                boy: false,
                girl: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setGenderFilters({
                men: false,
                women: false,
                boy: true,
                girl: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        )}
        <span for="age3">Boy</span>
        <br /> <br />
        <br />
        <h3> Brand : </h3>
        {(brandFilters.Cutecumber ||
          brandFilters.urbano ||
          brandFilters.cavenders) && (
          <small
            className="clearFilters"
            onClick={() =>
              setBrandFilter({
                urbano: false,
                cavenders: false,
                Cutecumber: false
              })
            }
          >
            {" "}
            <span>x</span> Clear filters{" "}
          </small>
        )}
        <br />
        <br />
        {brandFilters.urbano ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setBrandFilter({
                urbano: false,
                cavenders: false,
                Cutecumber: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setBrandFilter({
                urbano: true,
                cavenders: false,
                Cutecumber: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        )}
        <span>Urbano</span> <br /> <br />
        {brandFilters.cavenders ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setBrandFilter({
                urbano: false,
                cavenders: false,
                Cutecumber: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setBrandFilter({
                urbano: false,
                cavenders: true,
                Cutecumber: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        )}
        <span>Cavenders</span> <br /> <br />
        {brandFilters.Cutecumber ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setBrandFilter({
                urbano: false,
                cavenders: false,
                Cutecumber: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setBrandFilter({
                urbano: false,
                cavenders: false,
                Cutecumber: true
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        )}
        <span>Cutecumber</span> <br /> <br />
        <br />
        <h3> Size : </h3>
        {(sizeFilter.ssize || sizeFilter.lsize || sizeFilter.xlsize) && (
          <small
            className="clearFilters"
            onClick={() =>
              setSizeFilters({
                ssize: false,
                lsize: false,
                xlsize: false
              })
            }
          >
            {" "}
            <span>x</span> Clear filters{" "}
          </small>
        )}
        <br />
        <br />
        {sizeFilter.ssize ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setSizeFilters({
                ssize: false,
                lsize: false,
                xlsize: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setSizeFilters({
                ssize: true,
                lsize: false,
                xlsize: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        )}
        <span>S-size</span> <br /> <br />
        {sizeFilter.lsize ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setSizeFilters({
                ssize: false,
                lsize: false,
                xlsize: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setSizeFilters({
                ssize: false,
                lsize: true,
                xlsize: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        )}
        <span>L-size</span> <br /> <br />
        {sizeFilter.xlsize ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setSizeFilters({
                ssize: false,
                lsize: false,
                xlsize: false
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              setSizeFilters({
                ssize: false,
                lsize: false,
                xlsize: true
              });
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        )}
        <span>XL-size</span> <br /> <br />
      </fieldset>
      <ul className="productListings">
        {productDB
          .filter((obj) => (genderFilters.men ? obj.gender === "Men" : obj))
          .filter((obj) => (genderFilters.women ? obj.gender === "Women" : obj))
          .filter((obj) => (genderFilters.boy ? obj.gender === "Boy" : obj))
          .filter((obj) => (genderFilters.girl ? obj.gender === "Girl" : obj))
          .filter((obj) =>
            brandFilters.cavenders ? obj.brand === "Cavenders" : obj
          )
          .filter((obj) => (brandFilters.urbano ? obj.brand === "Urbano" : obj))
          .filter((obj) =>
            brandFilters.Cutecumber ? obj.brand === "Cutecumber" : obj
          )
          .filter((obj) => (sizeFilter.ssize ? obj.size === "S" : obj))
          .filter((obj) => (sizeFilter.lsize ? obj.size === "L" : obj))
          .filter((obj) => (sizeFilter.xlsize ? obj.size === "XL" : obj))
          .sort((a, b) =>
            sorting === "lowToHigh"
              ? a.originalPrice - b.originalPrice
              : b.originalPrice - a.originalPrice
          )
          .map(
            ({
              productName,
              originalPrice,
              offeredPrice,
              imgSrc,
              size,
              gender,
              brand
            }) => {
              return (
                <>
                  <li className="productCard">
                    <img src={imgSrc} className="productImg" alt="loading" />{" "}
                    <br />
                    <br />
                    <br />
                    <div>{productName}</div>
                    <br />
                    <br />
                    <div>
                      {" "}
                      ₹ {originalPrice} | <s> ₹ {offeredPrice}</s>
                    </div>
                    <br />
                    <div>
                      {" "}
                      Brand : {brand} | Size : {size}
                    </div>
                    <div>Ideal for : {gender}</div>
                  </li>
                </>
              );
            }
          )}
      </ul>
    </>
  );
};
