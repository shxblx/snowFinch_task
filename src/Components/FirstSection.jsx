import React from "react";
import FA1 from "../IMG/FA1.png";

const FirstSection = () => {
  const destinations = [
    {
      name: "KERALA",
      days: "6 days",
      departures: "15 departures",
      guests: "50,846 guests traveled",
      image:
        "https://s3-alpha-sig.figma.com/img/b483/6bfb/7bf56fe7c7f1c8a7571694197d3059ff?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hNtALcrVeFno2MqPyeRcin033qUT4DRUv6F3d~8i5A-aRODPvkjU4Cnh-ynGFjRxpgiJLYjvQq8KMpp4R22-LOxqS~4CnsDb2ciFnzmLfNhQTpQGrZQjw-UPRkdPEW01FJc14MzGn~weGrD16tx1ZxAwXpP3N34cs8BFrrDnb5ViQV1b-b1z2E1D2G53gMfOfDEKxkwFQok1p5c9GxCPswZw2bap7KHYBxoX10iqc09LMIwUWkdNIYxiTWQ9YwtIj6aotvef7al12gElYD2FYUK3ZGJEod~kVXbTKv2b--9RnD30lOSTXny9Q2pNP~CgCAgFBIcaywDZE5TanQWUkA__",
    },
    {
      name: "KARNATAKA",
      days: "6 days",
      departures: "15 departures",
      guests: "50,846 guests traveled",
      image:
        "https://s3-alpha-sig.figma.com/img/3b43/e0bc/42e77c8e3ad973e807f727adf6f35c03?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIL3rk-qmD~Z6u~JyxGYCqVYxfSq4S93FEnFLtoD5qeRchJqVhZDsAB3hl23Wj6vW0~jDejPAlWJLrEpTd9AJdKSiDrsmOCJ5YRqMKlLW2~PH5TKwYxwPM9EvON2ZU6FEVMmcG6ovIwm63x3P8jhexn0Wq82dSNCLjmsW9t1hia7YxvhzFQ2KupMxA5EU-y95pq5uVcf4djZcESHej5VwKyPu3Ty6qkCMaLI612C1EmtMu4DuzV~PF2w0GIvv16m3-YHKM2OsSEUMaskGP-E199vo3iIawphfGIkKQEATGFTwLowjeTw8E9QkTto7N5ECr3UUlceqOM3EXjknbf5kQ__",
    },
    {
      name: "MAHARASHTRA",
      days: "6 days",
      departures: "15 departures",
      guests: "50,846 guests traveled",
      image:
        "https://s3-alpha-sig.figma.com/img/08a9/a99a/4ab5d4072c6ed6fae816b0f121fb6498?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m15yzsA0AjwvBw8-UUzzhdop2UFlWVTlO35UVcwboExUxTE6vN1OxMcNjnl-AiTaAiRNvZtLYauIuu2W1BuY2yyf3ZnW0cr0OVHqJ2DX8y0BbLJ67vkIUqakbmQCH5ewzKSRLiu9VvH2iucC9SUiEOFGwc2PNPhPzw5vq0-bL3~c-tOk6PbqKxxJlQ62uGDQJTvoiAOXkf0k-60KxGOZnVvMHM5T6y4SukSdwXunnyRBB8r6WwB~LMVR44lwTNtQ4emmP0AJcpLbs3RbDKRGFndpx6iObNGriEkQiM6-63hYxOTd0BYk7GC2QSWWazqjJC3rOljIoBduNWoa2UJGhA__",
    },
    {
      name: "RAJASTHAN",
      days: "6 days",
      departures: "15 departures",
      guests: "50,846 guests traveled",
      image:
        "https://s3-alpha-sig.figma.com/img/b506/5552/69f88af736fec41252beae2d3d30447b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pbGPGYCccg6cQLlMspiH1F8OJY9LhZOYRcLDmLpuZvgDiEnDNjjOXvXUVtq-0PDXVXm6MJcJokcSsD0X1gTvONteKSrVzaZIlekBlssyNfQY9gWdZnPEIEgOjZPkHoBRiAxZEDRk-CKzgEIdh9XjCLQffW9C~F2yA3rszbNfs2GIURExlNxsVmYd8OO2Z5lyJ~0fuMIl-8NvxUYruE5NxdBVc8ly1DrEUwN3SlNmwPuC-5D5ccZ-5OMMtK3ZZzB0UHYU2SuVd7tffShzzJh3ofhxvfRdWtDzoxIo-94qCKBgY-Avbm8wTWlaSaeCw0EGxRLM6cw1Es3spogYZy6z3w__",
    },
    {
      name: "UTTARAKHAND",
      days: "6 days",
      departures: "15 departures",
      guests: "50,846 guests traveled",
      image:
        "https://s3-alpha-sig.figma.com/img/da2f/0093/c7fd62fce645f3874178921a6b127152?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oAQl74x2iXrDHhtJRqEItvktDlwRfEgv~5s0RJbrbzCrTosUPZZeCcC4AZZzIQJORo6Yb67~VAY4-F9lk5d9-ANicm1gLLiuOMz4eFciQDPCspResJxG-5WasnXYXPhCL8P9pPbTwbgJcrOgFX2k~Ovq43EasbrygrSWIGpiaGvIyHNzsbEVmLukZ69af7oU99GgHmEul5btsFbaL2Z9Gw8dY4B9GQxLelYfQvFt0OYih9vbSEqXEHVWW-VAWb~ZB3W2x9ysmsepVQJuDvJ2cK~SNMzqI5CyR7Edd1yWqS2yGxr2o20EiK2Mdnbop0D~Pqe5JjjlxyHFYbJE7XxMhw__",
    },
    {
      name: "HIMACHAL",
      days: "6 days",
      departures: "15 departures",
      guests: "50,846 guests traveled",
      image:
        "https://s3-alpha-sig.figma.com/img/949a/04e2/b4c5cedb6338e11388592b80f2194063?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R28sXtvuQVvMs81p8b3YmbzQaAJYt4g1GvFURFBWJrTlMPUg8bsoS6khMukpdFO9bnJWMmYe72-XNAezWhkahvMYq2Aa9B83MA4-EyhJgtu8xqkifMyMpSjl8j2MCMDsvUzZ0P21RufrTF-czVMMQfOlD9lQ4t~sWexWpJ5Z73cm8bK36EZXaZPcoJs41peW3WLYXrmyL6n61g1hQ5maUMYyhwH07h48v0m6stbrHsDuBB2i04RKuU8M2gyJZ80H~Z9vuRo--E860RgFrAavaPXJ2~-6AU28FuyzP1IyXLS56DtSSq6AtJaVzIYMRg3LxlcaE82vbgDBNqJnl2a~wQ__",
    },
    {
      name: "JAMMU KASHMIR",
      days: "6 days",
      departures: "15 departures",
      guests: "50,846 guests traveled",
      image:
        "https://s3-alpha-sig.figma.com/img/4c4a/f69d/5d1494dd62ed133061fc0c5a6824d14a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ehpnb7T0t7qUiFlZRmmw5tx0nbjrUiUZcXYssjRjcGVjziO5bwS-rAufrp3yo-cfOvBbKBFWq-VlyS7iNfmUxxJ52PpgIflQ11zMTY4cBNuos0uWG1u8A0ydboZ9hnpbBD2OgoJ-MdM7y4xPcWVBgxc0USPtgyUPp3v90Eo4Kehbrs0YIv9oZ-1zoW6X52fgANCh6zsEacB6e8fTFWYQZwX3QUM90FfaM93RER2cHU1ACeh-wGe1yKmjnTlC0A0wJ7i9AuBRxyZIgAzyHnrDeaaQEWs8ekhXX3TvRI01LiJ2L1oZKtvUgZa4mbh-zhw2mfXKlzp1O~oOjpSMtrWdVQ__",
    },
    {
      name: "DELHI",
      days: "6 days",
      departures: "15 departures",
      guests: "50,846 guests traveled",
      image:
        "https://s3-alpha-sig.figma.com/img/8a99/9d59/4185dfb3a6724f7087f919150b532ca7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l2Pi0QoMfl0SIdA82reU4gjiBQKKrhOgegCR~xsZj3FDiDX9Or3FqlfWm0yeAuI9B9BwjQW~-XekmKgd5b5vk3xLMqxoHt-8GpqjsUzaRpMp4oOADuNrZmavGIgRchaxmaCAe2bDhYdd2em4pJ7Y776CDPRaODOujFdy5tafarH3DIA5Pe~Q8Vk8LvYkx6XsA9F2ySEAC8JHhC-DB0dp7YwXdzpvwfooZVcTCdUuBEdtlrZYg0mk5KJMMfMhgTUX5cY4P~STcfnQKJ9Rp3WU5xeXeg-fhbxEE8uEQuKYgEAjCmFwVof7BhiCPmEgcN8FoqyL0Bs4bZ2Vnw81AJCynQ__",
    },
  ];

  return (
    <>
      <div className="mt-10 mx-56 flex">
        <div className="">
          <img src={FA1} alt="img" className="w-[600px]" />
        </div>
        <div className="ml-10 m-10">
          <div className="flex flex-wrap gap-5">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="relative w-36 border border-gray-400 rounded-md p-1 group"
              >
                <div className="relative h-32 overflow-hidden rounded-[4px]">
                  <div className="absolute inset-0 bg-black opacity-20 rounded-[4px] z-10"></div>

                  <div className="absolute inset-0 z-10 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 opacity-0 rounded-full transition-all duration-700 ease-out group-hover:w-32 group-hover:h-32 group-hover:opacity-30"></div>
                  </div>

                  <div className="absolute italic inset-0 flex items-center justify-center text-white font-bold z-20">
                    {destination.name}
                  </div>

                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover rounded-[4px] transform transition-transform duration-700 ease-out group-hover:scale-125"
                    />
                  </div>
                </div>
                <div className="mt-2 text-xs">
                  <div className="flex justify-between mb-1">
                    <span className="border border-gray-400 rounded px-1">
                      {destination.days}
                    </span>
                    <span className="border border-gray-400 rounded px-1">
                      {destination.departures}
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <span className="border border-gray-400 rounded px-1">
                      {destination.guests}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
