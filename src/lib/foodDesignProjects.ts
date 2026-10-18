// Food Design projects. Photos live in src/assets/food-design/<slug>/1..6.jpg
// numbered in grid order: 1-2 = column 1 (short, tall), 3-4 = column 2
// (tall, short), 5-6 = column 3 (short, tall).
const photos = import.meta.glob<string>("../assets/food-{design,art}/*/*.jpg", {
  eager: true,
  import: "default",
});

export const descriptions: Record<string, string> = {
  "“Hotel Amour”, Paris": "Inspired by its sea-themed room, a private dinner at Hotel Amour where jelly landscapes turned the long table into a playful seabed.",
  "“Funeral of Summer” Dinner": "An outdoor feast celebrating Sicily's land and sea: fresh mussels, local produce and seashells hidden in dishes.",
  "Moldavian Orange Wine Event": "An orange-themed dinner for an orange wine launch at Winnice Moldawii, Warsaw, with a menu designed to draw out the flavours of their special wines.",
  "Edible Christmas Table": "Christmas catering reimagined: edible herb trees, bread candles and caprese wreaths tied with black ribbon.",
  "Edible Sculpture “Oyster Mountain”": "An oyster tower with a twist: each shell hides a rose-orange jelly and a fruit pearl, a sweet surprise for events.",
  "Press Day for There Is No More": "Lunch catering for a sustainable accessories brand's new collection: pink jelly set in shells on silver and lace.",
  "Set Design for There Is No More Campaign": "For There Is No More's Delicious Pink campaign, an edible set where food and fashion share the same colour palette.",
  "Interactive Birthday Catering, Paris": "Playful catering for a private birthday in Paris, where every dish invites guests to touch, play and find an edible surprise.",
  "Funeral of Summer": "A ritual of time's passage through food: pausing, honoring the season, and connecting in the present moment.",
  "Food for Peace": "Turning everyday ingredients into a visual language of protest and hope.",
  "Funeral of Autumn": "A ritual of time's passage through food: pausing, honoring the season, and connecting in the present moment.",
  "Disruptors of Days": "Series placing the unspeakable inside the ordinary. The thoughts that interrupt our days.",
  "Taste of Conflict": "Exploring the intersection of history and survival through the same soup eaten in the different zones of wars.",
};

// Food Art: kind of work, shown above the description
export const categories: Record<string, string> = {
  "Funeral of Autumn": "Performance and installation",
  "Taste of Conflict": "Performance and installation",
  "Disruptors of Days": "Photography of installation",
  "Food for Peace": "Site-specific intervention",
  "Funeral of Summer": "Performance and installation",
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
  { slug: "hotel-amour", title: "“Hotel Amour”, Paris" },
  { slug: "funeral-of-summer-dinner", title: "“Funeral of Summer” Dinner" },
  { slug: "winnice", title: "Moldavian Orange Wine Event" },
  { slug: "christmas", title: "Edible Christmas Table", cover: 3, coverPosition: "center 34%" },
  { slug: "oyster-mountain", title: "Edible Sculpture “Oyster Mountain”" },
  { slug: "jelly-shells-tinm", title: "Press Day for There Is No More", cover: 5 },
  { slug: "tinm-pink-campaign", title: "Set Design for There Is No More Campaign", cover: 5 },
  { slug: "ana-rosa-x-tim", title: "Interactive Birthday Catering, Paris" },
];

export const foodDesignProjects = list.map((p, i) => ({
  id: i + 1,
  title: p.title,
  desc: descriptions[p.title] ?? "",
  // cover photo on the Work page: grid position 1-6 (default 1, top left)
  thumb: photo(p.slug, ("cover" in p && p.cover) || 1),
  // which part of the cover stays visible when it is cropped (CSS object-position)
  coverPosition: ("coverPosition" in p && p.coverPosition) || "center",
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
  category: categories[p.title],
  thumb: photo(p.slug, 1, "food-art"),
  cols: cols(p.slug, p.title, "food-art"),
}));
