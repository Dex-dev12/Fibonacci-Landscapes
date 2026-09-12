// Area pages, one per town the Google Business Profile declares.
//
// These exist to match local intent: "landscaper newcastle" draws roughly 960
// searches a month against 520 for the Central Coast, and the site had no page
// addressing either. Every area page has to earn its place on genuinely local
// detail - ground conditions, housing stock, how jobs actually run there - or
// it is a template with a town name swapped in, which is worth nothing.
//
// Facts here are either confirmed about the business or true of the place.
// Nothing invented about the client.

export const AREAS = [
  {
    slug: 'toukley',
    name: 'Toukley',
    region: 'Central Coast',
    postcode: '2263',
    distanceKm: 2,
    lead: 'Two kilometres from our yard, on the sand between Tuggerah Lake and the ocean.',
    intro:
      'Toukley is where we are based, so it is the area we know best and the one we can get to fastest. It also has ground conditions that catch people out: the peninsula between Tuggerah Lake and Budgewoi Lake is sand almost the whole way down, and a lot of the housing stock is original fibro and brick from the sixties and seventies sitting on blocks that have never been properly drained.',
    sections: [
      {
        heading: 'Sand changes how everything is built',
        body: 'Sandy ground drains fast, which sounds like a benefit and mostly is not. It means bases under paving need proper compaction in layers or they keep settling, and it means garden beds lose water and nutrients almost as quickly as they get them. It also means post footings for fencing have to be sized for ground that offers very little resistance. We build for it rather than against it, but it has to be allowed for at the quoting stage, not discovered halfway through.',
      },
      {
        heading: 'Older blocks, newer pools',
        body: 'A lot of Toukley work is a newer pool dropped into an older backyard, where the surround was done cheaply at install time and has moved, stained or turned slippery since. Retrofitting a proper surround around a functioning pool is most of what we do here: protecting the shell and waterline, lifting the old surface, fixing the falls that were wrong from the start, and finishing with something that handles bare feet and salt water.',
      },
      {
        heading: 'Being local actually matters here',
        body: 'Two kilometres means we can get back to a site the same day if the weather turns, check a set-out before a pour without it costing half a morning, and keep plant on site rather than carting it in and out. For staged work or anything that has to be sequenced around a pool being usable, that proximity is worth more than it sounds.',
      },
    ],
    serviceNotes: [
      {
        heading: 'Pool surrounds in Toukley',
        body: 'Salt and sand together are hard on a pool edge. We use dense materials and proper falls so the surround sheds water away from the waterline, and pick surfaces that stay safe underfoot when wet.',
      },
      {
        heading: 'Paving in Toukley',
        body: 'On sand, base preparation is the whole job. We excavate and compact in layers rather than one lift so the finished surface stays level instead of settling into dips over the first couple of summers.',
      },
      {
        heading: 'Retaining walls in Toukley',
        body: 'Sandy ground gives footings less to hold onto, so footings get sized for it and drainage behind the wall is non-negotiable. Most of the Toukley walls we build are terracing to get usable flat space out of a sloping block.',
      },
      {
        heading: 'Fencing in Toukley',
        body: 'Close to the water, salt gets into fixings long before it touches the fence. Appropriate-grade hardware is a small part of the cost and the first thing you notice when it has been skipped.',
      },
    ],
    faqs: [
      {
        q: 'How quickly can you get to a job in Toukley?',
        a: 'We are based in Noraville, about two kilometres away, so Toukley is the fastest area for us to reach. That matters most for staged work and anything that needs checking before a pour.',
      },
      {
        q: 'Does the sandy ground around Toukley cause problems?',
        a: 'It changes how things are built rather than preventing anything. Bases need compacting in layers, footings need sizing for ground that offers little resistance, and garden beds need soil improvement because sand holds almost no water or nutrient. All of it is manageable if it is allowed for up front.',
      },
      {
        q: 'Can you replace a pool surround on an older Toukley property?',
        a: 'Yes, and it is a lot of what we do here. The pool usually stays full while we protect the shell, lift the old surface and correct the falls. Older surrounds were often laid without proper drainage, which is why they have moved or stained.',
      },
    ],
  },

  {
    slug: 'newcastle',
    name: 'Newcastle',
    region: 'Newcastle',
    postcode: '2300',
    distanceKm: 44,
    lead: 'Established blocks, older brick frontages, and access that decides the job.',
    intro:
      'Newcastle is its own city rather than the top of the Central Coast, and the work reflects that. Blocks are generally tighter, a lot of the housing is older brick and weatherboard on established streets, and access is frequently the hardest part of the job before any building starts. We work across Newcastle, Wallsend and Mayfield, and through the Lake Macquarie suburbs between.',
    sections: [
      {
        heading: 'Access is usually the first problem',
        body: 'Inner Newcastle blocks are often narrow, sloped, and reachable only through a side gate or a shared driveway. That decides a lot before anything is built: what plant can physically get in, whether material comes in by machine or by barrow, and how long the job takes. We work this out on site at quoting rather than discovering it on day one, because it has more effect on cost than most people expect.',
      },
      {
        heading: 'Established gardens and older structures',
        body: 'A lot of Newcastle work sits against something that is already there — an existing retaining wall, mature trees with roots through the area you want paved, brick that has moved over decades. Building into that means dealing with what exists rather than clearing and starting fresh, and it is usually what determines whether a job looks integrated or bolted on.',
      },
      {
        heading: 'Stone cladding on brick frontages',
        body: 'Newcastle has a lot of older brick and rendered frontages, pillars and low front walls, and cladding is the fastest way to change how they read without rebuilding. It is one of the services we are best known for. The substrate has to be sound first — loose render, flaking paint and movement cracks all have to be dealt with before stone goes on, because cladding will not hold a wall together.',
      },
      {
        heading: 'Drainage on established blocks',
        body: 'Older Newcastle suburbs were built to older stormwater standards, and a lot of backyards drain to a point that made sense decades ago and does not now. Before we build anything we work out where water actually goes: falls on existing paving, what the downpipes feed into, whether the neighbour is uphill. Getting that right first is the difference between a new surface that stays dry and one that ponds every time it rains properly.',
      },
    ],
    serviceNotes: [
      {
        heading: 'Stone cladding in Newcastle',
        body: 'Sandstone and natural stone over brick and rendered frontages, pillars and feature walls. Substrate preparation first, every time — that is what determines whether cladding stays put or opens at the joints.',
      },
      {
        heading: 'Paving in Newcastle',
        body: 'Tighter blocks mean more cutting, more careful set-out and often barrowed material. Base preparation and falls are the same standard regardless; the difference is how the material gets in.',
      },
      {
        heading: 'Retaining walls in Newcastle',
        body: 'Older suburbs have a lot of existing walls at the end of their life. Replacing one usually means dealing with what it is holding back and getting drainage in behind the new wall that the old one never had.',
      },
      {
        heading: 'Concreting in Newcastle',
        body: 'Driveways and paths on established blocks, where levels have to meet an existing house, garage and street. Falls and control joints are planned around what is already fixed rather than set from scratch.',
      },
    ],
    faqs: [
      {
        q: 'Which Newcastle suburbs do you cover?',
        a: 'Newcastle, Wallsend and Mayfield, along with the Lake Macquarie suburbs on the way through — Charlestown, Boolaroo, Belmont, Seahampton and Morisset among them.',
      },
      {
        q: 'What does a Newcastle job usually involve?',
        a: 'Most of it is building into something established rather than starting from bare ground: an existing wall, mature planting, levels already set by the house and the street. We work out what is staying and what has to change before quoting, because that drives both the method and the cost.',
      },
      {
        q: 'Can you work on a narrow inner-Newcastle block?',
        a: 'Usually yes, but access determines the method and the timeline. We assess at quoting what plant can get in and what has to be barrowed, because that has more effect on the price than the materials do.',
      },
      {
        q: 'Do you do stone cladding on older brick homes?',
        a: 'It is one of the things we are best known for, and older brick and rendered frontages are exactly where it has the most effect. The substrate has to be sound first — we assess that before quoting rather than after starting.',
      },
    ],
  },
]

export const getAreaBySlug = (slug) => AREAS.find((a) => a.slug === slug)

// Named on area pages as also covered, without each getting a page of its own.
// Every one of these is declared on the Google Business Profile.
export const ALSO_SERVICED = [
  'Charmhaven',
  'The Entrance',
  'Gosford',
  'Somersby',
  'Central Mangrove',
  'Morisset',
  'Caves Beach',
  'Belmont',
  'Charlestown',
  'Boolaroo',
  'Seahampton',
  'Wallsend',
  'Mayfield',
]

export const AREAS_PAGE = {
  intro:
    'We work from the Central Coast up through Lake Macquarie to Newcastle. That covers a lot of different ground — sand on the coastal peninsulas, clay further inland, tight established blocks in the older Newcastle suburbs — and the way a job is built changes with it.',
}
