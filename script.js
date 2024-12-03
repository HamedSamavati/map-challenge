// Challenge 1. Find customers with age>60 and age<10
// Challenge 2. Build customer data with title and full name

const customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 3,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: 4,
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 5,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

//  Challenge 1. Find customers with age>60 and age<10

const filteredCustomers = customers.filter(
  (customer) => customer.age > 60 || customer.age < 10
);
console.log(filteredCustomers);

// Challenge 2. Build customer data with title and full name

const titledCustomer = customers.map((customer) => {
  let title = "";
  const gender = customer.gender;
  if (gender == "M") {
    title += "Mr.";
  } else if (gender == "F") {
    if (customer.married == true) {
      title += "Mis.";
    } else {
      title += "Miss";
    }
  }
  customer.title = `${title} ${customer.f_name} ${customer.l_name}`;
  return customer;
});
console.log(titledCustomer);
