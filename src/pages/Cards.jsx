import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Cards() {
  const [params, setSearchParams] = useSearchParams();
  const status = params.get("status");

  const [card, _] = useState([
    {
      id: 1,
      name: "Іван Петренко",
      age: 25,
      email: "ivan@gmail.com",
      city: "Київ",
      isActive: true,
    },
    {
      id: 2,
      name: "Марія Коваленко",
      age: 30,
      email: "maria@gmail.com",
      city: "Львів",
      isActive: false,
    },
    {
      id: 3,
      name: "Олег Шевченко",
      age: 22,
      email: "oleg@gmail.com",
      city: "Одеса",
      isActive: true,
    },
    {
      id: 4,
      name: "Анна Мельник",
      age: 28,
      email: "anna@gmail.com",
      city: "Харків",
      isActive: true,
    },
    {
      id: 5,
      name: "Андрій Бондаренко",
      age: 35,
      email: "andrii@gmail.com",
      city: "Дніпро",
      isActive: false,
    },
    {
      id: 6,
      name: "Олена Ткаченко",
      age: 24,
      email: "olena@gmail.com",
      city: "Полтава",
      isActive: true,
    },
    {
      id: 7,
      name: "Дмитро Савченко",
      age: 31,
      email: "dmytro@gmail.com",
      city: "Черкаси",
      isActive: false,
    },
    {
      id: 8,
      name: "Софія Кравченко",
      age: 27,
      email: "sofia@gmail.com",
      city: "Вінниця",
      isActive: true,
    },
    {
      id: 9,
      name: "Максим Лисенко",
      age: 29,
      email: "maxim@gmail.com",
      city: "Запоріжжя",
      isActive: true,
    },
    {
      id: 10,
      name: "Катерина Мороз",
      age: 21,
      email: "kateryna@gmail.com",
      city: "Івано-Франківськ",
      isActive: false,
    },
  ]);

  const statusFilteredCards = card.filter((item) => {
    if (status === "online") {
      return item.isActive;
    } else if (status === "offline") {
      return !item.isActive;
    }
    return true;
  });

  return (
    <>
      <h1>Cards page</h1>

      <div>
        <button onClick={() => setSearchParams({})} type="button">
          Усі
        </button>
        {" | "}
        <button
          onClick={() => setSearchParams({ status: "online" })}
          type="button"
        >
          Online
        </button>
        {" | "}
        <button
          onClick={() => setSearchParams({ status: "offline" })}
          type="button"
        >
          Offline
        </button>
      </div>
      <ul>
        {statusFilteredCards.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.age}</p>
              <p>{item.email}</p>
              <p>{item.city}</p>
              <p>{item.isActive ? "Online" : "Offline"}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cards;
