1.1 console.log(cars.filter(v => v["Miles_per_Gallon"]));
1.2 console.log(cars.filter(v => v.Miles_per_Gallon === null));
1.3 console.log(cars.filter(v => v.Cylinders == 8 && v.Miles_per_Gallon >= 15));
1.4 cars.forEach((element) => {
  element.Kilowatts = cars.Horsepower * 0.7457;
});
console.log(cars);
1.5 cars.sort((a, b) => a.Weight_in_lbs - b.Weight_in_lbs);
console.log(cars);
1.6 console.log(cars.every(v => v.Origin === "USA"));