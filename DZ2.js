//1. Вывести реакции с оценкой до 4 (вкл.)
db.reactions.find(
{ value: {$lte: 4} }, 
{_id:0,track_id:0,author_id:0})

// 2. Вывести ко-во незаблокированных юзеров

db.users.countDocuments(
{},
{is_blocked:{$ne: true}}
);


//3.Добавить произвольный email юзеру 1

db.users.updateOne({ _id: 1 }, { $set: { email: 'email@example.com' } });

//4.Поменять страну пользователя с id 2 на 'Brazil'
db.users.updateOne({ _id: 2 }, { $set: { country: 'Brazil' } });

//5.Заблокировать юзеров 1 и 5
db.users.updateMany(
{ _id: { $in: [1, 5] } }, {set:{is_blocked:true} 
});

//6.Разблокировать всех юзеров
db.users.updateMany(
{},{is_blocked: false}
)
//7.Вывести ко-во незаблокированных юзеров из Germany

db.users.countDocuments(
{in: 'Germany'},
{is_blocked:{$ne: true}}
);

