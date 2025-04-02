import { channelModel } from "./models/channelModel.js";
import { userModel } from "./models/userModel.js";
import { videoModel } from "./models/videoModel.js";

export const getChannelNamebyId = async(data)=>{
    return await Promise.all(
        data.map(async (video) => {
            const channel = await channelModel.findOne({ _id: video.channelId }).select("channelName");
            return { ...video.toObject(), channelName: channel.channelName };
        })
    );

}

export const getuserNamebyId = async(data)=>{
    return await Promise.all(
        data.map(async (user) => {
            const userData = await userModel.findOne({ _id: user.userId }).select("userName");
            return { ...user.toObject(), userName: userData.userName};
        })
    );

}


export const createVideoData = async(channelId)=>{
    const videoDataArray = [
        {
          "kind": "youtube#video",
          "etag": "Rwz6G9uEokQfeB1jj7i4vDJhdxg",
          "id": "8ekJMC8OtGU",
          "snippet": {
            "publishedAt": "2025-03-31T21:54:35Z",
            "channelId": "UCByOQJjav0CUDwxCk-jVNRQ",
            "title": "DRAKE - NOKIA (Official Music Video)",
            "description": "Listen to $ome $exy $ongs 4 U: https://ovo-partynextdoor.ffm.to/4u\n$$$4U Vinyl: https://ffm.link/sss4uvinyl\n\nWebsite: https://drakerelated.com/rooms/bedroom\nInstagram: https://www.instagram.com/champagnepapi/\nTwitter: https://x.com/Drake\nFacebook: https://www.facebook.com/Drake\nYouTube: https://www.youtube.com/@DrakeOfficial/videos\nSpotify: https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4\n\nDirected by Theo Skudra \nProduction Company: denim \nMD/EP: Christian Tyler\nEP: Alex Dall'Orso, Cameron Frengopoulos \nProducer: Jason Aita\nProducers: Cameron Frengopoulos, Alex Dall'Orso, Christian Tyler \nDOP: Kelly Jeffrey\nChoreographer: Tanisha Scott\nSet Design/Scenography: Lewis James \nPD: David Dennis\nStylist: Drew Ferguson \nEditor: Theo Skudra \nColorist: Myles Bevan\nIMAX\nEP: John Turner\nSupervisor, Post Production: Greg Ciaccio \nTechnical Advisor: Paul Constantinou \nDirector, Production DMR: Peter Osborn\nSupervisor Soundtrack Mastering: Devon Hoare\nScanning & Film Recording: Fred Masselink, Germán Núñez \nFilm Technicians: Irving Barrios, Ivan Tobar, Anacleto Burgos Associate Producer: Amber Warus\nProduction Supervisor: Avery Chan \nCoordinator: Connor Brown\nTalent Coord: Thomas Masmejean\n1st AD: Chris Simon \n2nd AD: Chavin Martel UPM: Michael Starr\nIMAX Tech: Scott Hoffman \nIMAX Focus Puller: Jeff Packer \nIMAX 2nd AC: Nathan O'Brien \nIMAX Loader: Dave Stuart\n35mm Focus Puller: Matthew Veen \n35mm 2nd AC: Susan Liu\nVTR: Dylan Pouliot, Kristian Wood \nVTR Assist: Makar Bougaev\nLead Photographer: Norman Wong \nStills Assist: Patrick Marcoux\nBTS: Dylan Reid, Tristan Clarke-McMurchy, Brian Mergulhao, Kit Weyman Gaffer: Neil Munro\nBest Boy: Steve Murray Board OP: Stephen Gotschel\nKey Grip: Adam McDonald \nBest Boy: Chris Davies\nCrane Operator: Richard D Leko\nArt Director: Michael Cameron \nDecorator: Brenden Nerfa \nBuyer: Nikhil Venugopal \nIllustration: Lucas Gordon\nKey Props: Allen Pavela\nSPFX Lead: Roberts Cifersons \nSPFX Key: Patrick Svilans\nSPFX Assist: Tom Hobson, Andrew Surmeyan \nCarp Lead: Allen Barriento, Lance Rotten\nWardrobe Designer/Stylist Assist: Sofia Andrade \nWardrobe Designer: Hilary Olsen, Zoba Martin\nWardrobe Assist: Lilyana Khoshaba, Sabrina Campana, Bea Evans Seamstress: Lynne Weare\nDrake’s HMUA: Luisa Duran \nKey HMUA: Sierra Elliot\nHMU Assist: Gabrielle Jovellanos, Lori Fabrizio\nAssist Editor: Nic Houghton\nPost Producer: Chantelle Blagrove \nColour and Finishing: Studio RM \nHead of Colour: Tomas Katter \nColour EP: Mike Coley\nColour Producer: Paloma Bido \nLead VFX: Miriam Oladejo \nVFX: Koffee Coley\nOnline Editor: Max Sharman \n3D Artist: Reduciano\nLED Visuals: Ben Wollin, Frank Xavier\nIntro Composition: Chris Stiliadis, Jimmy Nguyen\nRoller Girls: Javelyn Lewis, Kyria Fischl \nWelders: Brendan Ruck, David Nolan \nModel: Luiza Khovanska\nAssistant Choreo: Myrosia Palmer, Fizz\nDancers: Adrianna Perryman, Akira Dawn, Alessia Geresolo, Amanda Macevicius, Amanda Videla, Amy Missy, Ange Bailey, Aryanna Silvera, Beatriz Fructuoso, Briia Lewis, Carina Kanaan, Cassandra Toutou, Cherise Christina Williams, Christina De La Cruz, Daisphia Francis, Danah Rosales, Daniela Kareah Calamayan, Destiny Smith, Diane Louis, Faith Sodipo, Oluwagbenisola Gbemi Olajide, Gloria Elogo, Jadien Lyons, Janice Ellis, Jazmine Thomas, Jenna Shortt, Jess Saunders, Jonna Abrams, Jordanae Marie, Julia Baile, Kaliyah Williams, Kayanna Aldred, Lindsay Aquin, Lindsay Fuentes, Marion Kang, Marquisha Sparkes-Whonder, McKenna Warwick, Megan Cartwright, Megan Gonzalvo, Michelle Lin, Meydge Anguiley, Miambi Kasse, Monique Pascall, Myrosia Palmer, Nicole Rosove, Olivia Radcliffe, Patricia Gordon, Petra Ayedzi, Rashae Wilson, Rebecca Chan, Reine Huynh, Rose Harris, Sabrina Ballesteros, Sammi Vassell, Sarah Francis Jones, Seanna Bailey, Sentayehu Kingdon, Serena Tran, Shane Tubog, Shaniece Phillips, Shaniece Watkis, Shayla Lewis, Sofia Khachi, Tayjah Nedrick, Treshonna Wolliston, Vanessa Cobham, Victoria Barrie, Zoe Edwards, Zyanna Rodrigues-Wishart\nTribal Carnival Agency\nCreative Direction & Casting: Celena Seusahai \nLead Body Wear Designer: Gail Seusahai\nBig Mas Costume \nDesigner & Lead: Dexter Seusahai \nAssistant Body Wear Designer: Justin Baird\nCasting: Tyrell MacLennan\nDancers: Adriana Roy - Rohozneanu, Alexia Bowen, Alishia Rampersad, Aneka Campbell, Arnelle Douglas, Briged Beckles Irwin, Celena Seusahai, Chandelle King, Dion-Tae John, Gizelle Fray, Jada Bassaragh, Jadah Idowu, Kadina Diaz, Kayla Thompson, Kam Willie, Kiara Cipriani, Latesha Dailey, Lavanya Sivagnanam, Lorrel Williams, Malika Hull, Merce Arismendy, Mikaylah Jairam, Miriam Ali, Moesha Dominique, Olivia Michalczak, Porsche Williams, Raquelle Castillo, Selena Kwok, ShakivaWilliams, Shea Betton, Shevon Sewbans, Sierrah Singh, Tanisha Teape, Taylor Shin, Tiah Arnold, Tianna Teape, TréAnn Billings-Shaw, Yasmine Johnson\nLA Unit\nService Production Company: freenjoy \nEP/Producer: Nathan Scherrer, Tara Sheree \nProducer: Aiden Magarian\nSet Dresser: Jonathan Rodriguez Shai \nMUA: Esther Foster",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/8ekJMC8OtGU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/8ekJMC8OtGU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/8ekJMC8OtGU/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/8ekJMC8OtGU/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/8ekJMC8OtGU/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Drake",
            "tags": [
              "Drake",
              "Drizzy",
              "NOKIA",
              "Partynextdoor",
              "Some Sexy Songs 4 U",
              "$$$4U"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "DRAKE - NOKIA (Official Music Video)",
              "description": "Listen to $ome $exy $ongs 4 U: https://ovo-partynextdoor.ffm.to/4u\n$$$4U Vinyl: https://ffm.link/sss4uvinyl\n\nWebsite: https://drakerelated.com/rooms/bedroom\nInstagram: https://www.instagram.com/champagnepapi/\nTwitter: https://x.com/Drake\nFacebook: https://www.facebook.com/Drake\nYouTube: https://www.youtube.com/@DrakeOfficial/videos\nSpotify: https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4\n\nDirected by Theo Skudra \nProduction Company: denim \nMD/EP: Christian Tyler\nEP: Alex Dall'Orso, Cameron Frengopoulos \nProducer: Jason Aita\nProducers: Cameron Frengopoulos, Alex Dall'Orso, Christian Tyler \nDOP: Kelly Jeffrey\nChoreographer: Tanisha Scott\nSet Design/Scenography: Lewis James \nPD: David Dennis\nStylist: Drew Ferguson \nEditor: Theo Skudra \nColorist: Myles Bevan\nIMAX\nEP: John Turner\nSupervisor, Post Production: Greg Ciaccio \nTechnical Advisor: Paul Constantinou \nDirector, Production DMR: Peter Osborn\nSupervisor Soundtrack Mastering: Devon Hoare\nScanning & Film Recording: Fred Masselink, Germán Núñez \nFilm Technicians: Irving Barrios, Ivan Tobar, Anacleto Burgos Associate Producer: Amber Warus\nProduction Supervisor: Avery Chan \nCoordinator: Connor Brown\nTalent Coord: Thomas Masmejean\n1st AD: Chris Simon \n2nd AD: Chavin Martel UPM: Michael Starr\nIMAX Tech: Scott Hoffman \nIMAX Focus Puller: Jeff Packer \nIMAX 2nd AC: Nathan O'Brien \nIMAX Loader: Dave Stuart\n35mm Focus Puller: Matthew Veen \n35mm 2nd AC: Susan Liu\nVTR: Dylan Pouliot, Kristian Wood \nVTR Assist: Makar Bougaev\nLead Photographer: Norman Wong \nStills Assist: Patrick Marcoux\nBTS: Dylan Reid, Tristan Clarke-McMurchy, Brian Mergulhao, Kit Weyman Gaffer: Neil Munro\nBest Boy: Steve Murray Board OP: Stephen Gotschel\nKey Grip: Adam McDonald \nBest Boy: Chris Davies\nCrane Operator: Richard D Leko\nArt Director: Michael Cameron \nDecorator: Brenden Nerfa \nBuyer: Nikhil Venugopal \nIllustration: Lucas Gordon\nKey Props: Allen Pavela\nSPFX Lead: Roberts Cifersons \nSPFX Key: Patrick Svilans\nSPFX Assist: Tom Hobson, Andrew Surmeyan \nCarp Lead: Allen Barriento, Lance Rotten\nWardrobe Designer/Stylist Assist: Sofia Andrade \nWardrobe Designer: Hilary Olsen, Zoba Martin\nWardrobe Assist: Lilyana Khoshaba, Sabrina Campana, Bea Evans Seamstress: Lynne Weare\nDrake’s HMUA: Luisa Duran \nKey HMUA: Sierra Elliot\nHMU Assist: Gabrielle Jovellanos, Lori Fabrizio\nAssist Editor: Nic Houghton\nPost Producer: Chantelle Blagrove \nColour and Finishing: Studio RM \nHead of Colour: Tomas Katter \nColour EP: Mike Coley\nColour Producer: Paloma Bido \nLead VFX: Miriam Oladejo \nVFX: Koffee Coley\nOnline Editor: Max Sharman \n3D Artist: Reduciano\nLED Visuals: Ben Wollin, Frank Xavier\nIntro Composition: Chris Stiliadis, Jimmy Nguyen\nRoller Girls: Javelyn Lewis, Kyria Fischl \nWelders: Brendan Ruck, David Nolan \nModel: Luiza Khovanska\nAssistant Choreo: Myrosia Palmer, Fizz\nDancers: Adrianna Perryman, Akira Dawn, Alessia Geresolo, Amanda Macevicius, Amanda Videla, Amy Missy, Ange Bailey, Aryanna Silvera, Beatriz Fructuoso, Briia Lewis, Carina Kanaan, Cassandra Toutou, Cherise Christina Williams, Christina De La Cruz, Daisphia Francis, Danah Rosales, Daniela Kareah Calamayan, Destiny Smith, Diane Louis, Faith Sodipo, Oluwagbenisola Gbemi Olajide, Gloria Elogo, Jadien Lyons, Janice Ellis, Jazmine Thomas, Jenna Shortt, Jess Saunders, Jonna Abrams, Jordanae Marie, Julia Baile, Kaliyah Williams, Kayanna Aldred, Lindsay Aquin, Lindsay Fuentes, Marion Kang, Marquisha Sparkes-Whonder, McKenna Warwick, Megan Cartwright, Megan Gonzalvo, Michelle Lin, Meydge Anguiley, Miambi Kasse, Monique Pascall, Myrosia Palmer, Nicole Rosove, Olivia Radcliffe, Patricia Gordon, Petra Ayedzi, Rashae Wilson, Rebecca Chan, Reine Huynh, Rose Harris, Sabrina Ballesteros, Sammi Vassell, Sarah Francis Jones, Seanna Bailey, Sentayehu Kingdon, Serena Tran, Shane Tubog, Shaniece Phillips, Shaniece Watkis, Shayla Lewis, Sofia Khachi, Tayjah Nedrick, Treshonna Wolliston, Vanessa Cobham, Victoria Barrie, Zoe Edwards, Zyanna Rodrigues-Wishart\nTribal Carnival Agency\nCreative Direction & Casting: Celena Seusahai \nLead Body Wear Designer: Gail Seusahai\nBig Mas Costume \nDesigner & Lead: Dexter Seusahai \nAssistant Body Wear Designer: Justin Baird\nCasting: Tyrell MacLennan\nDancers: Adriana Roy - Rohozneanu, Alexia Bowen, Alishia Rampersad, Aneka Campbell, Arnelle Douglas, Briged Beckles Irwin, Celena Seusahai, Chandelle King, Dion-Tae John, Gizelle Fray, Jada Bassaragh, Jadah Idowu, Kadina Diaz, Kayla Thompson, Kam Willie, Kiara Cipriani, Latesha Dailey, Lavanya Sivagnanam, Lorrel Williams, Malika Hull, Merce Arismendy, Mikaylah Jairam, Miriam Ali, Moesha Dominique, Olivia Michalczak, Porsche Williams, Raquelle Castillo, Selena Kwok, ShakivaWilliams, Shea Betton, Shevon Sewbans, Sierrah Singh, Tanisha Teape, Taylor Shin, Tiah Arnold, Tianna Teape, TréAnn Billings-Shaw, Yasmine Johnson\nLA Unit\nService Production Company: freenjoy \nEP/Producer: Nathan Scherrer, Tara Sheree \nProducer: Aiden Magarian\nSet Dresser: Jonathan Rodriguez Shai \nMUA: Esther Foster"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT4M26S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1654929",
            "likeCount": "195352",
            "favoriteCount": "0",
            "commentCount": "22700"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "YTwB0FYq7N-ByxOHfId58mm9neg",
          "id": "u2WDx6NU66w",
          "snippet": {
            "publishedAt": "2025-04-01T02:23:23Z",
            "channelId": "UCdqp0KK_Io7TwK5cJMBvB0Q",
            "title": "I Bought a Real Formula 1 Car",
            "description": "I was finally able to buy an F1 car after a few hours of saving my money  😍 This was my dream car ever since last week and I’m going to treat it nicely.  \nhttps://drinkalcolo.com\n\nSpecial thanks to @omid_mouazzen for showing me how to drive safely   \n\nMONSTERMAX QUALITY WORKWEAR:\nhttps://www.monstermax.com\n\nCHEAP WHISTLINDIESEL MERCH:\nhttps://whistlindiesel.com",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/u2WDx6NU66w/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/u2WDx6NU66w/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/u2WDx6NU66w/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/u2WDx6NU66w/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/u2WDx6NU66w/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "WhistlinDiesel",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "I Bought a Real Formula 1 Car",
              "description": "I was finally able to buy an F1 car after a few hours of saving my money  😍 This was my dream car ever since last week and I’m going to treat it nicely.  \nhttps://drinkalcolo.com\n\nSpecial thanks to @omid_mouazzen for showing me how to drive safely   \n\nMONSTERMAX QUALITY WORKWEAR:\nhttps://www.monstermax.com\n\nCHEAP WHISTLINDIESEL MERCH:\nhttps://whistlindiesel.com"
            },
            "defaultAudioLanguage": "en-US"
          },
          "contentDetails": {
            "duration": "PT13M24S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1912169",
            "likeCount": "126728",
            "favoriteCount": "0",
            "commentCount": "9134"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "Jnnvg0uRywHfTIwnnq9AwuRJzv0",
          "id": "ZIfUsK_W24s",
          "snippet": {
            "publishedAt": "2025-03-30T17:14:20Z",
            "channelId": "UCiYcA0gJzg855iSKMrX3oHg",
            "title": "BLACK SAMURAI PLAYS HIMSELF",
            "description": "Thank you Ubisoft for sponsoring this video!\nCheck out the game here! https://ubi.li/7Bb7x\n\nREAD MY MANGA: https://monsterswemake.com/\n\nJoin ► http://bit.ly/1vKSGtU\nTiktok ► https://www.tiktok.com/@notcoryxkenshin\nTwitter ► https://twitter.com/coryxkenshin\nInstagram ► http://instagram.com/coryxkenshin\n\nMusic:\nhttps://www.youtube.com/user/myuuji\nhttps://incompetech.com/music/royalty-free/music.html\n\nJesus said to love one another and that we should be servants to each other, so I would ask that you all do that in the comment section. Be respectful. We are a community. That means more to me than anything. Thank you.\n\n~CK\n\n#coryxkenshin #assassinscreedshadows #assassinscreed",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/ZIfUsK_W24s/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/ZIfUsK_W24s/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/ZIfUsK_W24s/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/ZIfUsK_W24s/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/ZIfUsK_W24s/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "CoryxKenshin",
            "tags": [
              "assassins creed shadows",
              "assassins",
              "creed",
              "shadows",
              "game",
              "gameplay",
              "ac shadows",
              "yasuke",
              "naoe",
              "black",
              "samurai",
              "plays",
              "himself",
              "coryxkenshin",
              "cory",
              "kenshin",
              "ubisoft",
              "playthrough",
              "part 1"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "BLACK SAMURAI PLAYS HIMSELF",
              "description": "Thank you Ubisoft for sponsoring this video!\nCheck out the game here! https://ubi.li/7Bb7x\n\nREAD MY MANGA: https://monsterswemake.com/\n\nJoin ► http://bit.ly/1vKSGtU\nTiktok ► https://www.tiktok.com/@notcoryxkenshin\nTwitter ► https://twitter.com/coryxkenshin\nInstagram ► http://instagram.com/coryxkenshin\n\nMusic:\nhttps://www.youtube.com/user/myuuji\nhttps://incompetech.com/music/royalty-free/music.html\n\nJesus said to love one another and that we should be servants to each other, so I would ask that you all do that in the comment section. Be respectful. We are a community. That means more to me than anything. Thank you.\n\n~CK\n\n#coryxkenshin #assassinscreedshadows #assassinscreed"
            },
            "defaultAudioLanguage": "en-US"
          },
          "contentDetails": {
            "duration": "PT42M25S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "4110635",
            "likeCount": "352553",
            "favoriteCount": "0",
            "commentCount": "35105"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "a0aGU1UQvT2J37V46jI1InCzkwk",
          "id": "mhWPHwmZDFU",
          "snippet": {
            "publishedAt": "2025-03-31T16:00:05Z",
            "channelId": "UCKbNOpmhmwBuJXXMYOg_txA",
            "title": "10 Things Ray Can’t Live Without | 10 Essentials",
            "description": "Chen-Ruei ‘Ray’ Hsu (rayasianboy) joins GQ Sports to reveal his 10 Essentials. The Taiwanese YouTuber and Twitch streamer breaks down his daily essentials: from Kai Cenat to his camera (“how ya’ll seeing me and harassing me, this right here”). Watch the full episode of GQ Sports’ 10 Essentials, as Ray reveals 10 things he can’t live without.\r\n\r\n#Ray #RayLive #GQ\r\n\r\n00:00 - Ray’s 10 Essentials\r\n00:12 - Visa & passport\r\n01:08 - Snacks\r\n02:30 - ???\r\n04:53 - Taiwan\r\n06:11 - Basketball\r\n06:50 - Slides\r\n07:24 - AirPods\r\n07:56 - Clothes\r\n08:39 - Toiletry bag\r\n10:07 - Camera\r\n\r\nGQ Sports recommends:\r\nhttps://www.youtube.com/watch?v=AikVajk3uew\r\nhttps://www.youtube.com/watch?v=WaxmPWwqZls\r\nhttps://www.youtube.com/watch?v=GiWRiLkrl6E\r\n\r\nWatch more from GQ Sports | 10 Essentials: \r\nhttps://www.youtube.com/playlist?list=PLq2bex1rbR6EGnR50TdhtO7wFrWEhaGEA\r\n\r\nWatch more from GQ Sports:\r\nhttps://www.youtube.com/watch?v=UzpkxMHSu5w\r\nhttps://www.youtube.com/watch?v=mHK9xmosFwQ\r\nhttps://www.youtube.com/watch?v=xNyH3jykiSE\n\nWith GQ Sports, the real action is off the field. Get an all-access pass to the world's coolest, most stylish athletes with original series like My Essentials, Actually Me, My First Million, Game Points & More. Watch a GQ editor try his hand at pro sports in Above Average Joe. And get an all-access look into how athletes shop, train, travel, and showcase their love of style, menswear, and sneakers.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/mhWPHwmZDFU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/mhWPHwmZDFU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/mhWPHwmZDFU/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/mhWPHwmZDFU/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/mhWPHwmZDFU/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "GQ Sports",
            "tags": [
              "amp",
              "chen-ruei hsu",
              "chen-ruei ‘ray’ hsu",
              "gq",
              "gq sports",
              "kai cenat",
              "kai cenat 10 essentials",
              "kai cenat gq",
              "kai cenat ray",
              "kai cenat rayasianboy",
              "ray",
              "ray kai cenat",
              "ray kai cenat basketball",
              "ray kai cenat fight",
              "ray kai cenat rizz",
              "ray live",
              "ray live channel",
              "ray live stream",
              "ray livestream",
              "rayasianboy",
              "rayasianboy gta",
              "rayasianboy house tour",
              "rayasianboy kai cenat",
              "rayasianboy live",
              "rayasianboy military",
              "sports"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "10 Things Ray Can’t Live Without | 10 Essentials",
              "description": "Chen-Ruei ‘Ray’ Hsu (rayasianboy) joins GQ Sports to reveal his 10 Essentials. The Taiwanese YouTuber and Twitch streamer breaks down his daily essentials: from Kai Cenat to his camera (“how ya’ll seeing me and harassing me, this right here”). Watch the full episode of GQ Sports’ 10 Essentials, as Ray reveals 10 things he can’t live without.\r\n\r\n#Ray #RayLive #GQ\r\n\r\n00:00 - Ray’s 10 Essentials\r\n00:12 - Visa & passport\r\n01:08 - Snacks\r\n02:30 - ???\r\n04:53 - Taiwan\r\n06:11 - Basketball\r\n06:50 - Slides\r\n07:24 - AirPods\r\n07:56 - Clothes\r\n08:39 - Toiletry bag\r\n10:07 - Camera\r\n\r\nGQ Sports recommends:\r\nhttps://www.youtube.com/watch?v=AikVajk3uew\r\nhttps://www.youtube.com/watch?v=WaxmPWwqZls\r\nhttps://www.youtube.com/watch?v=GiWRiLkrl6E\r\n\r\nWatch more from GQ Sports | 10 Essentials: \r\nhttps://www.youtube.com/playlist?list=PLq2bex1rbR6EGnR50TdhtO7wFrWEhaGEA\r\n\r\nWatch more from GQ Sports:\r\nhttps://www.youtube.com/watch?v=UzpkxMHSu5w\r\nhttps://www.youtube.com/watch?v=mHK9xmosFwQ\r\nhttps://www.youtube.com/watch?v=xNyH3jykiSE\n\nWith GQ Sports, the real action is off the field. Get an all-access pass to the world's coolest, most stylish athletes with original series like My Essentials, Actually Me, My First Million, Game Points & More. Watch a GQ editor try his hand at pro sports in Above Average Joe. And get an all-access look into how athletes shop, train, travel, and showcase their love of style, menswear, and sneakers."
            },
            "defaultAudioLanguage": "en-US"
          },
          "contentDetails": {
            "duration": "PT10M58S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1674721",
            "likeCount": "101669",
            "favoriteCount": "0",
            "commentCount": "3425"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "QNJNhrPMgssbZxf4EJnQtaBKPmo",
          "id": "-u_2wzTaqxE",
          "snippet": {
            "publishedAt": "2025-03-30T15:00:01Z",
            "channelId": "UCbaGn5VkOVlcRgIWAHcrJKA",
            "title": "Kalogeras Sisters BLIND DATE on The Button! | Cut",
            "description": "We had the Kalogeras Sisters go on The Button to try and find love! Who was your favorite date?\n\n🛒 🍻  SHOP CUT GAMES! → https://cut.com/play 🍻 🛒\n- Truth or Drink | https://cut.com/playtod\n- Lineup | https://cut.com/playlineup\n- Fear Pong | https://cut.com/playfp \n- TBH | https://cut.com/playtbh \n- Keep it 100 | https://cut.com/k100game \n\nSign up for our newsletter to receive video updates, casting calls, and deals on products! → https://cut.com/deepcut\n\nSubscribe to us here! → https://bit.ly/CutSubscribe\n\n✨ Keep up with us! ✨\n- Official Site | https://cut.com\n- Instagram | https://cut.com/ig\n- TikTok | https://cut.com/tiktok\n- Facebook | https://cut.com/facebook \n- Twitter | https://twitter.com/cut\n- Snapchat | @watchcut \n\nAbout Cut: \nSmall questions have powerful effects when they go viral. Cut spreads stories for fun, for serious, and for real – bringing the internet together one awkward moment at a time.\n\nProduced, directed, and edited by Cut.\nWant to work with us? https://cut.com/jobs \nWant to be in a video? https://cut.com/casting \nWant to sponsor a video? https://cut.com/partnerships\n\nhttps://youtu.be/-u_2wzTaqxE\n\n#Cut #thebutton \n\n© 2025 Cut.com\nhttps://youtube.com/cut",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/-u_2wzTaqxE/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/-u_2wzTaqxE/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/-u_2wzTaqxE/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/-u_2wzTaqxE/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/-u_2wzTaqxE/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Cut",
            "tags": [
              "Cut",
              "Watch Cut",
              "people",
              "people videos",
              "storytelling",
              "relationships",
              "Dating",
              "Interviews",
              "Firsts",
              "couples",
              "exes",
              "love",
              "Kids Try",
              "games",
              "challenges",
              "Ethnic groups",
              "People Interviews",
              "Dares",
              "Truth or Dare",
              "100 ways",
              "blind dates",
              "100 people",
              "experiments",
              "#tbt",
              "party games",
              "Truth or Drink",
              "HiHo Kids",
              "Hiho",
              "college",
              "100 YOB",
              "100 Years of Beauty"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en-US",
            "localized": {
              "title": "Kalogeras Sisters BLIND DATE on The Button! | Cut",
              "description": "We had the Kalogeras Sisters go on The Button to try and find love! Who was your favorite date?\n\n🛒 🍻  SHOP CUT GAMES! → https://cut.com/play 🍻 🛒\n- Truth or Drink | https://cut.com/playtod\n- Lineup | https://cut.com/playlineup\n- Fear Pong | https://cut.com/playfp \n- TBH | https://cut.com/playtbh \n- Keep it 100 | https://cut.com/k100game \n\nSign up for our newsletter to receive video updates, casting calls, and deals on products! → https://cut.com/deepcut\n\nSubscribe to us here! → https://bit.ly/CutSubscribe\n\n✨ Keep up with us! ✨\n- Official Site | https://cut.com\n- Instagram | https://cut.com/ig\n- TikTok | https://cut.com/tiktok\n- Facebook | https://cut.com/facebook \n- Twitter | https://twitter.com/cut\n- Snapchat | @watchcut \n\nAbout Cut: \nSmall questions have powerful effects when they go viral. Cut spreads stories for fun, for serious, and for real – bringing the internet together one awkward moment at a time.\n\nProduced, directed, and edited by Cut.\nWant to work with us? https://cut.com/jobs \nWant to be in a video? https://cut.com/casting \nWant to sponsor a video? https://cut.com/partnerships\n\nhttps://youtu.be/-u_2wzTaqxE\n\n#Cut #thebutton \n\n© 2025 Cut.com\nhttps://youtube.com/cut"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT24M25S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "2517527",
            "likeCount": "101005",
            "favoriteCount": "0",
            "commentCount": "3565"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "XPQ8xYawFJSnzfR7-lNiDasAsNI",
          "id": "y2nu8zpVBmY",
          "snippet": {
            "publishedAt": "2025-03-31T16:00:07Z",
            "channelId": "UCdI8evszfZvyAl2UVCypkTA",
            "title": "Miley Cyrus - Something Beautiful (Official Video)",
            "description": "Official Video for “Something Beautiful” by Miley Cyrus\n\nListen to & Download “Something Beautiful” out now: https://MileyCyrus.lnk.to/SBMC\n\nSomething Beautiful -  Album Out May 30 | Pre-Order Now: https://MileyCyrus.lnk.to/SomethingBeautiful\n\nText 310-388-5120 \n\nMiley’s second song and video release “Something Beautiful,”  the title track off of the forthcoming album explores her deep connection to fashion showcasing an original custom design by Casey Cadwallader for the House of Mugler in the visual. This era marks another bold artistic evolution for Miley, blending music and film into an immersive experience. “Something Beautiful” is now available on all streaming platforms.\n\nLyrics:\n\nTell me something beautiful tonight\nUntil your lips turn blue\nSaid I don’t wanna talk about it for too long\nBaby now I think I do\nAhh ah\nWater to red wine\nKissing to kill time\n\nOh my\nYeah ahh ah\nWatching the doves cry\nInto the sunrise\n\nFlash bang spark\nSend home the guards and lay down your arms\nAnd da da da da da\nThe great golden bomb, bomb, bomb\n\nBoy I’m losing my breath, yes\nBoy you’re marking up my neck-lace\nBoy I’m losing my breath\nI’m undressing and I’m confessing that I’m so obsessed, yes\n\nTell me something beautiful about this world\nWhen I’m in your palm\nI’m like a pearl\nTell me something I can hold on to\nYou’re who I belong to\nI drown in devotion\nAs deep as the ocean\nSo don’t let me go, no no no\n\nFlash bang spark\nLighting up the dark\nBomb bomb\n\nBoy I’m losing my breath, yes\nBoy it’s popping out my chest, yes\nBoy I’m losing my breath, I’m\nI’m undressing and I’m confessing that\nI’m so obsessed, yes\n\nAhhh ahhh ahhh ahhh ahhh\nEat my heart\nAhhh ahhh ahhh ahhh ahhh\nBreak my soul\nAhhh ahhh ahhh ahhh ahhh\nTake my parts\nAhhh ahhh ahhh ahhh ahhh\nLet me go\nAhhh ahhh ahhh ahhh ahhh\nEat my heart\nAhhh ahhh ahhh ahhh ahhh\nBreak my soul\nAhhh ahhh ahhh ahhh ahhh\nTake my parts\nAhhh ahhh ahhh ahhh ahhh\nLet me go\nAhhh ahhh ahhh ahhh ahhh\nEat my heart\nAhhh ahhh ahhh ahhh ahhh\nBreak my soul\nAhhh ahhh ahhh ahhh ahhh\nTake my parts\n\nCredits:\n\nColumbia Records and Live Nation present a Miley Cyrus and XYZ Films Production\nMiley Cyrus “Something Beautiful”\n\nDirected by: Miley Cyrus, Jacob Bixenman, Brendan Walter\nProduced by: Miley Cyrus, Panos Cosmatos, Nick Spicer, Nate Bolotin, Aram Tertzakian\nExecutive Producers: Adam Folk, Ron Perry, Tom Mackay, Krista Wegener, Michael Rapino, Brad Wavra, Ryan Kroft\nAssociate Producer: Marcela Victoria\nDirector of Photography: Benoît Debie\nProduction Designer: David Meyer\nChoreography by: Stephen Galloway\nCostume Design: Bradley Kenneth \nEdited by: Brendan Walter\n\nMusic Produced by: Miley Cyrus, Shawn Everett, Michael Pollack, Jonathan Rado, and Maxx Morando\nEngineered by: Shawn Everett, Ian Gold, and Pièce Eatah at The Village\nAssistant Engineer: JC LeResche\nMixed & Mastered by: Shawn Everett\nMix Assistant: Ian Gold\n\nConnect with Miley Cyrus\nSite: http://mileycyrus.com\nTwitter: https://mileyl.ink/twitter\nInstagram: https://mileyl.ink/instagram\nTikTok: https://mileyl.ink/tiktok\nFacebook: https://mileyl.ink/facebook\nDiscord: https://discord.com/invite/mileycyrus\n\n#MileyCyrus #SomethingBeautiful",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/y2nu8zpVBmY/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/y2nu8zpVBmY/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/y2nu8zpVBmY/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/y2nu8zpVBmY/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/y2nu8zpVBmY/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "MileyCyrusVEVO",
            "tags": [
              "Miley",
              "Miley Something Beautiful",
              "New Miley",
              "Miley Cyrus Album",
              "Something Beautiful Album",
              "Miley Trailer",
              "Miley Visuals",
              "Miley Film",
              "Miley Music Video",
              "Used To Be Young",
              "Endless Summer Vacation",
              "Flowers",
              "can buy myself flowers",
              "River",
              "Jaded",
              "Plastic Hearts",
              "She Is Coming",
              "Younger Now",
              "Miley Cyrus Her Dead Petz",
              "Bangerz",
              "Can’t Be Tamed",
              "The Time Of Our Lives",
              "Breakout",
              "Meet Miley Cyrus",
              "Hannah Montana",
              "Wrecking Ball",
              "We Can’t Stop",
              "Party in the USA",
              "Midnight Sky"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Miley Cyrus - Something Beautiful (Official Video)",
              "description": "Official Video for “Something Beautiful” by Miley Cyrus\n\nListen to & Download “Something Beautiful” out now: https://MileyCyrus.lnk.to/SBMC\n\nSomething Beautiful -  Album Out May 30 | Pre-Order Now: https://MileyCyrus.lnk.to/SomethingBeautiful\n\nText 310-388-5120 \n\nMiley’s second song and video release “Something Beautiful,”  the title track off of the forthcoming album explores her deep connection to fashion showcasing an original custom design by Casey Cadwallader for the House of Mugler in the visual. This era marks another bold artistic evolution for Miley, blending music and film into an immersive experience. “Something Beautiful” is now available on all streaming platforms.\n\nLyrics:\n\nTell me something beautiful tonight\nUntil your lips turn blue\nSaid I don’t wanna talk about it for too long\nBaby now I think I do\nAhh ah\nWater to red wine\nKissing to kill time\n\nOh my\nYeah ahh ah\nWatching the doves cry\nInto the sunrise\n\nFlash bang spark\nSend home the guards and lay down your arms\nAnd da da da da da\nThe great golden bomb, bomb, bomb\n\nBoy I’m losing my breath, yes\nBoy you’re marking up my neck-lace\nBoy I’m losing my breath\nI’m undressing and I’m confessing that I’m so obsessed, yes\n\nTell me something beautiful about this world\nWhen I’m in your palm\nI’m like a pearl\nTell me something I can hold on to\nYou’re who I belong to\nI drown in devotion\nAs deep as the ocean\nSo don’t let me go, no no no\n\nFlash bang spark\nLighting up the dark\nBomb bomb\n\nBoy I’m losing my breath, yes\nBoy it’s popping out my chest, yes\nBoy I’m losing my breath, I’m\nI’m undressing and I’m confessing that\nI’m so obsessed, yes\n\nAhhh ahhh ahhh ahhh ahhh\nEat my heart\nAhhh ahhh ahhh ahhh ahhh\nBreak my soul\nAhhh ahhh ahhh ahhh ahhh\nTake my parts\nAhhh ahhh ahhh ahhh ahhh\nLet me go\nAhhh ahhh ahhh ahhh ahhh\nEat my heart\nAhhh ahhh ahhh ahhh ahhh\nBreak my soul\nAhhh ahhh ahhh ahhh ahhh\nTake my parts\nAhhh ahhh ahhh ahhh ahhh\nLet me go\nAhhh ahhh ahhh ahhh ahhh\nEat my heart\nAhhh ahhh ahhh ahhh ahhh\nBreak my soul\nAhhh ahhh ahhh ahhh ahhh\nTake my parts\n\nCredits:\n\nColumbia Records and Live Nation present a Miley Cyrus and XYZ Films Production\nMiley Cyrus “Something Beautiful”\n\nDirected by: Miley Cyrus, Jacob Bixenman, Brendan Walter\nProduced by: Miley Cyrus, Panos Cosmatos, Nick Spicer, Nate Bolotin, Aram Tertzakian\nExecutive Producers: Adam Folk, Ron Perry, Tom Mackay, Krista Wegener, Michael Rapino, Brad Wavra, Ryan Kroft\nAssociate Producer: Marcela Victoria\nDirector of Photography: Benoît Debie\nProduction Designer: David Meyer\nChoreography by: Stephen Galloway\nCostume Design: Bradley Kenneth \nEdited by: Brendan Walter\n\nMusic Produced by: Miley Cyrus, Shawn Everett, Michael Pollack, Jonathan Rado, and Maxx Morando\nEngineered by: Shawn Everett, Ian Gold, and Pièce Eatah at The Village\nAssistant Engineer: JC LeResche\nMixed & Mastered by: Shawn Everett\nMix Assistant: Ian Gold\n\nConnect with Miley Cyrus\nSite: http://mileycyrus.com\nTwitter: https://mileyl.ink/twitter\nInstagram: https://mileyl.ink/instagram\nTikTok: https://mileyl.ink/tiktok\nFacebook: https://mileyl.ink/facebook\nDiscord: https://discord.com/invite/mileycyrus\n\n#MileyCyrus #SomethingBeautiful"
            }
          },
          "contentDetails": {
            "duration": "PT4M37S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "regionRestriction": {
              "allowed": [
                "AD",
                "AE",
                "AF",
                "AG",
                "AI",
                "AL",
                "AM",
                "AO",
                "AQ",
                "AR",
                "AS",
                "AT",
                "AU",
                "AW",
                "AX",
                "AZ",
                "BA",
                "BB",
                "BD",
                "BE",
                "BF",
                "BG",
                "BH",
                "BI",
                "BJ",
                "BL",
                "BM",
                "BN",
                "BO",
                "BQ",
                "BR",
                "BS",
                "BT",
                "BV",
                "BW",
                "BY",
                "BZ",
                "CA",
                "CC",
                "CD",
                "CF",
                "CG",
                "CH",
                "CI",
                "CK",
                "CL",
                "CM",
                "CN",
                "CO",
                "CR",
                "CU",
                "CV",
                "CW",
                "CX",
                "CY",
                "CZ",
                "DE",
                "DJ",
                "DK",
                "DM",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "EH",
                "ER",
                "ES",
                "ET",
                "FI",
                "FJ",
                "FK",
                "FM",
                "FO",
                "FR",
                "GA",
                "GB",
                "GD",
                "GE",
                "GF",
                "GG",
                "GH",
                "GI",
                "GL",
                "GM",
                "GN",
                "GP",
                "GQ",
                "GR",
                "GS",
                "GT",
                "GU",
                "GW",
                "GY",
                "HK",
                "HM",
                "HN",
                "HR",
                "HT",
                "HU",
                "ID",
                "IE",
                "IL",
                "IM",
                "IN",
                "IO",
                "IQ",
                "IR",
                "IS",
                "IT",
                "JE",
                "JM",
                "JO",
                "JP",
                "KE",
                "KG",
                "KH",
                "KI",
                "KM",
                "KN",
                "KP",
                "KR",
                "KW",
                "KY",
                "KZ",
                "LA",
                "LB",
                "LC",
                "LI",
                "LK",
                "LR",
                "LS",
                "LT",
                "LU",
                "LV",
                "LY",
                "MA",
                "MC",
                "MD",
                "ME",
                "MF",
                "MG",
                "MH",
                "MK",
                "ML",
                "MM",
                "MN",
                "MO",
                "MP",
                "MQ",
                "MR",
                "MS",
                "MT",
                "MU",
                "MV",
                "MW",
                "MX",
                "MY",
                "MZ",
                "NA",
                "NC",
                "NE",
                "NF",
                "NG",
                "NI",
                "NL",
                "NO",
                "NP",
                "NR",
                "NU",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PF",
                "PG",
                "PH",
                "PK",
                "PL",
                "PM",
                "PN",
                "PR",
                "PS",
                "PT",
                "PW",
                "PY",
                "QA",
                "RE",
                "RO",
                "RS",
                "RW",
                "SA",
                "SB",
                "SC",
                "SD",
                "SE",
                "SG",
                "SH",
                "SI",
                "SJ",
                "SK",
                "SL",
                "SM",
                "SN",
                "SO",
                "SR",
                "SS",
                "ST",
                "SV",
                "SX",
                "SY",
                "SZ",
                "TC",
                "TD",
                "TF",
                "TG",
                "TH",
                "TJ",
                "TK",
                "TL",
                "TM",
                "TN",
                "TO",
                "TR",
                "TT",
                "TV",
                "TW",
                "TZ",
                "UA",
                "UG",
                "UM",
                "US",
                "UY",
                "UZ",
                "VA",
                "VC",
                "VE",
                "VG",
                "VI",
                "VN",
                "VU",
                "WF",
                "WS",
                "YE",
                "YT",
                "ZA",
                "ZM",
                "ZW"
              ]
            },
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1184876",
            "likeCount": "104192",
            "favoriteCount": "0",
            "commentCount": "9227"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "CaYslaYTzgy_BETlWlkDsBOtot0",
          "id": "rUv90fPwazo",
          "snippet": {
            "publishedAt": "2025-03-31T06:17:44Z",
            "channelId": "UCJHAT3Uvv-g3I8H3GhHWV7w",
            "title": "The March 30, 2025 Severe Weather Coverage, As It Happened...",
            "description": "Free Live 24/7 Weather Radar And Alerts: https://www.youtube.com/live/SFcykaD6g0M\n \n🔔 SUBSCRIBE and turn on notifications to stay informed about developing weather situations!\n\n⚠️ PLEASE NOTE: This video is meant to supplement official forecasts from the National Weather Service. Always follow forecasts and warnings from local officials.\n\n🌪️ Y'ALL SQUAD DISASTER RELIEF:\nLearn more about our nonprofit organization helping communities affected by severe weather: https://theyallsquad.org  \n\n🛒 SHOP:\nWeather radios, Y'all-O-Meters, and more at https://shopryanhall.com  \n\n#weatherchannel #ryanhall #ryanhallyall\n\nJoin this channel to get access to exclusive perks:\nhttps://www.youtube.com/channel/UCJHAT3Uvv-g3I8H3GhHWV7w/join\n\nSubscribe to these other channels:\nRyan Hall, Y'all XTRA: https://www.youtube.com/@RyanHallYallXTRA\nY'all Squad: https://www.youtube.com/@YallSquad\nMeteorologist Andy Hill: https://www.youtube.com/@metandyhill\n\nCheck out the Y'all Squad discord server!\nhttps://discord.gg/ryanhallyall\n\n📱 FOLLOW FOR UPDATES:\nhttps://www.facebook.com/ryanhallyall\nhttps://twitter.com/ryanhallyall\nhttps://www.instagram.com/ryanhallyall/\nhttps://www.tiktok.com/@ryanhallyall\nhttps://www.twitch.tv/ryanhallyall\n\nOFFICIAL WEBSITE: https://ryanhallyall.com/\n\nBUSINESS INQUIRIES: info@ryanhallyall.com\n\nRyan's PO Box\nPO Box 2668\nPikeville, KY 41501\n\nThe Y'all Squad PO Box\nPO Box 3068 \nPikeville, KY 41501\n\nPlease refer to your local National Weather Service office to get the most reliable and up to date weather information as possible.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/rUv90fPwazo/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/rUv90fPwazo/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/rUv90fPwazo/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/rUv90fPwazo/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/rUv90fPwazo/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Ryan Hall, Y'all",
            "tags": [
              "weather",
              "weather forecasting",
              "forecasting",
              "forecast",
              "wild weather",
              "extreme weather",
              "intense weather",
              "beautiful weather",
              "weather channel",
              "weather hunter",
              "severe weather",
              "major",
              "intense",
              "extreme",
              "historic",
              "blizzard",
              "snow",
              "heavy snow",
              "major snow storm",
              "snowstorm",
              "snow squall",
              "one foot snow",
              "two feet snow",
              "winter storm",
              "tornado",
              "tornado chasing",
              "tornado chasers",
              "storm chasing",
              "storm chasers",
              "tornadoes",
              "ef5",
              "hurricane",
              "major hurricane",
              "ryan hall"
            ],
            "categoryId": "25",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en-US",
            "localized": {
              "title": "The March 30, 2025 Severe Weather Coverage, As It Happened...",
              "description": "Free Live 24/7 Weather Radar And Alerts: https://www.youtube.com/live/SFcykaD6g0M\n \n🔔 SUBSCRIBE and turn on notifications to stay informed about developing weather situations!\n\n⚠️ PLEASE NOTE: This video is meant to supplement official forecasts from the National Weather Service. Always follow forecasts and warnings from local officials.\n\n🌪️ Y'ALL SQUAD DISASTER RELIEF:\nLearn more about our nonprofit organization helping communities affected by severe weather: https://theyallsquad.org  \n\n🛒 SHOP:\nWeather radios, Y'all-O-Meters, and more at https://shopryanhall.com  \n\n#weatherchannel #ryanhall #ryanhallyall\n\nJoin this channel to get access to exclusive perks:\nhttps://www.youtube.com/channel/UCJHAT3Uvv-g3I8H3GhHWV7w/join\n\nSubscribe to these other channels:\nRyan Hall, Y'all XTRA: https://www.youtube.com/@RyanHallYallXTRA\nY'all Squad: https://www.youtube.com/@YallSquad\nMeteorologist Andy Hill: https://www.youtube.com/@metandyhill\n\nCheck out the Y'all Squad discord server!\nhttps://discord.gg/ryanhallyall\n\n📱 FOLLOW FOR UPDATES:\nhttps://www.facebook.com/ryanhallyall\nhttps://twitter.com/ryanhallyall\nhttps://www.instagram.com/ryanhallyall/\nhttps://www.tiktok.com/@ryanhallyall\nhttps://www.twitch.tv/ryanhallyall\n\nOFFICIAL WEBSITE: https://ryanhallyall.com/\n\nBUSINESS INQUIRIES: info@ryanhallyall.com\n\nRyan's PO Box\nPO Box 2668\nPikeville, KY 41501\n\nThe Y'all Squad PO Box\nPO Box 3068 \nPikeville, KY 41501\n\nPlease refer to your local National Weather Service office to get the most reliable and up to date weather information as possible."
            },
            "defaultAudioLanguage": "en-US"
          },
          "contentDetails": {
            "duration": "PT11H49M4S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "2944309",
            "likeCount": "51502",
            "favoriteCount": "0",
            "commentCount": "554"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "_EP_93AXbUXmxPxQmdR4K7Mbu54",
          "id": "XWeUgezquIA",
          "snippet": {
            "publishedAt": "2025-03-31T11:00:20Z",
            "channelId": "UCD1Em4q90ZUK2R5HKesszJg",
            "title": "Unleash Your Inner Clash",
            "description": "It is time to Unleash Your Inner Clash.\n\nWWE Superstars arrive in Clash. Get ready.\n\nFollow us on our Socials!\nTwitter ► https://twitter.com/ClashofClans/\nInstagram ► https://www.instagram.com/clashofclans \nFacebook ► https://www.facebook.com/ClashofClans \nTikTok ► https://www.tiktok.com/@clashofclans\n\nAttack. Defend. Strategize. Download for free for mobile devices. supr.cl/PlayClashOfClans\n\nFrom rage-\u00adfilled Barbarians with glorious mustaches to pyromaniac wizards, raise your own army and lead your clan to victory! Build your village to fend off raiders, battle against millions of players worldwide, and forge a powerful clan with others to destroy enemy clans.\nPLEASE NOTE! Clash of Clans is free to download and play, however some game items can also be purchased for real money \n\nAlso, under our Terms of Service and Privacy Policy, you must be at least 13 years of age to play or download Clash of Clans.\nA network connection is also required.\n\n© 2025 Supercell Oy. CLASH OF CLANS is a trademark of Supercell Oy. All Rights Reserved. Game includes in app purchases and random rewards.\n\nFEATURES\n- Build your village into an unbeatable fortress \n- Raise your own army of Barbarians, Archers, Hog Riders, Wizards, Dragons and other mighty fighters\n- Battle with players worldwide and take their Trophies\n- Join together with other players to form the ultimate Clan\n- Fight against rival Clans in epic Clan Wars \n- Build 18 unique units with multiple levels of upgrades\n- Discover your favorite attacking army from countless combinations of troops, spells, Heroes and Clan reinforcements \n- Defend your village with a multitude of Cannons, Towers, Mortars, Bombs, Traps and Walls\n- Fight against the Goblin King in a campaign through the realm\n\nChief, are you having problems? Visit https://help.supercellsupport.com/clash-of-clans/en/\n\nPrivacy Policy:\nhttps://supercell.com/en/privacy-policy/\n\nTerms of Service:\nhttps://supercell.com/en/terms-of-service/\n\nParent’s Guide:\nhttps://supercell.com/en/parents/\n\n#clashofclans #Clashamania",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/XWeUgezquIA/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/XWeUgezquIA/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/XWeUgezquIA/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/XWeUgezquIA/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/XWeUgezquIA/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Clash of Clans",
            "tags": [
              "clash of clans",
              "COC",
              "Clash of Clans Gameplay",
              "Clash of Clans Strategy",
              "Clash of Clans Animation",
              "Clash of Clans Commercial",
              "Clash of Clans Attacks",
              "Clash of Clans Town Hall",
              "Hog Rider",
              "PEKKA",
              "Clan Wars",
              "season challenges",
              "clan war leagues",
              "clash on",
              "clan game",
              "clan games",
              "clash-a-rama",
              "clasharama",
              "wwe",
              "clashmania",
              "clashamania",
              "wrestlemania",
              "cody rhodes",
              "rhea ripley",
              "undertaker",
              "wwe troop",
              "jey uso",
              "bianca belair",
              "raw"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "Unleash Your Inner Clash",
              "description": "It is time to Unleash Your Inner Clash.\n\nWWE Superstars arrive in Clash. Get ready.\n\nFollow us on our Socials!\nTwitter ► https://twitter.com/ClashofClans/\nInstagram ► https://www.instagram.com/clashofclans \nFacebook ► https://www.facebook.com/ClashofClans \nTikTok ► https://www.tiktok.com/@clashofclans\n\nAttack. Defend. Strategize. Download for free for mobile devices. supr.cl/PlayClashOfClans\n\nFrom rage-\u00adfilled Barbarians with glorious mustaches to pyromaniac wizards, raise your own army and lead your clan to victory! Build your village to fend off raiders, battle against millions of players worldwide, and forge a powerful clan with others to destroy enemy clans.\nPLEASE NOTE! Clash of Clans is free to download and play, however some game items can also be purchased for real money \n\nAlso, under our Terms of Service and Privacy Policy, you must be at least 13 years of age to play or download Clash of Clans.\nA network connection is also required.\n\n© 2025 Supercell Oy. CLASH OF CLANS is a trademark of Supercell Oy. All Rights Reserved. Game includes in app purchases and random rewards.\n\nFEATURES\n- Build your village into an unbeatable fortress \n- Raise your own army of Barbarians, Archers, Hog Riders, Wizards, Dragons and other mighty fighters\n- Battle with players worldwide and take their Trophies\n- Join together with other players to form the ultimate Clan\n- Fight against rival Clans in epic Clan Wars \n- Build 18 unique units with multiple levels of upgrades\n- Discover your favorite attacking army from countless combinations of troops, spells, Heroes and Clan reinforcements \n- Defend your village with a multitude of Cannons, Towers, Mortars, Bombs, Traps and Walls\n- Fight against the Goblin King in a campaign through the realm\n\nChief, are you having problems? Visit https://help.supercellsupport.com/clash-of-clans/en/\n\nPrivacy Policy:\nhttps://supercell.com/en/privacy-policy/\n\nTerms of Service:\nhttps://supercell.com/en/terms-of-service/\n\nParent’s Guide:\nhttps://supercell.com/en/parents/\n\n#clashofclans #Clashamania"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT1M",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": false,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1555381",
            "likeCount": "49230",
            "favoriteCount": "0",
            "commentCount": "3036"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "q0G_lYlCu30gRtsiHOtTQl8XhTw",
          "id": "rmGuetTSWlM",
          "snippet": {
            "publishedAt": "2025-03-31T21:48:06Z",
            "channelId": "UCzTlXb7ivVzuFlugVCv3Kvg",
            "title": "⋆ ★ Secret Sheep ★⋆  | Minecraft Misadventures SMP | Ep. 3",
            "description": "Please *boop* the like button if you enjoy the video! :)\n\nWelcome to Minecraft Misadventures, a new Minecraft SMP where we will be building up our very own D&D inspired world. We've got new mechanics, Dungeons, NPCs and more.\n\nMisadventuers:\nAvid - https://www.youtube.com/@AvidMc\nCambam - https://www.youtube.com/@cambam010gaming\nFwhip - https://www.youtube.com/@fWhip\nInfinitedrift - https://www.youtube.com/@InfiniteDrift\nJoeyGraceffa - https://www.youtube.com/@JoeyGraceffaGames\nJojosolos - https://www.youtube.com/@jojosolos\nKatherine Elizabeth - https://www.youtube.com/@KatherineElizabeth_\nLDShadowlady - https://www.youtube.com/@ldshadowlady\nMartyn InTheLittleWood - https://www.youtube.com/@martyn\nMattranger - https://www.youtube.com/@MrMattRanger\nMogswamp - https://www.youtube.com/@Mogswamp\nMythicalSausage - https://www.youtube.com/@TheMythicalSausage\nOli TheOrionsound - https://www.youtube.com/@TheOrionSound\nPearlescentMoon - https://youtube.com/@PearlescentMoon\nPixlriffs - https://www.youtube.com/@Pixlriffs\nRendog - https://www.youtube.com/@rendog\nSeapeekay - https://www.youtube.com/@SeaPeeKay\nShubble - https://www.youtube.com/@Shubble\nSmajor - https://www.youtube.com/@Dangthatsalongname\nSmallishbeans - https://www.youtube.com/@SmallishBeans\nSolidarity - https://www.youtube.com/@SolidarityGaming\nSoupforEloise - https://www.youtube.com/@soupforeloise\nSunnysev - https://www.youtube.com/@SunnySevMC\nTaneesha - https://www.youtube.com/@Taneeshahogan\nZombieCleo - https://www.youtube.com/@ZombieCleo \n\nMore info: https://land-of-misadventures.fandom.com/wiki/Land_of_Misadventures_Wiki\n\nFOLLOW ME HERE:\nTwitter: https://twitter.com/LDShadowLady\nFacebook: https://www.facebook.com/LDShadowLadyFB\nInstagram: http://www.instagram.com/ldshadowlady\nTwitch: http://www.twitch.tv/ldshadowlady\n\nCheck out Joel's gaming channel:\nhttp://www.youtube.com/SmallishBeans",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/rmGuetTSWlM/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/rmGuetTSWlM/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/rmGuetTSWlM/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/rmGuetTSWlM/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/rmGuetTSWlM/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "LDShadowLady",
            "tags": [
              "ldshadowlady",
              "minecraft",
              "mini game",
              "girl gamer",
              "pink hair",
              "funny",
              "walkthrough"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en-GB",
            "localized": {
              "title": "⋆ ★ Secret Sheep ★⋆  | Minecraft Misadventures SMP | Ep. 3",
              "description": "Please *boop* the like button if you enjoy the video! :)\n\nWelcome to Minecraft Misadventures, a new Minecraft SMP where we will be building up our very own D&D inspired world. We've got new mechanics, Dungeons, NPCs and more.\n\nMisadventuers:\nAvid - https://www.youtube.com/@AvidMc\nCambam - https://www.youtube.com/@cambam010gaming\nFwhip - https://www.youtube.com/@fWhip\nInfinitedrift - https://www.youtube.com/@InfiniteDrift\nJoeyGraceffa - https://www.youtube.com/@JoeyGraceffaGames\nJojosolos - https://www.youtube.com/@jojosolos\nKatherine Elizabeth - https://www.youtube.com/@KatherineElizabeth_\nLDShadowlady - https://www.youtube.com/@ldshadowlady\nMartyn InTheLittleWood - https://www.youtube.com/@martyn\nMattranger - https://www.youtube.com/@MrMattRanger\nMogswamp - https://www.youtube.com/@Mogswamp\nMythicalSausage - https://www.youtube.com/@TheMythicalSausage\nOli TheOrionsound - https://www.youtube.com/@TheOrionSound\nPearlescentMoon - https://youtube.com/@PearlescentMoon\nPixlriffs - https://www.youtube.com/@Pixlriffs\nRendog - https://www.youtube.com/@rendog\nSeapeekay - https://www.youtube.com/@SeaPeeKay\nShubble - https://www.youtube.com/@Shubble\nSmajor - https://www.youtube.com/@Dangthatsalongname\nSmallishbeans - https://www.youtube.com/@SmallishBeans\nSolidarity - https://www.youtube.com/@SolidarityGaming\nSoupforEloise - https://www.youtube.com/@soupforeloise\nSunnysev - https://www.youtube.com/@SunnySevMC\nTaneesha - https://www.youtube.com/@Taneeshahogan\nZombieCleo - https://www.youtube.com/@ZombieCleo \n\nMore info: https://land-of-misadventures.fandom.com/wiki/Land_of_Misadventures_Wiki\n\nFOLLOW ME HERE:\nTwitter: https://twitter.com/LDShadowLady\nFacebook: https://www.facebook.com/LDShadowLadyFB\nInstagram: http://www.instagram.com/ldshadowlady\nTwitch: http://www.twitch.tv/ldshadowlady\n\nCheck out Joel's gaming channel:\nhttp://www.youtube.com/SmallishBeans"
            },
            "defaultAudioLanguage": "en-GB"
          },
          "contentDetails": {
            "duration": "PT11M37S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "263586",
            "likeCount": "26615",
            "favoriteCount": "0",
            "commentCount": "3800"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "w5zwgQ4iIP5CgtGORrcVeuAOopM",
          "id": "wJsFlCQcwrw",
          "snippet": {
            "publishedAt": "2025-03-30T19:26:15Z",
            "channelId": "UCTSRIY3GLFYIpkR2QwyeklA",
            "title": "I watched every SNL movie",
            "description": "Go to https://expressvpn.com/DREW and find out how you can get 4 months of ExpressVPN free!\n\nlast chance to get merch: https://www.drewgoodenshop.com/\n\n0:00 - intro\n1:05 - The Blues Brothers\n5:39 - Wayne's World 1 & 2\n10:23 - Coneheads\n14:37 - It's Pat\n22:01 - Stuart Saves His Family\n23:45 - Blues Brothers 2000\n26:55 - Night at the Roxbury\n28:40 - Superstar\n31:06 - The Ladies Man\n33:16 - MacGruber\n36:59 - is that it?\n\nfollow me:\r\ntwitter - https://www.twitter.com/drewisgooden\r\ninstagram - https://www.instagram.com/drewisgooden",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/wJsFlCQcwrw/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/wJsFlCQcwrw/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/wJsFlCQcwrw/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/wJsFlCQcwrw/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/wJsFlCQcwrw/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Drew Gooden",
            "tags": [
              "drew gooden",
              "comedy",
              "commentary",
              "reaction",
              "vine",
              "drew gooden vine",
              "road work ahead guy",
              "parody",
              "rant",
              "cringe",
              "snl",
              "saturday night live",
              "movies",
              "reviews"
            ],
            "categoryId": "23",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "I watched every SNL movie",
              "description": "Go to https://expressvpn.com/DREW and find out how you can get 4 months of ExpressVPN free!\n\nlast chance to get merch: https://www.drewgoodenshop.com/\n\n0:00 - intro\n1:05 - The Blues Brothers\n5:39 - Wayne's World 1 & 2\n10:23 - Coneheads\n14:37 - It's Pat\n22:01 - Stuart Saves His Family\n23:45 - Blues Brothers 2000\n26:55 - Night at the Roxbury\n28:40 - Superstar\n31:06 - The Ladies Man\n33:16 - MacGruber\n36:59 - is that it?\n\nfollow me:\r\ntwitter - https://www.twitter.com/drewisgooden\r\ninstagram - https://www.instagram.com/drewisgooden"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT40M59S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1972725",
            "likeCount": "111455",
            "favoriteCount": "0",
            "commentCount": "8203"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "DnP_rgAbTNgDU77GE5rrYFRYryI",
          "id": "qtMX433eiGM",
          "snippet": {
            "publishedAt": "2025-03-30T21:07:35Z",
            "channelId": "UCyps-v4WNjWDnYRKmZ4BUGw",
            "title": "I Asked 100 Celebrities For Their Phone Numbers",
            "description": "Start your business today with Shopify! \nhttp://shopify.com/airrack\n\nFollow me on Instagram!\nINSTAGRAM ▶️ https://urlgeni.us/instagram/jBHg\n\nJoin the Airrack Games→ http://Whop.com/airrack\n\nI’m hiring! Apply for jobs here http://www.airrackjobs.com\n\nOutro song ▶️ Axel Thesleff - Bad Karma\nYouTube: https://bit.ly/3k6Uadj\nSpotify: https://spoti.fi/3odq3TN\nInstagram: https://bit.ly/3lsccaz",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/qtMX433eiGM/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/qtMX433eiGM/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/qtMX433eiGM/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/qtMX433eiGM/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/qtMX433eiGM/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Airrack",
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "I Asked 100 Celebrities For Their Phone Numbers",
              "description": "Start your business today with Shopify! \nhttp://shopify.com/airrack\n\nFollow me on Instagram!\nINSTAGRAM ▶️ https://urlgeni.us/instagram/jBHg\n\nJoin the Airrack Games→ http://Whop.com/airrack\n\nI’m hiring! Apply for jobs here http://www.airrackjobs.com\n\nOutro song ▶️ Axel Thesleff - Bad Karma\nYouTube: https://bit.ly/3k6Uadj\nSpotify: https://spoti.fi/3odq3TN\nInstagram: https://bit.ly/3lsccaz"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT41M55S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1933188",
            "likeCount": "71395",
            "favoriteCount": "0",
            "commentCount": "60293"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "irMQsY69xpMtCZu5jREIE-M37lo",
          "id": "8nilP--GFLY",
          "snippet": {
            "publishedAt": "2025-03-31T15:19:15Z",
            "channelId": "UC6107grRI4m0o2-emgoDnAA",
            "title": "The Mystery of Impact Flashes - Smarter Every Day 307",
            "description": "A big thanks to Henson for sponsoring this video. Check them out at http://hensonshaving.com/smarter (Make sure the 100 pack is in your cart to get them for free.)\n\nWant to get an email when I upload?\nhttps://www.smartereveryday.com/email-list\n\nA big thanks to Brett from How Ridiculous and Gavin from The Slow Mo Guys\nhttps://www.youtube.com/@howridiculous\nhttps://www.youtube.com/@theslowmoguys\n\n⇊  Click below for more links!  ⇊\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nGET SMARTER SECTION\nWowis this a deep rabbit hole you can go down!  Here's some papers to get you started!\n\n\"Survey of the literature on mechanoluminescence from 1605 to 2013\"\nhttps://analyticalsciencejournals.onlinelibrary.wiley.com/doi/abs/10.1002/bio.2647\n\n\"Using mechanoluminescence as a low-cost, non-destructive diagnostic method for transient polymer impact processes\"\nhttps://www.sciencedirect.com/science/article/abs/pii/S0263224119310395\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nSmarter Every Day on Patreon\nhttp://www.patreon.com/smartereveryday\n\nAmbiance, audio and musicy things by: Gordon McGladdery \nhttps://www.ashellinthepit.com/\nhttp://ashellinthepit.bandcamp.com/\n\nIf you feel like this video was worth your time and added value to your life, please SHARE THE VIDEO!\n\nIf you REALLY liked it, and would like to support Smarter Every Day by becoming a Patron I'd be grateful.\nhttp://www.patreon.com/smartereveryday\n\nWarm Regards,\n\nDestin",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/8nilP--GFLY/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/8nilP--GFLY/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/8nilP--GFLY/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/8nilP--GFLY/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/8nilP--GFLY/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "SmarterEveryDay",
            "tags": [
              "Smarter",
              "Every",
              "Day",
              "Science",
              "Physics",
              "Destin",
              "Sandlin",
              "Education",
              "Math",
              "Smarter Every Day",
              "experiment",
              "nature",
              "demonstration",
              "slow",
              "motion",
              "slow motion",
              "education",
              "math",
              "science",
              "science education",
              "what is science",
              "Physics of",
              "projects",
              "experiments",
              "science projects",
              "triboluminescence",
              "mechanoluminescence",
              "fractoluminescence",
              "sonoluminescence",
              "adiabatic compression",
              "fracture mechanics",
              "slow mo guys",
              "how ridiculous",
              "taylor impact test",
              "Impact Flashes",
              "Impact",
              "Projectile Impact",
              "Ballistics",
              "Glass Spheres"
            ],
            "categoryId": "28",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "The Mystery of Impact Flashes - Smarter Every Day 307",
              "description": "A big thanks to Henson for sponsoring this video. Check them out at http://hensonshaving.com/smarter (Make sure the 100 pack is in your cart to get them for free.)\n\nWant to get an email when I upload?\nhttps://www.smartereveryday.com/email-list\n\nA big thanks to Brett from How Ridiculous and Gavin from The Slow Mo Guys\nhttps://www.youtube.com/@howridiculous\nhttps://www.youtube.com/@theslowmoguys\n\n⇊  Click below for more links!  ⇊\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nGET SMARTER SECTION\nWowis this a deep rabbit hole you can go down!  Here's some papers to get you started!\n\n\"Survey of the literature on mechanoluminescence from 1605 to 2013\"\nhttps://analyticalsciencejournals.onlinelibrary.wiley.com/doi/abs/10.1002/bio.2647\n\n\"Using mechanoluminescence as a low-cost, non-destructive diagnostic method for transient polymer impact processes\"\nhttps://www.sciencedirect.com/science/article/abs/pii/S0263224119310395\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nSmarter Every Day on Patreon\nhttp://www.patreon.com/smartereveryday\n\nAmbiance, audio and musicy things by: Gordon McGladdery \nhttps://www.ashellinthepit.com/\nhttp://ashellinthepit.bandcamp.com/\n\nIf you feel like this video was worth your time and added value to your life, please SHARE THE VIDEO!\n\nIf you REALLY liked it, and would like to support Smarter Every Day by becoming a Patron I'd be grateful.\nhttp://www.patreon.com/smartereveryday\n\nWarm Regards,\n\nDestin"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT47M13S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "792526",
            "likeCount": "38532",
            "favoriteCount": "0",
            "commentCount": "9610"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "trt__kgGUmH0Az2FR2vUBHxLurc",
          "id": "sqEWXVn4-VM",
          "snippet": {
            "publishedAt": "2025-03-31T12:01:19Z",
            "channelId": "UCdI8evszfZvyAl2UVCypkTA",
            "title": "Miley Cyrus - Prelude (Official Video)",
            "description": "Official Video for “Prelude” by Miley Cyrus \n\nListen to & Download “Prelude” out now: https://MileyCyrus.lnk.to/Prelude\n\nSomething Beautiful -  Album Out May 30 | Pre-Order Now: https://MileyCyrus.lnk.to/SomethingBeautiful\n\nText 310-388-5120 \n\nMiley Cyrus releases “Prelude” the first song and visual from her ninth studio album, Something Beautiful available May 30, 2025. “Prelude” features Miley wearing archival 1997 Thierry Mugler couture, as seen on the album artwork, shot by renowned fashion photographer Glen Luchford. The film’s cinematography is helmed by Benoît Debie, adding to its striking visual narrative. “Prelude” is now available on all streaming platforms.\n\nLyrics:\n\nLike when following an image from a train\nYour eyes can’t keep the passing landscapes from being swallowed into endless distance\n\nLike when holding a fist full of ashes your hands can’t save the things that have already been dissolved into air\nLike when facing the sun thru a window your skin feels warmth but you can’t be in the world that its warmth has made alive\nLike walking alone thru a lucid dream like saying your name aloud in an empty room\nLike witnessing my body standing in a mirror aching to be seen, aching to become real\nBut the beauty one finds alone is a prayer that longs to be shared\n\nCredits:\n\nColumbia Records and Live Nation present a Miley Cyrus and XYZ Films Production\nMiley Cyrus “Something Beautiful”\n\nDirected by: Miley Cyrus, Jacob Bixenman, Brendan Walter\nProduced by: Miley Cyrus, Panos Cosmatos, Nick Spicer, Nate Bolotin, Aram Tertzakian\nExecutive Producers: Adam Folk, Ron Perry, Tom Mackay, Krista Wegener, Michael Rapino, Brad Wavra, Ryan Kroft\nAssociate Producer: Marcela Victoria\nDirector of Photography: Benoît Debie\nProduction Designer: David Meyer\nChoreography by: Stephen Galloway\nCostume Design: Bradley Kenneth \nEdited by: Brendan Walter\n\nMusic Produced by: Miley Cyrus, Shawn Everett, Michael Pollack, Jonathan Rado, and Maxx Morando\nEngineered by: Shawn Everett, Ian Gold, and Pièce Eatah at The Village\nAssistant Engineer: JC LeResche\nMixed & Mastered by: Shawn Everett\nMix Assistant: Ian Gold\n\nConnect with Miley Cyrus\nSite: http://mileycyrus.com\nTwitter: https://mileyl.ink/twitter\nInstagram: https://mileyl.ink/instagram\nTikTok: https://mileyl.ink/tiktok\nFacebook: https://mileyl.ink/facebook\nDiscord: https://discord.com/invite/mileycyrus\n\n#MileyCyrus #Prelude #SomethingBeautiful",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/sqEWXVn4-VM/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/sqEWXVn4-VM/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/sqEWXVn4-VM/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/sqEWXVn4-VM/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/sqEWXVn4-VM/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "MileyCyrusVEVO",
            "tags": [
              "Miley",
              "Something Beautiful",
              "Miley Something Beautiful",
              "New Miley",
              "Miley Cyrus Album",
              "Something Beautiful Album",
              "Miley Trailer",
              "Miley Visuals",
              "Miley Film",
              "Miley Music Video",
              "Used To Be Young",
              "Endless Summer Vacation",
              "Flowers",
              "can buy myself flowers",
              "River",
              "Jaded",
              "Plastic Hearts",
              "She Is Coming",
              "Younger Now",
              "Miley Cyrus Her Dead Petz",
              "Bangerz",
              "Can’t Be Tamed",
              "The Time Of Our Lives",
              "Breakout",
              "Meet Miley Cyrus",
              "Hannah Montana",
              "Wrecking Ball",
              "We Can’t Stop"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Miley Cyrus - Prelude (Official Video)",
              "description": "Official Video for “Prelude” by Miley Cyrus \n\nListen to & Download “Prelude” out now: https://MileyCyrus.lnk.to/Prelude\n\nSomething Beautiful -  Album Out May 30 | Pre-Order Now: https://MileyCyrus.lnk.to/SomethingBeautiful\n\nText 310-388-5120 \n\nMiley Cyrus releases “Prelude” the first song and visual from her ninth studio album, Something Beautiful available May 30, 2025. “Prelude” features Miley wearing archival 1997 Thierry Mugler couture, as seen on the album artwork, shot by renowned fashion photographer Glen Luchford. The film’s cinematography is helmed by Benoît Debie, adding to its striking visual narrative. “Prelude” is now available on all streaming platforms.\n\nLyrics:\n\nLike when following an image from a train\nYour eyes can’t keep the passing landscapes from being swallowed into endless distance\n\nLike when holding a fist full of ashes your hands can’t save the things that have already been dissolved into air\nLike when facing the sun thru a window your skin feels warmth but you can’t be in the world that its warmth has made alive\nLike walking alone thru a lucid dream like saying your name aloud in an empty room\nLike witnessing my body standing in a mirror aching to be seen, aching to become real\nBut the beauty one finds alone is a prayer that longs to be shared\n\nCredits:\n\nColumbia Records and Live Nation present a Miley Cyrus and XYZ Films Production\nMiley Cyrus “Something Beautiful”\n\nDirected by: Miley Cyrus, Jacob Bixenman, Brendan Walter\nProduced by: Miley Cyrus, Panos Cosmatos, Nick Spicer, Nate Bolotin, Aram Tertzakian\nExecutive Producers: Adam Folk, Ron Perry, Tom Mackay, Krista Wegener, Michael Rapino, Brad Wavra, Ryan Kroft\nAssociate Producer: Marcela Victoria\nDirector of Photography: Benoît Debie\nProduction Designer: David Meyer\nChoreography by: Stephen Galloway\nCostume Design: Bradley Kenneth \nEdited by: Brendan Walter\n\nMusic Produced by: Miley Cyrus, Shawn Everett, Michael Pollack, Jonathan Rado, and Maxx Morando\nEngineered by: Shawn Everett, Ian Gold, and Pièce Eatah at The Village\nAssistant Engineer: JC LeResche\nMixed & Mastered by: Shawn Everett\nMix Assistant: Ian Gold\n\nConnect with Miley Cyrus\nSite: http://mileycyrus.com\nTwitter: https://mileyl.ink/twitter\nInstagram: https://mileyl.ink/instagram\nTikTok: https://mileyl.ink/tiktok\nFacebook: https://mileyl.ink/facebook\nDiscord: https://discord.com/invite/mileycyrus\n\n#MileyCyrus #Prelude #SomethingBeautiful"
            }
          },
          "contentDetails": {
            "duration": "PT2M37S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "regionRestriction": {
              "allowed": [
                "AD",
                "AE",
                "AF",
                "AG",
                "AI",
                "AL",
                "AM",
                "AO",
                "AQ",
                "AR",
                "AS",
                "AT",
                "AU",
                "AW",
                "AX",
                "AZ",
                "BA",
                "BB",
                "BD",
                "BE",
                "BF",
                "BG",
                "BH",
                "BI",
                "BJ",
                "BL",
                "BM",
                "BN",
                "BO",
                "BQ",
                "BR",
                "BS",
                "BT",
                "BV",
                "BW",
                "BY",
                "BZ",
                "CA",
                "CC",
                "CD",
                "CF",
                "CG",
                "CH",
                "CI",
                "CK",
                "CL",
                "CM",
                "CN",
                "CO",
                "CR",
                "CU",
                "CV",
                "CW",
                "CX",
                "CY",
                "CZ",
                "DE",
                "DJ",
                "DK",
                "DM",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "EH",
                "ER",
                "ES",
                "ET",
                "FI",
                "FJ",
                "FK",
                "FM",
                "FO",
                "FR",
                "GA",
                "GB",
                "GD",
                "GE",
                "GF",
                "GG",
                "GH",
                "GI",
                "GL",
                "GM",
                "GN",
                "GP",
                "GQ",
                "GR",
                "GS",
                "GT",
                "GU",
                "GW",
                "GY",
                "HK",
                "HM",
                "HN",
                "HR",
                "HT",
                "HU",
                "ID",
                "IE",
                "IL",
                "IM",
                "IN",
                "IO",
                "IQ",
                "IR",
                "IS",
                "IT",
                "JE",
                "JM",
                "JO",
                "JP",
                "KE",
                "KG",
                "KH",
                "KI",
                "KM",
                "KN",
                "KP",
                "KR",
                "KW",
                "KY",
                "KZ",
                "LA",
                "LB",
                "LC",
                "LI",
                "LK",
                "LR",
                "LS",
                "LT",
                "LU",
                "LV",
                "LY",
                "MA",
                "MC",
                "MD",
                "ME",
                "MF",
                "MG",
                "MH",
                "MK",
                "ML",
                "MM",
                "MN",
                "MO",
                "MP",
                "MQ",
                "MR",
                "MS",
                "MT",
                "MU",
                "MV",
                "MW",
                "MX",
                "MY",
                "MZ",
                "NA",
                "NC",
                "NE",
                "NF",
                "NG",
                "NI",
                "NL",
                "NO",
                "NP",
                "NR",
                "NU",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PF",
                "PG",
                "PH",
                "PK",
                "PL",
                "PM",
                "PN",
                "PR",
                "PS",
                "PT",
                "PW",
                "PY",
                "QA",
                "RE",
                "RO",
                "RS",
                "RW",
                "SA",
                "SB",
                "SC",
                "SD",
                "SE",
                "SG",
                "SH",
                "SI",
                "SJ",
                "SK",
                "SL",
                "SM",
                "SN",
                "SO",
                "SR",
                "SS",
                "ST",
                "SV",
                "SX",
                "SY",
                "SZ",
                "TC",
                "TD",
                "TF",
                "TG",
                "TH",
                "TJ",
                "TK",
                "TL",
                "TM",
                "TN",
                "TO",
                "TR",
                "TT",
                "TV",
                "TW",
                "TZ",
                "UA",
                "UG",
                "UM",
                "US",
                "UY",
                "UZ",
                "VA",
                "VC",
                "VE",
                "VG",
                "VI",
                "VN",
                "VU",
                "WF",
                "WS",
                "YE",
                "YT",
                "ZA",
                "ZM",
                "ZW"
              ]
            },
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "533559",
            "likeCount": "43919",
            "favoriteCount": "0",
            "commentCount": "3130"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "pLGpd18PeXYORLiNoguFW0X-Ccs",
          "id": "-XwQwynG7Nc",
          "snippet": {
            "publishedAt": "2025-03-31T21:04:37Z",
            "channelId": "UC98WsFnuhfS3uT8PwdYCjbw",
            "title": "d4vd - What Are You Waiting For (Official Music Video) ft. Pokimane & Jasontheween",
            "description": "#d4vd #pokimane #jasontheween \n\nListen to “What Are You Waiting For?”: https://d4vd.lnk.to/WAYWF\n\npre-order ‘WITHERED’ the debut album, out 4/25 : https://d4vd.lnk.to/WITHEREDYP\nshop new ANIME WITHERED VINYL and KAWAII MERCH: https://d4vd.lnk.to/storeYP\nshop signed WITHERED vinyl & CDs: https://d4vd.lnk.to/storeYP\n\nFollow d4vd:\nMailing List - http://d4vd.io/mailinglist\nDiscord - https://discord.gg/d4vd\nInstagram - https://www.instagram.com/d4vddd/\nTwitter - https://twitter.com/d4vddd\nTikTok - https://www.tiktok.com/@d4vdd\nFacebook - http://facebook.com/d4vdd\nSoundcloud - https://soundcloud.com/d4vddd\nSpotify - https://spoti.fi/3BabOIK\nApple Music - https://apple.co/3wV1ou8\nOfficial Website - http://d4vd.io",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/-XwQwynG7Nc/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/-XwQwynG7Nc/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/-XwQwynG7Nc/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/-XwQwynG7Nc/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/-XwQwynG7Nc/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "d4vd",
            "tags": [
              "d4vd",
              "romantic homicide",
              "limit ant",
              "ant",
              "d4vd gaming",
              "here with me",
              "d4vd romantic homicide",
              "d4vd here with me",
              "jasontheween",
              "jason clips",
              "pokimane",
              "pokimane clips",
              "poki",
              "twitch stream",
              "twitch clips",
              "faze clan",
              "faze jason",
              "jason faze",
              "what are you waiting for",
              "fortnite",
              "fortnite montage",
              "fortnite edits"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "d4vd - What Are You Waiting For (Official Music Video) ft. Pokimane & Jasontheween",
              "description": "#d4vd #pokimane #jasontheween \n\nListen to “What Are You Waiting For?”: https://d4vd.lnk.to/WAYWF\n\npre-order ‘WITHERED’ the debut album, out 4/25 : https://d4vd.lnk.to/WITHEREDYP\nshop new ANIME WITHERED VINYL and KAWAII MERCH: https://d4vd.lnk.to/storeYP\nshop signed WITHERED vinyl & CDs: https://d4vd.lnk.to/storeYP\n\nFollow d4vd:\nMailing List - http://d4vd.io/mailinglist\nDiscord - https://discord.gg/d4vd\nInstagram - https://www.instagram.com/d4vddd/\nTwitter - https://twitter.com/d4vddd\nTikTok - https://www.tiktok.com/@d4vdd\nFacebook - http://facebook.com/d4vdd\nSoundcloud - https://soundcloud.com/d4vddd\nSpotify - https://spoti.fi/3BabOIK\nApple Music - https://apple.co/3wV1ou8\nOfficial Website - http://d4vd.io"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT2M27S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "regionRestriction": {
              "blocked": [
                "BY",
                "RU"
              ]
            },
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "296592",
            "likeCount": "33666",
            "favoriteCount": "0",
            "commentCount": "1432"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "EpfAzSuiqu1fy4TIPdVplTOu18c",
          "id": "T1lvgWwrSA8",
          "snippet": {
            "publishedAt": "2025-04-01T08:00:31Z",
            "channelId": "UCD1Em4q90ZUK2R5HKesszJg",
            "title": "ClashaMania Season is Here! Clash of Clans x WWE",
            "description": "This Season, team up or Clash off with WWE Superstars as you tackle Elixir-pumping events and claim legendary rewards!\n\n\nFollow us on our Socials!\nTwitter ► https://twitter.com/ClashofClans/\nInstagram ► https://www.instagram.com/clashofclans \nFacebook ► https://www.facebook.com/ClashofClans \nTikTok ► https://www.tiktok.com/@clashofclans\n\nAttack. Defend. Strategize. Download for free for mobile devices. supr.cl/PlayClashOfClans\n\nFrom rage-\u00adfilled Barbarians with glorious mustaches to pyromaniac wizards, raise your own army and lead your clan to victory! Build your village to fend off raiders, battle against millions of players worldwide, and forge a powerful clan with others to destroy enemy clans.\nPLEASE NOTE! Clash of Clans is free to download and play, however some game items can also be purchased for real money \n\nAlso, under our Terms of Service and Privacy Policy, you must be at least 13 years of age to play or download Clash of Clans.\nA network connection is also required.\n\nFEATURES\n- Build your village into an unbeatable fortress \n- Raise your own army of Barbarians, Archers, Hog Riders, Wizards, Dragons and other mighty fighters\n- Battle with players worldwide and take their Trophies\n- Join together with other players to form the ultimate Clan\n- Fight against rival Clans in epic Clan Wars \n- Build 18 unique units with multiple levels of upgrades\n- Discover your favorite attacking army from countless combinations of troops, spells, Heroes and Clan reinforcements \n- Defend your village with a multitude of Cannons, Towers, Mortars, Bombs, Traps and Walls\n- Fight against the Goblin King in a campaign through the realm\n\nChief, are you having problems? Visit https://help.supercellsupport.com/clash-of-clans/en/\n\nPrivacy Policy:\nhttps://supercell.com/en/privacy-policy/\n\nTerms of Service:\nhttps://supercell.com/en/terms-of-service/\n\nParent’s Guide:\nhttps://supercell.com/en/parents/\n\n#clashofclans #clashamania #wwe",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/T1lvgWwrSA8/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/T1lvgWwrSA8/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/T1lvgWwrSA8/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/T1lvgWwrSA8/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/T1lvgWwrSA8/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Clash of Clans",
            "tags": [
              "clash of clans",
              "COC",
              "Clash of Clans Gameplay",
              "Clash of Clans Strategy",
              "Clash of Clans Animation",
              "Clash of Clans Commercial",
              "Clash of Clans Attacks",
              "Clash of Clans Town Hall",
              "Hog Rider",
              "PEKKA",
              "Clan Wars",
              "season challenges",
              "clan war leagues",
              "clash on",
              "clan game",
              "clan games",
              "clash-a-rama",
              "clasharama",
              "wwe",
              "clashamania",
              "overlord rhodes",
              "wrestling",
              "rhea ripley",
              "Bianca Belair",
              "undertaker",
              "rey mysterio",
              "wrestlemania",
              "2025",
              "new season",
              "new season trailer",
              "cody rhodes"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "ClashaMania Season is Here! Clash of Clans x WWE",
              "description": "This Season, team up or Clash off with WWE Superstars as you tackle Elixir-pumping events and claim legendary rewards!\n\n\nFollow us on our Socials!\nTwitter ► https://twitter.com/ClashofClans/\nInstagram ► https://www.instagram.com/clashofclans \nFacebook ► https://www.facebook.com/ClashofClans \nTikTok ► https://www.tiktok.com/@clashofclans\n\nAttack. Defend. Strategize. Download for free for mobile devices. supr.cl/PlayClashOfClans\n\nFrom rage-\u00adfilled Barbarians with glorious mustaches to pyromaniac wizards, raise your own army and lead your clan to victory! Build your village to fend off raiders, battle against millions of players worldwide, and forge a powerful clan with others to destroy enemy clans.\nPLEASE NOTE! Clash of Clans is free to download and play, however some game items can also be purchased for real money \n\nAlso, under our Terms of Service and Privacy Policy, you must be at least 13 years of age to play or download Clash of Clans.\nA network connection is also required.\n\nFEATURES\n- Build your village into an unbeatable fortress \n- Raise your own army of Barbarians, Archers, Hog Riders, Wizards, Dragons and other mighty fighters\n- Battle with players worldwide and take their Trophies\n- Join together with other players to form the ultimate Clan\n- Fight against rival Clans in epic Clan Wars \n- Build 18 unique units with multiple levels of upgrades\n- Discover your favorite attacking army from countless combinations of troops, spells, Heroes and Clan reinforcements \n- Defend your village with a multitude of Cannons, Towers, Mortars, Bombs, Traps and Walls\n- Fight against the Goblin King in a campaign through the realm\n\nChief, are you having problems? Visit https://help.supercellsupport.com/clash-of-clans/en/\n\nPrivacy Policy:\nhttps://supercell.com/en/privacy-policy/\n\nTerms of Service:\nhttps://supercell.com/en/terms-of-service/\n\nParent’s Guide:\nhttps://supercell.com/en/parents/\n\n#clashofclans #clashamania #wwe"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT1M11S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "185570",
            "likeCount": "11928",
            "favoriteCount": "0",
            "commentCount": "1112"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "-4bP22dJM6GYnGkv2y5X9rC_vMQ",
          "id": "a__cXH1gxlc",
          "snippet": {
            "publishedAt": "2025-03-31T20:33:10Z",
            "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
            "title": "FULL SEGMENT: Cody Rhodes NAILS John Cena with Cross Rhodes: Raw highlights, March 31, 2025",
            "description": "Undisputed WWE Champion Cody Rhodes and John Cena engage in an intense confrontation in London en route to their epic clash at WrestleMania. Catch WWE action on Netflix, Peacock, USA Network, CW Network, Sony India and more. #WWERAW\nWhere to watch WWE: https://wwe.com/wheretowatch\r\n\r\nWatch WWE on Netflix: http://netflix.com/WWE\r\nWatch WWE on Peacock: https://pck.tv/3ZTjVE7\r\n---------------------------------------------------------------------\r\nFollow WWE for more exciting action! - Subscribe to WWE on YouTube: http://wwe.yt/\r\n---------------------------------------------------------------------\r\nCheck out WWE.com for news and updates: http://goo.gl/akf0J4\r\nWatch WWE on Sony in India: http://www.wwe.com/SonySportsNetwork\r\nFind the latest Superstar gear at WWEShop: http://shop.wwe.com\r\n---------------------------------------------\r\nCheck out these other channels!\r\n---------------------------------------------\r\nWWE Vault: http://www.youtube.com/@WWEVault\r\nWWE Español: https://www.youtube.com/@wweespanol\r\nWWE NXT: https://www.youtube.com/@wwenxt\r\nWCW: https://www.youtube.com/@wcw\r\nUpUpDownDown: https://www.youtube.com/upupdowndown\r\nCeltic Warrior Workouts: https://www.youtube.com/@CelticWarriorWorkouts\r\nWWE Music: https://www.youtube.com/wwemusic\r\n------------------------------------\r\nWWE on Social Media\r\n------------------------------------\r\nX: https://twitter.com/wwe\r\nFacebook: https://www.facebook.com/wwe\r\nInstagram: https://www.instagram.com/wwe/\r\nTikTok: https://www.tiktok.com/@wwe\r\n------------------------------------",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/a__cXH1gxlc/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/a__cXH1gxlc/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/a__cXH1gxlc/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/a__cXH1gxlc/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/a__cXH1gxlc/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "WWE",
            "tags": [
              "Cody Rhodes",
              "John Cena",
              "superstars",
              "world wrestling entertainment",
              "wrestle",
              "wrestler",
              "wrestling",
              "wwe",
              "wwe 2024",
              "مصارعه",
              "कुश्ती",
              "डब्लू डब्लू ई",
              "पहलवान",
              "मैच",
              "व्यावसायिक कुश्ती",
              "सुपरस्टार",
              "Raw clips",
              "raw videos",
              "raw highlights",
              "raw winners",
              "monday night raw clips",
              "monday night raw highlights",
              "raw tonight",
              "raw match card",
              "raw highlights this week",
              "WWE on Netflix",
              "WWE Raw on Netflix",
              "Raw on Netflix"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "FULL SEGMENT: Cody Rhodes NAILS John Cena with Cross Rhodes: Raw highlights, March 31, 2025",
              "description": "Undisputed WWE Champion Cody Rhodes and John Cena engage in an intense confrontation in London en route to their epic clash at WrestleMania. Catch WWE action on Netflix, Peacock, USA Network, CW Network, Sony India and more. #WWERAW\nWhere to watch WWE: https://wwe.com/wheretowatch\r\n\r\nWatch WWE on Netflix: http://netflix.com/WWE\r\nWatch WWE on Peacock: https://pck.tv/3ZTjVE7\r\n---------------------------------------------------------------------\r\nFollow WWE for more exciting action! - Subscribe to WWE on YouTube: http://wwe.yt/\r\n---------------------------------------------------------------------\r\nCheck out WWE.com for news and updates: http://goo.gl/akf0J4\r\nWatch WWE on Sony in India: http://www.wwe.com/SonySportsNetwork\r\nFind the latest Superstar gear at WWEShop: http://shop.wwe.com\r\n---------------------------------------------\r\nCheck out these other channels!\r\n---------------------------------------------\r\nWWE Vault: http://www.youtube.com/@WWEVault\r\nWWE Español: https://www.youtube.com/@wweespanol\r\nWWE NXT: https://www.youtube.com/@wwenxt\r\nWCW: https://www.youtube.com/@wcw\r\nUpUpDownDown: https://www.youtube.com/upupdowndown\r\nCeltic Warrior Workouts: https://www.youtube.com/@CelticWarriorWorkouts\r\nWWE Music: https://www.youtube.com/wwemusic\r\n------------------------------------\r\nWWE on Social Media\r\n------------------------------------\r\nX: https://twitter.com/wwe\r\nFacebook: https://www.facebook.com/wwe\r\nInstagram: https://www.instagram.com/wwe/\r\nTikTok: https://www.tiktok.com/@wwe\r\n------------------------------------"
            }
          },
          "contentDetails": {
            "duration": "PT22M20S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "regionRestriction": {
              "blocked": [
                "AF",
                "BD",
                "BT",
                "IN",
                "LK",
                "MV",
                "NP",
                "PK",
                "RU"
              ]
            },
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "2212013",
            "likeCount": "79202",
            "favoriteCount": "0",
            "commentCount": "13856"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "9miMVG8Pm_nw9i4sV21BtAGzhGA",
          "id": "vZA0GkLNDeQ",
          "snippet": {
            "publishedAt": "2025-03-31T16:01:10Z",
            "channelId": "UCPZsNertSS82YCT2qX9-wHA",
            "title": "The Next Big Thing for War Thunder / Trailer",
            "description": "https://wt.link/next_big_thing\n\nIntroducing a revolutionary update! The long awaited and highly requested addition of infantry to the battlefields of War Thunder is finally here!\n\n🔘 Site: http://warthunder.com/ \n🔘 Twitch: https://www.twitch.tv/warthunder\n🔘 Telegram: https://t.me/warthunder\n🔘 Twitter: http://twitter.com/warthunder\n🔘 Facebook: http://www.facebook.com/WarThunder\n🔘 Forum: http://forum.warthunder.com/\n\n#WarThunder",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/vZA0GkLNDeQ/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/vZA0GkLNDeQ/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/vZA0GkLNDeQ/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/vZA0GkLNDeQ/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/vZA0GkLNDeQ/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "War Thunder. Official channel.",
            "tags": [
              "war thunder",
              "wt",
              "war thunder update",
              "war thunder trailer",
              "war thunder 2023",
              "sky guardians",
              "military games",
              "tanks",
              "aircraft",
              "wargame",
              "modern war game",
              "war simulator",
              "war thunder gameplay",
              "april fool"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "The Next Big Thing for War Thunder / Trailer",
              "description": "https://wt.link/next_big_thing\n\nIntroducing a revolutionary update! The long awaited and highly requested addition of infantry to the battlefields of War Thunder is finally here!\n\n🔘 Site: http://warthunder.com/ \n🔘 Twitch: https://www.twitch.tv/warthunder\n🔘 Telegram: https://t.me/warthunder\n🔘 Twitter: http://twitter.com/warthunder\n🔘 Facebook: http://www.facebook.com/WarThunder\n🔘 Forum: http://forum.warthunder.com/\n\n#WarThunder"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT1M47S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "660453",
            "likeCount": "44794",
            "favoriteCount": "0",
            "commentCount": "7011"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "Lcusy3P5di-co9auhrrU5kIf404",
          "id": "uaSn10NbHAk",
          "snippet": {
            "publishedAt": "2025-03-30T22:00:06Z",
            "channelId": "UCH569oN0jV7lr0QZFLD4AZA",
            "title": "HE'S HERE! Meet Our Son + His Name Reveal",
            "description": "He’s Here! 💙\nFinally...our baby boy has arrived! In today’s vlog, we share the beautiful moment our girls & family met him for the first time. We're overwhelmed with joy and can't wait to introduce him to all of you—plus, we finally reveal his name!",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/uaSn10NbHAk/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/uaSn10NbHAk/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/uaSn10NbHAk/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/uaSn10NbHAk/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/uaSn10NbHAk/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Jinger & Jeremy Vuolo",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "HE'S HERE! Meet Our Son + His Name Reveal",
              "description": "He’s Here! 💙\nFinally...our baby boy has arrived! In today’s vlog, we share the beautiful moment our girls & family met him for the first time. We're overwhelmed with joy and can't wait to introduce him to all of you—plus, we finally reveal his name!"
            }
          },
          "contentDetails": {
            "duration": "PT8M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "560110",
            "likeCount": "22332",
            "favoriteCount": "0",
            "commentCount": "1883"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "FUsLDTrW38XYHCJHe_QIYDCefuM",
          "id": "042pDj9FJ7Y",
          "snippet": {
            "publishedAt": "2025-03-31T14:00:00Z",
            "channelId": "UCK7tptUDHh-RYDsdxO1-5QQ",
            "title": "How Costco’s Kirkland Became Its $86B Secret Weapon | WSJ Case Study",
            "description": "Costco went against industry standards in 1995 with the creation of its private label, Kirkland Signature. With $86 billion in sales last year, Kirkland is now a bigger brand than Proctor & Gamble and Kraft-Heinz. Compared with other mass retailers like Target and Walmart, which have multiple brands, club channels like Costco and Sam’s Club are winning the private-label food and beverage space by consolidating. \n\nWSJ breaks down why Kirkland is now the retail behemoth’s secret weapon. \n\nChapters:\n0:00 Costco’s private label \n0:43 Why Kirkland was created\n3:03 Consolidating under one brand\n4:05 Impact on Costco and the industry\n5:03 Impact on suppliers\n6:28 Challenges ahead\n\n#Costco #Business #WSJ",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/042pDj9FJ7Y/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/042pDj9FJ7Y/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/042pDj9FJ7Y/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/042pDj9FJ7Y/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/042pDj9FJ7Y/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "The Wall Street Journal",
            "tags": [
              "costco",
              "costco news",
              "kirkland",
              "kirkland signature",
              "costco kirkland brand",
              "kirkland products",
              "private label",
              "costco private label",
              "jim sinegal costco",
              "jim sinegal",
              "costco deals",
              "name brand",
              "grocery stores",
              "costco membership",
              "kirkland diapers",
              "sears",
              "procter and gamble",
              "walmart",
              "target",
              "sam's club",
              "limited sku environment",
              "huggies",
              "pampers",
              "costco products",
              "costco supplier",
              "kirkland driver",
              "kraft heinz",
              "sam's club vs costco",
              "membership sales",
              "costco stock",
              "costco sales",
              "bnss"
            ],
            "categoryId": "25",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "How Costco’s Kirkland Became Its $86B Secret Weapon | WSJ Case Study",
              "description": "Costco went against industry standards in 1995 with the creation of its private label, Kirkland Signature. With $86 billion in sales last year, Kirkland is now a bigger brand than Proctor & Gamble and Kraft-Heinz. Compared with other mass retailers like Target and Walmart, which have multiple brands, club channels like Costco and Sam’s Club are winning the private-label food and beverage space by consolidating. \n\nWSJ breaks down why Kirkland is now the retail behemoth’s secret weapon. \n\nChapters:\n0:00 Costco’s private label \n0:43 Why Kirkland was created\n3:03 Consolidating under one brand\n4:05 Impact on Costco and the industry\n5:03 Impact on suppliers\n6:28 Challenges ahead\n\n#Costco #Business #WSJ"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT9M34S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "776914",
            "likeCount": "12758",
            "favoriteCount": "0",
            "commentCount": "557"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "nenovC57K_VMgF00Iyvu0CRzYQs",
          "id": "wty7UohVFTo",
          "snippet": {
            "publishedAt": "2025-03-31T14:36:25Z",
            "channelId": "UCMJbbWyIziiUamP5JKK9yAA",
            "title": "We've Messed Up Again... Merch Department Problems",
            "description": "Hey guys, I come before you today to update you on our merch delays on http://www.cleetusmcfarland.com/ - We're doing our best to catch up but i wanted everyone to know we are willing to refund orders that haven't shipped. \n\nPlease reach out to support@cleetusmcfarland.com if you'd like information on a refund.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/wty7UohVFTo/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/wty7UohVFTo/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/wty7UohVFTo/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/wty7UohVFTo/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/wty7UohVFTo/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Cleetus2 McFarland",
            "categoryId": "2",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "We've Messed Up Again... Merch Department Problems",
              "description": "Hey guys, I come before you today to update you on our merch delays on http://www.cleetusmcfarland.com/ - We're doing our best to catch up but i wanted everyone to know we are willing to refund orders that haven't shipped. \n\nPlease reach out to support@cleetusmcfarland.com if you'd like information on a refund."
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT5M10S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "290811",
            "likeCount": "22487",
            "favoriteCount": "0",
            "commentCount": "2889"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "NdDzeMNsZu-1bFeBcINfRAXMWu0",
          "id": "6mxTsCxM6fI",
          "snippet": {
            "publishedAt": "2025-03-30T14:00:07Z",
            "channelId": "UCGW5zIEencf7p6IncKLFtuA",
            "title": "Can You Beat Minecraft From ONLY Liquids?",
            "description": "I beat Minecraft in a world made only of liquids! This was one of the most insane challenges I’ve ever done taking almost 1,000 days of in-game time!\n\nWorld download and schematics can be found on my Patreon here! Thank you to all supporters. I could not do it without you! - https://www.patreon.com/Wunba\n\nHuge shout out to @Mogswamp for putting up with my insanity while we filmed this video!\n\nThanks @camman18 for the idea behind the video!\n▬▬▬▬▬▬▬▬▬▬▬▬▬ \nFollow Me\nTwitter - https://twitter.com/WunbaYT\nInstagram - https://www.instagram.com/wunba_/\nTikTok - https://www.tiktok.com/@wunba\nDiscord - https://discord.gg/4brbQAYPYZ\n▬▬▬▬▬▬▬▬▬▬▬▬▬ \nFull HARDCORE SERIES playlist - https://www.youtube.com/playlist?list=PL9wjMmrCTIKIeW_tRPR2m3Aaw2vgvNXwn\n\nThis MINECRAFT HARDCORE SERIES is inspired by Wadzee, MumboJumbo, Grian, and Sandiction! Instead of being the Hermitcraft SMP, this series is similar to a MINECRAFT CHALLENGE video because it is HARDCORE MINECRAFT! aCookiegod also with his hardcore Minecraft videos This is similar to my 100 DAYS in MINECRAFT HARDCORE but better!\n▬▬▬▬▬▬▬▬▬▬▬▬▬\nContact me for business/brand deal inquiries?\nwunba@apollomgmt.co\n▬▬▬▬▬▬▬▬▬▬▬▬▬\nCurrent subscriber count - 1,465,584\n#minecraft #wunba #challenge",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/6mxTsCxM6fI/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/6mxTsCxM6fI/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/6mxTsCxM6fI/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/6mxTsCxM6fI/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/6mxTsCxM6fI/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Wunba",
            "tags": [
              "Minecraft",
              "Hardcore",
              "survival",
              "creative",
              "Mog",
              "mogswamp",
              "wunba",
              "one",
              "block",
              "one block",
              "minecraft one block",
              "challenge",
              "survive",
              "beppo",
              "farm",
              "farms",
              "skyblock",
              "sky",
              "acookiegod",
              "100",
              "1000",
              "10000",
              "day",
              "days",
              "skyblock challenge",
              "liquid",
              "liquids",
              "water",
              "lava"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Can You Beat Minecraft From ONLY Liquids?",
              "description": "I beat Minecraft in a world made only of liquids! This was one of the most insane challenges I’ve ever done taking almost 1,000 days of in-game time!\n\nWorld download and schematics can be found on my Patreon here! Thank you to all supporters. I could not do it without you! - https://www.patreon.com/Wunba\n\nHuge shout out to @Mogswamp for putting up with my insanity while we filmed this video!\n\nThanks @camman18 for the idea behind the video!\n▬▬▬▬▬▬▬▬▬▬▬▬▬ \nFollow Me\nTwitter - https://twitter.com/WunbaYT\nInstagram - https://www.instagram.com/wunba_/\nTikTok - https://www.tiktok.com/@wunba\nDiscord - https://discord.gg/4brbQAYPYZ\n▬▬▬▬▬▬▬▬▬▬▬▬▬ \nFull HARDCORE SERIES playlist - https://www.youtube.com/playlist?list=PL9wjMmrCTIKIeW_tRPR2m3Aaw2vgvNXwn\n\nThis MINECRAFT HARDCORE SERIES is inspired by Wadzee, MumboJumbo, Grian, and Sandiction! Instead of being the Hermitcraft SMP, this series is similar to a MINECRAFT CHALLENGE video because it is HARDCORE MINECRAFT! aCookiegod also with his hardcore Minecraft videos This is similar to my 100 DAYS in MINECRAFT HARDCORE but better!\n▬▬▬▬▬▬▬▬▬▬▬▬▬\nContact me for business/brand deal inquiries?\nwunba@apollomgmt.co\n▬▬▬▬▬▬▬▬▬▬▬▬▬\nCurrent subscriber count - 1,465,584\n#minecraft #wunba #challenge"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT57M17S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1153712",
            "likeCount": "75659",
            "favoriteCount": "0",
            "commentCount": "6957"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "i3u65SDet7zD5PC3G5PEDJFKBoQ",
          "id": "XTjJ8pPVEF8",
          "snippet": {
            "publishedAt": "2025-03-31T01:59:34Z",
            "channelId": "UCAMPco9PqjBbI_MLsDOO4Jw",
            "title": "Canaan James Hill's \"I Need Your Glory\" Performance Wins Platinum Ticket on American Idol!",
            "description": "Platinum Ticket winner Canaan James Hill has Lionel Richie pacing and PREACHING after his spectacular rendition of \"I Need Your Glory\" by Earnest Pugh! The 17-year-old gospel singer with buttery velvet vocals will get to bypass the first round of Hollywood Week on American Idol!\n\nSee more of American Idol 2025 on our official site: http://www.americanidol.com\nFacebook: facebook.com/AmericanIdol\nTwitter: twitter.com/americanidol\nInstagram: instagram.com/americanidol/\nTikTok: tiktok.com/americanidol\n\nAMERICAN IDOL, the iconic series that revolutionized the television landscape by pioneering the music competition genre, returns on ABC.\n\nAmerican Idol 2025\n\nHelping to determine who America will ultimately vote for to become the next singing sensation are music industry forces and superstar judges Luke Bryan, Carrie Underwood and Lionel Richie. Emmy® Award-winning host and producer Ryan Seacrest continues as host of the beloved series.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/XTjJ8pPVEF8/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/XTjJ8pPVEF8/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/XTjJ8pPVEF8/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/XTjJ8pPVEF8/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/XTjJ8pPVEF8/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "American Idol",
            "tags": [
              "American Idol",
              "singing competition",
              "Ryan Seacrest",
              "Luke Bryan",
              "Lionel Richie",
              "covers",
              "sing",
              "ABC",
              "American Idol 2025",
              "auditions",
              "Carrie Underwood",
              "Canaan James Hill",
              "I Need Your Glory"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Canaan James Hill's \"I Need Your Glory\" Performance Wins Platinum Ticket on American Idol!",
              "description": "Platinum Ticket winner Canaan James Hill has Lionel Richie pacing and PREACHING after his spectacular rendition of \"I Need Your Glory\" by Earnest Pugh! The 17-year-old gospel singer with buttery velvet vocals will get to bypass the first round of Hollywood Week on American Idol!\n\nSee more of American Idol 2025 on our official site: http://www.americanidol.com\nFacebook: facebook.com/AmericanIdol\nTwitter: twitter.com/americanidol\nInstagram: instagram.com/americanidol/\nTikTok: tiktok.com/americanidol\n\nAMERICAN IDOL, the iconic series that revolutionized the television landscape by pioneering the music competition genre, returns on ABC.\n\nAmerican Idol 2025\n\nHelping to determine who America will ultimately vote for to become the next singing sensation are music industry forces and superstar judges Luke Bryan, Carrie Underwood and Lionel Richie. Emmy® Award-winning host and producer Ryan Seacrest continues as host of the beloved series."
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT6M4S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "458654",
            "likeCount": "16736",
            "favoriteCount": "0",
            "commentCount": "2188"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "HOOUGlhu0RT1pOFz8Lq0M7xQtu0",
          "id": "3S56SxpSTvk",
          "snippet": {
            "publishedAt": "2025-03-31T17:00:07Z",
            "channelId": "UCfyi9QuDWdapI6ICbjYgxtA",
            "title": "Jonas Brothers - Love Me To Heaven (Official Video)",
            "description": "Listen & download here: https://jonasbrothers.lnk.to/lovemetoheaven\n \nSubscribe to Jonas Brothers: http://JonasBrothers.lnk.to/subscribe\n \nFollow Jonas Brothers:\nTikTok: https://www.tiktok.com/@jonasbrothers\nInstagram: https://www.instagram.com/jonasbrothers/\nFacebook: https://www.facebook.com/JonasBrothers\nTwitter: https://x.com/jonasbrothers\nWebsite: https://jonasbrothers.com/\n \n#JonasBrothers #LoveMeToHeaven\n\nMusic video by Jonas Brothers performing Love Me To Heaven.© 2025 Jonas Brothers Recording, Limited Liability Company, under exclusive license to Republic Records, a division of UMG Recordings, Inc.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/3S56SxpSTvk/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/3S56SxpSTvk/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/3S56SxpSTvk/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/3S56SxpSTvk/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/3S56SxpSTvk/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "JonasBrothersVEVO",
            "tags": [
              "Jonas Brothers",
              "Republic Records",
              "Pop"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Jonas Brothers - Love Me To Heaven (Official Video)",
              "description": "Listen & download here: https://jonasbrothers.lnk.to/lovemetoheaven\n \nSubscribe to Jonas Brothers: http://JonasBrothers.lnk.to/subscribe\n \nFollow Jonas Brothers:\nTikTok: https://www.tiktok.com/@jonasbrothers\nInstagram: https://www.instagram.com/jonasbrothers/\nFacebook: https://www.facebook.com/JonasBrothers\nTwitter: https://x.com/jonasbrothers\nWebsite: https://jonasbrothers.com/\n \n#JonasBrothers #LoveMeToHeaven\n\nMusic video by Jonas Brothers performing Love Me To Heaven.© 2025 Jonas Brothers Recording, Limited Liability Company, under exclusive license to Republic Records, a division of UMG Recordings, Inc."
            }
          },
          "contentDetails": {
            "duration": "PT3M54S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "regionRestriction": {
              "allowed": [
                "AD",
                "AE",
                "AF",
                "AG",
                "AI",
                "AL",
                "AM",
                "AO",
                "AQ",
                "AR",
                "AS",
                "AT",
                "AU",
                "AW",
                "AX",
                "AZ",
                "BA",
                "BB",
                "BD",
                "BE",
                "BF",
                "BG",
                "BH",
                "BI",
                "BJ",
                "BL",
                "BM",
                "BN",
                "BO",
                "BQ",
                "BR",
                "BS",
                "BT",
                "BV",
                "BW",
                "BZ",
                "CA",
                "CC",
                "CD",
                "CF",
                "CG",
                "CH",
                "CI",
                "CK",
                "CL",
                "CM",
                "CN",
                "CO",
                "CR",
                "CU",
                "CV",
                "CW",
                "CX",
                "CY",
                "CZ",
                "DE",
                "DJ",
                "DK",
                "DM",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "EH",
                "ER",
                "ES",
                "ET",
                "FI",
                "FJ",
                "FK",
                "FM",
                "FO",
                "FR",
                "GA",
                "GB",
                "GD",
                "GE",
                "GF",
                "GG",
                "GH",
                "GI",
                "GL",
                "GM",
                "GN",
                "GP",
                "GQ",
                "GR",
                "GS",
                "GT",
                "GU",
                "GW",
                "GY",
                "HK",
                "HM",
                "HN",
                "HR",
                "HT",
                "HU",
                "ID",
                "IE",
                "IL",
                "IM",
                "IN",
                "IQ",
                "IR",
                "IS",
                "IT",
                "JE",
                "JM",
                "JO",
                "JP",
                "KE",
                "KG",
                "KH",
                "KI",
                "KM",
                "KN",
                "KR",
                "KW",
                "KY",
                "KZ",
                "LA",
                "LB",
                "LC",
                "LI",
                "LK",
                "LR",
                "LS",
                "LT",
                "LU",
                "LV",
                "LY",
                "MA",
                "MC",
                "MD",
                "ME",
                "MF",
                "MG",
                "MH",
                "MK",
                "ML",
                "MM",
                "MN",
                "MO",
                "MP",
                "MQ",
                "MR",
                "MS",
                "MT",
                "MU",
                "MV",
                "MW",
                "MX",
                "MY",
                "MZ",
                "NA",
                "NC",
                "NE",
                "NF",
                "NG",
                "NI",
                "NL",
                "NO",
                "NP",
                "NR",
                "NU",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PF",
                "PG",
                "PH",
                "PK",
                "PL",
                "PM",
                "PN",
                "PR",
                "PS",
                "PT",
                "PW",
                "PY",
                "QA",
                "RE",
                "RO",
                "RS",
                "RW",
                "SA",
                "SB",
                "SC",
                "SD",
                "SE",
                "SG",
                "SH",
                "SI",
                "SJ",
                "SK",
                "SL",
                "SM",
                "SN",
                "SO",
                "SR",
                "ST",
                "SV",
                "SX",
                "SY",
                "SZ",
                "TC",
                "TD",
                "TF",
                "TG",
                "TH",
                "TJ",
                "TK",
                "TL",
                "TM",
                "TN",
                "TO",
                "TR",
                "TT",
                "TV",
                "TW",
                "TZ",
                "UA",
                "UG",
                "UM",
                "US",
                "UY",
                "UZ",
                "VA",
                "VC",
                "VE",
                "VG",
                "VI",
                "VN",
                "VU",
                "WF",
                "WS",
                "YE",
                "YT",
                "ZA",
                "ZM",
                "ZW"
              ]
            },
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "169115",
            "likeCount": "19952",
            "favoriteCount": "0",
            "commentCount": "1731"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "9mzUquRt1udg5X_9fLkSSGZ7ZJ0",
          "id": "pkRbb-peBnk",
          "snippet": {
            "publishedAt": "2025-03-31T17:42:39Z",
            "channelId": "UCQ-YJstgVdAiCT52TiBWDbg",
            "title": "YouTuber SOCCER SATURDAY Challenge",
            "description": "Chris Kaminiature and the gang hit Doncaster!\nSubscribe to ArthurTV: https://www.youtube.com/@UC50P6nxX7n1ZhEL46c2MLMg \nSubscribe to Bach: https://www.youtube.com/@ItalianBach\nSubscribe to George: https://www.youtube.com/@georgeclarkey\nSubscribe to Arthur Hill: https://www.youtube.com/@arthurhill69\nSubscribe to Becky: https://www.youtube.com/@bambinobecky\n\n► Second channel: https://www.youtube.com/@chrismdixon10\n► Instagram: http://instagram.com/chrismd10\n► Twitter: https://twitter.com/chrismd10\n► Facebook: https://www.facebook.com/OfficialChrisMD\n\nIf you want to know how I use popular music in my content - Lickd provide an affordable service to license mainstream music for use in monetised content. Save 50% off your first track on Lickd and improve your video quality with popular music: https://lickd.co/affiliate/chrismd\n\nMusic:\n🎵 Music licensed from Lickd. The biggest mainstream and stock music platform for content creators.\n\n00:18, 05:45 | Chelsea Dagger by The Fratellis, https://lickd.lnk.to/Er9S8mID!ChrisMD License ID: 0vpgl5bzP8r\nIf you want to use music from famous artists, try Lickd to get track credits and unlimited stock music: https://go.lickd.co/Referral-Offer\n\nOther music by Epidemic Sound (http://www.epidemicsound.com).\n\nEdit Team:\nHead of Edit: Jamie Archer\nEditor: Jonathan Ward\nEditor: Ben Manning\nEditor: Darragh O'Reilly\n\nProduction Team:\nHead of Production: Jess Thompson\nContent Director: Jamie Bristow\nProducer: Laura Sebright",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/pkRbb-peBnk/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/pkRbb-peBnk/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/pkRbb-peBnk/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/pkRbb-peBnk/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/pkRbb-peBnk/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "ChrisMD",
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "YouTuber SOCCER SATURDAY Challenge",
              "description": "Chris Kaminiature and the gang hit Doncaster!\nSubscribe to ArthurTV: https://www.youtube.com/@UC50P6nxX7n1ZhEL46c2MLMg \nSubscribe to Bach: https://www.youtube.com/@ItalianBach\nSubscribe to George: https://www.youtube.com/@georgeclarkey\nSubscribe to Arthur Hill: https://www.youtube.com/@arthurhill69\nSubscribe to Becky: https://www.youtube.com/@bambinobecky\n\n► Second channel: https://www.youtube.com/@chrismdixon10\n► Instagram: http://instagram.com/chrismd10\n► Twitter: https://twitter.com/chrismd10\n► Facebook: https://www.facebook.com/OfficialChrisMD\n\nIf you want to know how I use popular music in my content - Lickd provide an affordable service to license mainstream music for use in monetised content. Save 50% off your first track on Lickd and improve your video quality with popular music: https://lickd.co/affiliate/chrismd\n\nMusic:\n🎵 Music licensed from Lickd. The biggest mainstream and stock music platform for content creators.\n\n00:18, 05:45 | Chelsea Dagger by The Fratellis, https://lickd.lnk.to/Er9S8mID!ChrisMD License ID: 0vpgl5bzP8r\nIf you want to use music from famous artists, try Lickd to get track credits and unlimited stock music: https://go.lickd.co/Referral-Offer\n\nOther music by Epidemic Sound (http://www.epidemicsound.com).\n\nEdit Team:\nHead of Edit: Jamie Archer\nEditor: Jonathan Ward\nEditor: Ben Manning\nEditor: Darragh O'Reilly\n\nProduction Team:\nHead of Production: Jess Thompson\nContent Director: Jamie Bristow\nProducer: Laura Sebright"
            },
            "defaultAudioLanguage": "en-GB"
          },
          "contentDetails": {
            "duration": "PT43M50S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "822668",
            "likeCount": "46886",
            "favoriteCount": "0",
            "commentCount": "1167"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "XXYU6xTVtZY1IvzlgFAD6Xz7l_A",
          "id": "pqPCFUUbMiU",
          "snippet": {
            "publishedAt": "2025-03-31T12:59:46Z",
            "channelId": "UC9YydG57epLqxA9cTzZXSeQ",
            "title": "Verdansk Launch Trailer | Call of Duty: Warzone",
            "description": "Is this the real life? Is this just fantasy? 🥹\n\nNo escape from the fight now — Drop into the map that started it all in Call of Duty: Warzone on April 3 #VerdanskReturns 🪂\n\nFollow #CallofDuty for the latest intel:\n• X / (Formerly Twitter): http://twitter.com/CallofDuty\n• Instagram: http://instagram.com/callofduty\n• Facebook: http://facebook.com/CallofDuty\n• TikTok: http://www.tiktok.com/@callofduty\n• Threads: https://www.threads.net/@callofduty\n• Bluesky: https://bsky.app/profile/callofduty.com",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/pqPCFUUbMiU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/pqPCFUUbMiU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/pqPCFUUbMiU/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/pqPCFUUbMiU/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/pqPCFUUbMiU/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Call of Duty",
            "tags": [
              "call of duty",
              "cod",
              "activision"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Verdansk Launch Trailer | Call of Duty: Warzone",
              "description": "Is this the real life? Is this just fantasy? 🥹\n\nNo escape from the fight now — Drop into the map that started it all in Call of Duty: Warzone on April 3 #VerdanskReturns 🪂\n\nFollow #CallofDuty for the latest intel:\n• X / (Formerly Twitter): http://twitter.com/CallofDuty\n• Instagram: http://instagram.com/callofduty\n• Facebook: http://facebook.com/CallofDuty\n• TikTok: http://www.tiktok.com/@callofduty\n• Threads: https://www.threads.net/@callofduty\n• Bluesky: https://bsky.app/profile/callofduty.com"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT2M55S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "20455767",
            "likeCount": "37350",
            "favoriteCount": "0",
            "commentCount": "4266"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "iIoFJalMwJH7WHZKy0JsL0JT_jQ",
          "id": "yQcKnN0Xtbw",
          "snippet": {
            "publishedAt": "2025-03-30T14:01:06Z",
            "channelId": "UCB2wtYpfbCpYDc5TeTwuqFA",
            "title": "I Tried The World's Most Expensive Diet",
            "description": "Download the MacroFactor App- CODE \"WILL\" for 2 week free trial! \nhttp://onelink.to/mfwill\n\nSHOP GYMSHARK 🦈 10% OFF WITH CODE \"WILL10\"- \nhttps://gymshark.com\n\nGET MY COOKBOOK! https://www.stripdown.ca/ \n\nINSTAGRAM- https://www.instagram.com/willtenny/\n\n\nI Tried The World's Most Expensive Diet \n\n\nTopics: diet, grocery haul, erewhon, fitness, bodybuilding, worlds most expensive diet, review, food review, mukbang, taste test, cheap vs expensive\n\n#diet #food #fitness",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/yQcKnN0Xtbw/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/yQcKnN0Xtbw/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/yQcKnN0Xtbw/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/yQcKnN0Xtbw/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/yQcKnN0Xtbw/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Will Tennyson",
            "tags": [
              "I Tried The World's Most Expensive Diet",
              "diet",
              "i tried",
              "erewhon",
              "erewhon haul",
              "erewhon review",
              "erewhon smoothie",
              "food",
              "cheap vs expensive",
              "gym",
              "fitness",
              "challenge",
              "taste test"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "I Tried The World's Most Expensive Diet",
              "description": "Download the MacroFactor App- CODE \"WILL\" for 2 week free trial! \nhttp://onelink.to/mfwill\n\nSHOP GYMSHARK 🦈 10% OFF WITH CODE \"WILL10\"- \nhttps://gymshark.com\n\nGET MY COOKBOOK! https://www.stripdown.ca/ \n\nINSTAGRAM- https://www.instagram.com/willtenny/\n\n\nI Tried The World's Most Expensive Diet \n\n\nTopics: diet, grocery haul, erewhon, fitness, bodybuilding, worlds most expensive diet, review, food review, mukbang, taste test, cheap vs expensive\n\n#diet #food #fitness"
            },
            "defaultAudioLanguage": "en-US"
          },
          "contentDetails": {
            "duration": "PT25M55S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1223179",
            "likeCount": "48069",
            "favoriteCount": "0",
            "commentCount": "2753"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "haAjfOJNmINW8_wbQPz8JE4nO8k",
          "id": "mI9Nn8WcO-g",
          "snippet": {
            "publishedAt": "2025-03-30T15:48:27Z",
            "channelId": "UC_gSotrFVZ_PiAxo3fTQVuQ",
            "title": "“I've NEVER seen strength like this before”",
            "description": "🌏 Get an Exclusive NordVPN deal + 4 months extra \nhere → https://nordvpn.com/magmidt It’s risk-free\nwith Nord’s 30-day money-back guarantee!\n\nCheck out Yves on social media https://www.instagram.com/yvesgravelle/\n\n“I've never seen strength like this before” - Magnus Midtbø\n\nShot and Edited by Sam Tuck https://www.instagram.com/samtuclimbing  \n\nMusic and Sound Effects: http://share.epidemicsound.com/vSnfn",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/mI9Nn8WcO-g/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/mI9Nn8WcO-g/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/mI9Nn8WcO-g/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/mI9Nn8WcO-g/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/mI9Nn8WcO-g/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Magnus Midtbø",
            "tags": [
              "Climbing",
              "Climber",
              "Strength",
              "Grip Strength",
              "Forearms",
              "Training",
              "Workout",
              "USA",
              "Yves Gravelle",
              "Bouldering",
              "World Record",
              "Muscles",
              "Fitness",
              "Fit",
              "Stronger",
              "UK"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "“I've NEVER seen strength like this before”",
              "description": "🌏 Get an Exclusive NordVPN deal + 4 months extra \nhere → https://nordvpn.com/magmidt It’s risk-free\nwith Nord’s 30-day money-back guarantee!\n\nCheck out Yves on social media https://www.instagram.com/yvesgravelle/\n\n“I've never seen strength like this before” - Magnus Midtbø\n\nShot and Edited by Sam Tuck https://www.instagram.com/samtuclimbing  \n\nMusic and Sound Effects: http://share.epidemicsound.com/vSnfn"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT19M9S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "2965795",
            "likeCount": "65714",
            "favoriteCount": "0",
            "commentCount": "3202"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "ZA1KGEsTEi3PQApW1-JVj3jLhQ4",
          "id": "yqpvHOG459U",
          "snippet": {
            "publishedAt": "2025-03-30T18:14:19Z",
            "channelId": "UCVe_RrR9AMeY6Z8ixOv5gtw",
            "title": "Our New Family Member",
            "description": "Support our Patreon for exclusive vlogs and extended podcast episodes! https://www.patreon.com/RylandAdams\n\nWatch my latest podcast! https://youtu.be/udXTEL5-YVU?si=NhDnOlCtouazuXOA\nWatch my last vlog! https://youtu.be/D4WvdvGP6m4?si=BhO1VaQkPKOUHqdD \n\nWatch Shane's new video! https://youtu.be/trITFlguYsc?si=uEHjk6B3LI_r8AKf\nWatch Shane's new podcast! https://youtu.be/S05xhsEMBZc?si=kyf2B38f6qDeypxx\nSubscribe to Shane! @Shane2 @shane \nFollow Shane! https://www.instagram.com/shanedawson/?hl=en \nShop Shanes's Merch!! https://www.shanedawsonmerch.com/collections/shop-all\nFollow Spencer! https://www.instagram.com/banginbernard?igsh=MzRlODBiNWFlZA==\n\nEditing for this video: \nMarissa Ann Patterson\nhttp://www.marissaannpatterson.com/\nCaden Finch\nhttps://www.cadenfinch.com/\n\nSubscribe to Morgan! @morgansvlogs \nSubscribe to Lizze!  @LizzeGordonVlogs \nSubscribe to Sandy! @SandeeYaw \nSubscribe to Chris! @ChrisBstation \n\nFollow me on Instagram! https://www.instagram.com/rylandadams/\n\nHope you have a great day!\n\nBUSINESS EMAIL: \nrylandadams7@gmail.com",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/yqpvHOG459U/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/yqpvHOG459U/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/yqpvHOG459U/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/yqpvHOG459U/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/yqpvHOG459U/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Ryland vlogs",
            "tags": [
              "Ryland Adams",
              "Shane Dawson",
              "Ryland Vlogs",
              "New Car",
              "Comedy",
              "Shopping",
              "Home"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Our New Family Member",
              "description": "Support our Patreon for exclusive vlogs and extended podcast episodes! https://www.patreon.com/RylandAdams\n\nWatch my latest podcast! https://youtu.be/udXTEL5-YVU?si=NhDnOlCtouazuXOA\nWatch my last vlog! https://youtu.be/D4WvdvGP6m4?si=BhO1VaQkPKOUHqdD \n\nWatch Shane's new video! https://youtu.be/trITFlguYsc?si=uEHjk6B3LI_r8AKf\nWatch Shane's new podcast! https://youtu.be/S05xhsEMBZc?si=kyf2B38f6qDeypxx\nSubscribe to Shane! @Shane2 @shane \nFollow Shane! https://www.instagram.com/shanedawson/?hl=en \nShop Shanes's Merch!! https://www.shanedawsonmerch.com/collections/shop-all\nFollow Spencer! https://www.instagram.com/banginbernard?igsh=MzRlODBiNWFlZA==\n\nEditing for this video: \nMarissa Ann Patterson\nhttp://www.marissaannpatterson.com/\nCaden Finch\nhttps://www.cadenfinch.com/\n\nSubscribe to Morgan! @morgansvlogs \nSubscribe to Lizze!  @LizzeGordonVlogs \nSubscribe to Sandy! @SandeeYaw \nSubscribe to Chris! @ChrisBstation \n\nFollow me on Instagram! https://www.instagram.com/rylandadams/\n\nHope you have a great day!\n\nBUSINESS EMAIL: \nrylandadams7@gmail.com"
            }
          },
          "contentDetails": {
            "duration": "PT32M6S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "379613",
            "likeCount": "19174",
            "favoriteCount": "0",
            "commentCount": "1527"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "K2MALLxfPMTaxwtgfcynJ466MYk",
          "id": "uOMyMt1cz80",
          "snippet": {
            "publishedAt": "2025-03-29T21:17:42Z",
            "channelId": "UCRE2zmVNW9wG2dndMoV4JKQ",
            "title": "REACTING TO FAN EDITS AGAIN",
            "description": "God Bless the Quenaissance \n\nUse my code for 10% off your next SeatGeek order*: https://seatgeek.onelink.me/RrnK/QUEN10 \nSponsored by SeatGeek. *Restrictions apply. Max $20 discount",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/uOMyMt1cz80/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/uOMyMt1cz80/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/uOMyMt1cz80/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/uOMyMt1cz80/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/uOMyMt1cz80/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Quenlin Blackwell",
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "REACTING TO FAN EDITS AGAIN",
              "description": "God Bless the Quenaissance \n\nUse my code for 10% off your next SeatGeek order*: https://seatgeek.onelink.me/RrnK/QUEN10 \nSponsored by SeatGeek. *Restrictions apply. Max $20 discount"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT32M16S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1319062",
            "likeCount": "97316",
            "favoriteCount": "0",
            "commentCount": "3262"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "gYbkMQZP3y_9gchCJODpQ6fUCeo",
          "id": "VIXhtkPap8w",
          "snippet": {
            "publishedAt": "2025-03-30T20:17:04Z",
            "channelId": "UCZR4ioZxU0e18LzT7UKMdSw",
            "title": "march_madness.mov",
            "description": "hey ipods! give me tattoo ideas plz i need more asap.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/VIXhtkPap8w/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/VIXhtkPap8w/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/VIXhtkPap8w/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/VIXhtkPap8w/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/VIXhtkPap8w/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Mandy's iPhone",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "march_madness.mov",
              "description": "hey ipods! give me tattoo ideas plz i need more asap."
            },
            "defaultAudioLanguage": "en-CA"
          },
          "contentDetails": {
            "duration": "PT32M59S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "242379",
            "likeCount": "19201",
            "favoriteCount": "0",
            "commentCount": "1082"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "uiGEvFJP8f5B26k9kmFw5M21_AI",
          "id": "bKFU1GVFJMk",
          "snippet": {
            "publishedAt": "2025-03-30T21:00:21Z",
            "channelId": "UCwQApaIcl3emwQ2AhQ14ofw",
            "title": "PresLee Faith vs. Brennan Myers - Guess The Post",
            "description": "PresLee and Brennan competed in a game of Guess The Post at Famous Birthdays!",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/bKFU1GVFJMk/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/bKFU1GVFJMk/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/bKFU1GVFJMk/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/bKFU1GVFJMk/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/bKFU1GVFJMk/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Famous Birthdays",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "PresLee Faith vs. Brennan Myers - Guess The Post",
              "description": "PresLee and Brennan competed in a game of Guess The Post at Famous Birthdays!"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT22M52S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "164854",
            "likeCount": "4706",
            "favoriteCount": "0",
            "commentCount": "269"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "xNYdu90Ow5f-aUnJUep-BgHfiZU",
          "id": "FdxzgKaAxqc",
          "snippet": {
            "publishedAt": "2025-03-30T13:00:20Z",
            "channelId": "UC6889KWo5GDEqcYaym1lq9g",
            "title": "EVERY LEGO MINECRAFT MOB…",
            "description": "I bought every Lego Minecraft mob to fight off A Minecraft Movie toys...\n\nour Instagram: https://www.instagram.com/masterbuilders_yt/\n\n#lego #minecraft",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/FdxzgKaAxqc/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/FdxzgKaAxqc/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/FdxzgKaAxqc/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/FdxzgKaAxqc/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/FdxzgKaAxqc/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "MasterBuilders",
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "EVERY LEGO MINECRAFT MOB…",
              "description": "I bought every Lego Minecraft mob to fight off A Minecraft Movie toys...\n\nour Instagram: https://www.instagram.com/masterbuilders_yt/\n\n#lego #minecraft"
            },
            "defaultAudioLanguage": "en-US"
          },
          "contentDetails": {
            "duration": "PT14M12S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "592808",
            "likeCount": "7589",
            "favoriteCount": "0",
            "commentCount": "816"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "vuXSqffymI0puVcCkiYVATylwmE",
          "id": "1lDBE4J0dPE",
          "snippet": {
            "publishedAt": "2025-03-30T23:11:36Z",
            "channelId": "UCKt6UNcaVIS258z9Gujeirw",
            "title": "Tik Tok vs. Instagram Reels Bingo",
            "description": "tik tok vs. reels bingo w/ @BasicallyIDoWrk \nleave a like n subscribe\n\nwe back with another bingo showdown video. this time vs. marcel aka basicallyidowrk. today we're switching platforms, one of us using tiktok and the other using reels. we both try and complete the same bingo board at the same time. lmk if i should do this again :)\n\nJoin my Discord! - http://discord.gg/crispy\n\nMy Links:\nTwitter: http://twitter.com/Crispy\nInstagram: http://instagram.com/Crispy\nSnapchat: CrispyConcords\n\nIntro 0:00\nRound 1 2:01\nRound 2 16:12\nFinal Round 23:12",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/1lDBE4J0dPE/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/1lDBE4J0dPE/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/1lDBE4J0dPE/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/1lDBE4J0dPE/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/1lDBE4J0dPE/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Crispy Concords",
            "tags": [
              "tik tok",
              "tiktok",
              "reels",
              "instagram reels",
              "shorts",
              "bingo",
              "bingo board",
              "challenge",
              "react",
              "reaction",
              "meme",
              "memes",
              "funny",
              "new",
              "videos",
              "reacting",
              "dance",
              "trend",
              "viral",
              "cringe",
              "compilation",
              "ylyl",
              "you laugh you lose",
              "basicallyidowrk",
              "basically i do wrk",
              "crispy concords"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Tik Tok vs. Instagram Reels Bingo",
              "description": "tik tok vs. reels bingo w/ @BasicallyIDoWrk \nleave a like n subscribe\n\nwe back with another bingo showdown video. this time vs. marcel aka basicallyidowrk. today we're switching platforms, one of us using tiktok and the other using reels. we both try and complete the same bingo board at the same time. lmk if i should do this again :)\n\nJoin my Discord! - http://discord.gg/crispy\n\nMy Links:\nTwitter: http://twitter.com/Crispy\nInstagram: http://instagram.com/Crispy\nSnapchat: CrispyConcords\n\nIntro 0:00\nRound 1 2:01\nRound 2 16:12\nFinal Round 23:12"
            }
          },
          "contentDetails": {
            "duration": "PT32M33S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "241370",
            "likeCount": "12605",
            "favoriteCount": "0",
            "commentCount": "696"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "2iw9qUCcf9gFX4sxFyce24951Gc",
          "id": "52iBKzh3oWU",
          "snippet": {
            "publishedAt": "2025-03-29T18:00:00Z",
            "channelId": "UCxOzbkk0bdVl6-tH1Fcajfg",
            "title": "Squid Game In Real Life: Beta Squad Edition",
            "description": "We take on Squid Game In Real Life! Last Person Standing Wins £1,000,000 Who do you think will win?\n\nSubscribe to everyone! \nAj: @AjShabeel \nSharky: @sharky \nChunkz: @Chunkz \nNiko: @Niko \nKenny: @KingKennyTV \n\nFollow us on Social Media to stay connected!\nTwitter ► https://twitter.com/BetaSquad5\nInstagram ►  https://www.instagram.com/betasquad5\nTikTok  ► https://www.tiktok.com/@betasquad",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/52iBKzh3oWU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/52iBKzh3oWU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/52iBKzh3oWU/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/52iBKzh3oWU/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/52iBKzh3oWU/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Beta Squad",
            "tags": [
              "Beta Squad",
              "Squid Game",
              "IRL",
              "Niko Omilana",
              "Chunkz",
              "AJ Shabeel",
              "Sharky",
              "King Kenny",
              "Harry Pinero",
              "Deji",
              "Bradley",
              "Gib",
              "George"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Squid Game In Real Life: Beta Squad Edition",
              "description": "We take on Squid Game In Real Life! Last Person Standing Wins £1,000,000 Who do you think will win?\n\nSubscribe to everyone! \nAj: @AjShabeel \nSharky: @sharky \nChunkz: @Chunkz \nNiko: @Niko \nKenny: @KingKennyTV \n\nFollow us on Social Media to stay connected!\nTwitter ► https://twitter.com/BetaSquad5\nInstagram ►  https://www.instagram.com/betasquad5\nTikTok  ► https://www.tiktok.com/@betasquad"
            },
            "defaultAudioLanguage": "en-GB"
          },
          "contentDetails": {
            "duration": "PT1H3M41S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "4971847",
            "likeCount": "243902",
            "favoriteCount": "0",
            "commentCount": "16655"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "LaH_fqwkUSXF9zQ1uShHh3DmkqA",
          "id": "ASoKhMbUFV0",
          "snippet": {
            "publishedAt": "2025-03-31T04:00:07Z",
            "channelId": "UC2PeMPA8PAOp-bynLoCeMLA",
            "title": "Animated Short: The Long Night of Serenity | Honkai: Star Rail",
            "description": "Don the crown that halts life\nEven death itself favors lowered eyes\nWalk through the palace of farewells\nConnect to the world of the departed\n\nAmid the icy depths and funeral hymns\nDays and nights\nBow over this snow-covered land\nBecome the only song here\n\nAll sighs flow from her fingertips\nAll words of comfort are stopped by her hands\nAll cries of grief are swallowed by her palms\n\nA poem titled \"Aidonia's Holy Maiden\"\n\nEnglish Voice:\nCastorice — Melody Muze\n\nDownload the Game\nhttps://hoyo.link/mxH9laSeK\n\nFollow us to get the latest info.\nHoYoLAB: https://www.hoyolab.com/accountCenter/postList?id=172534910\nFacebook: https://www.facebook.com/HonkaiStarRail/\nX: https://twitter.com/honkaistarrail\nDiscord: https://discord.gg/honkaistarrail\nInstagram: https://www.instagram.com/honkaistarrail/\nTikTok: https://www.tiktok.com/@honkaistarrail_official\nReddit: https://www.reddit.com/r/HonkaiStarRail/\n\n#HonkaiStarRail\n#StarRail\n#Castorice",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/ASoKhMbUFV0/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/ASoKhMbUFV0/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/ASoKhMbUFV0/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/ASoKhMbUFV0/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/ASoKhMbUFV0/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Honkai: Star Rail",
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "Animated Short: The Long Night of Serenity | Honkai: Star Rail",
              "description": "Don the crown that halts life\nEven death itself favors lowered eyes\nWalk through the palace of farewells\nConnect to the world of the departed\n\nAmid the icy depths and funeral hymns\nDays and nights\nBow over this snow-covered land\nBecome the only song here\n\nAll sighs flow from her fingertips\nAll words of comfort are stopped by her hands\nAll cries of grief are swallowed by her palms\n\nA poem titled \"Aidonia's Holy Maiden\"\n\nEnglish Voice:\nCastorice — Melody Muze\n\nDownload the Game\nhttps://hoyo.link/mxH9laSeK\n\nFollow us to get the latest info.\nHoYoLAB: https://www.hoyolab.com/accountCenter/postList?id=172534910\nFacebook: https://www.facebook.com/HonkaiStarRail/\nX: https://twitter.com/honkaistarrail\nDiscord: https://discord.gg/honkaistarrail\nInstagram: https://www.instagram.com/honkaistarrail/\nTikTok: https://www.tiktok.com/@honkaistarrail_official\nReddit: https://www.reddit.com/r/HonkaiStarRail/\n\n#HonkaiStarRail\n#StarRail\n#Castorice"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT7M29S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": false,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "675437",
            "likeCount": "72852",
            "favoriteCount": "0",
            "commentCount": "2923"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "pp-BxHb879jDMEwLQBTNa8cbkvQ",
          "id": "3faBqGdGHaM",
          "snippet": {
            "publishedAt": "2025-03-30T17:04:21Z",
            "channelId": "UC-Y6B7OAvwq7EeTR_FZeZyg",
            "title": "Trying To Find A Girlfriend! (THE FINALE)",
            "description": "The Finale of my Journey To Find A Girlfriend Series is here! This is Episode 3 Of My Dating Show and the end of an era. Enjoy the Video!\n----------------------------------------\nMusic in this video:\n\nIntro song- Monopoly- Gunna\n\nFlashback Montage- CLOSURE- Ty2Fly\n\nEnd of the night montage- A MILLION- CThruRio\n\nOutro song- A MILLION- CThruRio\n\n----------------------------------------\nMY OTHER SOCIAL PLATFORMS:\nINSTAGRAM: bradyshepherdd \nTIKTOK: thebradyshepherd \nSNAPCHAT: bshepherd239\nSOUNDCLOUD: Brady Shepherd\n(Or click the links on my channel banner)\n----------------------------------------",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/3faBqGdGHaM/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/3faBqGdGHaM/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/3faBqGdGHaM/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/3faBqGdGHaM/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/3faBqGdGHaM/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Brady Shepherd",
            "tags": [
              "Brady shepherd girlfriend",
              "Finding a Girlfriend",
              "dating show"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Trying To Find A Girlfriend! (THE FINALE)",
              "description": "The Finale of my Journey To Find A Girlfriend Series is here! This is Episode 3 Of My Dating Show and the end of an era. Enjoy the Video!\n----------------------------------------\nMusic in this video:\n\nIntro song- Monopoly- Gunna\n\nFlashback Montage- CLOSURE- Ty2Fly\n\nEnd of the night montage- A MILLION- CThruRio\n\nOutro song- A MILLION- CThruRio\n\n----------------------------------------\nMY OTHER SOCIAL PLATFORMS:\nINSTAGRAM: bradyshepherdd \nTIKTOK: thebradyshepherd \nSNAPCHAT: bshepherd239\nSOUNDCLOUD: Brady Shepherd\n(Or click the links on my channel banner)\n----------------------------------------"
            }
          },
          "contentDetails": {
            "duration": "PT29M43S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "251994",
            "likeCount": "16448",
            "favoriteCount": "0",
            "commentCount": "2105"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "DlQFZySOVU_4Udj0zkm0oOa2i6g",
          "id": "OgkzcW6GZ98",
          "snippet": {
            "publishedAt": "2025-03-29T22:12:51Z",
            "channelId": "UCmGzPNrhD32RsPlKYmyw6gg",
            "title": "TOOK MY GIRL TO THE BAHAMAS !! * BIRTHDAY TRIP *",
            "description": "Thank you PrizePicks for sponsoring this video. \nClick https://prizepicks.onelink.me/ivHR/BNS\n\nSign up with code BNSFAM and get $50 instantly when you play your first $5+ lineup.\n\nThank you guys for watching!! Don’t forget to like,comment, and subscribe!! \n\nAlso huge thank you to \u200b\u2060@KAED__ \u200b\u2060@Blesiv \u200b\u2060@dessxmx for coming on this birthday trip!! \n\nDon’t forget to follow us on Snapchat for more daily post and more of our personal life! \n\nAmanda’s snap: https://www.snapchat.com/add/mandimpadilla\n\nBryan’s snap: https://snapchat.com/t/jbDgwwEK\n\nAlso follow us on instagram and join our broadcast channel for early access on our videos and more! \n\nIG LINKS: \n\nAmanda - https://www.instagram.com/stunnabby_?igsh=NTc4MTIwNjQ2YQ==\n\nBryan- https://www.instagram.com/bkleaan?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/OgkzcW6GZ98/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/OgkzcW6GZ98/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/OgkzcW6GZ98/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/OgkzcW6GZ98/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/OgkzcW6GZ98/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "B N S",
            "tags": [
              "Bkleaan",
              "Bryan Moran",
              "Amanda Padilla",
              "Stunnababy",
              "Thesefoos",
              "Bahamas trip",
              "Group activities",
              "Group trips",
              "Traveling vlogs",
              "David DOBRIK",
              "Tara yummy",
              "Jake Webber",
              "Vacation vlogs"
            ],
            "categoryId": "1",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "TOOK MY GIRL TO THE BAHAMAS !! * BIRTHDAY TRIP *",
              "description": "Thank you PrizePicks for sponsoring this video. \nClick https://prizepicks.onelink.me/ivHR/BNS\n\nSign up with code BNSFAM and get $50 instantly when you play your first $5+ lineup.\n\nThank you guys for watching!! Don’t forget to like,comment, and subscribe!! \n\nAlso huge thank you to \u200b\u2060@KAED__ \u200b\u2060@Blesiv \u200b\u2060@dessxmx for coming on this birthday trip!! \n\nDon’t forget to follow us on Snapchat for more daily post and more of our personal life! \n\nAmanda’s snap: https://www.snapchat.com/add/mandimpadilla\n\nBryan’s snap: https://snapchat.com/t/jbDgwwEK\n\nAlso follow us on instagram and join our broadcast channel for early access on our videos and more! \n\nIG LINKS: \n\nAmanda - https://www.instagram.com/stunnabby_?igsh=NTc4MTIwNjQ2YQ==\n\nBryan- https://www.instagram.com/bkleaan?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
            }
          },
          "contentDetails": {
            "duration": "PT37M52S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "regionRestriction": {
              "blocked": [
                "RU"
              ]
            },
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "429709",
            "likeCount": "13669",
            "favoriteCount": "0",
            "commentCount": "573"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "W--ofCGxfsXYVC5v2--P9ozCO6Q",
          "id": "YH8xn8VeLYo",
          "snippet": {
            "publishedAt": "2025-03-31T02:29:53Z",
            "channelId": "UCAILl3AE11CoqiSVs6rBwBQ",
            "title": "Anne Murray receives Lifetime Achievement Award | 2025 Juno Awards",
            "description": "@sarahmclachlan presents @annemurray with the Lifetime Achievement Award at the 2025 Juno Awards.\n\nIt's Canada’s Biggest Night in Music, @TheJUNOAwards,  live from Vancouver. Hosted by Michael Bublé, experience a night packed with performances, including the last-ever performance by Hall of Fame inductees Sum 41.\n\nFor all your Juno Awards coverage, go to cbcmusic.ca/junos                                                                                                                                                                                                \n                                                                                                                                                                                                        \nSubscribe to @cbcmusic for everything you need to know about the week in music, exclusive live performances and the best new songs, sign up for CBC Music's newsletter, Listen Up!: http://cbc.ca/listenup \n\nCBC Music is your hub for coast-to-coast-to-coast Canadian music. Watch exclusive performances, candid interviews, and behind-the-scenes content featuring your favourite artists. Visit https://cbc.ca/music for more. \n\nFollow us on Facebook: https://facebook.com/CBCMusic \nOr Twitter: https://x.com/CBCMusic \nOr Instagram: https://instagram.com/cbc_music\n\n---------------------\nAnne Murray, Anne Murray lifetime achievement, lifetime achievement award, Sarah McLachlan, Canadian singer-songwriter, folk rock, adult contemporary, country, classic Canadian music, female vocalists, powerful female vocals, Canadian music legend, icon, adult contemporary, classic Canadian music, Anne Murray career, Canadian music history, music legend tribute, classic hits, CBC, 2025 Junos, Juno Awards, Canadian Music Awards, CBC Music, Live Music, Canadian Artists, Canadian Music Industry, Anne Murray receives Lifetime Achievement Award | 2025 Juno Awards",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/YH8xn8VeLYo/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/YH8xn8VeLYo/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/YH8xn8VeLYo/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/YH8xn8VeLYo/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/YH8xn8VeLYo/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "CBC Music",
            "tags": [
              "Anne Murray",
              "Anne Murray lifetime achievement",
              "lifetime achievement award",
              "Sarah McLachlan",
              "Canadian singer-songwriter",
              "folk rock",
              "adult contemporary",
              "country",
              "classic Canadian music",
              "female vocalists",
              "powerful female vocals",
              "Canadian music legend",
              "icon",
              "Anne Murray career",
              "Canadian music history",
              "music legend tribute",
              "classic hits",
              "CBC",
              "2025 Junos",
              "Juno Awards",
              "CBC Music",
              "Live Music",
              "Canadian Artists",
              "Anne Murray receives Lifetime Achievement Award | 2025 Juno Awards"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Anne Murray receives Lifetime Achievement Award | 2025 Juno Awards",
              "description": "@sarahmclachlan presents @annemurray with the Lifetime Achievement Award at the 2025 Juno Awards.\n\nIt's Canada’s Biggest Night in Music, @TheJUNOAwards,  live from Vancouver. Hosted by Michael Bublé, experience a night packed with performances, including the last-ever performance by Hall of Fame inductees Sum 41.\n\nFor all your Juno Awards coverage, go to cbcmusic.ca/junos                                                                                                                                                                                                \n                                                                                                                                                                                                        \nSubscribe to @cbcmusic for everything you need to know about the week in music, exclusive live performances and the best new songs, sign up for CBC Music's newsletter, Listen Up!: http://cbc.ca/listenup \n\nCBC Music is your hub for coast-to-coast-to-coast Canadian music. Watch exclusive performances, candid interviews, and behind-the-scenes content featuring your favourite artists. Visit https://cbc.ca/music for more. \n\nFollow us on Facebook: https://facebook.com/CBCMusic \nOr Twitter: https://x.com/CBCMusic \nOr Instagram: https://instagram.com/cbc_music\n\n---------------------\nAnne Murray, Anne Murray lifetime achievement, lifetime achievement award, Sarah McLachlan, Canadian singer-songwriter, folk rock, adult contemporary, country, classic Canadian music, female vocalists, powerful female vocals, Canadian music legend, icon, adult contemporary, classic Canadian music, Anne Murray career, Canadian music history, music legend tribute, classic hits, CBC, 2025 Junos, Juno Awards, Canadian Music Awards, CBC Music, Live Music, Canadian Artists, Canadian Music Industry, Anne Murray receives Lifetime Achievement Award | 2025 Juno Awards"
            }
          },
          "contentDetails": {
            "duration": "PT10M52S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "159365",
            "likeCount": "2585",
            "favoriteCount": "0",
            "commentCount": "334"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "qikgWCP6UPnSuXfU92p_4IqeFSA",
          "id": "C1r7zAp6weA",
          "snippet": {
            "publishedAt": "2025-03-30T22:22:36Z",
            "channelId": "UCus9BsHCIAP8zVpNPQ5q8hw",
            "title": "LSU Kim Mulkey LOSS to UCLA in Elite-8 postgame",
            "description": "LSU head women's basketball coach Kim Mulkey spoke with the media following her Tigers Elite-8 loss to UCLA, 72-65.\n\nAlso, Aneesah Morrow, Flau’Jae Johnson and Mikaylah Williams.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/C1r7zAp6weA/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/C1r7zAp6weA/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/C1r7zAp6weA/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/C1r7zAp6weA/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/C1r7zAp6weA/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "LSU Tigers on TigerBait",
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "LSU Kim Mulkey LOSS to UCLA in Elite-8 postgame",
              "description": "LSU head women's basketball coach Kim Mulkey spoke with the media following her Tigers Elite-8 loss to UCLA, 72-65.\n\nAlso, Aneesah Morrow, Flau’Jae Johnson and Mikaylah Williams."
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT19M1S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "106478",
            "likeCount": "1411",
            "favoriteCount": "0",
            "commentCount": "624"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "nAGZiBK4SAzCOIaH_Ke1qOq6aQM",
          "id": "hv7MLmuVkgE",
          "snippet": {
            "publishedAt": "2025-03-30T17:25:59Z",
            "channelId": "UClQ3NafOy_42dJ0toK3QUKw",
            "title": "Best Cake Art Wins $1,000!",
            "description": "We challenged each other to see who's the best at cake art... The winner gets $1,000!\n\nSTAY WILD REACTS: @StayWild-Reacts \nBEN AZELART: @BenAzelart \nCAM HUFF: @CamHuff \n\nNEW VIDEOS EVERY WEEK!!\n\nsubscribe:)",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/hv7MLmuVkgE/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/hv7MLmuVkgE/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/hv7MLmuVkgE/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/hv7MLmuVkgE/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/hv7MLmuVkgE/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Stay Wild",
            "tags": [
              "Ben Azelart",
              "Stay Wild",
              "Stay Wild Vlogs",
              "Cam Huff",
              "Stay Wild Reacts",
              "Stay Wild Gaming"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Best Cake Art Wins $1,000!",
              "description": "We challenged each other to see who's the best at cake art... The winner gets $1,000!\n\nSTAY WILD REACTS: @StayWild-Reacts \nBEN AZELART: @BenAzelart \nCAM HUFF: @CamHuff \n\nNEW VIDEOS EVERY WEEK!!\n\nsubscribe:)"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT40M38S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "4013531",
            "likeCount": "49488",
            "favoriteCount": "0",
            "commentCount": "7092"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "fCLx5Bd74Sg-wYbrbeDYBCrAJoE",
          "id": "MuS_YNeYoQ0",
          "snippet": {
            "publishedAt": "2025-03-30T03:37:57Z",
            "channelId": "UCKjEtnnXEHsXE9IvCb92V7g",
            "title": "Duke vs. Alabama - Elite Eight NCAA tournament extended highlights",
            "description": "Watch the highlights from No. 1 Duke and No. 2 Alabama's matchup in the Elite Eight of the 2025 men’s NCAA tournament.\n\nWatch highlights, game recaps and much more from the NCAA Division I men’s and women’s basketball tournaments on the official NCAA March Madness YouTube channel.\n\nSubscribe now to be updated on the latest videos: https://www.youtube.com/marchmadness\n\nConnect with March Madness:\n\nFollow March Madness MBB on Twitter: https://twitter.com/MarchMadnessMBB\n\nFollow March Madness WBB on Twitter: https://twitter.com/MarchMadnessWBB\n\nLike March Madness MBB on Facebook: https://www.facebook.com/MarchMadnessMBB\n\nLike March Madness WBB on Facebook: https://www.facebook.com/MarchMadnessWBB/\n\nFollow March Madness MBB on Instagram: https://www.instagram.com/marchmadnessmbb/\n\nFollow March Madness WBB on Instagram: https://www.instagram.com/marchmadnesswbb/\n\nFollow March Madness MBB on Snapchat: https://www.snapchat.com/add/\nmarchmadnessmbb\n\n#marchmadness #collegebasketball",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/MuS_YNeYoQ0/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/MuS_YNeYoQ0/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/MuS_YNeYoQ0/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/MuS_YNeYoQ0/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/MuS_YNeYoQ0/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "March Madness",
            "tags": [
              "2024 NCAA Men's Division I Basketball Tournament (Sports League Championship Event)",
              "Alabama Crimson Tide",
              "Duke Blue Devils",
              "Duke Blue Devils vs. Alabama Crimson Tide",
              "college basketball",
              "college hoops",
              "march madness",
              "ncaa",
              "ncaa basketball",
              "duke mbb",
              "duke 2025",
              "duke mbb 2025",
              "duke alabama",
              "cooper flagg",
              "cooper flagg duke",
              "cooper flagg highlights",
              "duke men's basketball",
              "duke march madness",
              "cooper flagg march madness",
              "alabama mbb",
              "alabama mbb 2025",
              "duke elite eight"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Duke vs. Alabama - Elite Eight NCAA tournament extended highlights",
              "description": "Watch the highlights from No. 1 Duke and No. 2 Alabama's matchup in the Elite Eight of the 2025 men’s NCAA tournament.\n\nWatch highlights, game recaps and much more from the NCAA Division I men’s and women’s basketball tournaments on the official NCAA March Madness YouTube channel.\n\nSubscribe now to be updated on the latest videos: https://www.youtube.com/marchmadness\n\nConnect with March Madness:\n\nFollow March Madness MBB on Twitter: https://twitter.com/MarchMadnessMBB\n\nFollow March Madness WBB on Twitter: https://twitter.com/MarchMadnessWBB\n\nLike March Madness MBB on Facebook: https://www.facebook.com/MarchMadnessMBB\n\nLike March Madness WBB on Facebook: https://www.facebook.com/MarchMadnessWBB/\n\nFollow March Madness MBB on Instagram: https://www.instagram.com/marchmadnessmbb/\n\nFollow March Madness WBB on Instagram: https://www.instagram.com/marchmadnesswbb/\n\nFollow March Madness MBB on Snapchat: https://www.snapchat.com/add/\nmarchmadnessmbb\n\n#marchmadness #collegebasketball"
            }
          },
          "contentDetails": {
            "duration": "PT10M23S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1153722",
            "likeCount": "9922",
            "favoriteCount": "0",
            "commentCount": "1059"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "XuSbE39jjOel-ljq9VGu0ijj8cs",
          "id": "vp_dzqZXgMg",
          "snippet": {
            "publishedAt": "2025-03-29T16:01:08Z",
            "channelId": "UCGwu0nbY2wSkW8N-cghnLpA",
            "title": "My Biggest Hyperfixation Yet.",
            "description": "this tiny thing is consuming my entire life...... chiikawa my beloved\nPlease be very respectful when joining any sort of public community. I'm talking BEST BEHAVIOR!!!! DON'T YOU GUYS GO EMBARRASSING ME IN FRONT OF THE CHIIKAWA COMMUNITY!!!!\n▼▼▼▼▼▼▼▼▼\nChiikawa Resources for Beginners: https://pikakirakuzu.com/2024/06/22/resource-chiikawa-fan-resources/\n\n\n✦ The Team ✦\nAdamX: https://twitter.com/AdamEHKS\nBrooskee: https://twitter.com/brooskeeb\nCiara: https://twitter.com/bresnahammy?lang=en\nCheckers: https://twitter.com/chexchess\nCorin: https://www.instagram.com/corinkeen/?hl=en\nColleen: https://bsky.app/profile/solarcitrus.bsky.social\nClaudia: https://bsky.app/profile/hiyfi.bsky.social\nDavidBaronArt: https://twitter.com/DavidBaronArt\nDee Helm: https://twitter.com/DeeRedHelm\nDenny: https://bsky.app/profile/90percentdenny.bsky.social\nDevon: https://www.youtube.com/@devonkong\nDxmnduke: https://bsky.app/profile/dxmnduke.bsky.social\nEman: https://twitter.com/emanx3c\nFawnlouette: https://www.instagram.com/fawnlouette/\nFlippmeister: https://twitter.com/TheFlippmeister\nJRF\nKam: https://twitter.com/dettlefff\nLeslie V\nPinkPapi: https://www.youtube.com/@PinkPapiYouTube\nRocketSockit: https://twitter.com/RocketSockit\nTiffanySeng: https://www.youtube.com/@TiffanySeng\nVijaylante: https://www.instagram.com/vijaylantes\nWillard: https://twitter.com/willardworm\nYin\nZangeiti: https://twitter.com/zangeiti\n------------------------------------------------------------------------------------\nSUBSCRIBE for more animations!\nhttps://www.youtube.com/@jaidenanimations\n\nMERCH:\nhttps://jaidenanimations.com/\n\nTWITTER:\nhttps://twitter.com/JaidenAnimation\n\nINSTAGRAM:\nhttps://instagram.com/jaiden_animations\n\nWanna Send Fanart?\nYou can send it to me through Twitter or Instagram (links above)\n------------------------------------------------------------------------------------\nMusic: nintendo and genshin\n------------------------------------------------------------------------------------\n#jaidenanimations #chiikawa #obsessed #ruiningmylife",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/vp_dzqZXgMg/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/vp_dzqZXgMg/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/vp_dzqZXgMg/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/vp_dzqZXgMg/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/vp_dzqZXgMg/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "JaidenAnimations",
            "tags": [
              "jaiden",
              "animations",
              "jaidenanimation",
              "jaidenanimations",
              "animation",
              "chiikawa",
              "manga",
              "anime",
              "hyperfixation",
              "japan",
              "obsessed",
              "adhd"
            ],
            "categoryId": "1",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "My Biggest Hyperfixation Yet.",
              "description": "this tiny thing is consuming my entire life...... chiikawa my beloved\nPlease be very respectful when joining any sort of public community. I'm talking BEST BEHAVIOR!!!! DON'T YOU GUYS GO EMBARRASSING ME IN FRONT OF THE CHIIKAWA COMMUNITY!!!!\n▼▼▼▼▼▼▼▼▼\nChiikawa Resources for Beginners: https://pikakirakuzu.com/2024/06/22/resource-chiikawa-fan-resources/\n\n\n✦ The Team ✦\nAdamX: https://twitter.com/AdamEHKS\nBrooskee: https://twitter.com/brooskeeb\nCiara: https://twitter.com/bresnahammy?lang=en\nCheckers: https://twitter.com/chexchess\nCorin: https://www.instagram.com/corinkeen/?hl=en\nColleen: https://bsky.app/profile/solarcitrus.bsky.social\nClaudia: https://bsky.app/profile/hiyfi.bsky.social\nDavidBaronArt: https://twitter.com/DavidBaronArt\nDee Helm: https://twitter.com/DeeRedHelm\nDenny: https://bsky.app/profile/90percentdenny.bsky.social\nDevon: https://www.youtube.com/@devonkong\nDxmnduke: https://bsky.app/profile/dxmnduke.bsky.social\nEman: https://twitter.com/emanx3c\nFawnlouette: https://www.instagram.com/fawnlouette/\nFlippmeister: https://twitter.com/TheFlippmeister\nJRF\nKam: https://twitter.com/dettlefff\nLeslie V\nPinkPapi: https://www.youtube.com/@PinkPapiYouTube\nRocketSockit: https://twitter.com/RocketSockit\nTiffanySeng: https://www.youtube.com/@TiffanySeng\nVijaylante: https://www.instagram.com/vijaylantes\nWillard: https://twitter.com/willardworm\nYin\nZangeiti: https://twitter.com/zangeiti\n------------------------------------------------------------------------------------\nSUBSCRIBE for more animations!\nhttps://www.youtube.com/@jaidenanimations\n\nMERCH:\nhttps://jaidenanimations.com/\n\nTWITTER:\nhttps://twitter.com/JaidenAnimation\n\nINSTAGRAM:\nhttps://instagram.com/jaiden_animations\n\nWanna Send Fanart?\nYou can send it to me through Twitter or Instagram (links above)\n------------------------------------------------------------------------------------\nMusic: nintendo and genshin\n------------------------------------------------------------------------------------\n#jaidenanimations #chiikawa #obsessed #ruiningmylife"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT13M17S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "3271868",
            "likeCount": "310544",
            "favoriteCount": "0",
            "commentCount": "18051"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "CpLyCM_TZk5Q77M64hXkExGxsHk",
          "id": "NfPR1FdjtcM",
          "snippet": {
            "publishedAt": "2025-03-31T03:49:00Z",
            "channelId": "UCbcxFkd6B9xUU54InHv4Tig",
            "title": "Novak Djokovic vs Jakub Mensik For The Title | Miami 2025 Final Highlights",
            "description": "SUBSCRIBE to our channel for the best ATP tennis videos and tennis highlights: https://www.youtube.com/tennistv?sub_confirmation=1\n\nWatch official ATP tennis streams from every tournament: http://tnn.is/YouTube\n\nTennis TV is the OFFICIAL live streaming service of the ATP Tour.\n\nTennis TV features live streaming and video on demand of ATP tennis matches in full on PC, Mac, mobile & tablet apps on iOS & Android. Download the app to stream on your device: http://tnn.is/YouTube\n\nPlus Tennis TV is also available to stream tennis on your TV on Apple TV, Roku, Amazon Fire TV, Samsung Smart TV, LG Smart TV, Android TV, Xbox One as well as AirPlay and Chromecast.\n\nGet help on Tennis TV with our virtual assistant: https://tnn.is/help-youtube\n\nBuy Tennis TV merchandise in our store: https://tnn.is/store-youtube\n\nWatch the ATP Tour via your local TV broadcaster: https://go.watchtenn.is/atp?p=yt&source=ttv\n\nTo enquire about licensing ATP Tour footage contact IMG Replay: http://imgreplay.com/client/atp_media\n\n#tennis #tennistv #sports",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/NfPR1FdjtcM/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/NfPR1FdjtcM/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/NfPR1FdjtcM/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/NfPR1FdjtcM/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/NfPR1FdjtcM/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Tennis TV",
            "tags": [
              "miami open",
              "miami open 2025",
              "miami open 2025 highlights",
              "djokovic vs mensik miami open 2025",
              "djokovic vs mensik miami highlights",
              "novak djokovic miami open 2025",
              "djokovic highlights",
              "djokovic 99 titles",
              "mensik first masters title",
              "mensik defeats djokovic",
              "jakub mensik miami open 2025",
              "mensik atp highlights",
              "mensik atp",
              "jakub mensik 19 years old",
              "atp highlights",
              "tennis highlights",
              "atp final masters",
              "masters 1000 highlights",
              "miami final highlights",
              "miami open final 2025"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Novak Djokovic vs Jakub Mensik For The Title | Miami 2025 Final Highlights",
              "description": "SUBSCRIBE to our channel for the best ATP tennis videos and tennis highlights: https://www.youtube.com/tennistv?sub_confirmation=1\n\nWatch official ATP tennis streams from every tournament: http://tnn.is/YouTube\n\nTennis TV is the OFFICIAL live streaming service of the ATP Tour.\n\nTennis TV features live streaming and video on demand of ATP tennis matches in full on PC, Mac, mobile & tablet apps on iOS & Android. Download the app to stream on your device: http://tnn.is/YouTube\n\nPlus Tennis TV is also available to stream tennis on your TV on Apple TV, Roku, Amazon Fire TV, Samsung Smart TV, LG Smart TV, Android TV, Xbox One as well as AirPlay and Chromecast.\n\nGet help on Tennis TV with our virtual assistant: https://tnn.is/help-youtube\n\nBuy Tennis TV merchandise in our store: https://tnn.is/store-youtube\n\nWatch the ATP Tour via your local TV broadcaster: https://go.watchtenn.is/atp?p=yt&source=ttv\n\nTo enquire about licensing ATP Tour footage contact IMG Replay: http://imgreplay.com/client/atp_media\n\n#tennis #tennistv #sports"
            }
          },
          "contentDetails": {
            "duration": "PT8M11S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "1048433",
            "likeCount": "15017",
            "favoriteCount": "0",
            "commentCount": "1901"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "BJSrHMsw564aec5Nv1zVLhWwUC4",
          "id": "pnx5OmpPlHs",
          "snippet": {
            "publishedAt": "2025-03-30T16:50:00Z",
            "channelId": "UC2rzsm1Qi6N1X-wuOg_p0Ng",
            "title": "The Best Screwdriver Set Ever Tested!",
            "description": "Snap On, Craftsman, GearWrench, Duratech, Mayhew, Stahlwille, Wiha, DeWalt, Kobalt, Williams, GreatNeck, ValueMax, Black+Decker, Pittsburgh, and Amartisan. Screwdrivers compared for performance on Phillips and slotted screws. The screwdrivers were also compared for maximum handle force.\n\nI purchased all of the screwdrivers to ensure an unbiased review. So, thank you for supporting the channel.\n\n➡ Thank you very much for supporting the channel through Patreon: https://www.patreon.com/projectfarm  \n➡ Thank you for supporting the channel through memberships:\nhttps://www.youtube.com/channel/UC2rzsm1Qi6N1X-wuOg_p0Ng/join\n➡ An easy way to find past videos along with products tested: http://bit.ly/2FCrBpk  A big thanks to Jim for putting this together. \n➡ Facebook Project Farm: https://www.facebook.com/people/Project-Farm/100084004365959/\n➡ TikTok: https://www.tiktok.com/@realprojectfarm?_t=8oA53IvDBz5&_r=1\n➡ Merch: project-farm.com    \n➡ Click here if you'd like to subscribe:   https://www.youtube.com/channel/UC2rzsm1Qi6N1X-wuOg_p0Ng?sub_confirmation=1 \n➡ As an Amazon Associate I earn from qualifying purchases.\n\n➡ Products Tested In This Video (in no particular order):\nCraftsman: https://amzn.to/40ZHlsC\nMayhew: https://amzn.to/3D10l1Q\nDuratech: https://amzn.to/4hAnJST\nGearWrench: https://amzn.to/4aVQVRM\nStahlwille: https://amzn.to/4jXrhAj\nWiha: https://amzn.to/3ECugOA\nKnipex: https://amzn.to/4jUOKlK\nDeWalt: https://amzn.to/4jXPDtW\nKobalt: https://amzn.to/40XbM2F\nWilliams: https://amzn.to/3D0gzZ7\nGreatNeck: https://amzn.to/3WWGGXP\nValueMax: https://amzn.to/3CJDdVH\nBlack+Decker: https://amzn.to/3QeEvuL\nArmartisan: https://amzn.to/4jTXxo2\nPittsburgh: Available at Harbor Freight\nSnap On: Available at the online Snap On store\n\nVideography Equipment:\nCanon EOS R6 Mark II: https://amzn.to/4aErF18\nCanon 70D Camera: https://amzn.to/31b5Gy0\nAzden Microphone: https://amzn.to/34d3DLE\nGo Pro Bundle:  https://amzn.to/3Ca0ZVN\n\nThis video is only for entertainment purposes. If you rely on the information portrayed in this video, you assume the responsibility for the results.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/pnx5OmpPlHs/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/pnx5OmpPlHs/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/pnx5OmpPlHs/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/pnx5OmpPlHs/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/pnx5OmpPlHs/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Project Farm",
            "tags": [
              "Screwdriver review",
              "snap on screwdriver review",
              "best screwdriver",
              "craftsman screwdriver review",
              "mayhew screwdriver review",
              "duratech screwdriver review",
              "gearwrench screwdriver review",
              "stahlwille screwdriver review",
              "wiha screwdriver review",
              "knipex screwdriver review",
              "dewalt screwdriver review",
              "kobalt screwdriver review",
              "Williams screwdriver review",
              "greatneck screwdriver review",
              "valuemax screwdriver review",
              "black and decker screwdriver review"
            ],
            "categoryId": "26",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "The Best Screwdriver Set Ever Tested!",
              "description": "Snap On, Craftsman, GearWrench, Duratech, Mayhew, Stahlwille, Wiha, DeWalt, Kobalt, Williams, GreatNeck, ValueMax, Black+Decker, Pittsburgh, and Amartisan. Screwdrivers compared for performance on Phillips and slotted screws. The screwdrivers were also compared for maximum handle force.\n\nI purchased all of the screwdrivers to ensure an unbiased review. So, thank you for supporting the channel.\n\n➡ Thank you very much for supporting the channel through Patreon: https://www.patreon.com/projectfarm  \n➡ Thank you for supporting the channel through memberships:\nhttps://www.youtube.com/channel/UC2rzsm1Qi6N1X-wuOg_p0Ng/join\n➡ An easy way to find past videos along with products tested: http://bit.ly/2FCrBpk  A big thanks to Jim for putting this together. \n➡ Facebook Project Farm: https://www.facebook.com/people/Project-Farm/100084004365959/\n➡ TikTok: https://www.tiktok.com/@realprojectfarm?_t=8oA53IvDBz5&_r=1\n➡ Merch: project-farm.com    \n➡ Click here if you'd like to subscribe:   https://www.youtube.com/channel/UC2rzsm1Qi6N1X-wuOg_p0Ng?sub_confirmation=1 \n➡ As an Amazon Associate I earn from qualifying purchases.\n\n➡ Products Tested In This Video (in no particular order):\nCraftsman: https://amzn.to/40ZHlsC\nMayhew: https://amzn.to/3D10l1Q\nDuratech: https://amzn.to/4hAnJST\nGearWrench: https://amzn.to/4aVQVRM\nStahlwille: https://amzn.to/4jXrhAj\nWiha: https://amzn.to/3ECugOA\nKnipex: https://amzn.to/4jUOKlK\nDeWalt: https://amzn.to/4jXPDtW\nKobalt: https://amzn.to/40XbM2F\nWilliams: https://amzn.to/3D0gzZ7\nGreatNeck: https://amzn.to/3WWGGXP\nValueMax: https://amzn.to/3CJDdVH\nBlack+Decker: https://amzn.to/3QeEvuL\nArmartisan: https://amzn.to/4jTXxo2\nPittsburgh: Available at Harbor Freight\nSnap On: Available at the online Snap On store\n\nVideography Equipment:\nCanon EOS R6 Mark II: https://amzn.to/4aErF18\nCanon 70D Camera: https://amzn.to/31b5Gy0\nAzden Microphone: https://amzn.to/34d3DLE\nGo Pro Bundle:  https://amzn.to/3Ca0ZVN\n\nThis video is only for entertainment purposes. If you rely on the information portrayed in this video, you assume the responsibility for the results."
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT18M57S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "581975",
            "likeCount": "29060",
            "favoriteCount": "0",
            "commentCount": "4970"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "fYPffj3TaEP60k8Go3HEPxAJvSE",
          "id": "xoobhC3KDRI",
          "snippet": {
            "publishedAt": "2025-04-01T08:30:20Z",
            "channelId": "UCcPWnCj5AKC19HaySZjb25g",
            "title": "WILDCARD ACTIVE 🚨 MY FPL GW30 WILDCARD TEAM SELECTION! 📝 | Fantasy Premier League Tips 2024/25",
            "description": "Click here to check out Huel Black Edition: https://my.huel.com/FPLHarryMarch25 and use code HARRYMARCH for £10 off your order in the UK and 15% off in the US. New customers only. Live for 30 days. #ad \n\nMy FPL GW30 Team Selection and Potential Transfers!\n🏆 Previous 4 FPL Ranks: 510th, 1,345th, 3,814th, 5,401st! \n\n💻 Sign Up to Channel Membership for Extra Benefits!  - https://www.youtube.com/channel/UCcPWnCj5AKC19HaySZjb25g/join\n___________\n✅ Follow me on Twitter - https://twitter.com/FPL_Harry\n🔥 Join the Subscriber League: Code u8f9fq - link: https://fantasy.premierleague.com/leagues/auto-join/u8f9fq\n🔔 Join as a channel member - https://www.youtube.com/channel/UCcPWnCj5AKC19HaySZjb25g/join\n📊 Sign Up to Join Fantasy Football Scout! - https://bit.ly/FFScoutxFPLHarry\n___________\n📧  For inquiries of partnerships or sponsorships - please email Harry.Daniels@EngagePartnerships.uk\n🙋🏻\u200d♂️ Personal Emails - fpl.harry@gmail.com\n\n🌳 Link to all my socials! https://linktr.ee/FPL_Harry\n___________\n⏱️ Timestamps\n0:00 Intro\n0:44 GW30 Wildcard Team!\n8:21 Huel #ad \n9:30 Future Transfer Plans\n___________\n\n#FPL #Fantasypremierleague #PremierLeague #gw30",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/xoobhC3KDRI/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/xoobhC3KDRI/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/xoobhC3KDRI/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/xoobhC3KDRI/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/xoobhC3KDRI/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "FPL Harry",
            "tags": [
              "FPL",
              "Premier League",
              "Fantasy Premier League"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "WILDCARD ACTIVE 🚨 MY FPL GW30 WILDCARD TEAM SELECTION! 📝 | Fantasy Premier League Tips 2024/25",
              "description": "Click here to check out Huel Black Edition: https://my.huel.com/FPLHarryMarch25 and use code HARRYMARCH for £10 off your order in the UK and 15% off in the US. New customers only. Live for 30 days. #ad \n\nMy FPL GW30 Team Selection and Potential Transfers!\n🏆 Previous 4 FPL Ranks: 510th, 1,345th, 3,814th, 5,401st! \n\n💻 Sign Up to Channel Membership for Extra Benefits!  - https://www.youtube.com/channel/UCcPWnCj5AKC19HaySZjb25g/join\n___________\n✅ Follow me on Twitter - https://twitter.com/FPL_Harry\n🔥 Join the Subscriber League: Code u8f9fq - link: https://fantasy.premierleague.com/leagues/auto-join/u8f9fq\n🔔 Join as a channel member - https://www.youtube.com/channel/UCcPWnCj5AKC19HaySZjb25g/join\n📊 Sign Up to Join Fantasy Football Scout! - https://bit.ly/FFScoutxFPLHarry\n___________\n📧  For inquiries of partnerships or sponsorships - please email Harry.Daniels@EngagePartnerships.uk\n🙋🏻\u200d♂️ Personal Emails - fpl.harry@gmail.com\n\n🌳 Link to all my socials! https://linktr.ee/FPL_Harry\n___________\n⏱️ Timestamps\n0:00 Intro\n0:44 GW30 Wildcard Team!\n8:21 Huel #ad \n9:30 Future Transfer Plans\n___________\n\n#FPL #Fantasypremierleague #PremierLeague #gw30"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT13M57S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "63772",
            "likeCount": "2179",
            "favoriteCount": "0",
            "commentCount": "275"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "ArKL_JD-20C4SSPWQet1eW0X1Y0",
          "id": "lb-B2zi9DtY",
          "snippet": {
            "publishedAt": "2025-03-29T15:01:02Z",
            "channelId": "UCnmGIkw-KdI0W5siakKPKog",
            "title": "We need to talk",
            "description": "https://www.joyridesweets.com/\nhttps://www.joyridesweets.com/\nhttps://www.joyridesweets.com/\n\n💜HUGE THANK YOU TO THE GENIUSES THAT HELPED MAKE THIS💜\nDirected by: Curtis Nicotra, Lucas Nicotra (@Sticks )\nWritten by: Curtis Nicotra, Lucas Nicotra (@Sticks  & Ryan Trahan\nProduction by: Sticks x NO1 Creative\nProducer: Austin McCormick\nCreative Producer: Drew Lorenz \nLead Cast: Ryan Trahan\nSupporting Cast: Drew Lorenz, Isaac Carlton, Austin McCormick\nDirector of Photography: Townsend Dixen\n1st Assistant Camera: Rebecca Baliko\nEditors/Colorists: Curtis & Lucas Nicotra\nProduction Designer: Mark Vogt - MacGuffin Makers\nAudio: Oliver Boon\nSound Design & Mix: António Miguel Santos\nArt Director: Emily Henninger\nSet Dresser: Camila Pons\nGaffer: Austin Bland\nVisual Effects by: Morph, Alien Media\nVFX Supervisor: Andrew Baer\nCG Artists: Owen Brewster, Stephen Burchell, Tom Cowles, Garrison Keeton, Ben McCloskey\nVisual Effects: Philip Bruinette, Noah Guardado, Austin MacFarlane, Lachlan MacFarlane, Ethan Montgomery\nBTS: Christian Chambers\nProduction Assistant: Preston Green",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/lb-B2zi9DtY/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/lb-B2zi9DtY/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/lb-B2zi9DtY/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/lb-B2zi9DtY/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/lb-B2zi9DtY/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Ryan Trahan",
            "tags": [
              "Ryan",
              "Trahan",
              "we need to talk",
              "joyride",
              "gummy buster",
              "movie"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "We need to talk",
              "description": "https://www.joyridesweets.com/\nhttps://www.joyridesweets.com/\nhttps://www.joyridesweets.com/\n\n💜HUGE THANK YOU TO THE GENIUSES THAT HELPED MAKE THIS💜\nDirected by: Curtis Nicotra, Lucas Nicotra (@Sticks )\nWritten by: Curtis Nicotra, Lucas Nicotra (@Sticks  & Ryan Trahan\nProduction by: Sticks x NO1 Creative\nProducer: Austin McCormick\nCreative Producer: Drew Lorenz \nLead Cast: Ryan Trahan\nSupporting Cast: Drew Lorenz, Isaac Carlton, Austin McCormick\nDirector of Photography: Townsend Dixen\n1st Assistant Camera: Rebecca Baliko\nEditors/Colorists: Curtis & Lucas Nicotra\nProduction Designer: Mark Vogt - MacGuffin Makers\nAudio: Oliver Boon\nSound Design & Mix: António Miguel Santos\nArt Director: Emily Henninger\nSet Dresser: Camila Pons\nGaffer: Austin Bland\nVisual Effects by: Morph, Alien Media\nVFX Supervisor: Andrew Baer\nCG Artists: Owen Brewster, Stephen Burchell, Tom Cowles, Garrison Keeton, Ben McCloskey\nVisual Effects: Philip Bruinette, Noah Guardado, Austin MacFarlane, Lachlan MacFarlane, Ethan Montgomery\nBTS: Christian Chambers\nProduction Assistant: Preston Green"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT6M59S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "4093330",
            "likeCount": "239153",
            "favoriteCount": "0",
            "commentCount": "18493"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "IWfRnBmqzmCUTydTTPa-mPnhr6M",
          "id": "gjmt81SmemU",
          "snippet": {
            "publishedAt": "2025-04-01T03:24:47Z",
            "channelId": "UCAHufvd02viJSRdt3ojdPOg",
            "title": "let's catch up | romance, moving, babies, pregnancy & regrets",
            "description": "🍋My Healthy Cookbook: Sunee Side Up\nhttps://suneebooks.com\n\n🔥My Workout Routines & 8 Week Challenges!\nhttps://sarahsday.com/collections/workout-programs\n\n🤰🏼Pregnancy Workout Guide:\nhttps://sarahsday.com/products/body-bump\n\n⭐️Restore Postpartum Workout & Recovery Guide:\nhttps://sarahsday.com/products/restore\n\n⏱Fitness Timer App:\nSezzy Timer: https://apps.apple.com/au/app/sezzy-timer/id1442742654\n\n📸Work in OUR STUDIO:\nhttps://www.houseofgroms.com/studio\n\n⭐️INSTAGRAM:\n@sarahs_day \nhttps://www.instagram.com/sarahs_day/\n\n🙋🏼\u200d♀️My Website:\nhttps://www.sarahsday.com",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/gjmt81SmemU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/gjmt81SmemU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/gjmt81SmemU/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/gjmt81SmemU/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/gjmt81SmemU/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Sarahs Day",
            "tags": [
              "life update",
              "1-2 kids",
              "2-3 kids",
              "boy mom",
              "finding soul mate",
              "how to find a boyfriend",
              "pregnancy symptoms",
              "postpartum",
              "weight loss",
              "workout routine",
              "skincare routine",
              "perioral dermatitis",
              "reflux baby",
              "clam parent",
              "healthy dinner",
              "cook with me",
              "healthy kids food",
              "family dinner",
              "newborn tips",
              "stay at home mom",
              "what I eat in a day",
              "daily vlog",
              "wholesome clog",
              "catch up",
              "lets chat",
              "chatty vlog",
              "story time"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "let's catch up | romance, moving, babies, pregnancy & regrets",
              "description": "🍋My Healthy Cookbook: Sunee Side Up\nhttps://suneebooks.com\n\n🔥My Workout Routines & 8 Week Challenges!\nhttps://sarahsday.com/collections/workout-programs\n\n🤰🏼Pregnancy Workout Guide:\nhttps://sarahsday.com/products/body-bump\n\n⭐️Restore Postpartum Workout & Recovery Guide:\nhttps://sarahsday.com/products/restore\n\n⏱Fitness Timer App:\nSezzy Timer: https://apps.apple.com/au/app/sezzy-timer/id1442742654\n\n📸Work in OUR STUDIO:\nhttps://www.houseofgroms.com/studio\n\n⭐️INSTAGRAM:\n@sarahs_day \nhttps://www.instagram.com/sarahs_day/\n\n🙋🏼\u200d♀️My Website:\nhttps://www.sarahsday.com"
            }
          },
          "contentDetails": {
            "duration": "PT16M8S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "73300",
            "likeCount": "4025",
            "favoriteCount": "0",
            "commentCount": "179"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "WJmvmeMYfeTeZxPT358FoAcq5ds",
          "id": "U42BJ01E9nA",
          "snippet": {
            "publishedAt": "2025-03-30T14:32:37Z",
            "channelId": "UCvo9oZCTg_UaTQbhyXkXX3w",
            "title": "Surprising Our Daughter With Gender Reveal",
            "description": "Matt and Rebecca Zamolo surprise their daughter with the gender reveal of their new baby.  Never thought this would happen like this. \n\n▶ Get ZamFam merch! https://rebeccazamolo.com\n\nMore videos\nRebecca Zamolo | Surprising Daughter with Room Makeover!\nhttps://www.youtube.com/watch?v=-iu0hLc9GAY\n\nMy Daughter's First Halloween \nhttps://youtu.be/te10bOGDmkg\n\nJordan Matter | My Daughter Survives Every FIRST DAY OF SCHOOL\nhttps://www.youtube.com/watch?v=w_AIGnEROxw&t=15s\n\nRebecca Zamolo Shorts | Testing 100 Most Viral Beauty Hacks\nhttps://www.youtube.com/watch?v=mAH08QSZB_8&t=96s\n\nFollow Rebecca:\nYouTube: https://youtube.com/rebeccazamolo1 \nInstagram: https://instagram.com/rebeccazamolo \nTwitter: https://twitter.com/rebeccazamolo \nSnapchat: https://snapchat.com/add/rebeccazamolo",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/U42BJ01E9nA/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/U42BJ01E9nA/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/U42BJ01E9nA/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/U42BJ01E9nA/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/U42BJ01E9nA/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "Matt Slays",
            "tags": [
              "surprising",
              "daughter",
              "gender",
              "reveal",
              "Rebecca",
              "matt and rebecca",
              "Rebecca Zamolo",
              "matt",
              "rebecca",
              "ben azelart",
              "Lexi Rivera",
              "Brent Rivera",
              "MrBeast",
              "Faze Rug",
              "Dhar Mann",
              "Alexa rivera",
              "royalty family",
              "lankybox",
              "Jordan Matter",
              "Anazala family",
              "Zadie",
              "msa",
              "aphmau"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "Surprising Our Daughter With Gender Reveal",
              "description": "Matt and Rebecca Zamolo surprise their daughter with the gender reveal of their new baby.  Never thought this would happen like this. \n\n▶ Get ZamFam merch! https://rebeccazamolo.com\n\nMore videos\nRebecca Zamolo | Surprising Daughter with Room Makeover!\nhttps://www.youtube.com/watch?v=-iu0hLc9GAY\n\nMy Daughter's First Halloween \nhttps://youtu.be/te10bOGDmkg\n\nJordan Matter | My Daughter Survives Every FIRST DAY OF SCHOOL\nhttps://www.youtube.com/watch?v=w_AIGnEROxw&t=15s\n\nRebecca Zamolo Shorts | Testing 100 Most Viral Beauty Hacks\nhttps://www.youtube.com/watch?v=mAH08QSZB_8&t=96s\n\nFollow Rebecca:\nYouTube: https://youtube.com/rebeccazamolo1 \nInstagram: https://instagram.com/rebeccazamolo \nTwitter: https://twitter.com/rebeccazamolo \nSnapchat: https://snapchat.com/add/rebeccazamolo"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT9M34S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "355269",
            "likeCount": "8318",
            "favoriteCount": "0",
            "commentCount": "832"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "78TWs_w54ZCsF7WPskuoJ42V1yI",
          "id": "tW-XnKjykuQ",
          "snippet": {
            "publishedAt": "2025-03-29T02:56:02Z",
            "channelId": "UCqZQlzSHbVJrwrn5XvzrzcA",
            "title": "Alysa Liu brings the house down in Boston, wins figure skating world championship | NBC Sports",
            "description": "Alysa Liu saved her best for last to score 148.39 in the free skate for a total of 222.97 to become the first U.S. woman to win a figure skating world championship in 19 years. Afterward, an elated Liu described \"picking up the pieces\" of her career to accomplish the \"insane\" feat. #NBCSports #Olympics #FigureSkating \n» Subscribe to NBC Sports: https://www.youtube.com/nbcsports?sub_confirmation=1 \n» Watch Live Sports on Peacock: https://peacocktv.smart.link/v82e9dl56 \n\nNBC Sports Group serves sports fans 24/7 with premier live events, insightful studio shows, and compelling original programming. NBC Sports is an established leader in the sports media landscape with an unparalleled collection of sports properties that include the Olympics, NFL, Premier League, Big Ten, NASCAR, PGA TOUR, the Kentucky Derby, Tour de France and many more. Subscribe to our channel for the latest sporting news and highlights! \n\nNBC Olympics is responsible for producing, programming and promoting NBCUniversal's Olympic coverage. It is renowned for its unsurpassed Olympic heritage, award-winning production, and ability to aggregate the largest audiences in U.S. television history. Having produced every Summer Olympics since Seoul in 1988 and every Winter Olympics since Salt Lake City in 2002, the networks of NBCUniversal are synonymous with the Games in the United States. NBCUniversal has the U.S. media rights on all platforms to all Olympic Games through 2032. At the conclusion of the 2032 Games, NBCUniversal will have presented 23 total Olympic Games and 17 consecutive, the most for a U.S. media company in both categories. \n\nVisit NBC Sports: https://www.nbcsports.com \nFind NBC Sports on Facebook: https://www.facebook.com/NBCSports \nFollow NBC Sports on Twitter: https://twitter.com/nbcsports \nFollow NBC Sports on Instagram: https://www.instagram.com/nbcsports/ https://www.nbcsports.com/nfl/sunday-night-football \nhttps://nbcsports.com/motors/nascar\nhttps://nbcsports.com/soccer/premier-league \n\nAlysa Liu brings the house down in Boston, wins figure skating world championship | NBC Sports\nhttps://www.youtube.com/nbcsports",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/tW-XnKjykuQ/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/tW-XnKjykuQ/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/tW-XnKjykuQ/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/tW-XnKjykuQ/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/tW-XnKjykuQ/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "NBC Sports",
            "tags": [
              "olympics",
              "nbc olympics",
              "figure skating",
              "figure skating world championships",
              "figure skating 2025",
              "figure skating highlights",
              "figure skating worlds",
              "figure skating worlds 2025",
              "world figure skating championships",
              "alysa liu 2025",
              "alysa liu free skate",
              "alysa liu olympics",
              "alysa liu worlds",
              "alysa liu boston",
              "alysa liu interview",
              "alysa liu boston 2025",
              "alysa liu worlds 2025",
              "alysa liu free skate highlights",
              "alysa liu world championships",
              "alysa liu world champion",
              "alysa liu",
              "nbc",
              "liu"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
              "title": "Alysa Liu brings the house down in Boston, wins figure skating world championship | NBC Sports",
              "description": "Alysa Liu saved her best for last to score 148.39 in the free skate for a total of 222.97 to become the first U.S. woman to win a figure skating world championship in 19 years. Afterward, an elated Liu described \"picking up the pieces\" of her career to accomplish the \"insane\" feat. #NBCSports #Olympics #FigureSkating \n» Subscribe to NBC Sports: https://www.youtube.com/nbcsports?sub_confirmation=1 \n» Watch Live Sports on Peacock: https://peacocktv.smart.link/v82e9dl56 \n\nNBC Sports Group serves sports fans 24/7 with premier live events, insightful studio shows, and compelling original programming. NBC Sports is an established leader in the sports media landscape with an unparalleled collection of sports properties that include the Olympics, NFL, Premier League, Big Ten, NASCAR, PGA TOUR, the Kentucky Derby, Tour de France and many more. Subscribe to our channel for the latest sporting news and highlights! \n\nNBC Olympics is responsible for producing, programming and promoting NBCUniversal's Olympic coverage. It is renowned for its unsurpassed Olympic heritage, award-winning production, and ability to aggregate the largest audiences in U.S. television history. Having produced every Summer Olympics since Seoul in 1988 and every Winter Olympics since Salt Lake City in 2002, the networks of NBCUniversal are synonymous with the Games in the United States. NBCUniversal has the U.S. media rights on all platforms to all Olympic Games through 2032. At the conclusion of the 2032 Games, NBCUniversal will have presented 23 total Olympic Games and 17 consecutive, the most for a U.S. media company in both categories. \n\nVisit NBC Sports: https://www.nbcsports.com \nFind NBC Sports on Facebook: https://www.facebook.com/NBCSports \nFollow NBC Sports on Twitter: https://twitter.com/nbcsports \nFollow NBC Sports on Instagram: https://www.instagram.com/nbcsports/ https://www.nbcsports.com/nfl/sunday-night-football \nhttps://nbcsports.com/motors/nascar\nhttps://nbcsports.com/soccer/premier-league \n\nAlysa Liu brings the house down in Boston, wins figure skating world championship | NBC Sports\nhttps://www.youtube.com/nbcsports"
            },
            "defaultAudioLanguage": "en"
          },
          "contentDetails": {
            "duration": "PT9M6S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "regionRestriction": {
              "allowed": [
                "GU",
                "MP",
                "PR",
                "US",
                "VI"
              ]
            },
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "2153441",
            "likeCount": "41477",
            "favoriteCount": "0",
            "commentCount": "3192"
          }
        },
        {
          "kind": "youtube#video",
          "etag": "98_BOVWY3uAMIBwTN_G6boJnv2k",
          "id": "qeGIQBGA4Bg",
          "snippet": {
            "publishedAt": "2025-03-30T22:11:00Z",
            "channelId": "UC4DGZQHLsQRK3v8lKTGu_Uw",
            "title": "Team makes 'first breakthrough' in search for missing U.S. soldiers in Lithuania",
            "description": "Click here for the latest information: https://bit.ly/3E2BUSe \n\nSubscribe to WJCL on YouTube now for more: https://bit.ly/2rn8Ewl\n\nGet more Savannah news: http://www.wjcl.com\nLike us:  https://www.facebook.com/WJCLNews\nFollow us: https://twitter.com/wjclnews\nInstagram: https://www.instagram.com/wjclnews/",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/qeGIQBGA4Bg/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/qeGIQBGA4Bg/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/qeGIQBGA4Bg/hqdefault.jpg",
                "width": 480,
                "height": 360
              },
              "standard": {
                "url": "https://i.ytimg.com/vi/qeGIQBGA4Bg/sddefault.jpg",
                "width": 640,
                "height": 480
              },
              "maxres": {
                "url": "https://i.ytimg.com/vi/qeGIQBGA4Bg/maxresdefault.jpg",
                "width": 1280,
                "height": 720
              }
            },
            "channelTitle": "WJCL News",
            "tags": [
              "Savannah"
            ],
            "categoryId": "25",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
              "title": "Team makes 'first breakthrough' in search for missing U.S. soldiers in Lithuania",
              "description": "Click here for the latest information: https://bit.ly/3E2BUSe \n\nSubscribe to WJCL on YouTube now for more: https://bit.ly/2rn8Ewl\n\nGet more Savannah news: http://www.wjcl.com\nLike us:  https://www.facebook.com/WJCLNews\nFollow us: https://twitter.com/wjclnews\nInstagram: https://www.instagram.com/wjclnews/"
            }
          },
          "contentDetails": {
            "duration": "PT2M40S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
          },
          "statistics": {
            "viewCount": "204434",
            "likeCount": "2069",
            "favoriteCount": "0"
          }
        }
    ]
    const categoryMapping = {
        "1": "Film & Animation",
        "2": "Autos & Vehicles",
        "10": "Music",
        "15": "Pets & Animals",
        "17": "Sports",
        "18": "Short Movies",
        "19": "Travel & Events",
        "20": "Gaming",
        "21": "Video Blogs",
        "22": "People & Blogs",
        "23": "Comedy",
        "24": "Entertainment",
        "25": "News & Politics",
        "26": "How-to & Style",
        "27": "Education",
        "28": "Science & Technology",
        "29": "Nonprofits & Activism",
        "30": "Movies",
        "31": "Anime/Animation",
        "32": "Action/Adventure",
        "33": "Classics",
        "34": "Comedy",
        "35": "Documentary",
        "36": "Drama",
        "37": "Family",
        "38": "Foreign",
        "39": "Horror",
        "40": "Music Videos",
        "41": "Reality",
        "42": "Sci-Fi/Fantasy",
        "43": "Thriller",
        "44": "Shows",
        "45": "Trailers",
        "46": "Videos",
    };

    function getRandomObjects(arr, count = 5) {
        return arr.sort(() => 0.5 - Math.random()).slice(0, count);
    }
    
    const randomVideos = getRandomObjects(videoDataArray);
      
    const convertedVideos = randomVideos.map((video) => {
        const durationInSeconds = convertDurationToSeconds(video.contentDetails.duration);
        const category = categoryMapping[video.snippet.categoryId] || "Unknown";
        
        return {
          title: video.snippet.title,
          channelId: channelId,  // Assign channel ID based on index
          views: parseInt(video.statistics.viewCount, 10),
          likes: parseInt(video.statistics.likeCount, 10),
          dislikes: "0",  // Assuming no dislikes data provided
          description: video.snippet.description,
          thumbnail: video.snippet.thumbnails,
          videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
          duration: durationInSeconds,
          uploadDate: new Date(video.snippet.publishedAt),
          category: category 
        };
      });
    
      function convertDurationToSeconds(duration) {
        const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
        const matches = regex.exec(duration);
        
        const hours = parseInt(matches[1] || 0, 10);
        const minutes = parseInt(matches[2] || 0, 10);
        const seconds = parseInt(matches[3] || 0, 10);
      
        return hours * 3600 + minutes * 60 + seconds;
      }
    const result = await videoModel.insertMany(convertedVideos);

}