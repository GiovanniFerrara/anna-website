// Food Design projects. Photos live in src/assets/food-design/<slug>/1..6.jpg
// numbered in grid order: 1-2 = column 1 (short, tall), 3-4 = column 2
// (tall, short), 5-6 = column 3 (short, tall).
const photos = import.meta.glob<string>("../assets/food-{design,art}/*/*.jpg", {
  eager: true,
  import: "default",
});

export const descriptions: Record<string, string> = {
  "Hotel Amour": "A dinner at Hotel Amour: blue jelly landscapes, oysters and scallop shells turn the long table into a seabed.",
  "Funeral of Summer Dinner": "An outdoor feast to see the season off, with shell-marked breads resting on fig leaves and white lace.",
  "Winnice": "A garden table where bread, carrots and pomegranates radiate like suns between glasses of wine.",
  "Christmas": "Christmas reimagined: herb trees, bread candles and wreaths of tomato and mozzarella tied with black ribbon.",
  "Oyster Mountain": "Oyster shells stacked into a small mountain, each one holding a black pearl, set on lace and silver.",
  "Jelly Shells for TINM": "Deep pink jelly set inside scallop and oyster shells, served on silver trays and white lace.",
  "TINM Delicious Pink Campaign": "A pink campaign shot in the garden: a layered sweet on a silver tray, a red beaded bag and a pink blouse.",
  "Ana Rosa x TIM": "A still life menu of cheese cut into shapes, skewers and a stone-like cake, staged with silver and dried flowers.",
  "Funeral of Summer": "A white-draped table in the garden, crowned with grapes, candelabra and bougainvillea, to mourn the end of summer.",
  "Food for Peace": "Ceasefire spelled in oranges, peace flags and bread rings played as tic-tac-toe: food as a message of peace.",
  "Funeral of Autumn": "A candlelit ritual to bid farewell to autumn, around a long table glowing in the dark.",
  "Disruptors of Days": "Words written in food on rocks, walls and tablecloths (fear, what if, no): the thoughts that interrupt a day.",
  "Taste of Conflict": "A series exploring conflict through food, and through the gestures of sharing it.",
};

type Tile = { src: string; alt?: string; shape: "short" | "tall" };

const SHAPES: Tile["shape"][][] = [
  ["short", "tall"],
  ["tall", "short"],
  ["short", "tall"],
];

function photo(slug: string, n: number, dir = "food-design") {
  return photos[`../assets/${dir}/${slug}/${n}.jpg`];
}

function cols(slug: string, title: string, dir = "food-design"): Tile[][] {
  return SHAPES.map((col, c) =>
    col.map((shape, r) => ({
      src: photo(slug, c * 2 + r + 1, dir),
      alt: title,
      shape,
    })),
  );
}

const list = [
  { slug: "hotel-amour", title: "Hotel Amour" },
  { slug: "funeral-of-summer-dinner", title: "Funeral of Summer Dinner" },
  { slug: "winnice", title: "Winnice" },
  { slug: "christmas", title: "Christmas" },
  { slug: "oyster-mountain", title: "Oyster Mountain" },
  { slug: "jelly-shells-tinm", title: "Jelly Shells for TINM" },
  { slug: "tinm-pink-campaign", title: "TINM Delicious Pink Campaign" },
  { slug: "ana-rosa-x-tim", title: "Ana Rosa x TIM" },
];

export const foodDesignProjects = list.map((p, i) => ({
  id: i + 1,
  title: p.title,
  desc: descriptions[p.title] ?? "",
  thumb: photo(p.slug, 1),
  cols: cols(p.slug, p.title),
}));

// Food Art projects 4+ (1-3 are defined in ProjectShowcase.svelte).
// Photos live in src/assets/food-art/<slug>/1..6.jpg, same numbering.
const artList = [
  { id: 4, slug: "funeral-of-summer", title: "Funeral of Summer" },
  { id: 5, slug: "food-for-peace", title: "Food for Peace" },
];

export const foodArtExtraProjects = artList.map((p) => ({
  id: p.id,
  title: p.title,
  desc: descriptions[p.title] ?? "",
  thumb: photo(p.slug, 1, "food-art"),
  cols: cols(p.slug, p.title, "food-art"),
}));
