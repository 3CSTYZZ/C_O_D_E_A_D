document.addEventListener("DOMContentLoaded", () => {
  // список студентов
  let studentsList = [];

  // route
  function app() {
    // функция получает массив данных из json и передает его в функцию создания таблицы
    async function getArr() {
      const response = await fetch("http://localhost:3000/api/students");
      const studentsListJson = await response.json();
      studentsList = studentsListJson;
      renderStudents(studentsList);
    }
    getArr();

    // функция принимает на вход массив студентов, достаёт оттуда информацию и отправляет в json
    async function updateData(studentsArray) {
      for (let i = 0; i < studentsArray.length; i++) {
        const response = await fetch("http://localhost:3000/api/students", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: studentsArray[i].name,
            surname: studentsArray[i].surname,
            lastname: studentsArray[i].lastname,
            birth: studentsArray[i].birth,
            course: studentsArray[i].course,
            faculty: studentsArray[i].faculty,
          }),
        });
        const data = await response.json();
      }
    }

    // функция принимает на вход массив студентов, а также индекс студента из этого массива которого необходимо удалить из json
    async function deleteArrEl(studentsArray, i) {
      fetch(`http://localhost:3000/api/students/${studentsArray[i].id}`, {
        method: "DELETE",
      });
    }

    // функция отрисовки возраста
    function age(element, studentsArray) {
      let ageCalc;
      let declensionYear;

      if (
        Number(studentsArray[element].birth.substr(3, 2)) <
        new Date().getMonth() + 1
      ) {
        ageCalc = 0;
      } else if (
        Number(studentsArray[element].birth.substr(3, 2)) ===
        new Date().getMonth() + 1
      ) {
        if (
          Number(studentsArray[element].birth.substr(0, 2)) <
          new Date().getDate()
        ) {
          ageCalc = 0;
        } else {
          ageCalc = 1;
        }
      } else {
        ageCalc = 1;
      }

      if (
        (2023 - Number(studentsArray[element].birth.substr(-4)) - ageCalc) %
          10 ===
        1
      ) {
        declensionYear = " год)";
      } else if (
        (2023 - Number(studentsArray[element].birth.substr(-4)) - ageCalc) %
          10 >=
          5 ||
        (2023 - Number(studentsArray[element].birth.substr(-4)) - ageCalc) %
          10 ===
          0
      ) {
        declensionYear = " лет)";
      } else {
        declensionYear = " года)";
      }
      return {
        ageCalc,
        declensionYear,
      };
    }

    // функция отрисовки курса
    function whatCourse(element, studentsArray) {
      let courseOfStudy;

      if (
        new Date().getMonth() + 1 > 9 &&
        new Date().getFullYear() - studentsArray[element].course >= 4
      ) {
        courseOfStudy = " (Закончил)";
      } else if (
        new Date().getMonth() + 1 > 9 &&
        new Date().getFullYear() - studentsArray[element].course < 4
      ) {
        courseOfStudy =
          " (" +
          (new Date().getFullYear() - studentsArray[element].course + 1) +
          " курс)";
      } else if (new Date().getFullYear() - studentsArray[element].course < 4) {
        courseOfStudy =
          " (" +
          (new Date().getFullYear() - studentsArray[element].course) +
          " курс)";
      } else {
        courseOfStudy = " (Закончил)";
      }
      return courseOfStudy;
    }

    // функция отрисовки списка студентов
    async function renderStudents(studentsArray) {
      const tableBody = document.getElementById("app");
      tableBody.innerHTML = "";

      for (let i = 0; i < studentsArray.length; i++) {
        let tableRow = document.createElement("tr");
        tableRow.classList.add("students__list");
        let ageCalc = age(i, studentsArray).ageCalc;
        let declensionYear = age(i, studentsArray).declensionYear;
        let courseOfStudy = whatCourse(i, studentsArray);

        let fio =
          studentsArray[i].surname +
          " " +
          studentsArray[i].name +
          " " +
          studentsArray[i].lastname;

        let faculty = studentsArray[i].faculty;

        let birth =
          studentsArray[i].birth +
          " (" +
          (2023 - Number(studentsArray[i].birth.substr(-4)) - ageCalc) +
          declensionYear;

        let startEndLearn =
          studentsArray[i].course +
          "-" +
          (Number(studentsArray[i].course) + 4) +
          courseOfStudy;

        tableRow.innerHTML = `<td>${fio}</td> <td>${faculty}</td> <td>${birth}</td> <td>${startEndLearn}</td> <td> <button class='cross'></button> </td>`;

        tableBody.append(tableRow);
      }

      // вызываем функция кнопки удаления, чтобы при нажатии на удаление - студент удалилися
      buttonDelete();
    }

    // функция отправки формы с валидацией
    function validation() {
      const button = document.querySelector(".btn");
      const allFormInputs = document.querySelectorAll(".input");

      button.addEventListener("click", async () => {
        const errors = document.querySelectorAll(".error");

        for (let i = 0; i < errors.length; i++) {
          errors[i].remove();
        }
        for (let i = 0; i < allFormInputs.length; i++) {
          const error = document.createElement("div");

          error.classList.add("error");
          error.style.color = "red";
          error.style.lineHeight = "20px";
          error.style.position = "absolute";
          error.style.bottom = "-20px";

          if (!allFormInputs[i].value.trim()) {
            error.innerHTML = "Введите данные";
            allFormInputs[i].parentElement.append(error);
          } else if (i < 3) {
            for (let j = 0; j < 10; j++) {
              error.style.bottom = "-40px";
              if (allFormInputs[i].value.includes(String(j))) {
                error.innerHTML = "Некорректно";
              } else if (allFormInputs[i].value.length > 30) {
                error.innerHTML = "Макс. символов: 30";
              }
            }
          } else if (i === 3) {
            error.style.bottom = "-40px";
            if (Number(allFormInputs[i].value.substr(0, 4)) < 1900) {
              error.innerHTML = "Мин. год: 1900";
            } else if (
              Number(allFormInputs[i].value.substr(0, 4)) >
              new Date().getFullYear()
            ) {
              error.innerHTML = `Макс. год: ${new Date().getFullYear()}`;
            }
          } else if (i === 4) {
            error.style.bottom = "-40px";
            if (Number(allFormInputs[i].value) < 2000) {
              error.innerHTML = "Мин. год: 2000";
            } else if (allFormInputs[i].value > new Date().getFullYear()) {
              error.innerHTML = `Макс. год: ${new Date().getFullYear()}`;
            }
          } else if (i === 5) {
            for (let j = 0; j < 10; j++) {
              error.style.bottom = "-40px";
              if (allFormInputs[i].value.includes(String(j))) {
                error.innerHTML = "Некорректно";
              } else if (allFormInputs[i].value.length > 50) {
                error.innerHTML = "Макс. символов: 50";
              }
            }
          }
          allFormInputs[i].parentElement.append(error);
        }

        // после всех проверок вызываем функцию создания объекта студента
        // и добавления его в массив студентов
        addObj();
      });
    }
    validation();

    // функция позволяет создавать объект студента, добавлять его в массив студентов и передавать в функцию создания таблицы
    function addObj() {
      const allFormInputs = document.querySelectorAll(".input");

      let count = 0;
      const array = [];
      let fio = "";

      for (let i = 0; i < allFormInputs.length; i++) {
        if (!document.querySelectorAll(".error")[i].textContent) {
          count++;
        }
      }
      if (count === 6) {
        for (let i = 0; i < allFormInputs.length; i++) {
          if (i === 3) {
            fio =
              allFormInputs[i].value.substr(-2) +
              "." +
              allFormInputs[i].value.substr(5, 2) +
              "." +
              allFormInputs[i].value.substr(0, 4);
            array.push(fio);
          } else {
            array.push(
              allFormInputs[i].value[0].toUpperCase() +
                allFormInputs[i].value.substr(1).toLowerCase()
            );
          }
          allFormInputs[i].value = "";
        }

        const obj = {
          surname: array[0],
          name: array[1],
          lastname: array[2],
          birth: array[3],
          course: Number(array[4]),
          faculty: array[5],
        };

        // добавляем объект нового студента в основном массив всех студентов
        studentsList.push(obj);
        let studentsArray = [];
        studentsArray.push(obj);

        // передаём функции отправки нового студента в файл json массив с объектом нового студента
        updateData(studentsArray);
      }
    }

    // функция сортировки
    function sort() {
      const table = document.querySelector(".students__table");

      const allTableHeaders = table.getElementsByTagName("th");

      const allTableRows = table.getElementsByTagName("tr");

      for (let i = 0; i < allTableHeaders.length; i++) {
        allTableHeaders[i].addEventListener("click", () => {
          let studentsArray = [];

          if (i === 2) {
            for (let j = 1; j < allTableRows.length; j++) {
              studentsArray.push(
                allTableRows[j]

                  .getElementsByTagName("td")
                  [i].textContent.substr(6, 4)
              );
            }
          } else {
            for (let j = 1; j < allTableRows.length; j++) {
              studentsArray.push(
                allTableRows[j].getElementsByTagName("td")[i].textContent
              );
            }
          }

          if (allTableHeaders[i].classList.contains("sorted-asc")) {
            allTableHeaders[i].classList.remove("sorted-asc");

            allTableHeaders[i].classList.add("sorted-desc");

            studentsArray = studentsArray.sort().reverse();
          } else {
            allTableHeaders[i].classList.remove("sorted-desc");

            allTableHeaders[i].classList.add("sorted-asc");

            studentsArray = studentsArray.sort();
          }

          for (let j = 0; j < allTableRows.length - 1; j++) {
            for (let k = 1; k < allTableRows.length; k++) {
              const cellValue =
                i === 2
                  ? allTableRows[k]

                      .getElementsByTagName("td")
                      [i].textContent.substr(6, 4)
                  : allTableRows[k].getElementsByTagName("td")[i].textContent;

              if (studentsArray[j] === cellValue) {
                allTableRows[
                  allTableRows.length - 1
                ].parentElement.insertBefore(
                  allTableRows[k],

                  allTableRows[allTableRows.length + 1]
                );
              }
            }
          }
        });
      }
    }
    sort();

    // функция фильтрации
    function filter() {
      const allFilterInputs = document.querySelectorAll(".filter__input");
      const allTableHeaders = document.getElementsByTagName("th");
      let studentsArray;
      let studentsArray2;
      let studentsArray3;
      let studentsArray4;

      for (let i = 0; i < allFilterInputs.length; i++) {
        allFilterInputs[i].addEventListener("input", () => {
          let count = 0;
          for (let j = 0; j < allTableHeaders.length; j++) {
            if (allFilterInputs[j].value) {
              count++;
            }
          }
          if (count === 0) {
            studentsArray = studentsList;
            renderStudents(studentsArray);
          }
          if (count === 1) {
            if (allFilterInputs[i].value === "") {
              studentsArray = studentsArray;
            } else {
              studentsArray = studentsList;
            }
            if (i === 0) {
              studentsArray = studentsArray.filter((elem) =>
                (elem.surname + " " + elem.name + " " + elem.lastname)
                  .toLowerCase()
                  .includes(allFilterInputs[i].value.trim().toLowerCase())
              );
            } else if (i === 1) {
              studentsArray = studentsArray.filter((elem) =>
                elem.faculty
                  .toLowerCase()
                  .includes(allFilterInputs[i].value.trim().toLowerCase())
              );
            } else if (i === 2) {
              studentsArray = studentsArray.filter((elem) =>
                String(elem.course).includes(allFilterInputs[i].value.trim())
              );
            } else if (i === 3) {
              studentsArray = studentsArray.filter((elem) =>
                String(elem.course + 4).includes(
                  allFilterInputs[i].value.trim()
                )
              );
            }
            renderStudents(studentsArray);
          } else if (count === 2) {
            if (allFilterInputs[i].value === "") {
              studentsArray2 = studentsArray2;
            } else {
              studentsArray2 = studentsArray;
            }
            if (i === 0) {
              studentsArray2 = studentsArray2.filter((elem) =>
                (elem.surname + " " + elem.name + " " + elem.lastname)
                  .toLowerCase()
                  .includes(allFilterInputs[i].value.trim().toLowerCase())
              );
            } else if (i === 1) {
              studentsArray2 = studentsArray2.filter((elem) =>
                elem.faculty
                  .toLowerCase()
                  .includes(allFilterInputs[i].value.trim().toLowerCase())
              );
            } else if (i === 2) {
              studentsArray2 = studentsArray2.filter((elem) =>
                String(elem.course).includes(allFilterInputs[i].value.trim())
              );
            } else if (i === 3) {
              studentsArray2 = studentsArray2.filter((elem) =>
                String(elem.course + 4).includes(
                  allFilterInputs[i].value.trim()
                )
              );
            }
            renderStudents(studentsArray2);
          } else if (count === 3) {
            if (allFilterInputs[i].value === "") {
              studentsArray3 = studentsArray3;
            } else {
              studentsArray3 = studentsArray2;
            }
            if (i === 0) {
              studentsArray3 = studentsArray3.filter((elem) =>
                (elem.surname + " " + elem.name + " " + elem.lastname)
                  .toLowerCase()
                  .includes(allFilterInputs[i].value.trim().toLowerCase())
              );
            } else if (i === 1) {
              studentsArray3 = studentsArray3.filter((elem) =>
                elem.faculty
                  .toLowerCase()
                  .includes(allFilterInputs[i].value.trim().toLowerCase())
              );
            } else if (i === 2) {
              studentsArray3 = studentsArray3.filter((elem) =>
                String(elem.course).includes(allFilterInputs[i].value.trim())
              );
            } else if (i === 3) {
              studentsArray3 = studentsArray3.filter((elem) =>
                String(elem.course + 4).includes(
                  allFilterInputs[i].value.trim()
                )
              );
            }
            renderStudents(studentsArray3);
          } else if (count === 4) {
            if (allFilterInputs[i].value === "") {
              studentsArray4 = studentsArray4;
            } else {
              studentsArray4 = studentsArray3;
            }
            if (i === 0) {
              studentsArray4 = studentsArray4.filter((elem) =>
                (elem.surname + " " + elem.name + " " + elem.lastname)
                  .toLowerCase()
                  .includes(allFilterInputs[i].value.trim().toLowerCase())
              );
            } else if (i === 1) {
              studentsArray4 = studentsArray4.filter((elem) =>
                elem.faculty
                  .toLowerCase()
                  .includes(allFilterInputs[i].value.trim().toLowerCase())
              );
            } else if (i === 2) {
              studentsArray4 = studentsArray4.filter((elem) =>
                String(elem.course).includes(allFilterInputs[i].value.trim())
              );
            } else if (i === 3) {
              studentsArray4 = studentsArray4.filter((elem) =>
                String(elem.course + 4).includes(
                  allFilterInputs[i].value.trim()
                )
              );
            }
            renderStudents(studentsArray4);
          }
        });
      }
    }
    filter();

    // функция позволяет удалить из таблицы студента
    function buttonDelete() {
      const allTableButtons = document.querySelectorAll(".cross");

      // цикл позволяет пробежаться по количеству кнопок "Удалить" в таблице
      for (let i = 0; i < allTableButtons.length; i++) {
        // создаём событие нажатии на кнопку "Удалить"
        allTableButtons[i].addEventListener("click", () => {
          // условие позволяет удостовериться о намерениях пользователя об удалении студента из таблицы
          if (!confirm("Вы уверены?")) {
            return;
          }
          // вызываем функцию удаления определенного студента из файла json
          deleteArrEl(studentsList, i);

          let studentsArray = [];
          // убираем студента из основного массива по фильтру и приравниваем новому временному массиву
          studentsArray = studentsList.filter(
            (elem) => studentsList.indexOf(elem) !== i
          );
          // удаляем из основного массива студентов определённого студента
          studentsList.splice(i, 1);

          renderStudents(studentsArray);
        });
      }
    }
  }
  app();
});
