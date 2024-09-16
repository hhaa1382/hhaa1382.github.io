'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/android/app/build.gradle": "21ae49869c49089bd0a07878321b490b",
"assets/AssetManifest.bin": "bf69e57dfaa7b839f0b3b4c9b3bb827e",
"assets/AssetManifest.bin.json": "669736826c3491e80f9143726fabd504",
"assets/AssetManifest.json": "44d53b5609b61787b92f825fa1d5a1d6",
"assets/assets/airlines/iranAirlines.json": "e55b27c143502f3cc634950843595743",
"assets/assets/airlines/wordAirlines.json": "60201615b5b7287baff840f6e48b5b94",
"assets/assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/assets/fonts/icons/Pateh.ttf": "969056b581c1ca692c1d1e2648c7546f",
"assets/assets/images/airline_icons/0V.png": "38d9ebecc4b2202806bd1d1e5c2597fe",
"assets/assets/images/airline_icons/a0.png": "7724efcf13cf72ea063e0a4a12f35e9a",
"assets/assets/images/airline_icons/A1.png": "15d3229f48081c031d7952c6ef75ef16",
"assets/assets/images/airline_icons/AccessRail.png": "25b146fb0e9ca116f76d4a248c4bd431",
"assets/assets/images/airline_icons/AegeanAirlines(A3).png": "257566a4b2780557425a6930b72e00bd",
"assets/assets/images/airline_icons/AerLingus.png": "88db314e1027c0697cbfd9b71edd6559",
"assets/assets/images/airline_icons/Aerocuahonte.png": "2efd21ecc732a292fc312e1321c8e4d1",
"assets/assets/images/airline_icons/AeroflotRussianAirlines(SU).png": "84378411631d7868abee2a82624e2bc7",
"assets/assets/images/airline_icons/AerolineasGalapagos.png": "1a17e69e068a5323853611e525e4dc42",
"assets/assets/images/airline_icons/Aerolitoral.png": "66591509c964d63383ac4527b139fbd8",
"assets/assets/images/airline_icons/AeroTransporte.png": "1de1311ec40bd6405222302af80e28a3",
"assets/assets/images/airline_icons/AfricaWorldAirlines.png": "e265fd3bbe8cc7924c0ef6d51ea8d54a",
"assets/assets/images/airline_icons/AirAlgerie.png": "e3b58658fdea0b6a6269d729bde0e8f9",
"assets/assets/images/airline_icons/AirAntillesExpress.png": "77f252cde2cf3c10e18832d9e761c2e2",
"assets/assets/images/airline_icons/AirArabia.png": "f296f123b171fff82cbb866e7098d27c",
"assets/assets/images/airline_icons/AirArabiaMaroc.png": "f296f123b171fff82cbb866e7098d27c",
"assets/assets/images/airline_icons/AirArmenia(QN).png": "16355e987e237c0331b9ea8d079bdea8",
"assets/assets/images/airline_icons/AirAstana.png": "ef7e2dfd992c2a2b201e2376304108f3",
"assets/assets/images/airline_icons/AirBaltic.png": "6978a08273346b0ecc183c307d8c0fb0",
"assets/assets/images/airline_icons/AirBerlin.png": "c5308ab92a8bfddbbff2c4aab332bcd2",
"assets/assets/images/airline_icons/AirBurkina.png": "57d3dabbbf547f6ce2bf109932c63314",
"assets/assets/images/airline_icons/AirCanada(AC).png": "8f8d1cd2d4194125eec4aff447e90223",
"assets/assets/images/airline_icons/AirCanadaJazz.png": "3760a4cda1f6574e77eab9983be15359",
"assets/assets/images/airline_icons/AirCanadaRouge.png": "07049cfc821c84d6ac6e00bef85ae3f6",
"assets/assets/images/airline_icons/AirCargoGermany.png": "dfa9f6aa8105e6569325e5c9acc766fc",
"assets/assets/images/airline_icons/AirCarnival.png": "eee2b68ddac067e45cbe90fc580c9d3b",
"assets/assets/images/airline_icons/AirChathams.png": "d4acc440f1952ef622408974780030a8",
"assets/assets/images/airline_icons/AirChina.png": "83921f6b7af37e388794776b23643c47",
"assets/assets/images/airline_icons/AIRDO.png": "890351ce20462ebd3befdbfa844680c7",
"assets/assets/images/airline_icons/AirDolomiti.png": "ecc738db36f9e26f421132d72c7d98f0",
"assets/assets/images/airline_icons/AirEuropa(UX).png": "e480ab31e80f127dff8e5746d95eb443",
"assets/assets/images/airline_icons/AirFrance(AF).png": "99c9203d427d0ce6931dc5915be1c78d",
"assets/assets/images/airline_icons/AirGeorgia.jpeg": "b711b8fa5115b08bcb3cd0e336b23ad1",
"assets/assets/images/airline_icons/AirIndiaLimited.png": "9fb2538dce06f0c31f04c2164934fa94",
"assets/assets/images/airline_icons/AirMalawi.png": "166316002df6cdfa97ca7f1fa0858a08",
"assets/assets/images/airline_icons/AirMarshallIslands.png": "08c856737aa8813dbaca117ad9b01a25",
"assets/assets/images/airline_icons/AirNorthCharterCanada.png": "e057687032a743d5533a52b71970c021",
"assets/assets/images/airline_icons/AirphillExpress.png": "5f682e14c738539446f598041fd6841f",
"assets/assets/images/airline_icons/AirSerbia(JU).png": "79eebe17f9c6b53beee3c463c800673a",
"assets/assets/images/airline_icons/AirSinai.png": "6110d9b2877a8d6e120b5a6143923011",
"assets/assets/images/airline_icons/AirTahitiNui.png": "59bf997238d71637d4fcb776767aa5a6",
"assets/assets/images/airline_icons/AirUrga.png": "ac1d1349322a4b2de3590bfc8b1540c3",
"assets/assets/images/airline_icons/ais.jpeg": "32ea6b84c5b05910ccfe7085027ea625",
"assets/assets/images/airline_icons/AlaskaAirlines(AS).png": "cb473a021668e9b05874b24bdc6d06b7",
"assets/assets/images/airline_icons/Alitalia(AZ).png": "4116047043fe5653c75f50568ad7fe9f",
"assets/assets/images/airline_icons/Alliance.png": "48bc4cc15b1cc1154095fdea60af132b",
"assets/assets/images/airline_icons/AllNipponAirways.png": "b9fa951bcdf6bb840e20350f83d01c61",
"assets/assets/images/airline_icons/AlpineAirExpress.png": "6a4be9eb5c08ff9f897bd9c082b6c4fc",
"assets/assets/images/airline_icons/Alsie.png": "748009207294b78e0f8256f19416d435",
"assets/assets/images/airline_icons/AmericanAirlines.png": "0aa65e4d95b399b81fdc76781c1a49b5",
"assets/assets/images/airline_icons/Amtrak.png": "e475ce8b719c79f5c56bce91e5b09a1a",
"assets/assets/images/airline_icons/AnadoluJet(AJTK).png": "80cd330615f4e9840618a37f1a8c5100",
"assets/assets/images/airline_icons/AnaWings.png": "e080e34bab837c4be8e2423283124a0a",
"assets/assets/images/airline_icons/AnsettAustralia.png": "e057737dbb44c43bbc1d290b1d993d3e",
"assets/assets/images/airline_icons/ApexAirline.png": "258ea8ead9dba82067a01f8403c034ed",
"assets/assets/images/airline_icons/ArmeniaAirways(6A).png": "7a315a6027824cb4989c89e890930bc6",
"assets/assets/images/airline_icons/aseman.png": "93cac6e9c22644aa6b679d0eb45b3348",
"assets/assets/images/airline_icons/AsemanAirlinesLogo.png": "b2748cc290a0ee7a4be7296bffdc35a2",
"assets/assets/images/airline_icons/AsianaAirlines.png": "98995593b87b3f0b15817668dcce4835",
"assets/assets/images/airline_icons/AsianAir.jpeg": "b6be9c2d37ed4b1a7d442d385582d61f",
"assets/assets/images/airline_icons/ata.png": "286f80f97c7c7f2b7a012d7c92d7ddd4",
"assets/assets/images/airline_icons/ATAAirlinesLogo.png": "700f8b48691f40a42ba9d80399e51148",
"assets/assets/images/airline_icons/AtlantisEuropeanAirways.png": "ce9e1cf9d94d8782e62dbefa07cf84dd",
"assets/assets/images/airline_icons/Atlas.png": "6f756178785ef1d1b69c5a30d2c0791e",
"assets/assets/images/airline_icons/AtlasGlobal(KK).png": "ccdaafa246a234583acda2a6f832c808",
"assets/assets/images/airline_icons/AtlasjetUkraine.png": "4ead6d7a8b489190a515083cd0f03275",
"assets/assets/images/airline_icons/atr150-150.png": "45357b864948651ae11597e25a83ac13",
"assets/assets/images/airline_icons/atrak.png": "ade7f8f6eeda209f543456676cecd103",
"assets/assets/images/airline_icons/AtrakAirLogo.png": "aca1e7f5767b60074e93e9e24d60fa02",
"assets/assets/images/airline_icons/Austral.png": "5c3e60a0afc6136346ac95e16a25684b",
"assets/assets/images/airline_icons/AustralianAirlines.jpeg": "8d65a48c8725da3f8dc82c42f76de165",
"assets/assets/images/airline_icons/AustrianAirlines(OS).png": "db895d06e1fe9f259965d8ecc21f5ae4",
"assets/assets/images/airline_icons/ava-airline.png": "8747b1c355612622e57f495e0a7b0ea1",
"assets/assets/images/airline_icons/Avanza.png": "04f30d6db5d0f4c3b8653e8271251b81",
"assets/assets/images/airline_icons/AviorRegional.png": "47147d071e38e03bb830542637085d90",
"assets/assets/images/airline_icons/AzerbaijanAirlines(J2).png": "c47efdd31bacae944a4944fefd565c38",
"assets/assets/images/airline_icons/AZIMUTH.png": "60599ee853beddcb375bc6c7f50ffdee",
"assets/assets/images/airline_icons/Bahamasair.png": "2eee3bfe20a48253029ac1780763f6d6",
"assets/assets/images/airline_icons/Bamboo.png": "187d7e99e86e5489ca451307c47026f3",
"assets/assets/images/airline_icons/BeninGolfAir.png": "87726e7184e6d3b5618263f9241f0126",
"assets/assets/images/airline_icons/BimanBangladesh.png": "7ce630aea5903c646648f47081e7fe4c",
"assets/assets/images/airline_icons/BlueBird.png": "2d6c690222b7e4607e66e35ed07d89c7",
"assets/assets/images/airline_icons/BritishAirways(BA).png": "39bf0ea8d59a0310816ec854e0100263",
"assets/assets/images/airline_icons/BrusselsAirlines.png": "2244698ab41004b1ad882c9050b2d36e",
"assets/assets/images/airline_icons/BulgariaAir(FB).png": "04c4ac716a6990b3cb5518bc7e6f9da3",
"assets/assets/images/airline_icons/Busan.png": "9845d0b636001ca7d25546fcfc3f32ed",
"assets/assets/images/airline_icons/CanadianNorth.png": "eeb3bfc2e5d3bb94953dd6fac820bacc",
"assets/assets/images/airline_icons/caspian.png": "da8a47c499a2dfac7edfa43bdb9db3c9",
"assets/assets/images/airline_icons/CaspianAirlineLogo.png": "3e82087857d21d52eced1afc72bf99fa",
"assets/assets/images/airline_icons/CathayPacific(CX).png": "43a046e611515e74d84122fca86b9c9c",
"assets/assets/images/airline_icons/CebuPacific.png": "a377a4968f0a014078e613c99e723a3e",
"assets/assets/images/airline_icons/Cemair.png": "ed898282dbd78600bc6d48a5215cb73f",
"assets/assets/images/airline_icons/chabahar.png": "49495db8982fd7397164ea3813de6fdf",
"assets/assets/images/airline_icons/ChamWings.png": "c489782569c2088e9c89ef947943aa67",
"assets/assets/images/airline_icons/ChinaAirlines.jpeg": "8177ce09abb0458193fb89e37b1376bc",
"assets/assets/images/airline_icons/ChinaCargoAirlines.jpeg": "6ef5bd68499d5dffce0d8e187ceabf14",
"assets/assets/images/airline_icons/ChinaEasternAirlines.png": "233e91c56946c58f3f300a6071cf5e1e",
"assets/assets/images/airline_icons/ChinaSouthernAirlines(CZ).png": "8e6b5fb4a60d6b267604b9f395c3c378",
"assets/assets/images/airline_icons/ChinaUnitedAirlines.png": "281df5b2821323e006f1dc050a92fbec",
"assets/assets/images/airline_icons/Cirrus.png": "d9f6e9e09fa35b4276b6db7dd4ce5fcb",
"assets/assets/images/airline_icons/City.png": "b48b907b941b3b32afc6cd67107ec051",
"assets/assets/images/airline_icons/CityJet.png": "49f3991c008253cc4f9f278d2805a27e",
"assets/assets/images/airline_icons/cpn150-150.png": "40f43a87ea559cf783477c1eb07e6ac9",
"assets/assets/images/airline_icons/Cubana.png": "80e95e20b87ffa5e35cb695a8261355a",
"assets/assets/images/airline_icons/Cyprus.png": "b61791f530918bc443f85315e5046183",
"assets/assets/images/airline_icons/CzechAirlines.png": "901e231d676a22e85274bc2833556351",
"assets/assets/images/airline_icons/default.jpg": "e80c16244a94aed42ac8f775ec79ec4c",
"assets/assets/images/airline_icons/default.png": "9ae1ed52feef50c9f933f1c9a3fbf9c5",
"assets/assets/images/airline_icons/DeltaAirLines.png": "f42cd88d3f44d78e45f8b10e4c5986f7",
"assets/assets/images/airline_icons/EasternAirways.png": "d9d21abbadfa5db20c5bf47edb14d4a1",
"assets/assets/images/airline_icons/Eastland.png": "48e45284b812ec601af7c6e046a59342",
"assets/assets/images/airline_icons/easyJet.png": "4d2812789d090ebf1cfc7a7306384106",
"assets/assets/images/airline_icons/easyJetSwitzerland.png": "c2861ed1834b2b23de840fc5ea1dab01",
"assets/assets/images/airline_icons/Egyptair.png": "a4dffa74acf764123d53da8273c4db4b",
"assets/assets/images/airline_icons/Emirates(EK).png": "92076cdd1254207cda691fb5bc1e62e0",
"assets/assets/images/airline_icons/Empire.png": "1089d22f4225dc065afbeae73f92627c",
"assets/assets/images/airline_icons/eramair.png": "854e9b73cc7222d0bed9f76ae62e4c72",
"assets/assets/images/airline_icons/EramAirLogo.png": "f036bb545778ddcd2433f7afba72f466",
"assets/assets/images/airline_icons/EthiopianAirlines.png": "25de749ce5e4ca165651da276811a147",
"assets/assets/images/airline_icons/EtihadAirways(EY).png": "11ab065c3e5e5492f6400cf0dfbc4f6b",
"assets/assets/images/airline_icons/Eurowings.png": "b3b94d98e7ae07073b71ae9e98ed00bc",
"assets/assets/images/airline_icons/EVAAir.png": "e79ec55ada0434e66d0f5d1ab958f028",
"assets/assets/images/airline_icons/Everts.png": "b40d33f452bec50ce6c188e2e387072c",
"assets/assets/images/airline_icons/farsairqeshm.png": "66a5b438f12c6018e9f47b73137b0d93",
"assets/assets/images/airline_icons/FarsAirQeshmLogo.png": "7fd53f995e646cf6362d017542809a31",
"assets/assets/images/airline_icons/Finnair.png": "fdc25eaa3ada640ad2501764448b71d3",
"assets/assets/images/airline_icons/Flybe.png": "75414eb6b2e704067d746cc6173076f1",
"assets/assets/images/airline_icons/FlyDubai(FZ).png": "368bb8f6ce9c6e34d8606d75dad01b64",
"assets/assets/images/airline_icons/FlyMeSweden.png": "8c6542b61d90468af2fcd6987497ef89",
"assets/assets/images/airline_icons/Flynas.png": "e1ae7eadc00f440525b644f22a86dac4",
"assets/assets/images/airline_icons/FlyOne.png": "50a2829b768e23b106406efb00d807b6",
"assets/assets/images/airline_icons/flypersia.png": "530a2b8f35e32caba5b9a20d1a6ea4b3",
"assets/assets/images/airline_icons/FlyPersiaLogo.png": "6b2902a27530a463b37bf3fd0661b94c",
"assets/assets/images/airline_icons/FlySalone.png": "c033a2c93556454d609a7c3f4f375d12",
"assets/assets/images/airline_icons/fpi150-150.png": "cc7d3dab8c94bf7b4d5a23036dd6355f",
"assets/assets/images/airline_icons/FrenchBee.png": "2bb1ff1d49d9065c527b1fdd4896bd07",
"assets/assets/images/airline_icons/GambiaBirdAirlines.png": "50387a87df2e2286bf91cab32eed4274",
"assets/assets/images/airline_icons/GeorgianAirways.png": "4a89922a7d1f67278aea80d5e7377a25",
"assets/assets/images/airline_icons/Germania.png": "d481a4d438354f5173becceaee5a7fb7",
"assets/assets/images/airline_icons/Germanwings.png": "053a0719b385e8c48eb9a00af0ba1293",
"assets/assets/images/airline_icons/Golden.png": "468ca2dd1c8c11a6439308df0198c6a8",
"assets/assets/images/airline_icons/GrandChina.png": "ab94f242455e14cc1cd1417c835a6bc8",
"assets/assets/images/airline_icons/GulfAir(GF).png": "c61249cd233e53650ebcfb2ec8db9f70",
"assets/assets/images/airline_icons/Hainan.png": "9ed8398a66be43c404a893444c786625",
"assets/assets/images/airline_icons/HaitiAmbassadorAirlines.png": "166a19140c65e1640e34d83aabddd814",
"assets/assets/images/airline_icons/header__logo.png": "f559cce02f73b2bec651288a96844192",
"assets/assets/images/airline_icons/HelveticAirways.png": "c864935952f02b457a1f15296afbaa9e",
"assets/assets/images/airline_icons/HiFly.png": "f9f02785a5855ed5a637ec5d773c1384",
"assets/assets/images/airline_icons/HongKongAirlines.png": "c48986e866eabae74527193ab9f245b1",
"assets/assets/images/airline_icons/HongKongExpressAirways.png": "2c8ef7bb42529e2863aea466380202e1",
"assets/assets/images/airline_icons/hop.png": "025751fcfe87b539ddfa424151b775fb",
"assets/assets/images/airline_icons/Horizon.jpeg": "78718582a504e9eb1652f0fd1ab76971",
"assets/assets/images/airline_icons/IberiaAirlines.png": "7dcf15485632f08731e9acbd2fb0b71a",
"assets/assets/images/airline_icons/Icelandair.png": "8bc40a02132c10f46c75e31f5f5f7da5",
"assets/assets/images/airline_icons/IndiGo.png": "80ef55fda046ba0ac5208c35a0d3dbf7",
"assets/assets/images/airline_icons/InterairSouthAfrica.png": "7e5198e37faaba19b1432a5c73e1af17",
"assets/assets/images/airline_icons/Interjet.png": "54b034707182e5f8573981691c27a0d9",
"assets/assets/images/airline_icons/intersky.jpeg": "1b55aafedac36c54f9df0e35a5a8fbc9",
"assets/assets/images/airline_icons/ira150-150.png": "a09f8849e2e67c37413b8f6a02834de7",
"assets/assets/images/airline_icons/iranair.png": "62c78606a90f25c91874afbe9475b46b",
"assets/assets/images/airline_icons/IranAirLogo.png": "07af187e0af722e9eb3b67eaac61422b",
"assets/assets/images/airline_icons/iranairtour.png": "6100f90e3d8c880c339a0516a570e22f",
"assets/assets/images/airline_icons/IranAirtourLogo.png": "b12f693ea73b96bea5d02c0605bfd79c",
"assets/assets/images/airline_icons/Iraqi-Airways.png": "4bb271cd4297401439e6c450e061767d",
"assets/assets/images/airline_icons/irb150-150.png": "82a1f4005158034c1f360a7a5d882e1a",
"assets/assets/images/airline_icons/irc150-150.png": "b8b5e113647b2ccc98b905a6ceb457df",
"assets/assets/images/airline_icons/irm150-150.png": "90a1131b1623e999096ae35e1eed0072",
"assets/assets/images/airline_icons/irp150-150.png": "dca12b104b23f7aaaa4d1291dce30302",
"assets/assets/images/airline_icons/irs150-150.png": "235feacd74b85f16aeb450f967302d53",
"assets/assets/images/airline_icons/IRU.gif": "b986643db10ee4a62da5a7d7b2b10f8f",
"assets/assets/images/airline_icons/IRU.png": "b84ea0db31143fde341fd57ff24a941e",
"assets/assets/images/airline_icons/iru150-150.png": "af9591a270260af19dbc25fdde7354f2",
"assets/assets/images/airline_icons/irz150-150.png": "54713c7c01aa492a413b07ea265d6951",
"assets/assets/images/airline_icons/izo150-150.png": "a8eb2699defea28d1c38b1368befb3eb",
"assets/assets/images/airline_icons/JapanAirlines.png": "989b998f81d4f89cd93360a2401f58d6",
"assets/assets/images/airline_icons/Jet2.png": "b0f29a880f752c7064ea900455c537b3",
"assets/assets/images/airline_icons/JetAirways.png": "d4acc49db98fa95cea998996d39caabb",
"assets/assets/images/airline_icons/JetBlueAirways.png": "cea2f2fa2d6a0b1793119d9f38c46e04",
"assets/assets/images/airline_icons/Jetclub.png": "1ec6fd0a49ff7f4ec30af6ab2f224e24",
"assets/assets/images/airline_icons/JubbaAirways.png": "9217c70c1f0c6ba53cf477a5bd8b07b9",
"assets/assets/images/airline_icons/Juneyao.png": "e38bb77973e5bc978757b49bb030c009",
"assets/assets/images/airline_icons/karun.png": "08835ea44e731cf7cf83bf359d03a991",
"assets/assets/images/airline_icons/KarunAirLogo.png": "f0109f7691823737e4d7f46e43b52bdf",
"assets/assets/images/airline_icons/KC.png": "95d58ef910d14830c65feaab75ef15a6",
"assets/assets/images/airline_icons/KennBorekAir.png": "0caf92c8d21e210c60f23c8d31a2a065",
"assets/assets/images/airline_icons/kis150-150.png": "e373d11e254bdc489e9ae689a093a471",
"assets/assets/images/airline_icons/kishair.png": "ff4c12e6277093f2ebbc7b8088bd1c84",
"assets/assets/images/airline_icons/KishAirLogo.png": "24e337f41566c15d8c82155a37c1f02c",
"assets/assets/images/airline_icons/KLM(KL).png": "a9096931907423842ee87dad24f7c5bb",
"assets/assets/images/airline_icons/KoreanAir.png": "cf25787c8c86569efce9e784736d65f9",
"assets/assets/images/airline_icons/KuwaitAirways(KU).png": "8c383a618a2857a7caeb76cdc726ae71",
"assets/assets/images/airline_icons/KyrgyzTransAvia.png": "f7b87deaa4f9f94573b7fd5c6338b434",
"assets/assets/images/airline_icons/LatamAirlinesArgentina.png": "1fce1bcf3f6ddfc9aaea92b1e063c0c6",
"assets/assets/images/airline_icons/LatamAirlinesColombia.png": "e9e40f9587ce6090dd31e20c51c729dc",
"assets/assets/images/airline_icons/Laudamotion.png": "4d493588252af78a6b075b8c1e4ac4a4",
"assets/assets/images/airline_icons/lh.png": "ae67cea071d13e389cf783b43067e509",
"assets/assets/images/airline_icons/LOTPolishAirlines.png": "f3069bae599dcdc6967f649576b880a0",
"assets/assets/images/airline_icons/Lufthansa(LH).png": "6fc7f07a81b9294eee1d8cd03e849d33",
"assets/assets/images/airline_icons/LufthansaCityLine.png": "0e56a341fca737de121b26e773855e44",
"assets/assets/images/airline_icons/Luxair.png": "1bac3b3e9b616ccb8ef543e00470f01d",
"assets/assets/images/airline_icons/mahan.png": "5c841370dfbb05e66b9d9fbbcf8aa85d",
"assets/assets/images/airline_icons/MahanAirLogo.png": "4280f22375f141ce242041f2406a8c9b",
"assets/assets/images/airline_icons/MalawianAirlines.png": "aaf5ab3d369fe673af6501c938ce5625",
"assets/assets/images/airline_icons/MalaysiaAirlines.png": "4e59281d9f438c393f97c23768cb81d0",
"assets/assets/images/airline_icons/Malta.png": "6470145f0f8d5b767452cdba4df98c0d",
"assets/assets/images/airline_icons/Mandarin.png": "c50802912c6218ceeeb6c8754c848e86",
"assets/assets/images/airline_icons/meraj.png": "ed4bcb28f63b428f387b0c538a205ba5",
"assets/assets/images/airline_icons/MerajAirlineLogo.png": "580aa28dcad1ad32a7cc7ce44fb5ce4f",
"assets/assets/images/airline_icons/MIATMongolianAirlines.png": "d871b0f3a5e1412b2d901b7d7ef80947",
"assets/assets/images/airline_icons/MiddleEastAirlines.png": "0b330e5b8ad13a3158a20bf1bd8bd98e",
"assets/assets/images/airline_icons/Mirny.png": "4b7c8d8a5e8b41439abcc0e8493bedf7",
"assets/assets/images/airline_icons/MoldavianAirlines.png": "3396486c7f8e3675ac23fc357f8c51aa",
"assets/assets/images/airline_icons/Monarch.png": "f43083809d702a5fe20d63f05f38b43f",
"assets/assets/images/airline_icons/MontserratAirways.png": "4ca02764d1dce158bdde527191f63e53",
"assets/assets/images/airline_icons/mrj150-150.png": "1c7e801b1afde9ea0c73b0898d7efdbc",
"assets/assets/images/airline_icons/MyanmarNationalAirlines.png": "db89002f2751a1628ff90424098a8b63",
"assets/assets/images/airline_icons/Namibia.png": "6aea861bfe70aa8f72b54447d10e6aba",
"assets/assets/images/airline_icons/NationalAirlines.png": "14fee5302fc043e08243f80fe5711d9d",
"assets/assets/images/airline_icons/NatureAir.png": "fe3e584dcf63d4ea6b7a5634e786f366",
"assets/assets/images/airline_icons/NewEnglandAirlines.jpeg": "95f895d3f1a67cf97d7dfc1f45c49084",
"assets/assets/images/airline_icons/NextJet.png": "721e76b224a74d24931f627586f03b29",
"assets/assets/images/airline_icons/Niger.png": "87a7b672142b11a8aa868a472d053db1",
"assets/assets/images/airline_icons/Nordavia.png": "bb76576ea4407ee813a40ddabb6da5c7",
"assets/assets/images/airline_icons/Northwestern.png": "f48a4294af44c4d6df6e94aeb477a865",
"assets/assets/images/airline_icons/NorwegianAir.png": "23bba98e72d3e9399fbca7267d378282",
"assets/assets/images/airline_icons/NouvelAirTunisie.png": "f43c9f7c628bd96426c55538f3206622",
"assets/assets/images/airline_icons/OmanAir(WY).png": "657c41016a40b748de4a7cb2035f657a",
"assets/assets/images/airline_icons/PacificAirlines.png": "659166366f764d2b996a342a853e83b2",
"assets/assets/images/airline_icons/Pakistan.png": "267db79a7902221bb40279df55a0a6f8",
"assets/assets/images/airline_icons/pars.png": "33776e3b2995092aa2bbc163dc91f830",
"assets/assets/images/airline_icons/ParsAirlineLogo.png": "1b8f4571de0757e027fc1b6bedad7f22",
"assets/assets/images/airline_icons/PassaredoTransportesAereos.png": "e9c3c6d102e8a607122d8bdc431579e1",
"assets/assets/images/airline_icons/payam.png": "572dd3b2a2b5362b7f7b3d3d6fdb6e51",
"assets/assets/images/airline_icons/PegasusAirlines(PC).png": "f4213d8138fcc7f8b2cbd7495f0e354e",
"assets/assets/images/airline_icons/Pobeda.png": "91912511662634c34f1e1cb94ccdbcae",
"assets/assets/images/airline_icons/pouya.png": "7363a6554e657a2afc01f5b0d35b11a5",
"assets/assets/images/airline_icons/PouyaAirLogo.png": "966c6447b8174a05e69fe7abb7dd9044",
"assets/assets/images/airline_icons/QatarAirways(QR).png": "77f398623aef3658a08308a169d9e273",
"assets/assets/images/airline_icons/qeshmair.png": "766bdef5cc8877feb59175a8eea43a5c",
"assets/assets/images/airline_icons/QeshmAirLogo.png": "f5d5dc05fb9f249704ec53858d4af4d1",
"assets/assets/images/airline_icons/qfz150-150.png": "2ff9f65921e2462d177855a4886bfe08",
"assets/assets/images/airline_icons/qsm150-150.png": "aa957f32c7f79c372adc649f09092203",
"assets/assets/images/airline_icons/RoyalAirMaroc(AT).png": "feeeb5c6de29e2e74f16184bd5a8052d",
"assets/assets/images/airline_icons/RoyalBruneiAirlines.png": "ae0a67c1942035ea69eb154d2beaae0a",
"assets/assets/images/airline_icons/RoyalJordanian.png": "e5bc7e70f32d0ec5dc8923cf73f77d1c",
"assets/assets/images/airline_icons/Ryanair.png": "c4ee796849f5990bd2253b272c8ed84e",
"assets/assets/images/airline_icons/s7.png": "f7073dd55158a59c7526a297ed478693",
"assets/assets/images/airline_icons/safiran.png": "c35bdc44972c131792a42ef04a562dd2",
"assets/assets/images/airline_icons/saha.png": "566faff3525796e7655b374607939c65",
"assets/assets/images/airline_icons/SahaAirlineLogo.png": "969d984afb02f3315988692835a58780",
"assets/assets/images/airline_icons/sahand.png": "a42ef45ebf7bac5f69f74145057712e5",
"assets/assets/images/airline_icons/salamair.png": "70a5b341a92f411597cf14944e1286a7",
"assets/assets/images/airline_icons/Saratov.png": "13f21e9f1c1e02fe705d14b1ed2e4891",
"assets/assets/images/airline_icons/SaudiArabianAirlines.png": "fcec30fd41be6a4785942edde8ee250a",
"assets/assets/images/airline_icons/SaudiGulfAirlines.png": "c007cbba506993896c8a2e44c3ffde2c",
"assets/assets/images/airline_icons/sbt150-150.png": "e2d70a9350411ed86d3e92884255e3fd",
"assets/assets/images/airline_icons/ScandinavianAirlines.png": "4168509b91d390293274512bcd891908",
"assets/assets/images/airline_icons/sepahan.png": "84854f5cd0e13de87a45f1de4d39cf67",
"assets/assets/images/airline_icons/sepehran.png": "51c3e59205937aa09c0223bcbb0a6781",
"assets/assets/images/airline_icons/SepehranAirlineLogo.png": "b8ebd941326b27e8cd2487c6a57b7476",
"assets/assets/images/airline_icons/sfn150-150.png": "30550e23f74c07a21995e04baf664195",
"assets/assets/images/airline_icons/Shandong.png": "e2a881282864e5c462135ffcfbe010fc",
"assets/assets/images/airline_icons/ShanghaiAirlines.png": "6731a3e00fb9de95086ac60c51b2b906",
"assets/assets/images/airline_icons/ShenzhenAirlines.png": "f68565a2d4a5e34c4f88d149cd01711a",
"assets/assets/images/airline_icons/shi150-150.png": "8f4487750e7c6fa766a14bce122aec2f",
"assets/assets/images/airline_icons/Sichuan.png": "1256d06471a88871b5720a6ac3f91974",
"assets/assets/images/airline_icons/SingaporeAirlines(SQ).png": "1cfab62c21ed76ca7756467be331ab09",
"assets/assets/images/airline_icons/SJT.jpeg": "d14e0353f8ce26f1fa10e98e9ead88e2",
"assets/assets/images/airline_icons/SkynetAirlines.png": "979d9d530824e3d2a8ebac7106d00c06",
"assets/assets/images/airline_icons/SkytransRegional.png": "430589e0168221612c116f9bd5967d17",
"assets/assets/images/airline_icons/SkyworkAirlines.png": "1e87c8bdad8f408e680c6d2e31610393",
"assets/assets/images/airline_icons/Smartlynx.png": "58d9c84defaa75d6ff0e581ae35460f5",
"assets/assets/images/airline_icons/Solaseed.png": "32e036559416769ac6a0b86713b32c12",
"assets/assets/images/airline_icons/SpeedAllianceWestbahn.png": "abfe2ff2b51d9b3ffb30db561fbaf96a",
"assets/assets/images/airline_icons/Spirit.png": "1f2dc7a2596c5b97012a70317410a8ab",
"assets/assets/images/airline_icons/spn150-150.png": "f417b50a00f7095a422b150ba4e446fd",
"assets/assets/images/airline_icons/StarAirways.png": "8cb7fc724dce78e04e55747fa6fc99d6",
"assets/assets/images/airline_icons/Sudan.png": "36ca84629353031efc4ea6a9a897be2c",
"assets/assets/images/airline_icons/SunCountry.png": "61030509f56951fe988bc64512dba556",
"assets/assets/images/airline_icons/SunExpress.png": "321055bb20f5c2dd335a650d85e105cb",
"assets/assets/images/airline_icons/SwissInternationalAirLines.png": "2e84b7da5ac41d79c161311baecea9c0",
"assets/assets/images/airline_icons/taban.png": "cb942aef56b0fa3e11bffaa290e34bf2",
"assets/assets/images/airline_icons/TabanAirlineLogo.png": "c91153bf4e4080010b917005b8f382b6",
"assets/assets/images/airline_icons/taftan.png": "d7c6b80236395d7747a238fea690a229",
"assets/assets/images/airline_icons/TaftanAirlineLogo.png": "476a5f1de99c545f14bb54d76519ba02",
"assets/assets/images/airline_icons/tailwind_airlines.png": "4801d0ca29c00f56d63309aa278428fc",
"assets/assets/images/airline_icons/TAJIKAIR(7J).png": "0380e0edc3ec6275679b06370925466d",
"assets/assets/images/airline_icons/Tanzania.png": "941043791f1cd84251f0eaf3876d419a",
"assets/assets/images/airline_icons/TAPPortugal.png": "d60b31d6c13eb3325021b4699113b357",
"assets/assets/images/airline_icons/TarcoAir.png": "3237b48dfe4a0e10a5dce9227c6c3db6",
"assets/assets/images/airline_icons/Tarom.png": "ee6e54294859430f3db4bd788bddf65e",
"assets/assets/images/airline_icons/tbm150-150.png": "052ba727168c97d00453e3487afd7435",
"assets/assets/images/airline_icons/tbz150-150.png": "8a92a3fcebf62b9c7fdb2b9e774695d7",
"assets/assets/images/airline_icons/ThaiAirwaysInternational.png": "438a3a9efca536379574be8a84ed46dd",
"assets/assets/images/airline_icons/ThaiLionAir.png": "d3743ff6684743bd3371f499c63a892a",
"assets/assets/images/airline_icons/Thalys.png": "f7405852f499e56540b3b26bdc6e4ba7",
"assets/assets/images/airline_icons/TiaraAir.png": "f94c0a7e95940e95cc47637645cbe404",
"assets/assets/images/airline_icons/TigerairPhilippines.png": "94cf5d1e32a9fca55cade536bbe37f2e",
"assets/assets/images/airline_icons/TNTAirways.png": "ada843ecc0aeb284baca307ed13e4841",
"assets/assets/images/airline_icons/Transat.png": "465e54f70fe29052ddfd573cedffb4e4",
"assets/assets/images/airline_icons/TransaviaFrance.png": "04571d2f54552a6959bf51dc169840f8",
"assets/assets/images/airline_icons/TropicOceanAirways(TI).png": "0236eff64b61502df0b0e8211ca01519",
"assets/assets/images/airline_icons/TUIflyNordic.png": "b39673d7e0f11be566304fba6d2a54b6",
"assets/assets/images/airline_icons/Tunisair.png": "5feefd7b47ea33d4463539bf0cefb4f6",
"assets/assets/images/airline_icons/TurkishAirlines(TK).png": "c300a73e0b810ec9294eb74b90d95b73",
"assets/assets/images/airline_icons/Turkmenistan.png": "229e8b8f38538b76d6dc3824651b6742",
"assets/assets/images/airline_icons/UkraineInternationaAirlines(PS).png": "31fe3f9a92250de556296930e5b66023",
"assets/assets/images/airline_icons/Uni.png": "f73e35e1765de2f772a4f2c6e0eec173",
"assets/assets/images/airline_icons/UnitedAirlines.png": "88bad505ac073f0014e2545d68b474b6",
"assets/assets/images/airline_icons/UnitedParcelService.png": "109fa2aaba91803f88a0a616535d0f09",
"assets/assets/images/airline_icons/USAirways.png": "cd567fc83d273b09587a96ffc8b1ce04",
"assets/assets/images/airline_icons/UzbekistanAirways.png": "d418129523dbbf9d30b810e6f3a23b81",
"assets/assets/images/airline_icons/varesh.png": "44bd2da28e56460b61d8241453cc13e7",
"assets/assets/images/airline_icons/VareshAirlineLogo.png": "3122b3b49ed0796029c6e87bd5a9b98e",
"assets/assets/images/airline_icons/ViaRailCanada.png": "14f0b197f48eb20714ca0c739c04c660",
"assets/assets/images/airline_icons/VietnamAirlines.png": "4cb05bbaab6879bb3553d7aa19efd082",
"assets/assets/images/airline_icons/VirginAtlanticAirways.png": "92ab534e50dfddb13e7fc239d1ae0211",
"assets/assets/images/airline_icons/Volotea.png": "f9e1d6925dcbc200eab7721c6da57038",
"assets/assets/images/airline_icons/vrh150-150.png": "2e3cc59912a637a0897f78d21493b7c9",
"assets/assets/images/airline_icons/Vueling.png": "ce9c15f6191790eaca42094788a2eee0",
"assets/assets/images/airline_icons/WelcomeAir.png": "dde424e713966f38ab1e6a0e7c015482",
"assets/assets/images/airline_icons/WestJet.png": "edba6f34d5d92f56d61c08ccc99b2f02",
"assets/assets/images/airline_icons/Wizz.png": "6033a70a41a27459960d398c5a4eb5a5",
"assets/assets/images/airline_icons/XiamenAirlines.png": "b40d6f3292759e135455cb10a4b16013",
"assets/assets/images/airline_icons/YazdAirways.png": "f3d24eba3b37fbae2511f3f642db1ab3",
"assets/assets/images/airline_icons/Yeti.png": "d5676e874336f832d4ab71086dd49fbc",
"assets/assets/images/airline_icons/YuteAirAlaska.png": "947f8dd3c2d718aa198e4c22548b36e9",
"assets/assets/images/airline_icons/zagros.png": "77f30e1665776e0c885682d8e314810d",
"assets/assets/images/airline_icons/ZagrosAirline.png": "16f564b523aec77ab87bf950f4179da9",
"assets/assets/images/airline_icons/Zimbabwe.png": "06f3f73d0f2efef65cea432e66a92cba",
"assets/assets/images/svgs/ai_character.svg": "427bb0ee9a37ca231005c4062464fd60",
"assets/assets/images/svgs/ai_star.svg": "728548306d44c84ac32d02915bd883e0",
"assets/assets/images/svgs/avatar_ring.svg": "7484c4fa410f19d527cb79a0d2c2effa",
"assets/assets/images/svgs/dark_bus_ticket_success.svg": "31ff4c4f72033219b57b2fffd8d000c8",
"assets/assets/images/svgs/dark_flight_ticket_success.svg": "02f2245401d67c9ba5477fed6545659a",
"assets/assets/images/svgs/dark_ticket_fail.svg": "8f89c076a9c6f5e317cdc9daf6393aac",
"assets/assets/images/svgs/empty_list_passenger.svg": "db69ab86a52eec6ff81177126a20bef2",
"assets/assets/images/svgs/iranicard.svg": "26fee8b26f80c519dc2d9da989ff8326",
"assets/assets/images/svgs/light_bus_ticket_success.svg": "fb761104ccf7ec2c269f1843dac3cb80",
"assets/assets/images/svgs/light_flight_ticket_success.svg": "57055d019ad29775a05e3fa0e229fd61",
"assets/assets/images/svgs/light_ticket_fail.svg": "484df8aff954e5bceca0507beeb06c62",
"assets/assets/images/svgs/pateh.svg": "f7a2df9a34d793a5f72dc69f6e41b43d",
"assets/assets/images/svgs/pateh_name.svg": "d3319d5fe9989cae99da7e93e2c4f4c4",
"assets/assets/images/svgs/profile_avatar.svg": "d655bb5d467294a52c49566958f54ee9",
"assets/assets/images/weather/clear-day.png": "f8c51965dda5de4b42bf4390e9ff64eb",
"assets/assets/images/weather/clear-night.png": "3810d1191230f994f0a290b63dcd86f6",
"assets/assets/images/weather/cloudy.png": "8ea16a0c352cbd7ee2e955c6876516a1",
"assets/assets/images/weather/fog.png": "8e9a34b77b1981704b7134cabf86b1fe",
"assets/assets/images/weather/hail.png": "2cde678a2c491952d9e3f3ee6bbec352",
"assets/assets/images/weather/partly-cloudy-day.png": "e7d2f4d5b9c1676e352f162cccdf7ad3",
"assets/assets/images/weather/partly-cloudy-night.png": "ba5a87c369b4bb53f5f27eca521461ab",
"assets/assets/images/weather/rain-snow-showers-day.png": "190379c73737bbb06bc4041d62628908",
"assets/assets/images/weather/rain-snow-showers-night.png": "946cbf528d4a6a24b1459398def8c75d",
"assets/assets/images/weather/rain-snow.png": "bd0328efdc861c6153e004e8c751a4f9",
"assets/assets/images/weather/rain.png": "9e06de898b60daaec69e8a6aaef67aba",
"assets/assets/images/weather/showers-day.png": "a0f681956aca495c0076bae080d0029e",
"assets/assets/images/weather/showers-night.png": "c8be175a538c31f44c547a83c3777221",
"assets/assets/images/weather/sleet.png": "5d8c6b2541de541e06a29ebaf755a116",
"assets/assets/images/weather/snow-showers-day.png": "6574e3ac9ecc96b32c97db44c58c6efa",
"assets/assets/images/weather/snow-showers-night.png": "cd8f126cf6f4db11308b6c267a750565",
"assets/assets/images/weather/snow.png": "a1416d7d2dc3f748a596295a9d10c1b2",
"assets/assets/images/weather/thunder-rain.png": "7c8c803f176b0d09ce6453194b3922f2",
"assets/assets/images/weather/thunder-showers-day.png": "524eb0e59e01e641b43413da38ec71c7",
"assets/assets/images/weather/thunder-showers-night.png": "c6d0f49366b1d17553d52f5a43adae74",
"assets/assets/images/weather/thunder.png": "e7ab8abd6d11fa25360f1dce5ada5e70",
"assets/assets/images/weather/wind.png": "a01fa76412f2c917fca5da61327adc2c",
"assets/FontManifest.json": "bf2921c856e404575a844e9a1810a498",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a63a58e8e24cbddda589ce41fa199bbe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/pubspec.yaml": "42215fe5d65c6161ce4bf7088343f718",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"favicon.png": "d9d685201888843a506d557025c4624a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "61215704e90d7f290a637b5d94f65f46",
"google-play.png": "dfc659021da1eab0c96abdc44d32bb08",
"icons/Icon-192.png": "13ecad1c923db10d19b0eb4f4d1c45f1",
"icons/Icon-512.png": "b248a129ebeac2b3e6acfbd441cf37eb",
"icons/Icon-maskable-192.png": "13ecad1c923db10d19b0eb4f4d1c45f1",
"icons/Icon-maskable-512.png": "b248a129ebeac2b3e6acfbd441cf37eb",
"index.html": "fc3e40a393065078bada214f7dc6035b",
"/": "fc3e40a393065078bada214f7dc6035b",
"iranicard.svg": "26fee8b26f80c519dc2d9da989ff8326",
"main.dart.js": "5f6463b21bdcf6f133c9dd7bfdac7680",
"manifest.json": "c6ce223e80bff974b5a2aa2ff3ac6362",
"myket.png": "def51973d8be3d73b62e2e758f2610ad",
"pateh.svg": "f7a2df9a34d793a5f72dc69f6e41b43d",
"version.json": "0e8b9ae16c33289c63886b8354847ec9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
