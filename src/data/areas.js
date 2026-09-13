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
{
    slug: 'the-entrance',
    name: 'The Entrance',
    region: 'Central Coast',
    postcode: '2261',
    distanceKm: 10,
    lead: 'Right on the water, where salt gets into everything that is not specified for it.',
    intro:
      'The Entrance sits on the channel where Tuggerah Lake meets the ocean, and that position drives most of what makes building here different. Properties are close enough to open water that salt exposure is constant rather than occasional, blocks near the foreshore are often narrow and deep, and a good proportion of the housing is holiday rental or unit stock where work has to fit around occupancy.',
    sections: [
      {
        heading: 'Salt exposure is constant, not seasonal',
        body: 'Close to open water, salt-laden air is in contact with everything year round. It reaches fixings, fasteners and reinforcement long before it visibly touches a surface, and it is the reason cheap hardware on a coastal job weeps rust down a new fence or wall inside two summers. Specifying appropriate-grade fixings adds very little to a quote and is the single clearest difference between coastal work that holds up and coastal work that does not.',
      },
      {
        heading: 'Narrow blocks and shared access',
        body: 'A lot of foreshore-side blocks are long and narrow with access down one side, sometimes shared. That determines what plant can physically reach the back of the property, and often means material comes in by barrow rather than machine. It is worth establishing before quoting rather than after starting, because it affects the program more than the materials do.',
      },
      {
        heading: 'Holiday and rental properties',
        body: 'A large share of the housing here is let out, either short-stay or permanently. That usually means work has to be scheduled around bookings or tenancies, completed in a defined window, and left genuinely finished rather than tidied up later. We plan those jobs as fixed stages so the property is usable again when it needs to be.',
      },
      {
        heading: 'Materials that cope with bare feet and sand',
        body: 'Paving near the water gets walked on wet, with sand underfoot, constantly. Sand is abrasive and works into joints, so jointing products and surface texture both matter more here than they would a few kilometres inland. We pick finishes that stay safe when wet without being harsh to walk on.',
      },
    ],
    serviceNotes: [
      {
        heading: 'Pool surrounds at The Entrance',
        body: 'Salt from the pool and salt from the air together. Dense materials, proper falls and slip-rated surfaces, with fixings specified for coastal exposure.',
      },
      {
        heading: 'Fencing at The Entrance',
        body: 'This close to open water, hardware grade decides the life of the fence. Glass and aluminium both work well; the fixings behind them are what matter.',
      },
      {
        heading: 'Paving at The Entrance',
        body: 'Surfaces that handle wet feet and sand without becoming slippery or losing their joints. Base preparation still decides whether it stays level.',
      },
      {
        heading: 'Stone cladding at The Entrance',
        body: 'Porous stone near open water benefits from sealing against salt marking. We say which stone actually needs it rather than selling it by default.',
      },
    ],
    faqs: [
      {
        q: 'Does being close to the water change the materials you use?',
        a: 'It changes the fixings more than the surfaces. Salt reaches fasteners and reinforcement first, so appropriate-grade hardware is the difference between work that stays tight and work that rusts through within a couple of summers.',
      },
      {
        q: 'Can you work around a holiday rental booking?',
        a: 'Yes, and a lot of our work here is scheduled that way. We plan those jobs in defined stages so the property is genuinely finished and usable by a set date rather than left part-done between bookings.',
      },
      {
        q: 'Can you get machinery down a narrow side access?',
        a: 'Sometimes. It depends on the width, any gate, and what is overhead. We check it at quoting, because if material has to be barrowed it changes the program significantly.',
      },
    ],
  },

  {
    slug: 'gosford',
    name: 'Gosford',
    region: 'Central Coast',
    postcode: '2250',
    distanceKm: 26,
    lead: 'Steep blocks and established gardens around Brisbane Water.',
    intro:
      'Gosford and the suburbs around Brisbane Water are noticeably steeper than the coastal strip, and that changes what a landscaping job actually is. Where a flat block needs paving and planting, a Gosford block frequently needs level changes built before anything else can happen — retaining, steps, terracing — and the ground underneath is more often clay and rock than the sand we deal with further north.',
    sections: [
      {
        heading: 'Slope decides the whole job',
        body: 'On a sloped block, usable outdoor space has to be created before it can be finished. That normally means terracing: two or more lower retaining walls rather than one tall one, which spreads the load, creates more genuinely flat area, and looks like it belongs to the site instead of being imposed on it. Steps, planting pockets and where the paving meets the walls are worth planning at the same time, because retrofitting them into finished work is expensive.',
      },
      {
        heading: 'Clay and rock instead of sand',
        body: 'The ground around Gosford holds water where coastal sand sheds it, and sandstone shelf is common. Clay expands and contracts with moisture, which is hard on footings and paving bases that were not built for it, and rock can change what excavation costs once you are into it. We establish what is actually there before quoting rather than pricing on an assumption.',
      },
      {
        heading: 'Drainage matters more on a slope',
        body: 'Water on a sloped block is going somewhere whether it has been planned for or not, and usually toward the lowest structure. Every retaining wall we build gets drainage aggregate and an agricultural line behind it taking water to a discharge point, because saturated clay behind a wall is dramatically heavier than dry clay and is the most common reason walls lean or fail.',
      },
      {
        heading: 'Established gardens and mature trees',
        body: 'Gosford has a lot of long-settled gardens with mature trees, and roots run further than people expect. Paving over them without allowing for it either damages the tree or gets lifted by it within a few years. We work out what is staying and build around it properly.',
      },
    ],
    serviceNotes: [
      {
        heading: 'Retaining walls in Gosford',
        body: 'The service that does most of the work here. Block, sandstone or timber depending on height and look, always with drainage aggregate and an ag line behind, and footings sized for what sits above.',
      },
      {
        heading: 'Concreting in Gosford',
        body: 'Driveways on a grade need the right fall, the right reinforcement and a finish with grip. Steep driveways are unforgiving of a slab that was built to a flat-block specification.',
      },
      {
        heading: 'Paving in Gosford',
        body: 'On clay, base preparation has to allow for ground that moves with moisture. Compaction in layers and correct falls matter more here than on stable ground.',
      },
      {
        heading: 'Garden design in Gosford',
        body: 'Terraced beds, planting that holds a slope, and soil improvement for clay that suffocates roots when it is left as found.',
      },
    ],
    faqs: [
      {
        q: 'Do I need approval for a retaining wall in Gosford?',
        a: 'It depends on height, position and what the wall retains, and requirements vary by council. Lower garden walls are often exempt; taller walls, anything near a boundary or a structure, and anything retaining a driveway generally need approval and engineering. We flag it when your job is in that territory.',
      },
      {
        q: 'Can you build on a steep block?',
        a: 'Yes, and it is a lot of what we do around Gosford. Usually it means terracing to create usable flat areas rather than one tall wall, which spreads the load and gives a better result.',
      },
      {
        q: 'Does clay soil cause problems?',
        a: 'It holds water where sand sheds it and moves with moisture, so footings and paving bases have to be built for it. It is entirely workable, but pricing a clay block as if it were sand is how jobs go wrong.',
      },
      {
        q: 'What if we hit rock during excavation?',
        a: 'Sandstone shelf is common around Gosford. We establish what is there before quoting where we can, because hitting unexpected rock is one of the few things that genuinely changes an excavation cost mid-job.',
      },
    ],
  },

  {
    slug: 'belmont',
    name: 'Belmont',
    region: 'Lake Macquarie',
    postcode: '2280',
    distanceKm: 27,
    lead: 'Between the lake and the ocean, on blocks that usually fall toward the water.',
    intro:
      'Belmont sits on the strip between Lake Macquarie and the ocean, and most blocks here have a fall in them — often toward the lake. That makes levels and drainage the first questions rather than an afterthought, and it makes outdoor spaces that step down through a site far more common than a single flat terrace. We work across Belmont and the surrounding Lake Macquarie suburbs.',
    sections: [
      {
        heading: 'Working with a fall toward the water',
        body: 'A block that falls toward the lake is an opportunity and a constraint at once. It usually gives you a view worth building around, and it means every surface has to be set deliberately: where the flat areas sit, how you step between them, and where water goes so it is not simply run onto the neighbour below. Getting levels right at the start is what makes the finished space feel designed rather than stacked.',
      },
      {
        heading: 'Two kinds of ground on one peninsula',
        body: 'Closer to the ocean side the ground is sandy and drains fast; nearer the lake it is often heavier and holds water, and some blocks have both. That changes base preparation, footing design and what planting will actually survive, sometimes within the same property. We check rather than assume, because building the whole site to one specification is how half of it fails.',
      },
      {
        heading: 'Lakeside exposure',
        body: 'Lake Macquarie is saltwater, so lakeside properties get salt exposure as well as ocean-side ones — less severe, but constant. Fixings, fasteners and any porous stone still need specifying for it, particularly on anything structural or anything that will be difficult to get back to later.',
      },
      {
        heading: 'Outdoor spaces that step',
        body: 'On a falling block, the useful result is usually a series of connected levels rather than one large area: a paved terrace off the house, steps down to a lawn or pool, planting holding the changes between. That reads as a single space when the materials and levels are planned together, and as a series of unrelated platforms when they are not.',
      },
    ],
    serviceNotes: [
      {
        heading: 'Retaining walls in Belmont',
        body: 'Creating level ground on a falling block, with drainage behind every wall and footings sized for what sits above. Often terraced rather than one tall wall.',
      },
      {
        heading: 'Pool surrounds in Belmont',
        body: 'Pools on sloping blocks usually sit in a cut, so the surround has to manage both pool water and ground water coming down the slope toward it.',
      },
      {
        heading: 'Paving in Belmont',
        body: 'Falls set deliberately so water leaves the paved area toward a drainage point rather than the lowest neighbour. Base preparation adjusted to sandy or heavier ground as found.',
      },
      {
        heading: 'Stone cladding in Belmont',
        body: 'Cladding on retaining faces and pillars ties new level changes to the rest of the property. Porous stone benefits from sealing this close to saltwater.',
      },
    ],
    faqs: [
      {
        q: 'My block falls toward the lake — is that a problem?',
        a: 'It is normal here and it is workable. It means levels and drainage get decided first rather than last, and the result is usually a set of connected terraces rather than one flat area. Done properly that is a better outcome than a forced single level.',
      },
      {
        q: 'Is the soil sandy or clay around Belmont?',
        a: 'Both, sometimes on the same property. Closer to the ocean it is sandier and drains fast; nearer the lake it is often heavier. We check what is actually there because base preparation and planting both depend on it.',
      },
      {
        q: 'Does the lake cause salt problems like the ocean?',
        a: 'Lake Macquarie is saltwater, so yes, though less severe than open coast. Fixings and porous stone still need specifying for it, especially on structural work or anything awkward to access later.',
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
