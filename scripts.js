// Code below was used to obtain list of top 200 Albums at: https://pitchfork.com/features/lists-and-guides/peoples-list-25th-anniversary/

// const items = document.querySelectorAll(".Component-textContainer-0-2-36");

// list = []

// items.forEach((item) => {
//     const artistContainer = item.querySelector(".Component-artistName-0-2-41");
//     const albumContainer = item.querySelector(".Component-albumName-0-2-43");
//     const artist = artistContainer.textContent;
//     const album = albumContainer.textContent;
//     const sublist = [album, artist];
//     list.push(sublist);
// });

const albumList = [
    [
        "Kid A",
        "Radiohead"
    ],
    [
        "OK Computer",
        "Radiohead"
    ],
    [
        "My Beautiful Dark Twisted Fantasy",
        "Kanye West"
    ],
    [
        "In Rainbows",
        "Radiohead"
    ],
    [
        "To Pimp a Butterfly",
        "Kendrick Lamar"
    ],
    [
        "Blonde",
        "Frank Ocean"
    ],
    [
        "Funeral",
        "Arcade Fire"
    ],
    [
        "Is This It",
        "The Strokes"
    ],
    [
        "good kid, m.A.A.d city",
        "Kendrick Lamar"
    ],
    [
        "Yankee Hotel Foxtrot",
        "Wilco"
    ],
    [
        "In the Aeroplane Over the Sea",
        "Neutral Milk Hotel"
    ],
    [
        "Illinois",
        "Sufjan Stevens"
    ],
    [
        "Yeezus",
        "Kanye West"
    ],
    [
        "Channel Orange",
        "Frank Ocean"
    ],
    [
        "Sound of Silver",
        "LCD Soundsystem"
    ],
    [
        "Madvillainy",
        "Madvillain"
    ],
    [
        "Norman Fucking Rockwell!",
        "17. Lana Del Rey"
    ],
    [
        "Carrie & Lowell",
        "18. Sufjan Stevens"
    ],
    [
        "Merriweather Post Pavilion",
        "19. Animal Collective"
    ],
    [
        "Melodrama",
        "20. Lorde"
    ],
    [
        "Modern Vampires of the City",
        "21. Vampire Weekend"
    ],
    [
        "Turn On the Bright Lights",
        "22. Interpol"
    ],
    [
        "The Suburbs",
        "23. Arcade Fire"
    ],
    [
        "Fetch the Bolt Cutters",
        "24. Fiona Apple"
    ],
    [
        "Currents",
        "25. Tame Impala"
    ],
    [
        "Homogenic",
        "26. Björk"
    ],
    [
        "For Emma, Forever Ago",
        "27. Bon Iver"
    ],
    [
        "Blackstar",
        "28. David Bowie"
    ],
    [
        "Discovery",
        "29. Daft Punk"
    ],
    [
        "Punisher",
        "30. Phoebe Bridgers"
    ],
    [
        "Teen Dream",
        "31. Beach House"
    ],
    [
        "Since I Left You",
        "32. The Avalanches"
    ],
    [
        "Bon Iver",
        "33. Bon Iver"
    ],
    [
        "Boxer",
        "34. The National"
    ],
    [
        "The Soft Bulletin",
        "35. The Flaming Lips"
    ],
    [
        "Lemonade",
        "36. Beyoncé"
    ],
    [
        "This Is Happening",
        "37. LCD Soundsystem"
    ],
    [
        "Aquemini",
        "38. OutKast"
    ],
    [
        "Fleet Foxes",
        "39. Fleet Foxes"
    ],
    [
        "Either/Or",
        "40. Elliott Smith"
    ],
    [
        "Vespertine",
        "41. Björk"
    ],
    [
        "DAMN.",
        "42. Kendrick Lamar"
    ],
    [
        "Bloom",
        "43. Beach House"
    ],
    [
        "Ys",
        "44. Joanna Newsom"
    ],
    [
        "Stankonia",
        "45. OutKast"
    ],
    [
        "Back to Black",
        "46. Amy Winehouse"
    ],
    [
        "Untrue",
        "47. Burial"
    ],
    [
        "Late Registration",
        "48. Kanye West"
    ],
    [
        "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do",
        "49. Fiona Apple"
    ],
    [
        "The Miseducation of Lauryn Hill",
        "50. Lauryn Hill"
    ],
    [
        "The College Dropout",
        "51. Kanye West"
    ],
    [
        "IGOR",
        "52. Tyler, the Creator"
    ],
    [
        "If You're Feeling Sinister",
        "53. Belle and Sebastian"
    ],
    [
        "Lost in the Dream",
        "54. The War on Drugs"
    ],
    [
        "Ágætis byrjun",
        "55. Sigur Rós"
    ],
    [
        "E•MO•TION",
        "56. Carly Rae Jepsen"
    ],
    [
        "High Violet",
        "57. The National"
    ],
    [
        "Halcyon Digest",
        "58. Deerhunter"
    ],
    [
        "Lift Your Skinny Fists like Antennas to Heaven",
        "59. Godspeed You! Black Emperor"
    ],
    [
        "Lonerism",
        "60. Tame Impala"
    ],
    [
        "The Lonesome Crowded West",
        "61. Modest Mouse"
    ],
    [
        "Golden Hour",
        "62. Kacey Musgraves"
    ],
    [
        "The Moon & Antarctica",
        "63. Modest Mouse"
    ],
    [
        "Endtroducing...",
        "64. DJ Shadow"
    ],
    [
        "Random Access Memories",
        "65. Daft Punk"
    ],
    [
        "22, A Million",
        "66. Bon Iver"
    ],
    [
        "Music Has the Right to Children",
        "67. Boards of Canada"
    ],
    [
        "folklore",
        "68. Taylor Swift"
    ],
    [
        "Titanic Rising",
        "69. Weyes Blood"
    ],
    [
        "Mezzanine",
        "70. Massive Attack"
    ],
    [
        "A Seat at the Table",
        "71. Solange"
    ],
    [
        "Vampire Weekend",
        "72. Vampire Weekend"
    ],
    [
        "CTRL",
        "73. SZA"
    ],
    [
        "Pinkerton",
        "74. Weezer"
    ],
    [
        "Helplessness Blues",
        "75. Fleet Foxes"
    ],
    [
        "The Life of Pablo",
        "76. Kanye West"
    ],
    [
        "MAGDALENE",
        "77. FKA twigs"
    ],
    [
        "xx",
        "78. The xx"
    ],
    [
        "Whatever People Say I Am, That's What I'm Not",
        "79. Arctic Monkeys"
    ],
    [
        "Kaputt",
        "80. Destroyer"
    ],
    [
        "A Moon Shaped Pool",
        "81. Radiohead"
    ],
    [
        "Donuts",
        "82. J Dilla"
    ],
    [
        "Elephant",
        "83. The White Stripes"
    ],
    [
        "Have One on Me",
        "84. Joanna Newsom"
    ],
    [
        "Art Angels",
        "85. Grimes"
    ],
    [
        "Voodoo",
        "86. D'Angelo"
    ],
    [
        "OIL OF EVERY PEARL's UN-INSIDES",
        "87. SOPHIE"
    ],
    [
        "You Forgot It in People",
        "88. Broken Social Scene"
    ],
    [
        "Person Pitch",
        "89. Panda Bear"
    ],
    [
        "I Love You, Honeybear",
        "90. Father John Misty"
    ],
    [
        "Third",
        "91. Portishead"
    ],
    [
        "In Colour",
        "92. Jamie xx"
    ],
    [
        "Body Talk",
        "93. Robyn"
    ],
    [
        "The Money Store",
        "94. Death Grips"
    ],
    [
        "Amnesiac",
        "95. Radiohead"
    ],
    [
        "The Glow, Pt. 2",
        "96. The Microphones"
    ],
    [
        "Songs for the Deaf",
        "97. Queens of the Stone Age"
    ],
    [
        "Flower Boy",
        "98. Tyler, the Creator"
    ],
    [
        "When the Pawn...",
        "99. Fiona Apple"
    ],
    [
        "Silent Shout",
        "100. The Knife"
    ],
    [
        "Beyoncé",
        "101. Beyoncé"
    ],
    [
        "I Can Hear the Heart Beating as One",
        "102. Yo La Tengo"
    ],
    [
        "White Blood Cells",
        "103. The White Stripes"
    ],
    [
        "The Blueprint",
        "104. JAY-Z"
    ],
    [
        "1989",
        "105. Taylor Swift"
    ],
    [
        "Pop 2",
        "106. Charli XCX"
    ],
    [
        "Demon Days",
        "107. Gorillaz"
    ],
    [
        "69 Love Songs",
        "108. The Magnetic Fields"
    ],
    [
        "Odelay",
        "109. Beck"
    ],
    [
        "Run the Jewels 2",
        "110. Run the Jewels"
    ],
    [
        "Stories From the City, Stories From the Sea",
        "111. PJ Harvey"
    ],
    [
        "Twin Fantasy",
        "112. Car Seat Headrest"
    ],
    [
        "Pure Heroine",
        "113. Lorde"
    ],
    [
        "Yoshimi Battles The Pink Robots",
        "114. The Flaming Lips"
    ],
    [
        "Kala",
        "115. M.I.A."
    ],
    [
        "Black Messiah",
        "116. D'Angelo / The Vanguard"
    ],
    [
        "Plastic Beach",
        "117. Gorillaz"
    ],
    [
        "American Water",
        "118. Silver Jews"
    ],
    [
        "Red",
        "119. Taylor Swift"
    ],
    [
        "A Deeper Understanding",
        "120. The War on Drugs"
    ],
    [
        "Born to Die",
        "121. Lana Del Rey"
    ],
    [
        "Veckatimest",
        "122. Grizzly Bear"
    ],
    [
        "Let England Shake",
        "123. PJ Harvey"
    ],
    [
        "Give Up",
        "124. The Postal Service"
    ],
    [
        "Atrocity Exhibition",
        "125. Danny Brown"
    ],
    [
        "Sunbather",
        "126. Deafheaven"
    ],
    [
        "Graduation",
        "127. Kanye West"
    ],
    [
        "Visions",
        "128. Grimes"
    ],
    [
        "m b v",
        "129. My Bloody Valentine"
    ],
    [
        "808s and Heartbreak",
        "130. Kanye West"
    ],
    [
        "Strawberry Jam",
        "131. Animal Collective"
    ],
    [
        "Hurry Up, We're Dreaming",
        "132. M83"
    ],
    [
        "Be the Cowboy",
        "133. Mitski"
    ],
    [
        "Fever to Tell",
        "134. Yeah Yeah Yeahs"
    ],
    [
        "Trouble Will Find Me",
        "135. The National"
    ],
    [
        "Sometimes I Sit and Think, and Sometimes I Just Sit",
        "136. Courtney Barnett"
    ],
    [
        "ANTI",
        "137. Rihanna"
    ],
    [
        "AM",
        "138. Arctic Monkeys"
    ],
    [
        "Silent Alarm",
        "139. Bloc Party"
    ],
    [
        "I'm Wide Awake, It's Morning / Digital Ash in a Digital Urn",
        "140. Bright Eyes"
    ],
    [
        "Teens of Denial",
        "141. Car Seat Headrest"
    ],
    [
        "Perfect From Now On",
        "142. Built to Spill"
    ],
    [
        "Room on Fire",
        "143. The Strokes"
    ],
    [
        "Strange Mercy",
        "144. St. Vincent"
    ],
    [
        "Summerteeth",
        "145. Wilco"
    ],
    [
        "The Marshall Mathers LP",
        "146. Eminem"
    ],
    [
        "Wolfgang Amadeus Phoenix",
        "147. Phoenix"
    ],
    [
        "Puberty 2",
        "148. Mitski"
    ],
    [
        "Apologies to the Queen Mary",
        "149. Wolf Parade"
    ],
    [
        "We got it from Here... Thank You 4 Your service",
        "150. A Tribe Called Quest"
    ],
    [
        "LP1",
        "151. FKA twigs"
    ],
    [
        "Keep it Like a Secret",
        "152. Built to Spill"
    ],
    [
        "Ultraviolence",
        "153. Lana Del Rey"
    ],
    [
        "The Age of Adz",
        "154. Sufjan Stevens"
    ],
    [
        "Contra",
        "155. Vampire Weekend"
    ],
    [
        "My Woman",
        "156. Angel Olsen"
    ],
    [
        "Transatlanticism",
        "157. Death Cab for Cutie"
    ],
    [
        "Sea Change",
        "158. Beck"
    ],
    [
        "To Be Kind",
        "159. Swans"
    ],
    [
        "Neon Bible",
        "160. Arcade Fire"
    ],
    [
        "Take Care",
        "161. Drake"
    ],
    [
        "The Monitor",
        "162. Titus Andronicus"
    ],
    [
        "U.F.O.F.",
        "163. Big Thief"
    ],
    [
        "Emergency & I",
        "164. The Dismemberment Plan"
    ],
    [
        "And Then Nothing Turned Itself Inside-Out",
        "165. Yo La Tengo"
    ],
    [
        "Feels",
        "166. Animal Collective"
    ],
    [
        "Ray of Light",
        "167. Madonna"
    ],
    [
        "The Richard D. James Album",
        "168. Aphex Twin"
    ],
    [
        "XO",
        "169. Elliott Smith"
    ],
    [
        "The Woods",
        "170. Sleater-Kinney"
    ],
    [
        "What's Your Pleasure?",
        "171. Jessie Ware"
    ],
    [
        "Saint Cloud",
        "172. Waxahatchee"
    ],
    [
        "White Pony",
        "173. Deftones"
    ],
    [
        "Skeleton Tree",
        "174. Nick Cave & the Bad Seeds"
    ],
    [
        "Depression Cherry",
        "175. Beach House"
    ],
    [
        "Hail to the Thief",
        "176. Radiohead"
    ],
    [
        "Ga Ga Ga Ga Ga",
        "177. Spoon"
    ],
    [
        "The Fame Monster",
        "178. Lady Gaga"
    ],
    [
        "Alligator",
        "179. The National"
    ],
    [
        "Speakerboxxx/The Love Below",
        "180. OutKast"
    ],
    [
        "Celebration Rock",
        "181. Japandroids"
    ],
    [
        "Slowdive",
        "182. Slowdive"
    ],
    [
        "Women in Music Pt. III",
        "183. Haim"
    ],
    [
        "Push the Sky Away",
        "184. Nick Cave & the Bad Seeds"
    ],
    [
        "F♯ A♯ ∞",
        "185. Godspeed You! Black Emperor"
    ],
    [
        "Time Out of Mind",
        "186. Bob Dylan"
    ],
    [
        "Some Rap Songs",
        "187. Earl Sweatshirt"
    ],
    [
        "The ArchAndroid",
        "188. Janelle MonÃ¡e"
    ],
    [
        "Return to Cookie Mountain",
        "189. TV on the Radio"
    ],
    [
        "Mm..Food?",
        "190. MF DOOM"
    ],
    [
        "Purple Mountains",
        "191. Purple Mountains"
    ],
    [
        "Microcastle / Weird Era Cont.",
        "192. Deerhunter"
    ],
    [
        "Moon Safari",
        "193. Air"
    ],
    [
        "Reflektor",
        "194. Arcade Fire"
    ],
    [
        "I See a Darkness",
        "195. Bonnie \"Prince\" Billy"
    ],
    [
        "13",
        "196. Blur"
    ],
    [
        "James Blake",
        "197. James Blake"
    ],
    [
        "Cosmogramma",
        "198. Flying Lotus"
    ],
    [
        "Bitte Orca",
        "199. Dirty Projectors"
    ],
    [
        "Mama's Gun",
        "200. Erykah Badu"
    ]
];

const button = document.querySelector("button");
const artistDisplay = document.querySelector("#artist");
const albumDisplay = document.querySelector("#album");
let artist = "";
let album = "";

button.addEventListener('click', () => {
    const pick = Math.floor(Math.random() * 200);
    artistDisplay.textContent = albumList[pick][1];
    albumDisplay.textContent = albumList[pick][0];
});
