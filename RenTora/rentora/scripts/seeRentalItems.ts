import { createClient } from "@supabase/supabase-js";

// 🔐 Use SERVICE ROLE KEY (not anon key)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ✅ YOUR RENTAL DATA (example – add all 50 items)
const rentalItems = [
  // 1. Cameras
  {
    id: "item-1",
    title: "Sony Alpha a7 III Mirrorless Camera",
    category: "Cameras",
    pricePerDay: 45,
    securityDeposit: 500,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-101",
    description:
      "Professional full-frame camera with 4K video capabilities. Includes 28-70mm lens and two batteries.",
  },
  // 2. Bikes
  {
    id: "item-2",
    title: "Specialized Rockhopper Mountain Bike",
    category: "Bikes",
    pricePerDay: 30,
    securityDeposit: 200,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-102",
    description:
      "Perfect for local trails. Lightweight aluminum frame with hydraulic disc brakes. Size Large.",
  }, // 3. Laptops
  {
    id: "item-3",
    title: 'MacBook Pro 16" M2 Max (64GB RAM)',
    category: "Laptops",
    pricePerDay: 85,
    securityDeposit: 1200,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-103",
    description:
      "High-performance workstation for video editing and development. Pre-loaded with Adobe Creative Cloud.",
  },
  {
    id: "item-4",
    title: "DJI Mavic 3 Cine Premium Combo",
    category: "Drones",
    pricePerDay: 120,
    securityDeposit: 1500,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-104",
    description:
      "Professional 5.1K video drone with Apple ProRes support. Includes 3 batteries and ND filter set.",
  },
  // 5. Audio
  {
    id: "item-5",
    title: "Bose QuietComfort Ultra Headphones",
    category: "Audio",
    pricePerDay: 15,
    securityDeposit: 100,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-101",
    description:
      "World-class noise cancellation and spatial audio. Includes charging cable and aux adapter.",
  },
  // 6. Tools
  {
    id: "item-6",
    title: "DeWalt 20V Max Cordless Drill Kit",
    category: "Tools",
    pricePerDay: 20,
    securityDeposit: 150,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-105",
    description:
      "Powerful brushless motor drill. Comes with two batteries, charger, and a set of 20 bits.",
  },
  // 7. Outdoors
  {
    id: "item-7",
    title: "North Face 4-Person Camping Tent",
    category: "Outdoors",
    pricePerDay: 25,
    securityDeposit: 120,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-106",
    description:
      "Easy-to-pitch waterproof tent. Spacious interior with gear lofts and great ventilation.",
  },
  // 8. Electronics (Gaming)
  {
    id: "item-8",
    title: "PlayStation 5 Console (Disc Edition)",
    category: "Electronics",
    pricePerDay: 35,
    securityDeposit: 400,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-102",
    description:
      "Ultra-high speed SSD and immersive DualSense controller. Includes 2 games of your choice.",
  },
  {
    id: "item-9",
    title: "Oculus Quest 2 VR Headset (256GB)",
    category: "Electronics",
    pricePerDay: 25,
    securityDeposit: 250,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-107",
    description:
      "All-in-one VR system. Includes two touch controllers and a carrying case. Pre-loaded with Beat Saber.",
  },
  {
    id: "item-10",
    title: "Canon EOS R5 Body Only",
    category: "Cameras",
    pricePerDay: 95,
    securityDeposit: 1500,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-101",
    description:
      "45MP full-frame mirrorless camera with 8K video recording. Perfect for high-end commercial photography.",
  }, // 11. Outdoors (Water)
  {
    id: "item-11",
    title: "Inflatable 2-Person Kayak Set",
    category: "Outdoors",
    pricePerDay: 40,
    securityDeposit: 150,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-108",
    description:
      "Durable inflatable kayak. Comes with two aluminum paddles, pump, and life vests. Fits in a trunk.",
  },
  // 12. Laptops (Gaming)
  {
    id: "item-12",
    title: "Alienware m15 R7 Gaming Laptop",
    category: "Laptops",
    pricePerDay: 55,
    securityDeposit: 900,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-103",
    description:
      "RTX 3070 Ti, 32GB RAM, 240Hz screen. Can handle any AAA game or heavy 3D rendering tasks.",
  },
  // 13. Bikes (Road)
  {
    id: "item-13",
    title: "Trek Domane AL 2 Road Bike",
    category: "Bikes",
    pricePerDay: 35,
    securityDeposit: 300,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-102",
    description:
      "Endurance road bike, perfect for long rides. Size 56cm. Includes helmet, lock, and repair kit.",
  },
  // 14. Audio (Party)
  {
    id: "item-14",
    title: "JBL PartyBox 310 Portable Speaker",
    category: "Audio",
    pricePerDay: 30,
    securityDeposit: 200,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-109",
    description:
      "Massive sound with built-in light show. Battery lasts 18 hours. Inputs for mic and guitar.",
  },
  // 15. Tools (Saw)
  {
    id: "item-15",
    title: "Makita Circular Saw 18V LXT",
    category: "Tools",
    pricePerDay: 18,
    securityDeposit: 100,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-105",
    description:
      "Cordless circular saw for cutting lumber. Includes 2 batteries, charger, and a rip fence.",
  },
  // 16. Electronics (Projector)
  // 17. Drones (Lightweight)
  {
    id: "item-17",
    title: "DJI Mini 3 Pro",
    category: "Drones",
    pricePerDay: 45,
    securityDeposit: 400,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-104",
    description:
      "Under 249g regulation-friendly drone. Vertical shooting mode perfect for social media content.",
  },
  // 18. Outdoors (Cooler)
  {
    id: "item-19",
    title: "Shure SM7B Vocal Microphone",
    category: "Audio",
    pricePerDay: 25,
    securityDeposit: 300,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-109",
    description:
      "Legendary dynamic microphone for podcasting and voiceovers. Requires an interface with good gain.",
  },
  // 20. Tools (Cleaning)
  {
    id: "item-20",
    title: "Karcher Electric Pressure Washer",
    category: "Tools",
    pricePerDay: 22,
    securityDeposit: 120,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-105",
    description:
      "2000 PSI pressure washer. Ideal for cleaning driveways, decks, and cars. Includes surface cleaner attachment.",
  },
  {
    id: "item-16",
    title: "Anker Nebula Capsule II Projector",
    category: "Electronics",
    pricePerDay: 20,
    securityDeposit: 150,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-110",
    description:
      "Soda-can sized portable projector. Android TV built-in. Great for outdoor movie nights or camping.",
  },
  // 21. Cameras (Action)
  {
    id: "item-21",
    title: "GoPro HERO11 Black",
    category: "Cameras",
    pricePerDay: 25,
    securityDeposit: 300,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-111",
    description:
      "Waterproof action camera with HyperSmooth stabilization. Includes floating hand grip and 64GB card.",
  },
  // 22. Electronics (Tablet)
  {
    id: "item-22",
    title: 'iPad Pro 12.9" (M2 Chip)',
    category: "Electronics",
    pricePerDay: 40,
    securityDeposit: 800,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-103",
    description:
      "Liquid Retina XDR display. Perfect for digital artists. Includes Apple Pencil 2nd Gen.",
  },
  // 23. Outdoors (Snow)
  // 24. Audio (Instrument)
  {
    id: "item-24",
    title: "Fender Player Stratocaster Guitar",
    category: "Audio",
    pricePerDay: 30,
    securityDeposit: 500,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-113",
    description:
      "Classic electric guitar sound. Sunburst finish. Includes soft case and strap. Amp rented separately.",
  },
  // 25. Electronics (Handheld Gaming)
  {
    id: "item-25",
    title: "Nintendo Switch OLED Model",
    category: "Electronics",
    pricePerDay: 20,
    securityDeposit: 300,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-111",
    description:
      "Vibrant 7-inch OLED screen. Includes dock, joy-cons, and Mario Kart 8 Deluxe.",
  },
  // 26. Bikes (Urban)
  {
    id: "item-26",
    title: "Xiaomi Mi Electric Scooter Pro 2",
    category: "Bikes",
    pricePerDay: 25,
    securityDeposit: 200,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-114",
    description:
      "25km range, foldable electric scooter. Great for city commuting. Includes charger and helmet.",
  },
  // 27. Tools (Ladder)
  {
    id: "item-27",
    title: "Little Giant Multi-Position Ladder",
    category: "Tools",
    pricePerDay: 15,
    securityDeposit: 100,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-105",
    description:
      "Versatile aluminum ladder. Can be used as A-frame, extension, or 90-degree ladder. Reach up to 17ft.",
  },
  // 28. Cameras (Lighting)
  {
    id: "item-28",
    title: "Aputure 120d II LED Light Kit",
    category: "Cameras",
    pricePerDay: 40,
    securityDeposit: 600,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-115",
    description:
      "Daylight balanced studio light. Includes Light Dome II softbox, stand, and V-mount battery plate.",
  },
  // 29. Laptops (Ultrabook)

  {
    id: "item-29",
    title: "Dell XPS 13 Plus",
    category: "Laptops",
    pricePerDay: 45,
    securityDeposit: 800,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-116",
    description:
      "Ultra-thin Windows laptop with OLED touch display. Great for business travel and productivity.",
  },

  // 30. Outdoors (Roof Box)
  {
    id: "item-30",
    title: "Thule Motion XT L Roof Box",
    category: "Outdoors",
    pricePerDay: 20,
    securityDeposit: 300,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-106",
    description:
      "16 cu ft rooftop cargo carrier. Dual-side opening. Requires your vehicle to have crossbars installed.",
  },
  // 31. Audio (DJ Gear)
  {
    id: "item-31",
    title: "Pioneer DDJ-1000 SRT DJ Controller",
    category: "Audio",
    pricePerDay: 55,
    securityDeposit: 600,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-117",
    description:
      "4-channel performance DJ controller for Serato DJ Pro. Full-size jog wheels and Magvel Fader.",
  },
  // 32. Cameras (Gimbal)

  {
    id: "item-32",
    title: "DJI RS 3 Pro Gimbal Stabilizer",
    category: "Cameras",
    pricePerDay: 35,
    securityDeposit: 400,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-101",
    description:
      "Professional handheld 3-axis gimbal. Handles payloads up to 4.5kg (perfect for Cinema Cameras).",
  },

  {
    id: "item-34",
    title: "ASUS ZenScreen Portable Monitor",
    category: "Electronics",
    pricePerDay: 15,
    securityDeposit: 150,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-103",
    description:
      "15.6-inch 1080p portable USB-C monitor. Lightweight and perfect for dual-screen work on the go.",
  },
  {
    id: "item-38",
    title: "DJI FPV Combo",
    category: "Drones",
    pricePerDay: 50,
    securityDeposit: 600,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-104",
    description:
      "First-person view drone experience. Includes Goggles V2 and motion controller. 4K/60fps recording.",
  },
  {
    id: "item-35",
    title: "Honda EU2200i Inverter Generator",
    category: "Tools",
    pricePerDay: 45,
    securityDeposit: 500,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-105",
    description:
      "Super quiet portable generator. 2200 watts. Perfect for camping, tailgating, or backup power.",
  },
  {
    id: "item-36",
    title: "Thule T2 Pro XTR Bike Rack",
    category: "Bikes",
    pricePerDay: 20,
    securityDeposit: 250,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-102",
    description:
      "Hitch-mounted bike rack. Fits 2 bikes (up to 60 lbs each). Tool-free installation and locking system.",
  },
  // 37. Laptops (Windows)
  {
    id: "item-37",
    title: "Razer Blade 15 Advanced Model",
    category: "Laptops",
    pricePerDay: 60,
    securityDeposit: 1000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-118",
    description:
      "OLED 4K display, i9 Processor, RTX 3080. The ultimate creative and gaming mobile station.",
  },
  // 38. Drones (FPV)
  {
    id: "item-33",
    title: "Jetboil Flash Cooking System",
    category: "Outdoors",
    pricePerDay: 10,
    securityDeposit: 50,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-106",
    description:
      "Rapid cooking stove for backpacking. Boils water in 100 seconds. Includes fuel canister stabilizer.",
  },
  // 39. Cameras (Lens)
  {
    id: "item-39",
    title: "Sigma 24-70mm f/2.8 DG DN Art (Sony E)",
    category: "Cameras",
    pricePerDay: 25,
    securityDeposit: 400,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-101",
    description:
      "Versatile standard zoom lens with wide aperture. Sharp optics for portraits and landscapes.",
  },
  // 40. Outdoors (Hiking)

  // 41. Audio (Recording)
  {
    id: "item-41",
    title: "Zoom H6 Handy Recorder",
    category: "Audio",
    pricePerDay: 20,
    securityDeposit: 150,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-109",
    description:
      "Portable 6-track recorder with interchangeable mic capsules. Ideal for field recording and podcasts.",
  },
  // 42. Electronics (Connectivity)
  {
    id: "item-42",
    title: "Starlink Roam Kit",
    category: "Electronics",
    pricePerDay: 40,
    securityDeposit: 600,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-119",
    description:
      "High-speed satellite internet anywhere. Perfect for remote work while camping or RVing.",
  },
  // 43. Tools (Tiling)
  {
    id: "item-43",
    title: 'Rubi Manual Tile Cutter 26"',
    category: "Tools",
    pricePerDay: 15,
    securityDeposit: 100,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-105",
    description:
      "Professional tile cutter for ceramic and porcelain. Clean cuts with ergonomic handle.",
  },
  // 44. Bikes (Cargo)
  {
    id: "item-40",
    title: "Osprey Atmos AG 65 Backpack",
    category: "Outdoors",
    pricePerDay: 15,
    securityDeposit: 150,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-106",
    description:
      "Anti-gravity suspension system makes heavy loads feel light. Size Medium. Rain cover included.",
  },
  {
    id: "item-44",
    title: "RadWagon 4 Electric Cargo Bike",
    category: "Bikes",
    pricePerDay: 45,
    securityDeposit: 500,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1200",
    ownerId: "user-114",
    description:
      "Haul kids or groceries. 350 lb capacity. 45+ miles range per charge. Includes running boards.",
  },
  // 45. Laptops (Lightweight)

  {
    id: "item-45",
    title: 'MacBook Air 13" M2 (Midnight)',
    category: "Laptops",
    pricePerDay: 40,
    securityDeposit: 700,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1661961111184-11317b40adb2?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-103",
    description:
      "Ultra-portable, fanless design. incredible battery life. 512GB SSD. Perfect for students.",
  },
  {
    id: "item-47",
    title: "Isle Explorer Inflatable Paddle Board",
    category: "Outdoors",
    pricePerDay: 35,
    securityDeposit: 200,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1517176102644-78550958d7e0?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-108",
    description:
      "Stable touring SUP. 11 feet long. Comes with carbon paddle, pump, and travel bag.",
  },
  {
    id: "item-48",
    title: "Yamaha P-125 Digital Piano",
    category: "Audio",
    pricePerDay: 35,
    securityDeposit: 300,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-113",
    description:
      "88 weighted keys with authentic piano sound. Includes sustain pedal and X-stand.",
  },
  {
    id: "item-50",
    title: "Clarke Floor Sander (Drum)",
    category: "Tools",
    pricePerDay: 50,
    securityDeposit: 400,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-105",
    description:
      "Heavy duty drum sander for refinishing hardwood floors. Sandpaper belts sold separately.",
  },
  {
    id: "item-52",
    title: "Microsoft Surface Pro 9",
    category: "Laptops",
    pricePerDay: 35,
    securityDeposit: 600,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-116",
    description:
      "2-in-1 tablet and laptop. 120Hz touch screen. Includes Signature Keyboard and Slim Pen 2.",
  },
  {
    id: "item-55",
    title: "Rode Wireless GO II Dual Channel",
    category: "Audio",
    pricePerDay: 20,
    securityDeposit: 200,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-109",
    description:
      "Compact wireless microphone system. Includes two transmitters and one receiver. Great for vloggers.",
  },
  {
    id: "item-58",
    title: "Celestron NexStar 8SE Telescope",
    category: "Outdoors",
    pricePerDay: 60,
    securityDeposit: 800,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-122",
    description:
      "Computerized telescope. Auto-aligns to track planets and stars. Great for viewing Saturn or Jupiter.",
  },
  {
    id: "item-60",
    title: "Epson FastFoto FF-680W Photo Scanner",
    category: "Electronics",
    pricePerDay: 30,
    securityDeposit: 250,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1612033448550-9d6f9c17f07d?auto=format&fit=crop&q=80&w=800",
    ownerId: "user-110",
    description:
      "High-speed photo scanner. Digitizes 1 photo per second. Perfect for archiving old family albums.",
  },
];

async function seedRentalItems() {
  console.log("🌱 Seeding rental items...");

  const { error } = await supabase.from("rental_items").insert(rentalItems);

  if (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }

  console.log("✅ Rental items seeded successfully!");
  process.exit(0);
}

seedRentalItems();
