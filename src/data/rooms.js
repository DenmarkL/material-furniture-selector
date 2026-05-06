export const ROOMS = [
  {
    id: "kitchen",
    label: "Kitchen",
    icon: "🍳",
    categories: [
      {
        id: "flooring",
        label: "Flooring",
        options: [
          {
            id: "timber",
            name: "Timber",
            swatch: "linear-gradient(135deg,#c8a87a,#a07850)",
            cost: "mid",
            tone: "warm",
            dark: false,
          },
          {
            id: "polished-concrete",
            name: "Polished Concrete",
            swatch: "linear-gradient(135deg,#9a9a9a,#c4c4c4)",
            cost: "mid",
            tone: "cool",
            dark: false,
          },
          {
            id: "tiles-white",
            name: "White Tiles",
            swatch: "linear-gradient(135deg,#f0ede8,#e0dbd2)",
            cost: "low",
            tone: "neutral",
            dark: false,
          },
          {
            id: "terrazzo",
            name: "Terrazzo",
            swatch:
              "radial-gradient(circle at 30% 40%,#c8b0a0 10%,transparent 11%),radial-gradient(circle at 70% 60%,#8fa08a 10%,transparent 11%),linear-gradient(135deg,#e8e0d4,#d0c8bc)",
            cost: "high",
            tone: "neutral",
            dark: false,
          },
          {
            id: "slate",
            name: "Dark Slate",
            swatch: "linear-gradient(135deg,#3a3630,#504840)",
            cost: "high",
            tone: "dark",
            dark: true,
          },
        ],
      },
      {
        id: "wall",
        label: "Wall Finish",
        options: [
          {
            id: "white-plaster",
            name: "White Plaster",
            swatch: "linear-gradient(135deg,#f5f2ee,#e8e4de)",
            cost: "low",
            tone: "neutral",
            dark: false,
          },
          {
            id: "subway-tile",
            name: "Subway Tile",
            swatch:
              "repeating-linear-gradient(90deg,#e0ddd8 0px,#e0ddd8 40px,#ccc 40px,#ccc 42px)",
            cost: "mid",
            tone: "neutral",
            dark: false,
          },
          {
            id: "dark-feature",
            name: "Dark Feature Wall",
            swatch: "linear-gradient(135deg,#2a2522,#3c342c)",
            cost: "mid",
            tone: "dark",
            dark: true,
          },
          {
            id: "sage-paint",
            name: "Sage Paint",
            swatch: "linear-gradient(135deg,#7a8c78,#90a08e)",
            cost: "low",
            tone: "cool",
            dark: false,
          },
        ],
      },
      {
        id: "benchtop",
        label: "Benchtop",
        options: [
          {
            id: "marble",
            name: "Marble",
            swatch:
              "repeating-linear-gradient(120deg,#f0ece6 0px,#f0ece6 30px,#e0dbd4 30px,#e0dbd4 31px)",
            cost: "high",
            stone: true,
          },
          {
            id: "engineered-stone",
            name: "Engineered Stone",
            swatch: "linear-gradient(135deg,#d4cec8,#c0bab4)",
            cost: "mid",
            stone: false,
          },
          {
            id: "timber-bench",
            name: "Timber",
            swatch: "linear-gradient(135deg,#b8924a,#8c6a30)",
            cost: "mid",
            stone: false,
          },
          {
            id: "stainless",
            name: "Stainless Steel",
            swatch: "linear-gradient(120deg,#c0c0c0,#e0e0e0,#b0b0b0)",
            cost: "mid",
            stone: false,
          },
          {
            id: "black-stone",
            name: "Black Stone",
            swatch: "linear-gradient(135deg,#282420,#3c3630)",
            cost: "high",
            stone: true,
            dark: true,
          },
        ],
      },
      {
        id: "cabinetry",
        label: "Cabinetry Finish",
        options: [
          {
            id: "white-gloss",
            name: "White Gloss",
            swatch: "linear-gradient(135deg,#f8f6f2,#e8e5e0)",
            cost: "mid",
          },
          {
            id: "navy",
            name: "Navy Blue",
            swatch: "linear-gradient(135deg,#1e2a40,#2c3e5c)",
            cost: "mid",
          },
          {
            id: "timber-cab",
            name: "Timber Veneer",
            swatch: "linear-gradient(135deg,#c8a870,#a07840)",
            cost: "high",
          },
          {
            id: "charcoal",
            name: "Charcoal Matte",
            swatch: "linear-gradient(135deg,#3a3530,#4c4540)",
            cost: "mid",
          },
          {
            id: "sage-cab",
            name: "Sage Green",
            swatch: "linear-gradient(135deg,#7a9076,#5c7058)",
            cost: "low",
          },
        ],
      },
      {
        id: "lighting",
        label: "Lighting",
        options: [
          {
            id: "pendant",
            name: "Pendant Cluster",
            swatch: "radial-gradient(circle,#f5d060,#e0a820)",
            cost: "mid",
          },
          {
            id: "recessed",
            name: "Recessed LEDs",
            swatch: "radial-gradient(circle,#e8e8e8,#c0c0c0)",
            cost: "low",
          },
          {
            id: "track",
            name: "Track Lighting",
            swatch: "linear-gradient(135deg,#b0a898,#808070)",
            cost: "mid",
          },
          {
            id: "under-cab",
            name: "Under Cabinet",
            swatch: "linear-gradient(135deg,#ffe4a0,#f0c040)",
            cost: "low",
          },
        ],
      },
    ],
  },
  {
    id: "bathroom",
    label: "Bathroom",
    icon: "🛁",
    categories: [
      {
        id: "flooring",
        label: "Flooring",
        options: [
          {
            id: "hex-tile",
            name: "Hex Tile",
            swatch:
              "repeating-conic-gradient(#d8d4ce 0% 25%,#c8c4be 0% 50%) 0 0/30px 30px",
            cost: "mid",
            dark: false,
          },
          {
            id: "large-format",
            name: "Large Format Tile",
            swatch: "linear-gradient(135deg,#e8e4dc,#d4d0c8)",
            cost: "mid",
            dark: false,
          },
          {
            id: "black-slate",
            name: "Black Slate",
            swatch: "linear-gradient(135deg,#2e2a26,#3e3a35)",
            cost: "high",
            dark: true,
          },
          {
            id: "timber-look",
            name: "Timber-Look Tile",
            swatch: "linear-gradient(135deg,#b89060,#907040)",
            cost: "mid",
            dark: false,
          },
        ],
      },
      {
        id: "wall",
        label: "Wall Finish",
        options: [
          {
            id: "zellige",
            name: "Zellige Tile",
            swatch: "linear-gradient(135deg,#7a9e98,#5a8078)",
            cost: "high",
            dark: false,
          },
          {
            id: "white-porcelain",
            name: "White Porcelain",
            swatch: "linear-gradient(135deg,#f4f1ec,#e4e1dc)",
            cost: "low",
            dark: false,
          },
          {
            id: "fluted-tile",
            name: "Fluted Tile",
            swatch:
              "repeating-linear-gradient(90deg,#dcd8d0 0px,#dcd8d0 14px,#c8c4bc 14px,#c8c4bc 16px)",
            cost: "mid",
            dark: false,
          },
          {
            id: "limewash",
            name: "Limewash",
            swatch: "radial-gradient(ellipse at 30% 40%,#e8e0d4,#d4ccbf)",
            cost: "mid",
            dark: false,
          },
          {
            id: "charcoal-wall",
            name: "Charcoal Tile",
            swatch: "linear-gradient(135deg,#3a3530,#2a2520)",
            cost: "mid",
            dark: true,
          },
        ],
      },
      {
        id: "vanity",
        label: "Vanity",
        options: [
          {
            id: "floating-white",
            name: "Floating White",
            swatch: "linear-gradient(135deg,#f0ece6,#e0dcd6)",
            cost: "mid",
          },
          {
            id: "timber-vanity",
            name: "Timber",
            swatch: "linear-gradient(135deg,#b89050,#8a6830)",
            cost: "high",
          },
          {
            id: "concrete-van",
            name: "Concrete Look",
            swatch: "linear-gradient(135deg,#a0a098,#b8b8b0)",
            cost: "mid",
          },
        ],
      },
      {
        id: "lighting",
        label: "Lighting",
        options: [
          {
            id: "mirror-light",
            name: "Mirror Light",
            swatch: "radial-gradient(circle,#fff8d0,#f0c840)",
            cost: "mid",
          },
          {
            id: "ceiling-spot",
            name: "Ceiling Spots",
            swatch: "radial-gradient(circle,#e8e8e8,#c0c0c0)",
            cost: "low",
          },
          {
            id: "wall-sconce",
            name: "Wall Sconce",
            swatch: "radial-gradient(ellipse,#f5d070,#d89820)",
            cost: "high",
          },
        ],
      },
    ],
  },
  {
    id: "living",
    label: "Living Room",
    icon: "🛋️",
    categories: [
      {
        id: "flooring",
        label: "Flooring",
        options: [
          {
            id: "eng-timber",
            name: "Engineered Timber",
            swatch: "linear-gradient(135deg,#c8a070,#a07848)",
            cost: "mid",
            dark: false,
          },
          {
            id: "carpet",
            name: "Wool Carpet",
            swatch: "linear-gradient(135deg,#d4c8b8,#beb0a0)",
            cost: "mid",
            dark: false,
          },
          {
            id: "polished-con",
            name: "Polished Concrete",
            swatch: "linear-gradient(135deg,#9a9898,#c0beb8)",
            cost: "mid",
            dark: false,
          },
          {
            id: "herringbone",
            name: "Herringbone Timber",
            swatch:
              "repeating-linear-gradient(45deg,#b89060 0px,#b89060 10px,#a07840 10px,#a07840 12px)",
            cost: "high",
            dark: false,
          },
        ],
      },
      {
        id: "wall",
        label: "Wall Finish",
        options: [
          {
            id: "warm-white",
            name: "Warm White",
            swatch: "linear-gradient(135deg,#f8f4ee,#ede8e0)",
            cost: "low",
            dark: false,
          },
          {
            id: "limewash-lv",
            name: "Limewash",
            swatch: "radial-gradient(ellipse at 30%,#e4dcd0,#d0c8bc)",
            cost: "mid",
            dark: false,
          },
          {
            id: "dark-green",
            name: "Deep Forest Green",
            swatch: "linear-gradient(135deg,#1e3028,#2a4035)",
            cost: "low",
            dark: true,
          },
          {
            id: "clay",
            name: "Warm Clay",
            swatch: "linear-gradient(135deg,#c4906a,#a87050)",
            cost: "low",
            dark: false,
          },
          {
            id: "wallpaper",
            name: "Botanical Wallpaper",
            swatch:
              "radial-gradient(ellipse at 20% 30%,#7a9070 0%,transparent 40%),radial-gradient(ellipse at 70% 70%,#506848 0%,transparent 40%),linear-gradient(135deg,#d4c8b0,#c0b498)",
            cost: "mid",
            dark: false,
          },
        ],
      },
      {
        id: "sofa",
        label: "Sofa",
        options: [
          {
            id: "linen-sofa",
            name: "Linen Sectional",
            swatch: "linear-gradient(135deg,#d8d0c4,#c4bbb0)",
            cost: "mid",
          },
          {
            id: "velvet-sofa",
            name: "Velvet Sofa",
            swatch: "linear-gradient(135deg,#5a6e88,#3c5070)",
            cost: "high",
          },
          {
            id: "leather-sofa",
            name: "Leather Lounge",
            swatch: "linear-gradient(135deg,#8c6a40,#6a4c2a)",
            cost: "high",
          },
          {
            id: "bouclé-sofa",
            name: "Bouclé Sofa",
            swatch: "radial-gradient(circle,#e0d8cc,#ccc4b8)",
            cost: "high",
          },
        ],
      },
      {
        id: "table",
        label: "Coffee Table",
        options: [
          {
            id: "travertine",
            name: "Travertine",
            swatch: "linear-gradient(135deg,#d8c8a8,#c0a880)",
            cost: "high",
            stone: true,
          },
          {
            id: "timber-table",
            name: "Solid Timber",
            swatch: "linear-gradient(135deg,#b89060,#8c6a38)",
            cost: "mid",
          },
          {
            id: "glass-table",
            name: "Glass & Brass",
            swatch:
              "linear-gradient(135deg,rgba(200,200,220,0.6),rgba(180,160,80,0.4))",
            cost: "mid",
          },
          {
            id: "concrete-table",
            name: "Concrete",
            swatch: "linear-gradient(135deg,#909090,#b0b0b0)",
            cost: "mid",
          },
        ],
      },
      {
        id: "lighting",
        label: "Lighting",
        options: [
          {
            id: "arc-lamp",
            name: "Arc Floor Lamp",
            swatch: "radial-gradient(circle,#f8e080,#d0a020)",
            cost: "mid",
          },
          {
            id: "recessed-lv",
            name: "Recessed LEDs",
            swatch: "radial-gradient(circle,#e8e8e8,#c0c0c0)",
            cost: "low",
          },
          {
            id: "statement-pendant",
            name: "Statement Pendant",
            swatch: "radial-gradient(circle,#c89040,#8c6020)",
            cost: "high",
          },
          {
            id: "wall-lamp",
            name: "Wall Lamps",
            swatch: "radial-gradient(circle,#f0d060,#c89020)",
            cost: "mid",
          },
        ],
      },
    ],
  },
  {
    id: "bedroom",
    label: "Bedroom",
    icon: "🛏️",
    categories: [
      {
        id: "flooring",
        label: "Flooring",
        options: [
          {
            id: "carpet-bed",
            name: "Plush Carpet",
            swatch: "linear-gradient(135deg,#c8beb2,#b0a898)",
            cost: "low",
            dark: false,
          },
          {
            id: "timber-bed",
            name: "Timber",
            swatch: "linear-gradient(135deg,#c8a068,#a07840)",
            cost: "mid",
            dark: false,
          },
          {
            id: "rug",
            name: "Parquet + Rug",
            swatch:
              "repeating-linear-gradient(45deg,#b8905a 0px,#b8905a 8px,#986830 8px,#986830 10px)",
            cost: "high",
            dark: false,
          },
        ],
      },
      {
        id: "wall",
        label: "Wall Finish",
        options: [
          {
            id: "soft-white",
            name: "Soft White",
            swatch: "linear-gradient(135deg,#f8f5f0,#eeebe4)",
            cost: "low",
            dark: false,
          },
          {
            id: "dusty-rose",
            name: "Dusty Rose",
            swatch: "linear-gradient(135deg,#d4a8a0,#bc8e88)",
            cost: "low",
            dark: false,
          },
          {
            id: "deep-blue",
            name: "Deep Navy",
            swatch: "linear-gradient(135deg,#1c2840,#283a58)",
            cost: "low",
            dark: true,
          },
          {
            id: "textured-linen",
            name: "Linen Wallpaper",
            swatch:
              "repeating-linear-gradient(90deg,#dcd6cc 0px,#dcd6cc 4px,#d0cac0 4px,#d0cac0 5px)",
            cost: "mid",
            dark: false,
          },
        ],
      },
      {
        id: "bed",
        label: "Bed Frame",
        options: [
          {
            id: "upholstered",
            name: "Upholstered",
            swatch: "linear-gradient(135deg,#c8beb0,#a8a098)",
            cost: "mid",
          },
          {
            id: "timber-bed-f",
            name: "Timber Frame",
            swatch: "linear-gradient(135deg,#b89060,#8a6840)",
            cost: "mid",
          },
          {
            id: "metal-bed",
            name: "Metal Frame",
            swatch: "linear-gradient(135deg,#909090,#c0c0c0)",
            cost: "low",
          },
          {
            id: "boucle-bed",
            name: "Bouclé Bedhead",
            swatch: "radial-gradient(circle,#e4dcd0,#d0c8bc)",
            cost: "high",
          },
        ],
      },
      {
        id: "lighting",
        label: "Lighting",
        options: [
          {
            id: "bedside-lamp",
            name: "Bedside Lamps",
            swatch: "radial-gradient(circle,#f8e0a0,#d4a030)",
            cost: "low",
          },
          {
            id: "pendant-bed",
            name: "Pendant Lights",
            swatch: "radial-gradient(circle,#f0c840,#c89020)",
            cost: "mid",
          },
          {
            id: "strip-led",
            name: "LED Strip",
            swatch: "linear-gradient(90deg,#fff8d0,#f0e060,#fff8d0)",
            cost: "low",
          },
        ],
      },
    ],
  },
  {
    id: "laundry",
    label: "Laundry",
    icon: "🧺",
    categories: [
      {
        id: "flooring",
        label: "Flooring",
        options: [
          {
            id: "vinyl",
            name: "Vinyl Plank",
            swatch: "linear-gradient(135deg,#c0a870,#a08450)",
            cost: "low",
            dark: false,
          },
          {
            id: "tiles-laundry",
            name: "Ceramic Tiles",
            swatch: "linear-gradient(135deg,#e4e0d8,#d0ccc4)",
            cost: "low",
            dark: false,
          },
          {
            id: "epoxy",
            name: "Epoxy Coating",
            swatch: "linear-gradient(135deg,#90a4a0,#6c8880)",
            cost: "mid",
            dark: false,
          },
        ],
      },
      {
        id: "wall",
        label: "Wall Finish",
        options: [
          {
            id: "white-tiles-l",
            name: "White Tiles",
            swatch: "linear-gradient(135deg,#f0ece6,#e0dcd4)",
            cost: "low",
            dark: false,
          },
          {
            id: "splashback",
            name: "Coloured Splashback",
            swatch: "linear-gradient(135deg,#5888a0,#3a6880)",
            cost: "mid",
            dark: false,
          },
          {
            id: "painted-l",
            name: "Painted Wall",
            swatch: "linear-gradient(135deg,#d8e4e0,#bccec8)",
            cost: "low",
            dark: false,
          },
        ],
      },
      {
        id: "cabinetry",
        label: "Cabinetry",
        options: [
          {
            id: "white-cab-l",
            name: "White Laminate",
            swatch: "linear-gradient(135deg,#f4f0ea,#e4e0d8)",
            cost: "low",
          },
          {
            id: "timber-cab-l",
            name: "Timber Veneer",
            swatch: "linear-gradient(135deg,#c0a060,#90743a)",
            cost: "mid",
          },
          {
            id: "grey-cab",
            name: "Grey Gloss",
            swatch: "linear-gradient(135deg,#a0a0a0,#c0c0c0)",
            cost: "low",
          },
        ],
      },
      {
        id: "lighting",
        label: "Lighting",
        options: [
          {
            id: "led-laundry",
            name: "LED Batten",
            swatch: "radial-gradient(circle,#e8e8e8,#c0c0c0)",
            cost: "low",
          },
          {
            id: "pendant-laundry",
            name: "Pendant",
            swatch: "radial-gradient(circle,#f5d060,#d09020)",
            cost: "mid",
          },
        ],
      },
    ],
  },
];
