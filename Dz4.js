// Вывести названия двух произвольных треков с тегом new
db.users.find({ tags: "new" }, { title: 1, _id: 0 }).limit(2)

// Вывести имя одного юзера с самым минимальным балансом
db.users.find({}, { fullname: 1, balance: 1, _id: 0 }).sort({ balance: 1 }).limit(1)

// Вывести имена юзеров, у которых есть положительный баланс
db.users.find({ balance: { $gt: 0 } }, { fullname: 1, _id: 0 })

// Используя метод aggregate(), вывести ко-во юзеров с балансом до 1000 EUR
db.users.aggregate([
  { $match: { balance: { $lt: 1000 } } },
  { $group: { _id: null, count: { $sum: 1 } } },
  { $project: { _id: 0, count: 1 } }
])
