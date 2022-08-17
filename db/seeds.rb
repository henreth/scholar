# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Removing Previous Data'
User.destroy_all
Review.destroy_all

User.create!([
    {username: 'test',
    password:'12345',
    shelves: {
        "favorites": []
    },
    complete: [],
    toberead: [],
    didnotfinish: [],
    current: []}
])

Review.create!([
    {
        user_id: 1,
        rating: 5,
        text: 'Prudence profonde coupoles prennent roc pas precieux pourquoi. Ennemies massacre triomphe les cavernes des six toi. Je or devant blason palais et epouse sa atroce. Se on rendre ah sortit annees jusque jambes voyage. Chantant traverse soutenir net campagne sur remettre. Demeurons cet six art toutefois resterait les. Firmament sortaient net echauffer aux reprendre preferait eux.',
        date: 'Jan 10, 2022'
        book_id: 'rWgrDwAAQBAJ'
    },
    {
        user_id: 1,
        rating: 5,
        text: 'Prudence profonde coupoles prennent roc pas precieux pourquoi. Ennemies massacre triomphe les cavernes des six toi. Je or devant blason palais et epouse sa atroce. Se on rendre ah sortit annees jusque jambes voyage. Chantant traverse soutenir net campagne sur remettre. Demeurons cet six art toutefois resterait les. Firmament sortaient net echauffer aux reprendre preferait eux.',
        date: 'Jan 10, 2022'
        book_id: 'rWgrDwAAQBAJ'
    },
    {
        user_id: 1,
        rating: 5,
        text: 'Prudence profonde coupoles prennent roc pas precieux pourquoi. Ennemies massacre triomphe les cavernes des six toi. Je or devant blason palais et epouse sa atroce. Se on rendre ah sortit annees jusque jambes voyage. Chantant traverse soutenir net campagne sur remettre. Demeurons cet six art toutefois resterait les. Firmament sortaient net echauffer aux reprendre preferait eux.',
        date: 'Jan 10, 2022'
        book_id: 'rWgrDwAAQBAJ'
    },
    {
        user_id: 1,
        rating: 5,
        text: 'Prudence profonde coupoles prennent roc pas precieux pourquoi. Ennemies massacre triomphe les cavernes des six toi. Je or devant blason palais et epouse sa atroce. Se on rendre ah sortit annees jusque jambes voyage. Chantant traverse soutenir net campagne sur remettre. Demeurons cet six art toutefois resterait les. Firmament sortaient net echauffer aux reprendre preferait eux.',
        date: 'Jan 10, 2022'
        book_id: 'rWgrDwAAQBAJ'
    },

])

puts 'Completed Seeding Data'
