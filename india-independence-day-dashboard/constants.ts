
import { type Tab } from './types';

export const TABS: Tab[] = ['History', 'Growth', 'Fun Facts', 'Culture'];

interface Content {
  title: string;
  paragraphs: string[];
}

export const CONTENT_DATA: Record<Tab, Content> = {
  'History': {
    title: "A Journey Through Time",
    paragraphs: [
      "India's history is one of the world's oldest, richest, and most complex. The Indus Valley Civilization, one of the first urban cultures, flourished around 2500 BC.",
      "The Mauryan and Gupta empires marked classical periods of immense cultural and scientific progress. Ashoka the Great's reign spread Buddhism, while the Gupta era is known as India's 'Golden Age'.",
      "Centuries of rule by various dynasties, including the Mughals, led to a rich synthesis of cultures. The British Empire's colonization eventually gave way to a powerful independence movement led by Mahatma Gandhi, culminating in freedom on August 15, 1947."
    ]
  },
  'Growth': {
    title: "The Rise of a Nation",
    paragraphs: [
      "Since independence, India has transformed into one of the world's fastest-growing major economies. From an agrarian society, it has evolved into a global powerhouse in services and technology.",
      "The Indian Space Research Organisation (ISRO) has achieved remarkable feats, including the Mars Orbiter Mission and the Chandrayaan missions to the moon, showcasing its prowess in space exploration at a fraction of the cost of other nations.",
      "With a burgeoning startup ecosystem, advancements in digital infrastructure, and a young, dynamic population, India is poised to play a pivotal role in shaping the 21st century."
    ]
  },
  'Fun Facts': {
    title: "Incredible India!",
    paragraphs: [
      "India is the birthplace of four major world religions: Hinduism, Buddhism, Jainism, and Sikhism.",
      "The game of Chess originated in India, where it was called 'Chaturanga'. The number zero and the decimal system were also invented in India.",
      "India has the largest postal network in the world, including a floating post office in Dal Lake, Srinagar. It also boasts the world's highest cricket ground in Chail, Himachal Pradesh."
    ]
  },
  'Culture': {
    title: "A Tapestry of Traditions",
    paragraphs: [
      "Indian culture is a vibrant amalgamation of traditions, languages, festivals, and arts. With over 22 official languages and hundreds of dialects, its linguistic diversity is staggering.",
      "Festivals like Diwali (the festival of lights), Holi (the festival of colors), and Eid are celebrated with immense fervor across the country, showcasing its secular and pluralistic fabric.",
      "From classical dance forms like Bharatanatyam and Kathak to the globally renowned Bollywood film industry, India's artistic expressions are as diverse and colorful as its people."
    ]
  }
};
