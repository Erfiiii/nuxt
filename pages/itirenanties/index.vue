<template>
  <div class="container px-10">
    <search-bar-cm :cities="cities" :defaultCities="selectedCities"></search-bar-cm>
    <div class="cards">
      <nuxt-link
        :to="{name: 'itirenanties-slug', params:{slug:item.slug}}"
        class="item block cursor-pointer p-10 rounded-b-lg border-2 my-5"
        v-for="item in tours"
        :key="item.slug"
      >
        <p>{{calculateTourDays(item)}} days in {{item.cities.map(city=>city.name).join(', ')}}</p>
        <p class="text" v-if="item.totalPrice.min">From ${{item.totalPrice.min}} per person</p>
        <div class="images block flex align-middle mt-5">
          <img
            class="image rounded-lg border-2 inline-block mx-2 ml-0"
            v-for="image in processImages(item.cities).slice(0,3)"
            :src="image.src"
            :alt="image.alt"
            :key="image.src"
          />
          <div
            v-if="processImages(item.cities).length > 3"
            class="image bg-gray-300 inline-block mx-2 ml-0 text-center rounded-lg text-white text-3xl"
          >...</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import SearchBarCm from "../../components/SearchBar";
import HTTPClient from "../../utils/http";
import { GET_ITINENARIES_BY_CITY } from "../../utils/endpoints";

export default {
  data() {
    return {
      selectedCities: [],
      cities: [
        {
          latitude: "35.6892",
          longitude: "51.3890",
          name: "Tehran",
          slug: "tehran"
        },
        {
          latitude: "33.9850",
          longitude: "51.4100",
          name: "Kashan",
          slug: "kashan"
        },
        {
          latitude: "32.6539",
          longitude: "51.6660",
          name: "Isfahan",
          slug: "isfahan"
        },
        {
          latitude: "31.8974",
          longitude: "54.3569",
          name: "Yazd",
          slug: "yazd"
        },
        {
          latitude: "29.5926",
          longitude: "52.5836",
          name: "Shiraz",
          slug: "shiraz"
        },
        {
          latitude: "38.0962",
          longitude: "46.2738",
          name: "Tabriz",
          slug: "tabriz"
        },
        {
          latitude: "33.5860",
          longitude: "51.5900",
          name: "Abyaneh",
          slug: "abyaneh"
        },
        {
          latitude: "36.6830",
          longitude: "48.5087",
          name: "Zanjan",
          slug: "zanjan"
        },
        {
          latitude: "30.2839",
          longitude: "57.0834",
          name: "Kerman",
          slug: "kerman"
        },
        {
          latitude: "30.0630",
          longitude: "57.2875",
          name: "Mahan",
          slug: "mahan"
        },
        {
          latitude: "34.6416",
          longitude: "50.8746",
          name: "Qom",
          slug: "qom"
        },
        {
          latitude: "36.2605",
          longitude: "59.6168",
          name: "Mashhad",
          slug: "mashhad"
        }
      ],
      tours: [
        {
          blogUrl: null,
          cities: [
            {
              days: 2,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042096/trip-planner/itineraries/cities/tehran-1_bjm4wz.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042095/trip-planner/itineraries/cities/tehran-2_useyu8.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042096/trip-planner/itineraries/cities/tehran-3_kznfrg.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "35.6892",
              longitude: "51.3890",
              name: "Tehran",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "private"
              },
              services: [],
              slug: "tehran",
              thingsToDo:
                "Suggested Sightseeing:  Golestan Palace, Tehran’s Historic Arg, the National Museum, Grand Bazaar, Sa'ad Abad Palace and Tajrish Bazaar."
            },
            {
              days: 1,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041976/trip-planner/itineraries/cities/kashan-1_uyksmk.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041976/trip-planner/itineraries/cities/kashan-2_unjlx2.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041975/trip-planner/itineraries/cities/kashan-3_ocspln.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041975/trip-planner/itineraries/cities/kashan-4_zdkctb.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041976/trip-planner/itineraries/cities/kashan-5_iohdkh.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "33.9850",
              longitude: "51.4100",
              name: "Kashan",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "private"
              },
              services: [],
              slug: "kashan",
              thingsToDo:
                "Suggested Sightseeing: Historical Borujerdi and Tabatabaei houses, Kashan’s Bazaar, Sialk Tepe, and Fin Royal Garden."
            },
            {
              days: 2,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041953/trip-planner/itineraries/cities/isfahan-1_yobbw8.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041952/trip-planner/itineraries/cities/isfahan-2_jyagxo.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041952/trip-planner/itineraries/cities/isfahan-3_ymsy4t.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "32.6539",
              longitude: "51.6660",
              name: "Isfahan",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "private"
              },
              services: [],
              slug: "isfahan",
              thingsToDo:
                "Suggested Sightseeing: Naqsh-e Jahan square, Sheikh Lotfollah Mosque, Ali Qapu palace, Qeysarieh Bazaar, Hasht Behesht, Chehelsotoun and Jame mosque."
            },
            {
              days: 1,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042116/trip-planner/itineraries/cities/yazd-1_iiyvzw.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042116/trip-planner/itineraries/cities/yazd-2_bpmzxw.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042117/trip-planner/itineraries/cities/yazd-3_tbtl01.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "31.8974",
              longitude: "54.3569",
              name: "Yazd",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "private"
              },
              services: [],
              slug: "yazd",
              thingsToDo:
                "Suggested Sightseeing: Zoroastrian fire temple, Amir Chakhmaq complex, Jame mosque, and Dolat Abad Garden."
            },
            {
              days: 2,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042065/trip-planner/itineraries/cities/shiraz-1_da3ghp.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042067/trip-planner/itineraries/cities/shiraz-2_dppeni.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042066/trip-planner/itineraries/cities/shiraz-3_f7hwdu.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "29.5926",
              longitude: "52.5836",
              name: "Shiraz",
              nextTransportation: {
                distance: null,
                duration: 90,
                price: null,
                type: "flight"
              },
              services: [],
              slug: "shiraz",
              thingsToDo:
                "Suggested Sightseeing:  Hafezieh, Sa’adieh, Eram Garden, Karimkhani Arg, Persepolis, Naqsh-e Rostam, Naqsh-e Rajab, and Pasargadae."
            },
            {
              days: 0,
              images: [],
              landingUrl: null,
              latitude: "35.6892",
              longitude: "51.3890",
              name: "Tehran",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: ""
              },
              services: [],
              slug: "tehran",
              thingsToDo: null
            }
          ],
          overView:
            "Every first time traveler to Iran, should visit historical cities of Tehran, Kashan, Isfahan, Yazd and Shiraz. Highlights of Iran is designed based on most popular route between Iran travelers. This Untour provides travelers with private guide, private transportation and medium class accommodation. This Untour is available for any date and for any number of people.",
          slug: "highlights-of-iran",
          title: "Highlights of Iran",
          totalPrice: {
            max: 900,
            min: 800
          }
        },
        {
          blogUrl: null,
          cities: [
            {
              days: 2,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042096/trip-planner/itineraries/cities/tehran-1_bjm4wz.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042095/trip-planner/itineraries/cities/tehran-2_useyu8.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042096/trip-planner/itineraries/cities/tehran-3_kznfrg.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "35.6892",
              longitude: "51.3890",
              name: "Tehran",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "bus"
              },
              services: [
                {
                  price: {
                    max: 15,
                    min: 10
                  },
                  subTitle: "From airport to hotel",
                  title: "Pickup",
                  type: "pickup"
                }
              ],
              slug: "tehran",
              thingsToDo:
                "Suggested Sightseeing:  Golestan Palace, Tehran’s Historic Arg, the National Museum, Grand Bazaar, Sa'ad Abad Palace and Tajrish Bazaar."
            },
            {
              days: 1,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041976/trip-planner/itineraries/cities/kashan-1_uyksmk.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041976/trip-planner/itineraries/cities/kashan-2_unjlx2.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041975/trip-planner/itineraries/cities/kashan-3_ocspln.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "33.9850",
              longitude: "51.4100",
              name: "Kashan",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "bus"
              },
              services: [],
              slug: "kashan",
              thingsToDo:
                "Suggested Sightseeing: Historical Borujerdi and Tabatabaei houses, Kashan’s Bazaar, Sialk Tepe, and Fin Royal Garden."
            },
            {
              days: 1,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041953/trip-planner/itineraries/cities/isfahan-1_yobbw8.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041952/trip-planner/itineraries/cities/isfahan-2_jyagxo.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564041952/trip-planner/itineraries/cities/isfahan-3_ymsy4t.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "32.6539",
              longitude: "51.6660",
              name: "Isfahan",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "bus"
              },
              services: [],
              slug: "isfahan",
              thingsToDo:
                "Suggested Sightseeing: Naqsh-e Jahan square, Sheikh Lotfollah Mosque, Ali Qapu palace, Qeysarieh Bazaar, Hasht Behesht, Chehelsotoun and Jame mosque."
            },
            {
              days: 1,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042116/trip-planner/itineraries/cities/yazd-1_iiyvzw.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042116/trip-planner/itineraries/cities/yazd-2_bpmzxw.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042117/trip-planner/itineraries/cities/yazd-3_tbtl01.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "31.8974",
              longitude: "54.3569",
              name: "Yazd",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "bus"
              },
              services: [],
              slug: "yazd",
              thingsToDo:
                "Suggested Sightseeing: Zoroastrian fire temple, Amir Chakhmaq complex, Jame mosque, and Dolat Abad Garden."
            },
            {
              days: 2,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042065/trip-planner/itineraries/cities/shiraz-1_da3ghp.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042067/trip-planner/itineraries/cities/shiraz-2_dppeni.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1564042066/trip-planner/itineraries/cities/shiraz-3_f7hwdu.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "29.5926",
              longitude: "52.5836",
              name: "Shiraz",
              nextTransportation: {
                distance: null,
                duration: 90,
                price: null,
                type: "flight"
              },
              services: [],
              slug: "shiraz",
              thingsToDo:
                "Suggested Sightseeing:  Hafezieh, Sa’adieh, Eram Garden, Karimkhani Arg, Persepolis, Naqsh-e Rostam, Naqsh-e Rajab, and Pasargadae."
            },
            {
              days: 0,
              images: [],
              landingUrl: null,
              latitude: "35.6892",
              longitude: "51.3890",
              name: "Tehran",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: ""
              },
              services: [],
              slug: "tehran",
              thingsToDo: null
            }
          ],
          overView:
            "Iran is nowadays one of the cheapest destinations in the world after a huge drop in its currency's (Rial) value, making it a great destination for almost everyone. Discover Iran package, brings together a combination of top-rated budget hotels and high-quality bus transportation in an unbeatable deal.",
          slug: "discover-iran-cheap",
          title: "Discover IRAN on Budget",
          totalPrice: {
            max: 600,
            min: 500
          }
        },
        {
          blogUrl: null,
          cities: [
            {
              days: 1,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271754/trip-planner/itineraries/cities/Tehran_01_abp1uu.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271748/trip-planner/itineraries/cities/Tehran_03_oyk5u8.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271703/trip-planner/itineraries/cities/Tehran_02_rnd4so.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "35.6892",
              longitude: "51.3890",
              name: "Tehran",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "private"
              },
              services: [],
              slug: "tehran",
              thingsToDo:
                "Tehran is where traditional culture and a western lifestyle come together. The capital of Iran is home to various palaces and monuments of the Persian culture. Take a short drive in the clement northern areas of the town to visit the wealthy palaces of the Pahlavi dynasty. While visiting Golestan Palace, don’t miss out on the city’s museums, especially The Treasury of National Jewels and the National Museum of Iran. Being the hub of modern art and culture, various galleries, theaters, and cinemas can be found everywhere. The many cafes and restaurants around every park and campus are always bustling with college kids. This big city is also the ultimate destination for nightlife seekers. Tehran not only offers modern shopping malls, it also has the well-known Grand Bazaar, the perfect location for finding cute knickknacks and souvenirs.   Day 1)\nIt is best you begin your day early with a visit to the Grand Bazaar, to catch this cultural hub before it gets too crowded. After you are done strolling in the Grand Bazaar’s narrow streets, head to the Golestan palace. This palace is the only world heritage site of Tehran. Moslem Restaurant is popular choice for lunch in this area is.\n\nDay 2)\nSpend your day visiting the northern parts of the capital, such as Sa'dabad Palace Complex, a relic of the lavish Qajar and Pahlavi lifestyle, and its various museums, such as Mir Emad calligraphy museum and the museum of anthropology. After 30-minute drive, you can arrive at the Niavaran Palace Complex where the regal houses are surrounded by a beautiful garden. A look at Farah Diba’s collection of souvenirs completes your visit of the royal families in Iran. To end the day, it’s a good idea to visit Bame Tehran, the bustling resort in Alborz mountain range's foothills, perfect for enjoying a tasty snack while watching the glowing city below your feet. Another option is to head southward to enjoy the colorful lights of the Tabiat Bridge in one of its cafes or restaurants."
            },
            {
              days: 1,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271699/trip-planner/itineraries/cities/Kashan_02_qme3dr.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271722/trip-planner/itineraries/cities/Kashan_03_xzo3my.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271755/trip-planner/itineraries/cities/Kashan_01_h0pkcg.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "33.9850",
              longitude: "51.4100",
              name: "Kashan",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "private"
              },
              services: [],
              slug: "kashan",
              thingsToDo:
                "A peaceful bubble, contrasting the surrounding desert, Kashan is regrettably overlooked by many tourists. The original inhabitants of the city lived in Tepe Sialk around 3000 BC. As time went on, Kashan gained a reputation for its tile production. Today, the city is mainly known for its historical houses that used to be owned by noblemen and aristocrats. Kashan’s fantastic bazaar is also a must-see for anyone looking to find one-of-a-kind souvenirs. Don’t forget to enjoy the natural sights unique to this province, including the Maranjab desert and the Fin gardren with all its greenery.                                                                                      Day 3) Take full advantage of the city’s old neighborhoods, packed with historic buildings and traditional complexes, by visiting Kashan's two most famous and historically noble-owned houses; Borujerdi-ha House and Tabatabaee-ha House. Manouchehri House Restaurant offers some of the most popular dishes of this province. Westward are the remains of old Persia's once-untouchable civilization, Tepe Sialk. Tepe Sialk ages back about 7,500 years and is among the most remarkable archeological sites of the country. Finally, a visit to the emerald hidden in this desert, the Fin Garden with its man-made historical building, refreshing fountains, and aromatic orange trees would provide a much needed break."
            },
            {
              days: 2,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271643/trip-planner/itineraries/cities/Isfahan_02_kxfrue.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271682/trip-planner/itineraries/cities/Isfahan_04_ebqpzp.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271685/trip-planner/itineraries/cities/Isfahan_01_eogj3c.jpg",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "32.6539",
              longitude: "51.6660",
              name: "Isfahan",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: "private"
              },
              services: [],
              slug: "isfahan",
              thingsToDo:
                "Nicknamed “Half the World” by Iranians, Isfahan deserves its reputation as one of the top tourist attractions in the country. Its long tree-lined boulevards, squares surrounded by historical mosques and palaces, traditional schools, cathedrals, fire temples, and lively green gardens leave little for the heart to desire. If you want to experience different religions and spiritual practices, Isfahan is the spot for you! There you will also find other hallmarks of amazing architecture, such as Si-o-Seh Pol bridge, Imam Mosque, and the Grand Bazaar of Isfahan. Make sure not to miss the beautiful Sheikh Lotfollah Mosque. The Seashell Museum and Isfahan’s Aquarium are among other popular pastimes enjoyed by many travelers.                                                                                                                                                      Day 4) Begin your days in Isfahan at Naqsh-e Jahan Square, guarded by the three giant monuments of the city; Abbasi Mosque, Sheikh Lotfollah Mosque and its splendid tile art, and Ali Qapu Palace Pavilion. Having taken in the surrounding immensity from the pavilion’s porch, you might want to move on to the Hasht Behesht Palace and its surrounding garden. End the day by enjoying the sunset from the famous 17th century Si-o-Se Pol Bridge. Sofrekhaneh Sonnati and Khayyam Restaurant are two popular options for lunch and dinner.                                                                                                                                                                Day 5) Start this day with a dive into the Armenian heritage through the Vank cathedral, enjoying its gorgeous frescoes, museums, and library. Continue the trip to the Jāmeh Mosque of Isfahān. Built in the 8th century, this masterpiece of architecture carries footprints of the passage of time through centuries, yet stands today the great central mosque of the city. Feel free to spend the rest of the day at leisure, relaxing in the hotel, strolling in the historical streets, or shopping for souvenirs at Isfahan’s Grand Bazaar. Qeysarriyeh Bazaar offers the perfect opportunity for enjoying the detailed handicrafts of the locals."
            },
            {
              days: 2,
              images: [
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271695/trip-planner/itineraries/cities/Shiraz_04_cmvaw8.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271710/trip-planner/itineraries/cities/Shiraz_05_ovdbxe.jpg",
                  title: null
                },
                {
                  alt: null,
                  src:
                    "https://res.cloudinary.com/cdnquest/image/upload/t_w250/v1565271737/trip-planner/itineraries/cities/Shiraz_02_o025n1.jpg\n",
                  title: null
                }
              ],
              landingUrl: null,
              latitude: "29.5926",
              longitude: "52.5836",
              name: "Shiraz",
              nextTransportation: {
                distance: null,
                duration: null,
                price: null,
                type: ""
              },
              services: [],
              slug: "shiraz",
              thingsToDo:
                "Shiraz, the city of love, poetry, wine, and art is Iran’s cultural hub. With such architectural wonders as the infamous pink Nasir al-Mulk Mosque, coupled with a relaxed pace and friendly people, this city is among the top favorites the tourists visiting. Shiraz’s mosques, countless historical houses, and gardens remain the country’s most mesmerizing attractions. Not far from the main city rests Persepolis, the ruins of a once-invincible Persian Empire. Head to the historical Vakil Bazaar with its vaulted brick ceiling, bustling with merchants selling spices, rugs, Persian sweets, and get in touch with the country’s rich literary history by visiting the Tomb of Saadi and the Tomb of Hafez, two of Iran’s most revered poets. Day 6) Start the day with a jump deep into the most beloved historic site of Iran. Persepolis was once a glorious palace belonging to the first Persian Empire, now but a representation of what was, yet still possessing its magnificence. For lunch, you would have tomake an hour’s drive back to the main city. There, Shater Abbas Restaurant has been a popular choice for most travelers. After lunch, continue this journey through time in Naqsh-e Rustam. Somewhat overshadowed by Persepolis, this necropolis is home to four sarcophagi with rock carvings of celestial figures protecting them.  (Day 7)  Refresh you day with a visit to the picturesque, surprisingly pink-hued Nasir al-Mulk Mosque. After a visit to the tombs of Persian poetry’s most prominent figures (Hafez and Saadi,) head to Vakil Complex and its vibrant mosque, followed by a trip to Arg-e Karim Khan, the residence of many Zand rulers and the successive Qajar governors. It is a good idea to end this spectacular journey with a leisurely stroll through the charming Eram Garden."
            }
          ],
          overView:
            "If you’ve only got 7 days to visit Iran, your plan needs to make the most of every minute! This itinerary combines the main attractions of Iran’s four major provinces (Tehran, Kashan, Isfahan, and Shiraz) in a rush-free and easy pace. A foodie? There are also recommendations for both high-end and economic restaurants in every city! Use this plan to go through the history, heritage, and natural sites of this amazing country with no fuss.",
          slug: "essential-iran",
          title: "Essential Iran",
          totalPrice: {
            max: 800,
            min: 650
          }
        }
      ]
    };
  },
  components: {
    SearchBarCm
  },
  async created() {
    try {
      if (!this.$route.query.cities) {
        this.$router.push({ name: "index" });
        return;
      }
      let citiesForSearch = this.$route.query.cities;
      this.selectedCities = JSON.parse(citiesForSearch);
      let res = await HTTPClient.postRequest(
        `${GET_ITINENARIES_BY_CITY}?cities=${citiesForSearch}`
      );
      this.tours = res.data;
    } catch (error) {
      // throw error;
    }
  },
  methods: {
    calculateTourDays(tour) {
      return tour.cities
        .map(city => city.days)
        .reduce((pre, curr) => curr + pre, 0);
    },
    processImages(item) {
      let totalImages = [];
      item.map(city => {
        totalImages = [...city.images, ...totalImages];
      });
      return totalImages;
    }
  }
};
</script>

<style scoped>
.image {
  width: 112px;
  height: 62px;
  /* background-size: cover */
}
</style>