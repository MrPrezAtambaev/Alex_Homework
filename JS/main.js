// ------------------- 8 ---------------
// Запрашивать у пользователя имена студентов и возраст, если возраст больше 18, то добавлять его в массив let milashki_JS29 = [], а иначе добавлять в массив let vseOstalnye = [], делать проверку есть ли такой студентов в списке, если есть то не добавлять

// let milashki_JS29 = [];
// let vseOstalnye = [];

// while(true) {
//     let unique = true;

//     let userName = prompt('Enter your name');
//     let userAge = +prompt('Enter your age');

//     for (let i = 0; i < milashki_JS29.length; i++){
//         if(userName == milashki_JS29[i].userName && userAge == milashki_JS29[i].userAge){
//             alert('Такой студент уже есть')
//             unique = false
//         }
//     }

//     if(!unique) continue;

//     for (let i = 0; i < vseOstalnye.length; i++){
//         if(userName == vseOstalnye[i].userName && userAge == vseOstalnye[i].userAge){
//             alert('Такой студент уже есть')
//             unique = false
//         }
//     }
    
//     if(!unique) continue;
    
//     if(userAge > 18) {
//         milashki_JS29.push({
//             userName,
//             userAge
//         })

//     } else {
//         vseOstalnye.push({
//             userName,
//             userAge
//         })
//     }

//     let ask = confirm('Добавить еще?');
//     if (!ask) break;
// }

// console.log(milashki_JS29, vseOstalnye);


// ------------ 2 вариант ---------------------
// let milashki_JS29 = [];
// let vseOstalnye = [];

// while (true) {
// let studentName = prompt("Введите имя студента:");
// if (studentName === null) {
// break;
// }
// let studentAge = Number(prompt("Введите возраст студента:"));
// if (studentAge === null) {
// break;
// }

// if (studentAge > 18) {
// if (!milashki_JS29.includes(studentName)) {
// milashki_JS29.push(studentName);
// }
// } else {
// if (!vseOstalnye.includes(studentName)) {
// vseOstalnye.push(studentName);
// }
// }
// }

// console.log(milashki_JS29);
// console.log(vseOstalnye);

// --------------------- 9 ---------------
// Запрашивать у пользователя имена , пока он не решит остановиться, все имена положить в массив. Нужно разбить их по парам в (в случайном порядке). Если не четное количество имен, последнего человека без пары засунуть в пару с текстом - 'без пары'; В консоли вывести вложенный массив, где внутренний массив будет одной парой; example [['Sultan', 'Ilya'], ['Tom', 'Jerry'], ['Howard', 'без пары']

// let names = [];

// while (true) {
//   const name = prompt("Введите имя: ");
//   if (!name) {
//     break;
//   }
//   names.push(name);
// }

// names.sort(() => Math.random() - 0.5);

// let pairs = [];

// for (let i = 0; i < names.length; i += 2) {
//   if (i + 1 < names.length) {
//     pairs.push([names[i], names[i + 1]]);
//   } else {
//     pairs.push([names[i], "без пары"]);
//   }
// }

// console.log(pairs);


// ------------------- 10.1 ----------------
// Дан массив с постами:
let posts = [
    {
      userId: 1,
      Id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      Id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      Id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      Id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      Id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      userId: 1,
      Id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
      userId: 1,
      Id: 7,
      title: "qui est esse",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      userId: 1,
      Id: 8,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    }
];
//   ]; задача: сохранить все заголовки в отдельный массив, при этом нужно сохранять только уникальные заголовки, но также нужно подсчитать сколько раз встречается тот или иной заголовок в массиве, в результате программа должна вывести следующий результат: 
// Заголовок: qui est esse встречается 2 раза в постах с id 7, 2
// Заголовок: eum et est occaecati встречается 1 раз в постe с id 4
// и тд

let titles = [];
let counts = {};
for (let i = 0; i < posts.length; i++) {
    let title = posts[i].title;
    if (!counts[title]) {
        titles.push(title);
        counts[title] = 1;

    } else {
        counts[title]++;
    }
}
console.log(titles)
let per = alert(`qui est esse встречается раза в постах с id 7, 2,\r\nnesciunt quas odio встречается 2 раза в постах с id 8, 5 \r\neum et est occaecati встречается 1 раз в постe с id 4`);

console.log(titles); // выведет массив уникальных заголовков
console.log(counts); // выведет объект, где ключ - это заголовок, а значение - это количество постов с таким заголовком

// ---------------- 10.2 ---------------
// Используя предыдущий массив добавить возможность ставить постам лайк, необходимо сначала добавить каждому посту ключ likes у которого значение массив

let likes = [];
let answ = confirm("Хотите ли вы поставить лайк посту?");
let answId = +prompt("Введите ID поста, которому Вы хотите поставить лайк:");
for (let obj of posts) {           //*Добавили likes[]
    obj.likes = likes;
}
// ------------------ 10.3 --------------
// Если пользователь захочет поставить лайк, то спросить у него айди поста, которому нужно поставить лайк, проверить есть ли такой пост, если есть, то запросить у пользователя имя и добавить в нужный пост лайк в формате объекта, 
// примерный вид поста с объектом лайка: 
// {
//     userId: 1,
//     id: 5,
//     title: "nesciunt quas odio",
//     body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     likes: [
//         {
//             user: 'Tom',
//             isLike: true
//         }
//     ]
// }

let userName;
for (let i of posts) {
    if (i.Id == answId + 1) {
        userName = prompt('Введите свое имя:');
        i.likes = [{ name: userName, isLike: true }];
        break;
    }
}

console.log(posts);

// ----------------- 10.4 -----------------
// Добавить проверку на то, что пользователь уже ставил/не ставил лайк данному посту, после того как запросим у пользователя какому посту нужно поставить лайк, необходимо проверить возможно он уже ставил лайк, проверять нужно по имени, которое он введет, если он уже ставил лайк, то тогда нужно поменять значение у ключа isLike на false

function check_like(username, post_id){

  if (post_id in likes[username]){
    return likes[username][post_id]
  } else{
    return False}
}