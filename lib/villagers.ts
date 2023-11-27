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
      "persistId": 13337,
      "configId": "theinnkeeper",
      "className": "BP_VillagerTheInnKeeper_C",
      "name": "Ashura",
      "icon": "Ashura_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 17124,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 26759,
          "itemPersistId": 13513,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 2597,
          "itemPersistId": 1551,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 25991,
          "itemPersistId": 26975,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_StripedSturgeon",
          "persistId": 4350,
          "itemPersistId": 25166,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Striped_Dace",
          "persistId": 21583,
          "itemPersistId": 371,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Stickleback",
          "persistId": 15249,
          "itemPersistId": 25351,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Pinecone",
          "persistId": 31138,
          "itemPersistId": 22034,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Acorn",
          "persistId": 14556,
          "itemPersistId": 20263,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Juniper",
          "persistId": 24132,
          "itemPersistId": 31632,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Samara",
          "persistId": 694,
          "itemPersistId": 20333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Hardwood",
          "persistId": 23950,
          "itemPersistId": 8019,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Softwood",
          "persistId": 8688,
          "itemPersistId": 16184,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 3515,
          "itemPersistId": 11755,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 14454,
          "itemPersistId": 12075,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 25378,
          "itemPersistId": 2057,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 17141,
          "itemPersistId": 8703,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 8869,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 27149,
          "itemPersistId": 101,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_FishermansBrew",
          "persistId": 29855,
          "itemPersistId": 3449,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 13819,
          "itemPersistId": 18642,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 1122,
          "itemPersistId": 21902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_KilimaCatfish",
          "persistId": 14464,
          "itemPersistId": 20654,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Stalking_Catfish",
          "persistId": 8541,
          "itemPersistId": 10717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_SilverSalmon",
          "persistId": 12911,
          "itemPersistId": 11139,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_GoldenSalmon",
          "persistId": 26154,
          "itemPersistId": 20012,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Channel_Catfish",
          "persistId": 30801,
          "itemPersistId": 4484,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_PrismTrout",
          "persistId": 21317,
          "itemPersistId": 8924,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Rainbow_Trout",
          "persistId": 478,
          "itemPersistId": 9968,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 7335,
          "itemPersistId": 25631,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 19275,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 16181,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 15770,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 1643,
          "itemPersistId": 18264,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 2714,
          "itemPersistId": 21286,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 5505,
          "itemPersistId": 10569,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 16917,
          "itemPersistId": 27076,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 12463,
          "itemPersistId": 23450,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 6016,
          "itemPersistId": 9499,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Bulb",
          "persistId": 10462,
          "itemPersistId": 4458,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 30208,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 19268,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 31726,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 10430,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 13655,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 22344,
          "itemPersistId": 18206,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_QuestReward_CenturyEgg",
          "persistId": 30311,
          "itemPersistId": 19401,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_CrabPotPie",
          "persistId": 30248,
          "itemPersistId": 2822,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Onyx",
          "persistId": 2465,
          "itemPersistId": 5568,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 13178,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 17124,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 26759,
          "itemPersistId": 13513,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 2597,
          "itemPersistId": 1551,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 25991,
          "itemPersistId": 26975,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_StripedSturgeon",
          "persistId": 4350,
          "itemPersistId": 25166,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Striped_Dace",
          "persistId": 21583,
          "itemPersistId": 371,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Stickleback",
          "persistId": 15249,
          "itemPersistId": 25351,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Pinecone",
          "persistId": 31138,
          "itemPersistId": 22034,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Acorn",
          "persistId": 14556,
          "itemPersistId": 20263,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Juniper",
          "persistId": 24132,
          "itemPersistId": 31632,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Samara",
          "persistId": 694,
          "itemPersistId": 20333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Hardwood",
          "persistId": 23950,
          "itemPersistId": 8019,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Softwood",
          "persistId": 8688,
          "itemPersistId": 16184,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 3515,
          "itemPersistId": 11755,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 14454,
          "itemPersistId": 12075,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 25378,
          "itemPersistId": 2057,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 17141,
          "itemPersistId": 8703,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 8869,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 27149,
          "itemPersistId": 101,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_FishermansBrew",
          "persistId": 29855,
          "itemPersistId": 3449,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 13819,
          "itemPersistId": 18642,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 1122,
          "itemPersistId": 21902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_KilimaCatfish",
          "persistId": 14464,
          "itemPersistId": 20654,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Stalking_Catfish",
          "persistId": 8541,
          "itemPersistId": 10717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_SilverSalmon",
          "persistId": 12911,
          "itemPersistId": 11139,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_GoldenSalmon",
          "persistId": 26154,
          "itemPersistId": 20012,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Channel_Catfish",
          "persistId": 30801,
          "itemPersistId": 4484,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_PrismTrout",
          "persistId": 21317,
          "itemPersistId": 8924,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Rainbow_Trout",
          "persistId": 478,
          "itemPersistId": 9968,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 7335,
          "itemPersistId": 25631,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 19275,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 16181,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 15770,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 1643,
          "itemPersistId": 18264,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 2714,
          "itemPersistId": 21286,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 5505,
          "itemPersistId": 10569,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 16917,
          "itemPersistId": 27076,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 12463,
          "itemPersistId": 23450,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 6016,
          "itemPersistId": 9499,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Bulb",
          "persistId": 10462,
          "itemPersistId": 4458,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 30208,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 19268,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 31726,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 10430,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 13655,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 22344,
          "itemPersistId": 18206,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_QuestReward_CenturyEgg",
          "persistId": 30311,
          "itemPersistId": 19401,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_CrabPotPie",
          "persistId": 30248,
          "itemPersistId": 2822,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Onyx",
          "persistId": 2465,
          "itemPersistId": 5568,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 13178,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 19327,
      "configId": "deliveryboy",
      "className": "BP_VillagerDeliveryBoy_C",
      "name": "Auni",
      "icon": "Auni_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Bug_ButterflyU",
          "persistId": 12915,
          "itemPersistId": 12447,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyC",
          "persistId": 9789,
          "itemPersistId": 8256,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketU",
          "persistId": 5212,
          "itemPersistId": 84174,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketC",
          "persistId": 5239,
          "itemPersistId": 6838,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleU",
          "persistId": 32747,
          "itemPersistId": 19778,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleC",
          "persistId": 22706,
          "itemPersistId": 17535,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 17002,
          "itemPersistId": 18642,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 27767,
          "itemPersistId": 21902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 6953,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_WaterloggedBoot",
          "persistId": 51,
          "itemPersistId": 5603,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 22177,
          "itemPersistId": 13175,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 30693,
          "itemPersistId": 2934,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 8264,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 25848,
          "itemPersistId": 21286,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyC",
          "persistId": 29688,
          "itemPersistId": 6055,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 27430,
          "itemPersistId": 3444,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeeU",
          "persistId": 30441,
          "itemPersistId": 17882,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaC",
          "persistId": 12262,
          "itemPersistId": 15761,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaU",
          "persistId": 8080,
          "itemPersistId": 16599,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisU",
          "persistId": 12897,
          "itemPersistId": 2002,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisR1",
          "persistId": 32629,
          "itemPersistId": 11071,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeU",
          "persistId": 18135,
          "itemPersistId": 14927,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeR1",
          "persistId": 26439,
          "itemPersistId": 2071,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeR2",
          "persistId": 23266,
          "itemPersistId": 18323,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_SnailU",
          "persistId": 5946,
          "itemPersistId": 24914,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_SnailR",
          "persistId": 6885,
          "itemPersistId": 21362,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 13554,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 1149,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 7355,
          "itemPersistId": 18440,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 3631,
          "itemPersistId": 11907,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 23103,
          "itemPersistId": 22676,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 23879,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 18912,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 26285,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 10540,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 5354,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 5480,
          "itemPersistId": 18642,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 2419,
          "itemPersistId": 14204,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 13817,
          "itemPersistId": 21902,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Citrine",
          "persistId": 28055,
          "itemPersistId": 10633,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_PetitFives",
          "persistId": 29779,
          "itemPersistId": 29904,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyU",
          "persistId": 12915,
          "itemPersistId": 12447,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyC",
          "persistId": 9789,
          "itemPersistId": 8256,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketU",
          "persistId": 5212,
          "itemPersistId": 84174,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketC",
          "persistId": 5239,
          "itemPersistId": 6838,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleU",
          "persistId": 32747,
          "itemPersistId": 19778,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleC",
          "persistId": 22706,
          "itemPersistId": 17535,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 17002,
          "itemPersistId": 18642,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 27767,
          "itemPersistId": 21902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 6953,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_WaterloggedBoot",
          "persistId": 51,
          "itemPersistId": 5603,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 22177,
          "itemPersistId": 13175,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 30693,
          "itemPersistId": 2934,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 8264,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 25848,
          "itemPersistId": 21286,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyC",
          "persistId": 29688,
          "itemPersistId": 6055,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 27430,
          "itemPersistId": 3444,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeeU",
          "persistId": 30441,
          "itemPersistId": 17882,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaC",
          "persistId": 12262,
          "itemPersistId": 15761,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaU",
          "persistId": 8080,
          "itemPersistId": 16599,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisU",
          "persistId": 12897,
          "itemPersistId": 2002,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisR1",
          "persistId": 32629,
          "itemPersistId": 11071,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeU",
          "persistId": 18135,
          "itemPersistId": 14927,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeR1",
          "persistId": 26439,
          "itemPersistId": 2071,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeR2",
          "persistId": 23266,
          "itemPersistId": 18323,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_SnailU",
          "persistId": 5946,
          "itemPersistId": 24914,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_SnailR",
          "persistId": 6885,
          "itemPersistId": 21362,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 13554,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 1149,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 7355,
          "itemPersistId": 18440,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 3631,
          "itemPersistId": 11907,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 23103,
          "itemPersistId": 22676,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 23879,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 18912,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 26285,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 10540,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 5354,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 5480,
          "itemPersistId": 18642,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 2419,
          "itemPersistId": 14204,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 13817,
          "itemPersistId": 21902,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Citrine",
          "persistId": 28055,
          "itemPersistId": 10633,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_PetitFives",
          "persistId": 29779,
          "itemPersistId": 29904,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 8663,
      "configId": "thefarmer",
      "className": "BP_Villager_Farmer_C",
      "name": "Badruu",
      "icon": "Badru_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 12718,
          "itemPersistId": 27076,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 29674,
          "itemPersistId": 23927,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 20715,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Onion",
          "persistId": 24344,
          "itemPersistId": 8541,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Wheat",
          "persistId": 25038,
          "itemPersistId": 2235,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Rainbow_Trout",
          "persistId": 26172,
          "itemPersistId": 9968,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Orange_Bluegill",
          "persistId": 30191,
          "itemPersistId": 28454,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Rosy_Bitterling",
          "persistId": 26576,
          "itemPersistId": 17484,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 26225,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 20163,
          "itemPersistId": 10556,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 30027,
          "itemPersistId": 23925,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 17114,
          "itemPersistId": 11233,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Ramen",
          "persistId": 7974,
          "itemPersistId": 480,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_StirFry",
          "persistId": 25092,
          "itemPersistId": 13534,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Apple",
          "persistId": 30743,
          "itemPersistId": 10317,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Blueberry",
          "persistId": 10978,
          "itemPersistId": 13736,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Carrot",
          "persistId": 19895,
          "itemPersistId": 32088,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Onion",
          "persistId": 14987,
          "itemPersistId": 1742,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Cotton",
          "persistId": 8010,
          "itemPersistId": 7666,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Potato",
          "persistId": 11718,
          "itemPersistId": 15412,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Rice",
          "persistId": 20694,
          "itemPersistId": 6243,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Tomato",
          "persistId": 11787,
          "itemPersistId": 1951,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Wheat",
          "persistId": 28013,
          "itemPersistId": 29699,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_2xGrowthRate",
          "persistId": 27571,
          "itemPersistId": 22124,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_HarvestBooster",
          "persistId": 14161,
          "itemPersistId": 16451,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_StarQualityBooster",
          "persistId": 19995,
          "itemPersistId": 17516,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WaterRetention",
          "persistId": 30207,
          "itemPersistId": 13240,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WeedBlocker",
          "persistId": 28156,
          "itemPersistId": 30376,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 22971,
          "itemPersistId": 10569,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 29517,
          "itemPersistId": 23450,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Rice",
          "persistId": 18519,
          "itemPersistId": 25061,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 31596,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketR",
          "persistId": 14166,
          "itemPersistId": 32012,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 578,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 16480,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 10436,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 18363,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 2525,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 12307,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Seed_Corn",
          "persistId": 6649,
          "itemPersistId": 28649,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_SpicyPepper",
          "persistId": 10586,
          "itemPersistId": 16272,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Sapphire",
          "persistId": 25559,
          "itemPersistId": 26959,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 12718,
          "itemPersistId": 27076,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 29674,
          "itemPersistId": 23927,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 20715,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Onion",
          "persistId": 24344,
          "itemPersistId": 8541,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Wheat",
          "persistId": 25038,
          "itemPersistId": 2235,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Rainbow_Trout",
          "persistId": 26172,
          "itemPersistId": 9968,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Orange_Bluegill",
          "persistId": 30191,
          "itemPersistId": 28454,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Rosy_Bitterling",
          "persistId": 26576,
          "itemPersistId": 17484,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 26225,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 20163,
          "itemPersistId": 10556,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 30027,
          "itemPersistId": 23925,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 17114,
          "itemPersistId": 11233,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Ramen",
          "persistId": 7974,
          "itemPersistId": 480,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_StirFry",
          "persistId": 25092,
          "itemPersistId": 13534,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Apple",
          "persistId": 30743,
          "itemPersistId": 10317,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Blueberry",
          "persistId": 10978,
          "itemPersistId": 13736,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Carrot",
          "persistId": 19895,
          "itemPersistId": 32088,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Onion",
          "persistId": 14987,
          "itemPersistId": 1742,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Cotton",
          "persistId": 8010,
          "itemPersistId": 7666,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Potato",
          "persistId": 11718,
          "itemPersistId": 15412,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Rice",
          "persistId": 20694,
          "itemPersistId": 6243,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Tomato",
          "persistId": 11787,
          "itemPersistId": 1951,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Wheat",
          "persistId": 28013,
          "itemPersistId": 29699,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_2xGrowthRate",
          "persistId": 27571,
          "itemPersistId": 22124,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_HarvestBooster",
          "persistId": 14161,
          "itemPersistId": 16451,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_StarQualityBooster",
          "persistId": 19995,
          "itemPersistId": 17516,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WaterRetention",
          "persistId": 30207,
          "itemPersistId": 13240,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WeedBlocker",
          "persistId": 28156,
          "itemPersistId": 30376,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 22971,
          "itemPersistId": 10569,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 29517,
          "itemPersistId": 23450,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Rice",
          "persistId": 18519,
          "itemPersistId": 25061,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 31596,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketR",
          "persistId": 14166,
          "itemPersistId": 32012,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 578,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 16480,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 10436,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 18363,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 2525,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 12307,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Seed_Corn",
          "persistId": 6649,
          "itemPersistId": 28649,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_SpicyPepper",
          "persistId": 10586,
          "itemPersistId": 16272,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Sapphire",
          "persistId": 25559,
          "itemPersistId": 26959,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 20124,
      "configId": "thelibrarian",
      "className": "BP_Villager_TheLibrarian_C",
      "name": "Caleri",
      "icon": "Calere_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 6776,
          "itemPersistId": 25631,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 6246,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Kilima_Redfin",
          "persistId": 1908,
          "itemPersistId": 18008,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Crucian_Carp",
          "persistId": 35,
          "itemPersistId": 15830,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Hypnotic_Moray",
          "persistId": 10486,
          "itemPersistId": 7783,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 26828,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 24970,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 19020,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Seed_Pinecone",
          "persistId": 7396,
          "itemPersistId": 22034,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 13034,
          "itemPersistId": 11819,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 15349,
          "itemPersistId": 22676,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 8172,
          "itemPersistId": 23423,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 5489,
          "itemPersistId": 23624,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 13465,
          "itemPersistId": 11086,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 27691,
          "itemPersistId": 28804,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 2503,
          "itemPersistId": 2057,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_SundropLily",
          "persistId": 6572,
          "itemPersistId": 20533,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_BriarDaisy",
          "persistId": 20156,
          "itemPersistId": 26021,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 25728,
          "itemPersistId": 19418,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_EmeraldCarpet",
          "persistId": 6859,
          "itemPersistId": 32155,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 3541,
          "itemPersistId": 14176,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Shell",
          "persistId": 15594,
          "itemPersistId": 4843,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 5960,
          "itemPersistId": 22766,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Carrot",
          "persistId": 31043,
          "itemPersistId": 9756,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Blueberry",
          "persistId": 225,
          "itemPersistId": 10889,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 2087,
          "itemPersistId": 30577,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Bulb",
          "persistId": 26092,
          "itemPersistId": 4458,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_GlowbugC",
          "persistId": 14466,
          "itemPersistId": 27630,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_GlowbugR",
          "persistId": 18420,
          "itemPersistId": 22520,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 4588,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 32526,
          "itemPersistId": 14204,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 8145,
          "itemPersistId": 25631,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 20332,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 22788,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 4623,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 16355,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 23611,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Onigiri",
          "persistId": 26608,
          "itemPersistId": 29339,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Aquamarine",
          "persistId": 4128,
          "itemPersistId": 3753,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 6687,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_OystersAkwinduu",
          "persistId": 11246,
          "itemPersistId": 13767,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 6776,
          "itemPersistId": 25631,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 6246,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Kilima_Redfin",
          "persistId": 1908,
          "itemPersistId": 18008,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Crucian_Carp",
          "persistId": 35,
          "itemPersistId": 15830,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Hypnotic_Moray",
          "persistId": 10486,
          "itemPersistId": 7783,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 26828,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 24970,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 19020,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Seed_Pinecone",
          "persistId": 7396,
          "itemPersistId": 22034,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 13034,
          "itemPersistId": 11819,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 15349,
          "itemPersistId": 22676,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 8172,
          "itemPersistId": 23423,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 5489,
          "itemPersistId": 23624,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 13465,
          "itemPersistId": 11086,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 27691,
          "itemPersistId": 28804,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 2503,
          "itemPersistId": 2057,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_SundropLily",
          "persistId": 6572,
          "itemPersistId": 20533,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_BriarDaisy",
          "persistId": 20156,
          "itemPersistId": 26021,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 25728,
          "itemPersistId": 19418,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_EmeraldCarpet",
          "persistId": 6859,
          "itemPersistId": 32155,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 3541,
          "itemPersistId": 14176,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Shell",
          "persistId": 15594,
          "itemPersistId": 4843,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 5960,
          "itemPersistId": 22766,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Carrot",
          "persistId": 31043,
          "itemPersistId": 9756,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Blueberry",
          "persistId": 225,
          "itemPersistId": 10889,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 2087,
          "itemPersistId": 30577,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Bulb",
          "persistId": 26092,
          "itemPersistId": 4458,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_GlowbugC",
          "persistId": 14466,
          "itemPersistId": 27630,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_GlowbugR",
          "persistId": 18420,
          "itemPersistId": 22520,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 4588,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 32526,
          "itemPersistId": 14204,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 8145,
          "itemPersistId": 25631,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 20332,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 22788,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 4623,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 16355,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 23611,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Onigiri",
          "persistId": 26608,
          "itemPersistId": 29339,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Aquamarine",
          "persistId": 4128,
          "itemPersistId": 3753,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 6687,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_OystersAkwinduu",
          "persistId": 11246,
          "itemPersistId": 13767,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 20862,
      "configId": "thehealer",
      "className": "BP_Villager_Healer_C",
      "name": "Chayne",
      "icon": "Chane_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 24294,
          "itemPersistId": 10569,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Pane",
          "persistId": 7816,
          "itemPersistId": 26895,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 2320,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 22784,
          "itemPersistId": 23450,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 28220,
          "itemPersistId": 10556,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 6558,
          "itemPersistId": 23925,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 31852,
          "itemPersistId": 11086,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 29331,
          "itemPersistId": 22153,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 8580,
          "itemPersistId": 18440,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Samara",
          "persistId": 604,
          "itemPersistId": 20333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Juniper",
          "persistId": 5567,
          "itemPersistId": 31632,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Onion",
          "persistId": 1519,
          "itemPersistId": 28235,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 9733,
          "itemPersistId": 11233,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_SundropLily",
          "persistId": 25790,
          "itemPersistId": 20533,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 14550,
          "itemPersistId": 19418,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 1076,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 8664,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 1441,
          "itemPersistId": 18206,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 12375,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 18804,
          "itemPersistId": 9499,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Onion",
          "persistId": 8205,
          "itemPersistId": 8541,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 11616,
          "itemPersistId": 27076,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Wheat",
          "persistId": 11584,
          "itemPersistId": 2235,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Rice",
          "persistId": 25734,
          "itemPersistId": 25061,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 20147,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 540,
          "itemPersistId": 21286,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 27711,
          "itemPersistId": 30577,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Apple",
          "persistId": 21038,
          "itemPersistId": 25340,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Tomato",
          "persistId": 24333,
          "itemPersistId": 10061,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Blueberry",
          "persistId": 14687,
          "itemPersistId": 13736,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Carrot",
          "persistId": 12488,
          "itemPersistId": 32088,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Onion",
          "persistId": 23523,
          "itemPersistId": 1742,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Potato",
          "persistId": 7892,
          "itemPersistId": 15412,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Rice",
          "persistId": 3327,
          "itemPersistId": 6243,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Tomato",
          "persistId": 30308,
          "itemPersistId": 1951,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Wheat",
          "persistId": 21461,
          "itemPersistId": 29699,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 12940,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 30071,
          "itemPersistId": 11819,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 28139,
          "itemPersistId": 22676,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 20857,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 3841,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 15357,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 7549,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 13333,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Quartz",
          "persistId": 15223,
          "itemPersistId": 22717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 14711,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 24294,
          "itemPersistId": 10569,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Pane",
          "persistId": 7816,
          "itemPersistId": 26895,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 2320,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 22784,
          "itemPersistId": 23450,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 28220,
          "itemPersistId": 10556,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 6558,
          "itemPersistId": 23925,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 31852,
          "itemPersistId": 11086,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 29331,
          "itemPersistId": 22153,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 8580,
          "itemPersistId": 18440,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Samara",
          "persistId": 604,
          "itemPersistId": 20333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Juniper",
          "persistId": 5567,
          "itemPersistId": 31632,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Onion",
          "persistId": 1519,
          "itemPersistId": 28235,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 9733,
          "itemPersistId": 11233,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_SundropLily",
          "persistId": 25790,
          "itemPersistId": 20533,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 14550,
          "itemPersistId": 19418,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 1076,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 8664,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 1441,
          "itemPersistId": 18206,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 12375,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 18804,
          "itemPersistId": 9499,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Onion",
          "persistId": 8205,
          "itemPersistId": 8541,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 11616,
          "itemPersistId": 27076,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Wheat",
          "persistId": 11584,
          "itemPersistId": 2235,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Rice",
          "persistId": 25734,
          "itemPersistId": 25061,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 20147,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 540,
          "itemPersistId": 21286,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 27711,
          "itemPersistId": 30577,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Apple",
          "persistId": 21038,
          "itemPersistId": 25340,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Tomato",
          "persistId": 24333,
          "itemPersistId": 10061,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Blueberry",
          "persistId": 14687,
          "itemPersistId": 13736,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Carrot",
          "persistId": 12488,
          "itemPersistId": 32088,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Onion",
          "persistId": 23523,
          "itemPersistId": 1742,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Potato",
          "persistId": 7892,
          "itemPersistId": 15412,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Rice",
          "persistId": 3327,
          "itemPersistId": 6243,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Tomato",
          "persistId": 30308,
          "itemPersistId": 1951,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Wheat",
          "persistId": 21461,
          "itemPersistId": 29699,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 12940,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 30071,
          "itemPersistId": 11819,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 28139,
          "itemPersistId": 22676,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 20857,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 3841,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 15357,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 7549,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 13333,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Quartz",
          "persistId": 15223,
          "itemPersistId": 22717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 14711,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 19151,
      "configId": "therancher",
      "className": "BP_Villager_Rancher_C",
      "name": "Delaila",
      "icon": "Dalila_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Fertilizer_StarQualityBooster",
          "persistId": 6796,
          "itemPersistId": 17516,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 26349,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 953,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WaterRetention",
          "persistId": 3095,
          "itemPersistId": 13240,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_2xGrowthRate",
          "persistId": 1168,
          "itemPersistId": 22124,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 24906,
          "itemPersistId": 21286,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Apple",
          "persistId": 31004,
          "itemPersistId": 10317,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Blueberry",
          "persistId": 26197,
          "itemPersistId": 13736,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_CalicoKoi",
          "persistId": 22209,
          "itemPersistId": 25294,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Channel_Catfish",
          "persistId": 7243,
          "itemPersistId": 4484,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Orange_Bluegill",
          "persistId": 9536,
          "itemPersistId": 28454,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Scarlet_Koi",
          "persistId": 29909,
          "itemPersistId": 7829,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_CantankerousKoi",
          "persistId": 8490,
          "itemPersistId": 13687,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Giant_Goldfish",
          "persistId": 31645,
          "itemPersistId": 13562,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_KilimaCatfish",
          "persistId": 31709,
          "itemPersistId": 20654,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Stalking_Catfish",
          "persistId": 645,
          "itemPersistId": 10717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Rosy_Bitterling",
          "persistId": 30147,
          "itemPersistId": 17484,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Rainbow_Trout",
          "persistId": 28183,
          "itemPersistId": 9968,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Wheat",
          "persistId": 8606,
          "itemPersistId": 29699,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WeedBlocker",
          "persistId": 26019,
          "itemPersistId": 30376,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_HarvestBooster",
          "persistId": 13997,
          "itemPersistId": 16451,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Clay",
          "persistId": 20510,
          "itemPersistId": 10086,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Clay",
          "persistId": 6351,
          "itemPersistId": 10086,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 4001,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 18601,
          "itemPersistId": 29186,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeeR",
          "persistId": 1161,
          "itemPersistId": 24581,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabC",
          "persistId": 4145,
          "itemPersistId": 8343,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabR",
          "persistId": 3536,
          "itemPersistId": 2818,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabU",
          "persistId": 14939,
          "itemPersistId": 22561,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_LadybugU",
          "persistId": 28404,
          "itemPersistId": 10028,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_LadybugR",
          "persistId": 25392,
          "itemPersistId": 13596,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 7157,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 32383,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 7100,
          "itemPersistId": 14204,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 31157,
          "itemPersistId": 21902,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 16668,
          "itemPersistId": 18642,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 6498,
          "itemPersistId": 11907,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 24246,
          "itemPersistId": 19418,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 12202,
          "itemPersistId": 11819,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 18249,
          "itemPersistId": 22676,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 8139,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 24337,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 2270,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 13640,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 864,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_ShepardsPie",
          "persistId": 2706,
          "itemPersistId": 25399,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Garnet",
          "persistId": 32511,
          "itemPersistId": 22480,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Treeclimber",
          "persistId": 8927,
          "itemPersistId": 19716,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_StarQualityBooster",
          "persistId": 6796,
          "itemPersistId": 17516,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 26349,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 953,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WaterRetention",
          "persistId": 3095,
          "itemPersistId": 13240,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_2xGrowthRate",
          "persistId": 1168,
          "itemPersistId": 22124,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 24906,
          "itemPersistId": 21286,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Apple",
          "persistId": 31004,
          "itemPersistId": 10317,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Blueberry",
          "persistId": 26197,
          "itemPersistId": 13736,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_CalicoKoi",
          "persistId": 22209,
          "itemPersistId": 25294,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Channel_Catfish",
          "persistId": 7243,
          "itemPersistId": 4484,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Orange_Bluegill",
          "persistId": 9536,
          "itemPersistId": 28454,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Scarlet_Koi",
          "persistId": 29909,
          "itemPersistId": 7829,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_CantankerousKoi",
          "persistId": 8490,
          "itemPersistId": 13687,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Giant_Goldfish",
          "persistId": 31645,
          "itemPersistId": 13562,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_KilimaCatfish",
          "persistId": 31709,
          "itemPersistId": 20654,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Stalking_Catfish",
          "persistId": 645,
          "itemPersistId": 10717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Rosy_Bitterling",
          "persistId": 30147,
          "itemPersistId": 17484,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Rainbow_Trout",
          "persistId": 28183,
          "itemPersistId": 9968,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Wheat",
          "persistId": 8606,
          "itemPersistId": 29699,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WeedBlocker",
          "persistId": 26019,
          "itemPersistId": 30376,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_HarvestBooster",
          "persistId": 13997,
          "itemPersistId": 16451,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Clay",
          "persistId": 20510,
          "itemPersistId": 10086,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Clay",
          "persistId": 6351,
          "itemPersistId": 10086,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 4001,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 18601,
          "itemPersistId": 29186,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeeR",
          "persistId": 1161,
          "itemPersistId": 24581,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabC",
          "persistId": 4145,
          "itemPersistId": 8343,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabR",
          "persistId": 3536,
          "itemPersistId": 2818,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabU",
          "persistId": 14939,
          "itemPersistId": 22561,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_LadybugU",
          "persistId": 28404,
          "itemPersistId": 10028,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_LadybugR",
          "persistId": 25392,
          "itemPersistId": 13596,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 7157,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 32383,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 7100,
          "itemPersistId": 14204,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 31157,
          "itemPersistId": 21902,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 16668,
          "itemPersistId": 18642,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 6498,
          "itemPersistId": 11907,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 24246,
          "itemPersistId": 19418,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 12202,
          "itemPersistId": 11819,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 18249,
          "itemPersistId": 22676,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 8139,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 24337,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 2270,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 13640,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 864,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_ShepardsPie",
          "persistId": 2706,
          "itemPersistId": 25399,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Garnet",
          "persistId": 32511,
          "itemPersistId": 22480,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Treeclimber",
          "persistId": 8927,
          "itemPersistId": 19716,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 3801,
      "configId": "fisherman",
      "className": "BP_VillagerFisherman_C",
      "name": "Einar",
      "icon": "Einar_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_C_FishermansBrew",
          "persistId": 24626,
          "itemPersistId": 3449,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_Worm",
          "persistId": 7710,
          "itemPersistId": 5257,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 31383,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Gillyfin",
          "persistId": 5751,
          "itemPersistId": 8029,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Mudminnow",
          "persistId": 8564,
          "itemPersistId": 12920,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_EyelessMinnow",
          "persistId": 28246,
          "itemPersistId": 431,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_Glow_Worm",
          "persistId": 24466,
          "itemPersistId": 16106,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_PrismTrout",
          "persistId": 24549,
          "itemPersistId": 8924,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 1659,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Stone",
          "persistId": 22293,
          "itemPersistId": 15525,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 20752,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 20622,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Small",
          "persistId": 24445,
          "itemPersistId": 24684,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Large",
          "persistId": 6688,
          "itemPersistId": 30449,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Lumpy",
          "persistId": 19697,
          "itemPersistId": 8706,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Smooth",
          "persistId": 7740,
          "itemPersistId": 15715,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Red",
          "persistId": 30550,
          "itemPersistId": 7226,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Blue",
          "persistId": 9866,
          "itemPersistId": 6326,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Purple",
          "persistId": 17686,
          "itemPersistId": 5228,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Yellow",
          "persistId": 4590,
          "itemPersistId": 22838,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Green",
          "persistId": 27423,
          "itemPersistId": 197,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Orange",
          "persistId": 13518,
          "itemPersistId": 3907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_FairyCarp",
          "persistId": 426,
          "itemPersistId": 21923,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Mirror_Carp",
          "persistId": 6831,
          "itemPersistId": 8000,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Mottled_Gobi",
          "persistId": 32153,
          "itemPersistId": 2365,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Cloudfish",
          "persistId": 32414,
          "itemPersistId": 14951,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_SpottedBullhead",
          "persistId": 9008,
          "itemPersistId": 31374,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_SilverSalmon",
          "persistId": 4035,
          "itemPersistId": 11139,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Striped_Dace",
          "persistId": 1954,
          "itemPersistId": 371,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Yellow_Perch",
          "persistId": 16881,
          "itemPersistId": 21636,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Silvery_Minnow",
          "persistId": 23858,
          "itemPersistId": 15046,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Red-bellied_Piranha",
          "persistId": 23829,
          "itemPersistId": 8904,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_RibbontailRay",
          "persistId": 6123,
          "itemPersistId": 10747,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_RadiantSunfish",
          "persistId": 27030,
          "itemPersistId": 13110,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Kilima_Grayling",
          "persistId": 6396,
          "itemPersistId": 16265,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Fathead_Minnow",
          "persistId": 23754,
          "itemPersistId": 10045,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Stormray",
          "persistId": 7638,
          "itemPersistId": 26084,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_UnicornFish",
          "persistId": 28157,
          "itemPersistId": 18047,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Cactus_Moray",
          "persistId": 22930,
          "itemPersistId": 130,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Blue_Spotted_Ray",
          "persistId": 230,
          "itemPersistId": 30606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 4642,
          "itemPersistId": 28023,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Enchanted_Pupfish",
          "persistId": 14455,
          "itemPersistId": 4665,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 10321,
          "itemPersistId": 24126,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 7524,
          "itemPersistId": 11755,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabC",
          "persistId": 7240,
          "itemPersistId": 8343,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabR",
          "persistId": 21087,
          "itemPersistId": 2818,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabU",
          "persistId": 30659,
          "itemPersistId": 22561,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_SnailU",
          "persistId": 1232,
          "itemPersistId": 24914,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 31520,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabC",
          "persistId": 31327,
          "itemPersistId": 8343,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabU",
          "persistId": 3302,
          "itemPersistId": 22561,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabR",
          "persistId": 384,
          "itemPersistId": 2818,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 23227,
          "itemPersistId": 2934,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 6461,
          "itemPersistId": 22153,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_EmeraldCarpet",
          "persistId": 5778,
          "itemPersistId": 32155,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 19645,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 182,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_AncientFish",
          "persistId": 31010,
          "itemPersistId": 7202,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_FishermansBrew",
          "persistId": 24626,
          "itemPersistId": 3449,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_Worm",
          "persistId": 7710,
          "itemPersistId": 5257,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 31383,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Gillyfin",
          "persistId": 5751,
          "itemPersistId": 8029,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Mudminnow",
          "persistId": 8564,
          "itemPersistId": 12920,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_EyelessMinnow",
          "persistId": 28246,
          "itemPersistId": 431,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_Glow_Worm",
          "persistId": 24466,
          "itemPersistId": 16106,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_PrismTrout",
          "persistId": 24549,
          "itemPersistId": 8924,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 1659,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Stone",
          "persistId": 22293,
          "itemPersistId": 15525,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 20752,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 20622,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Small",
          "persistId": 24445,
          "itemPersistId": 24684,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Large",
          "persistId": 6688,
          "itemPersistId": 30449,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Lumpy",
          "persistId": 19697,
          "itemPersistId": 8706,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Smooth",
          "persistId": 7740,
          "itemPersistId": 15715,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Red",
          "persistId": 30550,
          "itemPersistId": 7226,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Blue",
          "persistId": 9866,
          "itemPersistId": 6326,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Purple",
          "persistId": 17686,
          "itemPersistId": 5228,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Yellow",
          "persistId": 4590,
          "itemPersistId": 22838,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Green",
          "persistId": 27423,
          "itemPersistId": 197,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Founditem_ShinyPebble_Orange",
          "persistId": 13518,
          "itemPersistId": 3907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_FairyCarp",
          "persistId": 426,
          "itemPersistId": 21923,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Mirror_Carp",
          "persistId": 6831,
          "itemPersistId": 8000,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Mottled_Gobi",
          "persistId": 32153,
          "itemPersistId": 2365,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Cloudfish",
          "persistId": 32414,
          "itemPersistId": 14951,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_SpottedBullhead",
          "persistId": 9008,
          "itemPersistId": 31374,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_SilverSalmon",
          "persistId": 4035,
          "itemPersistId": 11139,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Striped_Dace",
          "persistId": 1954,
          "itemPersistId": 371,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Yellow_Perch",
          "persistId": 16881,
          "itemPersistId": 21636,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Silvery_Minnow",
          "persistId": 23858,
          "itemPersistId": 15046,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Red-bellied_Piranha",
          "persistId": 23829,
          "itemPersistId": 8904,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_RibbontailRay",
          "persistId": 6123,
          "itemPersistId": 10747,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_RadiantSunfish",
          "persistId": 27030,
          "itemPersistId": 13110,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Kilima_Grayling",
          "persistId": 6396,
          "itemPersistId": 16265,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Fathead_Minnow",
          "persistId": 23754,
          "itemPersistId": 10045,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Stormray",
          "persistId": 7638,
          "itemPersistId": 26084,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_UnicornFish",
          "persistId": 28157,
          "itemPersistId": 18047,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Cactus_Moray",
          "persistId": 22930,
          "itemPersistId": 130,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Blue_Spotted_Ray",
          "persistId": 230,
          "itemPersistId": 30606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 4642,
          "itemPersistId": 28023,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Enchanted_Pupfish",
          "persistId": 14455,
          "itemPersistId": 4665,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 10321,
          "itemPersistId": 24126,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 7524,
          "itemPersistId": 11755,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabC",
          "persistId": 7240,
          "itemPersistId": 8343,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabR",
          "persistId": 21087,
          "itemPersistId": 2818,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabU",
          "persistId": 30659,
          "itemPersistId": 22561,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_SnailU",
          "persistId": 1232,
          "itemPersistId": 24914,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 31520,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabC",
          "persistId": 31327,
          "itemPersistId": 8343,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabU",
          "persistId": 3302,
          "itemPersistId": 22561,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabR",
          "persistId": 384,
          "itemPersistId": 2818,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 23227,
          "itemPersistId": 2934,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 6461,
          "itemPersistId": 22153,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_EmeraldCarpet",
          "persistId": 5778,
          "itemPersistId": 32155,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 19645,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 182,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_AncientFish",
          "persistId": 31010,
          "itemPersistId": 7202,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 1897,
      "configId": "thecurator",
      "className": "BP_Villager_Elouisa_C",
      "name": "Elouisa",
      "icon": "Elouisa_Icon1",
      "gifts": [
        {
          "objectId": "DA_ItemType_Fish_CalicoKoi",
          "persistId": 25803,
          "itemPersistId": 25294,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_CantankerousKoi",
          "persistId": 3837,
          "itemPersistId": 13687,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 32087,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Scarlet_Koi",
          "persistId": 1163,
          "itemPersistId": 7829,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 11387,
          "itemPersistId": 13175,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Giant_Goldfish",
          "persistId": 20580,
          "itemPersistId": 13562,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Cloudfish",
          "persistId": 26413,
          "itemPersistId": 14951,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Blobfish",
          "persistId": 23095,
          "itemPersistId": 23960,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 832,
          "itemPersistId": 18440,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Dawnray",
          "persistId": 31892,
          "itemPersistId": 25177,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Duskray",
          "persistId": 22812,
          "itemPersistId": 23865,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Paddlefish",
          "persistId": 11101,
          "itemPersistId": 21368,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Cutthroat_Trout",
          "persistId": 5762,
          "itemPersistId": 18120,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Willow_Lamprey",
          "persistId": 8966,
          "itemPersistId": 24281,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Indigo_Lamprey",
          "persistId": 30862,
          "itemPersistId": 29793,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Flametongue_Ray",
          "persistId": 6127,
          "itemPersistId": 27201,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Beluga_Sturgeon",
          "persistId": 26193,
          "itemPersistId": 2016,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Midnight_Paddlefish",
          "persistId": 4167,
          "itemPersistId": 850,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_AlbinoEel",
          "persistId": 17155,
          "itemPersistId": 11613,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Thundering_Eel",
          "persistId": 2340,
          "itemPersistId": 4505,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Energized_Piranha",
          "persistId": 2865,
          "itemPersistId": 76,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 31080,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 15514,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 18609,
          "itemPersistId": 22153,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 26068,
          "itemPersistId": 2934,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Meat_Oyster",
          "persistId": 17127,
          "itemPersistId": 26948,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyR",
          "persistId": 11069,
          "itemPersistId": 30155,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyE",
          "persistId": 6109,
          "itemPersistId": 2612,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MothR",
          "persistId": 27127,
          "itemPersistId": 10766,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyU",
          "persistId": 6379,
          "itemPersistId": 6654,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeeU",
          "persistId": 5301,
          "itemPersistId": 17882,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleC",
          "persistId": 24087,
          "itemPersistId": 17535,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleU",
          "persistId": 1957,
          "itemPersistId": 19778,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleR",
          "persistId": 1547,
          "itemPersistId": 16825,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleE",
          "persistId": 13592,
          "itemPersistId": 6189,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaC",
          "persistId": 5859,
          "itemPersistId": 15761,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaU",
          "persistId": 7071,
          "itemPersistId": 16599,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaR",
          "persistId": 27203,
          "itemPersistId": 21411,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisE",
          "persistId": 5693,
          "itemPersistId": 14408,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisR2",
          "persistId": 32592,
          "itemPersistId": 9423,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 26110,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 10917,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 11194,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 13808,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 9440,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 19849,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Aquamarine",
          "persistId": 17200,
          "itemPersistId": 3753,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T3",
          "persistId": 16588,
          "itemPersistId": 31806,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_CalicoKoi",
          "persistId": 25803,
          "itemPersistId": 25294,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_CantankerousKoi",
          "persistId": 3837,
          "itemPersistId": 13687,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 32087,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Scarlet_Koi",
          "persistId": 1163,
          "itemPersistId": 7829,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 11387,
          "itemPersistId": 13175,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Giant_Goldfish",
          "persistId": 20580,
          "itemPersistId": 13562,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Cloudfish",
          "persistId": 26413,
          "itemPersistId": 14951,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Blobfish",
          "persistId": 23095,
          "itemPersistId": 23960,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 832,
          "itemPersistId": 18440,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Dawnray",
          "persistId": 31892,
          "itemPersistId": 25177,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Duskray",
          "persistId": 22812,
          "itemPersistId": 23865,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Paddlefish",
          "persistId": 11101,
          "itemPersistId": 21368,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Cutthroat_Trout",
          "persistId": 5762,
          "itemPersistId": 18120,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Willow_Lamprey",
          "persistId": 8966,
          "itemPersistId": 24281,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Indigo_Lamprey",
          "persistId": 30862,
          "itemPersistId": 29793,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Flametongue_Ray",
          "persistId": 6127,
          "itemPersistId": 27201,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Beluga_Sturgeon",
          "persistId": 26193,
          "itemPersistId": 2016,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Midnight_Paddlefish",
          "persistId": 4167,
          "itemPersistId": 850,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_AlbinoEel",
          "persistId": 17155,
          "itemPersistId": 11613,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Thundering_Eel",
          "persistId": 2340,
          "itemPersistId": 4505,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Energized_Piranha",
          "persistId": 2865,
          "itemPersistId": 76,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 31080,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 15514,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 18609,
          "itemPersistId": 22153,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 26068,
          "itemPersistId": 2934,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Meat_Oyster",
          "persistId": 17127,
          "itemPersistId": 26948,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyR",
          "persistId": 11069,
          "itemPersistId": 30155,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyE",
          "persistId": 6109,
          "itemPersistId": 2612,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MothR",
          "persistId": 27127,
          "itemPersistId": 10766,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyU",
          "persistId": 6379,
          "itemPersistId": 6654,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeeU",
          "persistId": 5301,
          "itemPersistId": 17882,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleC",
          "persistId": 24087,
          "itemPersistId": 17535,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleU",
          "persistId": 1957,
          "itemPersistId": 19778,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleR",
          "persistId": 1547,
          "itemPersistId": 16825,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleE",
          "persistId": 13592,
          "itemPersistId": 6189,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaC",
          "persistId": 5859,
          "itemPersistId": 15761,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaU",
          "persistId": 7071,
          "itemPersistId": 16599,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaR",
          "persistId": 27203,
          "itemPersistId": 21411,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisE",
          "persistId": 5693,
          "itemPersistId": 14408,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisR2",
          "persistId": 32592,
          "itemPersistId": 9423,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 26110,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 10917,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 11194,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 13808,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 9440,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 19849,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Aquamarine",
          "persistId": 17200,
          "itemPersistId": 3753,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T3",
          "persistId": 16588,
          "itemPersistId": 31806,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 1142,
      "configId": "themagistrate",
      "className": "BP_Villager_TheMagistrate_C",
      "name": "Eshe",
      "icon": "Eshe_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 27250,
          "itemPersistId": 18440,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 9596,
          "itemPersistId": 23423,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 9309,
          "itemPersistId": 28804,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_SalisburyChapaa",
          "persistId": 7099,
          "itemPersistId": 7223,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 9064,
          "itemPersistId": 32125,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 24084,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Bigeye_Tuna",
          "persistId": 29180,
          "itemPersistId": 4778,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Yellowfin_Tuna",
          "persistId": 7268,
          "itemPersistId": 18332,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Samara",
          "persistId": 21615,
          "itemPersistId": 20333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Juniper",
          "persistId": 9939,
          "itemPersistId": 31632,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 19837,
          "itemPersistId": 11819,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 27884,
          "itemPersistId": 22676,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 19850,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 17248,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 23933,
          "itemPersistId": 13513,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 5182,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Onion",
          "persistId": 14561,
          "itemPersistId": 28235,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 10163,
          "itemPersistId": 2057,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 24252,
          "itemPersistId": 101,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 8723,
          "itemPersistId": 8703,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Black_Sea_Bass",
          "persistId": 1518,
          "itemPersistId": 32433,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Apple",
          "persistId": 23341,
          "itemPersistId": 25340,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Silver",
          "persistId": 31151,
          "itemPersistId": 10974,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Gold",
          "persistId": 8539,
          "itemPersistId": 30124,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 10638,
          "itemPersistId": 29186,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 32193,
          "itemPersistId": 10249,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyE",
          "persistId": 4976,
          "itemPersistId": 12500,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 15509,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 17925,
          "itemPersistId": 28804,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_SalisburyChapaa",
          "persistId": 21750,
          "itemPersistId": 7223,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 21062,
          "itemPersistId": 2057,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 26969,
          "itemPersistId": 18642,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 3785,
          "itemPersistId": 11907,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 22381,
          "itemPersistId": 21628,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Recipe_Cooking_Onigiri",
          "persistId": 10197,
          "itemPersistId": 2427,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 16837,
          "itemPersistId": 11819,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 31086,
          "itemPersistId": 22676,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 7689,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 11201,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 1214,
          "itemPersistId": 23423,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 20162,
          "itemPersistId": 14204,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Ruby",
          "persistId": 16824,
          "itemPersistId": 9652,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_OystersAkwinduu",
          "persistId": 8715,
          "itemPersistId": 13767,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_PetitFives",
          "persistId": 337,
          "itemPersistId": 29904,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_MuujinBahari_Cooked",
          "persistId": 6702,
          "itemPersistId": 11902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 27250,
          "itemPersistId": 18440,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 9596,
          "itemPersistId": 23423,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 9309,
          "itemPersistId": 28804,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_SalisburyChapaa",
          "persistId": 7099,
          "itemPersistId": 7223,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 9064,
          "itemPersistId": 32125,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 24084,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Bigeye_Tuna",
          "persistId": 29180,
          "itemPersistId": 4778,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Yellowfin_Tuna",
          "persistId": 7268,
          "itemPersistId": 18332,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Samara",
          "persistId": 21615,
          "itemPersistId": 20333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Juniper",
          "persistId": 9939,
          "itemPersistId": 31632,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 19837,
          "itemPersistId": 11819,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 27884,
          "itemPersistId": 22676,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 19850,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 17248,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 23933,
          "itemPersistId": 13513,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 5182,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Onion",
          "persistId": 14561,
          "itemPersistId": 28235,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 10163,
          "itemPersistId": 2057,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 24252,
          "itemPersistId": 101,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 8723,
          "itemPersistId": 8703,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Black_Sea_Bass",
          "persistId": 1518,
          "itemPersistId": 32433,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Apple",
          "persistId": 23341,
          "itemPersistId": 25340,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Silver",
          "persistId": 31151,
          "itemPersistId": 10974,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Gold",
          "persistId": 8539,
          "itemPersistId": 30124,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 10638,
          "itemPersistId": 29186,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 32193,
          "itemPersistId": 10249,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyE",
          "persistId": 4976,
          "itemPersistId": 12500,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 15509,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 17925,
          "itemPersistId": 28804,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_SalisburyChapaa",
          "persistId": 21750,
          "itemPersistId": 7223,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 21062,
          "itemPersistId": 2057,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 26969,
          "itemPersistId": 18642,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 3785,
          "itemPersistId": 11907,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 22381,
          "itemPersistId": 21628,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Recipe_Cooking_Onigiri",
          "persistId": 10197,
          "itemPersistId": 2427,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 16837,
          "itemPersistId": 11819,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 31086,
          "itemPersistId": 22676,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 7689,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 11201,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 1214,
          "itemPersistId": 23423,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 20162,
          "itemPersistId": 14204,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Ruby",
          "persistId": 16824,
          "itemPersistId": 9652,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_OystersAkwinduu",
          "persistId": 8715,
          "itemPersistId": 13767,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_PetitFives",
          "persistId": 337,
          "itemPersistId": 29904,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_MuujinBahari_Cooked",
          "persistId": 6702,
          "itemPersistId": 11902,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 14351,
      "configId": "thehunter",
      "className": "BP_VillagerTheHunter_C",
      "name": "Hassian",
      "icon": "Hassian_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Questitem_OldBow",
          "persistId": 30192,
          "itemPersistId": 22897,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 15286,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 14933,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Standard",
          "persistId": 8913,
          "itemPersistId": 21123,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Lethargy",
          "persistId": 10867,
          "itemPersistId": 31021,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 15163,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 2013,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 201,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_PlantFiber",
          "persistId": 17687,
          "itemPersistId": 28731,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Giant_Kilima_Stingray",
          "persistId": 1961,
          "itemPersistId": 12832,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 17076,
          "itemPersistId": 28023,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 25327,
          "itemPersistId": 16540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 9571,
          "itemPersistId": 12075,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 25743,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 31905,
          "itemPersistId": 9498,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 14362,
          "itemPersistId": 8144,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Cotton",
          "persistId": 11608,
          "itemPersistId": 31540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T1",
          "persistId": 32401,
          "itemPersistId": 23388,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T2",
          "persistId": 16440,
          "itemPersistId": 10916,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 17084,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Fabric",
          "persistId": 28284,
          "itemPersistId": 28777,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 29768,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Hide",
          "persistId": 7919,
          "itemPersistId": 28732,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T1",
          "persistId": 9544,
          "itemPersistId": 13798,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T2",
          "persistId": 4103,
          "itemPersistId": 19180,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T3",
          "persistId": 25689,
          "itemPersistId": 10606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Dispel",
          "persistId": 16357,
          "itemPersistId": 1538,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Fireworks_Random",
          "persistId": 26933,
          "itemPersistId": 18623,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 25677,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Iron",
          "persistId": 30200,
          "itemPersistId": 31841,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Flint",
          "persistId": 8645,
          "itemPersistId": 15628,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 1771,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 31437,
          "itemPersistId": 18264,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 10123,
          "itemPersistId": 21902,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 10302,
          "itemPersistId": 18642,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 10735,
          "itemPersistId": 14204,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 689,
          "itemPersistId": 11907,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 16441,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 13096,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_ChapaaAsadaTacos",
          "persistId": 20604,
          "itemPersistId": 2054,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Emerald",
          "persistId": 31920,
          "itemPersistId": 13863,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 28155,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_OldBow",
          "persistId": 30192,
          "itemPersistId": 22897,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 15286,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 14933,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Standard",
          "persistId": 8913,
          "itemPersistId": 21123,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Lethargy",
          "persistId": 10867,
          "itemPersistId": 31021,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 15163,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 2013,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 201,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_PlantFiber",
          "persistId": 17687,
          "itemPersistId": 28731,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Giant_Kilima_Stingray",
          "persistId": 1961,
          "itemPersistId": 12832,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 17076,
          "itemPersistId": 28023,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 25327,
          "itemPersistId": 16540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 9571,
          "itemPersistId": 12075,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 25743,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 31905,
          "itemPersistId": 9498,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 14362,
          "itemPersistId": 8144,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Cotton",
          "persistId": 11608,
          "itemPersistId": 31540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T1",
          "persistId": 32401,
          "itemPersistId": 23388,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T2",
          "persistId": 16440,
          "itemPersistId": 10916,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 17084,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Fabric",
          "persistId": 28284,
          "itemPersistId": 28777,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 29768,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Hide",
          "persistId": 7919,
          "itemPersistId": 28732,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T1",
          "persistId": 9544,
          "itemPersistId": 13798,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T2",
          "persistId": 4103,
          "itemPersistId": 19180,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T3",
          "persistId": 25689,
          "itemPersistId": 10606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Dispel",
          "persistId": 16357,
          "itemPersistId": 1538,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Fireworks_Random",
          "persistId": 26933,
          "itemPersistId": 18623,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 25677,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Iron",
          "persistId": 30200,
          "itemPersistId": 31841,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Flint",
          "persistId": 8645,
          "itemPersistId": 15628,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 1771,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 31437,
          "itemPersistId": 18264,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 10123,
          "itemPersistId": 21902,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 10302,
          "itemPersistId": 18642,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 10735,
          "itemPersistId": 14204,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 689,
          "itemPersistId": 11907,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 16441,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 13096,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_ChapaaAsadaTacos",
          "persistId": 20604,
          "itemPersistId": 2054,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Emerald",
          "persistId": 31920,
          "itemPersistId": 13863,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 28155,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 6515,
      "configId": "thenanny",
      "className": "BP_Villager_Hekla_C",
      "name": "Hekla",
      "icon": "Hekla_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Fish_BahariBream",
          "persistId": 5232,
          "itemPersistId": 7224,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Black_Sea_Bass",
          "persistId": 29379,
          "itemPersistId": 32433,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 20276,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_LargemouthBass",
          "persistId": 13761,
          "itemPersistId": 16264,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_SmallmouthBass",
          "persistId": 10943,
          "itemPersistId": 7969,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Codfish",
          "persistId": 29002,
          "itemPersistId": 32530,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Enchanted_Pupfish",
          "persistId": 15684,
          "itemPersistId": 4665,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Beluga_Sturgeon",
          "persistId": 2543,
          "itemPersistId": 2016,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 30233,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Seed_Acorn",
          "persistId": 21051,
          "itemPersistId": 20263,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Pinecone",
          "persistId": 11945,
          "itemPersistId": 22034,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 2045,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 1619,
          "itemPersistId": 16540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 10705,
          "itemPersistId": 23624,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 27532,
          "itemPersistId": 26975,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 19115,
          "itemPersistId": 1551,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 1423,
          "itemPersistId": 11233,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 15502,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Ramen",
          "persistId": 20285,
          "itemPersistId": 480,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Chub",
          "persistId": 25628,
          "itemPersistId": 32145,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_PaintedPerch",
          "persistId": 8941,
          "itemPersistId": 29344,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_SundropLily",
          "persistId": 415,
          "itemPersistId": 20533,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_BriarDaisy",
          "persistId": 6601,
          "itemPersistId": 26021,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 25470,
          "itemPersistId": 19418,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 757,
          "itemPersistId": 2934,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Meat_Oyster",
          "persistId": 21818,
          "itemPersistId": 26948,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 6425,
          "itemPersistId": 9498,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 30563,
          "itemPersistId": 8144,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 4352,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 20519,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 17028,
          "itemPersistId": 27611,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 28049,
          "itemPersistId": 8144,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 4672,
          "itemPersistId": 9498,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 6623,
          "itemPersistId": 11819,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 26946,
          "itemPersistId": 22676,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 2800,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 8652,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_BahariBream",
          "persistId": 5232,
          "itemPersistId": 7224,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Black_Sea_Bass",
          "persistId": 29379,
          "itemPersistId": 32433,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 20276,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_LargemouthBass",
          "persistId": 13761,
          "itemPersistId": 16264,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_SmallmouthBass",
          "persistId": 10943,
          "itemPersistId": 7969,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Codfish",
          "persistId": 29002,
          "itemPersistId": 32530,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Enchanted_Pupfish",
          "persistId": 15684,
          "itemPersistId": 4665,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Beluga_Sturgeon",
          "persistId": 2543,
          "itemPersistId": 2016,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 30233,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Seed_Acorn",
          "persistId": 21051,
          "itemPersistId": 20263,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Pinecone",
          "persistId": 11945,
          "itemPersistId": 22034,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 2045,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 1619,
          "itemPersistId": 16540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 10705,
          "itemPersistId": 23624,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 27532,
          "itemPersistId": 26975,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 19115,
          "itemPersistId": 1551,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 1423,
          "itemPersistId": 11233,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 15502,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Ramen",
          "persistId": 20285,
          "itemPersistId": 480,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Chub",
          "persistId": 25628,
          "itemPersistId": 32145,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_PaintedPerch",
          "persistId": 8941,
          "itemPersistId": 29344,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_SundropLily",
          "persistId": 415,
          "itemPersistId": 20533,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_BriarDaisy",
          "persistId": 6601,
          "itemPersistId": 26021,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 25470,
          "itemPersistId": 19418,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 757,
          "itemPersistId": 2934,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Meat_Oyster",
          "persistId": 21818,
          "itemPersistId": 26948,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 6425,
          "itemPersistId": 9498,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 30563,
          "itemPersistId": 8144,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 4352,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 20519,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 17028,
          "itemPersistId": 27611,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 28049,
          "itemPersistId": 8144,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 4672,
          "itemPersistId": 9498,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 6623,
          "itemPersistId": 11819,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 26946,
          "itemPersistId": 22676,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 2800,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 8652,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        }
      ]
    },
    {
      "persistId": 1419,
      "configId": "theminer",
      "className": "BP_Villager_Miner_C",
      "name": "Hodari",
      "icon": "Hodari_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 7934,
          "itemPersistId": 16540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 18195,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 12119,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Brick_Stone",
          "persistId": 9174,
          "itemPersistId": 4534,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Stonefish",
          "persistId": 24927,
          "itemPersistId": 14583,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_BlueMarlin",
          "persistId": 16829,
          "itemPersistId": 8184,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 29740,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Wood_Hardwood",
          "persistId": 2251,
          "itemPersistId": 7305,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Magicwood",
          "persistId": 21789,
          "itemPersistId": 19774,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 30034,
          "itemPersistId": 12075,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 24292,
          "itemPersistId": 23927,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T1",
          "persistId": 30349,
          "itemPersistId": 23388,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T2",
          "persistId": 22948,
          "itemPersistId": 10916,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 31902,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 3998,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 195,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T1",
          "persistId": 5402,
          "itemPersistId": 13798,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T2",
          "persistId": 11831,
          "itemPersistId": 19180,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T3",
          "persistId": 30760,
          "itemPersistId": 10606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Copper",
          "persistId": 21352,
          "itemPersistId": 20430,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Iron",
          "persistId": 27550,
          "itemPersistId": 31841,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Copper",
          "persistId": 11968,
          "itemPersistId": 8333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 29205,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_GlowbugC",
          "persistId": 32766,
          "itemPersistId": 27630,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_GlowbugR",
          "persistId": 6656,
          "itemPersistId": 22520,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 16603,
          "itemPersistId": 3444,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaR",
          "persistId": 24787,
          "itemPersistId": 21411,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 28954,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 16471,
          "itemPersistId": 27076,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 22118,
          "itemPersistId": 4401,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 3987,
          "itemPersistId": 13513,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 31071,
          "itemPersistId": 26975,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 24758,
          "itemPersistId": 1551,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 20077,
          "itemPersistId": 101,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 9282,
          "itemPersistId": 8703,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 26438,
          "itemPersistId": 21628,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 30657,
          "itemPersistId": 18206,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 3656,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 7738,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_HotHounds",
          "persistId": 11773,
          "itemPersistId": 28622,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 1567,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 4045,
          "itemPersistId": 26671,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Garnet",
          "persistId": 9905,
          "itemPersistId": 22480,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Treeclimber",
          "persistId": 8730,
          "itemPersistId": 19716,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 7934,
          "itemPersistId": 16540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 18195,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 12119,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Brick_Stone",
          "persistId": 9174,
          "itemPersistId": 4534,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Stonefish",
          "persistId": 24927,
          "itemPersistId": 14583,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_BlueMarlin",
          "persistId": 16829,
          "itemPersistId": 8184,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 29740,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Wood_Hardwood",
          "persistId": 2251,
          "itemPersistId": 7305,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Magicwood",
          "persistId": 21789,
          "itemPersistId": 19774,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 30034,
          "itemPersistId": 12075,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 24292,
          "itemPersistId": 23927,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T1",
          "persistId": 30349,
          "itemPersistId": 23388,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T2",
          "persistId": 22948,
          "itemPersistId": 10916,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 31902,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 3998,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 195,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T1",
          "persistId": 5402,
          "itemPersistId": 13798,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T2",
          "persistId": 11831,
          "itemPersistId": 19180,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T3",
          "persistId": 30760,
          "itemPersistId": 10606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Copper",
          "persistId": 21352,
          "itemPersistId": 20430,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Iron",
          "persistId": 27550,
          "itemPersistId": 31841,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Copper",
          "persistId": 11968,
          "itemPersistId": 8333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 29205,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_GlowbugC",
          "persistId": 32766,
          "itemPersistId": 27630,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_GlowbugR",
          "persistId": 6656,
          "itemPersistId": 22520,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 16603,
          "itemPersistId": 3444,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaR",
          "persistId": 24787,
          "itemPersistId": 21411,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 28954,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 16471,
          "itemPersistId": 27076,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 22118,
          "itemPersistId": 4401,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 3987,
          "itemPersistId": 13513,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 31071,
          "itemPersistId": 26975,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 24758,
          "itemPersistId": 1551,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 20077,
          "itemPersistId": 101,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 9282,
          "itemPersistId": 8703,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 26438,
          "itemPersistId": 21628,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 30657,
          "itemPersistId": 18206,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 3656,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 7738,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_HotHounds",
          "persistId": 11773,
          "itemPersistId": 28622,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 1567,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 4045,
          "itemPersistId": 26671,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Garnet",
          "persistId": 9905,
          "itemPersistId": 22480,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Treeclimber",
          "persistId": 8730,
          "itemPersistId": 19716,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 10502,
      "configId": "thetailor",
      "className": "BP_Villager_Jel_C",
      "name": "Jel",
      "icon": "Jel_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 4385,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 31000,
          "itemPersistId": 18440,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 20366,
          "itemPersistId": 14176,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Shell",
          "persistId": 13354,
          "itemPersistId": 4843,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 32286,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 11229,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_AlbinoEel",
          "persistId": 18867,
          "itemPersistId": 11613,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Indigo_Lamprey",
          "persistId": 6195,
          "itemPersistId": 29793,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_BatRay",
          "persistId": 22460,
          "itemPersistId": 29420,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Duskray",
          "persistId": 28431,
          "itemPersistId": 23865,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MothC",
          "persistId": 26623,
          "itemPersistId": 9443,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MothU",
          "persistId": 14927,
          "itemPersistId": 19785,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 11139,
          "itemPersistId": 22676,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 16976,
          "itemPersistId": 11819,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Midnight_Paddlefish",
          "persistId": 6605,
          "itemPersistId": 850,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_FreshwaterEel",
          "persistId": 6632,
          "itemPersistId": 5539,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Willow_Lamprey",
          "persistId": 7879,
          "itemPersistId": 24281,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Thundering_Eel",
          "persistId": 23883,
          "itemPersistId": 4505,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Barracuda",
          "persistId": 25672,
          "itemPersistId": 28696,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Black_Sea_Bass",
          "persistId": 18913,
          "itemPersistId": 32433,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_EyelessMinnow",
          "persistId": 8919,
          "itemPersistId": 431,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_UmbranCarp",
          "persistId": 20067,
          "itemPersistId": 5380,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_WaterloggedBoot",
          "persistId": 28008,
          "itemPersistId": 5603,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 7305,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 22278,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 19107,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Hide",
          "persistId": 22147,
          "itemPersistId": 28732,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T2",
          "persistId": 20208,
          "itemPersistId": 19180,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T3",
          "persistId": 24817,
          "itemPersistId": 10606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 2754,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MothR",
          "persistId": 11504,
          "itemPersistId": 10766,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabR",
          "persistId": 19970,
          "itemPersistId": 2818,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeR2",
          "persistId": 13564,
          "itemPersistId": 18323,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 28071,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 30166,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 27299,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 32080,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 20924,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 20494,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Sapphire",
          "persistId": 24264,
          "itemPersistId": 26959,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_PetitFives",
          "persistId": 1882,
          "itemPersistId": 29904,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_MuujinBahari_Cooked",
          "persistId": 16146,
          "itemPersistId": 11902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_OystersAkwinduu",
          "persistId": 11730,
          "itemPersistId": 13767,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T1",
          "persistId": 23690,
          "itemPersistId": 3030,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T2",
          "persistId": 26981,
          "itemPersistId": 32254,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T3",
          "persistId": 6652,
          "itemPersistId": 31806,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 4385,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 31000,
          "itemPersistId": 18440,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 20366,
          "itemPersistId": 14176,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Shell",
          "persistId": 13354,
          "itemPersistId": 4843,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 32286,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 11229,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_AlbinoEel",
          "persistId": 18867,
          "itemPersistId": 11613,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Indigo_Lamprey",
          "persistId": 6195,
          "itemPersistId": 29793,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_BatRay",
          "persistId": 22460,
          "itemPersistId": 29420,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Duskray",
          "persistId": 28431,
          "itemPersistId": 23865,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MothC",
          "persistId": 26623,
          "itemPersistId": 9443,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MothU",
          "persistId": 14927,
          "itemPersistId": 19785,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 11139,
          "itemPersistId": 22676,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 16976,
          "itemPersistId": 11819,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Midnight_Paddlefish",
          "persistId": 6605,
          "itemPersistId": 850,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_FreshwaterEel",
          "persistId": 6632,
          "itemPersistId": 5539,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Willow_Lamprey",
          "persistId": 7879,
          "itemPersistId": 24281,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Thundering_Eel",
          "persistId": 23883,
          "itemPersistId": 4505,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Barracuda",
          "persistId": 25672,
          "itemPersistId": 28696,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Black_Sea_Bass",
          "persistId": 18913,
          "itemPersistId": 32433,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_EyelessMinnow",
          "persistId": 8919,
          "itemPersistId": 431,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_UmbranCarp",
          "persistId": 20067,
          "itemPersistId": 5380,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_WaterloggedBoot",
          "persistId": 28008,
          "itemPersistId": 5603,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 7305,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 22278,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 19107,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Hide",
          "persistId": 22147,
          "itemPersistId": 28732,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T2",
          "persistId": 20208,
          "itemPersistId": 19180,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T3",
          "persistId": 24817,
          "itemPersistId": 10606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 2754,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MothR",
          "persistId": 11504,
          "itemPersistId": 10766,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabR",
          "persistId": 19970,
          "itemPersistId": 2818,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeR2",
          "persistId": 13564,
          "itemPersistId": 18323,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 28071,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 30166,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 27299,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 32080,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 20924,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 20494,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Sapphire",
          "persistId": 24264,
          "itemPersistId": 26959,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_PetitFives",
          "persistId": 1882,
          "itemPersistId": 29904,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_MuujinBahari_Cooked",
          "persistId": 16146,
          "itemPersistId": 11902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_OystersAkwinduu",
          "persistId": 11730,
          "itemPersistId": 13767,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T1",
          "persistId": 23690,
          "itemPersistId": 3030,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T2",
          "persistId": 26981,
          "itemPersistId": 32254,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T3",
          "persistId": 6652,
          "itemPersistId": 31806,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 8919,
      "configId": "thearcheologist",
      "className": "BP_VillagerTheArchaeologist_C",
      "name": "Jina",
      "icon": "Jina_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 19266,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 14316,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 21807,
          "itemPersistId": 8144,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 17534,
          "itemPersistId": 9498,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 891,
          "itemPersistId": 18440,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 12992,
          "itemPersistId": 23624,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 31758,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 15087,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Mushroom",
          "persistId": 747,
          "itemPersistId": 4276,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 6770,
          "itemPersistId": 11233,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_MutatedAngler",
          "persistId": 13050,
          "itemPersistId": 23498,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyC",
          "persistId": 21093,
          "itemPersistId": 8256,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyU",
          "persistId": 15017,
          "itemPersistId": 12447,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 11929,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 8834,
          "itemPersistId": 18642,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_RadiantSunfish",
          "persistId": 5577,
          "itemPersistId": 13110,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 21597,
          "itemPersistId": 28023,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 32537,
          "itemPersistId": 24126,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 31855,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 14592,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 7682,
          "itemPersistId": 14176,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Shell",
          "persistId": 13708,
          "itemPersistId": 4843,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_EmeraldCarpet",
          "persistId": 5939,
          "itemPersistId": 32155,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 17820,
          "itemPersistId": 22153,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 7089,
          "itemPersistId": 9499,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 9011,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 9819,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Cotton",
          "persistId": 27403,
          "itemPersistId": 31540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Cotton",
          "persistId": 8433,
          "itemPersistId": 7666,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Flint",
          "persistId": 26638,
          "itemPersistId": 15628,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Pane",
          "persistId": 14903,
          "itemPersistId": 26895,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyR",
          "persistId": 5620,
          "itemPersistId": 30155,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyE",
          "persistId": 31514,
          "itemPersistId": 2612,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 6596,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 30340,
          "itemPersistId": 23624,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Mushroom",
          "persistId": 8926,
          "itemPersistId": 4276,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 1116,
          "itemPersistId": 11233,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Breakfast_MushroomQuiche",
          "persistId": 20914,
          "itemPersistId": 1361,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 25583,
          "itemPersistId": 8144,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 3946,
          "itemPersistId": 9498,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 19504,
          "itemPersistId": 13175,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 27683,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 29746,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 8126,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 8097,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 28494,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Emerald",
          "persistId": 10013,
          "itemPersistId": 13863,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 15724,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 19266,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 14316,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 21807,
          "itemPersistId": 8144,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 17534,
          "itemPersistId": 9498,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 891,
          "itemPersistId": 18440,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 12992,
          "itemPersistId": 23624,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 31758,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 15087,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Mushroom",
          "persistId": 747,
          "itemPersistId": 4276,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 6770,
          "itemPersistId": 11233,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_MutatedAngler",
          "persistId": 13050,
          "itemPersistId": 23498,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyC",
          "persistId": 21093,
          "itemPersistId": 8256,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyU",
          "persistId": 15017,
          "itemPersistId": 12447,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 11929,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 8834,
          "itemPersistId": 18642,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_RadiantSunfish",
          "persistId": 5577,
          "itemPersistId": 13110,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 21597,
          "itemPersistId": 28023,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 32537,
          "itemPersistId": 24126,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 31855,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 14592,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 7682,
          "itemPersistId": 14176,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Shell",
          "persistId": 13708,
          "itemPersistId": 4843,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_EmeraldCarpet",
          "persistId": 5939,
          "itemPersistId": 32155,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 17820,
          "itemPersistId": 22153,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 7089,
          "itemPersistId": 9499,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 9011,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 9819,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Cotton",
          "persistId": 27403,
          "itemPersistId": 31540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Cotton",
          "persistId": 8433,
          "itemPersistId": 7666,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Flint",
          "persistId": 26638,
          "itemPersistId": 15628,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Pane",
          "persistId": 14903,
          "itemPersistId": 26895,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyR",
          "persistId": 5620,
          "itemPersistId": 30155,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyE",
          "persistId": 31514,
          "itemPersistId": 2612,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 6596,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 30340,
          "itemPersistId": 23624,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Mushroom",
          "persistId": 8926,
          "itemPersistId": 4276,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 1116,
          "itemPersistId": 11233,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Breakfast_MushroomQuiche",
          "persistId": 20914,
          "itemPersistId": 1361,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 25583,
          "itemPersistId": 8144,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 3946,
          "itemPersistId": 9498,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 19504,
          "itemPersistId": 13175,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 27683,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 29746,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 8126,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 8097,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 28494,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Emerald",
          "persistId": 10013,
          "itemPersistId": 13863,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 15724,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 30076,
      "configId": "themayor",
      "className": "BP_Villager_Mayor_C",
      "name": "Kenli",
      "icon": "Kenji_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Material_Tail_T1",
          "persistId": 30281,
          "itemPersistId": 13798,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T3",
          "persistId": 6814,
          "itemPersistId": 10606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 29987,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Chapaa",
          "persistId": 697,
          "itemPersistId": 10548,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T2",
          "persistId": 15813,
          "itemPersistId": 19180,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Kenjis_Carp",
          "persistId": 13542,
          "itemPersistId": 10989,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 12063,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 14525,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 2994,
          "itemPersistId": 23423,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 7825,
          "itemPersistId": 13513,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 7017,
          "itemPersistId": 28804,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 14964,
          "itemPersistId": 26975,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 15055,
          "itemPersistId": 1551,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 1726,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_SalisburyChapaa",
          "persistId": 19360,
          "itemPersistId": 7223,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 5083,
          "itemPersistId": 2057,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 950,
          "itemPersistId": 10556,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 29425,
          "itemPersistId": 23925,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Onion",
          "persistId": 24455,
          "itemPersistId": 28235,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 18148,
          "itemPersistId": 23927,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 13731,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 13902,
          "itemPersistId": 101,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 23366,
          "itemPersistId": 8703,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Ramen",
          "persistId": 3684,
          "itemPersistId": 480,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_StirFry",
          "persistId": 2603,
          "itemPersistId": 13534,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 9698,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 31302,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 18546,
          "itemPersistId": 29186,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisTriangle",
          "persistId": 12816,
          "itemPersistId": 31477,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_LadybugU",
          "persistId": 31026,
          "itemPersistId": 10028,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_LadybugR",
          "persistId": 12330,
          "itemPersistId": 13596,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 16403,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Fish_Kenjis_Carp",
          "persistId": 14013,
          "itemPersistId": 10989,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 29551,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 31668,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Jasper",
          "persistId": 20855,
          "itemPersistId": 17754,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_OystersAkwinduu",
          "persistId": 23602,
          "itemPersistId": 13767,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_PetitFives",
          "persistId": 19797,
          "itemPersistId": 29904,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_MuujinBahari_Cooked",
          "persistId": 30606,
          "itemPersistId": 11902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T1",
          "persistId": 30281,
          "itemPersistId": 13798,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T3",
          "persistId": 6814,
          "itemPersistId": 10606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 29987,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Chapaa",
          "persistId": 697,
          "itemPersistId": 10548,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T2",
          "persistId": 15813,
          "itemPersistId": 19180,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Kenjis_Carp",
          "persistId": 13542,
          "itemPersistId": 10989,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 12063,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 14525,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 2994,
          "itemPersistId": 23423,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 7825,
          "itemPersistId": 13513,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 7017,
          "itemPersistId": 28804,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 14964,
          "itemPersistId": 26975,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 15055,
          "itemPersistId": 1551,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 1726,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_SalisburyChapaa",
          "persistId": 19360,
          "itemPersistId": 7223,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 5083,
          "itemPersistId": 2057,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 950,
          "itemPersistId": 10556,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 29425,
          "itemPersistId": 23925,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Onion",
          "persistId": 24455,
          "itemPersistId": 28235,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 18148,
          "itemPersistId": 23927,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 13731,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 13902,
          "itemPersistId": 101,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 23366,
          "itemPersistId": 8703,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Ramen",
          "persistId": 3684,
          "itemPersistId": 480,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_StirFry",
          "persistId": 2603,
          "itemPersistId": 13534,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 9698,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 31302,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 18546,
          "itemPersistId": 29186,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisTriangle",
          "persistId": 12816,
          "itemPersistId": 31477,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_LadybugU",
          "persistId": 31026,
          "itemPersistId": 10028,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_LadybugR",
          "persistId": 12330,
          "itemPersistId": 13596,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 16403,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Fish_Kenjis_Carp",
          "persistId": 14013,
          "itemPersistId": 10989,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 29551,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 31668,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Jasper",
          "persistId": 20855,
          "itemPersistId": 17754,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_OystersAkwinduu",
          "persistId": 23602,
          "itemPersistId": 13767,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_PetitFives",
          "persistId": 19797,
          "itemPersistId": 29904,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_MuujinBahari_Cooked",
          "persistId": 30606,
          "itemPersistId": 11902,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 21224,
      "configId": "themayorsdaughter",
      "className": "BP_Villager_Kenyatta_C",
      "name": "Kenyatta",
      "icon": "Icon_Villager_Kenyatta",
      "gifts": [
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 23459,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_BriarDaisy",
          "persistId": 21910,
          "itemPersistId": 26021,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 31022,
          "itemPersistId": 18440,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_SundropLily",
          "persistId": 18695,
          "itemPersistId": 20533,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 15721,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_Love_Note",
          "persistId": 31934,
          "itemPersistId": 25380,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 2700,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 12142,
          "itemPersistId": 19418,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Barracuda",
          "persistId": 10931,
          "itemPersistId": 28696,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Crimson_Fangtooth",
          "persistId": 19103,
          "itemPersistId": 15667,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Alligator_Gar",
          "persistId": 2682,
          "itemPersistId": 30135,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Acorn",
          "persistId": 27316,
          "itemPersistId": 20263,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Pinecone",
          "persistId": 22813,
          "itemPersistId": 22034,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 24226,
          "itemPersistId": 23925,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_StirFry",
          "persistId": 27522,
          "itemPersistId": 13534,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Oily_Anchovy",
          "persistId": 32132,
          "itemPersistId": 19977,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Cutthroat_Trout",
          "persistId": 10953,
          "itemPersistId": 18120,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Sardine",
          "persistId": 4489,
          "itemPersistId": 24439,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_EmeraldCarpet",
          "persistId": 2127,
          "itemPersistId": 32155,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 32475,
          "itemPersistId": 22153,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 14030,
          "itemPersistId": 9499,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Onion",
          "persistId": 30621,
          "itemPersistId": 28166,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Blueberry",
          "persistId": 2281,
          "itemPersistId": 10889,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T1",
          "persistId": 28876,
          "itemPersistId": 23388,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T2",
          "persistId": 24835,
          "itemPersistId": 10916,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 26412,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 9463,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 31853,
          "itemPersistId": 30577,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyC",
          "persistId": 26931,
          "itemPersistId": 6055,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyU",
          "persistId": 26683,
          "itemPersistId": 6654,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 1690,
          "itemPersistId": 3444,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisU",
          "persistId": 5198,
          "itemPersistId": 2002,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisR1",
          "persistId": 16175,
          "itemPersistId": 11071,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisR2",
          "persistId": 22340,
          "itemPersistId": 9423,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisE",
          "persistId": 18126,
          "itemPersistId": 14408,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 23906,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyC",
          "persistId": 9410,
          "itemPersistId": 6055,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyU",
          "persistId": 24624,
          "itemPersistId": 6654,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 15257,
          "itemPersistId": 3444,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyE",
          "persistId": 18545,
          "itemPersistId": 12500,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 11296,
          "itemPersistId": 28804,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_SalisburyChapaa",
          "persistId": 27679,
          "itemPersistId": 7223,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 3566,
          "itemPersistId": 2057,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 23117,
          "itemPersistId": 18642,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 6716,
          "itemPersistId": 11907,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 31738,
          "itemPersistId": 8703,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_FriedRice",
          "persistId": 17,
          "itemPersistId": 8708,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_StirFry",
          "persistId": 3596,
          "itemPersistId": 13534,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Onigiri",
          "persistId": 4808,
          "itemPersistId": 29339,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 16443,
          "itemPersistId": 21628,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Red-bellied_Piranha",
          "persistId": 18466,
          "itemPersistId": 8904,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Energized_Piranha",
          "persistId": 16439,
          "itemPersistId": 76,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Barracuda",
          "persistId": 16920,
          "itemPersistId": 28696,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_EyelessMinnow",
          "persistId": 17771,
          "itemPersistId": 431,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_AlbinoEel",
          "persistId": 13512,
          "itemPersistId": 11613,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_UmbranCarp",
          "persistId": 16482,
          "itemPersistId": 5380,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_BatRay",
          "persistId": 32630,
          "itemPersistId": 29420,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_MutatedAngler",
          "persistId": 4032,
          "itemPersistId": 23498,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Blobfish",
          "persistId": 23744,
          "itemPersistId": 23960,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Stonefish",
          "persistId": 2269,
          "itemPersistId": 14583,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Crimson_Fangtooth",
          "persistId": 25885,
          "itemPersistId": 15667,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Hypnotic_Moray",
          "persistId": 8391,
          "itemPersistId": 7783,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 26102,
          "itemPersistId": 24126,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_BriarDaisy",
          "persistId": 12689,
          "itemPersistId": 26021,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 9999,
          "itemPersistId": 30577,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 16533,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 13969,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 19680,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 8540,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 7454,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_SpicyStirFry",
          "persistId": 17601,
          "itemPersistId": 26415,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_ChiliOilWontons",
          "persistId": 9423,
          "itemPersistId": 13164,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_DragonbreathRelleno",
          "persistId": 16644,
          "itemPersistId": 940,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Tteokbbeoki",
          "persistId": 31484,
          "itemPersistId": 30221,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Amethyst",
          "persistId": 10916,
          "itemPersistId": 9147,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T2",
          "persistId": 20778,
          "itemPersistId": 32254,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T3",
          "persistId": 2028,
          "itemPersistId": 31806,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 23459,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_BriarDaisy",
          "persistId": 21910,
          "itemPersistId": 26021,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 31022,
          "itemPersistId": 18440,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_SundropLily",
          "persistId": 18695,
          "itemPersistId": 20533,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 15721,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_Love_Note",
          "persistId": 31934,
          "itemPersistId": 25380,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 2700,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 12142,
          "itemPersistId": 19418,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Barracuda",
          "persistId": 10931,
          "itemPersistId": 28696,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Crimson_Fangtooth",
          "persistId": 19103,
          "itemPersistId": 15667,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Alligator_Gar",
          "persistId": 2682,
          "itemPersistId": 30135,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Acorn",
          "persistId": 27316,
          "itemPersistId": 20263,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Pinecone",
          "persistId": 22813,
          "itemPersistId": 22034,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 24226,
          "itemPersistId": 23925,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_StirFry",
          "persistId": 27522,
          "itemPersistId": 13534,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Oily_Anchovy",
          "persistId": 32132,
          "itemPersistId": 19977,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Cutthroat_Trout",
          "persistId": 10953,
          "itemPersistId": 18120,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Sardine",
          "persistId": 4489,
          "itemPersistId": 24439,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_EmeraldCarpet",
          "persistId": 2127,
          "itemPersistId": 32155,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 32475,
          "itemPersistId": 22153,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 14030,
          "itemPersistId": 9499,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Onion",
          "persistId": 30621,
          "itemPersistId": 28166,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Blueberry",
          "persistId": 2281,
          "itemPersistId": 10889,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T1",
          "persistId": 28876,
          "itemPersistId": 23388,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T2",
          "persistId": 24835,
          "itemPersistId": 10916,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 26412,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 9463,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 31853,
          "itemPersistId": 30577,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyC",
          "persistId": 26931,
          "itemPersistId": 6055,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyU",
          "persistId": 26683,
          "itemPersistId": 6654,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 1690,
          "itemPersistId": 3444,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisU",
          "persistId": 5198,
          "itemPersistId": 2002,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisR1",
          "persistId": 16175,
          "itemPersistId": 11071,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisR2",
          "persistId": 22340,
          "itemPersistId": 9423,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisE",
          "persistId": 18126,
          "itemPersistId": 14408,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 23906,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyC",
          "persistId": 9410,
          "itemPersistId": 6055,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyU",
          "persistId": 24624,
          "itemPersistId": 6654,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 15257,
          "itemPersistId": 3444,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyE",
          "persistId": 18545,
          "itemPersistId": 12500,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 11296,
          "itemPersistId": 28804,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_SalisburyChapaa",
          "persistId": 27679,
          "itemPersistId": 7223,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 3566,
          "itemPersistId": 2057,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 23117,
          "itemPersistId": 18642,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 6716,
          "itemPersistId": 11907,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 31738,
          "itemPersistId": 8703,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_FriedRice",
          "persistId": 17,
          "itemPersistId": 8708,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_StirFry",
          "persistId": 3596,
          "itemPersistId": 13534,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Onigiri",
          "persistId": 4808,
          "itemPersistId": 29339,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 16443,
          "itemPersistId": 21628,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Red-bellied_Piranha",
          "persistId": 18466,
          "itemPersistId": 8904,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Energized_Piranha",
          "persistId": 16439,
          "itemPersistId": 76,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Barracuda",
          "persistId": 16920,
          "itemPersistId": 28696,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_EyelessMinnow",
          "persistId": 17771,
          "itemPersistId": 431,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_AlbinoEel",
          "persistId": 13512,
          "itemPersistId": 11613,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_UmbranCarp",
          "persistId": 16482,
          "itemPersistId": 5380,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_BatRay",
          "persistId": 32630,
          "itemPersistId": 29420,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_MutatedAngler",
          "persistId": 4032,
          "itemPersistId": 23498,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Blobfish",
          "persistId": 23744,
          "itemPersistId": 23960,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Stonefish",
          "persistId": 2269,
          "itemPersistId": 14583,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Crimson_Fangtooth",
          "persistId": 25885,
          "itemPersistId": 15667,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Hypnotic_Moray",
          "persistId": 8391,
          "itemPersistId": 7783,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 26102,
          "itemPersistId": 24126,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_BriarDaisy",
          "persistId": 12689,
          "itemPersistId": 26021,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 9999,
          "itemPersistId": 30577,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 16533,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 13969,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 19680,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 8540,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 7454,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_SpicyStirFry",
          "persistId": 17601,
          "itemPersistId": 26415,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_ChiliOilWontons",
          "persistId": 9423,
          "itemPersistId": 13164,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_DragonbreathRelleno",
          "persistId": 16644,
          "itemPersistId": 940,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Tteokbbeoki",
          "persistId": 31484,
          "itemPersistId": 30221,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Amethyst",
          "persistId": 10916,
          "itemPersistId": 9147,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T2",
          "persistId": 20778,
          "itemPersistId": 32254,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Mane_T3",
          "persistId": 2028,
          "itemPersistId": 31806,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 5802,
      "configId": "thefarmboy",
      "className": "BP_Villager_Farmboy_C",
      "name": "Nai'o",
      "icon": "Nyo_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 8278,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 1394,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Potato",
          "persistId": 13603,
          "itemPersistId": 4435,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Blueberry",
          "persistId": 28365,
          "itemPersistId": 10889,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_Love_Note",
          "persistId": 11545,
          "itemPersistId": 25380,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 30165,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_WaterloggedBoot",
          "persistId": 7759,
          "itemPersistId": 5603,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_SpottedBullhead",
          "persistId": 27835,
          "itemPersistId": 31374,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_KilimaCatfish",
          "persistId": 543,
          "itemPersistId": 20654,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Stalking_Catfish",
          "persistId": 10537,
          "itemPersistId": 10717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Channel_Catfish",
          "persistId": 729,
          "itemPersistId": 4484,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Softwood",
          "persistId": 12995,
          "itemPersistId": 16184,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Hardwood",
          "persistId": 23061,
          "itemPersistId": 8019,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 31988,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 9991,
          "itemPersistId": 13513,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 6448,
          "itemPersistId": 26975,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Bahari_Pike",
          "persistId": 14399,
          "itemPersistId": 7373,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 26211,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 13875,
          "itemPersistId": 22766,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 893,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 17182,
          "itemPersistId": 10569,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Onion",
          "persistId": 13492,
          "itemPersistId": 8541,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 6581,
          "itemPersistId": 27076,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 7123,
          "itemPersistId": 23450,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Wheat",
          "persistId": 9925,
          "itemPersistId": 29699,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Rice",
          "persistId": 9213,
          "itemPersistId": 6243,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Blueberry",
          "persistId": 7263,
          "itemPersistId": 13736,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Apple",
          "persistId": 17548,
          "itemPersistId": 10317,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WeedBlocker",
          "persistId": 13243,
          "itemPersistId": 30376,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WaterRetention",
          "persistId": 7162,
          "itemPersistId": 13240,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_StarQualityBooster",
          "persistId": 15111,
          "itemPersistId": 17516,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_HarvestBooster",
          "persistId": 10995,
          "itemPersistId": 16451,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_2xGrowthRate",
          "persistId": 13996,
          "itemPersistId": 22124,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Brick_Stone",
          "persistId": 30968,
          "itemPersistId": 4534,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 23004,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 16872,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 17746,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 11890,
          "itemPersistId": 16540,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 19090,
          "itemPersistId": 4401,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 19863,
          "itemPersistId": 23423,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 26763,
          "itemPersistId": 26975,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 27930,
          "itemPersistId": 1551,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 23260,
          "itemPersistId": 2292,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 27705,
          "itemPersistId": 101,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_MeatyUdon",
          "persistId": 356,
          "itemPersistId": 29957,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 10802,
          "itemPersistId": 9499,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 16537,
          "itemPersistId": 18206,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 32208,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 29877,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Corn",
          "persistId": 8192,
          "itemPersistId": 2475,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Jasper",
          "persistId": 14479,
          "itemPersistId": 17754,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Treeclimber",
          "persistId": 29585,
          "itemPersistId": 19716,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 8278,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 1394,
          "itemPersistId": 18440,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Potato",
          "persistId": 13603,
          "itemPersistId": 4435,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Blueberry",
          "persistId": 28365,
          "itemPersistId": 10889,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_Love_Note",
          "persistId": 11545,
          "itemPersistId": 25380,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 30165,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_WaterloggedBoot",
          "persistId": 7759,
          "itemPersistId": 5603,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_SpottedBullhead",
          "persistId": 27835,
          "itemPersistId": 31374,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_KilimaCatfish",
          "persistId": 543,
          "itemPersistId": 20654,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Stalking_Catfish",
          "persistId": 10537,
          "itemPersistId": 10717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Channel_Catfish",
          "persistId": 729,
          "itemPersistId": 4484,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Softwood",
          "persistId": 12995,
          "itemPersistId": 16184,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Hardwood",
          "persistId": 23061,
          "itemPersistId": 8019,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 31988,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 9991,
          "itemPersistId": 13513,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 6448,
          "itemPersistId": 26975,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Bahari_Pike",
          "persistId": 14399,
          "itemPersistId": 7373,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 26211,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 13875,
          "itemPersistId": 22766,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 893,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 17182,
          "itemPersistId": 10569,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Onion",
          "persistId": 13492,
          "itemPersistId": 8541,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 6581,
          "itemPersistId": 27076,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 7123,
          "itemPersistId": 23450,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Wheat",
          "persistId": 9925,
          "itemPersistId": 29699,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Rice",
          "persistId": 9213,
          "itemPersistId": 6243,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Blueberry",
          "persistId": 7263,
          "itemPersistId": 13736,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Apple",
          "persistId": 17548,
          "itemPersistId": 10317,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WeedBlocker",
          "persistId": 13243,
          "itemPersistId": 30376,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_WaterRetention",
          "persistId": 7162,
          "itemPersistId": 13240,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_StarQualityBooster",
          "persistId": 15111,
          "itemPersistId": 17516,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_HarvestBooster",
          "persistId": 10995,
          "itemPersistId": 16451,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fertilizer_2xGrowthRate",
          "persistId": 13996,
          "itemPersistId": 22124,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Brick_Stone",
          "persistId": 30968,
          "itemPersistId": 4534,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 23004,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 16872,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 17746,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 11890,
          "itemPersistId": 16540,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 19090,
          "itemPersistId": 4401,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 19863,
          "itemPersistId": 23423,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 26763,
          "itemPersistId": 26975,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 27930,
          "itemPersistId": 1551,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 23260,
          "itemPersistId": 2292,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 27705,
          "itemPersistId": 101,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_MeatyUdon",
          "persistId": 356,
          "itemPersistId": 29957,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 10802,
          "itemPersistId": 9499,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 16537,
          "itemPersistId": 18206,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 32208,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 29877,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Corn",
          "persistId": 8192,
          "itemPersistId": 2475,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Jasper",
          "persistId": 14479,
          "itemPersistId": 17754,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Treeclimber",
          "persistId": 29585,
          "itemPersistId": 19716,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 21355,
      "configId": "thedemolitionist",
      "className": "BP_VillagerTheDemolitionist_C",
      "name": "Najuma",
      "icon": "Najuma_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 21612,
          "itemPersistId": 18440,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Copper",
          "persistId": 14620,
          "itemPersistId": 20430,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Silver",
          "persistId": 6646,
          "itemPersistId": 10974,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Copper",
          "persistId": 1795,
          "itemPersistId": 8333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 25660,
          "itemPersistId": 10249,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 1740,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Iron",
          "persistId": 27397,
          "itemPersistId": 31841,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Flint",
          "persistId": 17287,
          "itemPersistId": 15628,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 10898,
          "itemPersistId": 11755,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 73,
          "itemPersistId": 11086,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 2953,
          "itemPersistId": 21902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Honey_Loach",
          "persistId": 31049,
          "itemPersistId": 1696,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 9083,
          "itemPersistId": 25631,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 9411,
          "itemPersistId": 9499,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 21185,
          "itemPersistId": 23450,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Cotton",
          "persistId": 24305,
          "itemPersistId": 31540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 13522,
          "itemPersistId": 21286,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 19726,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Apple",
          "persistId": 23343,
          "itemPersistId": 25340,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Tomato",
          "persistId": 32509,
          "itemPersistId": 1951,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Cotton",
          "persistId": 28911,
          "itemPersistId": 7666,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 4994,
          "itemPersistId": 30577,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Clay",
          "persistId": 32496,
          "itemPersistId": 10086,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ceramic",
          "persistId": 3311,
          "itemPersistId": 30752,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Pane",
          "persistId": 6244,
          "itemPersistId": 26895,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 30553,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_SnailU",
          "persistId": 28957,
          "itemPersistId": 24914,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_SnailR",
          "persistId": 28797,
          "itemPersistId": 21362,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 25646,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 17471,
          "itemPersistId": 3444,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 2988,
          "itemPersistId": 23450,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 21462,
          "itemPersistId": 11086,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Tomato",
          "persistId": 17911,
          "itemPersistId": 17141,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 3773,
          "itemPersistId": 14176,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Shell",
          "persistId": 11331,
          "itemPersistId": 4843,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 16812,
          "itemPersistId": 2934,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 22839,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 579,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Quartz",
          "persistId": 28543,
          "itemPersistId": 22717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 21612,
          "itemPersistId": 18440,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Copper",
          "persistId": 14620,
          "itemPersistId": 20430,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Silver",
          "persistId": 6646,
          "itemPersistId": 10974,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Copper",
          "persistId": 1795,
          "itemPersistId": 8333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 25660,
          "itemPersistId": 10249,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 1740,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Iron",
          "persistId": 27397,
          "itemPersistId": 31841,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Flint",
          "persistId": 17287,
          "itemPersistId": 15628,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 10898,
          "itemPersistId": 11755,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 73,
          "itemPersistId": 11086,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 2953,
          "itemPersistId": 21902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Honey_Loach",
          "persistId": 31049,
          "itemPersistId": 1696,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 9083,
          "itemPersistId": 25631,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 9411,
          "itemPersistId": 9499,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 21185,
          "itemPersistId": 23450,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Cotton",
          "persistId": 24305,
          "itemPersistId": 31540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 13522,
          "itemPersistId": 21286,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 19726,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Apple",
          "persistId": 23343,
          "itemPersistId": 25340,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Tomato",
          "persistId": 32509,
          "itemPersistId": 1951,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Cotton",
          "persistId": 28911,
          "itemPersistId": 7666,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 4994,
          "itemPersistId": 30577,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Clay",
          "persistId": 32496,
          "itemPersistId": 10086,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ceramic",
          "persistId": 3311,
          "itemPersistId": 30752,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Pane",
          "persistId": 6244,
          "itemPersistId": 26895,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 30553,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_SnailU",
          "persistId": 28957,
          "itemPersistId": 24914,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_SnailR",
          "persistId": 28797,
          "itemPersistId": 21362,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 25646,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 17471,
          "itemPersistId": 3444,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 2988,
          "itemPersistId": 23450,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 21462,
          "itemPersistId": 11086,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Tomato",
          "persistId": 17911,
          "itemPersistId": 17141,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 3773,
          "itemPersistId": 14176,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Shell",
          "persistId": 11331,
          "itemPersistId": 4843,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 16812,
          "itemPersistId": 2934,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 22839,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 579,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Quartz",
          "persistId": 28543,
          "itemPersistId": 22717,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 10215,
      "configId": "thecook",
      "className": "BP_Villager_Cook_C",
      "name": "Reth",
      "icon": "Reth_icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_QuestItem_Reward_LettuceSoup",
          "persistId": 17907,
          "itemPersistId": 1352,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 718,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 2909,
          "itemPersistId": 11086,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 24710,
          "itemPersistId": 23925,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Onion",
          "persistId": 7188,
          "itemPersistId": 28235,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 18622,
          "itemPersistId": 23927,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 13172,
          "itemPersistId": 12075,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 32708,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 12304,
          "itemPersistId": 26671,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_LargemouthBass",
          "persistId": 15378,
          "itemPersistId": 16264,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Yellow_Perch",
          "persistId": 25980,
          "itemPersistId": 21636,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 18407,
          "itemPersistId": 11233,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 9444,
          "itemPersistId": 10556,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Ramen",
          "persistId": 22781,
          "itemPersistId": 480,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 3055,
          "itemPersistId": 22766,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 13335,
          "itemPersistId": 25631,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 11417,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 5202,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 15580,
          "itemPersistId": 9499,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 27085,
          "itemPersistId": 10569,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Onion",
          "persistId": 24125,
          "itemPersistId": 8541,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 596,
          "itemPersistId": 27076,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 30795,
          "itemPersistId": 23450,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Wheat",
          "persistId": 31842,
          "itemPersistId": 2235,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Rice",
          "persistId": 22548,
          "itemPersistId": 25061,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 32587,
          "itemPersistId": 21286,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 17459,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Onion",
          "persistId": 18819,
          "itemPersistId": 28166,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Apple",
          "persistId": 29289,
          "itemPersistId": 25340,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Cearnuk",
          "persistId": 28260,
          "itemPersistId": 29308,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Chapaa",
          "persistId": 29405,
          "itemPersistId": 10548,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleR",
          "persistId": 28222,
          "itemPersistId": 16825,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 19524,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabC",
          "persistId": 22694,
          "itemPersistId": 8343,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabU",
          "persistId": 25026,
          "itemPersistId": 22561,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabR",
          "persistId": 960,
          "itemPersistId": 2818,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 3471,
          "itemPersistId": 28804,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 4425,
          "itemPersistId": 13513,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 8013,
          "itemPersistId": 12075,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 3032,
          "itemPersistId": 10556,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 7136,
          "itemPersistId": 23925,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Onion",
          "persistId": 24189,
          "itemPersistId": 28235,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 9080,
          "itemPersistId": 11233,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 16191,
          "itemPersistId": 23927,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 14386,
          "itemPersistId": 11086,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Ramen",
          "persistId": 820,
          "itemPersistId": 480,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 22170,
          "itemPersistId": 9499,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 11456,
          "itemPersistId": 2934,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 10503,
          "itemPersistId": 30577,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 19421,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 4502,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 29679,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 14283,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 23342,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 237,
          "itemPersistId": 8144,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_SpicyPepper",
          "persistId": 23101,
          "itemPersistId": 10288,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Citrine",
          "persistId": 2539,
          "itemPersistId": 10633,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 19848,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_QuestItem_Reward_LettuceSoup",
          "persistId": 17907,
          "itemPersistId": 1352,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 718,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 2909,
          "itemPersistId": 11086,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 24710,
          "itemPersistId": 23925,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Onion",
          "persistId": 7188,
          "itemPersistId": 28235,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 18622,
          "itemPersistId": 23927,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 13172,
          "itemPersistId": 12075,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 32708,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 12304,
          "itemPersistId": 26671,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_LargemouthBass",
          "persistId": 15378,
          "itemPersistId": 16264,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Yellow_Perch",
          "persistId": 25980,
          "itemPersistId": 21636,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 18407,
          "itemPersistId": 11233,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 9444,
          "itemPersistId": 10556,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Ramen",
          "persistId": 22781,
          "itemPersistId": 480,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 3055,
          "itemPersistId": 22766,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 13335,
          "itemPersistId": 25631,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 11417,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 5202,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 15580,
          "itemPersistId": 9499,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 27085,
          "itemPersistId": 10569,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Onion",
          "persistId": 24125,
          "itemPersistId": 8541,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 596,
          "itemPersistId": 27076,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Tomato",
          "persistId": 30795,
          "itemPersistId": 23450,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Wheat",
          "persistId": 31842,
          "itemPersistId": 2235,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Rice",
          "persistId": 22548,
          "itemPersistId": 25061,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Blueberries",
          "persistId": 32587,
          "itemPersistId": 21286,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 17459,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Onion",
          "persistId": 18819,
          "itemPersistId": 28166,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Jam_Apple",
          "persistId": 29289,
          "itemPersistId": 25340,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Cearnuk",
          "persistId": 28260,
          "itemPersistId": 29308,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Chapaa",
          "persistId": 29405,
          "itemPersistId": 10548,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleR",
          "persistId": 28222,
          "itemPersistId": 16825,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 19524,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabC",
          "persistId": 22694,
          "itemPersistId": 8343,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabU",
          "persistId": 25026,
          "itemPersistId": 22561,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Bug_CrabR",
          "persistId": 960,
          "itemPersistId": 2818,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 3471,
          "itemPersistId": 28804,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 4425,
          "itemPersistId": 13513,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 8013,
          "itemPersistId": 12075,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 3032,
          "itemPersistId": 10556,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Carrot",
          "persistId": 7136,
          "itemPersistId": 23925,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Onion",
          "persistId": 24189,
          "itemPersistId": 28235,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Mushroom",
          "persistId": 9080,
          "itemPersistId": 11233,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 16191,
          "itemPersistId": 23927,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 14386,
          "itemPersistId": 11086,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Ramen",
          "persistId": 820,
          "itemPersistId": 480,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Vegetable_Garlic",
          "persistId": 22170,
          "itemPersistId": 9499,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 11456,
          "itemPersistId": 2934,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 10503,
          "itemPersistId": 30577,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 19421,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 4502,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 29679,
          "itemPersistId": 10249,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 14283,
          "itemPersistId": 29186,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Platinum",
          "persistId": 23342,
          "itemPersistId": 10477,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Cave",
          "persistId": 237,
          "itemPersistId": 8144,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_SpicyPepper",
          "persistId": 23101,
          "itemPersistId": 10288,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Citrine",
          "persistId": 2539,
          "itemPersistId": 10633,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 19848,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 4701,
      "configId": "theblacksmith",
      "className": "BP_Villager_Blacksmith_C",
      "name": "Sifuu",
      "icon": "Sefu_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Material_Antler_T1",
          "persistId": 6344,
          "itemPersistId": 23388,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 24848,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 21853,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Sardine",
          "persistId": 22696,
          "itemPersistId": 24439,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Oily_Anchovy",
          "persistId": 18733,
          "itemPersistId": 19977,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T2",
          "persistId": 28363,
          "itemPersistId": 10916,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Swordfin_Eel",
          "persistId": 28574,
          "itemPersistId": 24615,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 28651,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 9697,
          "itemPersistId": 16540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 25576,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 22142,
          "itemPersistId": 11086,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Carrot",
          "persistId": 5039,
          "itemPersistId": 9756,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Chapaa",
          "persistId": 3189,
          "itemPersistId": 10548,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Cearnuk",
          "persistId": 901,
          "itemPersistId": 29308,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Copper",
          "persistId": 25310,
          "itemPersistId": 20430,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Iron",
          "persistId": 32039,
          "itemPersistId": 31841,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Silver",
          "persistId": 13179,
          "itemPersistId": 10974,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Gold",
          "persistId": 23470,
          "itemPersistId": 30124,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Brick_Stone",
          "persistId": 26280,
          "itemPersistId": 4534,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Copper",
          "persistId": 12659,
          "itemPersistId": 8333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 542,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 2154,
          "itemPersistId": 10249,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 3364,
          "itemPersistId": 29186,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Standard",
          "persistId": 1177,
          "itemPersistId": 21123,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Lethargy",
          "persistId": 18059,
          "itemPersistId": 31021,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Dispel",
          "persistId": 20305,
          "itemPersistId": 1538,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Fireworks_Random",
          "persistId": 19426,
          "itemPersistId": 18623,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 22404,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 27894,
          "itemPersistId": 18206,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 27573,
          "itemPersistId": 2165,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 5790,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 10089,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Garnet",
          "persistId": 24595,
          "itemPersistId": 22480,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Treeclimber",
          "persistId": 26001,
          "itemPersistId": 19716,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T1",
          "persistId": 6344,
          "itemPersistId": 23388,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 24848,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 21853,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Sardine",
          "persistId": 22696,
          "itemPersistId": 24439,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Oily_Anchovy",
          "persistId": 18733,
          "itemPersistId": 19977,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T2",
          "persistId": 28363,
          "itemPersistId": 10916,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Swordfin_Eel",
          "persistId": 28574,
          "itemPersistId": 24615,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 28651,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 9697,
          "itemPersistId": 16540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 25576,
          "itemPersistId": 2292,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Tomato",
          "persistId": 22142,
          "itemPersistId": 11086,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Pickle_Carrot",
          "persistId": 5039,
          "itemPersistId": 9756,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Chapaa",
          "persistId": 3189,
          "itemPersistId": 10548,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Cearnuk",
          "persistId": 901,
          "itemPersistId": 29308,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Copper",
          "persistId": 25310,
          "itemPersistId": 20430,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Iron",
          "persistId": 32039,
          "itemPersistId": 31841,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Silver",
          "persistId": 13179,
          "itemPersistId": 10974,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Gold",
          "persistId": 23470,
          "itemPersistId": 30124,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Brick_Stone",
          "persistId": 26280,
          "itemPersistId": 4534,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Copper",
          "persistId": 12659,
          "itemPersistId": 8333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 542,
          "itemPersistId": 19114,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 2154,
          "itemPersistId": 10249,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 3364,
          "itemPersistId": 29186,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Standard",
          "persistId": 1177,
          "itemPersistId": 21123,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Lethargy",
          "persistId": 18059,
          "itemPersistId": 31021,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Dispel",
          "persistId": 20305,
          "itemPersistId": 1538,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Fireworks_Random",
          "persistId": 19426,
          "itemPersistId": 18623,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 22404,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 27894,
          "itemPersistId": 18206,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 27573,
          "itemPersistId": 2165,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 5790,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 10089,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Garnet",
          "persistId": 24595,
          "itemPersistId": 22480,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Treeclimber",
          "persistId": 26001,
          "itemPersistId": 19716,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 5586,
      "configId": "thewatcher",
      "className": "BP_VillagerTheWatcher_C",
      "name": "Subira",
      "icon": "WT_Subira_Portrait",
      "gifts": [
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 11216,
          "itemPersistId": 4401,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 13833,
          "itemPersistId": 16540,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 6090,
          "itemPersistId": 23423,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 8732,
          "itemPersistId": 23624,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 32275,
          "itemPersistId": 1551,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 7257,
          "itemPersistId": 2292,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 565,
          "itemPersistId": 10556,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 32400,
          "itemPersistId": 13513,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 18700,
          "itemPersistId": 23927,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_FishermansBrew",
          "persistId": 7154,
          "itemPersistId": 3449,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 5562,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 14538,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_ChiliOilWontons",
          "persistId": 15088,
          "itemPersistId": 13164,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Onigiri",
          "persistId": 11541,
          "itemPersistId": 29339,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_SpicyPepper",
          "persistId": 26294,
          "itemPersistId": 10288,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Tteokbbeoki",
          "persistId": 20825,
          "itemPersistId": 30221,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Wood_Magicwood",
          "persistId": 21868,
          "itemPersistId": 19774,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 24857,
          "itemPersistId": 11755,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyE",
          "persistId": 15563,
          "itemPersistId": 2612,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 823,
          "itemPersistId": 3444,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleE",
          "persistId": 25177,
          "itemPersistId": 6189,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaR",
          "persistId": 12527,
          "itemPersistId": 21411,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 26789,
          "itemPersistId": 16540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 28695,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 3297,
          "itemPersistId": 23423,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 22163,
          "itemPersistId": 23624,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 11515,
          "itemPersistId": 1551,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 5180,
          "itemPersistId": 2292,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 20537,
          "itemPersistId": 10556,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 29555,
          "itemPersistId": 23927,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 16104,
          "itemPersistId": 101,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 19727,
          "itemPersistId": 8703,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_FishermansBrew",
          "persistId": 24886,
          "itemPersistId": 3449,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Red-bellied_Piranha",
          "persistId": 30810,
          "itemPersistId": 8904,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Energized_Piranha",
          "persistId": 18900,
          "itemPersistId": 76,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Rainbow_Trout",
          "persistId": 7077,
          "itemPersistId": 9968,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_RadiantSunfish",
          "persistId": 29350,
          "itemPersistId": 13110,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Fish_UnicornFish",
          "persistId": 27313,
          "itemPersistId": 18047,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Enchanted_Pupfish",
          "persistId": 9238,
          "itemPersistId": 4665,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_MutatedAngler",
          "persistId": 2378,
          "itemPersistId": 23498,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 951,
          "itemPersistId": 24126,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 15296,
          "itemPersistId": 22766,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 28007,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 7203,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 4619,
          "itemPersistId": 27076,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Wheat",
          "persistId": 624,
          "itemPersistId": 2235,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Rice",
          "persistId": 29078,
          "itemPersistId": 25061,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 12810,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Hide",
          "persistId": 597,
          "itemPersistId": 28732,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 9086,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Copper",
          "persistId": 24791,
          "itemPersistId": 20430,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Iron",
          "persistId": 380,
          "itemPersistId": 31841,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Silver",
          "persistId": 9195,
          "itemPersistId": 10974,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Gold",
          "persistId": 20096,
          "itemPersistId": 30124,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Copper",
          "persistId": 10327,
          "itemPersistId": 8333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 16928,
          "itemPersistId": 19114,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 2695,
          "itemPersistId": 10249,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 3323,
          "itemPersistId": 29186,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_Glow_Worm",
          "persistId": 23509,
          "itemPersistId": 16106,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Simple",
          "persistId": 28947,
          "itemPersistId": 2598,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Standard",
          "persistId": 24227,
          "itemPersistId": 21123,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_ChiliOilWontons",
          "persistId": 13263,
          "itemPersistId": 13164,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Onigiri",
          "persistId": 10878,
          "itemPersistId": 29339,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_AncientFish",
          "persistId": 7342,
          "itemPersistId": 7202,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_SpicyPepper",
          "persistId": 29210,
          "itemPersistId": 10288,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 8656,
          "itemPersistId": 21628,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Tteokbbeoki",
          "persistId": 9963,
          "itemPersistId": 30221,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 19197,
          "itemPersistId": 13513,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 25781,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 11216,
          "itemPersistId": 4401,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 13833,
          "itemPersistId": 16540,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 6090,
          "itemPersistId": 23423,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 8732,
          "itemPersistId": 23624,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 32275,
          "itemPersistId": 1551,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 7257,
          "itemPersistId": 2292,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 565,
          "itemPersistId": 10556,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 32400,
          "itemPersistId": 13513,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 18700,
          "itemPersistId": 23927,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_FishermansBrew",
          "persistId": 7154,
          "itemPersistId": 3449,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 5562,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 14538,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_ChiliOilWontons",
          "persistId": 15088,
          "itemPersistId": 13164,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Onigiri",
          "persistId": 11541,
          "itemPersistId": 29339,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Crop_SpicyPepper",
          "persistId": 26294,
          "itemPersistId": 10288,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Tteokbbeoki",
          "persistId": 20825,
          "itemPersistId": 30221,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Wood_Magicwood",
          "persistId": 21868,
          "itemPersistId": 19774,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 24857,
          "itemPersistId": 11755,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyE",
          "persistId": 15563,
          "itemPersistId": 2612,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_DragonflyR",
          "persistId": 823,
          "itemPersistId": 3444,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleE",
          "persistId": 25177,
          "itemPersistId": 6189,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CicadaR",
          "persistId": 12527,
          "itemPersistId": 21411,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 26789,
          "itemPersistId": 16540,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 28695,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 3297,
          "itemPersistId": 23423,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Mushroom",
          "persistId": 22163,
          "itemPersistId": 23624,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 11515,
          "itemPersistId": 1551,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 5180,
          "itemPersistId": 2292,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Hearty",
          "persistId": 20537,
          "itemPersistId": 10556,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_VegetableSoup_Potato",
          "persistId": 29555,
          "itemPersistId": 23927,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 16104,
          "itemPersistId": 101,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 19727,
          "itemPersistId": 8703,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_FishermansBrew",
          "persistId": 24886,
          "itemPersistId": 3449,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Red-bellied_Piranha",
          "persistId": 30810,
          "itemPersistId": 8904,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Energized_Piranha",
          "persistId": 18900,
          "itemPersistId": 76,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Rainbow_Trout",
          "persistId": 7077,
          "itemPersistId": 9968,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_RadiantSunfish",
          "persistId": 29350,
          "itemPersistId": 13110,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Fish_UnicornFish",
          "persistId": 27313,
          "itemPersistId": 18047,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Enchanted_Pupfish",
          "persistId": 9238,
          "itemPersistId": 4665,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_MutatedAngler",
          "persistId": 2378,
          "itemPersistId": 23498,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 951,
          "itemPersistId": 24126,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 15296,
          "itemPersistId": 22766,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 28007,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 7203,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Potato",
          "persistId": 4619,
          "itemPersistId": 27076,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Wheat",
          "persistId": 624,
          "itemPersistId": 2235,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Rice",
          "persistId": 29078,
          "itemPersistId": 25061,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 12810,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Hide",
          "persistId": 597,
          "itemPersistId": 28732,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 9086,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Copper",
          "persistId": 24791,
          "itemPersistId": 20430,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Iron",
          "persistId": 380,
          "itemPersistId": 31841,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Silver",
          "persistId": 9195,
          "itemPersistId": 10974,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Gold",
          "persistId": 20096,
          "itemPersistId": 30124,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Copper",
          "persistId": 10327,
          "itemPersistId": 8333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Iron",
          "persistId": 16928,
          "itemPersistId": 19114,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 2695,
          "itemPersistId": 10249,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 3323,
          "itemPersistId": 29186,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_Glow_Worm",
          "persistId": 23509,
          "itemPersistId": 16106,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Simple",
          "persistId": 28947,
          "itemPersistId": 2598,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Ammo_Arrow_Standard",
          "persistId": 24227,
          "itemPersistId": 21123,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_ChiliOilWontons",
          "persistId": 13263,
          "itemPersistId": 13164,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Onigiri",
          "persistId": 10878,
          "itemPersistId": 29339,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_AncientFish",
          "persistId": 7342,
          "itemPersistId": 7202,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_SpicyPepper",
          "persistId": 29210,
          "itemPersistId": 10288,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 8656,
          "itemPersistId": 21628,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Tteokbbeoki",
          "persistId": 9963,
          "itemPersistId": 30221,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 19197,
          "itemPersistId": 13513,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Congee",
          "persistId": 25781,
          "itemPersistId": 2100,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 13260,
      "configId": "thealchemist",
      "className": "BP_Villager_Tamala_C",
      "name": "Tamala",
      "icon": "Tamala_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 8043,
          "itemPersistId": 24126,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 8631,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 30643,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_EmeraldCarpet",
          "persistId": 6559,
          "itemPersistId": 32155,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 25817,
          "itemPersistId": 18440,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 20108,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MothC",
          "persistId": 21136,
          "itemPersistId": 9443,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MothU",
          "persistId": 2599,
          "itemPersistId": 19785,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_UnicornFish",
          "persistId": 20498,
          "itemPersistId": 18047,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketC",
          "persistId": 23703,
          "itemPersistId": 6838,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketU",
          "persistId": 344,
          "itemPersistId": 84174,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 1719,
          "itemPersistId": 11819,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_FairyCarp",
          "persistId": 424,
          "itemPersistId": 21923,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Flametongue_Ray",
          "persistId": 32219,
          "itemPersistId": 27201,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Enchanted_Pupfish",
          "persistId": 22429,
          "itemPersistId": 4665,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 24309,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 19466,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 30882,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_RadiantSunfish",
          "persistId": 24515,
          "itemPersistId": 13110,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 19027,
          "itemPersistId": 28023,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 14011,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 2409,
          "itemPersistId": 22153,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 13600,
          "itemPersistId": 22766,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 17504,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 9825,
          "itemPersistId": 9498,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 17719,
          "itemPersistId": 30577,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisTriangle",
          "persistId": 11189,
          "itemPersistId": 31477,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketR",
          "persistId": 26390,
          "itemPersistId": 32012,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleE",
          "persistId": 24979,
          "itemPersistId": 6189,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisE",
          "persistId": 15456,
          "itemPersistId": 14408,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisR2",
          "persistId": 23840,
          "itemPersistId": 9423,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeU",
          "persistId": 30620,
          "itemPersistId": 14927,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeR1",
          "persistId": 16737,
          "itemPersistId": 2071,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 14322,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 713,
          "itemPersistId": 18264,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_FairyCarp",
          "persistId": 14975,
          "itemPersistId": 21923,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Cloudfish",
          "persistId": 31298,
          "itemPersistId": 14951,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Giant_Goldfish",
          "persistId": 4903,
          "itemPersistId": 13562,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_RadiantSunfish",
          "persistId": 10651,
          "itemPersistId": 13110,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Energized_Piranha",
          "persistId": 17861,
          "itemPersistId": 76,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Willow_Lamprey",
          "persistId": 2537,
          "itemPersistId": 24281,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Thundering_Eel",
          "persistId": 3586,
          "itemPersistId": 4505,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Kenjis_Carp",
          "persistId": 216,
          "itemPersistId": 10989,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Flametongue_Ray",
          "persistId": 6366,
          "itemPersistId": 27201,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Stormray",
          "persistId": 30054,
          "itemPersistId": 26084,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Swordfin_Eel",
          "persistId": 20341,
          "itemPersistId": 24615,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_BlueMarlin",
          "persistId": 6660,
          "itemPersistId": 8184,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_UnicornFish",
          "persistId": 30992,
          "itemPersistId": 18047,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Blue_Spotted_Ray",
          "persistId": 1268,
          "itemPersistId": 30606,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 30365,
          "itemPersistId": 28023,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Midnight_Paddlefish",
          "persistId": 28758,
          "itemPersistId": 850,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Giant_Kilima_Stingray",
          "persistId": 11008,
          "itemPersistId": 12832,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_AncientFish",
          "persistId": 32478,
          "itemPersistId": 7202,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_MutatedAngler",
          "persistId": 5938,
          "itemPersistId": 23498,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Hypnotic_Moray",
          "persistId": 9169,
          "itemPersistId": 7783,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 20561,
          "itemPersistId": 24126,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 6695,
          "itemPersistId": 2165,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 119,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 17506,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Amethyst",
          "persistId": 8121,
          "itemPersistId": 9147,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 8043,
          "itemPersistId": 24126,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 8631,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 30643,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_EmeraldCarpet",
          "persistId": 6559,
          "itemPersistId": 32155,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 25817,
          "itemPersistId": 18440,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 20108,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MothC",
          "persistId": 21136,
          "itemPersistId": 9443,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MothU",
          "persistId": 2599,
          "itemPersistId": 19785,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_UnicornFish",
          "persistId": 20498,
          "itemPersistId": 18047,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketC",
          "persistId": 23703,
          "itemPersistId": 6838,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketU",
          "persistId": 344,
          "itemPersistId": 84174,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 1719,
          "itemPersistId": 11819,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_FairyCarp",
          "persistId": 424,
          "itemPersistId": 21923,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Flametongue_Ray",
          "persistId": 32219,
          "itemPersistId": 27201,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Enchanted_Pupfish",
          "persistId": 22429,
          "itemPersistId": 4665,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Fur",
          "persistId": 24309,
          "itemPersistId": 30911,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 19466,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 30882,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_RadiantSunfish",
          "persistId": 24515,
          "itemPersistId": 13110,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 19027,
          "itemPersistId": 28023,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 14011,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Moss_DragonsBeard",
          "persistId": 2409,
          "itemPersistId": 22153,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 13600,
          "itemPersistId": 22766,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_HeatRoot",
          "persistId": 17504,
          "itemPersistId": 18206,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Mushroom_Brightshroom",
          "persistId": 9825,
          "itemPersistId": 9498,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Weed_Knapweed",
          "persistId": 17719,
          "itemPersistId": 30577,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisTriangle",
          "persistId": 11189,
          "itemPersistId": 31477,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketR",
          "persistId": 26390,
          "itemPersistId": 32012,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeetleE",
          "persistId": 24979,
          "itemPersistId": 6189,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisE",
          "persistId": 15456,
          "itemPersistId": 14408,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_MantisR2",
          "persistId": 23840,
          "itemPersistId": 9423,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeU",
          "persistId": 30620,
          "itemPersistId": 14927,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_PedeR1",
          "persistId": 16737,
          "itemPersistId": 2071,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 14322,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 713,
          "itemPersistId": 18264,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_FairyCarp",
          "persistId": 14975,
          "itemPersistId": 21923,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Cloudfish",
          "persistId": 31298,
          "itemPersistId": 14951,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Giant_Goldfish",
          "persistId": 4903,
          "itemPersistId": 13562,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_RadiantSunfish",
          "persistId": 10651,
          "itemPersistId": 13110,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Energized_Piranha",
          "persistId": 17861,
          "itemPersistId": 76,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Willow_Lamprey",
          "persistId": 2537,
          "itemPersistId": 24281,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Thundering_Eel",
          "persistId": 3586,
          "itemPersistId": 4505,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Kenjis_Carp",
          "persistId": 216,
          "itemPersistId": 10989,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Flametongue_Ray",
          "persistId": 6366,
          "itemPersistId": 27201,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Stormray",
          "persistId": 30054,
          "itemPersistId": 26084,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Swordfin_Eel",
          "persistId": 20341,
          "itemPersistId": 24615,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_BlueMarlin",
          "persistId": 6660,
          "itemPersistId": 8184,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_UnicornFish",
          "persistId": 30992,
          "itemPersistId": 18047,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Blue_Spotted_Ray",
          "persistId": 1268,
          "itemPersistId": 30606,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 30365,
          "itemPersistId": 28023,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Midnight_Paddlefish",
          "persistId": 28758,
          "itemPersistId": 850,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Giant_Kilima_Stingray",
          "persistId": 11008,
          "itemPersistId": 12832,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_AncientFish",
          "persistId": 32478,
          "itemPersistId": 7202,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_MutatedAngler",
          "persistId": 5938,
          "itemPersistId": 23498,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Hypnotic_Moray",
          "persistId": 9169,
          "itemPersistId": 7783,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Fish_Voidray",
          "persistId": 20561,
          "itemPersistId": 24126,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 6695,
          "itemPersistId": 2165,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 119,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 17506,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Amethyst",
          "persistId": 8121,
          "itemPersistId": 9147,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 500,
      "configId": "theplumehound",
      "className": "BP_Villager_Tau_C",
      "name": "Tau",
      "icon": "WT_Tau_portrait",
      "gifts": [
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 10493,
          "itemPersistId": 10569,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 13728,
          "itemPersistId": 16540,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_Hide",
          "persistId": 24943,
          "itemPersistId": 28732,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 12825,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyC",
          "persistId": 7467,
          "itemPersistId": 8256,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyU",
          "persistId": 20600,
          "itemPersistId": 12447,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyR",
          "persistId": 30202,
          "itemPersistId": 30155,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyE",
          "persistId": 12393,
          "itemPersistId": 2612,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketC",
          "persistId": 1191,
          "itemPersistId": 6838,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketU",
          "persistId": 12280,
          "itemPersistId": 84174,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketR",
          "persistId": 24026,
          "itemPersistId": 32012,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 3301,
          "itemPersistId": 26975,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 15645,
          "itemPersistId": 1551,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 32288,
          "itemPersistId": 2292,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_CalicoKoi",
          "persistId": 26882,
          "itemPersistId": 25294,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_CantankerousKoi",
          "persistId": 30154,
          "itemPersistId": 13687,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Scarlet_Koi",
          "persistId": 14411,
          "itemPersistId": 7829,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_SilverSalmon",
          "persistId": 13237,
          "itemPersistId": 11139,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_GoldenSalmon",
          "persistId": 6488,
          "itemPersistId": 20012,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Oily_Anchovy",
          "persistId": 30162,
          "itemPersistId": 19977,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 25907,
          "itemPersistId": 2934,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Meat_Oyster",
          "persistId": 31203,
          "itemPersistId": 26948,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 17358,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 31944,
          "itemPersistId": 16540,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 16791,
          "itemPersistId": 23423,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_PrismTrout",
          "persistId": 18471,
          "itemPersistId": 8924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 2286,
          "itemPersistId": 28023,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 3815,
          "itemPersistId": 10569,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 4864,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 14300,
          "itemPersistId": 21550,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 7236,
          "itemPersistId": 13175,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_SalisburyChapaa",
          "persistId": 11759,
          "itemPersistId": 7223,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 650,
          "itemPersistId": 2057,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 27654,
          "itemPersistId": 12075,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Chapaa",
          "persistId": 32092,
          "itemPersistId": 10548,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Cearnuk",
          "persistId": 5360,
          "itemPersistId": 29308,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T1",
          "persistId": 3231,
          "itemPersistId": 13798,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T2",
          "persistId": 18110,
          "itemPersistId": 19180,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T3",
          "persistId": 24464,
          "itemPersistId": 10606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 5818,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T1",
          "persistId": 7178,
          "itemPersistId": 23388,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T2",
          "persistId": 6840,
          "itemPersistId": 10916,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 7470,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Softwood",
          "persistId": 19675,
          "itemPersistId": 16184,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Hardwood",
          "persistId": 19618,
          "itemPersistId": 8019,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 17066,
          "itemPersistId": 11755,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Treeclimber",
          "persistId": 11085,
          "itemPersistId": 19716,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 10493,
          "itemPersistId": 10569,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 13728,
          "itemPersistId": 16540,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Material_Hide",
          "persistId": 24943,
          "itemPersistId": 28732,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 12825,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyC",
          "persistId": 7467,
          "itemPersistId": 8256,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyU",
          "persistId": 20600,
          "itemPersistId": 12447,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyR",
          "persistId": 30202,
          "itemPersistId": 30155,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_ButterflyE",
          "persistId": 12393,
          "itemPersistId": 2612,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketC",
          "persistId": 1191,
          "itemPersistId": 6838,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketU",
          "persistId": 12280,
          "itemPersistId": 84174,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Bug_CricketR",
          "persistId": 24026,
          "itemPersistId": 32012,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 3301,
          "itemPersistId": 26975,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 15645,
          "itemPersistId": 1551,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Steak",
          "persistId": 32288,
          "itemPersistId": 2292,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_CalicoKoi",
          "persistId": 26882,
          "itemPersistId": 25294,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_CantankerousKoi",
          "persistId": 30154,
          "itemPersistId": 13687,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Scarlet_Koi",
          "persistId": 14411,
          "itemPersistId": 7829,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_SilverSalmon",
          "persistId": 13237,
          "itemPersistId": 11139,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_GoldenSalmon",
          "persistId": 6488,
          "itemPersistId": 20012,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Oily_Anchovy",
          "persistId": 30162,
          "itemPersistId": 19977,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 25907,
          "itemPersistId": 2934,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Meat_Oyster",
          "persistId": 31203,
          "itemPersistId": 26948,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 17358,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Meat",
          "persistId": 31944,
          "itemPersistId": 16540,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 16791,
          "itemPersistId": 23423,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_PrismTrout",
          "persistId": 18471,
          "itemPersistId": 8924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Shimmerfin",
          "persistId": 2286,
          "itemPersistId": 28023,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Carrot",
          "persistId": 3815,
          "itemPersistId": 10569,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Crop_Apple",
          "persistId": 4864,
          "itemPersistId": 18264,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 14300,
          "itemPersistId": 21550,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 7236,
          "itemPersistId": 13175,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_SalisburyChapaa",
          "persistId": 11759,
          "itemPersistId": 7223,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_ChapaaMasala",
          "persistId": 650,
          "itemPersistId": 2057,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Stew_CearnukNoodle",
          "persistId": 27654,
          "itemPersistId": 12075,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Chapaa",
          "persistId": 32092,
          "itemPersistId": 10548,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Cearnuk",
          "persistId": 5360,
          "itemPersistId": 29308,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T1",
          "persistId": 3231,
          "itemPersistId": 13798,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T2",
          "persistId": 18110,
          "itemPersistId": 19180,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Tail_T3",
          "persistId": 24464,
          "itemPersistId": 10606,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Leather",
          "persistId": 5818,
          "itemPersistId": 1826,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T1",
          "persistId": 7178,
          "itemPersistId": 23388,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T2",
          "persistId": 6840,
          "itemPersistId": 10916,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 7470,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Softwood",
          "persistId": 19675,
          "itemPersistId": 16184,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Hardwood",
          "persistId": 19618,
          "itemPersistId": 8019,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 17066,
          "itemPersistId": 11755,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Product_Meat_Treeclimber",
          "persistId": 11085,
          "itemPersistId": 19716,
          "rewardLevel": "Like"
        }
      ]
    },
    {
      "persistId": 19881,
      "configId": "thecarpenter",
      "className": "BP_Villager_Tish_C",
      "name": "Tish",
      "icon": "Tish_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 19568,
          "itemPersistId": 22766,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 29725,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 21154,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Softwood",
          "persistId": 9699,
          "itemPersistId": 16184,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Hardwood",
          "persistId": 16804,
          "itemPersistId": 8019,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 22505,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Clay",
          "persistId": 20081,
          "itemPersistId": 10086,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 24672,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Dawnray",
          "persistId": 19225,
          "itemPersistId": 25177,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Bulb",
          "persistId": 4687,
          "itemPersistId": 4458,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Acorn",
          "persistId": 20188,
          "itemPersistId": 20263,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Pinecone",
          "persistId": 16043,
          "itemPersistId": 22034,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Samara",
          "persistId": 23477,
          "itemPersistId": 20333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Juniper",
          "persistId": 32679,
          "itemPersistId": 31632,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 8528,
          "itemPersistId": 11755,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 22469,
          "itemPersistId": 22676,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 22087,
          "itemPersistId": 21902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 22668,
          "itemPersistId": 18642,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 28177,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 22393,
          "itemPersistId": 13175,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_SundropLily",
          "persistId": 24716,
          "itemPersistId": 20533,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 27617,
          "itemPersistId": 19418,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_BriarDaisy",
          "persistId": 13029,
          "itemPersistId": 26021,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Shell",
          "persistId": 19651,
          "itemPersistId": 4843,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 29849,
          "itemPersistId": 14176,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 5689,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 14756,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 8997,
          "itemPersistId": 25631,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 10443,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 1425,
          "itemPersistId": 14204,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 25291,
          "itemPersistId": 21902,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 7755,
          "itemPersistId": 18642,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 21494,
          "itemPersistId": 11907,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 499,
          "itemPersistId": 21550,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 15877,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 27087,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Quartz",
          "persistId": 17322,
          "itemPersistId": 22717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_PetitFives",
          "persistId": 9636,
          "itemPersistId": 29904,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SpiceSprout",
          "persistId": 19568,
          "itemPersistId": 22766,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_HeartDropLily",
          "persistId": 29725,
          "itemPersistId": 7685,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 21154,
          "itemPersistId": 18440,
          "rewardLevel": "Dislike"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Softwood",
          "persistId": 9699,
          "itemPersistId": 16184,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Hardwood",
          "persistId": 16804,
          "itemPersistId": 8019,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_RomanceItem_BoxofChocolates",
          "persistId": 22505,
          "itemPersistId": 26671,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Rock_Clay",
          "persistId": 20081,
          "itemPersistId": 10086,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 24672,
          "itemPersistId": 21550,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Dawnray",
          "persistId": 19225,
          "itemPersistId": 25177,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Glass_Bulb",
          "persistId": 4687,
          "itemPersistId": 4458,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Acorn",
          "persistId": 20188,
          "itemPersistId": 20263,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Pinecone",
          "persistId": 16043,
          "itemPersistId": 22034,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Seed_Samara",
          "persistId": 23477,
          "itemPersistId": 20333,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Seed_Juniper",
          "persistId": 32679,
          "itemPersistId": 31632,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 8528,
          "itemPersistId": 11755,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 22469,
          "itemPersistId": 22676,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 22087,
          "itemPersistId": 21902,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 22668,
          "itemPersistId": 18642,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 28177,
          "itemPersistId": 11907,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 22393,
          "itemPersistId": 13175,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_SundropLily",
          "persistId": 24716,
          "itemPersistId": 20533,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_CrystalLakeLotus",
          "persistId": 27617,
          "itemPersistId": 19418,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Flower_BriarDaisy",
          "persistId": 13029,
          "itemPersistId": 26021,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Shell",
          "persistId": 19651,
          "itemPersistId": 4843,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 29849,
          "itemPersistId": 14176,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 5689,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 14756,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_SweetLeaves",
          "persistId": 8997,
          "itemPersistId": 25631,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 10443,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Macaron",
          "persistId": 1425,
          "itemPersistId": 14204,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Berry",
          "persistId": 25291,
          "itemPersistId": 21902,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_Pie_Apple",
          "persistId": 7755,
          "itemPersistId": 18642,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_CelebrationCake",
          "persistId": 21494,
          "itemPersistId": 11907,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Trash_WagonWheel",
          "persistId": 499,
          "itemPersistId": 21550,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 15877,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 27087,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Quartz",
          "persistId": 17322,
          "itemPersistId": 22717,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dessert_PetitFives",
          "persistId": 9636,
          "itemPersistId": 29904,
          "rewardLevel": "Love"
        }
      ]
    },
    {
      "persistId": 6680,
      "configId": "thesalesman",
      "className": "BP_Villager_Zeki_C",
      "name": "Zeki",
      "icon": "Zeki_Icon",
      "gifts": [
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 7684,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 172,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 9791,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_GoldenSalmon",
          "persistId": 17071,
          "itemPersistId": 20012,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Platinum_Chad",
          "persistId": 725,
          "itemPersistId": 10169,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_SilverSalmon",
          "persistId": 26464,
          "itemPersistId": 11139,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 9719,
          "itemPersistId": 11755,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 14564,
          "itemPersistId": 8703,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 31244,
          "itemPersistId": 101,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 28844,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 20719,
          "itemPersistId": 10249,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 2819,
          "itemPersistId": 29186,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 12606,
          "itemPersistId": 22676,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 19951,
          "itemPersistId": 11819,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 898,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 23815,
          "itemPersistId": 23423,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 18986,
          "itemPersistId": 13513,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 7260,
          "itemPersistId": 28804,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 1255,
          "itemPersistId": 26975,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 27153,
          "itemPersistId": 1551,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Silvery_Minnow",
          "persistId": 27041,
          "itemPersistId": 15046,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 31613,
          "itemPersistId": 14176,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 26470,
          "itemPersistId": 2934,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Silver",
          "persistId": 1813,
          "itemPersistId": 10974,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Gold",
          "persistId": 3338,
          "itemPersistId": 30124,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 29169,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisTriangle",
          "persistId": 976,
          "itemPersistId": 31477,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeeR",
          "persistId": 4517,
          "itemPersistId": 24581,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 10240,
          "itemPersistId": 18440,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 5569,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 19057,
          "itemPersistId": 4401,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 18575,
          "itemPersistId": 13513,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 7812,
          "itemPersistId": 28804,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 4782,
          "itemPersistId": 26975,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 24388,
          "itemPersistId": 1551,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 7346,
          "itemPersistId": 101,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 24451,
          "itemPersistId": 8703,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 14253,
          "itemPersistId": 21628,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 5496,
          "itemPersistId": 13175,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 30600,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 27257,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 16807,
          "itemPersistId": 21628,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_CrabGumbo",
          "persistId": 29428,
          "itemPersistId": 14608,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_FishTacos",
          "persistId": 30934,
          "itemPersistId": 21506,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Citrine",
          "persistId": 25347,
          "itemPersistId": 10633,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_OystersAkwinduu",
          "persistId": 16497,
          "itemPersistId": 13767,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 7684,
          "itemPersistId": 9815,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 172,
          "itemPersistId": 172,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Universal_Gift_The_Founders_Boot",
          "persistId": 9791,
          "itemPersistId": 32125,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_GoldenSalmon",
          "persistId": 17071,
          "itemPersistId": 20012,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Fish_Platinum_Chad",
          "persistId": 725,
          "itemPersistId": 10169,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_SilverSalmon",
          "persistId": 26464,
          "itemPersistId": 11139,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Wood_Plank_Magicwood",
          "persistId": 9719,
          "itemPersistId": 11755,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 14564,
          "itemPersistId": 8703,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 31244,
          "itemPersistId": 101,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Forage_Spice_DariCloves",
          "persistId": 28844,
          "itemPersistId": 2165,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Silver",
          "persistId": 20719,
          "itemPersistId": 10249,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Bar_Gold",
          "persistId": 2819,
          "itemPersistId": 29186,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_SilkThread",
          "persistId": 12606,
          "itemPersistId": 22676,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Silk",
          "persistId": 19951,
          "itemPersistId": 11819,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 898,
          "itemPersistId": 4401,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Oyster",
          "persistId": 23815,
          "itemPersistId": 23423,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 18986,
          "itemPersistId": 13513,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 7260,
          "itemPersistId": 28804,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 1255,
          "itemPersistId": 26975,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 27153,
          "itemPersistId": 1551,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Fish_Silvery_Minnow",
          "persistId": 27041,
          "itemPersistId": 15046,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Coral",
          "persistId": 31613,
          "itemPersistId": 14176,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Forage_Beach_Oyster",
          "persistId": 26470,
          "itemPersistId": 2934,
          "rewardLevel": "Like"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Silver",
          "persistId": 1813,
          "itemPersistId": 10974,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Ore_Gold",
          "persistId": 3338,
          "itemPersistId": 30124,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Material_Antler_T3",
          "persistId": 29169,
          "itemPersistId": 25924,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisTriangle",
          "persistId": 976,
          "itemPersistId": 31477,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Bug_BeeR",
          "persistId": 4517,
          "itemPersistId": 24581,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Questitem_ZekisFlyer",
          "persistId": 10240,
          "itemPersistId": 18440,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Cooking_Failure",
          "persistId": 5569,
          "itemPersistId": 27611,
          "rewardLevel": "Hate"
        },
        {
          "objectId": "DA_ItemType_C_Grilled_Fish",
          "persistId": 19057,
          "itemPersistId": 4401,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Fish",
          "persistId": 18575,
          "itemPersistId": 13513,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Stew_Bouilbaisse",
          "persistId": 7812,
          "itemPersistId": 28804,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Catfish",
          "persistId": 4782,
          "itemPersistId": 26975,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Dinner_Trout",
          "persistId": 24388,
          "itemPersistId": 1551,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Sashimi",
          "persistId": 7346,
          "itemPersistId": 101,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Sushi",
          "persistId": 24451,
          "itemPersistId": 8703,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 14253,
          "itemPersistId": 21628,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Trash_ShipFragments",
          "persistId": 5496,
          "itemPersistId": 13175,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl",
          "persistId": 30600,
          "itemPersistId": 9815,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_Forage_Crystal_Pearl_Green",
          "persistId": 27257,
          "itemPersistId": 172,
          "rewardLevel": "Neutral"
        },
        {
          "objectId": "DA_ItemType_C_Poke",
          "persistId": 16807,
          "itemPersistId": 21628,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_CrabGumbo",
          "persistId": 29428,
          "itemPersistId": 14608,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_FishTacos",
          "persistId": 30934,
          "itemPersistId": 21506,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_Mineral_Starstone_Citrine",
          "persistId": 25347,
          "itemPersistId": 10633,
          "rewardLevel": "Love"
        },
        {
          "objectId": "DA_ItemType_C_OystersAkwinduu",
          "persistId": 16497,
          "itemPersistId": 13767,
          "rewardLevel": "Love"
        }
      ]
    }
  ]
  ;
