import React from "react";

const TourDestination = ({ imgSrc, location, tours }) => (
  <div className="flex">
    <img src={imgSrc} alt={location} className="h-20 w-32 object-cover" />
    <div className="ml-3 mt-1">
      <p className="font-normal text-[10px]">Tour Packages From</p>
      <p className="font-bold mt-2 text-sm truncate max-w-[120px]">
        {location}
      </p>
      <p className="font-normal mt-2 text-xs">{tours} Tours</p>
    </div>
  </div>
);

const ThirdSection = () => {
  const destinations = [
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/d10d/4304/0decb52f4d2ce401772d7b88194de52e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MiFRmQouPQWMY2DgYGCrmOoC5nZa7E9qIxCN8UN131PtzIXJKU5iSITvfp5GaffDD~Pa-PHRTqMJHXzZ0zVHXlk1d2Hba-RNDO6gmlQyQdM1sFOjqQXlziNtsOePEr3wcj41XNs3d3nv2A0S7il133fKa4Ur4FRkJfU6pnebaeY8NSSHYhlCaEmPIJQAt3KdSlMwl6q0QuN1vU40zaML2OyDMZxUDoLw-olcWojwfgz7DKWJFuKWPF7okE7qRtKwepgA1Uph~a1moslEcTcmuKWvzvZrZy7ZnQG0hxzVtaOBwszKgDGk0fJNwA3OLeuAzKKyltXnkR-GFT5qjRSmgg__",
      location: "Diu",
      tours: "26",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/53ac/7e16/ebf81f3dae1ceeafd05ca328f7458530?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LeS4QkGFjgJ3ouH5O0snIbb3B6lfLLyAOK4zVYnYjhWCsXAQi3UpMGCsfpm~457ZGooJ1UgB4meG14ZQmH5y47grQqK8LvPFkeSkyKX0sCC~pbPZOAdGFrCD1zpQhD2o3HxsDAfNIfSOr-M9wC3WtiP02e9Vw3wLKoYowcsu9YBmcNVfAwXAg-hjiZRekj5wmRKm1y4ddqqbSpQmRjoo9f9JudNNUMfnxtOnVv4eDu9wNcYKNmfv8X8Bdq87XrN7QsgKmk9bCuj2cuXUKVx3CewnJ1Ju59EcKIQaC3HUFYoxqxx90yWmSj50Ee6XvpAsnaWY6QS-yHN2qUyvnKj-kw__",
      location: "Dwaraka",
      tours: "32",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/9f56/679f/f3b02e37afb46d80fe1b4f90cf59a4c5?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lJxYGhSAtiOrZcsT~h5veIVSul3~URYm43PlU9e4PVuXqXkhgVkJqHYImQD3XVW5p09kPfAYb~zw0Ue1EC7JCY0SjA8Nb307ASWRR0~RCJElko8c5y2ZCAYS~yIqq8dfomVxkRorIyJHjcQ3fpWKmXdmx7EbPqKUl-YM8dYF0985tBQ9w-CabHMvoRYEwBpFr2s3UJrHrUptpt8yysON2pQF~78xRbDwQiPdZ2RCUYrSRvJRktTRjPpuCXYP1Mq2T1AMfWRShC973ZBkNOVpA35WjU8DIfxbu3zBumbJc3kbnmaHj981j7ZjfNYB5TuiLguvhc0ewuqoZX~An8GiDw__",
      location: "Sasan gir",
      tours: "28",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/4394/df09/15aa2c8eaf8d5404eeba2a34ec9c9e8f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HLfIdvwcuRDUoj-Tt4eNc-S8G0Jjw5lsT2Kw-H6nGinzqZKPJxO1s3RGU0u6L7Vc4NuJFMbLPp7bJGI1CvDKUfvbanpH6GngP~YYGhj3vDPAJQScLtct78l43U7y2AsgsclSfTNGFHrV7XzmiBbSK5dy~lDQQ05sN-8qKECAEz6fCb45ME98LBKp89bawOspswjatjFREpvJF-zgrAYFfebnlOgn0RH4VH6CurFAEm3KZNO8FKtd-4Sk7995hwTCmV0C9Uk0xwaTBa7arwMjLr7VVhKnCqoRAWjJvekDb2aaQkcTvHxHtnBJzzB58iglKvjm5Lm8ezCImPTbPnycGA__",
      location: "Polo Forest",
      tours: "30",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/c375/220d/c19832424f1441887debf8d919678c43?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B7f-8KBZ9rGrQyoEk5rJB8j0Uov7Uf-qQ2Evzi7gkTx8kQH72fd36kRc~liCzTubx51x51VeCbDmE7N87SSnPlcopXwXozQD5MYKLcG669bYnmwIgg68BeAuWxaU1GesFzwe68cdC1HP62vX08oNQAAM36EZsD2pbDwS32xY4ASgj9wEP9RGC5bYhso9fjJju5PUrOvVXgCDtIMbkUPDP77uDxmGAR8WIhPVjoB9Dx34bqeH6barT1h-OdHZeENqyHbjZqds08cdsS-eWaL2vKWKYPOxrprww0SUoZ8xAwDQ4t8Q8rZuDDzp3NmeYwz3jGVwN0hMmbOqjg2IRv6Epw__",
      location: "Statue of Unity",
      tours: "24",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/a18a/154c/f7cb6b8694aef9e5c823636f68e566eb?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JWUKoMkPvNXvl2xfSU2J87za-Nyv6iHeL68MYQm0kYjY3MeiU8W3mCEW0xwgIJCnPhZeIdcGOnnU18YELYWkiA0ZfBdYoeDTcduCb-yYvgwXLzGbLXWURJ~k8RIDMAXwis~H~mf~7yJ11A8RLzqx2-yptwWGEnmIr44zKAWy~0gmMptB4PvmZ6gFKgPo2z3c8hMxdhGwuXvEuRcymG2RZ38wA5s3qBKXFoQvdg-~4RrRDq9Rz52XTxrQalddLmyLCZR4cnuAAzyby8tsSfW5hfsqQvQ0RR~CktqvaCWgVXj8DVZTRErHYXDdLapmH4GRjQMqO42ZyAC35RRHG61vIw__",
      location: "Saputara",
      tours: "35",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/e7a3/42da/792c36b8492ec34149e7721f6d3fac46?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dhfuq4EfDJumU5C7piTaTul~B1Q0D3XfLGZMAILxIpH19s8L86OEa-TIxnojIuSvrX5~lMDczMvEJWlFTPNXPsot1tdWko1UlLD3Divh3CS37KUOp4hmF2pKxr3BqDlBbvVOlA0EBG2eDgZnz3RlykWaQXtf2eqd-x45pFf0KVftG9Jr3gcotItXFVawDC-Kkntr0XwCrouAPQw1-uqyDgNRpz7cJq86fV4Aaibv0P1I4gDkAclvXMhLXJP6acok8x0Q11Xqwc3E0PvMKYcqxuftMHwzaBlnCn4IwKXRZoV6QoxwtZfjcoAy2S9ZNFBi8mAYV13zum1sbycZoGNi3g__",
      location: "Kutch",
      tours: "22",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/d02d/22f8/a708bbca4da4934105c3f900fb898cbb?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIyMvy-NDoqwAFAAwFF2YybYIORwYtb9q4SubJjsE0vmjPw-HyOGGtyu~BONlXtsdnBDzezRwQrbjznG9DJBTT63GVhsgUriRObTvfqHfhktz5SFBh72RXFq0s33hlNZ7aDjilCPVD8FwrMhaakao829UNONE1rYiobLxf8ADIfkShFbFphy8X1SQTNgDcMXTNgFZcvt0AJqkRpoFP2ktTGVnQQjYQ2dzU-u999Fx-NIccwsh-30nfHCVZdqfbuexqPEfkNLR9In0Cy58oG0i5mUPO~wlqTFsCk7knvib3IKoW0~eIhMq4FtedbqPBxVh78tZ3d-J9mDBlhIRgPuyA__",
      location: "Udaipur-Nathdwara",
      tours: "20",
    },
  ];

  return (
    <div className="m-4">
      <p className="mt-8 flex justify-center font-bold text-2xl">
        Plan An <span className="text-orange-500 mx-2">Unforgettable</span>{" "}
        Weekend Gateway From Rajkot
      </p>

      <div className="mt-8 mx-24">
        <div className="grid grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <TourDestination
              key={index}
              imgSrc={dest.imgSrc}
              location={dest.location}
              tours={dest.tours}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
