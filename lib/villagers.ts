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
    persistId: 13337,
    configId: "theinnkeeper",
    className: "BP_VillagerTheInnKeeper_C",
    name: "Ashura",
    icon: "Ashura_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_StripedSturgeon",
        persistId: 25166,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Striped_Dace",
        persistId: 371,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stickleback",
        persistId: 25351,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22034,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 20263,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 31632,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 20333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 8019,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 16184,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 3449,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 20654,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 10717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 11139,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 20012,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 4484,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 8924,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 9968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 4458,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_QuestReward_CenturyEgg",
        persistId: 19401,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_CrabPotPie",
        persistId: 2822,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Onyx",
        persistId: 5568,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_StripedSturgeon",
        persistId: 25166,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Striped_Dace",
        persistId: 371,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stickleback",
        persistId: 25351,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22034,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 20263,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 31632,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 20333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 8019,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 16184,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 3449,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 20654,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 10717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 11139,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 20012,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 4484,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 8924,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 9968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 4458,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_QuestReward_CenturyEgg",
        persistId: 19401,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_CrabPotPie",
        persistId: 2822,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Onyx",
        persistId: 5568,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
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
        persistId: 12447,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 8256,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 84174,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 6838,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleU",
        persistId: 19778,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleC",
        persistId: 17535,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 5603,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 6055,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeU",
        persistId: 17882,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaC",
        persistId: 15761,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaU",
        persistId: 16599,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisU",
        persistId: 2002,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR1",
        persistId: 11071,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeU",
        persistId: 14927,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR1",
        persistId: 2071,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR2",
        persistId: 18323,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 24914,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailR",
        persistId: 21362,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 10633,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29904,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 12447,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 8256,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 84174,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 6838,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleU",
        persistId: 19778,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleC",
        persistId: 17535,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 5603,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 6055,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeU",
        persistId: 17882,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaC",
        persistId: 15761,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaU",
        persistId: 16599,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisU",
        persistId: 2002,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR1",
        persistId: 11071,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeU",
        persistId: 14927,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR1",
        persistId: 2071,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR2",
        persistId: 18323,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 24914,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailR",
        persistId: 21362,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 10633,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29904,
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
        persistId: 27076,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 8541,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 2235,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 9968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Orange_Bluegill",
        persistId: 28454,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rosy_Bitterling",
        persistId: 17484,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 480,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 13534,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 10317,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 13736,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Carrot",
        persistId: 32088,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Onion",
        persistId: 1742,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 7666,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Potato",
        persistId: 15412,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 6243,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 1951,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 29699,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 22124,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 16451,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 17516,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 13240,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 30376,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 25061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 32012,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Corn",
        persistId: 28649,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_SpicyPepper",
        persistId: 16272,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Sapphire",
        persistId: 26959,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 8541,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 2235,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 9968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Orange_Bluegill",
        persistId: 28454,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rosy_Bitterling",
        persistId: 17484,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 480,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 13534,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 10317,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 13736,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Carrot",
        persistId: 32088,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Onion",
        persistId: 1742,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 7666,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Potato",
        persistId: 15412,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 6243,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 1951,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 29699,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 22124,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 16451,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 17516,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 13240,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 30376,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 25061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 32012,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Corn",
        persistId: 28649,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_SpicyPepper",
        persistId: 16272,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Sapphire",
        persistId: 26959,
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
        persistId: 25631,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Kilima_Redfin",
        persistId: 18008,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Crucian_Carp",
        persistId: 15830,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 7783,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22034,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 20533,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 26021,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 32155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 4843,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Carrot",
        persistId: 9756,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 10889,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 4458,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugC",
        persistId: 27630,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugR",
        persistId: 22520,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 29339,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Aquamarine",
        persistId: 3753,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 13767,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Kilima_Redfin",
        persistId: 18008,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Crucian_Carp",
        persistId: 15830,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 7783,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22034,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 20533,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 26021,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 32155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 4843,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Carrot",
        persistId: 9756,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 10889,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 4458,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugC",
        persistId: 27630,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugR",
        persistId: 22520,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 29339,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Aquamarine",
        persistId: 3753,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 13767,
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
        persistId: 10569,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 26895,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 20333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 31632,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 28235,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 20533,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 8541,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 2235,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 25061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 25340,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Tomato",
        persistId: 10061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 13736,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Carrot",
        persistId: 32088,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Onion",
        persistId: 1742,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Potato",
        persistId: 15412,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 6243,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 1951,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 29699,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 22717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 26895,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 20333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 31632,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 28235,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 20533,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 8541,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 2235,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 25061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 25340,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Tomato",
        persistId: 10061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 13736,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Carrot",
        persistId: 32088,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Onion",
        persistId: 1742,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Potato",
        persistId: 15412,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 6243,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 1951,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 29699,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 22717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
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
        persistId: 17516,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 13240,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 22124,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 10317,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 13736,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 25294,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 4484,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Orange_Bluegill",
        persistId: 28454,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 7829,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 13687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 13562,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 20654,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 10717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Rosy_Bitterling",
        persistId: 17484,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 9968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 29699,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 30376,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 16451,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 10086,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 10086,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeR",
        persistId: 24581,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 8343,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 2818,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 22561,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugU",
        persistId: 10028,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugR",
        persistId: 13596,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ShepardsPie",
        persistId: 25399,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 22480,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 19716,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 17516,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 13240,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 22124,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 10317,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 13736,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 25294,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 4484,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Orange_Bluegill",
        persistId: 28454,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 7829,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 13687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 13562,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 20654,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 10717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Rosy_Bitterling",
        persistId: 17484,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 9968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 29699,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 30376,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 16451,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 10086,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 10086,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeR",
        persistId: 24581,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 8343,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 2818,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 22561,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugU",
        persistId: 10028,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugR",
        persistId: 13596,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ShepardsPie",
        persistId: 25399,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 22480,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 19716,
        rewardLevel: "Like",
      },
    ],
  },
  {
    persistId: 3801,
    configId: "fisherman",
    className: "BP_VillagerFisherman_C",
    name: "Einar",
    icon: "Einar_Icon",
    gifts: [
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 3449,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_Worm",
        persistId: 5257,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Gillyfin",
        persistId: 8029,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mudminnow",
        persistId: 12920,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 431,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_Glow_Worm",
        persistId: 16106,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 8924,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Stone",
        persistId: 15525,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Small",
        persistId: 24684,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Large",
        persistId: 30449,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Lumpy",
        persistId: 8706,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Smooth",
        persistId: 15715,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Red",
        persistId: 7226,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Blue",
        persistId: 6326,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Purple",
        persistId: 5228,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Yellow",
        persistId: 22838,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Green",
        persistId: 197,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Orange",
        persistId: 3907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 21923,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mirror_Carp",
        persistId: 8000,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mottled_Gobi",
        persistId: 2365,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 14951,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SpottedBullhead",
        persistId: 31374,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 11139,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Striped_Dace",
        persistId: 371,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellow_Perch",
        persistId: 21636,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Silvery_Minnow",
        persistId: 15046,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 8904,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RibbontailRay",
        persistId: 10747,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 13110,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Kilima_Grayling",
        persistId: 16265,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Fathead_Minnow",
        persistId: 10045,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Stormray",
        persistId: 26084,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 18047,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cactus_Moray",
        persistId: 130,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Blue_Spotted_Ray",
        persistId: 30606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 4665,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 8343,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 2818,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 22561,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 24914,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 8343,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 22561,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 2818,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 32155,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 7202,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 3449,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_Worm",
        persistId: 5257,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Gillyfin",
        persistId: 8029,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mudminnow",
        persistId: 12920,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 431,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_Glow_Worm",
        persistId: 16106,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 8924,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Stone",
        persistId: 15525,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Small",
        persistId: 24684,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Large",
        persistId: 30449,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Lumpy",
        persistId: 8706,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Smooth",
        persistId: 15715,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Red",
        persistId: 7226,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Blue",
        persistId: 6326,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Purple",
        persistId: 5228,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Yellow",
        persistId: 22838,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Green",
        persistId: 197,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Founditem_ShinyPebble_Orange",
        persistId: 3907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 21923,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mirror_Carp",
        persistId: 8000,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Mottled_Gobi",
        persistId: 2365,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 14951,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SpottedBullhead",
        persistId: 31374,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 11139,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Striped_Dace",
        persistId: 371,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellow_Perch",
        persistId: 21636,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Silvery_Minnow",
        persistId: 15046,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 8904,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RibbontailRay",
        persistId: 10747,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 13110,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Kilima_Grayling",
        persistId: 16265,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Fathead_Minnow",
        persistId: 10045,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Stormray",
        persistId: 26084,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 18047,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cactus_Moray",
        persistId: 130,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Blue_Spotted_Ray",
        persistId: 30606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 4665,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 8343,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 2818,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 22561,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 24914,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 8343,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 22561,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 2818,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 32155,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 7202,
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
        persistId: 25294,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 13687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 7829,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 13562,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 14951,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Blobfish",
        persistId: 23960,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Dawnray",
        persistId: 25177,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Duskray",
        persistId: 23865,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Paddlefish",
        persistId: 21368,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Cutthroat_Trout",
        persistId: 18120,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 24281,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Indigo_Lamprey",
        persistId: 29793,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 27201,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Beluga_Sturgeon",
        persistId: 2016,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 850,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 11613,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 4505,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 76,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 26948,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 30155,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 2612,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MothR",
        persistId: 10766,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 6654,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeeU",
        persistId: 17882,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleC",
        persistId: 17535,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleU",
        persistId: 19778,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleR",
        persistId: 16825,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 6189,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaC",
        persistId: 15761,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaU",
        persistId: 16599,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 21411,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 14408,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 9423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Aquamarine",
        persistId: 3753,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 31806,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 25294,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 13687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 7829,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 13562,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 14951,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Blobfish",
        persistId: 23960,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Dawnray",
        persistId: 25177,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Duskray",
        persistId: 23865,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Paddlefish",
        persistId: 21368,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Cutthroat_Trout",
        persistId: 18120,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 24281,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Indigo_Lamprey",
        persistId: 29793,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 27201,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Beluga_Sturgeon",
        persistId: 2016,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 850,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 11613,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 4505,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 76,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 26948,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 30155,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 2612,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MothR",
        persistId: 10766,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 6654,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeeU",
        persistId: 17882,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleC",
        persistId: 17535,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleU",
        persistId: 19778,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleR",
        persistId: 16825,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 6189,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaC",
        persistId: 15761,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaU",
        persistId: 16599,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 21411,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 14408,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 9423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Aquamarine",
        persistId: 3753,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 31806,
        rewardLevel: "Love",
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
        persistId: 18440,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7223,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Bigeye_Tuna",
        persistId: 4778,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellowfin_Tuna",
        persistId: 18332,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 20333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 31632,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 28235,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 32433,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 25340,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 10974,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 30124,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyE",
        persistId: 12500,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7223,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Recipe_Cooking_Onigiri",
        persistId: 2427,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Ruby",
        persistId: 9652,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 13767,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29904,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 11902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7223,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Bigeye_Tuna",
        persistId: 4778,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellowfin_Tuna",
        persistId: 18332,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 20333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 31632,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 28235,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 32433,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 25340,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 10974,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 30124,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyE",
        persistId: 12500,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7223,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Recipe_Cooking_Onigiri",
        persistId: 2427,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Ruby",
        persistId: 9652,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 13767,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29904,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 11902,
        rewardLevel: "Love",
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
        persistId: 22897,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 21123,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Lethargy",
        persistId: 31021,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_PlantFiber",
        persistId: 28731,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Kilima_Stingray",
        persistId: 12832,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 31540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 23388,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 10916,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fabric",
        persistId: 28777,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 28732,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 13798,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 19180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 10606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Dispel",
        persistId: 1538,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Fireworks_Random",
        persistId: 18623,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 31841,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 15628,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ChapaaAsadaTacos",
        persistId: 2054,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Emerald",
        persistId: 13863,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_OldBow",
        persistId: 22897,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 21123,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Lethargy",
        persistId: 31021,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_PlantFiber",
        persistId: 28731,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Kilima_Stingray",
        persistId: 12832,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 31540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 23388,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 10916,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fabric",
        persistId: 28777,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 28732,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 13798,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 19180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 10606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Dispel",
        persistId: 1538,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Fireworks_Random",
        persistId: 18623,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 31841,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 15628,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ChapaaAsadaTacos",
        persistId: 2054,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Emerald",
        persistId: 13863,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
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
        persistId: 7224,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 32433,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_LargemouthBass",
        persistId: 16264,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SmallmouthBass",
        persistId: 7969,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Codfish",
        persistId: 32530,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 4665,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Beluga_Sturgeon",
        persistId: 2016,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 20263,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22034,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 480,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Chub",
        persistId: 32145,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PaintedPerch",
        persistId: 29344,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 20533,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 26021,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 26948,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_BahariBream",
        persistId: 7224,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 32433,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_LargemouthBass",
        persistId: 16264,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SmallmouthBass",
        persistId: 7969,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Codfish",
        persistId: 32530,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 4665,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Beluga_Sturgeon",
        persistId: 2016,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 20263,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22034,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 480,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Chub",
        persistId: 32145,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PaintedPerch",
        persistId: 29344,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 20533,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 26021,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 26948,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
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
        persistId: 16540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 4534,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stonefish",
        persistId: 14583,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_BlueMarlin",
        persistId: 8184,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Wood_Hardwood",
        persistId: 7305,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Magicwood",
        persistId: 19774,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 23388,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 10916,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 13798,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 19180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 10606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 20430,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 31841,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 8333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugC",
        persistId: 27630,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugR",
        persistId: 22520,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 21411,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_HotHounds",
        persistId: 28622,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 22480,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 19716,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 4534,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stonefish",
        persistId: 14583,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_BlueMarlin",
        persistId: 8184,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Wood_Hardwood",
        persistId: 7305,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Magicwood",
        persistId: 19774,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 23388,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 10916,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 13798,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 19180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 10606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 20430,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 31841,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 8333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugC",
        persistId: 27630,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_GlowbugR",
        persistId: 22520,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 21411,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_HotHounds",
        persistId: 28622,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 22480,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 19716,
        rewardLevel: "Like",
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
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 4843,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 11613,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Indigo_Lamprey",
        persistId: 29793,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_BatRay",
        persistId: 29420,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Duskray",
        persistId: 23865,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothC",
        persistId: 9443,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothU",
        persistId: 19785,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 850,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_FreshwaterEel",
        persistId: 5539,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 24281,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 4505,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 28696,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 32433,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 431,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_UmbranCarp",
        persistId: 5380,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 5603,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 28732,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 19180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 10606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothR",
        persistId: 10766,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 2818,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR2",
        persistId: 18323,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Sapphire",
        persistId: 26959,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29904,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 11902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 13767,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T1",
        persistId: 3030,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T2",
        persistId: 32254,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 31806,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 4843,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 11613,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Indigo_Lamprey",
        persistId: 29793,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_BatRay",
        persistId: 29420,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Duskray",
        persistId: 23865,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothC",
        persistId: 9443,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothU",
        persistId: 19785,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 850,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_FreshwaterEel",
        persistId: 5539,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 24281,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 4505,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 28696,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Black_Sea_Bass",
        persistId: 32433,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 431,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_UmbranCarp",
        persistId: 5380,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 5603,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 28732,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 19180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 10606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothR",
        persistId: 10766,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 2818,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR2",
        persistId: 18323,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Sapphire",
        persistId: 26959,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29904,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 11902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 13767,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T1",
        persistId: 3030,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T2",
        persistId: 32254,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 31806,
        rewardLevel: "Love",
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
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Mushroom",
        persistId: 4276,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 23498,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 8256,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 12447,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 13110,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 4843,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 32155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 31540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 7666,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 15628,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 26895,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 30155,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 2612,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Mushroom",
        persistId: 4276,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Breakfast_MushroomQuiche",
        persistId: 1361,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Emerald",
        persistId: 13863,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Mushroom",
        persistId: 4276,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 23498,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 8256,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 12447,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 13110,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 4843,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 32155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 31540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 7666,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 15628,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 26895,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 30155,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 2612,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Mushroom",
        persistId: 4276,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Breakfast_MushroomQuiche",
        persistId: 1361,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Emerald",
        persistId: 13863,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
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
        persistId: 13798,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 10606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 10548,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 19180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 10989,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7223,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 28235,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 480,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 13534,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 31477,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugU",
        persistId: 10028,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugR",
        persistId: 13596,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 10989,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Jasper",
        persistId: 17754,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 13767,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29904,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 11902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 13798,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 10606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 10548,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 19180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 10989,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7223,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 28235,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 480,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 13534,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 31477,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugU",
        persistId: 10028,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_LadybugR",
        persistId: 13596,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 10989,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Jasper",
        persistId: 17754,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 13767,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29904,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_MuujinBahari_Cooked",
        persistId: 11902,
        rewardLevel: "Love",
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
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 26021,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 20533,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_Love_Note",
        persistId: 25380,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 28696,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Crimson_Fangtooth",
        persistId: 15667,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Alligator_Gar",
        persistId: 30135,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 20263,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22034,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 13534,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 19977,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Cutthroat_Trout",
        persistId: 18120,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Sardine",
        persistId: 24439,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 32155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Onion",
        persistId: 28166,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 10889,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 23388,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 10916,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 6055,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 6654,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisU",
        persistId: 2002,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR1",
        persistId: 11071,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 9423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 14408,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 6055,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 6654,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyE",
        persistId: 12500,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7223,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_FriedRice",
        persistId: 8708,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 13534,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 29339,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 8904,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 76,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 28696,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 431,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 11613,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_UmbranCarp",
        persistId: 5380,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_BatRay",
        persistId: 29420,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 23498,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Blobfish",
        persistId: 23960,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Stonefish",
        persistId: 14583,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Crimson_Fangtooth",
        persistId: 15667,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 7783,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 26021,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_SpicyStirFry",
        persistId: 26415,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 13164,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_DragonbreathRelleno",
        persistId: 940,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 30221,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Amethyst",
        persistId: 9147,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T2",
        persistId: 32254,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 31806,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 26021,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 20533,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_Love_Note",
        persistId: 25380,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 28696,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Crimson_Fangtooth",
        persistId: 15667,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Alligator_Gar",
        persistId: 30135,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 20263,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22034,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 13534,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 19977,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Cutthroat_Trout",
        persistId: 18120,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Sardine",
        persistId: 24439,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 32155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Onion",
        persistId: 28166,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 10889,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 23388,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 10916,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 6055,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 6654,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisU",
        persistId: 2002,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR1",
        persistId: 11071,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 9423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 14408,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyC",
        persistId: 6055,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyU",
        persistId: 6654,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyE",
        persistId: 12500,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7223,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_FriedRice",
        persistId: 8708,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_StirFry",
        persistId: 13534,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 29339,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 8904,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 76,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Barracuda",
        persistId: 28696,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_EyelessMinnow",
        persistId: 431,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AlbinoEel",
        persistId: 11613,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_UmbranCarp",
        persistId: 5380,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_BatRay",
        persistId: 29420,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 23498,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Blobfish",
        persistId: 23960,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Stonefish",
        persistId: 14583,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Crimson_Fangtooth",
        persistId: 15667,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 7783,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 26021,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_SpicyStirFry",
        persistId: 26415,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 13164,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_DragonbreathRelleno",
        persistId: 940,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 30221,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Amethyst",
        persistId: 9147,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T2",
        persistId: 32254,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Mane_T3",
        persistId: 31806,
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
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Potato",
        persistId: 4435,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 10889,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_Love_Note",
        persistId: 25380,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 5603,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SpottedBullhead",
        persistId: 31374,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 20654,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 10717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 4484,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 16184,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 8019,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Bahari_Pike",
        persistId: 7373,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 8541,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 29699,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 6243,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 13736,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 10317,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 30376,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 13240,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 17516,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 16451,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 22124,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 4534,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_MeatyUdon",
        persistId: 29957,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Corn",
        persistId: 2475,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Jasper",
        persistId: 17754,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 19716,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Potato",
        persistId: 4435,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Blueberry",
        persistId: 10889,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_Love_Note",
        persistId: 25380,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WaterloggedBoot",
        persistId: 5603,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_SpottedBullhead",
        persistId: 31374,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_KilimaCatfish",
        persistId: 20654,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Stalking_Catfish",
        persistId: 10717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Channel_Catfish",
        persistId: 4484,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 16184,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 8019,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Bahari_Pike",
        persistId: 7373,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 8541,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Wheat",
        persistId: 29699,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Rice",
        persistId: 6243,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Blueberry",
        persistId: 13736,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Apple",
        persistId: 10317,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WeedBlocker",
        persistId: 30376,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_WaterRetention",
        persistId: 13240,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_StarQualityBooster",
        persistId: 17516,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_HarvestBooster",
        persistId: 16451,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fertilizer_2xGrowthRate",
        persistId: 22124,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 4534,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_MeatyUdon",
        persistId: 29957,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Corn",
        persistId: 2475,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Jasper",
        persistId: 17754,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 19716,
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
        persistId: 18440,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 20430,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 10974,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 8333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 31841,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 15628,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Honey_Loach",
        persistId: 1696,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 31540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 25340,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 1951,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 7666,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 10086,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ceramic",
        persistId: 30752,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 26895,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 24914,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailR",
        persistId: 21362,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Tomato",
        persistId: 17141,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 4843,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 22717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 20430,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 10974,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 8333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 31841,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Flint",
        persistId: 15628,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Honey_Loach",
        persistId: 1696,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Cotton",
        persistId: 31540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 25340,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Tomato",
        persistId: 1951,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Cotton",
        persistId: 7666,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 10086,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ceramic",
        persistId: 30752,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Pane",
        persistId: 26895,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_SnailU",
        persistId: 24914,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_SnailR",
        persistId: 21362,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Tomato",
        persistId: 17141,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 4843,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 22717,
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
        persistId: 1352,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 28235,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_LargemouthBass",
        persistId: 16264,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellow_Perch",
        persistId: 21636,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 480,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 8541,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 2235,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 25061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Onion",
        persistId: 28166,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 25340,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 29308,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 10548,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleR",
        persistId: 16825,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 8343,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 22561,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 2818,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 28235,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 480,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 10288,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 10633,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_QuestItem_Reward_LettuceSoup",
        persistId: 1352,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 28235,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_LargemouthBass",
        persistId: 16264,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Yellow_Perch",
        persistId: 21636,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 480,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Onion",
        persistId: 8541,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Tomato",
        persistId: 23450,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 2235,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 25061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Blueberries",
        persistId: 21286,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Onion",
        persistId: 28166,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Jam_Apple",
        persistId: 25340,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 29308,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 10548,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleR",
        persistId: 16825,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Bug_CrabC",
        persistId: 8343,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabU",
        persistId: 22561,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Bug_CrabR",
        persistId: 2818,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Carrot",
        persistId: 23925,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Onion",
        persistId: 28235,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Mushroom",
        persistId: 11233,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Ramen",
        persistId: 480,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Vegetable_Garlic",
        persistId: 9499,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Platinum",
        persistId: 10477,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Cave",
        persistId: 8144,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 10288,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 10633,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
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
        persistId: 23388,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Sardine",
        persistId: 24439,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 19977,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 10916,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Swordfin_Eel",
        persistId: 24615,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Carrot",
        persistId: 9756,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 10548,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 29308,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 20430,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 31841,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 10974,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 30124,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 4534,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 8333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 21123,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Lethargy",
        persistId: 31021,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Dispel",
        persistId: 1538,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Fireworks_Random",
        persistId: 18623,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 22480,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 19716,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 23388,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Sardine",
        persistId: 24439,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 19977,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 10916,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Swordfin_Eel",
        persistId: 24615,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Tomato",
        persistId: 11086,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Pickle_Carrot",
        persistId: 9756,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 10548,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 29308,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 20430,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 31841,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 10974,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 30124,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Brick_Stone",
        persistId: 4534,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 8333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 21123,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Lethargy",
        persistId: 31021,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Dispel",
        persistId: 1538,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Fireworks_Random",
        persistId: 18623,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Garnet",
        persistId: 22480,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 19716,
        rewardLevel: "Like",
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
        persistId: 4401,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 3449,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 13164,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 29339,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 10288,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 30221,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Wood_Magicwood",
        persistId: 19774,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 2612,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 6189,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 21411,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 3449,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 8904,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 76,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 9968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 13110,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 18047,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 4665,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 23498,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 2235,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 25061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 28732,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 20430,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 31841,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 10974,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 30124,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 8333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_Glow_Worm",
        persistId: 16106,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Simple",
        persistId: 2598,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 21123,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 13164,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 29339,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 7202,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 10288,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 30221,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 3449,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 13164,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 29339,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 10288,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 30221,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Wood_Magicwood",
        persistId: 19774,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 2612,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_DragonflyR",
        persistId: 3444,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 6189,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CicadaR",
        persistId: 21411,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Mushroom",
        persistId: 23624,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Hearty",
        persistId: 10556,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_VegetableSoup_Potato",
        persistId: 23927,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishermansBrew",
        persistId: 3449,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Red-bellied_Piranha",
        persistId: 8904,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 76,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Rainbow_Trout",
        persistId: 9968,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 13110,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 18047,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 4665,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 23498,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Potato",
        persistId: 27076,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Wheat",
        persistId: 2235,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Rice",
        persistId: 25061,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 28732,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Copper",
        persistId: 20430,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Iron",
        persistId: 31841,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 10974,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 30124,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Copper",
        persistId: 8333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Iron",
        persistId: 19114,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_Glow_Worm",
        persistId: 16106,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Simple",
        persistId: 2598,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Ammo_Arrow_Standard",
        persistId: 21123,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_ChiliOilWontons",
        persistId: 13164,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Onigiri",
        persistId: 29339,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 7202,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_SpicyPepper",
        persistId: 10288,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Tteokbbeoki",
        persistId: 30221,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Congee",
        persistId: 2100,
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
        persistId: 24126,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 32155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothC",
        persistId: 9443,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothU",
        persistId: 19785,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 18047,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 6838,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 84174,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 21923,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 27201,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 4665,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 13110,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 31477,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 32012,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 6189,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 14408,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 9423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeU",
        persistId: 14927,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR1",
        persistId: 2071,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 21923,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 14951,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 13562,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 13110,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 76,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 24281,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 4505,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 10989,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 27201,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Stormray",
        persistId: 26084,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Swordfin_Eel",
        persistId: 24615,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_BlueMarlin",
        persistId: 8184,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 18047,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Blue_Spotted_Ray",
        persistId: 30606,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 850,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Kilima_Stingray",
        persistId: 12832,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 7202,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 23498,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 7783,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Amethyst",
        persistId: 9147,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_EmeraldCarpet",
        persistId: 32155,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothC",
        persistId: 9443,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MothU",
        persistId: 19785,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 18047,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 6838,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 84174,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 21923,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 27201,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Enchanted_Pupfish",
        persistId: 4665,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Fur",
        persistId: 30911,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 13110,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Moss_DragonsBeard",
        persistId: 22153,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_HeatRoot",
        persistId: 18206,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Mushroom_Brightshroom",
        persistId: 9498,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Weed_Knapweed",
        persistId: 30577,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 31477,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 32012,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeetleE",
        persistId: 6189,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_MantisE",
        persistId: 14408,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_MantisR2",
        persistId: 9423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_PedeU",
        persistId: 14927,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_PedeR1",
        persistId: 2071,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_FairyCarp",
        persistId: 21923,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Cloudfish",
        persistId: 14951,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Goldfish",
        persistId: 13562,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_RadiantSunfish",
        persistId: 13110,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Energized_Piranha",
        persistId: 76,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Willow_Lamprey",
        persistId: 24281,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Thundering_Eel",
        persistId: 4505,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Kenjis_Carp",
        persistId: 10989,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Flametongue_Ray",
        persistId: 27201,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Stormray",
        persistId: 26084,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Swordfin_Eel",
        persistId: 24615,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_BlueMarlin",
        persistId: 8184,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_UnicornFish",
        persistId: 18047,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Blue_Spotted_Ray",
        persistId: 30606,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Midnight_Paddlefish",
        persistId: 850,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Giant_Kilima_Stingray",
        persistId: 12832,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_AncientFish",
        persistId: 7202,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_MutatedAngler",
        persistId: 23498,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Hypnotic_Moray",
        persistId: 7783,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Fish_Voidray",
        persistId: 24126,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Amethyst",
        persistId: 9147,
        rewardLevel: "Love",
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
        persistId: 10569,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 28732,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 8256,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 12447,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 30155,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 2612,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 6838,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 84174,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 32012,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 25294,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 13687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 7829,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 11139,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 20012,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 19977,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 26948,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 8924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7223,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 10548,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 29308,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 13798,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 19180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 10606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 23388,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 10916,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 16184,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 8019,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 19716,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Material_Hide",
        persistId: 28732,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyC",
        persistId: 8256,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyU",
        persistId: 12447,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyR",
        persistId: 30155,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_ButterflyE",
        persistId: 2612,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_CricketC",
        persistId: 6838,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketU",
        persistId: 84174,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Bug_CricketR",
        persistId: 32012,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Steak",
        persistId: 2292,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CalicoKoi",
        persistId: 25294,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_CantankerousKoi",
        persistId: 13687,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Scarlet_Koi",
        persistId: 7829,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 11139,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 20012,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Oily_Anchovy",
        persistId: 19977,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Meat_Oyster",
        persistId: 26948,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Meat",
        persistId: 16540,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_PrismTrout",
        persistId: 8924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Shimmerfin",
        persistId: 28023,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Carrot",
        persistId: 10569,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Crop_Apple",
        persistId: 18264,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_SalisburyChapaa",
        persistId: 7223,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_ChapaaMasala",
        persistId: 2057,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Stew_CearnukNoodle",
        persistId: 12075,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Chapaa",
        persistId: 10548,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Cearnuk",
        persistId: 29308,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T1",
        persistId: 13798,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T2",
        persistId: 19180,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Tail_T3",
        persistId: 10606,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Leather",
        persistId: 1826,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T1",
        persistId: 23388,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T2",
        persistId: 10916,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 16184,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 8019,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Product_Meat_Treeclimber",
        persistId: 19716,
        rewardLevel: "Like",
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
        persistId: 22766,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 16184,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 8019,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 10086,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Dawnray",
        persistId: 25177,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 4458,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 20263,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22034,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 20333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 31632,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 20533,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 26021,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 4843,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 22717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29904,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SpiceSprout",
        persistId: 22766,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_HeartDropLily",
        persistId: 7685,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Dislike",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Softwood",
        persistId: 16184,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Hardwood",
        persistId: 8019,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_RomanceItem_BoxofChocolates",
        persistId: 26671,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Rock_Clay",
        persistId: 10086,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Dawnray",
        persistId: 25177,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Glass_Bulb",
        persistId: 4458,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Acorn",
        persistId: 20263,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Pinecone",
        persistId: 22034,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Seed_Samara",
        persistId: 20333,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Seed_Juniper",
        persistId: 31632,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_SundropLily",
        persistId: 20533,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_CrystalLakeLotus",
        persistId: 19418,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Flower_BriarDaisy",
        persistId: 26021,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Shell",
        persistId: 4843,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_SweetLeaves",
        persistId: 25631,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Macaron",
        persistId: 14204,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Berry",
        persistId: 21902,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_Pie_Apple",
        persistId: 18642,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dessert_CelebrationCake",
        persistId: 11907,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_WagonWheel",
        persistId: 21550,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Quartz",
        persistId: 22717,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dessert_PetitFives",
        persistId: 29904,
        rewardLevel: "Love",
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
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 20012,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Platinum_Chad",
        persistId: 10169,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 11139,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Silvery_Minnow",
        persistId: 15046,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 10974,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 30124,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 31477,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeR",
        persistId: 24581,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_CrabGumbo",
        persistId: 14608,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishTacos",
        persistId: 21506,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 10633,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 13767,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Universal_Gift_The_Founders_Boot",
        persistId: 32125,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_GoldenSalmon",
        persistId: 20012,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Fish_Platinum_Chad",
        persistId: 10169,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_SilverSalmon",
        persistId: 11139,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Wood_Plank_Magicwood",
        persistId: 11755,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Forage_Spice_DariCloves",
        persistId: 2165,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Silver",
        persistId: 10249,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Bar_Gold",
        persistId: 29186,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_SilkThread",
        persistId: 22676,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Silk",
        persistId: 11819,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Oyster",
        persistId: 23423,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Fish_Silvery_Minnow",
        persistId: 15046,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Coral",
        persistId: 14176,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Forage_Beach_Oyster",
        persistId: 2934,
        rewardLevel: "Like",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Silver",
        persistId: 10974,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Ore_Gold",
        persistId: 30124,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Material_Antler_T3",
        persistId: 25924,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisTriangle",
        persistId: 31477,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Bug_BeeR",
        persistId: 24581,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Questitem_ZekisFlyer",
        persistId: 18440,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Cooking_Failure",
        persistId: 27611,
        rewardLevel: "Hate",
      },
      {
        objectId: "DA_ItemType_C_Grilled_Fish",
        persistId: 4401,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Fish",
        persistId: 13513,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Stew_Bouilbaisse",
        persistId: 28804,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Catfish",
        persistId: 26975,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Dinner_Trout",
        persistId: 1551,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sashimi",
        persistId: 101,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Sushi",
        persistId: 8703,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Trash_ShipFragments",
        persistId: 13175,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl",
        persistId: 9815,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_Forage_Crystal_Pearl_Green",
        persistId: 172,
        rewardLevel: "Neutral",
      },
      {
        objectId: "DA_ItemType_C_Poke",
        persistId: 21628,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_CrabGumbo",
        persistId: 14608,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_FishTacos",
        persistId: 21506,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_Mineral_Starstone_Citrine",
        persistId: 10633,
        rewardLevel: "Love",
      },
      {
        objectId: "DA_ItemType_C_OystersAkwinduu",
        persistId: 13767,
        rewardLevel: "Love",
      },
    ],
  },
];
