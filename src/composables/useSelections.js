import { ref, computed } from "vue";

export function useSelections(ROOMS) {
  const selectedRoom = ref(ROOMS[0]);
  const selections = ref({});
  const generating = ref(false);
  const aiSummary = ref(null);

  function selectRoom(room) {
    selectedRoom.value = room;
    aiSummary.value = null;
  }

  function ensureRoom() {
    const rid = selectedRoom.value.id;
    if (!selections.value[rid]) selections.value[rid] = {};
  }

  function toggleOption(catId, opt) {
    ensureRoom();
    const rid = selectedRoom.value.id;
    const current = selections.value[rid][catId];

    if (current?.id === opt.id) {
      delete selections.value[rid][catId];
    } else {
      selections.value[rid][catId] = opt;
    }

    aiSummary.value = null;
  }

  function isSelected(catId, optId) {
    const rid = selectedRoom.value.id;
    return selections.value[rid]?.[catId]?.id === optId;
  }

  function selectionsFor(catId) {
    const rid = selectedRoom.value.id;
    const opt = selections.value[rid]?.[catId];
    return opt ? [opt] : [];
  }

  const hasSelections = computed(() => {
    const rid = selectedRoom.value.id;
    return Object.keys(selections.value[rid] || {}).length > 0;
  });

  function costLabel(cost) {
    return {
      low: "Budget",
      mid: "Mid-range",
      high: "Premium",
    }[cost];
  }

  function generateSummary() {
    generating.value = true;
    aiSummary.value = null;

    setTimeout(() => {
      aiSummary.value = buildSummary();
      generating.value = false;
    }, 900);
  }

  function buildSummary() {
    const rid = selectedRoom.value.id;
    const room = selectedRoom.value;
    const sel = selections.value[rid] || {};
    const allCats = room.categories;

    const materials = [];
    const issues = [];
    const missing = [];
    const cost = [];
    const next = [];

    const selectedOpts = Object.values(sel);

    // ── Materials list
    if (selectedOpts.length === 0) {
      materials.push("No materials selected yet for this room.");
    } else {
      for (const [catId, opt] of Object.entries(sel)) {
        const cat = allCats.find((c) => c.id === catId);
        materials.push(
          `${cat?.label ?? catId}: ${opt.name} (${costLabel(opt.cost)})`,
        );
      }
    }

    // ── Cost analysis
    const costCounts = { low: 0, mid: 0, high: 0 };
    selectedOpts.forEach((o) => costCounts[o.cost]++);
    const total = selectedOpts.length;
    if (total === 0) {
      cost.push("Select materials to see a cost estimate.");
    } else if (costCounts.high >= 2) {
      cost.push(
        "Premium selections detected — expect a higher overall budget. Consider prioritising high-impact areas such as benchtop or cabinetry for premium finishes.",
      );
    } else if (costCounts.low >= total - 1) {
      cost.push(
        "Budget-friendly choices across the board. Great for keeping costs controlled.",
      );
    } else {
      cost.push(
        "A balanced mid-range selection — good value with room to upgrade key feature pieces.",
      );
    }

    // Marble premium note
    if (selectedOpts.some((o) => o.id === "marble" || o.id === "travertine")) {
      cost.push(
        "Natural stone (marble / travertine) requires sealing and specialist installation — factor in ongoing maintenance costs.",
      );
    }
    if (selectedOpts.some((o) => o.id === "zellige")) {
      cost.push(
        "Zellige tiles are artisan-made and labour-intensive to install — allow extra lead time and budget.",
      );
    }

    // ── Design issues
    const floorOpt = sel["flooring"];
    const wallOpt = sel["wall"];
    if (floorOpt?.dark && wallOpt?.dark) {
      issues.push(
        "Both flooring and wall finish are dark tones. The space may feel enclosed — balance with lighter furniture, mirrors, or additional lighting.",
      );
    }
    if (floorOpt?.tone === "cool" && wallOpt?.tone === "warm") {
      issues.push(
        "Flooring and wall tones are pulling in different directions (cool vs. warm). Consider unifying with a neutral mid-tone accent.",
      );
    }
    if (sel["sofa"]?.id === "leather-sofa" && wallOpt?.id === "dark-green") {
      issues.push(
        "Leather lounge against a deep-green wall creates a bold, masculine scheme — make sure lighting is warm and generous to prevent the space feeling heavy.",
      );
    }

    // ── Missing selections
    allCats.forEach((cat) => {
      if (!sel[cat.id]) missing.push(`${cat.label} — no selection made.`);
    });

    // ── Next actions
    if (missing.length > 0) {
      next.push(
        `Complete remaining ${missing.length} selection${missing.length > 1 ? "s" : ""} to finalise your scheme.`,
      );
    }
    if (selectedOpts.some((o) => o.cost === "high")) {
      next.push(
        "Request quotes from suppliers for premium items early — lead times can be 6–12 weeks.",
      );
    }
    if (!sel["lighting"]) {
      next.push(
        "Lighting is unselected — layer ambient, task, and accent sources for best results.",
      );
    }
    next.push(
      "Book a consultation with a FeelDX designer to review your full materials palette before ordering.",
    );

    return { materials, cost, issues, missing, next };
  }

  return {
    selectedRoom,
    generating,
    aiSummary,
    generateSummary,
    selectRoom,
    toggleOption,
    isSelected,
    selectionsFor,
    hasSelections,
    costLabel,
  };
}
