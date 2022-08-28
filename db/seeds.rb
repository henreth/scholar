puts "Removing Previous Data"
User.destroy_all
Shelf.destroy_all
Review.destroy_all
Reaction.destroy_all
Bookclub.destroy_all
Clubuser.destroy_all

puts "Creating Test Data"

User.create!([
  {
    username: "demouser",
    first_name: "Demo",
    last_name: "User",
    password: "12345",
  },
  {
    username: "laluna",
    first_name: "oliver",
    last_name: "M",
    password: "12345",
  },
  {
    username: "laurel",
    first_name: "Lauren",
    last_name: "L",
    password: "12345",
  },
  {
    username: "simoneB",
    first_name: "simone",
    last_name: "B",
    password: "12345",
  },
])

Shelf.create!([
  {
    user_id: 1,
    name: "Currently Reading",
    books: [
      {
        "kind": "books#volume",
        "id": "8pHqDwAAQBAJ",
        "etag": "w3LO9LxGW14",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/8pHqDwAAQBAJ",
        "volumeInfo": {
          "title": "Dune Messiah",
          "authors": [
            "Frank Herbert",
          ],
          "publisher": "Penguin",
          "publishedDate": "2020-07-07",
          "description": "<b>Book Two in the Magnificent Dune Chronicles--the Bestselling Science Fiction Adventure of All Time<br> <br></b><i>Dune Messiah</i> continues the story of Paul Atreides, better known--and feared--as the man christened Muad'Dib. As Emperor of the known universe, he possesses more power than a single man was ever meant to wield. Worshipped as a religious icon by the fanatical Fremen, Paul faces the enmity of the political houses he displaced when he assumed the throne--and a conspiracy conducted within his own sphere of influence.<br> <br> And even as House Atreides begins to crumble around him from the machinations of his enemies, the true threat to Paul comes to his lover, Chani, and the unborn heir to his family's dynasty...",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0593201736",
            },
            {
              "type": "ISBN_13",
              "identifier": "9780593201732",
            },
          ],
          "readingModes": {
            "text": false,
            "image": false,
          },
          "pageCount": 304,
          "printedPageCount": 306,
          "dimensions": {
            "height": "21.00 cm",
            "width": "13.90 cm",
            "thickness": "2.00 cm",
          },
          "printType": "BOOK",
          "categories": [
            "Fiction / Classics",
            "Fiction / Fantasy / Epic",
            "Fiction / Science Fiction / Space Opera",
          ],
          "averageRating": 3.5,
          "ratingsCount": 61,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.1.0.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false,
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/publisher/content?id=8pHqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71ZlZMivJrYm3AGvQXcESfkagaioVwsyVlTaHhPMLb65Ek5GyYCcL7b99oDsfgUZ4-VVGvq1V28otpcFdsaZqjYUtecQl2gk9Ni9rQc9N0aAH_F_jSH3_qmWSX6UWnlttAlGMwX&source=gbs_api",
            "thumbnail": "http://books.google.com/books/publisher/content?id=8pHqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70epK04maMhGqUmEYV6xlHC8XTNh3FYn1pCDr7reEjRzH0k22n5GSdXJzqEtfE9JM2HDzqgIJ0H-zt14HOe_0iGbfVGa1JAeypGk674mH6Bc4RNBhFA3hpuisuMnDs-akBYcR5D&source=gbs_api",
            "small": "http://books.google.com/books/publisher/content?id=8pHqDwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE733gVpkQJPegt0x6Jl2nokTF1OQx9uMT2VR60oDkKVLTH1vusN6dpoYWC0pmY2SnjSZwdPb_jI9qFyL70QQ0OEGKZNPCoSIioKCycHiFRGRY67_Eik4kCIUeolKsqv2WhvkCYbe&source=gbs_api",
            "medium": "http://books.google.com/books/publisher/content?id=8pHqDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72MPtrOn38wENvE5-pAwZVfs6QJFHXLaXIRO0K5oznnQsPMQcC3lKB9q50LHOaBjRk5TE-tEtGC7tyD9DI33-mrbhJbcg1v1H0Io8ENa3EStRJJVj5cTtCLBOLmumXp2nZMQcIw&source=gbs_api",
            "large": "http://books.google.com/books/publisher/content?id=8pHqDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE715Fo7ob9jf--kZ37sFO7bgnuLGtlwbW7gGokWVoIgSWDje_vfRXSXR2dIRgMapQy-sG7GCKTZ7WspF7KDXPxd_bJjHpTzkBKW9Sn76gCpjkdztmy9gLxtR4mzAxGMgBnk3Rti5&source=gbs_api",
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=8pHqDwAAQBAJ&hl=&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=8pHqDwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=8pHqDwAAQBAJ",
        },
        "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false,
        },
        "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false,
          },
          "pdf": {
            "isAvailable": false,
          },
          "webReaderLink": "http://play.google.com/books/reader?id=8pHqDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false,
        },
      },
    ],
  },
  {
    user_id: 1,
    name: "Read",
    books: [
      {
        "kind": "books#volume",
        "id": "B1hSG45JCX4C",
        "etag": "CX7ir1lH/oY",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/B1hSG45JCX4C",
        "volumeInfo": {
          "title": "Dune",
          "authors": [
            "Frank Herbert",
          ],
          "publisher": "Penguin",
          "publishedDate": "2005",
          "description": "Here is the novel that will be forever considered a triumph of the imagination. Set on the desert planet Arrakis, <b>Dune</b> is the story of the boy Paul Atreides, who would become the mysterious man known as Muad'Dib. He would avenge the traitorous plot against his noble family--and would bring to fruition humankind's most ancient and unattainable dream. <p> A stunning blend of adventure and mysticism, environmentalism and politics, <b>Dune</b> won the first Nebula Award, shared the Hugo Award, and formed the basis of what it undoubtedly the grandest epic in science fiction. </p>",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0441013597",
            },
            {
              "type": "ISBN_13",
              "identifier": "9780441013593",
            },
          ],
          "readingModes": {
            "text": false,
            "image": false,
          },
          "pageCount": 528,
          "printedPageCount": 548,
          "dimensions": {
            "height": "23.00 cm",
            "width": "13.80 cm",
            "thickness": "2.80 cm",
          },
          "printType": "BOOK",
          "categories": [
            "Fiction / Science Fiction / General",
            "Fiction / Science Fiction / Action & Adventure",
          ],
          "averageRating": 4,
          "ratingsCount": 301,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "3.2.4.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false,
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72bSFcQYKaReX6rQXEKEdDeckoIhgjjDFIa4HDt1D1xbJ-MT1P-aA7orY6Nhet3QzQCS0lDgJp0_ifvxFHlG5Hhu8BbYAlSgZ2lX3UKvYfzYt7kSfncob8UrZsnxostiscr2-dJ&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE710vvi_FH7ZfxpBT63fFlO7LQH-dnfnxBPxahlDMm5qz0KOs4hL8t06OOjznf0ZWHjgLUGLrUxNTGHINFMNJf16ahIi3NQDVfgyjPr4BzLlw6Ux7Wvwgjz3vn0UMth1zf2_Vx6m&source=gbs_api",
            "small": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70J0z4bY7ciwHxfrtzOsZEEzgQhig22Iz2KwrIObI3tlsKiSjT0Hz7e6iL0dZCvHluw01G4f8B8BnqtwdovmWpth7h1I5CrZAnklUKjPZUl6-3zDl1rWi2xJ0dw7GStuiHQ2QrS&source=gbs_api",
            "medium": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71_EWtDt2Dovx0ZfdEntu3zBST786sPuid2DhcgD0RItqbLR0TjneBFzLJ3REPnyImQZvXRqApigR6M6DbBAnVE2aEhvKfn-J2oZkd8Khd00Tan44L9miwgtTEZY6K-y8BPo7hq&source=gbs_api",
            "large": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE711boDnQf7LYIj-fm7wwfZAeUp3bEjgx5YrMNWznMjFNoHLmK0d5khEcRxEpbUZ8T_OcgAVgMs_J_GhW2cYUpH2akC8jGh1d0pwQsHKxJtxaQKrHW-q_Ev-MM7mSYti0aSj_lca&source=gbs_api",
            "extraLarge": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE73xXTlO-zfFj7qzAbUoYPpilTTDDNKuZMsmr1jVEHM4LqKsiaWAugPgWu6lD-PAGtYhjPDTfdNRwRB2ZeSra1hEG_LCAcMuhWMSaWKwT0GjUXjE_ccN3Amdcl5_K0n5j7gfRNYM&source=gbs_api",
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=B1hSG45JCX4C&hl=&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=B1hSG45JCX4C&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=B1hSG45JCX4C",
        },
        "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false,
        },
        "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false,
          },
          "pdf": {
            "isAvailable": false,
          },
          "webReaderLink": "http://play.google.com/books/reader?id=B1hSG45JCX4C&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false,
        },
      },
    ],
  },
  {
    user_id: 1,
    name: "To Be Read",
    books: [
      {
        "kind": "books#volume",
        "id": "IpLqDwAAQBAJ",
        "etag": "l9WEgqt+TA4",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/IpLqDwAAQBAJ",
        "volumeInfo": {
          "title": "Children of Dune",
          "authors": [
            "Frank Herbert",
          ],
          "publisher": "Penguin",
          "publishedDate": "2020",
          "description": "<b>Book Three in the Magnificent Dune Chronicles--the Bestselling Science Fiction Adventure of All Time<br></b><br> The Children of Dune are twin siblings Leto and Ghanima Atreides, whose father, the Emperor Paul Muad'Dib, disappeared in the desert wastelands of Arrakis nine years ago. Like their father, the twins possess supernormal abilities--making them valuable to their manipulative aunt Alia, who rules the Empire in the name of House Atreides.<br> <br> Facing treason and rebellion on two fronts, Alia's rule is not absolute. The displaced House Corrino is plotting to regain the throne while the fanatical Fremen are being provoked into open revolt by the enigmatic figure known only as The Preacher. Alia believes that by obtaining the secrets of the twins' prophetic visions, she can maintain control over her dynasty.<br> <br> But Leto and Ghanima have their own plans for their visions--and their destinies....",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0593201744",
            },
            {
              "type": "ISBN_13",
              "identifier": "9780593201749",
            },
          ],
          "readingModes": {
            "text": false,
            "image": false,
          },
          "pageCount": 496,
          "printedPageCount": 498,
          "dimensions": {
            "height": "20.90 cm",
            "width": "14.00 cm",
            "thickness": "2.70 cm",
          },
          "printType": "BOOK",
          "categories": [
            "Fiction / Classics",
            "Fiction / Literary",
            "Fiction / Science Fiction / Space Opera",
          ],
          "averageRating": 3.5,
          "ratingsCount": 33,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.1.0.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false,
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/publisher/content?id=IpLqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70-kFxgp3WOXpgj_FkV_a7S8a5H5B2lbbB7gWZk_5EuSAV3cnvrtmt47rltAvnBRDCZlCBdJQbnADpmEqRrX5PZ1BiR1ZYcldzpF4JrGJowVfBIbUTDYIXx4V7HH0ESx6kr5wJC&source=gbs_api",
            "thumbnail": "http://books.google.com/books/publisher/content?id=IpLqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70ElzQOPtUbr1sJ85v5EJBN-1QuJKEhjBGDlYxJxqoAfJtO1loHGpqHnMAhLCh2QLjR_ACUPXFgo3LgjZWGmGic8PsQJRFiqsenI_mkuVh5_zGvkid3Vur1nac7xnjjQXgnVKvk&source=gbs_api",
            "small": "http://books.google.com/books/publisher/content?id=IpLqDwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70NMy0b6_pGBUOthT13rwfptOgKweEv8o6fUz1kHkGrBqvN4BvBeVX2TZWvzJEmjR7APwWC5ml56rx0mJHMinwaR0D_9tR-vCdPVquMVFHMoeFEffyx550Q5Gzv6x8UxNzb4TPA&source=gbs_api",
            "medium": "http://books.google.com/books/publisher/content?id=IpLqDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72xkJ5EFIYeEIU4jd4M9hP8cfkBfOoTcRCSEtFHn60mFnxJ2X_w5o8Abw1dWeJH3UEWuX6kirRgeCNgTVUGAnXiPTJwmDuiiXqh8lPOvLPgRxgDHiMAC7Kf4O_T4-rA0B19ViaW&source=gbs_api",
            "large": "http://books.google.com/books/publisher/content?id=IpLqDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73DiFs7p0-CYCHDBXBmA-KMjxuziYBvN-BnSoiMLKtYL9mYCp7iN7z99HsuoN7er_zC6-2tPqk2HIFof7sQR7bnE9-NCjbEUZI1pBvF84vCtFMTqlbIPHYyhMNiQsm7U3CLbNwI&source=gbs_api",
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=IpLqDwAAQBAJ&hl=&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=IpLqDwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=IpLqDwAAQBAJ",
        },
        "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false,
        },
        "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false,
          },
          "pdf": {
            "isAvailable": false,
          },
          "webReaderLink": "http://play.google.com/books/reader?id=IpLqDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false,
        },
      },
      {
        "kind": "books#volume",
        "id": "BpLqDwAAQBAJ",
        "etag": "YL/LjGS9fQs",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/BpLqDwAAQBAJ",
        "volumeInfo": {
          "title": "God Emperor of Dune",
          "authors": [
            "Frank Herbert",
          ],
          "publisher": "Penguin",
          "publishedDate": "2020-07-07",
          "description": "<b>Book Four in the Magnificent Dune Chronicles--the Bestselling Science Fiction Adventure of All Time<br> <br></b>Millennia have passed on Arrakis, and the once-desert planet is green with life. Leto Atreides, the son of the world's savior, the Emperor Paul Muad'Dib, is still alive but far from human. To preserve humanity's future, he sacrificed his own by merging with a sandworm, granting him near immortality as God Emperor of Dune for the past thirty-five hundred years.<br> <br> Leto's rule is not a benevolent one. His transformation has made not only his appearance but his morality inhuman. A rebellion, led by Siona, a member of the Atreides family, has risen to oppose the despot's rule. But Siona is unaware that Leto's vision of a Golden Path for humanity requires her to fulfill a destiny she never wanted--or could possibly conceive....",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0593201752",
            },
            {
              "type": "ISBN_13",
              "identifier": "9780593201756",
            },
          ],
          "readingModes": {
            "text": false,
            "image": false,
          },
          "pageCount": 496,
          "printedPageCount": 498,
          "dimensions": {
            "height": "20.80 cm",
            "width": "14.00 cm",
            "thickness": "2.60 cm",
          },
          "printType": "BOOK",
          "categories": [
            "Fiction / Classics",
            "Fiction / Fantasy / Epic",
            "Fiction / Science Fiction / Space Opera",
          ],
          "averageRating": 3.5,
          "ratingsCount": 31,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.1.0.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false,
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/publisher/content?id=BpLqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70gmy2PBgEHqF2woa3exzRXwyFbXmYvEB1PosX3nS7iE-x9qZ4tQyY9996VxGxma1mcSoB7LbLnlLuUSKgCmCCWj-9c0iK-Co0AwXkbjVVFBf3RWlvZpXxl5goYGJ989UJeuzV6&source=gbs_api",
            "thumbnail": "http://books.google.com/books/publisher/content?id=BpLqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72KYzEOj3RTRzxUXiMq6yNj3iSknRhkBO0Gq2Jw5VAnavGZdidbXpq8mhqk2VO1iPp7Nqds7-N63GrUeYWN6yc35NqKtrrOJwcYtJ0Qa6eTSmoo7I1ZJe8sR_ZAjtzI8LEgwuEg&source=gbs_api",
            "small": "http://books.google.com/books/publisher/content?id=BpLqDwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73cX6kkivArndJlIIm3yhT4fninPs0FqZdcbvocHTSny0EkbyoVOzEOB1KrtgTBRfQqP8TO4jXsAR_cDwP3TI5eLisMaiVhHEvXC75j2pV3vwH-1AXztP6_J3AR0t0HfmKOO2Sb&source=gbs_api",
            "medium": "http://books.google.com/books/publisher/content?id=BpLqDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73-fL4p_s50p7ThDHed8iIpy038Tt3BwrzN5Gt53Vktv_ypNspnHFO5eJV-wqNIOb3QPzowybDUuFjZ91O9ai0FmSK828RtBRv4e749CAtAPkTrD1yV9VjETevVDfnsqU1r__XQ&source=gbs_api",
            "large": "http://books.google.com/books/publisher/content?id=BpLqDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70nHCVIdbJTApSO1gf6vZ5J3Zlk4zN_LYQIsX2u6QcfjsDCmEFoqx8gS_WPT8j6yu-V2aJ695JjJDKpMtwPtPG5cbF5PJJeCjNLAoUJpsAePYt262iTx0Gqx07ryBFZDC7wnrpy&source=gbs_api",
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=BpLqDwAAQBAJ&hl=&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=BpLqDwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=BpLqDwAAQBAJ",
        },
        "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false,
        },
        "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false,
          },
          "pdf": {
            "isAvailable": false,
          },
          "webReaderLink": "http://play.google.com/books/reader?id=BpLqDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false,
        },
      },
    ],
  },
  {
    user_id: 1,
    name: "Did Not Finish",
    books: [],
  },
])

Review.create!([
  {
    user_id: 1,
    rating: 5,
    text: "Cesserent qu instruite epluchant cependant escadrons le. Visages passent vit donjons nos hauteur feu les. Jeunes autour encore toi est tenons cet wagons sortes.",
    date: "Jan 10, 2022",
    book_id: "rWgrDwAAQBAJ",
    book_name: "Sartre",
    book_author: "Mathilde Ramadier",
  },
  {
    user_id: 2,
    rating: 5,
    text: "Prudence profonde coupoles prennent roc pas precieux pourquoi. Ennemies massacre triomphe les cavernes des six toi. Je or devant blason palais et epouse sa atroce. Se on rendre ah sortit annees jusque jambes voyage. Chantant traverse soutenir net campagne sur remettre. Demeurons cet six art toutefois resterait les. Firmament sortaient net echauffer aux reprendre preferait eux.",
    date: "Jan 11, 2022",
    book_id: "rWgrDwAAQBAJ",
    book_name: "Sartre",
    book_author: "Mathilde Ramadier",
  },
  {
    user_id: 3,
    rating: 5,
    text: "Linge selon court ans toi sabre heros. Connut toi mirent art ton trouve enleve hideur eux balaye. Cornette or coussins recupera allaient viennent heureuse as. Obtenir promene ils regarde dit des. Roches police eux ahuris pleine marche moi demain. Essor verte noces oui non temps creve.",
    date: "Mar 12, 2022",
    book_id: "rWgrDwAAQBAJ",
    book_name: "Sartre",
    book_author: "Mathilde Ramadier",

  },
  {
    user_id: 4,
    rating: 5,
    text: "Comme verts mes comme ces nul fut. Et ah te avons rente rouge je. Il ainsi il cause oh croix utile or. Jeunesse poitrine en epanouir la reparler la. Jet noble force par arret ras voila votre peu. Les ete appareil supplice vit epandent. Collines dissiper cavalier octogone la magasins ca. Sur casernes eut pic criaient couvrent defoncat heureuse. Bon oeil aux mats tuer chez poil peur. Saut poil il fils un nous je eu idee. Si mais haut oh ah quoi loin. Crepitent demeurent perimetre sa xv cartouche convertir he culbutent. Cercle qu valoir ca bruits le ca. Oeufs feu dit sorte rente trois ecole mur moins.",
    date: "June 10, 2022",
    book_id: "rWgrDwAAQBAJ",
    book_name: "Sartre",
    book_author: "Mathilde Ramadier",
  },
  {
    user_id: 4,
    rating: 3,
    text: "Meh.",
    date: "June 10, 2022",
    book_id: "rWgrDwAAQBAJ",
    book_name: "Sartre",
    book_author: "Mathilde Ramadier",
  },

])

Reaction.create!([
  {
    review_id: 1,
    user_id: 2,
    emoji: "🎉",
  },
  {
    review_id: 1,
    user_id: 3,
    emoji: "🎉",
  },
  {
    review_id: 1,
    user_id: 4,
    emoji: "🎉",
  },
  {
    review_id: 2,
    user_id: 2,
    emoji: "👍",
  },
  {
    review_id: 2,
    user_id: 3,
    emoji: "👍",
  },
  {
    review_id: 2,
    user_id: 4,
    emoji: "👍",
  },
  {
    review_id: 3,
    user_id: 2,
    emoji: "❤️",
  },
  {
    review_id: 3,
    user_id: 3,
    emoji: "❤️",
  },
  {
    review_id: 3,
    user_id: 4,
    emoji: "❤️",
  },
  {
    review_id: 4,
    user_id: 2,
    emoji: "😄",
  },
  {
    review_id: 4,
    user_id: 3,
    emoji: "😄",
  },
  {
    review_id: 4,
    user_id: 4,
    emoji: "😄",
  },
])

Bookclub.create!([
  {
    name: "Test Book Club",
    host: {
      username: "demouser",
      first_name: "Demo",
      last_name: "User",
      password: "12345",
    },
    description: "A book club for everything you may or may not read!",
  },
])

Clubuser.create!([
  {
    user_id: 1,
    bookclub_id: 1,
  },
  {
    user_id: 2,
    bookclub_id: 1,
  },
  {
    user_id: 4,
    bookclub_id: 1,
  },
  {
    user_id: 3,
    bookclub_id: 1,
  },
])

puts "Completed Seeding Data"
