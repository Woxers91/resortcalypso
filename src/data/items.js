const items = [
    {  
        id:0,
        dagar:"1 dag",
        tid:"Priset gäller per dygn",
        name:'Singel Room',
        price: 50,
        category:'Rooms',
        img: require('../assets/singelrum.webp'),
        description:`Våra basic singelrum är hela fina, rymliga 15 kvm. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    
    },
    {
        id:1,
        name:'Singel Room',
        tid:"Priset gäller per dygn",
        price: 50,
        category:'Rooms',
        img: require('../assets/singelrum.webp'),
        description:`Våra basic singelrum är hela fina, rymliga 15 kvm. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    },
    {
        id:2,
        name:'Singel Room',
        tid:"Priset gäller per dygn",
        price: 50,
        category:'Rooms',
        img: require('../assets/singelrum.webp'),
        description:`Våra basic singelrum är hela fina, rymliga 15 kvm. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    }, 
    {
        id:3,
        name:'Singel Room',
        tid:"Priset gäller per dygn",
        price: 50,
        category:'Rooms',
        img: require('../assets/singelrum.webp'),
        description:`Våra basic singelrum är hela fina, rymliga 15 kvm. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    }, 
    {
        id:4,
        name:'Singel Room',
        tid:"Priset gäller per dygn",
        price: 50,
        category:'Rooms',
        img: require('../assets/singelrum.webp'),
        description:`Våra basic singelrum är hela fina, rymliga 15 kvm. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    }, 
    {
        id:5,
        name:'Lyx Singel Room',
        tid:"Priset gäller per dygn",
        price: 60,
        category:'Rooms',
        img: require('../assets/singellyx.webp'),
        description:`Våra lyx singelrum är hela 18 kvm med balkong. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch, bad och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    },
    {
        id:6,
        name:'Lyx Singel Room',
        tid:"Priset gäller per dygn",
        price: 60,
        category:'Rooms',
        img: require('../assets/singellyx.webp'),
        description:`Våra lyx singelrum är hela 18 kvm med balkong. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch, bad och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    },
    {
        id:7,
        name:'Lyx Singel Room',
        tid:"Priset gäller per dygn",
        price: 60,
        category:'Rooms',
        img: require('../assets/singellyx.webp'),
        description:`Våra lyx singelrum är hela 18 kvm med balkong. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch, bad och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    },
    {
        id:8,
        name:'Lyx Singel Room',
        tid:"Priset gäller per dygn",
        price: 60,
        category:'Rooms',
        img: require('../assets/singellyx.webp'),
        description:`Våra lyx singelrum är hela 18 kvm med balkong. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch, bad och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    },
    {
        id:9,
        name:'Lyx Singel Room',
        tid:"Priset gäller per dygn",
        price: 60,
        category:'Rooms',
        img: require('../assets/singellyx.webp'),
        description:`Våra lyx singelrum är hela 18 kvm med balkong. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch, bad och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    },
    {
        id:10,
        name:'Lyx Singel Room',
        tid:"Priset gäller per dygn",
        price: 60,
        category:'Rooms',
        img: require('../assets/singellyx.webp'),
        description:`Våra lyx singelrum är hela 18 kvm med balkong. Varje rum har en stor och bekväm 110 cm säng. Stort badrum med toalett,dusch, bad och tillbehör. Samtliga rum har förvarings, säkerhetsskåp, liten kyl, och tv. Frukostbufé ingår i priset.`,
    },
    {
        id:11,
        name:'Double Room',
        tid:"Priset gäller per dygn",
        price: 70,
        img: require('../assets/doubleroom.jpg'),
        category:'Rooms',
        description:"Våra basic dubbelrum är 20 kvm. Varje rum har en stor och bekväm 140 cm säng. Badrum med toalett, dusch och tillbehör. Samtliga rum har förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    },
    {
        id:12,
        name:'Double Room',
        tid:"Priset gäller per dygn",
        price: 70,
        category:'Rooms',
        img: require('../assets/doubleroom.jpg'),
        description:"Våra basic dubbelrum är 20 kvm. Varje rum har en stor och bekväm 140 cm säng. Badrum med toalett, dusch och tillbehör. Samtliga rum har förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    },
    {
        id:13,
        name:'Double Room',
        tid:"Priset gäller per dygn",
        price: 70,
        category:'Rooms',
        img: require('../assets/doubleroom.jpg'),
        description:"Våra basic dubbelrum är 20 kvm. Varje rum har en stor och bekväm 140 cm säng. Badrum med toalett, dusch och tillbehör. Samtliga rum har förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    }, 
    {
        id:14,
        name:'Double Room',
        tid:"Priset gäller per dygn",
        price: 70,
        category:'Rooms',
        img: require('../assets/doubleroom.jpg'),
        description:"Våra basic dubbelrum är 20 kvm. Varje rum har en stor och bekväm 140 cm säng. Badrum med toalett, dusch och tillbehör. Samtliga rum har förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    }, 
    {
        id:15,
        name:'Double Room',
        tid:"Priset gäller per dygn",
        price: 70,
        category:'Rooms',
        img: require('../assets/doubleroom.jpg'),
        description:"Våra basic dubbelrum är 20 kvm. Varje rum har en stor och bekväm 140 cm säng. Badrum med toalett, dusch och tillbehör. Samtliga rum har förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    }, 
    {
        id:16,
        name:'Lyx Double Room',
        tid:"Priset gäller per dygn",
        price: 80,
        category:'Rooms',
        img: require('../assets/doublellyx.webp'),
        description:"Våra lyx dubbelrum är 22 kvm med extra stor balkong med vy över hav och natur. Varje rum har en stor, bekväm 140 cm säng. Badrum med toalett, badkar, duch och tillbehör. Samtliga rum har bra förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    }, 

    {
        id:17,
        name:'Lyx Double Room',
        tid:"Priset gäller per dygn",
        price: 80,
        category:'Rooms',
        img: require('../assets/doublellyx.webp'),
        description:"Våra lyx dubbelrum är 22 kvm med extra stor balkong med vy över hav och natur. Varje rum har en stor, bekväm 140 cm säng. Badrum med toalett, badkar, duch och tillbehör. Samtliga rum har bra förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    }, 
    {
        id:18,
        name:'Lyx Double Room',
        tid:"Priset gäller per dygn",
        price: 80,
        category:'Rooms',
        img: require('../assets/doublellyx.webp'),
        description:"Våra lyx dubbelrum är 22 kvm med extra stor balkong med vy över hav och natur. Varje rum har en stor, bekväm 140 cm säng. Badrum med toalett, badkar, duch och tillbehör. Samtliga rum har bra förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    }, 
    {
        id:19,
        name:'Lyx Double Room',
        tid:"Priset gäller per dygn",
        price: 80,
        category:'Rooms',
        img: require('../assets/doublellyx.webp'),
        description:"Våra lyx dubbelrum är 22 kvm med extra stor balkong med vy över hav och natur. Varje rum har en stor, bekväm 140 cm säng. Badrum med toalett, badkar, duch och tillbehör. Samtliga rum har bra förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    }, 
    {
        id:21,
        name:'Lyx Double Room',
        tid:"Priset gäller per dygn",
        price: 80,
        category:'Rooms',
        img: require('../assets/doublellyx.webp'),
        description:"Våra lyx dubbelrum är 22 kvm med extra stor balkong med vy över hav och natur. Varje rum har en stor, bekväm 140 cm säng. Badrum med toalett, badkar, duch och tillbehör. Samtliga rum har bra förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    }, 
    {
        id:22,
        name:'Family Room',
        tid:"Priset gäller per dygn",
        price: 85,
        category:'Rooms',
        img: require('../assets/familyroom.webp'),
        description:"Våra familjerum är 26 kvm med extra stor balkong med vy över hav och natur. Varje familjerum har en stor 140 cm säng plus två st 90 cm sängar. Badrum med toalett, badkar, duch och tillbehör. Samtliga rum har bra förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    }, 
    {
        id:23,
        name:'Family Room',
        tid:"Priset gäller per dygn",
        price: 85,
        category:'Rooms',
        img: require('../assets/familyroom.webp'),
        description:"Våra familjerum är 26 kvm med extra stor balkong med vy över hav och natur. Varje familjerum har en stor 140 cm säng plus två st 90 cm sängar. Badrum med toalett, badkar, duch och tillbehör. Samtliga rum har bra förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    },
    {
        id:24,
        name:'Family Room',
        tid:"Priset gäller per dygn",
        price: 85,
        category:'Rooms',
        img: require('../assets/familyroom.webp'),
        description:"Våra familjerum är 26 kvm med extra stor balkong med vy över hav och natur. Varje familjerum har en stor 140 cm säng plus två st 90 cm sängar. Badrum med toalett, badkar, duch och tillbehör. Samtliga rum har bra förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    },
    {
        id:27,
        name:'Family Room',
        tid:"Priset gäller per dygn",
        price: 85,
        category:'Rooms',
        img: require('../assets/familyroom.webp'),
        description:"Våra familjerum är 26 kvm med extra stor balkong med vy över hav och natur. Varje familjerum har en stor 140 cm säng plus två st 90 cm sängar. Badrum med toalett, badkar, duch och tillbehör. Samtliga rum har bra förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    },
    {
        id:28,
        name:'Family Room',
        tid:"Priset gäller per dygn",
        price: 85,
        category:'Rooms',
        img: require('../assets/familyroom.webp'),
        description:"Våra familjerum är 26 kvm med extra stor balkong med vy över hav och natur. Varje familjerum har en stor 140 cm säng plus två st 90 cm sängar. Badrum med toalett, badkar, duch och tillbehör. Samtliga rum har bra förvaring, säkerhetskåp, rymlig kyl och 30 tums tv. Frukostbufé ingår i priset."
    },
    {
        id:29,
        name:'Lyx Family Room ',
        tid:"Priset gäller per dygn",
        price: 90,
        category:'Rooms',
        img: require('../assets/famillyx.jpg'),
        description:"Våra lyx familjerum är hela 34 kvm, och består av två sovrum. Ena rummet är har en 160 cm säng med soffa och andra rummet har två st 90 cm sängar. Varje rum har två stor balkonger med vacker vy över havet. Det finns två st badrum, ena med badkar och toalett, och den andra med dusch och toalett. Bra förvaring, stort säkerhetsskåp, rymlig kyl och två st 40 tums tvn i vardera sovrum.Frukostbufé ingår i priset.",
    }, 
    {
        id:30,
        name:'Lyx Family Room ',
        tid:"Priset gäller per dygn",
        price: 90,
        category:'Rooms',
        img: require('../assets/famillyx.jpg'),
        description:"Våra lyx familjerum är hela 34 kvm, och består av två sovrum. Ena rummet är har en 160 cm säng med soffa och andra rummet har två st 90 cm sängar. Varje rum har två stor balkonger med vacker vy över havet. Det finns två st badrum, ena med badkar och toalett, och den andra med dusch och toalett. Bra förvaring, stort säkerhetsskåp, rymlig kyl och två st 40 tums tvn i vardera sovrum.Frukostbufé ingår i priset.",
    }, 
    {
        id:31,
        name:'Lyx Family Room ',
        tid:"Priset gäller per dygn",
        price: 90,
        category:'Rooms',
        img: require('../assets/famillyx.jpg'),
        description:"Våra lyx familjerum är hela 34 kvm, och består av två sovrum. Ena rummet är har en 160 cm säng med soffa och andra rummet har två st 90 cm sängar. Varje rum har två stor balkonger med vacker vy över havet. Det finns två st badrum, ena med badkar och toalett, och den andra med dusch och toalett. Bra förvaring, stort säkerhetsskåp, rymlig kyl och två st 40 tums tvn i vardera sovrum.Frukostbufé ingår i priset.",
    }, 
    {
        id:32,
        name:'Lyx Family Room ',
        tid:"Priset gäller per dygn",
        price: 90,
        category:'Rooms',
        img: require('../assets/famillyx.jpg'),
        description:"Våra lyx familjerum är hela 34 kvm, och består av två sovrum. Ena rummet är har en 160 cm säng med soffa och andra rummet har två st 90 cm sängar. Varje rum har två stor balkonger med vacker vy över havet. Det finns två st badrum, ena med badkar och toalett, och den andra med dusch och toalett. Bra förvaring, stort säkerhetsskåp, rymlig kyl och två st 40 tums tvn i vardera sovrum.Frukostbufé ingår i priset.",
    }, 
    {
        id:33,
        name:'Lyx Family Room',
        tid:"Priset gäller per dygn",
        price: 90,
        category:'Spa',
        img: require('../assets/famillyx.jpg'),
        description:"Våra lyx familjerum är hela 34 kvm, och består av två sovrum. Ena rummet är har en 160 cm säng med soffa och andra rummet har två st 90 cm sängar. Varje rum har två stor balkonger med vacker vy över havet. Det finns två st badrum, ena med badkar och toalett, och den andra med dusch och toalett. Bra förvaring, stort säkerhetsskåp, rymlig kyl och två st 40 tums tvn i vardera sovrum.Frukostbufé ingår i priset.",
    },
    {
        id:34,
        name:'Jacuzzi (19.00-20.00)',
        price: 50,
        img: require('../assets/jacuzzi1.jpg'),
        category:'Spa',
        description:"Lyxig utomhus jacuzzi. Priset avser 4 personer. Därefter tillkommer 15 Euro/pers."
    },
    {
        id:35,
        name:'Jacuzzi (20.00-21.00)',
        price: 50,
        category:'Spa',
        img: require('../assets/jacuzzi1.jpg'),
        description:"Lyxig utomhus jacuzzi. Priset avser 4 personer. Därefter tillkommer 15 Euro/pers."
    },
    {
        id:36,
        name:'Jacuzzi (21.00-22.00)',
        price: 50,
        category:'Spa',
        img: require('../assets/jacuzzi1.jpg'),
        description:"Lyxig utomhus jacuzzi. Priset avser 4 personer. Därefter tillkommer 15 Euro/pers."
    }, 
    {
        id:37,
        name:'Jacuzzi (22.00-23.00)',
        price: 60,
        category:'Spa',
        img: require('../assets/jacuzzi1.jpg'),
        description:"Lyxig utomhus jacuzzi. Priset avser 4 personer. Därefter tillkommer 15 Euro/pers."
    }, 

    {
        id:38,
        name:'Jacuzzi (23.00-24.00)',
        price: 60,
        category:'Spa',
        img: require('../assets/jacuzzi1.jpg'),
        description:"Lyxig utomhus jacuzzi. Priset avser 4 personer. Därefter tillkommer 15 Euro/pers."
    }, 
    {
        id:39,
        name:'Aroma massage 50 min (10.00-11.00)',
        price: 45,
        category:'Spa',
        img: require('../assets/massage2.jpg'),
        description:"Njut av en avslappnande aroma massage hos en av våra massörer i en lugn och privat miljö."
    },
    {
        id:40,
        name:'Aroma massage 50 min (11.00-12.00)' ,
        price: 45,
        category:'Spa',
        img: require('../assets/massage2.jpg'),
        description:"Njut av en avslappnande aroma massage hos en av våra massörer i en lugn och privat miljö."
    }, 
    {
        id:41,
        name:'Aroma massage 50 min (14.00-15.00)',
        price: 45,
        category:'Spa',
        img: require('../assets/massage2.jpg'),
        description:"Njut av en avslappnande aroma massage hos en av våra massörer."
    }, 

    {
        id:42,
        name:'Aroma massage 50 min (15.00-16.00)',
        price: 45,
        category:'Spa',
        img: require('../assets/massage2.jpg'),
        description:"Njut av en avslappnande aroma massage hos en av våra massörer i en lugn och privat miljö."
    }, 
    {
        id:43,
        name:'Aroma massage 50 min (16.00-17.00)',
        price: 45,
        category:'Spa',
        img: require('../assets/massage2.jpg'),
        description:"Njut av en avslappnande aroma massage hos en av våra massörer i en lugn och privat miljö."
    }, 
    {
        id:44,
        name:'Deluxe behandling (14.00-16.00)',
        price: 90,
        category:'Spa',
        img: require('../assets/luxuryspa.jpg'),
        description:"Njut av en avslappnande aroma massage hos en av våra massörer i en lugn och privat miljö."
    }, 
    {
        id:45,
        name:'Deluxe behandling (16.00-18.00)',
        price: 90,
        category:'Spa',
        img: require('../assets/luxuryspa.jpg'),
        description:"Njut av en avslappnande aroma massage hos en av våra massörer i en lugn och privat miljö."
    }, 
    {
        id:46,
        name:'Deluxe behandling (18.00-20.00)',
        price: 90,
        category:'Spa',
        img: require('../assets/luxuryspa.jpg'),
        description:"Njut av en avslappnande kropps massage följt av en behaglig ansiktsbehandling. Därefter får ni njuta i jacuzzin."
    }, 
    {
        id:47,
        name:'Deluxe behandling (20.00-22.00)',
        price: 90,
        category:'Spa',
        img: require('../assets/luxuryspa.jpg'),
        description:"Njut av en avslappnande aroma massage hos en av våra massörer i en lugn och privat miljö."
    }, 
    {
        id:48,
        name:'Deluxe behandling (22.00-00.00)',
        price: 90,
        category:'Spa',
        img: require('../assets/luxuryspa.jpg'),
        description:"Njut av en avslappnande aroma massage hos en av våra massörer i en lugn och privat miljö."
    }, 
    {
        id:49,
        name:'Bord (2 platser)',
        tid: "18.00-19.30",
        bordsnummer:'1',
        price: 5,
        category:'S',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser två personer mellan 18.00-19.30"
    }, 
    {
        id:50,
        name:'Bord (2 platser)',
        tid: "19.00-21.00",
        bordsnummer:'1',
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser två personer mellan 19.30-21.00"
    }, 
    {
        id:51,
        name:'Bord (2 platser)',
        tid: "21.00-22.30",
        bordsnummer:'1',
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser två personer mellan 21.00-22.30"
    }, 
    {
        id:52,
        name:'Bord (2 platser)',
        tid: "18.00-19.30",
        bordsnummer:'2',
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser två personer mellan 18.00-19.30"
    }, 
    {
        id:53,
        name:'Bord (2 platser)',
        tid: "19.30-21.00",
        bordsnummer:'2',
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser två personer mellan 19.30-21.00"
    }, 
    {
        id:54,
        name:'Bord (2 platser)',
        tid: "21.00-22.30",
        bordsnummer:'2',
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser två personer mellan 21.00-22.30"
    }, 
    {
        id:55,
        name:'Bord (4 platser)',
        tid: "18.00-19.30",
        bordsnummer:'3',
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser fyra personer mellan 18.00-19.30"
    }, 
    {
        id:56,
        name:'Bord (4 platser)',
        tid: "19.30-21.00",
        bordsnummer:'3',
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser fyra personer mellan 19.30-21.00"
    }, 
    {
        id:57,
        name:'Bord (4 platser)',
        tid: "21.00-22.30",
        bordsnummer:'3',
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser fyra personer mellan 21.00-22.30"
    }, 
    {
        id:58,
        name:'Bord (4 platser)',
        tid: "18.00-19.30",
        bordsnummer:'4',
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser fyra personer mellan 18.00-19.30"
    }, 
    {
        id:59,
        name:'Bord (4 platser)',
        tid: "19.30-21.00",
        bordsnummer:'4',
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser fyra personer mellan 19.30-21.00"
    }, 
    {
        id:60,
        name:'Bord (4 platser)',
        bordsnummer:'4',
        tid: "21.00-22.30",
        price: 5,
        category:'Spa',
        img: require('../assets/restaurang.jpg'),
        description:"Bokningen avser fyra personer mellan 21.00-22.30"
    }, 
   
]


export default items