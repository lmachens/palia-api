import { getDB } from "./db";
import { Node } from "./nodes";

type Villagers = {
  [type: string]: {
    mapName: string;
    position: [number, number, number];
    timestamp: number;
  };
};
const [db, write] = getDB<Villagers>("villagers", {}, 10000);

export function getVillagers() {
  return db;
}

export function updateVillager(node: Node) {
  db[node.type] = {
    mapName: node.mapName,
    position: [node.x, node.y, node.z],
    timestamp: Date.now(),
  };
  write();
}

export const villagers = [
  {
    persistId: 3801,
    configId: "fisherman",
    className: "BP_VillagerFisherman_C",
    name: "Einar",
    icon: "Einar_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 24626,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_Worm",
        persistId: 7710,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 31383,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Gillyfin",
        persistId: 5751,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mudminnow",
        persistId: 8564,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 28246,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_Glow_Worm",
        persistId: 24466,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 24549,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 1659,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Stone",
        persistId: 22293,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 20752,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 20622,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Small",
        persistId: 24445,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Large",
        persistId: 6688,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Lumpy",
        persistId: 19697,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Smooth",
        persistId: 7740,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Red",
        persistId: 30550,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Blue",
        persistId: 9866,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Purple",
        persistId: 17686,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Yellow",
        persistId: 4590,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Green",
        persistId: 27423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Orange",
        persistId: 13518,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 426,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mirror_Carp",
        persistId: 6831,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mottled_Gobi",
        persistId: 32153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 32414,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SpottedBullhead",
        persistId: 9008,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 4035,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Striped_Dace",
        persistId: 1954,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellow_Perch",
        persistId: 16881,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Silvery_Minnow",
        persistId: 23858,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 23829,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RibbontailRay",
        persistId: 6123,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 27030,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Kilima_Grayling",
        persistId: 6396,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Fathead_Minnow",
        persistId: 23754,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Stormray",
        persistId: 7638,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 28157,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cactus_Moray",
        persistId: 22930,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Blue_Spotted_Ray",
        persistId: 230,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 4642,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 14455,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 10321,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 7524,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 7240,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 21087,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 30659,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 1232,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 31520,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 31327,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 3302,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 384,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 23227,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 6461,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 5778,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 19645,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 182,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 31010,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 24626,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_Worm",
        persistId: 7710,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 31383,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Gillyfin",
        persistId: 5751,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mudminnow",
        persistId: 8564,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 28246,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_Glow_Worm",
        persistId: 24466,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 24549,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 1659,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Stone",
        persistId: 22293,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 20752,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 20622,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Small",
        persistId: 24445,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Large",
        persistId: 6688,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Lumpy",
        persistId: 19697,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Smooth",
        persistId: 7740,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Red",
        persistId: 30550,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Blue",
        persistId: 9866,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Purple",
        persistId: 17686,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Yellow",
        persistId: 4590,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Green",
        persistId: 27423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Orange",
        persistId: 13518,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 426,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mirror_Carp",
        persistId: 6831,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mottled_Gobi",
        persistId: 32153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 32414,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SpottedBullhead",
        persistId: 9008,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 4035,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Striped_Dace",
        persistId: 1954,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellow_Perch",
        persistId: 16881,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Silvery_Minnow",
        persistId: 23858,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 23829,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RibbontailRay",
        persistId: 6123,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 27030,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Kilima_Grayling",
        persistId: 6396,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Fathead_Minnow",
        persistId: 23754,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Stormray",
        persistId: 7638,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 28157,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cactus_Moray",
        persistId: 22930,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Blue_Spotted_Ray",
        persistId: 230,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 4642,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 14455,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 10321,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 7524,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 7240,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 21087,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 30659,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 1232,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 31520,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 31327,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 3302,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 384,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 23227,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 6461,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 5778,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 19645,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 182,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 31010,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 19327,
    configId: "deliveryboy",
    className: "BP_VillagerDeliveryBoy_C",
    name: "Auni",
    icon: "Auni_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 12915,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 9789,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 5212,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 5239,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleU",
        persistId: 32747,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleC",
        persistId: 22706,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 17002,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 27767,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 6953,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 51,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 22177,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 30693,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 8264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 25848,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 29688,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 27430,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeU",
        persistId: 30441,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaC",
        persistId: 12262,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaU",
        persistId: 8080,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisU",
        persistId: 12897,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR1",
        persistId: 32629,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeU",
        persistId: 18135,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR1",
        persistId: 26439,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR2",
        persistId: 23266,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 5946,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailR",
        persistId: 6885,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 13554,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 1149,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 7355,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 3631,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 23103,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 23879,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 18912,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 26285,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 10540,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 5354,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 5480,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 2419,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 13817,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 28055,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29779,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 12915,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 9789,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 5212,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 5239,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleU",
        persistId: 32747,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleC",
        persistId: 22706,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 17002,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 27767,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 6953,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 51,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 22177,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 30693,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 8264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 25848,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 29688,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 27430,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeU",
        persistId: 30441,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaC",
        persistId: 12262,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaU",
        persistId: 8080,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisU",
        persistId: 12897,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR1",
        persistId: 32629,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeU",
        persistId: 18135,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR1",
        persistId: 26439,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR2",
        persistId: 23266,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 5946,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailR",
        persistId: 6885,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 13554,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 1149,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 7355,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 3631,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 23103,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 23879,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 18912,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 26285,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 10540,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 5354,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 5480,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 2419,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 13817,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 28055,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29779,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 5586,
    configId: "thewatcher",
    className: "BP_VillagerTheWatcher_C",
    name: "Subira",
    icon: "WT_Subira_Portrait",
    gifts: [
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 11216,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 13833,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 6090,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 8732,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 32275,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 7257,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 565,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 32400,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 18700,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 7154,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 5562,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 14538,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 15088,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 11541,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 26294,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 20825,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Wood_Magicwood",
        persistId: 21868,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 24857,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 15563,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 823,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 25177,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 12527,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 26789,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 28695,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 3297,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 22163,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 11515,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 5180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 20537,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 29555,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 16104,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 19727,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 24886,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 30810,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 18900,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 7077,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 29350,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 27313,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 9238,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 2378,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 951,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 15296,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 28007,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 7203,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 4619,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 624,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 29078,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 12810,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 597,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 9086,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 24791,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 380,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 9195,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 20096,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 10327,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 16928,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 2695,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 3323,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_Glow_Worm",
        persistId: 23509,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Simple",
        persistId: 28947,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 24227,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 13263,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 10878,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 7342,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 29210,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 8656,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 9963,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 19197,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 25781,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 11216,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 13833,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 6090,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 8732,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 32275,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 7257,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 565,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 32400,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 18700,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 7154,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 5562,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 14538,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 15088,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 11541,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 26294,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 20825,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Wood_Magicwood",
        persistId: 21868,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 24857,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 15563,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 823,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 25177,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 12527,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 26789,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 28695,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 3297,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 22163,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 11515,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 5180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 20537,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 29555,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 16104,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 19727,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 24886,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 30810,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 18900,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 7077,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 29350,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 27313,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 9238,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 2378,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 951,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 15296,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 28007,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 7203,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 4619,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 624,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 29078,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 12810,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 597,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 9086,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 24791,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 380,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 9195,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 20096,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 10327,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 16928,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 2695,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 3323,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_Glow_Worm",
        persistId: 23509,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Simple",
        persistId: 28947,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 24227,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 13263,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 10878,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 7342,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 29210,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 8656,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 9963,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 19197,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 25781,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 21355,
    configId: "thedemolitionist",
    className: "BP_VillagerTheDemolitionist_C",
    name: "Najuma",
    icon: "Najuma_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 21612,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 14620,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 6646,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 1795,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 25660,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 1740,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 27397,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 17287,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 10898,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 73,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 2953,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Honey_Loach",
        persistId: 31049,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 9083,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9411,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 21185,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 24305,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 13522,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 19726,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 23343,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 32509,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 28911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 4994,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 32496,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ceramic",
        persistId: 3311,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 6244,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 30553,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 28957,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailR",
        persistId: 28797,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 25646,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 17471,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 2988,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 21462,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Tomato",
        persistId: 17911,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 3773,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 11331,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 16812,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 22839,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 579,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 28543,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 21612,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 14620,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 6646,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 1795,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 25660,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 1740,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 27397,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 17287,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 10898,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 73,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 2953,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Honey_Loach",
        persistId: 31049,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 9083,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9411,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 21185,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 24305,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 13522,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 19726,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 23343,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 32509,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 28911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 4994,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 32496,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ceramic",
        persistId: 3311,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 6244,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 30553,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 28957,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailR",
        persistId: 28797,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 25646,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 17471,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 2988,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 21462,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Tomato",
        persistId: 17911,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 3773,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 11331,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 16812,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 22839,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 579,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 28543,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 13337,
    configId: "theinnkeeper",
    className: "BP_VillagerTheInnKeeper_C",
    name: "Ashura",
    icon: "Ashura_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 17124,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 26759,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 2597,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 25991,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_StripedSturgeon",
        persistId: 4350,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Striped_Dace",
        persistId: 21583,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stickleback",
        persistId: 15249,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 31138,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 14556,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 24132,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 694,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 23950,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 8688,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 3515,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 14454,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 25378,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 17141,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 8869,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 27149,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 29855,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 13819,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 1122,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 14464,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 8541,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 12911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 26154,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 30801,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 21317,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 478,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 7335,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 19275,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 16181,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 15770,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 1643,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 2714,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 5505,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 16917,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 12463,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 6016,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 10462,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 30208,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 19268,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 31726,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 10430,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 13655,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 22344,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_QuestReward_CenturyEgg",
        persistId: 30311,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_CrabPotPie",
        persistId: 30248,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Onyx",
        persistId: 2465,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 13178,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 17124,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 26759,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 2597,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 25991,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_StripedSturgeon",
        persistId: 4350,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Striped_Dace",
        persistId: 21583,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stickleback",
        persistId: 15249,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 31138,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 14556,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 24132,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 694,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 23950,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 8688,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 3515,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 14454,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 25378,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 17141,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 8869,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 27149,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 29855,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 13819,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 1122,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 14464,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 8541,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 12911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 26154,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 30801,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 21317,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 478,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 7335,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 19275,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 16181,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 15770,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 1643,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 2714,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 5505,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 16917,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 12463,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 6016,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 10462,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 30208,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 19268,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 31726,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 10430,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 13655,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 22344,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_QuestReward_CenturyEgg",
        persistId: 30311,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_CrabPotPie",
        persistId: 30248,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Onyx",
        persistId: 2465,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 13178,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 14351,
    configId: "thehunter",
    className: "BP_VillagerTheHunter_C",
    name: "Hassian",
    icon: "Hassian_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Questitem_OldBow",
        persistId: 30192,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 15286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 14933,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 8913,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Lethargy",
        persistId: 10867,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 15163,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 2013,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 201,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_PlantFiber",
        persistId: 17687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Kilima_Stingray",
        persistId: 1961,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 17076,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 25327,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 9571,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 25743,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 31905,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 14362,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 11608,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 32401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 16440,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 17084,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fabric",
        persistId: 28284,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 29768,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 7919,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 9544,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 4103,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 25689,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Dispel",
        persistId: 16357,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Fireworks_Random",
        persistId: 26933,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 25677,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 30200,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 8645,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 1771,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 31437,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 10123,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 10302,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 10735,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 689,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 16441,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 13096,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ChapaaAsadaTacos",
        persistId: 20604,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Emerald",
        persistId: 31920,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 28155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_OldBow",
        persistId: 30192,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 15286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 14933,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 8913,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Lethargy",
        persistId: 10867,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 15163,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 2013,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 201,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_PlantFiber",
        persistId: 17687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Kilima_Stingray",
        persistId: 1961,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 17076,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 25327,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 9571,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 25743,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 31905,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 14362,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 11608,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 32401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 16440,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 17084,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fabric",
        persistId: 28284,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 29768,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 7919,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 9544,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 4103,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 25689,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Dispel",
        persistId: 16357,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Fireworks_Random",
        persistId: 26933,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 25677,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 30200,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 8645,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 1771,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 31437,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 10123,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 10302,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 10735,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 689,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 16441,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 13096,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ChapaaAsadaTacos",
        persistId: 20604,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Emerald",
        persistId: 31920,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 28155,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 8919,
    configId: "thearcheologist",
    className: "BP_VillagerTheArchaeologist_C",
    name: "Jina",
    icon: "Jina_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 19266,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 14316,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 21807,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 17534,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 891,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 12992,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 31758,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 15087,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Mushroom",
        persistId: 747,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 6770,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 13050,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 21093,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 15017,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11929,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 8834,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 5577,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 21597,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 32537,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 31855,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 14592,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 7682,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 13708,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 5939,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 17820,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 7089,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 9011,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 9819,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 27403,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 8433,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 26638,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 14903,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 5620,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 31514,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 6596,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 30340,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Mushroom",
        persistId: 8926,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 1116,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Breakfast_MushroomQuiche",
        persistId: 20914,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 25583,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 3946,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 19504,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 27683,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 29746,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 8126,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 8097,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 28494,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Emerald",
        persistId: 10013,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 15724,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 19266,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 14316,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 21807,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 17534,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 891,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 12992,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 31758,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 15087,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Mushroom",
        persistId: 747,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 6770,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 13050,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 21093,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 15017,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11929,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 8834,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 5577,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 21597,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 32537,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 31855,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 14592,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 7682,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 13708,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 5939,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 17820,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 7089,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 9011,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 9819,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 27403,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 8433,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 26638,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 14903,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 5620,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 31514,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 6596,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 30340,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Mushroom",
        persistId: 8926,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 1116,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Breakfast_MushroomQuiche",
        persistId: 20914,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 25583,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 3946,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 19504,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 27683,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 29746,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 8126,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 8097,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 28494,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Emerald",
        persistId: 10013,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 15724,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 1142,
    configId: "themagistrate",
    className: "BP_Villager_TheMagistrate_C",
    name: "Eshe",
    icon: "Eshe_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 27250,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 9596,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 9309,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7099,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 9064,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 24084,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Bigeye_Tuna",
        persistId: 29180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellowfin_Tuna",
        persistId: 7268,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 21615,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 9939,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 19837,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 27884,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 19850,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 17248,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 23933,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 5182,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 14561,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 10163,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 24252,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8723,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 1518,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 23341,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 31151,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 8539,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 10638,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 32193,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyE",
        persistId: 4976,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 15509,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 17925,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 21750,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 21062,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 26969,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 3785,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 22381,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Recipe_Cooking_Onigiri",
        persistId: 10197,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 16837,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 31086,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 7689,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 11201,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 1214,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 20162,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Ruby",
        persistId: 16824,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 8715,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 337,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 6702,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 27250,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 9596,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 9309,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7099,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 9064,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 24084,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Bigeye_Tuna",
        persistId: 29180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellowfin_Tuna",
        persistId: 7268,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 21615,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 9939,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 19837,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 27884,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 19850,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 17248,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 23933,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 5182,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 14561,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 10163,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 24252,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8723,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 1518,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 23341,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 31151,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 8539,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 10638,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 32193,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyE",
        persistId: 4976,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 15509,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 17925,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 21750,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 21062,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 26969,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 3785,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 22381,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Recipe_Cooking_Onigiri",
        persistId: 10197,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 16837,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 31086,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 7689,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 11201,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 1214,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 20162,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Ruby",
        persistId: 16824,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 8715,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 337,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 6702,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 10215,
    configId: "thecook",
    className: "BP_Villager_Cook_C",
    name: "Reth",
    icon: "Reth_icon",
    gifts: [
      {
        objectId: "DA_ItemType_QuestItem_Reward_LettuceSoup",
        persistId: 17907,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 718,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 2909,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 24710,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 7188,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 18622,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 13172,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 32708,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 12304,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_LargemouthBass",
        persistId: 15378,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellow_Perch",
        persistId: 25980,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 18407,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 9444,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 22781,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 3055,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 13335,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 11417,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 5202,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 15580,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 27085,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 24125,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 596,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 30795,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 31842,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 22548,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 32587,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 17459,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Onion",
        persistId: 18819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 29289,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 28260,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 29405,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleR",
        persistId: 28222,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 19524,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 22694,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 25026,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 960,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 3471,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 4425,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 8013,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 3032,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 7136,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 24189,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 9080,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 16191,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 14386,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 820,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 22170,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 11456,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 10503,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 19421,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 4502,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 29679,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 14283,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 23342,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 237,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 23101,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 2539,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 19848,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_QuestItem_Reward_LettuceSoup",
        persistId: 17907,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 718,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 2909,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 24710,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 7188,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 18622,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 13172,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 32708,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 12304,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_LargemouthBass",
        persistId: 15378,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellow_Perch",
        persistId: 25980,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 18407,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 9444,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 22781,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 3055,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 13335,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 11417,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 5202,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 15580,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 27085,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 24125,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 596,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 30795,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 31842,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 22548,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 32587,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 17459,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Onion",
        persistId: 18819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 29289,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 28260,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 29405,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleR",
        persistId: 28222,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 19524,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 22694,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 25026,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 960,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 3471,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 4425,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 8013,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 3032,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 7136,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 24189,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 9080,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 16191,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 14386,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 820,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 22170,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 11456,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 10503,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 19421,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 4502,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 29679,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 14283,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 23342,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 237,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 23101,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 2539,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 19848,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 6680,
    configId: "thesalesman",
    className: "BP_Villager_Zeki_C",
    name: "Zeki",
    icon: "Zeki_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 7684,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 9791,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 17071,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Platinum_Chad",
        persistId: 725,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 26464,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 9719,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 14564,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 31244,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 28844,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 20719,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 2819,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 12606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 19951,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 898,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23815,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 18986,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 7260,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 1255,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 27153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Silvery_Minnow",
        persistId: 27041,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 31613,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 26470,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 1813,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 3338,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 29169,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 976,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeR",
        persistId: 4517,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 10240,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 5569,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 19057,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 18575,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 7812,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 4782,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 24388,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 7346,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 24451,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 14253,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 5496,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 30600,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 27257,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 16807,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_CrabGumbo",
        persistId: 29428,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishTacos",
        persistId: 30934,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 25347,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 16497,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 7684,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 9791,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 17071,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Platinum_Chad",
        persistId: 725,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 26464,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 9719,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 14564,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 31244,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 28844,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 20719,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 2819,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 12606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 19951,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 898,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23815,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 18986,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 7260,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 1255,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 27153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Silvery_Minnow",
        persistId: 27041,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 31613,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 26470,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 1813,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 3338,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 29169,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 976,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeR",
        persistId: 4517,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 10240,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 5569,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 19057,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 18575,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 7812,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 4782,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 24388,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 7346,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 24451,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 14253,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 5496,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 30600,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 27257,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 16807,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_CrabGumbo",
        persistId: 29428,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishTacos",
        persistId: 30934,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 25347,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 16497,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 19881,
    configId: "thecarpenter",
    className: "BP_Villager_Tish_C",
    name: "Tish",
    icon: "Tish_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 19568,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 29725,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 21154,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 9699,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 16804,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 22505,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 20081,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 24672,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Dawnray",
        persistId: 19225,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 4687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 20188,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 16043,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 23477,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 32679,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 8528,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22469,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 22087,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 22668,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 28177,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 22393,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 24716,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 27617,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 13029,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 19651,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 29849,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 5689,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 14756,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 8997,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 10443,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 1425,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 25291,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 7755,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 21494,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 499,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 15877,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 27087,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 17322,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 9636,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 19568,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 29725,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 21154,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 9699,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 16804,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 22505,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 20081,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 24672,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Dawnray",
        persistId: 19225,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 4687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 20188,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 16043,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 23477,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 32679,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 8528,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22469,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 22087,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 22668,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 28177,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 22393,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 24716,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 27617,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 13029,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 19651,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 29849,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 5689,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 14756,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 8997,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 10443,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 1425,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 25291,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 7755,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 21494,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 499,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 15877,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 27087,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 17322,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 9636,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 30076,
    configId: "themayor",
    className: "BP_Villager_Mayor_C",
    name: "Kenli",
    icon: "Kenji_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 30281,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 6814,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 29987,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 697,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 15813,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 13542,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 12063,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 14525,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 2994,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 7825,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 7017,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 14964,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 15055,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 1726,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 19360,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 5083,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 950,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 29425,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 24455,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 18148,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 13731,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 13902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 23366,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 3684,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 2603,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 9698,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 31302,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 18546,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 12816,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugU",
        persistId: 31026,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugR",
        persistId: 12330,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 16403,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 14013,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 29551,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 31668,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Jasper",
        persistId: 20855,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 23602,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 19797,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 30606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 30281,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 6814,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 29987,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 697,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 15813,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 13542,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 12063,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 14525,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 2994,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 7825,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 7017,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 14964,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 15055,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 1726,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 19360,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 5083,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 950,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 29425,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 24455,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 18148,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 13731,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 13902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 23366,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 3684,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 2603,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 9698,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 31302,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 18546,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 12816,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugU",
        persistId: 31026,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugR",
        persistId: 12330,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 16403,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 14013,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 29551,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 31668,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Jasper",
        persistId: 20855,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 23602,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 19797,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 30606,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 8663,
    configId: "thefarmer",
    className: "BP_Villager_Farmer_C",
    name: "Badruu",
    icon: "Badru_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 12718,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 29674,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 20715,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 24344,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 25038,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 26172,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Orange_Bluegill",
        persistId: 30191,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rosy_Bitterling",
        persistId: 26576,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 26225,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 20163,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 30027,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 17114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 7974,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 25092,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 30743,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 10978,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Carrot",
        persistId: 19895,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Onion",
        persistId: 14987,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 8010,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Potato",
        persistId: 11718,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 20694,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 11787,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 28013,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 27571,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 14161,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 19995,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 30207,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 28156,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 22971,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 29517,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 18519,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 31596,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 14166,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 578,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 16480,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 10436,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 18363,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 2525,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 12307,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Corn",
        persistId: 6649,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_SpicyPepper",
        persistId: 10586,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Sapphire",
        persistId: 25559,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 12718,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 29674,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 20715,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 24344,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 25038,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 26172,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Orange_Bluegill",
        persistId: 30191,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rosy_Bitterling",
        persistId: 26576,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 26225,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 20163,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 30027,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 17114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 7974,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 25092,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 30743,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 10978,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Carrot",
        persistId: 19895,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Onion",
        persistId: 14987,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 8010,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Potato",
        persistId: 11718,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 20694,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 11787,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 28013,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 27571,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 14161,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 19995,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 30207,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 28156,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 22971,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 29517,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 18519,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 31596,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 14166,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 578,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 16480,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 10436,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 18363,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 2525,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 12307,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Corn",
        persistId: 6649,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_SpicyPepper",
        persistId: 10586,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Sapphire",
        persistId: 25559,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 19151,
    configId: "therancher",
    className: "BP_Villager_Rancher_C",
    name: "Delaila",
    icon: "Dalila_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 6796,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 26349,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 953,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 3095,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 1168,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 24906,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 31004,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 26197,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 22209,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 7243,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Orange_Bluegill",
        persistId: 9536,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 29909,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 8490,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 31645,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 31709,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 645,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Rosy_Bitterling",
        persistId: 30147,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 28183,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 8606,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 26019,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 13997,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 20510,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 6351,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 4001,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 18601,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeR",
        persistId: 1161,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 4145,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 3536,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 14939,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugU",
        persistId: 28404,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugR",
        persistId: 25392,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 7157,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 32383,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 7100,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 31157,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 16668,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 6498,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 24246,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 12202,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 18249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 8139,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 24337,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 2270,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 13640,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 864,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ShepardsPie",
        persistId: 2706,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 32511,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 8927,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 6796,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 26349,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 953,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 3095,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 1168,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 24906,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 31004,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 26197,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 22209,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 7243,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Orange_Bluegill",
        persistId: 9536,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 29909,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 8490,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 31645,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 31709,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 645,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Rosy_Bitterling",
        persistId: 30147,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 28183,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 8606,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 26019,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 13997,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 20510,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 6351,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 4001,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 18601,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeR",
        persistId: 1161,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 4145,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 3536,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 14939,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugU",
        persistId: 28404,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugR",
        persistId: 25392,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 7157,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 32383,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 7100,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 31157,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 16668,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 6498,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 24246,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 12202,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 18249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 8139,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 24337,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 2270,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 13640,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 864,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ShepardsPie",
        persistId: 2706,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 32511,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 8927,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 4701,
    configId: "theblacksmith",
    className: "BP_Villager_Blacksmith_C",
    name: "Sifuu",
    icon: "Sefu_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 6344,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 24848,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 21853,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Sardine",
        persistId: 22696,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 18733,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 28363,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Swordfin_Eel",
        persistId: 28574,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 28651,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 9697,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 25576,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 22142,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Carrot",
        persistId: 5039,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 3189,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 901,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 25310,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 32039,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 13179,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 23470,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 26280,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 12659,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 542,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 2154,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 3364,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 1177,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Lethargy",
        persistId: 18059,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Dispel",
        persistId: 20305,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Fireworks_Random",
        persistId: 19426,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 22404,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 27894,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 27573,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 5790,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 10089,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 24595,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 26001,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 6344,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 24848,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 21853,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Sardine",
        persistId: 22696,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 18733,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 28363,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Swordfin_Eel",
        persistId: 28574,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 28651,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 9697,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 25576,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 22142,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Carrot",
        persistId: 5039,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 3189,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 901,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 25310,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 32039,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 13179,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 23470,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 26280,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 12659,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 542,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 2154,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 3364,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 1177,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Lethargy",
        persistId: 18059,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Dispel",
        persistId: 20305,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Fireworks_Random",
        persistId: 19426,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 22404,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 27894,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 27573,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 5790,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 10089,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 24595,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 26001,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 1419,
    configId: "theminer",
    className: "BP_Villager_Miner_C",
    name: "Hodari",
    icon: "Hodari_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 7934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 18195,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 12119,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 9174,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stonefish",
        persistId: 24927,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_BlueMarlin",
        persistId: 16829,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 29740,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Wood_Hardwood",
        persistId: 2251,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Magicwood",
        persistId: 21789,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 30034,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 24292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 30349,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 22948,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 31902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 3998,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 195,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 5402,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 11831,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 30760,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 21352,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 27550,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 11968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 29205,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugC",
        persistId: 32766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugR",
        persistId: 6656,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 16603,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 24787,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 28954,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 16471,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 22118,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 3987,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 31071,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 24758,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 20077,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 9282,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 26438,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 30657,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 3656,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 7738,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_HotHounds",
        persistId: 11773,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 1567,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 4045,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 9905,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 8730,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 7934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 18195,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 12119,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 9174,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stonefish",
        persistId: 24927,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_BlueMarlin",
        persistId: 16829,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 29740,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Wood_Hardwood",
        persistId: 2251,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Magicwood",
        persistId: 21789,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 30034,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 24292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 30349,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 22948,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 31902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 3998,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 195,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 5402,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 11831,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 30760,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 21352,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 27550,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 11968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 29205,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugC",
        persistId: 32766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugR",
        persistId: 6656,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 16603,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 24787,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 28954,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 16471,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 22118,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 3987,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 31071,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 24758,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 20077,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 9282,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 26438,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 30657,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 3656,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 7738,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_HotHounds",
        persistId: 11773,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 1567,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 4045,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 9905,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 8730,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 13260,
    configId: "thealchemist",
    className: "BP_Villager_Tamala_C",
    name: "Tamala",
    icon: "Tamala_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 8043,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 8631,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 30643,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 6559,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 25817,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 20108,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothC",
        persistId: 21136,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothU",
        persistId: 2599,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 20498,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 23703,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 344,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 1719,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 424,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 32219,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 22429,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 24309,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 19466,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 30882,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 24515,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 19027,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 14011,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 2409,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 13600,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 17504,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9825,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 17719,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 11189,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 26390,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 24979,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 15456,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 23840,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeU",
        persistId: 30620,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR1",
        persistId: 16737,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 14322,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 713,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 14975,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 31298,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 4903,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 10651,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 17861,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 2537,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 3586,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 216,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 6366,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Stormray",
        persistId: 30054,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Swordfin_Eel",
        persistId: 20341,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_BlueMarlin",
        persistId: 6660,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 30992,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Blue_Spotted_Ray",
        persistId: 1268,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 30365,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 28758,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Kilima_Stingray",
        persistId: 11008,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 32478,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 5938,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 9169,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 20561,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 6695,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 119,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 17506,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Amethyst",
        persistId: 8121,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 8043,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 8631,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 30643,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 6559,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 25817,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 20108,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothC",
        persistId: 21136,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothU",
        persistId: 2599,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 20498,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 23703,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 344,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 1719,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 424,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 32219,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 22429,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 24309,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 19466,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 30882,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 24515,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 19027,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 14011,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 2409,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 13600,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 17504,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9825,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 17719,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 11189,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 26390,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 24979,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 15456,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 23840,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeU",
        persistId: 30620,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR1",
        persistId: 16737,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 14322,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 713,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 14975,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 31298,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 4903,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 10651,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 17861,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 2537,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 3586,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 216,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 6366,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Stormray",
        persistId: 30054,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Swordfin_Eel",
        persistId: 20341,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_BlueMarlin",
        persistId: 6660,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 30992,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Blue_Spotted_Ray",
        persistId: 1268,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 30365,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 28758,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Kilima_Stingray",
        persistId: 11008,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 32478,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 5938,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 9169,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 20561,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 6695,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 119,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 17506,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Amethyst",
        persistId: 8121,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 20124,
    configId: "thelibrarian",
    className: "BP_Villager_TheLibrarian_C",
    name: "Caleri",
    icon: "Calere_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 6776,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 6246,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Kilima_Redfin",
        persistId: 1908,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Crucian_Carp",
        persistId: 35,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 10486,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 26828,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 24970,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 19020,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 7396,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 13034,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 15349,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 8172,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 5489,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 13465,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 27691,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2503,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 6572,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 20156,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 25728,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 6859,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 3541,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 15594,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 5960,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Carrot",
        persistId: 31043,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 225,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 2087,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 26092,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugC",
        persistId: 14466,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugR",
        persistId: 18420,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 4588,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 32526,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 8145,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 20332,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 22788,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 4623,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 16355,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 23611,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 26608,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Aquamarine",
        persistId: 4128,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 6687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 11246,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 6776,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 6246,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Kilima_Redfin",
        persistId: 1908,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Crucian_Carp",
        persistId: 35,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 10486,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 26828,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 24970,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 19020,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 7396,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 13034,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 15349,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 8172,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 5489,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 13465,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 27691,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2503,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 6572,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 20156,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 25728,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 6859,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 3541,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 15594,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 5960,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Carrot",
        persistId: 31043,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 225,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 2087,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 26092,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugC",
        persistId: 14466,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugR",
        persistId: 18420,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 4588,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 32526,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 8145,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 20332,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 22788,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 4623,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 16355,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 23611,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 26608,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Aquamarine",
        persistId: 4128,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 6687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 11246,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 5802,
    configId: "thefarmboy",
    className: "BP_Villager_Farmboy_C",
    name: "Nai'o",
    icon: "Nyo_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 8278,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 1394,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Potato",
        persistId: 13603,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 28365,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_Love_Note",
        persistId: 11545,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 30165,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 7759,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SpottedBullhead",
        persistId: 27835,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 543,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 10537,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 729,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 12995,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 23061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 31988,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 9991,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 6448,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Bahari_Pike",
        persistId: 14399,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 26211,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 13875,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 893,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 17182,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 13492,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 6581,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 7123,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 9925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 9213,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 7263,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 17548,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 13243,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 7162,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 15111,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 10995,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 13996,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 30968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 23004,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 16872,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 17746,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 11890,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 19090,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 19863,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26763,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 27930,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 23260,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 27705,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_MeatyUdon",
        persistId: 356,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 10802,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 16537,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 32208,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 29877,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Corn",
        persistId: 8192,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Jasper",
        persistId: 14479,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 29585,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 8278,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 1394,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Potato",
        persistId: 13603,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 28365,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_Love_Note",
        persistId: 11545,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 30165,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 7759,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SpottedBullhead",
        persistId: 27835,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 543,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 10537,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 729,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 12995,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 23061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 31988,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 9991,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 6448,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Bahari_Pike",
        persistId: 14399,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 26211,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 13875,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 893,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 17182,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 13492,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 6581,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 7123,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 9925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 9213,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 7263,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 17548,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 13243,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 7162,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 15111,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 10995,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 13996,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 30968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 23004,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 16872,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 17746,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 11890,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 19090,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 19863,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26763,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 27930,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 23260,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 27705,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_MeatyUdon",
        persistId: 356,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 10802,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 16537,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 32208,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 29877,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Corn",
        persistId: 8192,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Jasper",
        persistId: 14479,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 29585,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 6515,
    configId: "thenanny",
    className: "BP_Villager_Hekla_C",
    name: "Hekla",
    icon: "Hekla_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Fish_BahariBream",
        persistId: 5232,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 29379,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 20276,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_LargemouthBass",
        persistId: 13761,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SmallmouthBass",
        persistId: 10943,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Codfish",
        persistId: 29002,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 15684,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Beluga_Sturgeon",
        persistId: 2543,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 30233,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 21051,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 11945,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 2045,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 1619,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 10705,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 27532,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 19115,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 1423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 15502,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 20285,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Chub",
        persistId: 25628,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PaintedPerch",
        persistId: 8941,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 415,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 6601,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 25470,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 757,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 21818,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 6425,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 30563,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 4352,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 20519,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 17028,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 28049,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 4672,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 6623,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 26946,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 2800,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 8652,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_BahariBream",
        persistId: 5232,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 29379,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 20276,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_LargemouthBass",
        persistId: 13761,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SmallmouthBass",
        persistId: 10943,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Codfish",
        persistId: 29002,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 15684,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Beluga_Sturgeon",
        persistId: 2543,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 30233,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 21051,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 11945,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 2045,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 1619,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 10705,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 27532,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 19115,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 1423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 15502,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 20285,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Chub",
        persistId: 25628,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PaintedPerch",
        persistId: 8941,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 415,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 6601,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 25470,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 757,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 21818,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 6425,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 30563,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 4352,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 20519,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 17028,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 28049,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 4672,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 6623,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 26946,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 2800,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 8652,
        rewardLevel: "Neutral",
      },
    ],
  },
  {
    persistId: 21224,
    configId: "themayorsdaughter",
    className: "BP_Villager_Kenyatta_C",
    name: "Kenyatta",
    icon: "Icon_Villager_Kenyatta",
    gifts: [
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 23459,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 21910,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 31022,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 18695,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 15721,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_Love_Note",
        persistId: 31934,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 2700,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 12142,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 10931,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Crimson_Fangtooth",
        persistId: 19103,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Alligator_Gar",
        persistId: 2682,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 27316,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22813,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 24226,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 27522,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 32132,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Cutthroat_Trout",
        persistId: 10953,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Sardine",
        persistId: 4489,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 2127,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 32475,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 14030,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Onion",
        persistId: 30621,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 2281,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 28876,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 24835,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 26412,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 9463,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 31853,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 26931,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 26683,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 1690,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisU",
        persistId: 5198,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR1",
        persistId: 16175,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 22340,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 18126,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 23906,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 9410,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 24624,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 15257,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyE",
        persistId: 18545,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 11296,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 27679,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 3566,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 23117,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 6716,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 31738,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_FriedRice",
        persistId: 17,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 3596,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 4808,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 16443,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 18466,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 16439,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 16920,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 17771,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 13512,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_UmbranCarp",
        persistId: 16482,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_BatRay",
        persistId: 32630,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 4032,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Blobfish",
        persistId: 23744,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Stonefish",
        persistId: 2269,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Crimson_Fangtooth",
        persistId: 25885,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 8391,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 26102,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 12689,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 9999,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 16533,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 13969,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 19680,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 8540,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 7454,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_SpicyStirFry",
        persistId: 17601,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 9423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_DragonbreathRelleno",
        persistId: 16644,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 31484,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Amethyst",
        persistId: 10916,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T2",
        persistId: 20778,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 2028,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 23459,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 21910,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 31022,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 18695,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 15721,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_Love_Note",
        persistId: 31934,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 2700,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 12142,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 10931,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Crimson_Fangtooth",
        persistId: 19103,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Alligator_Gar",
        persistId: 2682,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 27316,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22813,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 24226,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 27522,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 32132,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Cutthroat_Trout",
        persistId: 10953,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Sardine",
        persistId: 4489,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 2127,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 32475,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 14030,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Onion",
        persistId: 30621,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 2281,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 28876,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 24835,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 26412,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 9463,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 31853,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 26931,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 26683,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 1690,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisU",
        persistId: 5198,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR1",
        persistId: 16175,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 22340,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 18126,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 23906,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 9410,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 24624,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 15257,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyE",
        persistId: 18545,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 11296,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 27679,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 3566,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 23117,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 6716,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 31738,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_FriedRice",
        persistId: 17,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 3596,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 4808,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 16443,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 18466,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 16439,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 16920,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 17771,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 13512,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_UmbranCarp",
        persistId: 16482,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_BatRay",
        persistId: 32630,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 4032,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Blobfish",
        persistId: 23744,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Stonefish",
        persistId: 2269,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Crimson_Fangtooth",
        persistId: 25885,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 8391,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 26102,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 12689,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 9999,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 16533,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 13969,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 19680,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 8540,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 7454,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_SpicyStirFry",
        persistId: 17601,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 9423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_DragonbreathRelleno",
        persistId: 16644,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 31484,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Amethyst",
        persistId: 10916,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T2",
        persistId: 20778,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 2028,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 10502,
    configId: "thetailor",
    className: "BP_Villager_Jel_C",
    name: "Jel",
    icon: "Jel_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 4385,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 31000,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 20366,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 13354,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 11229,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 18867,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Indigo_Lamprey",
        persistId: 6195,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_BatRay",
        persistId: 22460,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Duskray",
        persistId: 28431,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothC",
        persistId: 26623,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothU",
        persistId: 14927,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 11139,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 16976,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 6605,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_FreshwaterEel",
        persistId: 6632,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 7879,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 23883,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 25672,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 18913,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 8919,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_UmbranCarp",
        persistId: 20067,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 28008,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 7305,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 22278,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 19107,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 22147,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 20208,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 24817,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 2754,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothR",
        persistId: 11504,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 19970,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR2",
        persistId: 13564,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 28071,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 30166,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 27299,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 32080,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 20924,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 20494,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Sapphire",
        persistId: 24264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 1882,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 16146,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 11730,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T1",
        persistId: 23690,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T2",
        persistId: 26981,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 6652,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 4385,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 31000,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 20366,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 13354,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 11229,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 18867,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Indigo_Lamprey",
        persistId: 6195,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_BatRay",
        persistId: 22460,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Duskray",
        persistId: 28431,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothC",
        persistId: 26623,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothU",
        persistId: 14927,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 11139,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 16976,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 6605,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_FreshwaterEel",
        persistId: 6632,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 7879,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 23883,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 25672,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 18913,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 8919,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_UmbranCarp",
        persistId: 20067,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 28008,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 7305,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 22278,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 19107,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 22147,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 20208,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 24817,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 2754,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothR",
        persistId: 11504,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 19970,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR2",
        persistId: 13564,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 28071,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 30166,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 27299,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 32080,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 20924,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 20494,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Sapphire",
        persistId: 24264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 1882,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 16146,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 11730,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T1",
        persistId: 23690,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T2",
        persistId: 26981,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 6652,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 1897,
    configId: "thecurator",
    className: "BP_Villager_Elouisa_C",
    name: "Elouisa",
    icon: "Elouisa_Icon1",
    gifts: [
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 25803,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 3837,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32087,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 1163,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 11387,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 20580,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 26413,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Blobfish",
        persistId: 23095,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 832,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Dawnray",
        persistId: 31892,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Duskray",
        persistId: 22812,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Paddlefish",
        persistId: 11101,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Cutthroat_Trout",
        persistId: 5762,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 8966,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Indigo_Lamprey",
        persistId: 30862,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 6127,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Beluga_Sturgeon",
        persistId: 26193,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 4167,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 17155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 2340,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 2865,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 31080,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 15514,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 18609,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 26068,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 17127,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 11069,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 6109,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MothR",
        persistId: 27127,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 6379,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeeU",
        persistId: 5301,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleC",
        persistId: 24087,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleU",
        persistId: 1957,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleR",
        persistId: 1547,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 13592,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaC",
        persistId: 5859,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaU",
        persistId: 7071,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 27203,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 5693,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 32592,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 26110,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 10917,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 11194,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 13808,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 9440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 19849,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Aquamarine",
        persistId: 17200,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 16588,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 25803,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 3837,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32087,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 1163,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 11387,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 20580,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 26413,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Blobfish",
        persistId: 23095,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 832,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Dawnray",
        persistId: 31892,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Duskray",
        persistId: 22812,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Paddlefish",
        persistId: 11101,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Cutthroat_Trout",
        persistId: 5762,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 8966,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Indigo_Lamprey",
        persistId: 30862,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 6127,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Beluga_Sturgeon",
        persistId: 26193,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 4167,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 17155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 2340,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 2865,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 31080,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 15514,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 18609,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 26068,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 17127,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 11069,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 6109,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MothR",
        persistId: 27127,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 6379,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeeU",
        persistId: 5301,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleC",
        persistId: 24087,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleU",
        persistId: 1957,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleR",
        persistId: 1547,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 13592,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaC",
        persistId: 5859,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaU",
        persistId: 7071,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 27203,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 5693,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 32592,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 26110,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 10917,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 11194,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 13808,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 9440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 19849,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Aquamarine",
        persistId: 17200,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 16588,
        rewardLevel: "Love",
      },
    ],
  },
  {
    persistId: 20862,
    configId: "thehealer",
    className: "BP_Villager_Healer_C",
    name: "Chayne",
    icon: "Chane_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 24294,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 7816,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 2320,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 22784,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 28220,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 6558,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 31852,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 29331,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 8580,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 604,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 5567,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 1519,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 9733,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 25790,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 14550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 1076,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 8664,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 1441,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 12375,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 18804,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 8205,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 11616,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 11584,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 25734,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 20147,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 540,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 27711,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 21038,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Tomato",
        persistId: 24333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 14687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Carrot",
        persistId: 12488,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Onion",
        persistId: 23523,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Potato",
        persistId: 7892,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 3327,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 30308,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 21461,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 12940,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 30071,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 28139,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 20857,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 3841,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 15357,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 7549,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 13333,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 15223,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 14711,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 24294,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 7816,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 2320,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 22784,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 28220,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 6558,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 31852,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 29331,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 8580,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 604,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 5567,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 1519,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 9733,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 25790,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 14550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 1076,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 8664,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 1441,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 12375,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 18804,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 8205,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 11616,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 11584,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 25734,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 20147,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 540,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 27711,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 21038,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Tomato",
        persistId: 24333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 14687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Carrot",
        persistId: 12488,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Onion",
        persistId: 23523,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Potato",
        persistId: 7892,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 3327,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 30308,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 21461,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 12940,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 30071,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 28139,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 20857,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 3841,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 15357,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 7549,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 13333,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 15223,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 14711,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 500,
    configId: "theplumehound",
    className: "BP_Villager_Tau_C",
    name: "Tau",
    icon: "WT_Tau_portrait",
    gifts: [
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10493,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 13728,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 24943,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 12825,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 7467,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 20600,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 30202,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 12393,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 1191,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 12280,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 24026,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 3301,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 15645,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 32288,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 26882,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 30154,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 14411,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 13237,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 6488,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 30162,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 25907,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 31203,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 17358,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 31944,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 16791,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 18471,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 2286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 3815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 4864,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 14300,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 7236,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 11759,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 650,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 27654,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 32092,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 5360,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 3231,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 18110,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 24464,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 5818,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 7178,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 6840,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 7470,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 19675,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 19618,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 17066,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 11085,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10493,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 13728,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 24943,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 12825,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 7467,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 20600,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 30202,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 12393,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 1191,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 12280,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 24026,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 3301,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 15645,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 32288,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 26882,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 30154,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 14411,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 13237,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 6488,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 30162,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 25907,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 31203,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 17358,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 31944,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 16791,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 18471,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 2286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 3815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 4864,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 14300,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 7236,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 11759,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 650,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 27654,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 32092,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 5360,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 3231,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 18110,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 24464,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 5818,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 7178,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 6840,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 7470,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 19675,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 19618,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 17066,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 11085,
        rewardLevel: "Like",
      },
    ],
  },
];
