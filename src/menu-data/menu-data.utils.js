import MENU_DATA from "./menu-data";

const filterData = (
  size = window.innerWidth <= 320
    ? 3
    : window.innerWidth <= 360
    ? 4
    : window.innerWidth <= 992 && window.innerHeight <= 450
    ? 3
    : 6
) => {
  let sliderCount = [];
  let namesArr = [];
  let foodArr = [];

  MENU_DATA.map((item, index) => {
    //gets the names
    namesArr.push(Object.keys(item).toString());
    //gets the menu
    foodArr.push(MENU_DATA[index][Object.keys(item).map((item) => item)]);
    //gets the slider count
    sliderCount.push(
      Math.ceil(
        Object.keys(MENU_DATA[index][Object.keys(item).map((item) => item)])
          .length / size
      )
    );

    return 0;
  });
  return { sliderCount, namesArr, foodArr };
};

export default filterData;
