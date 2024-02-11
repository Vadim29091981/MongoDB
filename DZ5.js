

db.txs.aggregate([
{$match: {currency: "eur"}},
{$sample: {$size: 2}}
])

db.clients.aggregate([
  {
    $lookup: {
      from: "txs",
      localField: "_id",
      foreignField: "sender_id",
      as: "sent_txs"
    }
  },
  { $match:{sent_txs: { $size: 0 } }} 
])

db.txs.aggregate([
  { $match: { currency: "EUR" } }, 
  {
    $group: {
     _id: {},
           balance: { $sum: "amount" } 
    }
  }
])